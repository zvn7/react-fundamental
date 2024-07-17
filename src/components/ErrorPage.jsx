import { useRouteError } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
			<h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
			<p className="text-2xl text-gray-800 mb-4">Something went wrong.</p>
			<p className="text-lg text-gray-600 mb-8">
				{error.statusText || error.message}
			</p>
			<Link to="/" className="text-blue-500 hover:underline">
				Go back to the homepage
			</Link>
		</div>
	);
}
