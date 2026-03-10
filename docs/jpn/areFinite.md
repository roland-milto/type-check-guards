# areFinite

## 説明

`areFinite` は、値が空でない配列であり、その要素がすべて有限数であるかどうかをチェックし、そうであれば `true` を、そうでなければ
`false` を返します。

### ユースケース

計算を行う前に数値入力配列（例：チャート系列、座標リスト、測定サンプル）を検証し、すべての値が有限数である場合にのみ結果が
`true` になるようにします。

> **TypeScript 利用者向けのヒント:**
>
> 配列が空でないこと、かつ有限数のみを含むことを保証する必要がある場合に `areFinite` を使用してください。空配列や、`NaN`
> または無限大を含む配列に対しては `false` を返します。

### 利点

- 入力が空でない配列であり、かつすべての要素が有限数である場合にのみ `true` を返します。
- 各要素に対する `isFinite` チェックに依存することで、`Infinity`、`-Infinity`、および `NaN` を拒否します。
- ガードやバリデーションフローに適した、シンプルな真偽値（`true`/`false`）の結果を提供します。

## 使用方法

### 構文

関数:

- `areFinite(array)`

パラメータ:

- `array`: すべての要素が有限であるかどうかをチェックする対象の配列。

### ローカル関数インポート

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // true
console.log(areFinite(b)); // false
console.log(areFinite(c)); // false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areFinite(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>このファイルは 30 January 2026 at 16:35:26 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>