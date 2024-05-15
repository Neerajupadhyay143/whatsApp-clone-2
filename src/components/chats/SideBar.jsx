import { Avatar, IconButton } from '@mui/material'
import React, { useContext } from 'react'

import GroupsIcon from '@mui/icons-material/Groups';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import { Search } from '@mui/icons-material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SideBarChats from './SideBarChats';
import { AccountContext } from '../context/AccountProvider';
import HeaderMenu from './menu/HeaderMenu';
import ProfilePage from '../user/ProfilePage';


function SideBar() {
    const { accounts } = useContext(AccountContext)
    return (
        <>
            <div className="sidebar d-flex flex-column">
                <div className="sidebar-header d-flex justify-content-between align-items-center p-1   text-white ">
                    {/* <Avatar src={accounts?.picture} /> */}
                    <ProfilePage />
                    <div className="sidebar-header-right d-flex justify-content-between align-items-center ">
                        <IconButton className='sidebar-icons-button'   >
                            <GroupsIcon className='sidebar-icons' />
                        </IconButton>
                        <IconButton className='sidebar-icons-button'>
                            <SettingsBackupRestoreIcon className='sidebar-icons' />
                        </IconButton >
                        <IconButton className='sidebar-icons-button'>
                            <MapsUgcIcon className='sidebar-icons' />
                        </IconButton>


                        <HeaderMenu />

                    </div>
                </div>

                <div className="sidebar-search d-flex  align-items-center justify-content-between p-2">
                    <div className="sidebar-input rounded d-flex align-items-center p-1">
                        <Search className='sidebar-icons' />
                        <div className="input  ">
                            <input type="text" placeholder='Search' />
                        </div>
                    </div>
                    <div className="sidebar-input-filter">
                        <IconButton>
                            <FilterListIcon className='sidebar-icons' />
                        </IconButton>

                    </div>
                </div>
                <div className="sidebar-chats d-flex flex-column">
                    <SideBarChats />
                    
                   


                </div>
            </div>
        </>
    )
}

export default SideBar