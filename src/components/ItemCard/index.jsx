import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom";
import ItemFooter from "../ItemFooter";

const ItemCard = ({ item, i }) => {
  return (
    <Grid item xs={12}>
      <a
        href={item.link}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <Card variant="outlined" sx={{ height: "100%" }}>
          <CardActionArea>
            <CardHeader
              title={item.title}
              sx={{ color: "rgba(146,161,207, 0.9)" }}
              // sx={{ color: "rgba(0,255,127, 0.4)" }}
            />
            <CardContent>
              <Typography sx={{ color: "darkGrey" }}>
                {item.description}
              </Typography>
            </CardContent>
            <ItemFooter item={item} />
          </CardActionArea>
        </Card>
      </a>
    </Grid>
  );
};

export default ItemCard;
