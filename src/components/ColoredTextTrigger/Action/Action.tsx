import React from 'react';

import classNames from 'classnames';

import styles from './Action.scss';

export type ActionProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  [name: string]: any;
};

export const Action = ({ children, fullWidth = false, ...props }: ActionProps) => {
  const actionClassNames = classNames({
    [styles.action]: true,
    [styles.isFullWidth]: fullWidth,
  });

  return (
    <div className={actionClassNames} {...props}>
      {' '}
      {children}
    </div>
  );
};
