import React from 'react';
// import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import CloudDownload from '@material-ui/icons/CloudDownload';
import axios from 'axios';
import qs from 'qs';

// Styles
import './ButtonDownloadDb.css'

const ButtonDownloadDb = () =>{
  // Base URL
  const baseUlr = 'https://guiadevalores.fasecolda.com/apifasecolda/api/';

  //
  //  Define function to download car data, ejecuta esta funcion al dar click
  //  al boton de descarga
  //
  this.handleDownload = () => {
    this.dbDownloadStateToken(this.db_download);
  }


  //
  // Ejecuta la descarga de la base de datos al momento de obtener
  // el toke de autenticación
  //
  this.db_download = (token_string) => {
    if(token_string) {
      // Define category liviano de pasajeros
      var category = '1';
      var url_estodos = baseUlr + 'estadovehiculo/getestadovehiculo/' + category;
      // var token_string = 'eB8gHf3b5fIUWZq_gFIjp7y3BY9x8rbQ4_69pjEin84387HqQqjQAq64eu1qRxhQmRF9PnM_eFnsQIIK_DvYn5Ii8haQDHawK2VWsoc0Nd_QXvuFFlm2mk8DwxUoU_lbRb_NbOaG_Q77HG7YiRxfwO3TMCQhB2XsTOsXg4qy8a23azF5Ec_T08ztXzYNaZWZV025c_ByYw4q3dWg3e4V5f4kzXLpl_BI1TGdb9vZzIfr4c4HTcFeUkrI_McE7_Pk_nxeuERjuEruUMcnqcVO1w'
      var header = {headers: {
        'Accept': '*/*',
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': 'bearer ' + token_string,
      }}
      // Get estados data
      axios.get(url_estodos, header)
      .then(function (response){
        console.log('Obteniendo estados');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(token_string);
    }
  }


  //
  // Realiza la descarga del token
  //
  this.dbDownloadStateToken = (callback) => {
    //
    // GETTING AUTHENTICATION TOKEN
    //
    const auth_url = "https://guiadevalores.fasecolda.com/apifasecolda/token";
    const auth_data = {grant_type: "password",
      username: "daniel.castro@8comlab.com",
      password: "123456789*"}
      const headers = {headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }}
      // Execute token request
      axios.post(auth_url, qs.stringify(auth_data), headers)
      .then(function (response) {
        // Work for callback function
        callback(response.data.access_token);
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    //
    //  Implement render of download
    //
    return (
      <div className="button-download-header">
        <IconButton
          onClick={this.handleDownload}
          color="inherit"
          >
          <CloudDownload />
        </IconButton>
      </div>

    )
  };

  export default ButtonDownloadDb;

  // curl 'https://guiadevalores.fasecolda.com/apifasecolda/api/estadovehiculo/getestadovehiculo/1' -X OPTIONS -H 'Access-Control-Request-Method: GET' -H 'Origin: http://www.fasecolda.com' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36' -H 'Access-Control-Request-Headers: authorization' --compressed
  // curl 'http://localhost:3000/\[object%20Object\]' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36' -H 'Accept: application/json, text/plain, */*' -H 'Referer: http://localhost:3000/' -H 'Cookie: adminer_permanent=' -H 'Connection: keep-alive' --compressed
  // // Category type 1 is referent to Liviano Pasajeros
  // const typeOfCaegory = '1';
  // // Complete URL
  // // const getFullUrl = baseUlr + 'estadovehiculo/getestadovehiculo/'+typeOfCaegory;
  // // const getFullUrl = 'https://guiadevalores.fasecolda.com/apifasecolda/api/' + 'estadovehiculo/getestadovehiculo/'+ '1';
  // const getFullUrl = 'http://www.splashbase.co/api/v1/images/1';
  // // Request for token
  // axios.get(getFullUrl)
  // .then((response)=>{
  //   console.log(response);
  // });
