# isFilledArray

## 説明

`value` が少なくとも 1 要素を持つ配列かどうかを確認し、`true` または `false` を返します。

### ユースケース

反復処理を行う前、先頭要素にアクセスする前、または少なくとも 1 つの項目を必要とするロジックを適用する前に、受信データ（例:
API ペイロード、フォーム値、設定）を検証するために `isFilledArray` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `isFilledArray` は boolean を返す実行時ガードであり、配列が空でないことを確認する以上に要素型を絞り込みません。

### 利点

- `Array.isArray` と length チェックを使って、空でない配列をシンプルかつ高速に判定できます。
- コードが配列に少なくとも 1 要素があることを前提としている場合の実行時エラーを回避するのに役立ちます。
- 明確な真偽値の結果: 空でない配列には `true` を返し、それ以外には `false` を返します。

## 使用方法

### 構文

関数:

- `isFilledArray(value)`

パラメータ:

- `value`: 空でない配列かどうかを確認する値。

### ローカル関数インポート

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input は実行時に空でない配列です
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isFilledArray(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>このファイルは 6 February 2026 at 11:47:37 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>