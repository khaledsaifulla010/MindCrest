"use client";

import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import ShowAllButton from "./ShowAllButton";

const LoadAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await data.json();
      setPosts(posts);
      setVisiblePosts(posts.slice(0, 12));
    };

    fetchPosts();
  }, []);

  const handleTogglePosts = () => {
    if (showAll) {
      setVisiblePosts(posts.slice(0, 12));
    } else {
      setVisiblePosts(posts);
    }
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-y-12 ml-6 mt-12">
        {visiblePosts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
      <div className="ml-[680px] mt-12 mb-12">
        <ShowAllButton
          onToggle={handleTogglePosts}
          showAll={showAll}
        ></ShowAllButton>
      </div>
    </div>
  );
};

export default LoadAllPosts;
