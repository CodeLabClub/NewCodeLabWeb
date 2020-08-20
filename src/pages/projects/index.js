import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';
import Modal from 'react-modal';
const videos = require('../../../static/video_config.json')

/*
const Header = function () {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  return (
    <header>
      <div className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <p className={clsx(styles.herosubtitle , isDarkTheme)}>演示案例</p>
          <p className={clsx( styles.heroBanner)}>说明文字</p>
        </div>
      </div>
      <div className={clsx(styles.triangle_top)}></div>
    </header>)
}
 */

export const VideoRow = function ({title, videos, ...props}) {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  const VideoRefs = useRef([])
  const [currVideo, setCurrVideo] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding: '0'
    }
  };

  const opt = {
    aspectRatio:"16:9",
    fluid: true,
    controls: true,
    autoplay: false,
    preload: 'auto'
  }

  function openModal(video) {
    setCurrVideo(video)
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(){
    let player = videojs.getPlayer('my-video')
    if (player) {
      player.pause()
      player.dispose()
      setIsOpen(false);
    }
  }

  useLayoutEffect(() => {
    const observer = window.lozad('.lozad', {
      load: (el) => {
        el.src = el.getAttribute('data-src');
        // Custom implementation to load an element
        // e.g. el.src = el.getAttribute('data-src');
      },
      loaded: (el) => {
        el.removeAttribute('poster')
        el.classList.add('loaded');
      }
    }); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  })

  return (
    <div className="margin-top--log margin-bottom--log">
      {
        title ?
          <p className={clsx('hero__subtitle', isDarkTheme && styles.headerFontColor)}>{title}</p> : null
      }
      <div className="row">
        {
          videos.map((video, index) => (
            <div className={clsx('col col--4')} key={index}>
              <div>
                <video
                  type="video/mp4"
                  poster="/static/img/Play.PNG"
                  data-src={video.src}
                  className={clsx(styles.video, 'lozad')}
                  onClick={() => openModal(video)}
                />
                <p className={clsx('text--center', isDarkTheme && styles.headerFontTitle)}>{video.title}</p>
              </div>

                {/*
                < div className={clsx(styles.videoName)}>
                  <p className={clsx('text--left', isDarkTheme && styles.headerFontNum)}>by CodeLab</p>
                  <p className={clsx('text--center', isDarkTheme && styles.headerFontTitle)}>{video.title}</p>
                </div>
                */}

            </div>
          ))
        }
      </div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {
          currVideo ?
          <video
            ref={(ref) => ref && (window.videojs(ref, opt))}
            id="my-video"
            controls
            className={clsx('video-js', 'vjs-theme-fantasy', 'modalVideo')}
          >
              <source src={currVideo.src} type="video/mp4" />
          </video> : null
        }
      </Modal>
    </div>
  )
}

function Projects() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  useLayoutEffect(() => {
    window.$(".stack").lettering();
  }, [])
  return (
    <Layout title="Projects">
      {/*
      <Header/>
      */}
      <div className={clsx(styles.mainPage)}>
        <div className={clsx(styles.titleSec, 'cover')}>
          {/*
            <span className={clsx(styles.fancytitle1, 'stack')}>Let's &nbsp;</span>
            <span className={clsx(styles.fancytitle1, 'stack')}>&nbsp; Play!</span>

            <h1 className={clsx(styles.fancytitle2, 'stack')}>无惧简陋与粗糙</h1>
            */}
            <h1 className={clsx(styles.fancytitle2, 'stack')}>在玩乐中创作与表达</h1>
        </div>
        <main className={clsx("container")}>
          <VideoRow title="" videos={videos['来自CodeLab']}/>
          <VideoRow title="" videos={videos['来自社区']}/>
        </main>
      </div>
    </Layout>
  );
}

export default Projects;