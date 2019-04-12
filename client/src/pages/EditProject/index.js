import React, { Component } from 'react';
import DnD from './components/DnD';

export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="edit-project-page">
        <DnD />
      </div>
    );
  }
}
