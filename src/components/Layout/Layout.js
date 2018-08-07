import React from 'react';

const Layout = ({children}) => (
    <React.Fragment>
      <div>toolbar side backdrop</div>
      <main>
        {children}
      </main>
    </React.Fragment>
);

export default Layout;