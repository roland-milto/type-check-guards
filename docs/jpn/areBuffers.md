# areBuffers

## 説明

`areBuffers` は、提供された値が空でない要素が埋まった配列であり、各要素がすべて `Buffer` であるかを確認し、該当する場合は
`true`、それ以外は `false` を返します。

### ユースケース

受信したチャンク配列（例: ストリーム、ファイルアップロード、ネットワークパケット由来）を検証し、連結、デコード、または暗号処理やバイナリ処理関数へ渡す前に、すべての部分が
`Buffer` インスタンスであることを確認します。

> **TypeScript 利用者向けのヒント:**
>
> `areBuffers` を使用して `unknown[]` を検証してから `Buffer.concat` のような Buffer 固有の API を呼び出し、すべての要素が
`Buffer` のときにのみ関数が `true` を返すようにします。

### 利点

- 入力内のすべての要素が Node.js の `Buffer` インスタンスであることを保証し、配列全体が一致する場合にのみ `true` を返します。
- 空でない、要素が埋まった配列であることを要求することで無効な入力を早期に排除します。空配列または配列以外には `false`
  を返します。
- バッファ専用の操作（例: 連結、ハッシュ、バイナリプロトコル）を実行する前のガードとして有用です。

## 使用方法

### 構文

関数:

- `areBuffers(array)`

パラメータ:

- `array`: バッファインスタンスかどうかを確認する対象の配列。

### ローカル関数インポート

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areBuffers(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>このファイルは 31 January 2026 at 16:25:54 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>