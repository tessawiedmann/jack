import * as React from 'react';
import CSS from 'csstype';

import { Page } from './app';

interface IProps {
    moveToPage: (page: Page) => void;
    title: string;
    imageContent?;
    videoContent?;
    audioContent?;
}

export function Song(props: IProps) {
    return (
        <>
        <button onClick={() => props.moveToPage(Page.Map)} style={backStyle}>Back</button>

        <div style={metaContainerStyle}>
            <h1>{props.title}</h1>
            <a href={'https://soundcloud.com/jackblair_r4y'}>https://soundcloud.com/jackblair_r4y</a>
            <div style={containerStyle}>
                {props.imageContent}
            </div>
            <div style={containerStyle}>
                {props.videoContent}
            </div>
            <div style={containerStyle}>
                {props.audioContent}
            </div>
        </div>
        </>
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


