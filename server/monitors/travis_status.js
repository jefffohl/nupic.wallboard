var _ = require('underscore')
  , Travis = require('travis-ci')
  , travis = new Travis({version: '2.0.0'})
  , json = require('../utils/json')
  , CONFIG;

function status(req, res) {
    var owner = req.query.owner
      , repo = req.query.repo
      ;
    travis.repos({
        owner_name: owner,
        name: repo
    }, function(err, travisResponse) {
        json.render(travisResponse.repo, res);
    });
}

module.exports = function(config) {
    CONFIG = config;
    return {
        status: status
    };
};