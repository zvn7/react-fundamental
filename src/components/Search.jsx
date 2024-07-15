import React, { useState } from "react";
import { Input, Typography } from "@material-tailwind/react";

export default function Search(props) {
	const [search, setSearch] = useState("");
	const onSearchChange = (e) => {
		setSearch(e.target.value);
		props.onSearchChange(e.target.value);
	};

	return (
		<div className="w-96 items-center">
			<Input onChange={onSearchChange} label="Search" value={search} />
			{search && (
				<Typography color="gray" variant="small">
					Ditemukan {props.resultsCount} data dari pencarian "{search}"
				</Typography>
			)}
		</div>
	);
}
