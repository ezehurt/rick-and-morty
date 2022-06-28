import { gql } from "@apollo/client";
import { CHARACTERS_CORE, CHARACTERS_LOCATION_FIELDS, CHARACTERS_SUGGESTIONS_FIELDS } from "../fragments/characters";

export const GET_SUGGESTED_CHARACTERS = gql`
    ${CHARACTERS_SUGGESTIONS_FIELDS}
    query characters($page: Int, $filter: FilterCharacter){
        characters(page: $page, filter:$filter){
           results{
             ...characterSuggestionFields
           }
        }
    }
`;

export const SEARCH_CHARACTERS = gql`
    ${CHARACTERS_CORE}
    ${CHARACTERS_LOCATION_FIELDS}
    query characters($page: Int, $filter: FilterCharacter){
        characters(page: $page, filter:$filter){
           results{
             ...characterCoreFields,
             origin {
              ...characterLocationFields
             }
             location {
              ...characterLocationFields
             }
           }
        }
    }
`;