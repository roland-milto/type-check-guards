# areStreams

## 説明

`areStreams` は、値がすべての要素が `Stream` である要素数1以上の配列かどうかを判定します。

### ユースケース

ユーザー提供または動的に構築されたコレクション（例: 複数のファイル読み取りストリーム）を、パイプ処理、再開、またはグループとして操作する前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> `areStreams` を使って、未知の入力を `Stream[]` として扱う前に検証してください。値が空でない配列であり、かつ各要素が
`Stream` の場合にのみ `true` を返します。

### 利点

- 入力が、すべての要素が `Stream` である要素数1以上の配列であることを保証します。
- 処理前にストリームのコレクションを検証するための、シンプルな `true`/`false` ガードを提供します。
- フェイルファスト: `Stream` ではない要素が見つかった時点で直ちに `false` を返します。
- コードがすべての項目を `Stream` インスタンスだと仮定している場合の実行時エラー防止に役立ちます。

## 使用方法

### 構文

関数:

- `areStreams(array)`

パラメータ:

- `array`: Stream オブジェクトかどうかをチェックする配列。

### ローカル関数インポート

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input は Stream オブジェクトの埋められた配列です
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areStreams(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:34:22 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>