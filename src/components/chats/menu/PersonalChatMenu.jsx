import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { IconButton } from '@mui/material';

function PersonalChatMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                marginTop: '-19px'
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: "10%",
            border: '0px',
            outline: 'none',
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                "white  ",


            backgroundColor: "#233138",

            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 25,

                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
                '&:hover': {
                    backgroundColor: alpha(
                     "#111b21"
                    ),
                },
            },
        },
    }));
    return (
        <div>
            <IconButton

                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}

            >
                <AddIcon className='sidebar-icons' />
            </IconButton>
            <StyledMenu
                className="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem sx={{ paddingBottom: '15px' }} onClick={handleClose} disableRipple>
                    <InsertDriveFileIcon sx={{ color: '#7f66ff' }} className='menu-icons' />
                    Document
                </MenuItem>
                <MenuItem sx={{ paddingBottom: '15px' }} onClick={handleClose} disableRipple>
                    <PermMediaIcon sx={{ color: '#007bfc' }} className='menu-icons' />
                    Photos & videos
                </MenuItem>
                <MenuItem sx={{ paddingBottom: '15px' }} onClick={handleClose} disableRipple>
                    <AddAPhotoIcon sx={{ color: '#ff2e74' }} className='menu-icons' />
                    Camera
                </MenuItem>
                <MenuItem sx={{ paddingBottom: '15px' }} onClick={handleClose} disableRipple>
                    <PersonIcon sx={{ color: '#009de2' }} classname='menu-icons' />
                    Contact
                </MenuItem>



            </StyledMenu>
        </div>
    )
}

export default PersonalChatMenu