# isWeakMap

## 説明

指定された `value` が `WeakMap` インスタンスかどうかを判定します。

### ユースケース

公開 API、プラグインシステム、または動的設定などから `unknown` 値を受け取り、`WeakMap` 固有の挙動を使用する前にそれが
`WeakMap` であることを検証する必要がある場合に `isWeakMap` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `isWeakMap` は `instanceof WeakMap` チェックを実行します。実際の `WeakMap` インスタンスに対してのみ `true`
> を返すランタイムガードです。

### 利点

- 値が `WeakMap` であるかどうかを簡単にランタイムでチェックできます。
- `WeakMap` を必要とする API の誤用を防ぐのに役立ち、例外を投げる代わりに `true`/`false` を返します。
- `unknown` 入力でも動作するため、モジュール境界（例: 解析、外部データ、または型付けされていないコード）で便利です。

## 使用方法

### 構文

関数:

- `isWeakMap(value)`

パラメータ:

- `value`: チェックする値。

### ローカル関数インポート

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a は実行時に WeakMap である
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isWeakMap(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:25:34 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>