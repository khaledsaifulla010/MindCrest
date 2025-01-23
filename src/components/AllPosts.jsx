import PostCard from "./PostCard";
import ShowAllButton from "./ShowAllButton";

const AllPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div>
      <div className="grid grid-cols-3 gap-y-24 ml-24 mt-12">
        {posts.slice(0, 6).map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
      <div className="ml-[680px] mt-24">
        <ShowAllButton posts={posts}></ShowAllButton>
      </div>
    </div>
  );
};

export default AllPosts;
