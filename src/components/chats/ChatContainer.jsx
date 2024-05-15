import React, { useContext } from 'react'
import SideBar from './SideBar'
import ChatBar from './ChatBar'
import ProfilePage from '../user/ProfilePage'
import EmptyChatDisplay from './EmptyChatDisplay'
import { AccountContext } from '../context/AccountProvider'


function ChatContainer() {

    const { person } = useContext(AccountContext)

    console.log(person)
    return (
        <>
            <section className='chat-container '>

                <SideBar />


              
                {Object.keys(person).length  ? <ChatBar /> : <EmptyChatDisplay />}



            </section>
        </>
    )
}

export default ChatContainer