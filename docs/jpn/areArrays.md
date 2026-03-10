# areArrays

## 説明

`areArrays` は、値が要素がすべて配列で構成された、要素が入っている二次元配列かどうかを判定します。

### ユースケース

行/列の操作を行う前に、表形式または行列のような入力（例: CSVの行、グリッドデータ、またはグループ化されたリスト）を検証するために
`areArrays` を使用します。入力が配列でない、空である、または配列でない要素を含む場合は `false` を返します。

> **TypeScript 利用者向けのヒント:**
>
> ネストした配列を反復処理したりインデックスアクセスしたりする前に、値が空でない2次元配列であり、各行が配列であることを保証する必要がある場合は
`areArrays` を使用してください。

### 利点

- 入力が空でない二次元配列であり、すべての要素が配列であることを検証します。
- ガードや早期リターンに適した単純な真偽値（`true`/`false`）を返します。
- 後続のコードがネストした配列操作（例: 行のマッピング）を前提とする場合の実行時エラーを防ぐのに役立ちます。

## 使用方法

### 構文

関数:

- `areArrays(array)`

パラメータ:

- `array`: チェック対象の入力です。

### ローカル関数インポート

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value は要素として配列を持つ2次元配列です
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areArrays(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>このファイルは 6 February 2026 at 13:40:10 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>