import { gql } from '@apollo/client'

export const SiGN_UP_MUTATION = gql`
    mutation createAccount($companyName: String!,  $email: String!, $name: String!, $password: String! ) {
        signUp(signUpData:{
            companyName: $companyName,
            email: $email,
            name: $name,
            password: $password
        })
    }
`