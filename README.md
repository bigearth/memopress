## MemoPress

Helper methods for reading/writing to the Bitcoin Cash blockchain per the [Memo](https://memo.cash/protocol) and [BlockPress](https://www.blockpress.com/developers/blockpress-protocol) protocols.

## Usage

Install

```js
npm install memopress --save
```

Require

```js
let memopress = require('memopress');
```

### Encode

#### Memo

```js
memopress.decode('OP_RETURN 877 fe32a4bc5a52ce9b861725462ad7d5d223d3554532eb172c7d29feca5722d44c 5468616e6b7320666f72207469707072626f7421')
// { service: 'memo',
//   prefix: '0x6d03',
//   action: 'Reply',
//   message: 'Thanks for tipprbot!' }
```

### Decode

#### Memo

```js
memopress.decode('OP_RETURN 877 fe32a4bc5a52ce9b861725462ad7d5d223d3554532eb172c7d29feca5722d44c 5468616e6b7320666f72207469707072626f7421')
// { service: 'memo',
//   prefix: '0x6d03',
//   action: 'Reply',
//   message: 'Thanks for tipprbot!' }
```

#### BlockPress

```js
memopress.decode('OP_RETURN 653 48656c6c6f20576f726c6421')
// { service: 'blockpress',
//   prefix: '0x8d02',
//   action: 'Create Text Post',
//   message: 'Hello World!' }
```
