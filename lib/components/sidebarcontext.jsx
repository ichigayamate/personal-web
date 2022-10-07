import { createContext } from "react";

const SidebarContext = createContext({
    showSide: false,
    setShowSide: () => { }
})

export default SidebarContext;