

import React from 'react';
import Router, {RouteHandler} from 'react-router';
import Header from './Header';
import {safeStringify} from '../util';

class Root extends React.Component {
  render() {
    var initialProps = {
      __html: safeStringify(this.props)
    }

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <Header />
          <RouteHandler {...this.props} />
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='bundle.js' />
        </body>
      </html>
    )
  }
}


export default Root;
