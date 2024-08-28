import React from "react";
import { Box, ImageList, Typography } from "@mui/material";
import { Avatar, AvatarGroup } from "@mui/material";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import ImageListItem from "@mui/material/ImageListItem";
import breakfast from "../images/break.jpeg";
import ganesha from "../images/ganesha.webp";
import krishna from "../images/krishna.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8} alignItems="center">
          <Avatar alt="Remy Sharp" src={img1}  />
          <Avatar alt="Travis Howard" src={img2}  />
          <Avatar alt="Cindy Baker" src={img3} />
          <Avatar alt="Agnes Walker" src={img4}  />
          <Avatar alt="Trevor Henderson" src={img5}  />
          <Avatar alt="Agnes Walker" src={img4}  />
          <Avatar alt="Trevor Henderson" src={img5}  />
          <Avatar alt="Travis Howard" src={img2}  />
          <Avatar alt="Cindy Baker" src={img3} />
          <Avatar alt="Agnes Walker" src={img4}  />
          <Avatar alt="Trevor Henderson" src={img5}  />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={ganesha} alt="Ganesha" />
          </ImageListItem>
          <ImageListItem>
            <img src={breakfast} alt="breakfast" />
          </ImageListItem>
          <ImageListItem>
            <img src={krishna} alt="krishna" height="50px"/>
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} >
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,height:"100px"}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
