import React from "react";

const displayMessage = (comment) => {
  switch (comment.status) {
    case "approved":
      return comment.content;

    case "pending":
      return "This comment is awaiting moderation.";

    case "rejected":
      return "This comment has been rejected.";

    default:
      return comment.content;
  }
};

export const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{displayMessage(comment)}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
