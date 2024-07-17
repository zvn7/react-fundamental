import { useLoaderData } from "react-router-dom";

export default function SinglePost() {
	const post = useLoaderData();

	return (
		<div className="max-w-3xl mx-auto p-4">
			<h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
			<p className="text-lg text-gray-700 mb-6">{post?.body}</p>
			<div className="flex items-center space-x-4">
				<div className="w-12 h-12 rounded-full bg-gray-300"></div>
				<div>
					<p className="text-sm font-semibold">Author Name</p>
					<p className="text-xs text-gray-500">Published Date</p>
				</div>
			</div>
			<hr className="my-6" />
			<div className="prose">
				<p>Here’s some more content for the article...</p>
				<h2>Subheading</h2>
				<p>More detailed information goes here.</p>
				<ul>
					<li>Point one</li>
					<li>Point two</li>
					<li>Point three</li>
				</ul>
				<p>Conclusion or final thoughts.</p>
			</div>
		</div>
	);
}
