import { Card, CardContent } from "./ui/card";

const PostCard = ({ post }) => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardContent>
          <h1>Header {post.id} </h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostCard;
