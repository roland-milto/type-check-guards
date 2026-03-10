# areFalse

## 説明

`areFalse` は、渡された配列内のすべての要素が厳密に boolean の `false` であるかどうかをチェックします。

### ユースケース

処理を進める前に、機能フラグ、チェック、またはガード結果のリストがすべて `false` であることを検証します（例:
ブロッキング条件が存在しないことを確認する）。

> **TypeScript 利用者向けのヒント:**
>
> 配列が空でないこと、かつ boolean 値の `false` のみを含むことを厳密に検証したい場合に `areFalse` を使用してください。

### 利点

- すべての要素が厳密に `false` であることを保証します（truthy/falsey の型変換は行いません）。
- `isFilledArray` により配列が要素で満たされていることを要求するため、配列でない値や空配列に対しては `false` を返します。
- 効率のため、最初に `false` ではない要素が見つかった時点で早期終了します。

## 使用方法

### 構文

関数:

- `areFalse(array)`

パラメータ:

- `array`: 任意の型の要素を含む、チェック対象の配列。

### ローカル関数インポート

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // true
const b = areFalse([false, true, false]);  // false
const c = areFalse([false, "false", false]); // false
const d = areFalse([]); // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areFalse(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>このファイルは 31 January 2026 at 16:17:30 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>