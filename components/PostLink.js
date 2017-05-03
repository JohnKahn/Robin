import Link from 'next/link';

export default (props) => (
  <li>
    <Link as={`/post/${props.slug}`} href={`/post?slug=${props.slug}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
