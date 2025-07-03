import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from '../components/layout/Sidebar';

const drawerWidth = 240;

const CitizenLayout = () => (
    <Box sx={{ display: 'flex' }}>
        <AppBar 
            position="fixed" 
            sx={{ 
                width: `calc(100% - ${drawerWidth}px)`, 
                ml: `${drawerWidth}px`,
                backgroundColor: 'background.paper',
                color: 'text.primary',
                boxShadow: '0 1px 4px 0 rgba(0,0,0,0.1)'
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    My Portal
                </Typography>
            </Toolbar>
        </AppBar>
        <Sidebar />
        <Box 
            component="main" 
            sx={{ 
                flexGrow: 1, 
                bgcolor: 'background.default', 
                p: 3, 
                width: { sm: `calc(100% - ${drawerWidth}px)` } 
            }}
        >
            <Toolbar />
            <Outlet />
        </Box>
    </Box>
);

export default CitizenLayout;
