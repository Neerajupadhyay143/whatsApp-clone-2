import React, { useState, useRef, useEffect } from 'react'
import { createContext } from 'react'
import { io } from "socket.io-client"
export const AccountContext = createContext(null);
function AccountProvider({ children }) {



    const [accounts, setAccount] = useState();
    const [person, setPerson] = useState([]);
    const [modes, setModes] = useState("Dark Mode");
    const [Logout, setLogout] = useState();
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [activeUsers, setActiveUsers] = useState([]);
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000')

        socket.current.on('getusers', (users) => {
            setActiveUsers(users);
        });
        return () => {
            socket.current.disconnect();
        };
    }, [])


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

                    setLogout,
                    socket,


                    activeUsers,
                    setActiveUsers,


                    isChatOpen,
                    setIsChatOpen,

                    isMobileScreen,
                    setIsMobileScreen,
                }
            } >
                {children}
            </AccountContext.Provider>
        </>
    )
}

export default AccountProvider