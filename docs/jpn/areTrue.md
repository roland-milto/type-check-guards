# areTrue

## 説明

空でない配列がブール値の `true` のみを含むかどうかを確認します。

### ユースケース

`areTrue` を使用して、前提条件や機能フラグの集合がすべて有効（すべての値が `true`）であることを検証してから処理を続行できます。また、空または不正な入力は未充足（
`false`）として扱えます。

> **TypeScript 利用者向けのヒント:**
>
> `areTrue` は空配列、および厳密に `true` ではない値を含む配列に対して `false` を返します。

### 利点

- すべての要素が厳密に `true` であり、かつ配列が空でない場合にのみ `true` を返します。
- 早期終了: `true` ではない値が見つかった時点で直ちに `false` を返します。
- 無効な入力（配列でない、または空配列）を `false` を返すことで拒否します。

## 使用方法

### 構文

関数:

- `areTrue(array)`

パラメータ:

- `array`: すべての値が `true` かどうかを確認する配列。

### ローカル関数インポート

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areTrue(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:51:42 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>