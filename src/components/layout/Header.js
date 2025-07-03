import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => (
    <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                LGU Service Portal
            </Typography>
            <Box>
                <Button color="inherit" component={RouterLink} to="/">Home</Button>
                <Button color="inherit" component={RouterLink} to="/login">Login</Button>
                <Button 
                    variant="outlined" 
                    color="inherit" 
                    component={RouterLink} 
                    to="/register"
                    sx={{ ml: 1 }}
                >
                    Register
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
);

export default Header;
