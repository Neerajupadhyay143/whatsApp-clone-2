
import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../service/api';
import MicIcon from '@mui/icons-material/Mic';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AccountContext } from '../context/AccountProvider';
import PersonalChatMenu from './menu/PersonalChatMenu';

function ChatBar() {

    const { person } = useContext(AccountContext)
    console.log(person)




    const [users, setUses] = useState({})


    console.log(person);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await person
                setUses(response)

            } catch (error) {
                console.log("error to fetch the personal user data", error.message)
            }
        }
        fetchData()
    }, [])
    return (


        <>


            <div className='chat  d-flex flex-column  bg-dark d-none d-md-flex '>


                <div className='chatbar-header bg-black d-flex justify-content-between align-items-center text-white  p-1' >
                    <div className="left-chatHeader d-flex justify-content-between align-items-center  ">
                        <div className="chat-header-avatar 2">
                            <Avatar src={person.picture} />
                        </div>
                        <div className="chatbar-username">
                            <p className='username' >{person.name}</p>

                            <p className='user-current-status'>Online</p>
                        </div>


                    </div>
                    <div className="right-chatHeader d-flex align-items-center text-white">
                        <div className="chat-search">
                            <IconButton>
                                <Search className='sidebar-icons' />
                            </IconButton>
                        </div>
                        <div className="chat-options">
                            <IconButton>
                                <MoreVertIcon className="sidebar-icons" />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="chatbar-body  p-2">
                    <div style={{ marginBottom: '5px' }} className='p-3'>

                        <p className={`p-2 chatbar-message ${true && "chat-reciver"}`} >hey guys my name is neeraj kumar sharma <span>1:04 am</span></p>
                        <p className={`p-2 chatbar-message ${true && "chat-reciver"}`} >hey guys my name is neeraj kumar sharma <span>1:04 am</span></p>

                        <p className='p-2 chatbar-message'>what are you doing here ?</p>
                        <p className='p-2 chatbar-message'>hey guys my name is neeraj kumar sharma</p>
                        <p className={`p-2 chatbar-message ${true && "chat-reciver"}`} >hey guys my name is neeraj kumar sharma <span>1:04 am</span></p>

                        <p className='p-2 chatbar-message'>hey guys my name is neeraj kumar sharma</p>
                        <p className='p-2 chatbar-message'>hey guys my name is neeraj kumar sharma</p>
                        <p className='p-2 chatbar-message'>hey guys my name is neeraj kumar sharma</p>
                        <p className={`p-2 chatbar-message ${true && "chat-reciver"}`} >hey guys my name is neeraj kumar sharma <span>1:04 am</span></p>

                        <p className={`p-2 chatbar-message ${true && "chat-reciver"}`} >hey guys my name is neeraj kumar sharma <span>1:04 am</span></p>

                        <p className='p-2 chatbar-message'>hey guys my name is neeraj kumar sharma</p>
                        <p className={`p-2 chatbar-message ${true && "chat-reciver"}`} >hey guys my name is neeraj kumar sharma <span>1:04 am</span></p>
                        <p className='p-2 chatbar-message'>hey guys my name is neeraj kumar sharma</p>


                    </div>

                </div>

                <div className="chatbar-footer d-flex p-2 align-items-center" >

                    <div className="more-user-options p-2">
                        {/* <AddIcon className='sidebar-icons' />
                         */}
                         <PersonalChatMenu/>
                    </div>

                    <div className="user-message-input  p-2 d-flex">
                        <div className="emogy">
                            <EmojiEmotionsIcon className='sidebar-icons' />
                        </div>
                        <div className="user-input">
                            <form action="">  <input type="text" placeholder=' Type a message' /></form>
                        </div>
                    </div>

                    <div className="user-audio">
                        <MicIcon className='sidebar-icons' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBar