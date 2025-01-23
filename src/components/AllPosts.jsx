import PostCard from "./PostCard";

const AllPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  console.log(posts);

  return (
    <div>
      {posts.slice(0, 6).map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
};

export default AllPosts;
