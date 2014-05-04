
module.exports = {

  /*
   * arguments error
   */
  ArgumentsError: function() {
    return new Error('wrong arguments');
  },

  /*
   * avoid to access
   */
  AvoidAcessError: function() {
    return new Error('avoid to access this member');
  },

  /*
   * unknown method error
   */
  UnknowMethodError: function(val) {
    return new Error('unknown method: '+val);
  }
  
};
