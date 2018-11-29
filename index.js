'use strict';

/*!
 * node-argv
 * Copyright(c) 2018 Leonardo Thibes <leonardothibes@gmail.com>
 * @license MIT
 */

/**
 * Module constants
 */
const rSplit = /\s*(?:"|')(.+?)(?:"|'|$)|\s+/,
    din = '_',
    don = '--';

/*
 * Module dependencies
 */
const parseArray = require('minimist');

/**
 * Parse arguments.
 *
 * @param {String|Array}  argv
 * @param {Object}        opts
 * @param {Object}        target
 * 
 * @return {target|Object}
 * @api public
 */
module.exports = function (argv, opts, target) 
{
    if ('string' === typeof argv) {
        argv = argv.split(rSplit).filter(ignore);
    }

    opts        = opts || {};
    opts[don]   = true;
    var parsed  = parseArray(argv, opts);
    opts[don]   = false;
    var through = parsed[don] ? parseArray(parsed[don], opts) : null;

    target          = target || {};
    target.options  = parsed;
    target.commands = parsed[din];
    target.input    = argv;

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
};

function ignore(s) {
    return s && '' !== s;
}
