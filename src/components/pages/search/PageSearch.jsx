import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { SEARCH_CHARACTERS } from '../../../apollo/queries/characters';
import { decodeSearchParams } from '../../../common/utils/urlUtils';
import { onChangeTerm } from '../../../state/search';
import AutoSuggestionSearchbar from '../../searchbar/autosuggestion-searchbar/AutoSuggestionSearchbar'



function PageSearch() {
    
    const intl = useIntl();
    const location = useLocation();
    const dispatch = useDispatch();
    const params = useParams();

    const {
        term
    } = decodeSearchParams(location.search);

    useEffect(() => {
        console.log("term",term)
        if(term){
            getCharacters({
                fetchPolicy: "no-cache",
                variables: {
                    filter: {
                        name: term
                    }
                },
            });
        }
        dispatch(onChangeTerm(term));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, term]);

    const [getCharacters, { data }] = useLazyQuery(SEARCH_CHARACTERS);


    useEffect(() => {
        console.log("data", data)
         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [data]);


    return (
        <main className='page-search'>
            <div className='page-search__header'>
                <AutoSuggestionSearchbar
                    className="page-search__subheader"
                    placeholder={intl.formatMessage({
                        id: "autocomplete.placeholder",
                    })}
                />
            </div>
        </main>
    )
}

export default PageSearch