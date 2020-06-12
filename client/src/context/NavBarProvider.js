import React, { createContext, useReducer } from 'react';

export const NavBarContext = createContext();

const handleOpen = 'handleOpen';
const handleClose = 'handleClose';

function NavBarReducer(state, action) {
  switch (action.type) {
    case handleOpen:
      return {
        ...state,
        open: true,
      };
    case handleClose:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

export default function NavBarProvider(props) {
  const initialState = {
    open: true,
  };
  const [state, dispatch] = useReducer(NavBarReducer, initialState);

  const handleDrawerOpen = () => {
    dispatch({ type: handleOpen });
  };

  const handleDrawerClose = () => {
    dispatch({ type: handleClose });
  };

  return (
    <NavBarContext.Provider
      value={{
        open: state.open,
        handleDrawerOpen,
        handleDrawerClose,
      }}>
      {props.children}
    </NavBarContext.Provider>
  );
}
