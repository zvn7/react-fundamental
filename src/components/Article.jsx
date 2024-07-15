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


export default function Article(props) {
	return (
		<>
			<Card className="mt-6 w-96" >
				<CardHeader color="blue-gray" className="relative h-56">
					<img src={props.image} alt={props.title} />
				</CardHeader>
				<CardBody>
					<div className="flex justify-between">
						<p>{props.author}</p>
						<p>{props.date}</p>
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
