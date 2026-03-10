# isWeakSet

## 説明

指定された `value` がオブジェクトの `WeakSet` であるかどうかを判定します。

### ユースケース

型付けされていない入力（例: 外部 API、動的な設定、または `unknown` の値）を受け取る際に、`WeakSet` 固有の操作を行う前にそれが
`WeakSet` であることを検証する必要がある場合に `isWeakSet` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `isWeakSet` を使用して、実行時に `unknown` の値を `WeakSet<object>` に絞り込みます。なお、`WeakSet`
> はオブジェクト参照のみを含めることができます。

### 利点

- 値が `WeakSet` であるかどうかを簡単に実行時チェックできます。
- `WeakSet` インスタンスのみをそのように扱うことを保証することで、型エラーの防止に役立ちます。
- 任意の `unknown` 入力で動作し、明確な真偽値（`true`/`false`）を返します。

## 使用方法

### 構文

関数:

- `isWeakSet(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a は実行時に WeakSet である
}
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isWeakSet(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:15:20 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>