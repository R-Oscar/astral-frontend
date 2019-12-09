import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

const ErrorIcon = props => (
  <SvgIcon width={20} height={20} viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.96078 1.07709C6.11706 0.920805 6.32903 0.833008 6.55004 0.833008H13.45C13.6711 0.833008 13.883 0.920805 14.0393 1.07709L18.9226 5.96042C19.0789 6.1167 19.1667 6.32866 19.1667 6.54967V13.4497C19.1667 13.6707 19.0789 13.8826 18.9226 14.0389L14.0393 18.9223C13.883 19.0785 13.6711 19.1663 13.45 19.1663H6.55004C6.32903 19.1663 6.11706 19.0785 5.96078 18.9223L1.07745 14.0389C0.921171 13.8826 0.833374 13.6707 0.833374 13.4497V6.54967C0.833374 6.32866 0.921171 6.1167 1.07745 5.96042L5.96078 1.07709ZM6.89522 2.49967L2.50004 6.89485V13.1045L6.89522 17.4997H13.1049L17.5 13.1045V6.89485L13.1049 2.49967H6.89522Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0892 6.91107C13.4147 7.23651 13.4147 7.76414 13.0892 8.08958L8.08921 13.0896C7.76378 13.415 7.23614 13.415 6.9107 13.0896C6.58527 12.7641 6.58527 12.2365 6.9107 11.9111L11.9107 6.91107C12.2361 6.58563 12.7638 6.58563 13.0892 6.91107Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.9107 6.91107C7.23614 6.58563 7.76378 6.58563 8.08921 6.91107L13.0892 11.9111C13.4147 12.2365 13.4147 12.7641 13.0892 13.0896C12.7638 13.415 12.2361 13.415 11.9107 13.0896L6.9107 8.08958C6.58527 7.76414 6.58527 7.23651 6.9107 6.91107Z"
    />
  </SvgIcon>
);

export default ErrorIcon;
