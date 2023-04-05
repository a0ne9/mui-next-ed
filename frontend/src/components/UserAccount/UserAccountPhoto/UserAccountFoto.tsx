import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./UserAccountPhoto.module.scss";
import React from "react";
import { IncreasedAvatar } from "../ShowIncreasedAvatar";

const UserAccountPhoto: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [increasedAvatar, setIncreasedAvatar] = React.useState<boolean>(false);

	const open = Boolean(anchorEl);
	//assert whether this user has avatar. If there isn't set avatar url by default
	const avatarUrl: string | null = "https://images.stopgame.ru/news/2021/08/24/1cRVR3iSq.jpg";

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const openAvatar = () => {
		setIncreasedAvatar(true);
		setAnchorEl(null);
	};
	const closeAvatar = () => {
		setIncreasedAvatar(false);
	};

	return (
		<>
			<div className={styles.userAvatarContainer}>
				<img className={styles.userAvatar} src={avatarUrl} alt="" />
				<IconButton
					aria-label="more"
					id="long-button"
					aria-controls={open ? "long-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-haspopup="true"
					onClick={handleClick}
					classes={{ root: styles.iconButtonShowVariants }}
				>
					<MoreVertIcon />
				</IconButton>
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					classes={{ paper: styles.avatarListVariants }}
					anchorOrigin={{
						vertical: "top",
						horizontal: "left"
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left"
					}}
				>
					<MenuItem onClick={openAvatar}>Open foto</MenuItem>
					<MenuItem onClick={handleClose}>
						<IconButton
							color="primary"
							aria-label="upload picture"
							component="label"
							disableRipple={true}
							sx={[
								{ fontSize: "100%", color: "black" },
								{
									"&:hover": {
										backgroundColor: "white"
									}
								}
							]}
						>
							Change avatar <input hidden accept="image/*" type="file" />
						</IconButton>
					</MenuItem>
				</Menu>
				{increasedAvatar && <IncreasedAvatar avatarUrl={avatarUrl} onClose={closeAvatar} />}
			</div>
		</>
	);
};

export default UserAccountPhoto;
