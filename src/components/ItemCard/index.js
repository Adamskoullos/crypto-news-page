import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ItemHeader from "../ItemHeader";

const ItemCard = ({ item, i }) => {
  return (
    <Grid item xs={12}>
      <Link to={`/news/${i}`} style={{ textDecoration: "none" }}>
        <Card variant="outlined" sx={{ height: "100%" }}>
          <CardActionArea>
            {/* <CardHeader> */}
            <ItemHeader item={item} />
            {/* </CardHeader> */}
            <CardContent>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
    // <Grid item xs={12} sm={6} md={4} lg={3}>
    //   <Link to={`/news/${i}`} style={{ textDecoration: "none" }}>
    //     <Card variant="outlined" sx={{ height: "100%" }}>
    //       <CardActionArea>
    //         <CardHeader
    //           avatar={
    //             <Avatar sx={{ bgcolor: "goldenRod" }} aria-label="recipe">
    //               V
    //             </Avatar>
    //           }
    //           title={item.title}
    //           // subheader={item.description}
    //         />
    //         <CardMedia
    //           component="img"
    //           height="150rem"
    //           image={
    //             item?.image?.thumbnail?.contentUrl ||
    //             "https://media.timeout.com/images/105124791/750/422/image.jpg"
    //           }
    //           alt="Paella dish"
    //         />
    //       </CardActionArea>
    //     </Card>
    //   </Link>
    // </Grid>
  );
};

export default ItemCard;
