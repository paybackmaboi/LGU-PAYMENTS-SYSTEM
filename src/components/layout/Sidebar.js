import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from '../../state/AuthContext';

const drawerWidth = 240;
const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/portal' },
  { text: 'New Application', icon: <PostAddIcon />, path: '/portal/new-application' },
  { text: 'Application History', icon: <HistoryIcon />, path: '/portal/history' },
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/portal/profile' },
];

const Sidebar = () => {
    const location = useLocation();
    const { logout } = useAuth();

    return (
        <Drawer 
            variant="permanent" 
            sx={{ 
                width: drawerWidth, 
                flexShrink: 0, 
                [`& .MuiDrawer-paper`]: { 
                    width: drawerWidth, 
                    boxSizing: 'border-box', 
                    borderRight: 'none', 
                    backgroundColor: '#1C2536', 
                    color: '#fff' 
                } 
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Pontevedra LGU
                </Typography>
            </Toolbar>
            <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <List sx={{ flexGrow: 1 }}>
                    {menuItems.map(item => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton 
                                component={RouterLink} 
                                to={item.path} 
                                selected={location.pathname === item.path} 
                                sx={{ 
                                    m: '4px 8px', 
                                    borderRadius: '8px', 
                                    '&.Mui-selected': { 
                                        backgroundColor: 'rgba(25, 118, 210, 0.2)', 
                                        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.3)' } 
                                    }, 
                                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' } 
                                }}
                            >
                                <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={logout} sx={{ m: '4px 8px', borderRadius: '8px' }}>
                            <ListItemIcon sx={{ color: 'inherit' }}><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
