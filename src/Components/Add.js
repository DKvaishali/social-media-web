import { ButtonGroup, Fab, Stack, Tooltip } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { DateRange, Image } from "@mui/icons-material";
import { PersonAdd, VideoCameraBack } from "@mui/icons-material";



const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})
const UserBox = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "20px",
   
  });
const Add = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        aria-label="Add"
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 20 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box
          width={400}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
            </Typography>
            <UserBox >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Typography variant="span">Vaishali</Typography>
        </UserBox>
        <TextField
        sx={{ width: "100%" }}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
          <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color="primary" />
        <Image color="secondary" />
        <VideoCameraBack color="success" />
        <PersonAdd color="error" />
          </Stack>
          <ButtonGroup 
          fullWidth
          variant="contained"
          aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button
            sx={{ width: "100px" }}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;
