# node-argv

Parse argv as a String, then feed [minimist](https://github.com/substack/minimist) and expose the interface: 

```javascript
{
  options: {},
  commands: [],
  through: { // only if '--' is given
    options: {},
    commands: []
  },
  input: [] // parsed argv
}
```

### Parse String

```javascript
var argv = require('node-argv')
  , options = {}; // minimist options

argv('first command --hello true -c "value" -- second command -b', {});
// return
{
  options: {
    hello: true,
    c: 'value'
  },
  commands: ['first', 'command'],
  through: {
    options: {
      b: true
    },
    commands: ['second', 'command']
  },
  input: ['first', 'command', '--hello', 'true', '-c', 'value', '--', 'second', 'command', '-b']
}
```

### Parse Array

This module also parses an Array directly using `minimist` but exposing the above interface

```javascript
var argv = require('node-argv');

argv(process.argv.slice(2), {});
```

### Target
The third parameter is the optional `target`, if given it will be used to store the result attributes.

## install

With [npm](https://npmjs.org) do:

```
npm install node-argv
```

## license

MIT