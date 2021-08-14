import React from "react";
import { PostCreate } from "../PostCreate";
import { PostList } from "../PostList";
import "./styles.css";

export const App = () => {
  return (
    <div className="container">
      <div className="app">
        <h1>Create Post</h1>
        <div className="app-section">
          <PostCreate />
        </div>
        <hr />
        <div className="app-section">
          <h1>Posts</h1>
          <PostList />
        </div>
      </div>
    </div>
  );
};
