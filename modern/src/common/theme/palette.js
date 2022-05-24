import { amber, grey, green, indigo, red } from '@mui/material/colors';
import { common } from '@mui/material/colors';

export default {
  background: {
    default: grey[50],
  },
  primary: {
    main: indigo[900],
  },
  secondary: {
    main: green[500],
    contrastText: common.white,
  },
  colors: {
    white: common.white,
    positive: green[500],
    medium: amber[700],
    negative: red[500],
    neutral: grey[500],
  },
};
