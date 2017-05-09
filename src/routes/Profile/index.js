import { gql, graphql } from 'react-apollo';
import Profile from './View';

const UserQuery = gql`
  query {
    user {
      id
      name
      username
      email
      profileImage
      createdAt
      updatedAt
    }
  }
`;

export default graphql(UserQuery, { options: { fetchPolicy: 'network-only' } })(Profile);
