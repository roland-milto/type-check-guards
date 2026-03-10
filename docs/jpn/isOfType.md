# isOfType

## 説明

プリミティブには `typeof` を使用し、複雑な型にはフォールバックを用いて、指定された型文字列に与えられた `value`
が一致するかどうかを判定します。

### ユースケース

値が期待する型文字列であるかを確認してから型固有の操作を行うことで、`unknown` の入力（例: API レスポンス、ユーザー入力、パースした
JSON）を検証し、型を絞り込みます。

> **TypeScript 利用者向けのヒント:**
>
> `unknown` の値を扱う際に、実行時の型に応じて分岐するために `isOfType` を使用します。`true`/`false` を返し、`null` と
`undefined` を明示的に扱います。

### 利点

- 速度と明確さのために、プリミティブ型を直接 `typeof` でチェックします。
- `typeof` だけでは意図どおりに区別できない `null` と `undefined` を正しく処理します。
- `getTypeOf` を用いたフォールバック比較により、複雑な型やカスタム型の文字列もサポートします。
- ガードや分岐に適した、単純な真偽値（`true`/`false`）を返します。

## 使用方法

### 構文

関数:

- `isOfType(value, type)`

パラメータ:

- `value`: `type` に対してテストする値。
- `type`: 照合する型の文字列表現。

### ローカル関数インポート

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // ここでは input は数値です
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // ここでは input は文字列です
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isOfType(value, type)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>このファイルは 30 January 2026 at 17:00:27 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>