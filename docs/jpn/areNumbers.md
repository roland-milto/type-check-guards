# areNumbers

## 説明

`areNumbers` は、値が空でない配列であり、すべての要素が数値であるかどうかをチェックします。

### ユースケース

ユーザー提供または API 提供のデータが空でない数値配列であることを、合計、平均、その他の数値集計を計算する前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> `areNumbers` を使用して、数値計算を行う前に unknown の配列を検証してください。空の配列や、数値以外の値を含む配列に対しては
`false` を返します。

### 利点

- 入力が空でない配列であり、かつ各要素が数値である場合にのみ `true` を返します。
- 空の配列および配列以外の入力を拒否することで、誤検知を防ぎます。
- 実行時エラーを避けるため、数値演算（例: 合計、平均）を行う前のガードとして有用です。

## 使用方法

### 構文

関数:

- `areNumbers(array)`

パラメータ:

- `array`: 数値要素かどうかを確認する対象の配列。

### ローカル関数インポート

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areNumbers(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:04:48 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>