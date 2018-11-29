'use strict';

/*!
 * node-argv
 * Copyright(c) 2014 Deploy.Today <support+node@deploy.today>
 * @license MIT
 */

/*
 * Module dependencies
 */

var parseArray = require('minimist');

/**
 * Module exports
 */

module.exports = parse;

/**
 * Module variables
 */

var rSplit = /\s*(?:"|')(.+?)(?:"|'|$)|\s+/
  , din = '_'
  , don = '--';

/**
 * Parse arguments.
 *
 * @param {argv} String/Array to parse
 * @param {opts} Object of properties
 * @param {target} Object
 * @return {target|Object}
 * @api public
 */

function parse (argv, opts, target) {
  if ('string' === typeof argv) argv = argv.split(rSplit).filter(ignore);
  if (!opts) opts = {};
  opts[don] = true;
  var parsed = parseArray(argv, opts);
  opts[don] = false;
  var through = parsed[don] ? parseArray(parsed[don], opts) : null;
  if (!target) target = {};
  target.options = parsed;
  target.commands = parsed[din];
  target.input = argv;
  if (through) {
    target.through = {
      options: through,
      commands: through[din]
    };
    delete through[din];
  }
  delete parsed[din];
  delete parsed[don];
  return target;
  function ignore (s) {
    return s && '' !== s;
  }
}