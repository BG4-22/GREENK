import { Button, ButtonGroup, Stack } from '@chakra-ui/react';

function GameButton() {
    return (
        <Stack spacing={4} direction="row" align="center">
            <Button borderRadius="40px" bg="#FFDD85" size="lg">
                Spill nå!
            </Button>
        </Stack>
    );
}

export default GameButton;
