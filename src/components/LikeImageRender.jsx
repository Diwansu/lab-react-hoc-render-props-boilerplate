import React, { useState } from "react";

const LikeImageRender = (props) => {
  const { count, handleCount } = props;


  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  );
};

export default LikeImageRender;
