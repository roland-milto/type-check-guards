# isNaN

## 説明

文字列を変換せずに、提供された `value` が `number` 型の `NaN` かどうかを判定します。

### ユースケース

信頼できない、または型が厳密でない入力（例: API ペイロード、フォーム値、パース済み JSON）を検証し、特殊な `NaN`
値を検出して明示的に処理します。数値以外の入力は `NaN` ではないものとして扱います。

> **TypeScript 利用者向けのヒント:**
>
> 入力が実際に `number` であることを保証しつつ（文字列から数値への変換は行わない）、特殊な数値 `NaN` を検出する必要がある場合は
`isNaN` を使用してください。

### 利点

- 数値以外（例: 文字列）を数値に強制変換せずに、値が `NaN` かどうかをチェックします。
- `number` 型かつ `NaN` である値に対してのみ `true` を返します。
- `unknown` 入力に対して安全で、暗黙の変換による誤検知を回避します。

## 使用方法

### 構文

関数:

- `isNaN(value)`

パラメータ:

- `value`: `number` 型の `NaN` かどうかをチェックする対象の値。

### ローカル関数インポート

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  // a は数値であり、特に NaN である
}
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isNaN(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>このファイルは 30 January 2026 at 15:46:40 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>