import React, { memo } from 'react';

const ChildNumber = (props) => {
  const changeNumber = () => {
    props.changeChildNumber(Math.random());
  };

  return (
    <>
      <h2>Child Number: {props.number}</h2>
      <button onClick={changeNumber}> Change Child Number </button>
    </>
  );
};
ChildNumber.whyDidYouRender = true;

export default memo(ChildNumber);
