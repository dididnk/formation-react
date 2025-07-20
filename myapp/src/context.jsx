import { createContext, useState } from "react";

const TodosContext = createContext();

const TodosProvider = ({ children }) =>{
    const [theme, setTheme] = useState('dark');
    return <TodosContext.Provider value={{ theme }}>{children} </TodosContext.Provider>
}

export default TodosProvider;