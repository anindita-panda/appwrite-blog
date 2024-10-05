import React from "react";
import {Container, Logo, LogoutBtn} from "../index";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
	const authStatus = useSelector((state) => state.auth.status); // useSelector is a hook from react-redux that allows you to extract data from the Redux store state, using a selector function.
	const navigate = useNavigate();

	const navItems = [
		{
			name: "Home", // name is a string that represents the name of the link.
			slug: "/", // slug is a string that represents a part of a URL which identifies a particular page on a website in a form readable by users.
			active: true, // active is a boolean that determines if the link is active or not.
		},
		{
			name: "Login",
			slug: "/login",
			active: !authStatus, // If the user is not authenticated, the link is active.
		},
		{
			name: "Signup",
			slug: "/signup",
			active: !authStatus,
		},
		{
			name: "All Posts",
			slug: "/all-posts",
			active: authStatus,
		},
		{
			name: "Add Post",
			slug: "/add-post",
			active: authStatus,
		},
	];

	return (
		<header className="py-3 shadow bg-gray-500">
			<Container>
				<nav className="flex">
					<div className="mr-4">
						<Link to="/">
							<Logo width="70px" />
						</Link>
					</div>
					<ul className="flex ml-auto">
						{navItems.map((item) =>
							item.active ? (
								<li key={item.name}>
									<button
										onClick={() => navigate(item.slug)}
										className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer">
										{item.name}
									</button>
								</li>
							) : null
						)}
						{authStatus && ( // If the user is authenticated, the Logout button is displayed.
							<li>
								<LogoutBtn />
							</li>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
