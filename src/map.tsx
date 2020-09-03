import * as React from 'react';
import mapGifPortrait from '../assets/map.gif';
import mapGifLandscape from '../assets/mapH.gif';
import CSS from 'csstype';
import { Page } from './app';

interface IProps {
    moveToPage: (page: Page) => void;
}

export function Map(props: IProps) {
    const isPortrait: boolean = screen.width < screen.height;
    const portraitCoords: string[] = ["77,52,221,169", "67,430,167,537", "89,668,212,779", "365,561,466,643", "168,289,317,422", "328,38,431,136"];
    const landscapeCoords: string[] = ["22,216,146,309", "275,25,369,119", "279,225,402,339", "692,371,788,493", "472,222,628,360", "604,3,709,143"];
    const coords: string[] = isPortrait ? portraitCoords : landscapeCoords;

    return (
        <div style={isPortrait ? containerPortraitStyle : containerLandscapeStyle}>
            <img src={isPortrait ? mapGifPortrait : mapGifLandscape} alt="loading..." useMap="#image_map" />
            <map name="image_map">
                <area style={cursorStyle} alt="Wait for me" title="Wait for me" onClick={() => props.moveToPage(Page.Plane)} coords={coords[0]} shape="rect" />
                <area style={cursorStyle} alt="Bittersweet" title="Bittersweet" onClick={() => props.moveToPage(Page.Box)} coords={coords[1]} shape="rect" />
                <area style={cursorStyle} alt={`Can't stop falling in love`} title={`Can't stop falling in love`} onClick={() => props.moveToPage(Page.Heart)} coords={coords[2]} shape="rect" />
                <area style={cursorStyle} alt="Is it weird" title="Is it weird" onClick={() => props.moveToPage(Page.Coffee)} coords={coords[3]} shape="rect" />
                <area style={cursorStyle} alt="Recommended for you" title="Recommended for you" onClick={() => props.moveToPage(Page.Rec)} coords={coords[4]} shape="rect" />
                <area style={cursorStyle} alt="Single" title="Single" onClick={() => props.moveToPage(Page.Bubble)} coords={coords[5]} shape="rect" />
            </map>
        </div>
    )
}

const containerLandscapeStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

const containerPortraitStyle: CSS.Properties = {
    textAlign: 'center'
}

const cursorStyle: CSS.Properties = {
    cursor: 'pointer'
}
