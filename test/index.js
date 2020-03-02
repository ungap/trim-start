var trimStart = require('../cjs');
test();

delete require.cache[require.resolve('../cjs')];
delete String.prototype.trimStart;
var trimStart = require('../cjs');
test();

function test() {
  console.assert(
    trimStart.call('\f\n\r\t\uFEFF\xA0  test ') === 'test ',
    'works as expected'
  );
}
