import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from '../components/layout/Header';

const PublicLayout = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
            <Outlet />
        </Container>
    </Box>
);

export default PublicLayout;

