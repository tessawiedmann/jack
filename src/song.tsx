import * as React from 'react';
import CSS from 'csstype';

import { Page } from './app';
import backgroundMap from '../assets/background.JPG'

interface IProps {
    moveToPage: (page: Page) => void;
    title: string;
    soundCloudTrackId?: string;
    imageContent?;
    videoContent?;
}

export function Song(props: IProps) {
    return (
        <div style={{backgroundImage: `url(${backgroundMap})`}}>
        <button onClick={() => props.moveToPage(Page.Map)} style={backStyle}>Back</button>
        <div style={metaContainerStyle}>
            <h1 style={{/*backgroundColor: 'white'*/}}>{props.title}</h1>
            <iframe width="100%" height="300" scrolling="no" style={{marginBottom: '15px'}} frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.soundCloudTrackId}&color=%23447c7c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
            {!props.soundCloudTrackId && <a href={'https://soundcloud.com/jackblair_r4y'}>https://soundcloud.com/jackblair_r4y</a>}
            <div style={containerStyle}>
                <div style={imgStyle}>{props.imageContent}</div>
            </div>
            <div style={containerStyle}>
                {props.videoContent}
            </div>
        </div>
        </div>
    )
}

const backStyle: CSS.Properties = {
    backgroundColor: '#555555',
    border: 'none',
    color: 'white',
    padding: '10px 25px',
    margin: '15px',
    marginBottom: '0px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '12px',
    cursor: 'pointer'
}

const imgStyle: CSS.Properties = {
    // position: 'absolute',
    // left: '-1000%',
    // right: '-1000%',
    // top: '-1000%',
    // bottom: '-1000%',
    // margin: 'auto',
    // minHeight: '100%',
    // minWidth: '100%'
}

const containerStyle: CSS.Properties = {
    maxWidth: '900px',
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    justifyContent: 'center'
}

const metaContainerStyle: CSS.Properties = {
    width: '100%',
    textAlign: 'center'
}
