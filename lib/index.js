
'use strict';

function say_hello (req, res, next) {
  res.locals.says = 'Hello!';
  next();
}

function say_dynamic (words) {
  return function (req, res, next) {
    res.locals.says = words;
    next();
  };
}

// Exports
module.exports = {
  say_hello   : say_hello,
  say_dynamic : say_dynamic
};
