import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

/*
 * An <Outlet> renders whatever child route is currently active
 */
const Layout: React.FC = () => {
    return (
        <>
            <Box h="85vh" w={'100vw'} minW={'1200px'}>
                <Outlet />
            </Box>
            <Navbar />
        </>
    );
};

export default Layout;
