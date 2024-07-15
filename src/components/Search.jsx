import React, { useState } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";

export default function Search(props) {
	const [search, setSearch] = useState("");
	const onSearchChange = () => {
		props.onSearchChange(search);
	};

	const searchKeyDown = (e) => {
		if (e.key === "Enter") {
			onSearchChange();
		}
	};

	return (
		<div className="w-96 items-center">
			<div className="flex space-x-2">
				<Input onChange={e => setSearch(e.target.value)} onKeyDown={searchKeyDown} label="Search" value={search} />
				<Button onClick={onSearchChange}>Cari</Button>
			</div>
			{search && (
				<Typography color="gray" variant="small">
					Ditemukan {props.resultsCount} data dari pencarian "{search}"
				</Typography>
			)}
		</div>
	);
}
