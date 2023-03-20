import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [updatePost, setUpdatePost] = useState({ id: null, title: '', body: '' });

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error retrieving list of posts:', error);
      });
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (updatePost.id) {
      setUpdatePost(prevState => ({ ...prevState, [name]: value }));
    } else {
      setNewPost(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (updatePost.id) {
      axios.put(`${apiUrl}/${updatePost.id}`, updatePost)
        .then(response => {
          setPosts(prevState => prevState.map(post => post.id === updatePost.id ? response.data : post));
          setUpdatePost({ id: null, title: '', body: '' });
        })
        .catch(error => {
          console.error(`Error updating post ${updatePost.id}:`, error);
        });
    } else {
      axios.post(apiUrl, newPost)
        .then(response => {
          setPosts(prevState => [...prevState, response.data]);
          setNewPost({ title: '', body: '' });
        })
        .catch(error => {
          console.error('Error creating new post:', error);
        });
    }
  };

  const handleDelete = id => {
    axios.delete(`${apiUrl}/${id}`)
      .then(() => {
        setPosts(prevState => prevState.filter(post => post.id !== id));
      })
      .catch(error => {
        console.error(`Error deleting post ${id}:`, error);
      });
  };

  const handleUpdate = post => {
    setUpdatePost(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <button onClick={() => handleUpdate(post)}>Update</button>
          </li>
        ))}
      </ul>
      {updatePost.id &&
        <>
          <h2>Update post {updatePost.id}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" value={updatePost.title} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Body:
              <textarea name="body" value={updatePost.body} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      }
      {!updatePost.id &&
        <>
          <h2>Create a new post</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" value={newPost.title} onChange={handleInputChange} />
            </label>
            <br />
            <label>
          Body:
          <textarea name="body" value={newPost.body} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  }
</div>
);
}

export default PostPage;