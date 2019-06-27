import { merge } from 'lodash-es';
import { createMuiTheme } from '@material-ui/core/styles';

const themeOptions = {
  typography: {
    useNextVariants: true,
  },
};

class Theme {
  constructor(options) {
    return createMuiTheme(merge({}, themeOptions, options));
  }
}

export default Theme;
