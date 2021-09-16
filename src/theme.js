import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[400],
        },
        secondary: {
            main: grey[900],
        },
    },
    typography: {
        fontFamily: [
            'Jost',
            'Roboto',
            'sans-serif',
        ].join(','),
    }
});

export default theme