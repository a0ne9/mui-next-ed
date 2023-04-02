import React from "react";
import { PageLayout } from "@/components/Layout";
import { ItemPage } from "@/components/ItemPage";

const Posts: React.FC = () => {
	return (
		<PageLayout>
			<ItemPage />
		</PageLayout>
	);
};

export default React.memo(Posts);