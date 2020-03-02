var trimStart = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
delete String.prototype.trimStart;
var trimStart = require('../cjs');
test();

function test() {
  console.assert(trimStart.call('\f\n\r\t\uFEFF\xA0  this') === 'this', 'all chars trimmed');
}
