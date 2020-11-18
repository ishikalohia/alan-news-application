import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
// import classNames from "classnames";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  ActiveArticle,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === ActiveArticle && elRefs[ActiveArticle]) {
      scrollToRef(elRefs[ActiveArticle]);
    }
  }, [i, ActiveArticle, elRefs]);

  return (
    <Card
      ref={elRefs[i]}
      className={ActiveArticle === i ? classes.activeCard : classes.card}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-creative-breaking-news-tag-png-image_4265318.jpg"
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography variant="h5" color="textSecondary">
            {i + 1}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
