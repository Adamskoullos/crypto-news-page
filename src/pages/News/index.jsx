// import React, { useState } from "react";

import { Grid, Typography } from "@mui/material";
import ItemCard from "../../components/ItemCard";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
// import createTagsArray from "../News/createTagsArray";
// import FilterTags from "../../components/FilterTags";

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  // let tags;
  // if (cryptoNews) {
  //   tags = createTagsArray(cryptoNews);
  // }

  // const [filteredTags, setFilteredTags] = useState([]);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // console.log(cryptoNews);

  if (!cryptoNews)
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
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <FilterTags
            tags={tags}
            filteredTags={filteredTags}
            setFilteredTags={setFilteredTags}
          /> */}
        </Grid>
        {cryptoNews.map((item, index) => (
          <ItemCard item={item} key={index} i={index} />
        ))}
      </Grid>
    </div>
  );
};

export default News;
