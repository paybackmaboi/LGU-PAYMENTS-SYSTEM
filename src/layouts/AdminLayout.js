import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import the logout icon
import { useAuth } from '../state/AuthContext';

const drawerWidth = 240;

const AdminLayout = () => {
    const { logout } = useAuth(); // Now 'logout' is used

    const adminMenuItems = [
        { text: 'Admin Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard' },
        { text: 'Manage Applications', icon: <ListAltIcon />, path: '/admin/applications' },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar 
                position="fixed" 
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#333' }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer 
                variant="permanent" 
                sx={{ 
                    width: drawerWidth, 
                    flexShrink: 0, 
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#1C2536', color: '#fff' } 
                }}
            >
                <Toolbar >
                     <Typography variant="h6" noWrap component="div">
                        Pontevedra LGU
                    </Typography>
                </Toolbar>
                <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <List sx={{ flexGrow: 1 }}>
                        {adminMenuItems.map(item => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={RouterLink} to={item.path}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    {/* Add Logout Button at the bottom */}
                    <List>
                        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }} />
                        <ListItem disablePadding>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon sx={{ color: 'inherit' }}><ExitToAppIcon /></ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box 
                component="main" 
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default AdminLayout;