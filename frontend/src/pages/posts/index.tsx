import React from "react";
import { PageLayout } from "@/components/Layout";
import { PostsPage } from "@/components/Posts";

const Posts: React.FC = () => {
	return (
		<PageLayout>
			<PostsPage />
		</PageLayout>
	);
};

export default React.memo(Posts);
