import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentCreate } from "../CommentCreate";
import { CommentList } from "../CommentList";

export const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div key={post.id} className="card-body">
          <h3 className="card-text">{post.title}</h3>
        </div>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
