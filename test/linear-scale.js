var test = require('tape');
var LinearScale = require('../linear-scale');

test('LinearScale', function (t) {
  'use strict';

  t.plan(31);

  var scale = LinearScale([0, 100]);
  t.equal(scale(0), 0);
  t.equal(scale(100), 100);
  t.equal(scale(10), 10);
  t.equal(scale(110), 110);
  t.equal(scale(-10), -10);

  scale = LinearScale([0, 100], [200, 300]);
  t.equal(scale(0), 200);
  t.equal(scale(100), 300);
  t.equal(scale(10), 210);
  t.equal(scale(110), 310);
  t.equal(scale(-10), 190);
  t.equal(scale('foo'), null);
  t.equal(scale({}), null);
  t.equal(scale([]), null);

  scale = LinearScale([0, 0], [5, 20]);
  t.equal(scale(0), 5);
  t.equal(scale(100), 20);
  t.equal(scale(10), 20);
  t.equal(scale(110), 20);
  t.equal(scale(-10), 5);
  t.equal(scale('foo'), null);
  t.equal(scale({}), null);
  t.equal(scale([]), null);

  scale = LinearScale().domain([0, 100]).range([200, 300]);

  t.equal(scale(0), 200);
  t.equal(scale(100), 300);
  t.equal(scale(10), 210);
  t.equal(scale(110), 310);
  t.equal(scale(-10), 190);

  scale = LinearScale().domain([0, 100]).range([1000, 10000]);

  t.equal(scale(0), 1000);
  t.equal(scale(100), 10000);
  t.equal(scale(50), 5500);
  t.equal(scale(200), 19000);
  t.equal(scale(-100), -8000);
});
