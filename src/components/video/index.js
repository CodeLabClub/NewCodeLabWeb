import React, { useRef, useCallback, useState } from 'react'
import clsx from 'clsx';
import styles from './styles.module.css'

const Video = ({src, className, ...props}) => {
    const [ isplaying, setIsplaying ] = useState(false)
    const videoRef = useRef()

    const videoClickHandler = useCallback(() => {
        videoRef.current && videoRef.current.pause()
        setIsplaying(false)
    }, [])

    const playBtnClickHandler = useCallback(() => {
        videoRef.current && videoRef.current.play()
        setIsplaying(true)
    }, [])

    const videoEndHandler = useCallback(() => {
        console.log('video end')
        setIsplaying(false)
    }, [])

    const videoPauseHandler = useCallback(() => {
        if (isplaying) {
            setIsplaying(false)
        }
    }, [isplaying])

    const videoPlayHandler = useCallback(() => {
        if (!isplaying) {
            setIsplaying(true)
        }
    }, [isplaying])

    return (
        <div className={clsx(styles.videowrapper, className)}>
            <video className={styles.video} ref={videoRef} onPause={videoPauseHandler} onPlay={videoPlayHandler} onEnded={videoEndHandler} controls={isplaying} {...props}>
                <source src={src}></source>
            </video>
            <button className={clsx(styles.playbutton, isplaying && styles.hide)} onClick={playBtnClickHandler}></button>
        </div>
    )
}

export default Video