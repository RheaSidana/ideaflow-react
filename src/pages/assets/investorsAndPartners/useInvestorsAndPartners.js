// import { useState } from "react";
const useInvestorsAndPartners = () => {
  const list = [
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47c6178fd2b29210de_first%20round.png",
      name: "Investor 1",
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f47257981290f6013fd_8vc%20white.png",
      name: "Investor 2",
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/5ef95ae22a251e0c9030800e/5efa8f473672ef81aad53378_startx.png",
      name: "Investor 3",
    },
  ]

  const Get33Investors = () => {
    return Array.from({ length: 12 }, () => [...list]).flat();
  }


  return {
    investorsAndPartners: Get33Investors,
  };
};

export default useInvestorsAndPartners;