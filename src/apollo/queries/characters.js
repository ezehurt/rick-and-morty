import { gql } from "@apollo/client";
import { CHARACTERS_CORE } from "../fragments/characters";

export const GET_SUGGESTED_CHARACTERS = gql`
    ${CHARACTERS_CORE}
    query characters($page: Int, $filter: FilterCharacter){
        characters(page: $page, filter:$filter){
           results{
             ...charactersCoreFields
           }
        }
    }
`;

export const SEARCH_CHARACTERS = gql`
    ${CHARACTERS_CORE}
    query characters($page: Int, $filter: FilterCharacter){
        characters(page: $page, filter:$filter){
           results{
             ...charactersCoreFields
           }
        }
    }
`;