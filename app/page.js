

import getAllPosts from "@/fatching/getAllPost";
import Link from "next/link";


export default async function Home() {

  const post = await getAllPosts()
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="py-4 text-xl font-semibold">All Blog: </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {
          post.map(item => <div key={item.id}>
            <Link href={`/blog/${item.id}`}>{item.title}<span className="text-blue-600">...See More</span></Link></div>)
        }
      </div>
    </div>
  );
}


// import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import NavbarClient from "./NavbarClient";

// const NavbarServer = async () => {
//     const { isAuthenticated } = getKindeServerSession();
//     const isUserAuthenticated = await isAuthenticated();
// const loginLink = (<li className="font-bold"><LoginLink>Sign in</LoginLink></li>);
//     const registerLink = (<li className="font-bold"><RegisterLink>Sign up</RegisterLink></li>);
//     const logoutLink = (<li className="font-bold"><LogoutLink>Log out</LogoutLink></li>);
// Md Ashraf Hossain
// 3:50 PM
// "use client";


