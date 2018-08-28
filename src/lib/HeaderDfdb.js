import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonDownloadDb from './ButtonDownloadDb';
import "./HeaderDfdb.css";


class HeaderDfdb extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  // Render
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className="flex">
              {this.props.title}
            </Typography>
            <ButtonDownloadDb></ButtonDownloadDb>
          </Toolbar>
        </AppBar>
      </div>
    )
  };

}


export default HeaderDfdb;
