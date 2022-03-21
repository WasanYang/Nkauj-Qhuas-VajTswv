import { Fragment, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./HomePage.scss";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState("A");
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: string
  ) => {
    setSelectedIndex(key);
    console.log(key);
  };

  return (
    <Fragment>
      <Grid className="search">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search..." }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid style={{ maxWidth: "700px", margin: "auto" }}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          style={{ display: "flex" }}
        >
          {slist.map((item) => {
            return (
              <ListItemButton
                selected={selectedIndex === item.key}
                onClick={(event) => handleListItemClick(event, item.key)}
              >
                <ListItemText primary={item.key} />
              </ListItemButton>
            );
          })}
        </List>
      </Grid>
      <Divider></Divider>
      <Grid
        style={{
          maxWidth: "700px",
          margin: "auto",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Grid>Search result...</Grid>
      </Grid>
      <Grid style={{ maxWidth: "700px", margin: "auto" }}>
        <Card sx={{ display: "flex", marginBottom: "20px" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Name
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Auther
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              description
            </Box>
          </Box>
        </Card>
        <Card sx={{ display: "flex", marginBottom: "20px" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Name
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Auther
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              description
            </Box>
          </Box>
        </Card>
        <Card sx={{ display: "flex", marginBottom: "20px" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Name
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Auther
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              description
            </Box>
          </Box>
        </Card>
      </Grid>
    </Fragment>
  );
}

const slist = [
  {
    key: "A",
  },
  {
    key: "B",
  },
  {
    key: "C",
  },
  {
    key: "D",
  },
  {
    key: "E",
  },
  {
    key: "F",
  },
  {
    key: "G",
  },
];
