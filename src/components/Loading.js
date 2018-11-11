// @flow

import React from 'react';
import MUIListItem from '@material-ui/core/ListItem';
import MUIListItemText from '@material-ui/core/ListItemText';
import MUITypography from '@material-ui/core/Typography';
import type { LoadingProps } from '../types';

const Typography = ({ theme }: { theme: any }) => (
  <MUITypography
    style={theme.loadingTextStyle}
    className={theme.loadingTextClassName}
  >
    Loading...
  </MUITypography>
);

const Loading = ({ theme }: LoadingProps) => (
  <MUIListItem style={theme.loadingStyle} className={theme.loadingClassName}>
    <MUIListItemText disableTypography primary={<Typography theme={theme} />} />
  </MUIListItem>
);

export default Loading;
