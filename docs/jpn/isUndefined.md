# isUndefined

## 説明

指定された値が `undefined` かどうかをチェックします。

### ユースケース

`isUndefined` を使用して、任意入力をガードしたり、欠落しているプロパティを検出したり、「未提供」（`undefined`）と「明示的に空」（
`null`）を区別したりできます。

> **TypeScript 利用者向けのヒント:**
>
> `undefined`（`null` ではない）を特に検出する必要がある場合に `isUndefined` を使用してください。
`typeof value === "undefined"` に依存しているため安全です。

### 利点

- `typeof` を使用して `undefined` を明確かつ明示的にチェックでき、未宣言変数に関するエッジケースを回避できます。
- ガード、分岐、バリデーションロジックに適したシンプルな真偽値（`true`/`false`）を返します。
- `undefined` を `null`、`0`、`""`、`NaN` などの他の「空」値と区別するのに役立ちます。

## 使用方法

### 構文

関数:

- `isUndefined(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // ここではxはundefinedです
} else {
  // ここではxはundefinedではありません
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isUndefined(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:03:14 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>