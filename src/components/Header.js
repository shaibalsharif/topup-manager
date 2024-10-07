import { useState } from 'react';
import { Avatar, IconButton, Drawer, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, ViewGridIcon, LockClosedIcon, PhoneIcon, LogoutIcon } from '@heroicons/react/outline';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Clear cookies or authentication tokens
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate('/login'); // Redirect to login page
    };

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
            {/* Drawer Trigger Button */}
            <IconButton onClick={toggleDrawer(true)} className="text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </IconButton>

            <h1 className="text-2xl">TopUp Company</h1>

            {/* Avatar and Dropdown Menu */}
            <div className="flex items-center">
                <IconButton onClick={handleMenuClick} className="text-white">
                    <Avatar alt="User" src="/assets/avatar.png" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                        <ListItemIcon>
                            <UserIcon className="h-5 w-5" />
                        </ListItemIcon>
                        Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
                        <ListItemIcon>
                            <ViewGridIcon className="h-5 w-5" />
                        </ListItemIcon>
                        Dashboard
                    </MenuItem>
                    <MenuItem component={Link} to="/change-password" onClick={handleMenuClose}>
                        <ListItemIcon>
                            <LockClosedIcon className="h-5 w-5" />
                        </ListItemIcon>
                        Change Password
                    </MenuItem>
                    <MenuItem component={Link} to="/helpline" onClick={handleMenuClose}>
                        <ListItemIcon>
                            <PhoneIcon className="h-5 w-5" />
                        </ListItemIcon>
                        Helpline
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon className="h-5 w-5" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </div>

            {/* Drawer Component */}
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <div className="p-4 w-64">
                    <h2 className="text-lg font-semibold mb-4">Navigation</h2>
                    <p>Side Navigation Content</p>
                </div>
            </Drawer>
        </header>
    );
};

export default Header;
