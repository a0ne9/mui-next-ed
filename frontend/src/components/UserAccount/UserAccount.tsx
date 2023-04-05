import { Grid } from "@mui/material";
import styles from "./UserAccount.module.scss";
import * as React from "react";

import { UserAccountPhoto } from "./UserAccountPhoto";

const UserAccount: React.FC = () => {
	return (
		<>
			<Grid container xs={11} classes={{ root: styles.accountGridContainer }}>
				<Grid item>
					<UserAccountPhoto />
				</Grid>
			</Grid>
		</>
	);
};

/*
Сделать:
юзернейм, имя фамилия
статус, о себе
изменение ИО, статуса и о себе
рейтинг автора вывести
посты, написанные пользователем
*/

export default UserAccount;
