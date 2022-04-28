import React from 'react';
import reactDom from 'react-dom';
// 3rd party
import { CSSTransition } from 'react-transition-group';
// Styles
import './SideDrawer.css';

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      classNames="slide-in-left"
      in={props.show}
      timeout={200}
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return reactDom.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
