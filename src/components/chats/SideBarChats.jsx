import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import axios from "axios";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccountContext } from '../context/AccountProvider';
import { getUsers } from '../../service/api.js';
import { selectChat, deselectChat, clearSelectedChats } from '../features/chats/chatSlice.js';
import { setCommunication } from '../../service/api.js';
import { useMediaQuery } from 'react-responsive';




function SideBarChats({ searchQueries }) {


    const [users, setUsers] = useState([])
    const { accounts, socket, setActiveUsers, setIsChatOpen, setIsMobileScreen } = useContext(AccountContext)
    const { setPerson } = useContext(AccountContext)

    const dispatch = useDispatch();


    const selectedChatIds = useSelector(state => state.chats.selectedChatIds);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                console.log('Fetching users...');

                const response = await getUsers();

                console.log('Response from getUsers:', response);

                if (isMounted) {
                    const filteredUsers = response.filter(user => user.sub !== accounts.sub);


                    setUsers(filteredUsers);

                }

            } catch (error) {
                console.log("Error fetching data from API: ", error);
            }
        };
        fetchData()


        return () => {
            isMounted = false
        }

    }, [accounts.sub, users.length])

    useEffect(() => {
        socket.current.emit('addusers', accounts);

    }, [accounts])

    useEffect(() => {
        if (socket.current) {
            socket.current.on('getusers', (users) => {
                setActiveUsers(users);
            });
        }
    }, [socket]);


    const getUser = async (user) => {

        setPerson(user)
        await setCommunication({
            senderId: accounts?.sub,
            reciverId: user?.sub
        })
        setIsChatOpen(true);

        setIsMobileScreen(isMobile);

        // console.log(user.sub)
        // Call getMessageDetails here with the updated communicate state
        // getMessageDetails(communicate._id, setMessages);

    }
    const handleSelection = (user) => {
        if (selectedChatIds.includes(user.sub)) {
            dispatch(deselectChat(user.sub));
        } else {
            dispatch(selectChat(user.sub));
        }
    };

    const handleDeleteSelected = () => {
        setUsers(users.filter(user => !selectedChatIds.includes(user.sub)));
        dispatch(clearSelectedChats());
    };

    const searchFilteredUsers = users.filter(user =>
        user.name && user.name.toLowerCase().includes(searchQueries.toLowerCase())
    );


    return (


        <>


            <div >



                {searchFilteredUsers.map((val, index) => <>
                    <div key={index} className="main-sidebarChat mt-2 text-white d-flex justify-content-between  p-2" onClick={() => getUser(val)}>
                        <div className="sidebarChat-avatar ">
                            <Avatar src={val.picture} sx={{ fontSize: '40px' }} />
                        </div>
                        <div className="Right-sidebarChat d-flex justify-content-between">
                            <div className="setion1">
                                <div className="user-name text-white">
                                    <p>{val.name}</p>
                                </div>
                                <div className="user-details ">
                                    <p>bhai dhyan se bike chalya kr </p>
                                </div>
                            </div>
                            <div className="section2 d-flex flex-column align-items-center">
                                <div className="user-more-timing">
                                    <p>Today</p>
                                </div>
                                <div className="user-status">
                                    <ExpandMoreIcon className='sidebar-icons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                )}
                {/* <div className="main-sidebarChat mt-2 text-white d-flex justify-content-between  p-2">
                <div className="sidebarChat-avatar ">
                    <Avatar sx={{ fontSize: '40px' }} />
                </div>
                <div className="Right-sidebarChat d-flex justify-content-between">
                    <div className="setion1">
                        <div className="user-name text-white">
                            <p>Neeraj Upadhyay</p>
                        </div>
                        <div className="user-details ">
                            <p>bhai dhyan se bike chalya kr </p>
                        </div>
                    </div>
                    <div className="section2 d-flex flex-column align-items-center">
                        <div className="user-more-timing">
                            <p>Today</p>
                        </div>
                        <div className="user-status">
                            <ExpandMoreIcon className='sidebar-icons' />
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </>
    )
}

export default SideBarChats