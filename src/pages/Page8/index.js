import React, { Component } from 'react';
import GeekEvents from './components/GeekEvents';

export default class Page8 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page8-page">
        {/* 适用于活动展示 */}
        <GeekEvents />
      </div>
    );
  }
}
