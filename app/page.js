

import getAllPosts from "@/fatching/getAllPost";
import Link from "next/link";


export default async function Home() {

  const post = await getAllPosts()
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="py-4 text-xl font-semibold">All Blog: </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {
          post.map(item => <div key={item.id} className="border-2 border-green-600 p-2 rounded-md bg-green-200">
            <Link href={`/blog/${item.id}`}>{item.title}<span className="text-blue-600">...See More</span></Link></div>)
        }
      </div>
    </div>
  );
}


