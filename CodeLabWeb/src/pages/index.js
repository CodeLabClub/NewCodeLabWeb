import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { VideoRow } from './projects/index'
const videos = require('../../static/video_config.json')

const features = [
  {
    imageUrl: 'img/undraw_docusaurus_mountain.svg'
  },
  {
    imageUrl: 'img/undraw_docusaurus_tree.svg'
  },
  {
    imageUrl: 'img/undraw_docusaurus_react.svg'
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      // title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={clsx(styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">CodeLab</h1>
          <p className="hero__subtitle">迎接你的5种方式</p>
          <VideoRow videos={videos['首页']}/>
          <p className="text--right">
            <Link to="/projects"><button className="button button--info">去作品管看看</button></Link>
          </p>
        </div>
      </div>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
      <div className={clsx('container', styles.start)}>
        <p className="hero__subtitle text--center">从这里开始</p>
        <iframe className={styles.iframe} src="https://scratch3v3.codelab.club/?sb3url=https://adapter.codelab.club/sb3/Pong_Starter.sb3"/>
        <p className="text--right margin-top--lg">
            <Link to="/"><button className="button button--info margin-right--sm">我先逛逛</button></Link>
            <a href="https://baidu.com" target="_blank"><button className="button button--info">现在开始创作</button></a>
        </p>
      </div>
      <div>
        <p className="hero__subtitle text--center">延展至广阔可编程空间</p>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
              <p className="text--right margin-top--lg">
                <Link to="/"><button className="button button--info">如何实现</button></Link>
              </p>
            </div>
          </section>
        )}
      </div>
      <div className="padding-top--lg padding-bottom--lg">
        <div className="container text--center padding-top--lg" style={{background: 'rgba(0,0,0,0.2)'}}>
          <p className="hero__subtitle">XXXXXX</p>
          <p className="text--center padding-top--lg padding-bottom--lg">
            <Link to="/"><button className="button button--info">button</button></Link>
          </p>
        </div>
      </div>
      <div className="padding-top--lg padding-bottom--lg">
        <div className="container text--center padding-top--lg margin-top--lg margin-bottom--lg" style={{background: 'rgba(0,0,0,0.2)'}}>
          <p className="hero__subtitle">XXXXXX</p>
          <p className="text--center padding-top--lg padding-bottom--lg">
            <Link to="/"><button className="button button--info">button</button></Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
