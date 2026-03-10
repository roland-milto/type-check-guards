# isNumeric

## 説明

`isNumeric` は、与えられた `value` の解決された型を `NUMERIC_TYPES` と照合することで、その値が数値として扱われるかどうかを判定します。

### ユースケース

数値演算を行う前に入力（例: API ペイロード、フォーム値、設定）を検証し、`NUMERIC_TYPES` に従って（`BigInt`
などの）数値として扱える型を一貫して受け入れるために `isNumeric` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `isNumeric` は真偽値を返す述語です。値がライブラリで定義された数値型セットに属するかどうかを判定する実行時チェックとして扱ってください。

### 利点

- `getTypeOf` と `NUMERIC_TYPES` を併用して数値判定ロジックを一元化し、コードベース全体でチェックの一貫性を保ちます。
- 分岐やガード用途で使いやすい、単純な真偽値（`true`/`false`）を返します。
- `NUMERIC_TYPES` で定義された複数の数値表現（例: `number`、`BigInt`）をサポートします。

## 使用方法

### 構文

関数:

- `isNumeric(value)`

パラメータ:

- `value`: 数値型かどうかを確認する値。

### ローカル関数インポート

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v はライブラリの型ルールにより数値として扱われる
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isNumeric(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>このファイルは 6 February 2026 at 15:53:10 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>