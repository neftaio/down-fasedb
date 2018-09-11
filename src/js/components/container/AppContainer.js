import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './AppContainer.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
// // Importing own components
import HeaderDfdb from '../presentational/HeaderDfdb/HeaderDfdb';

const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: orange,
    },
});

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider theme={theme}>
        <HeaderDfdb title="Descarga De Base de Datos"></HeaderDfdb>
      <p className="App-intro">
        Datos de los vehículos encontrados
      </p>
      </MuiThemeProvider>
      </div>

    );
  }
}

export default AppContainer;
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
