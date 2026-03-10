# areBigInts

## 説明

`areBigInts` は、値が `bigint` 値のみを含む空でない配列であるかどうかを判定します。

### ユースケース

不明な入力（例: 解析された JSON 風データ、API ペイロード、または `unknown` として型付けされた関数パラメータ）を検証し、処理前にそれが
`bigint` 値の空でない配列であることを保証します。すべての要素が `bigint` の場合にのみ `true` を返し、それ以外は `false`
を返します。

> **TypeScript 利用者向けのヒント:**
>
> 不明な入力に対して `bigint` のみの操作（例: 算術演算、比較）を行う前に、実行時ガードとして `areBigInts` を使用してください。

### 利点

- すべての要素が `bigint` であることを保証し、配列全体が一致する場合にのみ `true` を返します。
- 設計上（`isFilledArray` により）配列以外と空配列を拒否し、無効な入力を誤って受け入れることを防ぎます。
- 高速に失敗します。`bigint` ではない要素が見つかった時点で直ちに `false` を返します。

## 使用方法

### 構文

関数:

- `areBigInts(array)`

パラメータ:

- `array`: チェックする値です。

### ローカル関数インポート

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // 真
console.log(areBigInts(b)); // 偽
console.log(areBigInts(c)); // 偽
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areBigInts(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>このファイルは 31 January 2026 at 23:26:21 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>