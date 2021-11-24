import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import { db } from "./firebase";

export default function Cahts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  console.log(posts);
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <Search />
          <input placeholder="Friends" className="chats__chatIcon" />
        </div>
      </div>
      <div className="chat__posts">
          {posts.map(({id, data: image}) => (
              <></>
          ))}
      </div>
    </div>
  );
}
