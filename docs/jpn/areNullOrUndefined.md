# areNullOrUndefined

## 説明

指定された配列のすべての要素が `null` または `undefined` であるかどうかを確認します。

### ユースケース

任意フィールドのリストに実際の値が含まれていない（`null`/`undefined` のみ）ことを検証し、処理をスキップするか「値が提供されていない」状態を表示するかを判断します。

> **TypeScript 利用者向けのヒント:**
>
> 配列が欠損値（`null`/`undefined`）のみを含むことを確認する必要がある場合は `areNullOrUndefined` を使用してください。空配列に対しては
`false` を返す点に注意してください。

### 利点

- すべての要素が `null` または `undefined` の場合にのみ `true` を返します。
- 空配列に対しては `false` を返すため、「データなし」と「すべて欠損値」を区別できます。
- `unknown[]` でも動作するため、型の絞り込み前でも安全に使用できます。

## 使用方法

### 構文

関数:

- `areNullOrUndefined(array)`

パラメータ:

- `array`: チェックする配列。

### ローカル関数インポート

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areNullOrUndefined(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:30:08 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>