# linear-scale

> Linear scale function

[![NPM](https://nodei.co/npm/linear-scale.png)](https://nodei.co/npm/linear-scale)

# Install

```bash
npm install linear-scale
```

# Usage

```javascript
var LinearScale = require('linear-scale')

var scale = LinearScale().domain([0, 100]).range([1000, 10000])

// shorthand
var scale = LinearScale([0, 100], [1000, 10000])

console.log(scale(0)) // 1000
console.log(scale(100)) // 10000
console.log(scale(50)) // 5500
console.log(scale(200)) // 19000
console.log(scale(-100)) // -8000
```

# Test

```bash
npm test
```

# License

[MIT](./LICENSE)
