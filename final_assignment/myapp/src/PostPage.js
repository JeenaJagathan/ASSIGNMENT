import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      const postsData = result.data.map((post) => ({ ...post, comments: [] }));
      setPosts(postsData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/comments");
      const commentsData = result.data.reduce((acc, comment) => {
        const postId = comment.postId;
        if (acc[postId]) {
          acc[postId].push(comment);
        } else {
          acc[postId] = [comment];
        }
        return acc;
      }, {});
      setPosts((prevPosts) =>
        prevPosts.map((post) => ({
          ...post,
          comments: commentsData[post.id] || [],
        }))
      );
    };
    fetchData();
  }, []);

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderComments = (comments) => {
    if (comments.length === 0) {
      return <Typography variant="caption">No comments yet</Typography>;
    }

    return (
      <div>
        {comments.map((comment) => (
          <Accordion key={comment.id} square>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">{comment.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{comment.body}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  };

  return (
    <div>
      {posts.map((post) => (
        <Accordion key={post.id} expanded={expanded === `panel${post.id}`} onChange={handleChange(`panel${post.id}`)} square>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${post.id}-content`} id={`panel${post.id}-header`}>
            <Typography variant="subtitle1">{post.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{post.body}</Typography>
          </AccordionDetails>
          {renderComments(post.comments)}
        </Accordion>
      ))}
    </div>
  );
};

export default PostsPage;