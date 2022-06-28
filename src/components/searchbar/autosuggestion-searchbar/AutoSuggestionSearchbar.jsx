import React, { useEffect, useRef, useState } from 'react'
import classNames from "classnames";
import AutoCompleteForm from '../../../widget/autocomplete-form/AutoCompleteForm';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeTerm, termSelector } from '../../../state/search';
import { useLazyQuery } from "@apollo/client";
import { GET_SUGGESTED_CHARACTERS } from '../../../apollo/queries/characters';
import { stripTags } from '../../../common/utils/stringUtils';
import { generateSearchString } from '../../../common/utils/urlUtils';
import Suggestions from '../../../widget/suggestions/Suggestions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AutoSuggestionSearchbar({
    className,
    initialTerm,
    placeholder,
    onClear = (f) => f,
}) {
    const [suggestions, setSuggestions] = useState(false);
    const [selectedValue, setSelectedValue] = useState(false);

    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchTerm = useSelector(termSelector);
    const wrapperRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFocus = () => {
        setSelectedValue(false);
        if (searchTerm) return false;
    };

    const [getSuggestions, { data: suggestionData }] =
        useLazyQuery(GET_SUGGESTED_CHARACTERS);

    function handleSetValue(v) {
        setShowSuggestions(false);
        dispatch(onChangeTerm(stripTags(v)));
    }

    const handleSetSuggestedValue = (v) => {
        setShowSuggestions(false);
        setSelectedValue(stripTags(v));
        dispatch(onChangeTerm(stripTags(v)));
        handleSubmit(v);
    }
    function handleChange(v) {
        handleSetValue(v);
        if (v && v.length < 3) return;
        getSuggestions({
            fetchPolicy: "no-cache",
            variables: {
                filter: {
                    name: v
                }
            },
        });
    }

    useEffect(() => {
        const checkKeyboardActions = (e) => {
            if (e.key === "Enter") {
                if (
                    searchTerm !== "" &&
                    searchTerm &&
                    searchTerm !== initialTerm
                ) {
                    handleSubmit(searchTerm);
                }
                if (selectedValue) {
                    handleSubmit(selectedValue);
                    return;
                }
            }
        };
        window.addEventListener("keyup", checkKeyboardActions);
        if (!selectedValue && searchTerm?.length > 2 && suggestionData && suggestionData.characters.results.length > 0) {
            setSuggestions(suggestionData.characters.results)
            setShowSuggestions(true);
        }
        return () => {
            window.removeEventListener("keyup", checkKeyboardActions);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, suggestionData]);

    const handleSubmit = (searchTerm) => {
        const newURL = generateSearchString({
            context:"",
            term: searchTerm
           
        });
        setShowSuggestions(false);
        history.push(newURL);
    }

    return (
        <div
            className={classNames(
                "autosuggestion-searchbar",
                className
            )}
        >
            <div className="autosuggestion-searchbar__background"></div>
            <div className="autosuggestion-searchbar__wrapper" ref={wrapperRef}>
                <div className="autosuggestion-searchbar__form">
                    <AutoCompleteForm
                        onFocus={handleFocus}
                        onChange={handleChange}
                        onBlur={(f) => f}
                        onSubmit={handleSubmit}
                        value={searchTerm}
                        setValue={handleSetValue}
                        onClear={onClear}
                        placeholder={placeholder}
                    />
                    {showSuggestions && (
                        <Suggestions
                            suggestions={suggestions}
                            isOpen={showSuggestions}
                            subtitle={"Suggested terms"}
                            onChange={(f) => f}
                            onClick={handleSetSuggestedValue}
                            icon="search"
                            highlight={searchTerm}
                            initialySelected={-1}
                        />
                    )}
                </div>
            </div>

        </div>
    )
}

export default AutoSuggestionSearchbar