import { Grid, Typography } from "@mui/material";
import ItemCard from "../../components/ItemCard";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();

  console.log(cryptoNews);

  if (!cryptoNews) return "Loading...";
  return (
    <div style={{ height: "100%" }}>
      <Typography variant="h1" color="primary" sx={{ pt: "5vh" }}>
        News Page
      </Typography>
      <Grid container spacing={4} sx={{ my: 3 }}>
        {cryptoNews.map((item, index) => (
          <ItemCard item={item} key={index} i={index} />
        ))}
      </Grid>
    </div>
  );
};

export default News;
