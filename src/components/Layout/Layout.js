import React from 'react';
import classes from './Layout.css';

const Layout = ({children}) => (
    <React.Fragment>
      <div>toolbar side backdrop</div>
      <main className={classes.Content}>
        {children}
      </main>
    </React.Fragment>
);

export default Layout;