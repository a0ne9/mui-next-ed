import React from "react";
import styles from "./Header.module.scss";
import { Navbar } from "@/components/Navbar";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Navbar />
			<div className={styles.h3}>Energy drinks wiki</div>
		</header>
	);
};

export default React.memo(Header);
