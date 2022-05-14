import React from 'react';

const ChildNumber = (props) => {
  return (
    <>
      <h2>Child Number: {props.number}</h2>
    </>
  );
};
ChildNumber.whyDidYouRender = true;

export default ChildNumber;
