import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              eBook 
            </Typography>
            <div>
              
              <Button color="inherit" component={Link} to="/login" className={classes.link}>
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup" className={classes.link}>
                Signup
              </Button>
              <Button color="inherit" component={Link} to="/books" className={classes.link}>
                Books
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
