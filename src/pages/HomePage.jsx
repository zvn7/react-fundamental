import { useEffect, useState } from "react";
import Article from "../components/Article";
import Search from "../components/Search";
import posts from "../data/posts.json";

export default function HomePage() {
	const [filteredPosts, setFilteredPosts] = useState(posts);
	const [resultsCount, setResultsCount] = useState(posts.length);
	const [exPosts, setExPosts] = useState([]);

	const onSearchChange = (value) => {
		const filtered = posts.filter((item) => item.title.includes(value));
		setFilteredPosts(filtered);
		setResultsCount(filtered.length);
	};

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => setExPosts(json));
	}, []);

	useEffect(() => {
		console.log("post baru");
	}, [filteredPosts])

	return (
		<>
			<div className="">
				<div className="flex justify-between space-x-12 items-center">
					<h1 className="text-2xl font-bold">Blog</h1>
					<Search onSearchChange={onSearchChange} resultsCount={resultsCount} />
				</div>
				<div className="grid grid-cols-3 gap-4 mt-6">
					{filteredPosts.map((post) => (
						<Article key={post.id} {...post} />
					))}
				</div>
				<hr />
				<div className="flex justify-between space-x-12 items-center">
					<h1 className="text-2xl font-bold">Ex Blog</h1>
					<Search onSearchChange={onSearchChange} resultsCount={resultsCount} />
				</div>
				<div className="grid grid-cols-3 gap-4 mt-6">
					{exPosts.map((item, index) => (
						<div key={index}>{item.title}</div>
					))}
				</div>
			</div>
		</>
	);
}
