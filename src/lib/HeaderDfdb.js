import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonDownloadDb from './ButtonDownloadDb';


import "./HeaderDfdb.css";

const HeaderDfdb = ({title='header'}) => {

return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton className="menuButton" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className="flex">
            {title}
          </Typography>
          <ButtonDownloadDb></ButtonDownloadDb>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default HeaderDfdb;
