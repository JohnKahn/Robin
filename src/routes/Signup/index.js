import { gql, graphql } from 'react-apollo';
import Signup from './View';

const CreateUser = gql`
  mutation ($email: String!, $password: String!, $name: String!, $username: String!) {
    createUser(
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      },
      name: $name,
      username: $username
    ) {
      id
    }
  }
`;

const SignInUser = gql`
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

export default graphql(CreateUser, { name: 'createUser' })(
  graphql(UserQuery, { options: { fetchPolicy: 'network-only' } })(
    graphql(SignInUser, { name: 'signinUser' })(
      Signup
    )
  )
);
