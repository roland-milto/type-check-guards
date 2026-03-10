# areUndefined

## 説明

`areUndefined` は、渡された配列のすべての要素が `undefined` であるかどうかを確認します。

### ユースケース

任意結果のリストに実際の値が含まれていない（`undefined` のみ）ことを検証します。たとえば、欠損エントリが `undefined`
として表現されるルックアップのマッピング後に、すべてのルックアップが失敗したことを確認したい場合に使用します。

> **TypeScript 利用者向けのヒント:**
>
> `unknown[]` が `undefined` の値のみを含むことを断言する必要がある場合に `areUndefined` を使用してください。内部の
`isFilledArray` チェックにより、空配列および配列以外/無効な入力に対しては `false` を返します。

### 利点

- `isFilledArray` により要素が入った配列を必須とすることで、配列以外や空配列に対して `false` を返します。
- 一部ではなくすべての要素が `undefined` であることを保証し、意図を明確にします。
- 未知の入力コレクションを検証する際に、ガードスタイルの述語として有用です。

## 使用方法

### 構文

関数:

- `areUndefined(array)`

パラメータ:

- `array`: `undefined` 要素が含まれているかを確認する対象の配列。

### ローカル関数インポート

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// 注: 空の配列に対しては false を返します
const r4 = areUndefined([]); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areUndefined(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:56:27 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>