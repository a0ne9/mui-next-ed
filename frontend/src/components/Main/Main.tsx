import React from "react";
import { PageLayout } from "@/components/Layout";
import styles from "./Main.module.scss";
import { HomeInfo } from "@/components/HomeInfo";

const Main: React.FC = () => {
	return (
		<PageLayout>
			<section className={styles.main}>
				<HomeInfo />
			</section>
		</PageLayout>
	);
};

export default React.memo(Main);
