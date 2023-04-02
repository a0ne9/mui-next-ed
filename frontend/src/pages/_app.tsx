import React from "react";
import Head from "next/head";

import "../styles/global.scss";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import createEmotionCache from "../styles/createEmotionCache";
import { MuiTheme } from "../styles/MuiTheme";
import type { AppProps } from "next/app";
import type { EmotionCache } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: AppProps & { emotionCache: EmotionCache }) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>EDW</title>
				<meta name="description" content="Energy Drinks Wiki" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={MuiTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
};

export default React.memo(MyApp);
