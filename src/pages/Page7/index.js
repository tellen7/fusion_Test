import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';

export default class Page7 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page7-page">
        {/* 创建活动的表单 */}
        <CreateActivityForm />
      </div>
    );
  }
}
