
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
    if (val)
      return new Error('unknown method: '+val);
    else
      return new Error('unknown method');
  },

  /*
   * Not found error
   */
  NotFoundError: function(val) {
    if (val)
      return new Error('not found for '+val);
    else
      return new Error('not found');
  }
  
};
