'use strict';

var Git = require('simple-configure').get('beans').get('gitmech');

module.exports = function subdirs(req, res, next) {
  Git.lsdirs(function (err, gitdirs) {
    res.locals.wikisubdirs = gitdirs;
    next(err);
  });
};
