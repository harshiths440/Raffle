"use client";
import { gql, DocumentNode } from "@apollo/client";

export const REGISTER_USER: DocumentNode = gql`
  mutation RegisterUser(
    $name: String!
    $password: String!
    $email: String!
    $phone_number: Float!
    $gender: String!
    
  ) {
    register(
      registerDto: {
        name: $name
        email: $email
        password: $password
        phone_number: $phone_number
        gender: $gender
      }
    ) {
      activation_token
    }
  }
`;