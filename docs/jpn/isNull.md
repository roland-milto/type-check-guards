# isNull

## 説明

提供された `value` が `null` であるかどうかを判定します。

### ユースケース

`null` が意味のあるセンチネル値であり、`undefined` や他の値とは異なる扱いが必要な入力や API ペイロードのフィールドを検証するために
`isNull` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `null` を `undefined` や他の falsy 値と区別する必要がある場合は `isNull` を使用してください。`null` のときにのみ `true`
> を返します。

### 利点

- `undefined` と混同せずに `null` を正確にチェックできます。
- `unknown` を受け取るため、どの入力型に対しても確実に動作します。
- シンプルで高速かつ副作用がなく、`true` または `false` のみを返します。

## 使用方法

### 構文

関数:

- `isNull(value)`

パラメータ:

- `value`: `null` かどうかをチェックする値。

### ローカル関数インポート

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // ここではaはnullです
}
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isNull(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isNull](../_analysis/isNull.md)

<br>

---

<small>このファイルは 31 January 2026 at 15:39:43 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>