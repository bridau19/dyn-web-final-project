import React from "react";

function Header({ logout, loggedIn }) {
    return (
        <header className="HeaderWrapper">
            <div className="Header PageWrapper">
                <h1 className="Logo">Cheese Board</h1>
                <nav>
                <a href='/'>My Board</a>
                {/* TODO: pull in user id here */}
                <a href='/user/:id'>My Profile</a>
                <a href='/add-post'>Add Post</a>
                <a href='/logout'>Logout</a>

                    {!loggedIn && (
                        <>
                            <a href='/'>Login</a>
                            <a href='/signup'>Sign Up</a>
                        </>
                    )}

                    {loggedIn && (
                        <>
                            <a href='/user/id'>User Profile</a>
                            <button onClick={ () => logout() }>Log Out</button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;