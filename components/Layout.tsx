import React, {ReactNode} from 'react';
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header/>
      <main>
        {props.children}
      </main>
    </>
  );
};

export default Layout;