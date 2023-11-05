import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Box } from "@mui/material";

const LottieAnimation = ({src}) => {
    const autoplay = true, loop = true, direction = 1;
    const duration=-1;
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(src)
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, [src]);

  if (!animationData) {
    return <Box>Loading...</Box>;
  }

  return (
    <Lottie
      options={{
        animationData,
        autoplay,
        loop,
        direction,
        duration,
      }}
      isPaused={false}
      isStopped={false}
    />
  );
};

export default LottieAnimation;
