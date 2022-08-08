import React from "react";
import SidebarComponent from "./shared/sidebar/sidebar";
import HeaderComponent from "./shared/header/header";

type Iprops = {
  children: React.ReactNode;
};

const PrincipalComponents = (props: Iprops) => {
  return (
    <div id="main-wrapper">
      <HeaderComponent />
      <SidebarComponent />
      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};

export const withPrincipal = (component: any) => {
  const Component = component;

  return (): React.ReactElement => {
    return (
      <PrincipalComponents>
        <Component />
      </PrincipalComponents>
    );
  };
};

export default PrincipalComponents;