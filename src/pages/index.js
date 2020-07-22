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


        {/* 这部分原始点击播放视频以及标题的打字动态效果，注意下方视频的css id helloWorld已被上面的文字标题占用！
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
            <source src="https://scratch3-files.just4fun.site/CodeLabVideos3_5m.mp4" type="video/mp4"></source>
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
          <iframe className={styles.iframe} src="https://scratch3v3.codelab.club/?sb3url=https://scratch3-files.just4fun.site/Wake_me_up_now.sb3"/>
          <p className="text--center margin-top--lg">
            <a href="https://scratch.codelab.club/projects/editor/" target="_blank"><button className="button button--info margin-bottom--md">立即开始 Scratch 创作</button></a>
            <a href="https://scratch.codelab.club" target="_blank"><button className="button button--info margin-bottom--md">先去看看大家的作品</button></a>
          </p>

        <div className="padding-top--lg padding-bottom--lg">
          <p className={clsx(styles.subtitle1)}>延伸至可编程空间</p>
          <p className={clsx(styles.subtitleNote)}>在 CodeLab Adapter 的驱动下，实现软件、硬件，虚拟动画角色、物理实体、AI 的互动联通</p>
          <div className={clsx("container text--center padding-top--md padding-bottom--md",styles.spacevideo)} style={{background: 'white', fontSize: 0}}>
            <Video src="https://scratch3-files.just4fun.site/play.mp4" poster="/img/Play.png"/>
          </div>
        </div>
          <div className="container padding-top-lg">
            <p className="text--center margin-top--lg">
              {/*
              <Link to="/projects"><button className="button button--info margin-bottom--md">更多演示案例</button></Link>
              <Link to="/docs"><button className="button button--info margin-bottom--md">阅读技术文档</button></Link>
              */}
              <a href="https://adapter.codelab.club/user_guide/gallery/" target="_blank"><button className="button button--info margin-bottom--md">更多演示案例</button></a>
              <a href="https://adapter.codelab.club/" target="_blank"><button className="button button--info margin-bottom--md">阅读技术文档</button></a >
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
                <a className={clsx(styles.imagefeature)} href="https://mp.weixin.qq.com/s/1IJIHCKaqZeJki8hWiAKuw" target="_blank">
                  <img src="/img/暑期课程.png" alt = "Scratch编程暑期公益课程"></img>
                </a>
                <h3>
                  <a href="https://mp.weixin.qq.com/s/1IJIHCKaqZeJki8hWiAKuw" target="_blank">Scratch 编程暑期公益课程</a>
                </h3>
                <p>暑期重头，本周开始</p>
              </article>
            </div>
            <div className= 'col'>
              <article className={clsx(styles.box)}>
                <a className={clsx(styles.imagefeature)} href="https://www.codelab.club/blog/3.4.1-release/" target="_blank">
                  <img src="/img/adapter3.4.png" alt = "CodeLab Adapter 3.4 发布"></img>
                </a>
                <h3>
                  <a href="https://www.codelab.club/blog/3.4.1-release/" target="_blank">CodeLab Adapter 3.4 发布</a>
                </h3>
                <p>从此完整（full）、精简（lite）任君选</p>
              </article>
            </div>
          <div className= 'col'>
            <article className={clsx(styles.box)}>
              <a className={clsx(styles.imagefeature)} href="https://www.codelab.club/blog/david-p1/" target="_blank">
                <img src="/img/寻宝记.png" alt = "CodeLab冒险记"></img>
              </a>
              <h3>
                <a href="https://www.codelab.club/blog/david-p1/" target="_blank">CodeLab 冒险记（一）</a>
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
              <a href="https://scratch.codelab.club/explore/projects/all/" target="_blank"><div>Scratch 社区</div></a>
            </div>
            <div className={clsx(styles.plus1, 'col', 'col--1')}>
              <p>+</p>
            </div>
            <div className={clsx(styles.circle2)}>
              <a href="http://discuss.codelab.club/" target="_blank"><div>CodeLab 论坛</div></a>
            </div>
            <div className={clsx(styles.plus2, 'col', 'col--1')}>
              <p>+</p>
            </div>
            <div className={clsx(styles.circle3)}>
              <a href="https://www.codelab.club/blog/" target="_blank"><div>博客圈</div></a>
            </div>
          </div>
        </div>

        <div className={clsx(styles.triangle_bottom)}></div>
        <div className={clsx(styles.bottom_sec)}>
          <p className={clsx(styles.subtitle3)}>支持我们</p>
          <p className={clsx(styles.subtitleNote1)}>CodeLab 是一个非营利组织，这种组织形态让我们能全力以赴追逐使命。
          如果我们不去做，这些值得去做的事情，短期内似乎就不会发生<br></br>如果没有你的资助，我们成功的机会便很渺茫。
          如果你愿意提供资助，请< a href=" " style = {{color:"#D8572A"}} target="_blank">联系我们</ a></p>
        </div>
        </div>

    </Layout>
  );
}

export default Home;
