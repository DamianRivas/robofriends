import React from 'react';

const Scroll = (props) => {
  return (
    <section className="scroll-container" style={{flex: '1', overflowY: 'scroll', border: '1px solid black', padding: "25px 10px"}}>
      {props.children}
    </section>
  )
}

export default Scroll;
