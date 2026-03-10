# areDecimals

## 説明

配列内のすべての要素が10進数であり、かつ配列に要素が入っているかどうかを確認し、`true` または `false` を返します。

### ユースケース

ユーザーが提供するリスト（例: CSVの列やフォーム入力）を検証し、パースや計算の前に配列が空でないこと、かつ各エントリが10進数の値であることを確認します。

> **TypeScript 利用者向けのヒント:**
>
> `unknown[]` が空でなく、かつ各要素が10進数表現であることを素早く真偽値でチェックしたい場合は `areDecimals` を使用してください。

### 利点

- 項目を検証する前に入力が要素の入った配列であることを保証し、空のリストを誤って受け入れるのを防ぎます。
- すべての要素を `isDecimal` で検証するため、混在した値や無効な値がある場合は即座に `false` を返します。
- ガードや早期リターンの検証フローに適した、シンプルな真偽値（`true`/`false`）の結果を提供します。

## 使用方法

### 構文

関数:

- `areDecimals(array)`

パラメータ:

- `array`: チェック対象の配列。

### ローカル関数インポート

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // 真
console.log(areDecimals(b)); // 偽
console.log(areDecimals(c)); // 偽
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areDecimals(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>このファイルは 31 January 2026 at 15:57:49 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>