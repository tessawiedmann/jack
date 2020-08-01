import * as React from 'react';
import mapGif from '../assets/map.gif';
import CSS from 'csstype';

export function App() {
    return (
      <div style={container}>
        <img src={mapGif} alt="loading..." usemap="#image_map"/>
        <map name="image_map">
          <area alt="planeTitle" title="planeTitle" href="planeLink" coords="77,52,221,169" shape="rect"/>
          <area alt="boxTitle" title="boxTitle" href="boxLink" coords="67,430,167,537" shape="rect"/>
          <area alt="heartTitle" title="heartTitle" href="heartLink" coords="89,668,212,779" shape="rect"/>
          <area alt="coffeeTitle" title="coffeeTitle" href="coffeeLink" coords="365,561,466,643" shape="rect"/>
          <area alt="recTitle" title="recTitle" href="recLink" coords="168,289,317,422" shape="rect"/>
          <area alt="bubbleTitle" title="bubbleTitle" href="bubbleLink" coords="328,38,431,136" shape="rect"/>
        </map>
      </div>
    )
}

const container: CSS.Properties = {
  textAlign: 'center'
}

// https://stackoverflow.com/a/61493410
