# areOfType

## 説明

指定された `array` のすべての要素が、指定された `type` であるかどうかを確認します。

### ユースケース

`areOfType` を使用して、不明な入力（例: パースした JSON、API ペイロード、ユーザー入力）を検証してから、配列の各要素に対して型固有の操作を実行します。

> **TypeScript 利用者向けのヒント:**
>
> `areOfType` は型ガードであるため、TypeScript は `if (areOfType(...)) {}` ブロック内で配列を `Array<DataTypeOf<T>>`
> に絞り込みます。

### 利点

- TypeScript の型ガードを提供します。`true` を返す場合、入力は `Array<DataTypeOf<T>>` に絞り込まれます。
- 要求されたランタイム型に対して各要素を検証し、異なる型が混在する配列が通過するのを防ぎます。
- 早期に失敗します。一致しない要素が見つかった時点で直ちに `false` を返します。
- 設計上、配列以外と空配列を拒否します（`isFilledArray` に依存します）。

## 使用方法

### 構文

関数:

- `areOfType(array, type)`

パラメータ:

- `array`: チェックする配列。
- `type`: 配列内の各要素に対して照合する型。

### ローカル関数インポート

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values は現在 number[] です
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areOfType(array, type)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>このファイルは 30 January 2026 at 17:10:09 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>