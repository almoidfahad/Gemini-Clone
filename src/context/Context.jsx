import { createContext } from "react"
import run from "../config/gemini"



export const Context = createContext()


const ContextProvider = (props) => {
    const onSend = async (prompt) => {
        await run(prompt)
    }

    onSend("How is the current pracident in usa?")

    const contextValue = {}


    return(
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}

export default ContextProvider
