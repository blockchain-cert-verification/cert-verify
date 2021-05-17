import React from 'react'
import certificate from '../certificate.svg'
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';


const styles = makeStyles({
    bar:{
        paddingTop: "0.025rem",
        backgroundColor: "#f2bfc4",
     
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    certificate: {
        width: "10%", 
        // eslint-disable-next-line
        ['@media (max-width:100px)']: { 
           display: "none"
           }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#c22126"
        },
        // eslint-disable-next-line
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})
function NavBar() {
    const classes = styles()
    return (
        <AppBar position="fixed">
        <Toolbar position="Sticky" color="rbga(0,0,0,0.87)" className={classes.bar}>
            <img src={certificate} className={classes.certificate} />
            <b>CERT-VERIFY</b>
            <IconButton></IconButton>
        </Toolbar>
        </AppBar>
    )
}

export default NavBar
