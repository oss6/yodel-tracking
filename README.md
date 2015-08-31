# yodel-tracking

> Track your Yodel parcel

## Install

```
$ npm install --save yodel-tracking
```

## Usage

```js
var yt = require('yodel-tracking');

yt('YOL123456', 'GB', function (err, result) {
    if (!err) {
        console.log(result);
    }
});
```

## API

### yt(parcelNumber, country, [date], cb)

If successful returns a tracking history object.

#### parcelNumber

Type: `string`

The parcel tracking number.

#### country

Type: `string`

A valid IATA country code (e.g. GB, IE, MA etc...).

#### date

Type: `string`

The dispatch date in the following format: `YYYY-mm-dd`.

#### cb

Type: `function`

The callback function (see above usage).

## License

MIT [Ossama Edbali](http://oss6.github.io)
