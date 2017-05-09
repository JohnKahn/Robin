import { gql, graphql } from 'react-apollo';
import Login from './View';

const SigninUser = gql`
  mutation ($email: String!, $password: String!) {
    signinUser(email: {
      email: $email,
      password: $password
    }) {
      token
    }
  }
`;

const UserQuery = gql`
  query {
    user {
      id
      name
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export default graphql(UserQuery, { options: { fetchPolicy: 'network-only' } })(
    graphql(SigninUser, { name: 'signinUser' })(
      Login
    )
  );
