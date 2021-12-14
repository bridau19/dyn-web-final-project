import React from "react";

function Header({ logout, loggedIn }) {
    return (
        <header className="HeaderWrapper">
            <div className="Header PageWrapper">
                <h1 className="Logo"> The Force Forums</h1>
                <nav>
                    {!loggedIn && (
                        <>
                            <a href='/login'>Login</a>
                            <a href='/signup'>Create Profile</a>
                            <a href='/about'>About</a>
                        </>
                    )}

                    {loggedIn && (
                        <>
                            <a href='/'>My Board</a>
                            <a href='/user/:id'>My Profile</a>
                            <a href='/add-post'>Add Post</a>
                            <a href='/about'>About</a>
                            <button className="Button" onClick={ () => logout() }>Logout</button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;