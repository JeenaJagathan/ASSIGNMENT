import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import SideBar from "./SideBar";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  image: {
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

export default function TitlebarBelowImageList() {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [comments, setComments] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [commentInput, setCommentInput] = React.useState("");
  const [nameInput, setNameInput] = React.useState("");
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setComments(item.comments);
  };

  const handleClose = () => {
    setCommentInput("");
    setOpen(!open);
  };

  const handleCommentInputChange = (event) => {
    setCommentInput(event.target.value);
  };
  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleCommentSubmit = () => {
    const newComment = { text: commentInput, author: nameInput };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setCommentInput("");
    setNameInput("");
    handleClose();
  };

  return (
    <>
      <SideBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageList sx={{ width: 500, height: 450 }}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              onClick={() => handleItemClick(item)}
              className={classes.image}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span> {item.desc}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      {selectedItem && (
        <Dialog open={true} onClose={() => setSelectedItem(null)}>
          <DialogTitle>{selectedItem.title}</DialogTitle>
          <DialogContent>
            {comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.text}</p>
                <p>- {comment.author}</p>
              </div>
            ))}
            <TextField
              autoFocus
              margin="dense"
              label=" Name"
              type="text"
              fullWidth
              value={nameInput}
              onChange={handleNameInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Add Comment"
              type="text"
              fullWidth
              value={commentInput}
              onChange={handleCommentInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleCommentSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3Jhbmdlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "Oranges",
    desc: "Organic oranges",
    comments: [
      { text: "Fesh oranges!", author: "Jeena" },
      { text: "Love it!", author: "Robin" },
    ],
  },
  {
    img: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg",
    title: "Burger",
    desc: "McDonalds",
    comments: [
      { text: "yummy!", author: "Robin" },
      { text: "Super!", author: "Somaraj" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "Eggs",
    desc: "Organic brown eggs",
    comments: [
      { text: "Organic!", author: "John " },
      { text: "fresh and healthy", author: " Smith" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    desc: "Starbucks",
    comments: [
      { text: "Super!", author: "TONY" },
      { text: "Tasty!", author: "syam" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    title: "Pizza",
    desc: "Dominos Pizza",
    comments: [
      { text: "Awesome photo!", author: "Dani" },
      { text: "Love it!", author: "Della" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    desc: "Organic honey",
    comments: [
      { text: "Sweettt", author: "Devi" },
      { text: "Love it!", author: "Arpit" },
    ],
  },
  {
    img: "https://www.12taste.com/wp-content/uploads/2021/08/raspberry-1.jpg",
    title: "Raspberry",
    desc: "Organic raspberry",
    comments: [
      { text: "Berry love!", author: "Arpitha" },
      { text: "Fresh!", author: "Kavitha" },
    ],
  },
  {
    img: "https://img.taste.com.au/Y5xrT0TD/taste/2013/06/kale-182565-1.jpg",
    title: "Kale",
    desc: "Organic kale",
    comments: [
      { text: "Fresh!", author: "Syam" },
      { text: "Healthy", author: "Soorya" },
    ],
  },
  {
    img: "https://wallpapercave.com/wp/9GjtjIj.jpg",
    title: "Ice creams",
    desc: "Haagen-Das",
    comments: [
      { text: "Awesome !", author: "Tony" },
      { text: "Love it!", author: "Tomy" },
    ],
  },
  {
    img: "https://images.everydayhealth.com/images/blueberries-101-1440x810.jpg",
    title: "Blueberry",
    desc: "Organic blueberry",
    comments: [
      { text: "Organic berries", author: "Jagatha" },
      { text: "organic fresh", author: "Jannifer" },
    ],
  },
  {
    img: "https://vrmshoppe.com/wp-content/uploads/2021/05/full-frame-shot-of-raw-almonds-royalty-free-image-683814187-1537885519.jpg",
    title: "Almonds",
    desc: "Dried almonds",
    comments: [
      { text: "Its healthy!", author: "Jacob " },
      { text: "Tasty!", author: "Jitha" },
    ],
  },
  {
    img: "https://fooppers.in/wp-content/uploads/2021/01/Salmon-Fish-Fillets-in-Guwahati.jpg",
    title: "Salmon",
    desc: "Wild caught Salmon",
    comments: [
      { text: "Awesome tste", author: "John Doe" },
      { text: "Love it!", author: "Jane Smith" },
    ],
  },
];
