import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TextInput from './TextInput';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    // ...
  }
};