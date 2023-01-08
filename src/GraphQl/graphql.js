import { gql } from "@apollo/client";
const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      token_info {
        access_token
        refresh_token
      }
    }
  }
`;
export default LOGIN;
export const FORGET = gql`
  mutation ($email: String!) {
    resetemail(email: $email)
  }
`;
export const RESET = gql`
  mutation ($id: ID!, $password: String!) {
    changepassword(id: $id, password: $password) {
      message
    }
  }
`;
export const DELETE = gql`
  mutation ($id: ID!) {
    deleterole(id: $id) {
      id
    }
  }
`;
export const LOGOUT = gql`
  mutation {
    logout {
      message
    }
  }
`;
export const  ADDRESTURANT= gql`
  mutation ($address: String!, $name: String!) {
    addresturant(address: $address, name: $name) {
      message
    }
  }
`;
export const ADDCURRENY= gql`
  mutation ($code: String!, $name_en: String!, $name_ar: String!, $precent_value_in_dular: Float!) {
    addcurreny(code: $code, name_en: $name_en, name_ar: $name_ar, precent_value_in_dular: $precent_value_in_dular) {
      message
    }
  }
`;
export const ADDEXPERIECE= gql`
  mutation ($year: Int!, $benifit: Int!, $vacation: Int!) {
    addexperiece(year: $year, benifit: $benifit, vacation: $vacation) {
      message
    }
  }
`;
export const ADDGOOD= gql`
  mutation ($name_en: String!, $name_ar: String!) {
    addgood(name_en: $name_en, name_ar: $name_ar) {
      message
    }
  }
`;
export const CREATEADMIN= gql`
  mutation ($email: String!, $password: String! , $role_id: ID! , $employee_id: ID!) {
    createadmin(email: $email, password: $password , role_id: $role_id , employee_id: $employee_id) {
      message
    }
  }
`;