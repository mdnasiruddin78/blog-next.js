import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile =async () => {

    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    if (!isUserAuthenticated){
        redirect("/api/auth/login");
    }

    return (
        <div className="">
            <h2 className="text-center text-xl font-bold">Welcome To Your Profile</h2>
        </div>
    );
};

export default Profile;


// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

// const Profile = async () => {

//     const { isAuthenticated } = getKindeServerSession();
//     const isUserAuthenticated = await isAuthenticated();

//     if (!isUserAuthenticated){
//         redirect("/api/auth/login");
//     }

//     return (
//         <div className="p-5">
//             <div className="p-5 bg-gray-300">
//                 <div className="p-5 bg-gray-100">