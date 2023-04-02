import React from "react";
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import styles from "./Signin.module.scss";
import { Form } from "@/components/common/Form";
import Link from "next/link";

const Signin: React.FC = () => {
	const [password, setPassword] = React.useState("");
	const [email, setEmail] = React.useState("");
	const handleSubmit = (ev: React.SyntheticEvent) => {
		console.log(password, email);
	};

	const handlePasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(ev.currentTarget.value);
	};

	const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(ev.currentTarget.value);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.inImage}></div>
			<h2 className={styles.h2}>
				If you don't have an account, you can{" "}
				{
					<Link href={"/auth/signup"} className={styles.link}>
						sign up
					</Link>
				}
			</h2>
			<Form onSubmit={handleSubmit} className={styles.form}>
				<h2 className={styles.title}>Sign in</h2>
				<FormControl fullWidth={true} classes={{ root: styles.formControl }}>
					<InputLabel htmlFor="email-input" classes={{ root: styles.label }}>
						Email address
					</InputLabel>
					<Input
						id="email-input"
						type="email"
						classes={{ root: styles.input }}
						color="primary"
						onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
							handleEmailChange(ev)
						}
					/>
				</FormControl>
				<FormControl fullWidth={true} classes={{ root: styles.formControl }}>
					<InputLabel htmlFor="password-input" classes={{ root: styles.label }}>
						Password
					</InputLabel>
					<Input
						id="password-input"
						type="password"
						classes={{ root: styles.input }}
						color="primary"
						onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
							handlePasswordChange(ev)
						}
					/>
				</FormControl>

				<Button fullWidth color="primary" type="submit" variant="outlined">
					Sign in
				</Button>
			</Form>
		</div>
	);
};

export default React.memo(Signin);
