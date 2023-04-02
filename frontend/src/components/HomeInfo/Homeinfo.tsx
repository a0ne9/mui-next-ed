import React from "react";
import styles from "./HomeInfo.module.scss";

const HomeInfo: React.FC = () => {
	return (
		<>
			<div className={styles.description}>
				<h1 className={styles.h1}>Welcome</h1>
				<h2>
					Welcome to the energy drink almanac website! If you want to learn more about
					popular drinks that can help you stay alert and energized throughout the day,
					you've come to the right place. We have gathered the latest information on the
					composition, benefits, and risks of energy drinks, as well as trends in this
					field. Look for answers to your questions and share your opinions with our
					community. Let's explore what energy drinks are and how they affect our bodies
					together!
				</h2>
			</div>
		</>
	);
};
export default React.memo(HomeInfo);
