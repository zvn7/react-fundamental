import React from "react";
import {
	Navbar,
	MobileNav,
	Typography,
	IconButton,
	Button,
	Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";

function NavList() {
	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to="/"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Home
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to="/about"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					About
				</Link>
			</Typography>
		</ul>
	);
}

const navList = (
	<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
		<Typography
			as="li"
			variant="small"
			color="blue-gray"
			className="p-1 font-normal"
		>
			<Link
				to="/"
				className="flex items-center hover:text-blue-500 transition-colors"
			>
				Home
			</Link>
		</Typography>
		<Typography
			as="li"
			variant="small"
			color="blue-gray"
			className="p-1 font-normal"
		>
			<Link
				to="/about"
				className="flex items-center hover:text-blue-500 transition-colors"
			>
				About
			</Link>
		</Typography>
		<Typography
			as="li"
			variant="small"
			color="blue-gray"
			className="p-1 font-normal"
		>
			<Link
				to="/blog"
				className="flex items-center hover:text-blue-500 transition-colors"
			>
				Blog
			</Link>
		</Typography>
	</ul>
);

export function RootLayout() {
	const [openNav, setOpenNav] = React.useState(false);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<>
			<Navbar className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4">
				<div className="flex items-center justify-between text-blue-gray-900">
					<Typography
						as="a"
						href="#"
						className="mr-4 cursor-pointer py-1.5 font-medium"
					>
						Material Tailwind
					</Typography>
					<div className="flex items-center gap-4">
						<div className="mr-4 hidden lg:block">{navList}</div>
						<div className="flex items-center gap-x-1">
							{/* <Button
								variant="text"
								size="sm"
								className="hidden lg:inline-block"
							>
								<span>Log In</span>
							</Button>
							<Button
								variant="gradient"
								size="sm"
								className="hidden lg:inline-block"
							>
								<span>Sign in</span>
							</Button> */}
						</div>
						<IconButton
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
				<MobileNav open={openNav}>
					{navList}
					<div className="flex items-center gap-x-1">
						{/* <Button fullWidth variant="text" size="sm" className="">
							<span>Log In</span>
						</Button>
						<Button fullWidth variant="gradient" size="sm" className="">
							<span>Sign in</span>
						</Button> */}
					</div>
				</MobileNav>
			</Navbar>
			<div className="mt-4">
				<Outlet />
			</div>
		</>
	);
}
