import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from 'layout/Navbar';

const Layout: React.FC = () => {
    return (
        <>
            <Box h="85vh" w={'100vw'} minW={'1200px'}>
                {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
		the child routes we defined above. */}
                <Outlet />
            </Box>
            <Navbar />
        </>
    );
};

export default Layout;
