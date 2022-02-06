import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ItemFooter = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingLeft: 1,
        // paddingTop: 1,
        paddingRight: 1,
        paddingBottom: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItem: "center",
          flexWrap: "wrap",
          // background: "red",
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
      </div>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          alignItem: "center",
          justifyContent: "flex-end",
          // background: "red",
        }}
      >
        <Typography
          sx={{
            margin: 1,
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {item.source}
        </Typography>
        <Typography
          sx={{
            margin: 1,
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {item.date}
        </Typography>
      </div>
    </Box>
  );
};

export default ItemFooter;
