import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import axios from "axios";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { getUsers } from '../../service/api';


function SideBarChats() {


    const [users, setUsers] = useState([{}])
    const { accounts } = useContext(AccountContext)
    const { setPerson } = useContext(AccountContext)
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await getUsers();
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



    const getUser = (user) => {
        setPerson(user)

    }

   

    return (


        <>
            <div >



                {users.map((val, index) => <>
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