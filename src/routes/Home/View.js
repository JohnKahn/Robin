import React from 'react';

import Layout from '../../components/Layout';
import Section from './components/Section';

class Home extends React.Component {
  render() {
    const listItemClasses = 'pv1 pv3';
    const listNumClasses = 'w-10 f1 f-subheadline-l b dib v-mid';
    const listTextClasses = 'w-90 dib v-mid f4 f2-ns';

    const { loading } = this.props.data;

    return (
      <Layout {...this.props} hero headline='Cooperative Stories' subheadline='Stories written in round-robin format'>
        <Section headline='How it works' className='bg-black-20 navy'>
          <div className={listItemClasses} >
            <div className={listNumClasses}>
              1
          </div>
            <div className={listTextClasses}>
              Someone writes the first part of a story
          </div>
          </div>
          <div className={listItemClasses} >
            <div className={listNumClasses}>
              2
          </div>
            <div className={listTextClasses}>
              Users have 24 hours to write a second part
          </div>
          </div>
          <div className={listItemClasses} >
            <div className={listNumClasses}>
              3
          </div>
            <div className={listTextClasses}>
              Users vote on their favorite version
          </div>
          </div>
          <div className={listItemClasses} >
            <div className={listNumClasses}>
              4
          </div>
            <div className={listTextClasses}>
              Repeat until the users vote to end to story
          </div>
          </div>
        </Section>
        <Section headline='About Round Robin' className='bg-washed-red f2 navy'>
          <p className='f3 f2-ns'>This was an experiment I was working on. It was a way for me to practice universal javascript apps. Please send me any feedback so I can keep improving it.</p>
        </Section>
      </Layout>
    );
  }
}

export default Home;
