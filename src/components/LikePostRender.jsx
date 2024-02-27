import React, { useState } from "react";

const LikePostRender = (props) => {
  const { count, handleCount } = props;


  return (
    <div>
      <button onClick={handleCount}>Like Post {count}</button>
    </div>
  );
};

export default LikePostRender;
