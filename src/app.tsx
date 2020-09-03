import * as React from 'react';
import CSS from 'csstype';

import { Map } from './map';
import { Song } from './song';

import wait1 from '../assets/wait1.png';
import wait2 from '../assets/wait2.png';
import wait3 from '../assets/wait3.png';

import recMap1 from '../assets/recMap1.jpg';
import recMap2 from '../assets/recMap2.jpg';
import recMap3 from '../assets/recMap3.jpg';
import recMap4 from '../assets/recMap4.jpg';
import recR from '../assets/recR.jpg';
import rec4 from '../assets/rec4.jpg';
import recY from '../assets/recY.jpg';

import weird1 from '../assets/weird1.JPG';
import weird2 from '../assets/weird2.JPG';
import weird3 from '../assets/weird3.JPG';
import weird4 from '../assets/weird4.jpg';
import weird5 from '../assets/weird5.JPG';
import weird6 from '../assets/weird6.JPG';
import weird7 from '../assets/weird7.jpg';
import weird8 from '../assets/weird8.JPG';
import weird9 from '../assets/weird9.jpg';

import bittersweet1 from '../assets/bittersweet1.jpg';

import love1 from '../assets/CSFIL1.png';
import love2 from '../assets/CSFIL2.JPG';
import love3 from '../assets/CSFIL3.jpg';
import love4 from '../assets/CSFIL4.JPG';

export enum Page {
  Map,
  Plane,
  Coffee,
  Box,
  Rec,
  Heart,
  Bubble
}

interface IProps {
}

interface IState {
  page: Page;
};

export class App extends React.Component<IProps, IState> {
  state: IState = {
    page: Page.Map
  };

  private imgDim: number;

  componentDidMount() {
    const screenSize = screen.width;

    if (screenSize > 400) {
      this.imgDim = 350;
    } else {
      this.imgDim = 200;
    }
  }

