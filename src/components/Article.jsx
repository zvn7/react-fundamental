import {
	Badge,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	Typography,
} from "@material-tailwind/react";

const ArticleStatus = ({ isNew }) => {
	return isNew && <span className="text-red-500">New</span>;
};

// const NewArticle = () => {
// 	return <span className="text-red-500">New</span>;
// };

export default function Article(props) {
	return (
		<>
			<Card className="mt-6 w-96">
				<CardHeader color="blue-gray" className="relative h-56">
					<img src={props.image} alt={props.title} />
				</CardHeader>
				<CardBody>
					<div className="flex justify-between">
						<p>{props.author}</p>
						<div className="flex space-x-2">
							<p>{props.date}</p>
							{/* <p className="text-red-500">{props.isNew && "New"}</p> */}
							<ArticleStatus isNew={props.isNew} />
							{/* {props.isNew && <NewArticle />} */}
						</div>
					</div>
					<Typography variant="h4">{props.title}</Typography>
					<Typography color="gray" variant="small">
						{props.excerpt}
					</Typography>
					<div className="mt-4 w-36 text-center">
						<Chip variant="outlined" size="sm" value={props.category} />
					</div>
				</CardBody>
				<CardFooter>
					<Button color="blue">Read More</Button>
				</CardFooter>
			</Card>
		</>
	);
}
