import Layout from '../components/Layout';
import { gql, graphql } from 'react-apollo';
import withData from '../lib/withData';
import Post from '../components/Post';

export default (props) => (
  <Layout>
    <Post slug={props.url.query.slug} />
  </Layout>
);
