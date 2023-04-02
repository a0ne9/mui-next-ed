import React from "react";
import { PageLayout } from "@/components/Layout";
import { SignInForm } from "@/components/Signin";

const Signin: React.FC = () => {
	return (
		<PageLayout>
			<SignInForm />
		</PageLayout>
	);
};

export default React.memo(Signin);
