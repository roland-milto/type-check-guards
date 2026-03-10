# areObjects

## 説明

`areObjects` は、提供された要素の入った配列にオブジェクトのみが含まれているかどうかを確認します。

### ユースケース

`areObjects` は、不明な配列（例: JSON のパース結果や外部 API
からの入力）を受け取ったときに、反復処理してオブジェクトのプロパティへアクセスする前に、それが空ではなく、かつ各要素がオブジェクトであることを保証したい場合に使用します。

> **TypeScript 利用者向けのヒント:**
>
> `areObjects` を使って、項目をオブジェクトとして扱う前に `unknown[]` を検証してください。空の配列に対しては `false`
> を返します。

### 利点

- 入力が要素の入った配列であり、かつすべての要素がオブジェクトである場合にのみ `true` を返します。
- オブジェクトではない要素が見つかった時点で早期に停止し、`false` を返します。
- オブジェクト固有の操作を行う前に、不明な入力を検証するのに役立ちます。

## 使用方法

### 構文

関数:

- `areObjects(array)`

パラメータ:

- `array`: オブジェクト要素かどうかを確認する対象の配列。

### ローカル関数インポート

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // valueはオブジェクトで満たされた配列です
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areObjects(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:09:16 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>