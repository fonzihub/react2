import { useState, useEffect } from "react";
import CommentList from "./CommentList";

const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = (props) => {
  const [review, setReview] = useState([]);

  const getReview = () => {
    console.log("ID passato alla fetch:", props.id);
    console.log("URL completa:", endpoint + props.id);
    fetch(endpoint + props.id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGFmMjc3M2ZkNGZkZTAwMTU0ODczNWIiLCJpYXQiOjE3NTYzMDkzNjMsImV4cCI6MTc1NzUxODk2M30.FnL9DtZxD1NQADqBX0FT56WpnSN0AzooeW43Xh23Yms",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Status:", response.status, response.statusText);
          return response.json();
        } else {
          throw new Error("errore recupero recensioni");
        }
      })
      .then((arrayOfRecensioni) => {
        console.log(arrayOfRecensioni);

        setReview(arrayOfRecensioni);
      })
      .catch((e) => {
        console.log("errore", e);
      });
  };

  useEffect(() => {
    getReview();
  }, [props.id]);

  return (
    <>
      <h4 className="text-center p-1">Comments</h4>
      <CommentList recensioni={review} />
    </>
  );
};

export default CommentArea;
