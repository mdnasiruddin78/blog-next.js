import getPost from "@/fatching/getPost";

const page = async ({ params }) => {

    const { id } = params
    const result = await getPost(id)
    // console.log(result)
    return (
        <div className="w-11/12 mx-auto">
            <div className="bg-green-200 border-2 border-green-600 rounded-md p-8 mt-20">
                <h2 className=""><span className="font-bold">Description: </span>{result.body}</h2>
            </div>
        </div>
    );
};

export default page;