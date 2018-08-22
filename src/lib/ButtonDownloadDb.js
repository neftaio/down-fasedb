import React from 'react';
// import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import CloudDownload from '@material-ui/icons/CloudDownload';
import axios from 'axios';

// Styles
import './ButtonDownloadDb.css'

const ButtonDownloadDb = () =>{
  // Base URL
  const baseUlr = 'https://guiadevalores.fasecolda.com/apifasecolda/api/';

  // Define function to download car data
  this.handleDownload = () => {
    console.log('hello');
    this.dbDownloadStateToken();
  }

  this.dbDownloadStateToken = () => {
    // Category type 1 is referent to Liviano Pasajeros
    const typeOfCaegory = '1';
    // Complete URL
    // const getFullUrl = baseUlr + 'estadovehiculo/getestadovehiculo/'+typeOfCaegory;
    // const getFullUrl = 'https://guiadevalores.fasecolda.com/apifasecolda/api/' + 'estadovehiculo/getestadovehiculo/'+ '1';
    const getFullUrl = 'http://www.splashbase.co/api/v1/images/1';

    // Request for token
    axios.get({
        // url: 'https://guiadevalores.fasecolda.com/apifasecolda/api/estadovehiculo/getestadovehiculo/1',
        url: getFullUrl,
        data: {
            // client_id: 'daniel.castro@8comlab.com',
            // client_secret: '123456789*',
            // grant_type : 'client_credentials',
            // scope: 'data:read data:viewables'
        },
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        }, success: function(data){
            console.log(data)
        }
    })

  }

  // this.dbDownloadState = () => {
  //   // Category type 1 is referent to Liviano Pasajeros
  //   const typeOfCaegory = '1';
  //   // Complete URL
  //   const getStatesUrl = this.baseUlr + 'estadovehiculo/getestadovehiculo/'+typeOfCaegory;
  // }

  // Implement render of download
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
