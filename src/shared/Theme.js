import { createTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#fefefe",
		},
		secondary: purple,
	},
	typography: {
		fontFamily: "Quicksand",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});
