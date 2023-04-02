import React from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import styles from "@/components/Signin/Signin.module.scss";
import { Form } from "@/components/common/Form";
import Link from "next/link";

const Signup: React.FC = () => {
	const [password, setPassword] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [email, setEmail] = React.useState("");
	const handleSubmit = (ev: React.SyntheticEvent) => {
		console.log(password, username, email);
	};

	const handlePasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(ev.currentTarget.value);
	};

	const handleUsernameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(ev.currentTarget.value);
	};

	const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(ev.currentTarget.value);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.upImage}></div>
			<h2 className={styles.h2}>
				To gain access to all the wiki functionality, please, create an account or{" "}
				{
					<Link href={"/auth/signin"} className={styles.link}>
						sign in
					</Link>
				}
			</h2>
			<Form onSubmit={handleSubmit} className={styles.form}>
				<h2 className={styles.title}>Sign up</h2>
				<FormControl fullWidth={true} classes={{ root: styles.formControl }}>
					<InputLabel htmlFor="username-input" classes={{ root: styles.label }}>
						Username
					</InputLabel>
					<Input
						id="username-input"
						type="text"
						classes={{ root: styles.input }}
						color="primary"
						onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
							handleUsernameChange(ev)
						}
					/>
				</FormControl>
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
					Sign up
				</Button>
			</Form>
		</div>
	);
};

export default React.memo(Signup);
