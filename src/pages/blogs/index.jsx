import { useEffect, useState } from "react";
import Search from "../../components/Search";
import { Link } from "react-router-dom";

export default function Blog() {
	const [resultsCount, setResultsCount] = useState(0);
	const [exPosts, setExPosts] = useState([]);

	const onSearchChange = (value) => {
		const filtered = exPosts.filter((item) => item.title.includes(value));
		setExPosts(filtered);
		setResultsCount(filtered.length);
	};

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => setExPosts(json));
	}, []);

	return (
		<div>
			<div className="flex justify-between space-x-12 items-center">
				<h1 className="text-2xl font-bold">Ex Blog</h1>
				<Search onSearchChange={onSearchChange} resultsCount={resultsCount} />
			</div>
			<div className="grid grid-cols-3 gap-4 mt-6">
				{exPosts.map((item, index) => (
					<div key={index}>
						<Link to={`/blog/${item.id}`}>
							<div>{item.title}</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
