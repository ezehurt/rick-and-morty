import { gql } from "@apollo/client";

export const CHARACTERS_CORE = gql`
    fragment characterCoreFields on Character {
            id
            name
            status
            species
            image
    }
`;

export const CHARACTERS_SUGGESTIONS_FIELDS = gql`
    fragment characterSuggestionFields on Character {
            id
            name
            image
    }
`;

export const CHARACTERS_LOCATION_FIELDS = gql`
    fragment characterLocationFields on Location {
            id
            name
    }
`;