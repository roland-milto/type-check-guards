# areNull

## 説明

指定された `array` のすべての要素が `null` かどうかを確認します。

### ユースケース

データセットの列、API のフィールド一覧、またはプレースホルダー配列が `null`
値のみで構成されていることを検証してから、すべてのエントリが意図的に空であることを前提とするロジックを適用します。

> **TypeScript 利用者向けのヒント:**
>
> 入力が空でない配列であり、かつ各要素が厳密に `null`（`undefined` でも falsy 値でもない）であることをチェックしたい場合は
`areNull` を使用してください。

### 利点

- すべての要素が `null` の場合にのみ `true` を返すため、厳密な「全件一致」ガードになります。
- 配列以外や空配列は `false` を返して拒否するため、無効な入力で誤って truthy になるのを防ぎます。
- 完全に `null` である必要があるデータを処理する前の事前条件チェックとして有効です。

## 使用方法

### 構文

関数:

- `areNull(array)`

パラメータ:

- `array`: `null` 要素をチェックする対象の入力配列。

### ローカル関数インポート

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // true
const allNullB = areNull(b); // false

const notAnArray = areNull(123 as unknown as unknown[]); // false
const empty = areNull([]); // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areNull(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areNull](../_analysis/areNull.md)

<br>

---

<small>このファイルは 31 January 2026 at 15:43:52 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>