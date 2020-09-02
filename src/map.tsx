import * as React from 'react';
import mapGif from '../assets/map.gif';
import CSS from 'csstype';
import { Page } from './app';

interface IProps {
    moveToPage: (page: Page) => void;
}

export function Map(props: IProps) {
    return (
        <div style={containerStyle}>
            {/* screen.width*/ }
            <img src={mapGif} alt="loading..." useMap="#image_map" />
            <map name="image_map">
                <area style={cursorStyle} alt="Wait for me" title="Wait for me" onClick={() => props.moveToPage(Page.Plane)} coords="77,52,221,169" shape="rect" />
                <area style={cursorStyle} alt="Bittersweet" title="Bittersweet" onClick={() => props.moveToPage(Page.Box)} coords="67,430,167,537" shape="rect" />
                <area style={cursorStyle} alt="Can\'t stop falling in love" title="Can\'t stop falling in love" onClick={() => props.moveToPage(Page.Heart)} coords="89,668,212,779" shape="rect" />
                <area style={cursorStyle} alt="Is it weird" title="Is it weird" onClick={() => props.moveToPage(Page.Coffee)} coords="365,561,466,643" shape="rect" />
                <area style={cursorStyle} alt="Recommended for you" title="Recommended for you" onClick={() => props.moveToPage(Page.Rec)} coords="168,289,317,422" shape="rect" />
                <area style={cursorStyle} alt="Single" title="Single" onClick={() => props.moveToPage(Page.Bubble)} coords="328,38,431,136" shape="rect" />
            </map>
        </div>
    )
}

const containerStyle: CSS.Properties = {
    textAlign: 'center'
}

const cursorStyle: CSS.Properties = {
    cursor: 'pointer'
  }
