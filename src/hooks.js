import React, { useContext } from 'react';
import Card from './components/card';
import CounterTwo from './counterTwo';
import { HooksContext } from './HooksContext';

const Hooks = () => {
  const { setMount, mount } = useContext(HooksContext);
  const { setIgnoreProp } = useContext(HooksContext);
  const { setSeed } = useContext(HooksContext);
  // const value = useContext(HooksContext);

  // console.log(value);

  const mountHandler = () => {
    setMount(true);
  };
  const unMountHandler = () => {
    setMount(false);
  };

  const ignorePropHandler = () => {
    setIgnoreProp(Math.random());
  };

  const seedGeneratorHandler = () => {
    const seedInit = Number.parseInt(Math.random() * 100, 10);
    setSeed(seedInit);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="main">
      <h2>Using React Hooks</h2>
      <h4>Check Console</h4>
      <div className="container">
        <Card caption="Mount" method={mountHandler} />
        <Card caption="UnMount" method={unMountHandler} />
        <Card caption="IgnoreProp" method={ignorePropHandler} />
        <Card caption="SeedGenerator" method={seedGeneratorHandler} />
      </div>
      {mount && <CounterTwo />}
    </div>
  );
};

export default Hooks;
