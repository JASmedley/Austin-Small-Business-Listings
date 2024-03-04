import React from 'react'
import { AppBar, Toolbar, IconButton, 
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddListing from '../containers/AddListing';
import cookie from "cookie"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const handleClearCookiesClick = () => {
  document.cookie.split(";").forEach((cookie) => {
    const [name] = cookie.trim().split("=")
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  })
  window.location.reload(false)
}

const theme = createTheme({
    palette: {
      green: {
        main: '#3BB371',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });

const Navigation = (props) => {
    return (
        <ThemeProvider theme={theme}>

        <AppBar color="green" position="relative">
            <Toolbar>
                <IconButton color="inherit">
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }} color="white">
                   Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                     <Typography color="white">   <Link  to="/">Listings </Link></Typography>
                    </li>
                    <li className="nav-list-item">
                     <Typography color="white">    <AddListing/> </Typography>
                    </li>
                    <li className="nav-list-item">
                        <Typography color="white"> {checkAuth() ? (
            <Link onClick={handleClearCookiesClick} color="inherit" to="/">
              Logout
            </Link>
          ) : (
            <Link color="inherit" to="/login">
              Login
            </Link>
          )}
          </Typography>
                    </li>
                  
        
                </ul>
            </Toolbar>
        </AppBar>
        </ThemeProvider>

    )
}

export default Navigation
