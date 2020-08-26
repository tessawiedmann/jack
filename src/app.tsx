import * as React from 'react';
import CSS from 'csstype';

import { Map } from './map';
import { Song } from './song';

import wait1 from '../assets/wait1.png';
import wait2 from '../assets/wait2.png';
import wait3 from '../assets/wait3.png';
import waitAudio from '../assets/waitAudio.mp3';

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
            imageContent={
              [<img src={wait1} style={this.imageStyle} />,
              <img src={wait2} style={this.imageStyle} />,
              <img src={wait3} style={this.imageStyle} />]
            }
            videoContent={[
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/1lybrlSbx34" frameBorder="0" allow-fullscreen></iframe>
            ]}
            audioContent={[
              <audio src={waitAudio} controls style={this.audioStyle} />
            ]}
          />
        )
      case Page.Box:
        // Bittersweet
        return (
          <Song moveToPage={this.moveToPage} title={'Bittersweet'}
            imageContent={
              [<img src={bittersweet1} style={this.imageStyle} />]
            }
            videoContent={[
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/3tNWHPzbcJs" frameBorder="0" allow-fullscreen></iframe>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/2Zf9FaMuQWo" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
      case Page.Rec:
        // Rec4Y
        return (
          <Song moveToPage={this.moveToPage} title={'Recommended for you'}
            imageContent={
              [<img src={recMap1} style={this.imageStyle} />,
              <img src={recMap2} style={this.imageStyle} />,
              <img src={recMap3} style={this.imageStyle} />,
              <img src={recMap4} style={this.imageStyle} />,
              <img src={recR} style={this.imageStyle} />,
              <img src={rec4} style={this.imageStyle} />,
              <img src={recY} style={this.imageStyle} />]
            }
            videoContent={[
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/eczjAkftqmU" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
      case Page.Bubble:
        // Single
        return (
          <Song moveToPage={this.moveToPage} title={'Single'}
            videoContent={[
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/jqfaHhQtLDk" frameBorder="0" allow-fullscreen></iframe>,
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/829v6EsxN9A" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
      case Page.Coffee:
        // Is it weird
        return (
          <Song moveToPage={this.moveToPage} title={'Is it weird'}
            imageContent={
              [<img src={weird1} style={this.imageStyle} />,
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
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/uIwy_YvB8lU" frameBorder="0" allow-fullscreen></iframe>
            ]}
          />
        )
      case Page.Heart:
        // Can't stop falling in love 
        return (
          <Song moveToPage={this.moveToPage} title={'Can\'t stop falling in love'}
            imageContent={
              [<img src={love1} style={this.imageStyle} />,
              <img src={love2} style={this.imageStyle} />,
              <img src={love3} style={this.imageStyle} />,
              <img src={love4} style={this.imageStyle} />]
            }
            videoContent={[
              <iframe style={this.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/RozGVf0nFZ0" frameBorder="0" allow-fullscreen></iframe>,
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
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '15px'
  }

  audioStyle: CSS.Properties = {
    marginBottom: '15px',
  }
}
