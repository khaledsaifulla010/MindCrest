import Link from "next/link";
import { Card, CardHeader } from "./ui/card";

const PostCard = ({ post }) => {
  const truncatedTitle =
    post.title.split(" ").slice(0, 4).join(" ") +
    (post.title.split(" ").length > 4 ? "..." : "");
  return (
    <div>
      <Link href={`/blog/${post.id}`}>
        <Card className="w-[300px] h-[100px] border border-blue-100 transition-all duration-1000 hover:shadow-lg hover:scale-105">
          <CardHeader>
            <h1 className="text-2xl text-center font-bold">
              {" "}
              {truncatedTitle}{" "}
            </h1>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default PostCard;
