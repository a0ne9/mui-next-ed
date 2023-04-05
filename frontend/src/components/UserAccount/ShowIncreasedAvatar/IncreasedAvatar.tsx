import styles from "./IncreasedAvatar.module.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";
interface IAvatarProps {
	avatarUrl: string;
	onClose: () => void;
}

const IncreasedAvatar: React.FC<IAvatarProps> = ({ avatarUrl, onClose }) => {
	return (
		<>
			<div className={styles.increasedAvatarDiv}>
				<div className={styles.increasedAvatarContainer}>
					<img src={avatarUrl} className={styles.increasedAvatarImg} alt="" />
					<HighlightOffIcon onClick={onClose} sx={{ color: "red", fontSize: "35px" }} />
				</div>
			</div>
		</>
	);
};

export default IncreasedAvatar;
