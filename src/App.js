import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Paper } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import appTheme from "./config/theme";
import News from "./pages/News";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Paper style={{ height: "100vh", borderRadius: 0, overflow: "auto" }}>
        <Router>
          <div className="App">
            <Container maxWidth="xl" component="main">
              <Routes>
                <Route path="/" element={<News />} />
                <Route path="/news" element={<Navigate replace to="/" />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Container>
          </div>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
