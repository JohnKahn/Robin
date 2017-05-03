import Link from 'next/link';
import { gql, graphql } from 'react-apollo';
import withData from '../lib/withData';

import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const Index = (props) => {
  const { allPosts } = props.data;

  const Posts = allPosts ? allPosts.map(p => (
    <li key={`post-${p.slug}`}>
      <Link href={`/post?slug=${p.slug}`} as={`/post/${p.slug}`}>
        <a>{p.title}</a>
      </Link>
    </li>
  )) : [];

  return (
    <Layout>
      <h1>Next Blog</h1>
      {Posts.length > 0 ? (
        <ul>
          {Posts}
        </ul>
      ) : (
        <ul>
          <li>
            <img src='http://placehold.it/250x10/cccccc/cccccc' />
          </li>
          <li>
            <img src='http://placehold.it/200x10/cccccc/cccccc' />
          </li>
          <li>
            <img src='http://placehold.it/300x10/cccccc/cccccc' />
          </li>
        </ul>
      )}
    </Layout>
  )
};

const PostQuery = gql`query {
  allPosts {
    id,
    slug,
    title,
    text,
    createdAt
  }
}`;

export default withData(graphql(PostQuery)(Index));
