import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';
import Modal from 'react-modal';
const videos = require('../../../static/video_config.json')

const Header = function () {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx('hero__title', isDarkTheme && styles.headerFontColor)}>CodeLab</h1>
          <p className={clsx('hero__subtitle', isDarkTheme && styles.headerFontColor)}>作品馆</p>
        </div>
    </header>)
}

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
      transform             : 'translate(-50%, -50%)'
    }
  };

  const opt = {
    aspectRatio:"16:9",
    fluid: true,
    controls: true,
    autoplay: true,
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

  return (
    <div className="margin-top--lg margin-bottom--lg">
      {
        title ?
          <p className={clsx('hero__subtitle', isDarkTheme && styles.headerFontColor)}>{title}</p> : null
      }
      <div className="row">
        {
          videos.map((video, index) => (
            <div className={clsx('col col--3')} key={index}>
              <div>
                <video
                  src={video.src}
                  className={clsx(styles.video)}
                  onClick={() => openModal(video)}
                >
                    <source src={video.src} type="video/mp4" />
                </video>
                <p className={clsx('text--center', isDarkTheme && styles.headerFontColor)}>{video.title}</p>
              </div>
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

  return (
    <Layout title="Projects">
      <Header/>
      <main className="container">
        <VideoRow title="CodeLab出品" videos={videos['CodeLab出品']}/>
        <VideoRow title="社区出品" videos={videos['社区出品']}/>
        <VideoRow title="活动纪实" videos={videos['活动纪实']}/>

      </main>
    </Layout>
  );
}

export default Projects;