import { Paper, Typography } from "@mui/material";

const Header = () => {
  return (
    <Paper className="news-header" variant="outlined">
      <Typography variant="h2" color="#202020" sx={{ fontWeight: 300, ml: 2 }}>
        News Funnel
      </Typography>
    </Paper>
  );
};

export default Header;
