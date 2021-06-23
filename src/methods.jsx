/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line import/extensions
import Counter from './Counter.js';
import Card from './components/card';

class Methods extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 60,
    };
    this.mount = () => {
      this.setState({ mount: true });
    };
    this.unMount = () => {
      this.setState({ mount: false });
    };
    this.ignoreProp = () => {
      const finalVal = {
        ...this.state,
        ignoreProp: Math.random(),
      };
      this.setState(finalVal);
    };
    this.seedGenerator = () => {
      const seedInit = Number.parseInt(Math.random() * 100, 10);
      this.setState({ seed: seedInit });
    };
  }

  render() {
    console.log('render');
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="main">
        <h2>Using Lifecycle Methods</h2>
        <h4>Check Console</h4>
        <div className="container">
          <Card caption="Mount" method={this.mount} />
          <Card caption="UnMount" method={this.unMount} />
          <Card caption="IgnoreProp" method={this.ignoreProp} />
          <Card caption="SeedGenerator" method={this.seedGenerator} />
        </div>
        {this.state.mount && (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        )}
      </div>
    );
  }
}

export default Methods;
