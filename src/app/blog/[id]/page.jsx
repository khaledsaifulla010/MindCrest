import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const page = async ({ params }) => {
  const { id } = params;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postDetails = await data.json();
  console.log(postDetails);
  return (
    <div>
      <Card className="w-[800px] mt-48 mx-auto border border-orange-100 transition-all duration-1000 hover:shadow-lg hover:scale-105">
        <CardHeader>
          <CardTitle className="text-center bg-blue-100 text-blue-600 border border-blue-200 rounded-2xl p-2 w-36 mx-auto mb-4">
            Blog ID : {postDetails.id}
          </CardTitle>
          <CardTitle className="text-center  font-bold text-xl">
            {postDetails.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-justify font-medium text-lg text-slate-600">
          <h1>{postDetails.body}</h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
