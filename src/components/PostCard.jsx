import { Card, CardContent } from "./ui/card";


const PostCard = ({post}) => {
    return (
      <div>
        <Card className="w-[350px]">
          {/* <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader> */}
          <CardContent>
            <h1>Header</h1>
          </CardContent>
          
        </Card>
      </div>
    );
};

export default PostCard;