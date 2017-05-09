import { gql, graphql } from 'react-apollo';
import Home from './View';

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

export default graphql(UserQuery, { options: { fetchPolicy: 'network-only' } })(Home);
