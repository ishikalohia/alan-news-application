import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Hero from "./components/Hero";

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "61a5b012b3a91f4bbd0b5747715b60952e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [ActiveArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);
  return (
    <div>
      <Hero />
      <NewsCards articles={newsArticles} ActiveArticle={ActiveArticle} />
    </div>
  );
};

export default App;
