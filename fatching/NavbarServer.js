import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import LinkWala from "./LinkWala";

const NavbarServer = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();


    const loginLink = (<li className="font-semibold"><LoginLink>Sign in</LoginLink></li>);
    const registerLink = (<li className="font-semibold"><RegisterLink>Sign up</RegisterLink></li>);
    const logoutLink = (<li className="font-semibold"><LogoutLink>Log out</LogoutLink></li>);

    return (
        <LinkWala
            isUserAuthenticated={isUserAuthenticated || false}
            loginLink={loginLink}
            logoutLink={logoutLink}
            registerLink={registerLink}
        />



    );
};

export default NavbarServer;