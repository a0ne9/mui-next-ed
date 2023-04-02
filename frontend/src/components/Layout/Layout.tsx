import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default React.memo(PageLayout);
