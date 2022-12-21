import {Box, Grid, Typography} from "@mui/material";

function Customers() {
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Typography variant="h5">Clientes</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Customers;
