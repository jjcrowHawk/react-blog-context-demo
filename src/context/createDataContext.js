import React, { useReducer } from 'react'

/**
 * Helper function to create Context Data from React
 */
export default (reducer, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //Creating an object with callbacks that modifies the state, actions are HOF 
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>
      {children}
    </Context.Provider>
  }

  return { Context, Provider };
}