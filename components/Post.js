import moment from 'moment';
import { gql, graphql } from 'react-apollo';
import withData from '../lib/withData';

const Post = (props) => {
  const {Post} = props.data;

  return (
    <div>
      {Post ? (
        <div>
          <h1 style={{
            marginBottom: 0
          }}>{Post.title}</h1>
          <small>{moment(Post.createdAt).format('MMM Do, YYYY')}</small>
          <p>{Post.text}</p>
        </div>
      ) : (
        <div>
          <h1 style={{
            marginBottom: 0
          }}><img src='http://placehold.it/350x30/cccccc/cccccc' /></h1>
          <small><img src='http://placehold.it/100x10/cccccc/cccccc' /></small>
          <p><img src='http://placehold.it/250x20/cccccc/cccccc' /><br />
          <img src='http://placehold.it/300x20/cccccc/cccccc' /></p>
        </div>
      )}
    </div>
  )
}

const CurrentPostQuery = gql`
  query CurrentPost($slug: String!) {
    Post(slug: $slug) {
      id
      slug
      title
      text
      createdAt
    }
  }
`;

export default withData(graphql(CurrentPostQuery)(Post));
