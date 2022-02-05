import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ItemHeader = ({ item }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            padding: 2,
          }}
        >
          <Typography variant="h6" component="div">
            {item.title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row-reverse",
            padding: 1,
          }}
        >
          {item.tags.map((coin) => (
            <Avatar
              alt={coin.symbol}
              src={coin.icon}
              sx={{
                margin: 1,
                display: "inline-block",
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemHeader;
