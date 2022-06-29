import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { SEARCH_CHARACTERS } from '../../../apollo/queries/characters';
import { decodeSearchParams } from '../../../common/utils/urlUtils';
import { onChangeTerm, paginationInfoSelector, setPaginationInfo } from '../../../state/search';
import AutoSuggestionSearchbar from '../../searchbar/autosuggestion-searchbar/AutoSuggestionSearchbar';
import CharacterCard from '../../character-card/CharacterCard';
import Spinner from '../../../widget/spinner/Spinner'
import Message from '../../layout/message/Message';
import { WELCOME_IMG } from '../../../common/constans/images';
import ResultHeader from './result-header/ResultHeader';



function PageSearch() {

    const intl = useIntl();
    const location = useLocation();
    const dispatch = useDispatch();
    const params = useParams();
    const paginationInfo = useSelector(paginationInfoSelector)

    const {
        term
    } = decodeSearchParams(location.search);

    useEffect(() => {
        if (term) {
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

    const [getCharacters, { data, loading }] = useLazyQuery(SEARCH_CHARACTERS);


    useEffect(() => {
        if (data) {
            dispatch(setPaginationInfo(data.characters?.info));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <main className='page-search'>
            <div className='page-search__header'>
                <AutoSuggestionSearchbar
                    placeholder={intl.formatMessage({
                        id: "autocomplete.placeholder",
                    })}
                />
            </div>
            {data && paginationInfo &&
                <div className='page-search__subheader'>
                    <ResultHeader amount={paginationInfo?.count} />
                </div>
            }
            {data && data.characters.results.length > 0 && <div className='page-search__result-list'>
                {data.characters.results.map((character) => (
                    <CharacterCard
                        key={character.id}
                        title={character.name}
                        imgAlt={`img-${character.name}`}
                        imgSrc={character.image}
                        status={character.status}
                        specie={character.species}
                        firstSeenIn={character.origin.name}
                        lastKnowLocation={character.location.name}
                    />
                ))}
            </div>}
            {data && data.characters.results.length === 0 &&
                <div className='page-search__centered-content'>
                    <Message
                        imgSrc={WELCOME_IMG}
                        imgAlt="welcome-message"
                        title={intl.formatMessage({ id: "no-result.title" })}
                        message={intl.formatMessage({ id: "no-result.message" }, { searchTerm: term })} /></div>
            }
            {!data && !loading && <div className='page-search__centered-content'>
                <Message
                    imgSrc={WELCOME_IMG}
                    imgAlt="welcome-message"
                    title={intl.formatMessage({ id: "welcome.title" })}
                    message={intl.formatMessage({ id: "welcome.message" })} /></div>}
            {loading && <Spinner className='page-search__centered-content' />}
        </main>
    )
}

export default PageSearch