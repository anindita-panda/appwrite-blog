import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

// The AuthLayout component manages access to certain routes based on authentication status
export default function AuthLayout({children, authentication = true}) {
	const navigate = useNavigate();
	const [loader, setLoader] = useState(true);

	const authStatus = useSelector((state) => state.auth.status);
	useEffect(() => {
		if (authStatus !== authentication) {
			if (authentication) {
				//If authentication is required (authentication is true), redirect to the login page.
				navigate("/login");
			} else {
				// If authentication is not required, redirect to the homepage.
				navigate("/");
			}
		}
		setLoader(false);
	}, [authStatus, navigate, authentication]);
	return loader ? <div>Loading...</div> : <>{children}</>;
}

/*
authStatus !== authentication:
------------------------------------------------------------------


This checks whether the current authentication status (authStatus) does not match the expected authentication requirement (authentication).

Scenario 1: authentication is true (User should be authenticated)
------------------------------------------------------------------

- When authentication is true, it means the page or resource requires the user to be authenticated.
- If authStatus is false (the user is not authenticated), the user will be navigated to the login page (/login).
- Outcome: Redirect to /login.


Scenario 2: authentication is false (No authentication required)
------------------------------------------------------------------


- When authentication is false, it means the page or resource does not require authentication.
- If authStatus is true (the user is authenticated), this indicates the user's current status doesn't match the expected scenario.
- The user will then be navigated to the homepage (/), where no authentication is needed.
- Outcome: Redirect to /.

Scenerio 3 : authStatus === authentication
------------------------------------------------------------------
- authStatus is true: The user is currently authenticated.
- authentication is true: The page or resource requires the user to be authenticated.
- Since both values are the same (both true), the condition authStatus !== authentication is false, so no redirection occurs.
- Outcome: The user remains on the page because they are correctly authenticated as expected.

*/
