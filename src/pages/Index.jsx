import { useState } from "react";
import Article from "../components/Article";
import Search from "../components/Search";
import posts from "../data/posts.json";

export default function HomePage() {
	const [search, setSearch] = useState("");

	const filteredPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(search.toLowerCase()) ||
			post.content.toLowerCase().includes(search.toLowerCase()) ||
			post.author.toLowerCase().includes(search.toLowerCase())
	);
	return (
		<>
			<div className=" ">
				<div className="flex justify-between space-x-12 items-center">
					<h1 className="text-2xl font-bold">Blog</h1>
					<Search search={search} setSearch={setSearch} resultsCount={filteredPosts.length} />
				</div>
				<div className="grid grid-cols-3 gap-4 mt-6">
					{filteredPosts.map((post) => (
						<Article key={post.id} {...post} />
					))}
				</div>
			</div>
		</>
	);
}
