# arePromises

## 説明

`arePromises` は、配列内のすべての要素が `Promise` インスタンスであるかどうかを判定します。

### ユースケース

動的に構築された、または外部から提供されたリストが、集約（例: `Promise.all`）する前に Promise のみで構成されていることを検証します。

> **TypeScript 利用者向けのヒント:**
>
> `Promise.all` やその他の Promise 専用操作を呼び出す前に `arePromises` を使って `unknown[]` を検証してください。空の配列には
`false` を返します。

### 利点

- Promise 固有のロジックを進める前に、すべての要素が `Promise` であることを保証します。
- 空の配列に対して曖昧な結果を避けるため、要素が埋まっていない配列には `false` を返します。
- 外部ソースからの `unknown[]` を扱う際の実行時ガードとして有用です。

## 使用方法

### 構文

関数:

- `arePromises(array)`

パラメータ:

- `array`: Promise インスタンスかどうかを確認する配列。

### ローカル関数インポート

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values は実行時に Promise インスタンスの配列です
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.arePromises(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:48:47 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>