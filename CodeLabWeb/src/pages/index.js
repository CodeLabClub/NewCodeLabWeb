import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { VideoRow } from './projects/index';
const videos = require('../../static/video_config.json')

const features = [
  {
    imageUrl: 'img/收到速来聚头.PNG'
  },
  {
    imageUrl: 'img/收到速来聚头.PNG'
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
      <div className={clsx(styles.welcome)}>
        <video poster="/img/2.PNG">
          <source src="https://adapter.codelab.club/video/1593410656522462.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className={clsx(styles.triangle_up)}></div>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx(styles.herotitle)}>{siteConfig.title}</h1>
          <p className={clsx(styles.herosubtitle)}>{siteConfig.tagline}</p>
          <p className={clsx(styles.hero_p)}>我们致力于构建包容孩子自由与想象的创作环境</p>
        </div>
      </div>
      <div className={clsx(styles.triangle_top)}></div>

      <div className={clsx('container', styles.start)}>
        <p className={clsx(styles.subtitle)}>从Scratch开始</p>
        <iframe className={styles.iframe} src="https://scratch3v3.codelab.club/?sb3url=https://adapter.codelab.club/sb3/Pong_Starter.sb3"/>
        <p className="text--right margin-top--lg">
            <a href="https://scratch.codelab.club/projects/editor/"><button className={clsx(styles.button_bottom)}>立即开始我的Scratch创作</button></a>
            <a href="https://scratch.codelab.club" target="_blank"><button className={clsx(styles.button_bottom)}>先去看看大家的作品</button></a>
        </p>
      </div>
      <div className="padding-top--lg padding-bottom--lg">
        <p className={clsx(styles.subtitle)}>延展至可编程空间</p>
        <div className="container text--center padding-top--lg" style={{background: 'white'}}>
          <video poster="/img/CodeLab玩具总动员.JPG" >
            <source src="https://adapter.codelab.club/video/1593410656522462.mp4" type="video/mp4"/>
          </video>
          <p className="text--right margin-top--lg">
            <Link to="/projects"><button className="button button--info">更多演示案例</button></Link>
            <Link to="/docs"><button className="button button--info">阅读技术文档</button></Link>
          </p>
        </div>
      </div>
      <div class='container'>
        <p className={clsx(styles.subtitle)}>正在发生</p>
        <div class='row'>
          <div class= 'col'>
            <article class={clsx(styles.box)}>
              <a class={clsx(styles.imagefeature)} href="https://www.codelab.club/blog/codelab-neverland-online/">
                <img src="/img/play.png" alt = "CodeLab直播"></img>
              </a>
              <h3>
                <a href="https://www.codelab.club/blog/codelab-neverland-online/">CodeLab直播</a>
              </h3>
              <p>本周五晚不见不散</p>
            </article>
          </div>
          <div class= 'col'>
            <article class={clsx(styles.box)}>
              <a class={clsx(styles.imagefeature)} href="https://www.codelab.club/blog/codelab-neverland-online/">
                <img src="/img/play.png" alt = "CodeLab直播"></img>
              </a>
              <h3>
                <a href="https://www.codelab.club/blog/codelab-neverland-online/">CodeLab直播</a>
              </h3>
              <p>本周五晚不见不散</p>
            </article>
          </div>
          <div class= 'col'>
            <article class={clsx(styles.box)}>
              <a class={clsx(styles.imagefeature)} href="https://www.codelab.club/blog/codelab-neverland-online/">
                <img src="/img/play.png" alt = "CodeLab直播"></img>
              </a>
              <h3>
                <a href="https://www.codelab.club/blog/codelab-neverland-online/">CodeLab直播</a>
              </h3>
              <p>本周五晚不见不散</p>
            </article>
          </div>
        </div>
      </div>
      <div className={clsx(styles.triangle_bottom)}></div>
      <div className={clsx(styles.bottom_sec)}>
        <h1>支持CodeLab</h1> 
        <p>说明文字</p>
      </div>
  
    </Layout>
  );
}

export default Home;
