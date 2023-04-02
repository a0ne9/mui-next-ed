import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer: React.FC = () => {
	return <footer className={styles.footer}>footer aboba</footer>;
};

export default React.memo(Footer);
