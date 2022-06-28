import { gql } from "@apollo/client";
import { CHARACTERS_CORE } from "../fragments/characters";

export const GET_SUGGESTED_CHARACTERS = gql`
    query characters($page: Int, $filter: FilterCharacter){
        characters(page: $page, filter:$filter){
           results{
               id
               name
               image 
           }
        }
    }
`;