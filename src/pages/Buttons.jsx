import React from 'react'

const Buttons = ({ title, color, click }) => (
  <>
    <button className={color} onClick={() => click(title)}>
      {title}
    </button>
  </>
);
export default Buttons