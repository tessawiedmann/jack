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
            <img src={mapGif} alt="loading..." useMap="#image_map" />
            <map name="image_map">
                <area style={cursorStyle} alt="planeTitle" title="planeTitle" onClick={() => props.moveToPage(Page.Plane)} coords="77,52,221,169" shape="rect" />
                <area style={cursorStyle} alt="boxTitle" title="boxTitle" onClick={() => props.moveToPage(Page.Box)} coords="67,430,167,537" shape="rect" />
                <area style={cursorStyle} alt="heartTitle" title="heartTitle" onClick={() => props.moveToPage(Page.Heart)} coords="89,668,212,779" shape="rect" />
                <area style={cursorStyle} alt="coffeeTitle" title="coffeeTitle" onClick={() => props.moveToPage(Page.Coffee)} coords="365,561,466,643" shape="rect" />
                <area style={cursorStyle} alt="recTitle" title="recTitle" onClick={() => props.moveToPage(Page.Rec)} coords="168,289,317,422" shape="rect" />
                <area style={cursorStyle} alt="bubbleTitle" title="bubbleTitle" onClick={() => props.moveToPage(Page.Bubble)} coords="328,38,431,136" shape="rect" />
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
