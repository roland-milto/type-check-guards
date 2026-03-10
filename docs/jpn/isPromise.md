# isPromise

## 説明

指定された値が `Promise` かどうかを判定します。

### ユースケース

プラグイン、動的 import、または型付けが緩い API から返される値などを扱う際に、未知の入力を `Promise` として扱う前に
`isPromise` を使って検証します。

> **TypeScript 利用者向けのヒント:**
>
> `isPromise` は `instanceof Promise` によってチェックするため、実際の `Promise` インスタンスに対してのみ `true`
> を返します（汎用的な thenable には返しません）。

### 利点

- 値が `Promise` であるかどうかを簡単にランタイムでチェックできます。
- 実際の `Promise` インスタンスを必要とするコードパスを保護し、予測可能に `true` または `false` を返します。
- 実際の `Promise` インスタンスを要求することで、“thenable” オブジェクト（例: `{ then() {} }`）による誤検知を回避します。

## 使用方法

### 構文

関数:

- `isPromise(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // 真
console.log(isPromise(b)); // 偽
console.log(isPromise(123)); // 偽
console.log(isPromise(null)); // 偽

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isPromise(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:53:16 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>