import { Box, List, ListItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import '../index.css';

interface FunfactCardPropsI {
    title: string;
    ordered?: boolean;
    list: string[];
}

const FunfactCard: React.FC<FunfactCardPropsI> = ({
    title,
    ordered = false,
    list,
}: FunfactCardPropsI) => {
    const listItems = list.map((item, i) => (
        <ListItem key={`item-${item}`}>{item}</ListItem>
    ));
    return (
        <Box style={{ backgroundColor: '#f2f4fc', borderColor: '#9dbe98' }}>
            <Stack>
                <Text borderColor={'#9dbe98'}>{title}</Text>
                <List styleType={ordered ? '' : 'none'}>{listItems}</List>
            </Stack>
        </Box>
    );
};

export default FunfactCard;
