
var expect = require('expect.js');
var parse = require('../');

describe("simple", function () {

  it('', function () {
    var argv = parse('beep boop');
    expect(argv.input[0]).to.be('beep');
    expect(argv.input[1]).to.be('boop');
  });
  
  it('', function () {
    var argv = parse('beep \"boop');
    expect(argv.input[0]).to.be('beep');
    expect(argv.input[1]).to.be('boop');
  });
  
  it('', function () {
    var argv = parse('beep \'boop');
    expect(argv.input[0]).to.be('beep');
    expect(argv.input[1]).to.be('boop');
  });
  
  it('', function () {
    var argv = parse('beep \"boop boop\"');
    expect(argv.input[0]).to.be('beep');
    expect(argv.input[1]).to.be('boop boop');
  });
  
  it('', function () {
    var argv = parse('beep \'boop boop\'');
    expect(argv.input[0]).to.be('beep');
    expect(argv.input[1]).to.be('boop boop');
  });
  
  it('', function () {
    var argv = parse('beep -- -aa -b \"boop boop');

    expect(argv.input[0]).to.be('beep');
    expect(argv.input[1]).to.be('--');
    expect(argv.input[2]).to.be('-aa');
    expect(argv.input[3]).to.be('-b');
    expect(argv.input[4]).to.be('boop boop');
  });
  
  it('', function () {
    var argv = parse('beep -- -aa -b \'boop boop');

    expect(argv.input[0]).to.be('beep');
    expect(argv.input[1]).to.be('--');
    expect(argv.input[2]).to.be('-aa');
    expect(argv.input[3]).to.be('-b');
    expect(argv.input[4]).to.be('boop boop');
  });

});


//   console.clear();
// var reg = [
// 'test gino',
// 'test \"gino',
// 'test -a ss',
// 'test --aa dd',
// 'test --aa "sss rrrr"',
// 'test --aa -- "sss rrrr"',
// 'test --aa -- "sss rrrr'
// ];
// for(var i = 0; i<reg.length;i++) {
//   console.log(reg[i].split(/"(.+?)(?:"|$)|'(.+?)'|\s*(-+\w+)\s*|\s/));
// };
