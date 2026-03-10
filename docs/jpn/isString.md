# isString

## 説明

`isString` は、指定された値が文字列かどうかを判定します。

### ユースケース

ユーザー入力、API ペイロードのフィールド、または設定値を実行時に検証し、文字列操作（例:
トリミング、分割、大文字/小文字変換）を適用する前に値が文字列であることを保証します。

> **TypeScript 利用者向けのヒント:**
>
> 文字列メソッドを呼び出す前に、`unknown` や型が曖昧な値を検証するために `isString` を使用してください。
`typeof value === "string"` の場合にのみ `true` を返します。

### 利点

- `typeof` を使用したシンプルで高速なチェック。
- 予測可能な真偽値を返します。文字列なら `true`、それ以外は `false`。
- 空文字列と非空文字列の両方で動作します。
- 文字列固有の操作を行う前の軽量な実行時ガードとして有用です。

## 使用方法

### 構文

関数:

- `isString(value)`

パラメータ:

- `value`: 文字列型かどうかをテストする値。

### ローカル関数インポート

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // ここでは input は文字列です
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isString(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isString](../_analysis/isString.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:14:30 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>