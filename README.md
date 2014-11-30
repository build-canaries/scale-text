FontScaler
==========

A small library that scales text to the size of the enclosing container, making the longest word take up a whole ine.

Currently it assumes that you use a monospaced font 13px in height, 6px in width at font-size 10px.

## Installation

```
  npm install fontscaler --save
```

## Usage

```
  var idealSize = new FontScaler([["my", "wrapped", "text"], ["small"]], 50, 100).ideal()

  console.log('ideal font size is ', idealSize);
```

## Tests

```
  npm test
```

## Contributing

If you would like to add a feature/fix a bug for us please create a pull request.