import React from 'react'
import { useIntl } from 'react-intl'
import AutoSuggestionSearchbar from '../../searchbar/autosuggestion-searchbar/AutoSuggestionSearchbar'



function PageSearch() {
    
    const intl = useIntl();

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