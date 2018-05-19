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

### Decode

#### Memo

```js
memopress.decode('OP_RETURN 365 746573742032')
// { service: 'memo',
//   prefix: '0x6d01',
//   action: 'Set Name',
//   message: 'test 2' }

memopress.decode('OP_RETURN 621 4c6f72656d20697073756d20646f6c6f722073697420616d65742c20636f6e73656374657475722061646970697363696e6720656c6974');
// { service: 'memo',
//   prefix: '0x6d02',
//   action: 'Post Memo',
//   message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }

memopress.decode('877 fe32a4bc5a52ce9b861725462ad7d5d223d3554532eb172c7d29feca5722d44c 5468616e6b7320666f72207469707072626f7421');
// { service: 'memo',
//   prefix: '0x6d03',
//   action: 'Reply',
//   message: 'Thanks for tipprbot!' }

memopress.decode('OP_RETURN 1133 1f1f63293441c673033f9112bab1b3071b2f06f68d3032a23ba9eda819694520');
// { service: 'memo',
//   prefix: '0x6d04',
//   action: 'Like',
//   message: '\u001f\u001fc)4AFs\u0003?\u0011\u0012:13\u0007\u001b/\u0006v\r02";)m(\u0019iE ' }

memopress.decode('OP_RETURN 1389 566572696669636174696f6e3a2068747470733a2f2f747769747465722e636f6d2f6d656d6f6263682f7374617475732f393932303333363532373635373030303937');
// { service: 'memo',
//   prefix: '0x6d05',
//   action: 'Set Profile Text',
//   message: 'Verification: https://twitter.com/memobch/status/992033652765700097' }

memopress.decode('OP_RETURN 1645 fe686b9b2ab589a3cb3368d02211ca1a9b88aa42');
// { service: 'memo',
//   prefix: '0x6d06',
//   action: 'Follow',
//   message: '~hk\u001b*5\t#K3hP"\u0011J\u001a\u001b\b*B' }

memopress.decode('OP_RETURN 1901 fe686b9b2ab589a3cb3368d02211ca1a9b88aa42');
// { service: 'memo',
//   prefix: '0x6d07',
//   action: 'Unfollow',
//   message: '~hk\u001b*5\t#K3hP"\u0011J\u001a\u001b\b*B' }

memopress.decode('OP_RETURN 3181 4c657427732074616c6b2061626f757420546563686e6f -10985456');
// { service: 'memo',
//   prefix: '0x6d0C',
//   action: 'Post Topic Message',
//   message: 'Let\'s talk about Techno' }
```

#### BlockPress

```js
memopress.decode('OP_RETURN 397 6e616b616d6f746f');
// { service: 'blockpress',
//   prefix: '0x8d01',
//   action: 'Set Name',
//   message: 'nakamoto' }

memopress.decode('OP_RETURN 653 48656c6c6f20576f726c6421');
// { service: 'blockpress',
//   prefix: '0x8d02',
//   action: 'Create Text Post',
//   message: 'Hello World!' }

memopress.decode('OP_RETURN 909 0ea5a448dbcf9fc0b05622341dfc59b90419fc9b0c0d6865ecaaed9031f14d17 546869732069732061206c6f6e67207265706c7920546869732069732061206c6f6e67207265706c7920313233');
// { service: 'blockpress',
//   prefix: '0x8d03',
//   action: 'Reply',
//   message: '\u000e%$H[O\u001f@0V"4\u001d|Y9\u0004\u0019|\u001b\f\rhel*m\u00101qM\u0017' }

memopress.decode('OP_RETURN 1165 829f421e381e4b84e4f1ac4ac121767eeb41d4280c555dc4cb1ae952307ee78f');
// { service: 'blockpress',
//   prefix: '0x8d04',
//   action: 'Like',
//   message: '\u0002\u001fB\u001e8\u001eK\u0004dq,JA!v~kAT(\fU]DK\u001aiR0~g\u000f' }

memopress.decode('OP_RETURN 1677 313551464a6a4752726a4a764a6f53796666596735476232795674374b425979676b');
// { service: 'blockpress',
//   prefix: '0x8d06',
//   action: 'Follow',
//   message: '15QFJjGRrjJvJoSyffYg5Gb2yVt7KBYygk' }

memopress.decode('OP_RETURN 1933 313551464a6a4752726a4a764a6f53796666596735476232795674374b425979676b');
// { service: 'blockpress',
//   prefix: '0x8d07',
//   action: 'Unfollow',
//   message: '15QFJjGRrjJvJoSyffYg5Gb2yVt7KBYygk' }

memopress.decode('OP_RETURN 2189 68747470733a2f2f697066732e706963732f697066732f516d5861575246687536473679436379376466747369656859386f624a6d5831376852745a723742487943625a43');
// { service: 'blockpress',
//   prefix: '0x8d08',
//   action: 'Set Profile Header',
//   message: 'https://ipfs.pics/ipfs/QmXaWRFhu6G6yCcy7dftsiehY8obJmX17hRtZr7BHyCbZC' }

memopress.decode('OP_RETURN 2445 1 68747470733a2f2f6269742e6c792f32465955726561 4e65772023666561747572653a2023696d61676520706f737473206f6e20426c6f636b50726573732e20456e6a6f7921');
// { service: 'blockpress',
//   prefix: '0x8d09',
//   action: 'Create Media Post',
//   message: 'https://bit.ly/2FYUrea' }

memopress.decode('OP_RETURN 4237 68747470733a2f2f692e696d6775722e636f6d2f4a306b5239506d2e6a7067');
// { service: 'blockpress',
//   prefix: '0x8d10',
//   action: 'Set Profile Avatar',
//   message: 'https://i.imgur.com/J0kR9Pm.jpg' }

memopress.decode('OP_RETURN 4493 30324 4c6f73743a2054686520436f6d706c65746520436f6c6c656374696f6e202d20536561736f6e732031202d2036');
// { service: 'blockpress',
//   prefix: '0x8d11',
//   action: 'Create Post in Community',
//   message: 'Lost: The Complete Collection - Seasons 1 - 6' }
```
