import React from "react";
import { Input, Typography } from "@material-tailwind/react";

export default function Search({ search, setSearch, resultsCount }) {
	const onSearchChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="w-96 items-center">
			<Input onChange={onSearchChange} label="Search" value={search} />
			{search && (
				<Typography color="gray" variant="small">
					Ditemukan {resultsCount} data dari pencarian "{search}"
				</Typography>
			)}
		</div>
	);
}
