import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles";

const infoCards = [
  {
    color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    image: "https://img.icons8.com/bubbles/2x/news.png",
    title: "Latest News",
    text: "Give me the latest news",
  },
  {
    color: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    image: "https://images-na.ssl-images-amazon.com/images/I/61Gh-4LQXSL.png",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "linear-gradient(45deg, #9e048b 30%, #fe80ae 90%)",
    title: "News by Terms",
    image: "https://www.supremo.co.uk/typeterms/images/logo.svg",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "linear-gradient(45deg, #08c399 30%, #33f5c9 90%)",
    image: "https://img.icons8.com/office/2x/reality-stars.png",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = ({ articles, ActiveArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ background: infoCard.color }}
              >
                <Typography
                  variant="h5"
                  style={{ textTransform: "uppercase", fontWeight: "700" }}
                >
                  {infoCard.title}
                </Typography>
                <img
                  src={infoCard.image}
                  alt="img"
                  style={{ width: "80%", height: "150px" }}
                ></img>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try saying: <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={3}></Grid>
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            backgroundColor: "#08c399",
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          <center>
            <h2 style={{ textTransform: "uppercase" }}>Try Saying:</h2>{" "}
            <h3 style={{ textTransform: "uppercase" }}>Go Back</h3>
          </center>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            backgroundColor: "#08c399",
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          <center>
            <h2 style={{ textTransform: "uppercase" }}>Try Saying:</h2>{" "}
            <h3 style={{ textTransform: "uppercase" }}>
              Open article number 3
            </h3>{" "}
          </center>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>

        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} ActiveArticle={ActiveArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
