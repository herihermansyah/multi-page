import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import logo from "../assets/logo.png";
import { Divider } from "@mui/material";

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
}));

export default function CardRoom() {
  const room = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Standard Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Superior Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1670869816898-7a4149b3de0c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Suite Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "presidential Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1505773278895-5efa7b11679a?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1617098474202-0d0d7f60c56b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Standard Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 8,
      image:
        "https://plus.unsplash.com/premium_photo-1671269943748-48860a21e487?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Superior Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1632566853092-a0faa4665585?q=80&w=899&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Standard Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 10,
      image:
        "https://plus.unsplash.com/premium_photo-1676823553444-3ce8a1bc85c8?q=80&w=831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Deluxe   Room",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];

  return (
    <>
      <Typography sx={{ marginBottom: 10, textAlign: "center" }} variant="h4">
        Hotels Room
        <Divider />
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {room.map((room) => (
          <Card sx={{ maxWidth: 345 }} key={room.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img src={logo} alt="logo" loading="lazy" width={40} />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={room.title}
            />
            <img src={room.image} alt={room.title} className="w-full h-1/2" />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {room.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
