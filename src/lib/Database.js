import React from 'react';
import sqlite3 from 'sqlite3'

class DatabaseManager extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  //   this.dbfile = '../../database/fullcars.db';
  //   this.db = null;
  //   this.connect = this.connect.bind(this);
  //   this.disconnect = this.disconnect.bind(this);
  //   this.clear_data_table = this.clear_data_table.bind(this);
  //   this.save_all_categories = this.save_all_categories.bind(this);
  // }
  //
  // //
  // // Conection to database
  // //
  // connect() {
  //   this.db = new sqlite3.Database(this.dbfile, sqlite3.OPEN_READWRITE, (err) => {
  //     if (err) {
  //       console.error(err.message);
  //     }
  //     console.log('Connected to the chinook database.');
  //   });
  // }
  //
  // //
  // // Method to close database connection
  // //
  // disconnect() {
  //   if(this.db){
  //     this.db.close((err) => {
  //       if (err) {
  //         console.error(err.message);
  //       }
  //       console.log('Close the database connection.');
  //     });
  //   }
  // }
  //
  // //
  // // Delete all data in specific table
  // //
  // clear_data_table(table) {
  //   // Open connection to DB
  //   this.connect();
  //   // Delete all data from table
  //   if(this.db){
  //     let sqlexpression = "DELETE FROM " + table;
  //     // execute delete
  //     this.db.run(sqlexpression, function(err){
  //       // if an error was found then show this
  //       if (err) {
  //         return console.error(err.message);
  //       }
  //       console.log(`Row(s) deleted ${this.changes}`);
  //     });
  //   }
  //   // Close connection to DB
  //   this.disconnect()
  //   return true;
  // }
  //
  // //
  // // Store all category data
  // //
  // save_all_categories(data) {
  //   // Remove all previous data
  //   this.clear_data_table('category');
  // }
  //
  //
  hello() {
    console.log('hello other component');
  }

}


export default DatabaseManager;