  render() {
    switch (this.state.page) {
      case Page.Map:
        return (
          <Map moveToPage={this.moveToPage} />
        )
      case Page.Plane:
        // Wait for me
        return (
          <Song moveToPage={this.moveToPage} title={'Wait for me'}
            soundCloudTrackId={'882712858'}
            imageContent={
              [<h3 style={this.titleStyle}>{'Wait for me Poem/Lyrics'}</h3>,
              <img src={wait1} style={this.imageStyle} />,
              <img src={wait2} style={this.imageStyle} />,
              <img src={wait3} style={this.imageStyle} />]
            }
            videoContent={[
              <h3 style={this.titleStyle}>{'Wait for me Spoken Word'}</h3>,
              <h5 style={this.subTitleStyle}>{'Poet: JConn'}</h5>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/1lybrlSbx34" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
      case Page.Box:
        // Bittersweet
        return (
          <Song moveToPage={this.moveToPage} title={'Bittersweet'}
            soundCloudTrackId={'880772569'}
            imageContent={
              [<h3 style={this.titleStyle}>{'A recipe for Nostalgia'}</h3>,
              <h5 style={this.subTitleStyle}>{'Visual Artist: Audrey Walters'}</h5>,
              <img src={bittersweet1} style={this.imageStyle} />]
            }
            videoContent={[
              <h3 style={this.titleStyle}>{'The Official Bittersweet Music Video'}</h3>,
              <h5 style={this.subTitleStyle}>{'Artist: Jack Blair'}</h5>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/2Zf9FaMuQWo" frameBorder="0" allow-fullscreen></iframe>,
              <h3 style={this.titleStyle}>{'Bittersweet live (feat. Sam Welch)'}</h3>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/3tNWHPzbcJs" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
      case Page.Rec:
        // Rec4Y
        return (
          <Song moveToPage={this.moveToPage} title={'Recommended for you'}
            soundCloudTrackId={'879966880'}
            imageContent={
              [<h3 style={this.titleStyle}>{'A Unified Quest'}</h3>,
              <h5 style={this.subTitleStyle}>{'Artist: Various artists, family and friends'}</h5>,
              <img src={'https://ik.imagekit.io/r4y/map1_o8kVR2Ab-I.jpg'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/map2_G9ZzJu1Fm.jpg'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/map3_0hwGVEC6I.jpg'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/map4_qgyGJZq0a.jpg'} style={this.imageStyle} />,
              <h3 style={this.titleStyle}>{'R 4 Y'}</h3>,
              <h5 style={this.subTitleStyle}>{'Visual Artist: Hannah Kast'}</h5>,
              <img src={recR} style={this.imageStyle} />,
              <img src={rec4} style={this.imageStyle} />,
              <img src={recY} style={this.imageStyle} />]
            }
            videoContent={[
              <h3 style={this.titleStyle}>{'Recommended for you Strings'}</h3>,
              <h5 style={this.subTitleStyle}>{'Artist: Jack Blair'}</h5>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/eczjAkftqmU" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
      case Page.Bubble:
        // Single
        return (
          <Song moveToPage={this.moveToPage} title={'Single'}
            soundCloudTrackId={'880425253'}
            videoContent={[
              <h3 style={this.titleStyle}>{'Single Animation'}</h3>,
              <h5 style={this.subTitleStyle}>{'Visual Artist: Hot Dog'}</h5>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/829v6EsxN9A" frameBorder="0" allow-fullscreen></iframe>,
              <h3 style={this.titleStyle}>{'Single Remix (feat. Persona)'}</h3>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/jqfaHhQtLDk" frameBorder="0" allow-fullscreen></iframe>,
            ]}
          />
        )
      case Page.Coffee:
        // Is it weird
        return (
          <Song moveToPage={this.moveToPage} title={'Is it weird?'}
            soundCloudTrackId={'880771258'}
            imageContent={
              [
                <h3 style={this.titleStyle}>{'Anonymous Love Stories'}</h3>,
                <h5 style={this.subTitleStyle}>{'Photographer: Nick Raihala'}</h5>,
                <img src={weird1} style={this.imageStyle} />,
                <img src={weird2} style={this.imageStyle} />,
                <img src={weird3} style={this.imageStyle} />,
                <img src={weird4} style={this.imageStyle} />,
                <img src={weird5} style={this.imageStyle} />,
                <img src={weird6} style={this.imageStyle} />,
                <img src={weird7} style={this.imageStyle} />,
                <img src={weird8} style={this.imageStyle} />,
                <img src={weird9} style={this.imageStyle} />]
            }
            videoContent={[
              <h3 style={this.titleStyle}>{'...is it weird live? (feat. Tim Garner and Ethan Kimberly)'}</h3>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/uIwy_YvB8lU" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
      case Page.Heart:
        // Can't stop falling in love 
        return (
          <Song moveToPage={this.moveToPage} title={'Can\'t Stop Falling in Love'}
            soundCloudTrackId={'880771609'}
            imageContent={
              [<h3 style={this.titleStyle}>{'A Story in 4 Pics'}</h3>,
              <h5 style={this.subTitleStyle}>{'Visual Artist: Sarah Schuster'}</h5>,
              <img src={love1} style={this.imageStyle} />,
              <img src={love2} style={this.imageStyle} />,
              <img src={love3} style={this.imageStyle} />,
              <img src={love4} style={this.imageStyle} />]
            }
            videoContent={[
              <h3 style={this.titleStyle}>{'The making of Can\'t Stop Falling in Love'}</h3>,
              <h5 style={this.subTitleStyle}>{'Videographer: Nick Raihala'}</h5>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/RozGVf0nFZ0" frameBorder="0" allow-fullscreen></iframe>,
              <h3 style={this.titleStyle}>{'CSFIL live (feat. Stephen Yokely)'}</h3>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/YEqlahDF10s" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
    }

  }

  moveToPage = (page: Page) => {
    this.setState({
      page: page
    });
  }

  imageStyle: CSS.Properties = {
    maxWidth: '350px',
    maxHeight: '350px',
    margin: '15px 35px'
  }

  videoStyle: CSS.Properties = {
    margin: '15px'
  }

  audioStyle: CSS.Properties = {
    marginBottom: '15px',
  }

  titleStyle: CSS.Properties = {
    width: '100%',
    paddingBottom: 0,
    backgroundColor: 'white',
    margin: 0
  }

  subTitleStyle: CSS.Properties = {
    width: '100%',
    paddingBottom: '5px',
    backgroundColor: 'white',
    margin: 0
  }
}
