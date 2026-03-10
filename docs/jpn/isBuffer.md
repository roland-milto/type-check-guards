# isBuffer

## 説明

値が Node.js の `Buffer` かどうかを確認し、`true` または `false` を返します。

### ユースケース

実行時（例: API ペイロード、ファイルデータ、またはメッセージバッファ）に入力を検証し、処理前に値が `Buffer`
であることを確認します。また、Node.js 以外で `Buffer` が存在しない可能性がある環境でも、確実に `false` を得られます。

> **TypeScript 利用者向けのヒント:**
>
> `Buffer` 固有のメソッドを呼び出す前に、`isBuffer` を使って `unknown` の値を `Buffer` に絞り込みます。

### 利点

- `Buffer.isBuffer` を使用して Node.js の `Buffer` インスタンスを安全に検出します。
- `Buffer` が利用できない環境では `false` を返し、実行時エラーを回避します。
- `unknown` 入力でも動作するため、実行時バリデーションと型の絞り込みに適しています。

## 使用方法

### 構文

関数:

- `isBuffer(value)`

パラメータ:

- `value`: テスト対象の値。

### ローカル関数インポート

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // ここではaはBufferです
  console.log(a.toString("utf8"));
}
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isBuffer(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>このファイルは 31 January 2026 at 16:32:06 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>