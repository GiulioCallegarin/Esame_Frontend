import { Box, Card, Typography } from "@mui/material";

export default function HomePage() {
    return (
        <Box
            position='fixed'
            top='50%'
            left='50%'
            sx={{
                transform: 'translate(-50%, -50%)'
            }}
        >
            <Card
                elevation={4}
                sx={{
                    height: 300,
                    width: 400
                }}
            >
                <Box
                    height='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Typography variant='h4' textAlign='center'>Prova Pratica</Typography>
                    <Typography mt={2} variant='h5' textAlign='center'>Giulio Callegarin</Typography>
                </Box>
            </Card>
        </Box>
    );
}
