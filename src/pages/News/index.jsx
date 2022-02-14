import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";
import ItemCard from "../../components/ItemCard";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import createTagsArray from "../News/createTagsArray";
import FilterTags from "../../components/FilterTags";
import filteredArray from "../News/filteredArray";

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);

  let tags;
  if (cryptoNews) {
    tags = createTagsArray(cryptoNews);
  }

  useEffect(() => {
    if (cryptoNews) {
      const articles = filteredArray(filteredTags, cryptoNews);
      setFilteredArticles(articles);
    }
  }, [filteredTags, cryptoNews]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if (!filteredArticles)
    return (
      <Grid container sx={{ my: 2 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 300, ml: 2, color: "darkGrey" }}
        >
          Loading latest news...
        </Typography>
      </Grid>
    );
  return (
    <div style={{ height: "100%" }}>
      <Grid container spacing={4} sx={{ mb: 4, pt: 1 }}>
        <Grid item xs={12} sx={{}}>
          <FilterTags
            tags={tags}
            filteredTags={filteredTags}
            setFilteredTags={setFilteredTags}
          />
        </Grid>
        {filteredArticles.map((item, index) => (
          <ItemCard item={item} key={index} i={index} />
        ))}
      </Grid>
    </div>
  );
};

export default News;
