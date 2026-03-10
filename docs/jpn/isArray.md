# isArray

## 説明

`isArray` は指定された値が配列かどうかを確認し、配列であれば `true`、そうでなければ `false` を返します。

### ユースケース

不明なデータ（例: パースした JSON や API レスポンス）を検証し、反復処理・インデックスアクセス・`.length`
へのアクセスを行う前に、その値が配列であることを保証します。

> **TypeScript 利用者向けのヒント:**
>
> 配列に対する実行時チェックが必要な場合は `isArray` を使用してください。これは真偽値を返し、`unknown` の値に対しても安全に呼び出せます。

### 利点

- 組み込みの `Array.isArray` を使用することで、レルム（例: iframe）をまたいでも信頼性の高い配列判定ができます。
- ガードや分岐ロジックに適した、シンプルな真偽値（`true`/`false`）を返します。
- パラメータが `unknown` のため、どのような入力型でも扱えます。

## 使用方法

### 構文

関数:

- `isArray(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input は実行時に配列です
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isArray(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isArray](../_analysis/isArray.md)

<br>

---

<small>このファイルは 6 February 2026 at 11:30:57 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>