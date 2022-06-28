import { gql } from "@apollo/client";

export const CHARACTERS_CORE = gql`
    fragment charactersCoreFields on Character {
            id
            name
            status
            species
            image
    }
`;