var Schema = {
  users : {
    id : {type : 'increments', nullable: false, primary: true},
    idfase: {type: 'integer', nullable: false, unsigned: true},
    name : {type : 'string', maxlength: 250, nullable: false},
	  created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: true}
  }
};
module.exports = Schema;
