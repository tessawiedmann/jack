import * as React from 'react';
import CSS from 'csstype';

import { Map } from './map';
import { Song } from './song';

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
            soundCloudTrackId={'882712858'}
            imageContent={
              [<h3 style={this.titleStyle}>{'Wait for me Poem/Lyrics'}</h3>,
              <img src={'https://ik.imagekit.io/r4y/Waitfor_me1_Zd42i3rp2.png'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/Waitforme2_Mv7m_A1WS.png'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/wait_for_me3_K1yDpz6jC.png'} style={this.imageStyle} />]
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
              <img src={'https://ik.imagekit.io/r4y/AnyConv.com__Bittersweet_recipe-min_EvJFPVE7H.jpg'} style={this.imageStyle} />]
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
              <img src={'https://ik.imagekit.io/r4y/R-min_9RNZRCh6y4.jpg'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/4-min_mNh5FVP_x.jpg'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/Y-min_uBkAJSYfk.jpg'} style={this.imageStyle} />]
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
          <Song moveToPage={this.moveToPage} title={'is it weird?'}
            soundCloudTrackId={'880771258'}
            imageContent={
              [
                <h3 style={this.titleStyle}>{'Anonymous Love Stories'}</h3>,
                <h5 style={this.subTitleStyle}>{'Photographer: Nick Raihala'}</h5>,
                <img src={'https://ik.imagekit.io/r4y/weird1_t9_TJBuOa.JPG'} style={this.imageStyle} />,
                <img src={'https://ik.imagekit.io/r4y/weird2_rbW9oaYU9v.JPG'} style={this.imageStyle} />,
                <img src={'https://ik.imagekit.io/r4y/weird3_YiARiSuSLR.JPG'} style={this.imageStyle} />,
                <img src={'https://ik.imagekit.io/r4y/weird8_N9vpXWkdR.JPG'} style={this.imageStyle} />,
                <img src={'https://ik.imagekit.io/r4y/weird5_bH3mqWffI.JPG'} style={this.imageStyle} />,
                <img src={'https://ik.imagekit.io/r4y/weird6_Yu-WnP7EK.JPG'} style={this.imageStyle} />,
                <img src={'https://ik.imagekit.io/r4y/weird7_57Sg4ni8S.jpg'} style={this.imageStyle} />,
                <img src={'https://ik.imagekit.io/r4y/weird4_kL5xntNSY.jpg'} style={this.imageStyle} />,
                <img src={'https://ik.imagekit.io/r4y/weird9_y6u7ekkGs.jpg'} style={this.imageStyle} />]
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
              <img src={'https://ik.imagekit.io/r4y/image0_M4T6Hal3j.jpeg'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/CSFIL2_nnhjzLbR9.JPG'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/CSFIL3_GpZIJiDeC.jpg'} style={this.imageStyle} />,
              <img src={'https://ik.imagekit.io/r4y/CSFIL4_of2bY_LJF.JPG'} style={this.imageStyle} />]
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
    padding: '15px 35px',
    // backgroundColor: 'white',

    // overflow: 'hidden',
    // position: 'relative'
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
    //backgroundColor: 'white',
    margin: 0
  }

  subTitleStyle: CSS.Properties = {
    width: '100%',
    paddingBottom: '5px',
    //backgroundColor: 'white',
    margin: 0
  }
}
