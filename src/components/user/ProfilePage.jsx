import React, { useContext } from 'react'
import Drawer from '@mui/material/Drawer';
import "../../style/profle.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Box, IconButton, useMediaQuery } from '@mui/material';
import { AccountContext } from '../context/AccountProvider';


function ProfilePage() {
    const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const { accounts } = useContext(AccountContext)
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerStyle = {
        left: 25,
        top: 25,
        Height: 90,
        backgroundColor: "#111b21",
        width: 511,

    }
    const mobileDrawerStyle = {
        left: 1, // Adjust left position for mobile view
        top: 22, // Adjust top position for mobile view
        backgroundColor: "#111b21",
        width: 500, // Adjust width for mobile view
    };

    return (
        <div>
            <IconButton onClick={toggleDrawer(true)}><Avatar src={accounts?.picture} /></IconButton>
            <Drawer open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: isMobile ? mobileDrawerStyle : DrawerStyle }}
                BackdropProps={{ invisible: true }}>
                <div className="user-profile ">

                    <div className="profile-header text-white d-flex  p-3 ">

                        <div className='hidden-div'>

                        </div>
                        <div className='d-flex'>
                            <ArrowBackIcon onClick={toggleDrawer(false)} sx={{ marginRight: '10px', cursor: 'pointer' }} />
                            <h5 className=''>Profile</h5>
                        </div>

                    </div>
                    <div className="profile-image     p-5">
                        <Avatar src={accounts?.picture} style={{ boxSizing: 'border-box' }} className='profile-avatar' />
                    </div>
                    <div className="profile-details p-3">
                        <p> Your name</p>


                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default ProfilePage