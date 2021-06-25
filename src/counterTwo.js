/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import Card from './components/card';
import Aux from './hoc/auxillary';
import { HooksContext } from './HooksContext';

const CounterTwo = () => {
  const { mount, seed } = useContext(HooksContext);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('setting counter');
    console.log('-----------------');
    setCounter(seed);
  }, [seed]);

  useEffect(() => {
    console.log('render');
    console.log('-----------------');
  }, [counter]);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      console.log('unmount');
      console.log('-----------------');
    };
  }, [mount]);

  /* useEffect(() => {
    console.log(seed, counter);
    console.log('DerivingStateFromProps');
    console.log('-----------------');
    setCounter(seed);
  }, [seed]); */

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Aux>
      {console.log(seed, counter)}
      <div className="container">
        <Card caption="Increment" method={increment} />
        <Card caption="Decrement" method={decrement} />
      </div>
      <h1 className="counter">{counter}</h1>
    </Aux>
  );
};

export default CounterTwo;
