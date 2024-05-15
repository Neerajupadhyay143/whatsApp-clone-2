import React, { useState } from 'react'
import { createContext } from 'react'
export const AccountContext = createContext(null);
function AccountProvider({ children }) {
    const [accounts, setAccount] = useState();
    const [person, setPerson] = useState([]);
    const [modes, setModes] = useState("Dark Mode");
    return (
        <>
            <AccountContext.Provider value={
                {
                    accounts,
                    setAccount,

                    modes,
                    setModes,

                    person,
                    setPerson,
                }
            } >
                {children}
            </AccountContext.Provider>
        </>
    )
}

export default AccountProvider