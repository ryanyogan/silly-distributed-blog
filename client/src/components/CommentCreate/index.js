import axios from "axios";
import React, { useState } from "react";

export const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div style={{ margin: "10px" }}>
      <form onSubmit={onSubmit}>
        <label className="form-label">New Comment</label>
        <input
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="mt-2 btn btn-primary form-control">
          Submit
        </button>
      </form>
    </div>
  );
};
