import Head from 'next/head';
import Header from './Header';

export default (props) => (
  <div>
    <Head>
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      <link rel='stylesheet' type='text/css' href='https://unpkg.com/tachyons/css/tachyons.min.css' />
    </Head>

    <Header />
    <div className='mw5 mw7-ns center bg-light-gray pa3 ph5-ns'>
      {props.children}
    </div>
  </div>
);
