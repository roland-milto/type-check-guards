# isEmpty

## 説明

指定された値が空かどうかを判定し、`null`、`undefined`、空/空白のみの文字列、空の配列、空の `Map`/`Set`
、または自身の列挙可能プロパティを持たないオブジェクトに対して `true` を返します。

### ユースケース

`isEmpty` を使用して、複数のデータ型にわたって入力を検証し、欠落/空白の値を検出します（例: フォームフィールド、API
ペイロード、設定オブジェクト）。ここでは `null`、`undefined`、空白文字列、空のコレクション、プロパティを持たないオブジェクトを空として扱う必要があります。

> **TypeScript 利用者向けのヒント:**
>
> `isEmpty` は真偽値を返すユーティリティ（TypeScript の型述語ではない）ため、それ自体では型を絞り込みません。コンパイル時の絞り込みではなく、バリデーション/分岐に使用してください。

### 利点

- 空判定において `null` と `undefined` を `true`（空）として扱います。
- 長さを確認する前にトリミングすることで、空白のみの文字列を空として扱います。
- 一般的なコンテナ型（配列、`Map`、`Set`）と、自身の列挙可能プロパティを持たないプレーンオブジェクトをサポートします。
- `hasOwnProperty` チェックを使用して、継承されたプロパティを数えないようにします。
- ガードやバリデーションに適した、単純な真偽値（`true`/`false`）の結果を返します。

## 使用方法

### 構文

関数:

- `isEmpty(value)`

パラメータ:

- `value`: 空かどうかをチェックする値。

### ローカル関数インポート

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isEmpty(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>このファイルは 6 February 2026 at 16:19:12 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>