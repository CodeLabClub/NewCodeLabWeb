import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Video from '../components/video';
import { VideoRow } from './projects/index';
const videos = require('../../static/video_config.json')

const features = [
  {
    imageUrl: 'img/Play.PNG',
    title:<>Scratch 社区</>,
  },
  {
    imageUrl: 'img/Play.PNG',
    title:<>CodeLab 论坛</>,
  },
  {
    imageUrl: 'img/Play.PNG',
    title:<>博客圈</>,
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
       <h1 className={clsx(styles.helloWorld)}>Hello, world!</h1>
       <h1 className={clsx(styles.story)}>我们想讲一个<br></br>好故事</h1>
      </div>


        {/*}
        <div className={clsx("container text--center padding-top--md padding-bottom--md",styles.helloWorld)}>
          <Video src="https://adapter.codelab.club/video/1593410656522462.mp4"/>
        </div>
        <div className={clsx("container",styles.slogan)}>
          <svg width="100%" height="10%" viewBox="0 0 1108 120" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" >
            <path id="path">
		          <animate attributeName="d" from="m114,110 h0" to="m114,110 h1100" dur="3.5s" begin="0s" repeatCount="indefinite"/>
	          </path>
	          <text  font-size="40px"  fill='#ffe7b3'>
		          <textPath xlinkHref="#path">传递编程的乐趣，鼓励孩子成为数字时代的创作者
              </textPath>
	          </text>
          </svg>
        </div>
          */}


      <div className={clsx(styles.triangle_up1)}></div>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx(styles.herotitle)}>{siteConfig.title}</h1>
        </div>
      </div>


      <div className={clsx(styles.heroVideo)}>
        {/*<div className={clsx(styles.triangle_up2)}></div>*/}
        <div className={clsx(styles.autoVideo)}>
          <video preload="auto" loop muted autoPlay playsInline className={styles.autoVideoPlayer}>
            <source src="/img/Play.mp4" type="video/mp4"></source>
          </video>
          <div className={clsx(styles.videoOverlay)}></div>
        </div>
        <div className={clsx(styles.videoContentSec)}>
          <div className={clsx(styles.videoContent)}>
            <p className={clsx(styles.mission)}>传递编程的乐趣<br></br>鼓励孩子成为数字时代的创作者</p>
          </div>
        </div>
      </div>


      {/*
      <div className={clsx("container","col",styles.chapter)}>
        <p className={clsx(styles.number)}>1</p>
        <div className={clsx(styles.hero_p)}>构建一个创作环境</div>
      </div>
        */}

      <div className={clsx(styles.env)}>
        <div className={styles.yellowLine}></div>
        <div className={clsx("container",styles.start)}>
          <p className={clsx(styles.subtitle1)}>让我们从 Scratch 开始</p>
          <p className={clsx(styles.subtitleNote)}>色彩、卡通、音乐、运动、交互全在这里，由此进入动画故事、交互游戏、程序软件的幕后创作</p>
          <iframe className={styles.iframe} src="https://scratch3v3.codelab.club/?sb3url=https://adapter.codelab.club/sb3/Pong_Starter.sb3"/>
          <p className="text--center margin-top--lg">
            <a href="https://scratch.codelab.club/projects/editor/"><button className="button button--info margin-bottom--md">立即开始 Scratch 创作</button></a>
            <a href="https://scratch.codelab.club" target="_blank"><button className="button button--info margin-bottom--md">先去看看大家的作品</button></a>
          </p>

        <div className="padding-top--lg padding-bottom--lg">
          <p className={clsx(styles.subtitle1)}>延申至可编程空间</p>
          <p className={clsx(styles.subtitleNote)}>在 CodeLab Adapter 的驱动下，实现软件、硬件，虚拟动画角色、物理实体、AI 的互动联通</p>
          <div className={clsx("container text--center padding-top--md padding-bottom--md",styles.spacevideo)} style={{background: 'white', fontSize: 0}}>
            <Video src="/img/dynamictable.mp4"   />
          </div>
        </div>
          <div className="container padding-top-lg">
            <p className="text--center margin-top--lg">
              {/*
              <Link to="/projects"><button className="button button--info margin-bottom--md">更多演示案例</button></Link>
              <Link to="/docs"><button className="button button--info margin-bottom--md">阅读技术文档</button></Link>
              */}
              <a href="https://codelab-adapter-docs.codelab.club/user_guide/gallery/"><button className="button button--info margin-bottom--md">更多演示案例</button></a>
              <a href="https://codelab-adapter-docs.codelab.club/"><button className="button button--info margin-bottom--md">阅读技术文档</button></a >
            </p>
          </div>
        </div>
      </div>


      <div className={clsx( styles.activity)}>
        <div className={clsx("container", styles.activity)}>
          <p className={clsx(styles.subtitle1)}>空间内，以下正发生</p>
          <div className='row'>
            <div className= 'col'>
              <article className={clsx(styles.box)}>
                <a className={clsx(styles.imagefeature)} href="https://mp.weixin.qq.com/s/1IJIHCKaqZeJki8hWiAKuw">
                  <img src="/img/暑期课程.png" alt = "Scratch编程暑期公益课程"></img>
                </a>
                <h3>
                  <a href="https://mp.weixin.qq.com/s/1IJIHCKaqZeJki8hWiAKuw">Scratch编程暑期公益课程</a>
                </h3>
                <p>暑期重头，本周开始</p>
              </article>
            </div>
            <div className= 'col'>
              <article className={clsx(styles.box)}>
                <a className={clsx(styles.imagefeature)} href="https://www.codelab.club/blog/3.4.1-release/">
                  <img src="/img/adapter3.4.png" alt = "CodeLab Adapter 3.4 发布"></img>
                </a>
                <h3>
                  <a href="https://www.codelab.club/blog/3.4.1-release/">CodeLab Adapter 3.4 发布</a>
                </h3>
                <p>从此完整（full）、精简（lite）任君选</p>
              </article>
            </div>
          <div className= 'col'>
            <article className={clsx(styles.box)}>
              <a className={clsx(styles.imagefeature)} href="https://www.codelab.club/blog/david-p1/">
                <img src="/img/寻宝记.png" alt = "CodeLab冒险记"></img>
              </a>
              <h3>
                <a href="https://www.codelab.club/blog/david-p1/">CodeLab 冒险记（一）</a>
              </h3>
              <p>以实习报告为始，且看何为终</p>
            </article>
          </div>
        </div>
      </div>



        <div className="container">
          <p className={clsx(styles.subtitle2)}>联结同伴，自由松散</p>
          {/*
          <div className={clsx("container","col",styles.chapter)}>
            <p className={clsx(styles.number)}>2</p>
            <div className={clsx(styles.hero_p)}>维护一个互助社区</div>
          </div>
            */}

          <div className={clsx("container", "row", styles.community)}>

            <div className={clsx(styles.circle1)}>
              <a href="https://scratch.codelab.club/explore/projects/all/"><div>Scratch 社区</div></a>
            </div>
            <div className={clsx(styles.plus1, 'col', 'col--1')}>
              <p>+</p>
            </div>
            <div className={clsx(styles.circle2)}>
              <a href="https://scratch.codelab.club/explore/projects/all/"><div>CodeLab 论坛</div></a>
            </div>
            <div className={clsx(styles.plus2, 'col', 'col--1')}>
              <p>+</p>
            </div>
            <div className={clsx(styles.circle3)}>
              <a href="https://scratch.codelab.club/explore/projects/all/"><div>博客圈</div></a>
            </div>
          </div>
        </div>

        <div className={clsx(styles.triangle_bottom)}></div>
        <div className={clsx(styles.bottom_sec)}>
          <p className={clsx(styles.subtitle3)}>支持我们</p>
          <p className={clsx(styles.subtitleNote1)}>如何支持？</p>
          <p className={clsx(styles.subtitleNote1)}>占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位</p>
        </div>
        </div>

    </Layout>
  );
}

export default Home;
