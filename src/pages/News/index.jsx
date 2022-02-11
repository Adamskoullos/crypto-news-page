import { Grid, Typography } from "@mui/material";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();

  console.log(cryptoNews);

  if (!cryptoNews)
    return (
      <Grid container sx={{ my: 2 }} fontWeightLight>
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
      <Grid container spacing={4} sx={{ my: 2 }} fontWeightLight>
        {cryptoNews.map((item, index) => (
          <ItemCard item={item} key={index} i={index} />
        ))}
      </Grid>
    </div>
  );
};

export default News;
