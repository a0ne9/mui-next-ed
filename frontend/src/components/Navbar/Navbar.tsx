import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useRouter } from "next/router";
import { NavUrls } from "@/const/navUrls/navUrls";
import styles from "./Navbar.module.scss";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const router = useRouter();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (url: string) => {
		router.push(url);
		setAnchorEl(null);
	};

	return (
		<div className={styles.container}>
			<IconButton
				id="fade-button"
				aria-controls={open ? "fade-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				variant="outlined"
				color="secondary"
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id="fade-menu"
				MenuListProps={{
					"aria-labelledby": "fade-button",
					className: styles.menu
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				<MenuItem
					onClick={() => {
						handleClose(NavUrls.Posts);
					}}
				>
					Posts
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose(NavUrls.Home);
					}}
				>
					Home
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose(NavUrls.SignUp);
					}}
				>
					Sign up
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose(NavUrls.SignIn);
					}}
				>
					Sign in
				</MenuItem>
			</Menu>
		</div>
	);
};

export default React.memo(Navbar);
