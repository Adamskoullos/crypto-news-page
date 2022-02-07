import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ItemFooter from "../ItemFooter";

const ItemCard = ({ item, i }) => {
  return (
    <Grid item xs={12}>
      <Link to={`/news/${i}`} style={{ textDecoration: "none" }}>
        <Card variant="outlined" sx={{ height: "100%" }}>
          <CardActionArea>
            <CardHeader title={item.title} sx={{ color: "goldenrod" }} />
            <CardContent>
              <Typography sx={{ color: "darkGrey" }}>
                {item.description}
              </Typography>
            </CardContent>
            <ItemFooter item={item} />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default ItemCard;
