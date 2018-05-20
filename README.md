# This library is no longer maintained

This library has been **deprecated** as its functionality has been added directly to the [Nevergreen](https://github.com/build-canaries/nevergreen) codebase.

# Scale Text

A small library that scales text to the size (width and height) of the enclosing container, making the longest word take up a whole ine.

Currently it assumes that you use a monospaced font 13px in height, 6px in width, when judged at font-size 10px.

## Installation

```
  npm install scale-text --save
```

## Usage

```
  var ScaleText = require('scale-text')
  var idealSize = new ScaleText(['word word word'], 20, 100).ideal()

  console.log('ideal font size is ', idealSize);
```

## Tests

```
  npm test
```

## Contributing

If you would like to add a feature/fix a bug for us please create a pull request.
