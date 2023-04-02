import React from "react";
import { PageLayout } from "@/components/Layout";
import { SignupForm } from "@/components/Signup";

const Signup: React.FC = () => {
	return (
		<PageLayout>
			<SignupForm />
		</PageLayout>
	);
};

export default React.memo(Signup);
