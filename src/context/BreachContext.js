import React, { createContext, useReducer } from 'react'
import BreachReducer from '../reducer/BreachReducer'
export const BreachContext = createContext()

const BreachContextProvider = (props) => {

    const [{ breaches, offset, isLoad }, dispatch] = useReducer(BreachReducer, {
        breaches: [], offset: 0, isLoad: true
    })


    return (

        <BreachContext.Provider value={{ breaches, offset, isLoad, dispatch }}>
            {props.children}
        </BreachContext.Provider>

    )

}

export default BreachContextProvider
