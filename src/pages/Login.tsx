import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import {RxAvatar} from "react-icons/rx";
import {BsKey} from "react-icons/bs";

function Login() {
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
                    <Typography variant="h5">Pantalla de Login</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        placeholder={"Introduzca su Email"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <RxAvatar/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        placeholder={"Introduzca su clave"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BsKey/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Grid item xs={4}>
                        <Button variant="contained" fullWidth>
                            <b>Login</b>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;
