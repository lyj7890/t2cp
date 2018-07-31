'use strict';

(function() {
  var masterPublicHostname = 'http://192.168.131.108:30010';

  window.CONFIG = {
    publicCloud: true,
    // ..................
    api: {
      login: masterPublicHostname + '/api/v1',
      console: masterPublicHostname + '/portal',
      admin: masterPublicHostname + '/portal',
      paas: masterPublicHostname + '/api/v1'
    }
  }
})();

