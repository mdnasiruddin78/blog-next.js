const LinkWala = ({ isUserAuthenticated, loginLink, logoutLink, registerLink }) => {

    return (
        <div className="flex gap-4">
            <div>
                {!isUserAuthenticated && <h2 className="">{loginLink}</h2>}
            </div>
            <div>
                {isUserAuthenticated && <h2 className="">{logoutLink}</h2>}
            </div>
            <div>
                {!isUserAuthenticated && <h2 className="">{registerLink}</h2>}
            </div>
        </div>
    );
};

export default LinkWala;