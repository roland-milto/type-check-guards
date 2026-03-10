# areFilledArrays

## 説明

`areFilledArrays` は、二次元配列が空でなく、かつそのすべてのサブ配列が空でないかどうかをチェックします。

### ユースケース

`areFilledArrays` を使用して、表形式または行列のような入力（例: CSV の行、グリッドデータ、グループ化された結果）を検証し、少なくとも
1 つのサブ配列が存在し、かつどのサブ配列も空ではないと安全に仮定できるようにします。

> **TypeScript 利用者向けのヒント:**
>
> 反復処理やインデックスアクセスを行う前に、2D 配列に少なくとも 1 行があり、かつ各行に少なくとも 1 要素があることを保証したい場合は
`areFilledArrays` を使用してください。

### 利点

- 外側の配列が空でないこと、かつ各内側の配列も空でないことを検証し、両方の条件が満たされた場合にのみ `true` を返します。
- 要素の内容ではなく配列が「埋まっている」状態かどうかだけを確認するため、サブ配列内の要素型（例:
  数値、文字列、オブジェクト、ネストした配列）に依存せずに動作します。
- 二次元データを処理する前のガードに適した、シンプルなブール結果（`true`/`false`）を提供します。

## 使用方法

### 構文

関数:

- `areFilledArrays(array)`

パラメータ:

- `array`: チェック対象の二次元配列。

### ローカル関数インポート

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // 真
console.log(areFilledArrays(b)); // 真
console.log(areFilledArrays(c)); // 真
console.log(areFilledArrays(d)); // 偽
console.log(areFilledArrays(e)); // 偽
console.log(areFilledArrays(f)); // 偽

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areFilledArrays(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>このファイルは 6 February 2026 at 11:57:23 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>