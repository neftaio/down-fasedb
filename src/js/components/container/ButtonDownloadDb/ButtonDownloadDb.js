import React from 'react';
// Import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
// Import AccountCircle from '@material-ui/icons/AccountCircle';
import CloudDownload from '@material-ui/icons/CloudDownload';
import axios from 'axios';
import qs from 'qs';
// Impoprting database models
import {Category}  from '../../../../db_models';
// Styles for the component
import './ButtonDownloadDb.scss';

//
// COMPONENT CLASS FOR DOWNLOAD DB
//
class ButtonDownloadDb extends React.Component {
  //
  // Constructor
  //
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.authentication_token = '';
    this.baseUlr = 'https://guiadevalores.fasecolda.com/apifasecolda/api/';
    this.handleDownload = this.handleDownload.bind(this);
    this.dbDownloadStateToken = this.dbDownloadStateToken.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  //
  //  Define function to download car data, ejecuta esta funcion al dar click
  //  al boton de descarga
  //
  async handleDownload() {
    // Get the authentication token
    let token = await this.dbDownloadStateToken();
    this.authentication_token = token;
    // Download all categories
    console.log(this.authentication_token);
    let cats = await this.getCategories(this.authentication_token);
    console.log(cats);
  }


  //
  // GETTING AUTHENTICATION TOKEN
  //
  async dbDownloadStateToken() {
    const auth_url = "https://guiadevalores.fasecolda.com/apifasecolda/token";
    const auth_data = {grant_type: "password",
      username: "daniel.castro@8comlab.com",
      password: "123456789*"}
      const headers = {headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }}
      // Execute token request
      let resp = await axios.post(auth_url, qs.stringify(auth_data), headers);
      let result = await resp.data.access_token;
      return result;
    }


    //
    // Funtion to get and save categories
    //
    async getCategories(token) {
      // Define api url to get categories
      let url = this.baseUlr + 'categoria';
      // Define header for request
      var header = {headers: {
        'Accept': '*/*',
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': 'bearer ' + token,
      }}
      // Get Categories from api
      let resp = await axios.get(url, header);
      let response =  await resp.data;
      return response;
      // console.log(response);
    }


    //
    //  Implement render of download
    //
    render() {
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
    }

  }


  export default ButtonDownloadDb;
