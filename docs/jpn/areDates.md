# areDates

## 説明

`areDates` は、与えられた配列が空でなく、かつ `Date` オブジェクトのみを含むかどうかを判定し、すべての要素が有効な日付である場合にのみ
`true` を返します。

### ユースケース

`areDates` を使って、不明な入力（例: パースした JSON、フォームデータ、API
ペイロード）を検証してから、時刻でのソート、フォーマット、範囲の計算などの日付固有のロジックを実行します。

> **TypeScript 利用者向けのヒント:**
>
> 空でない配列で、すべての要素が `Date` の場合にのみ `true` を返します。空配列は `false` になります。

### 利点

- 配列の内容を検証する前に、配列が空でないことを保証し、空の入力に対して `true` になってしまうのを防ぎます。
- すべての要素が `Date` インスタンスであることを検証し、最初の不一致が見つかった時点で直ちに `false` を返します。
- 配列要素に対して日付固有の操作を行う前の、ガードスタイルのチェックとして有用です。

## 使用方法

### 構文

関数:

- `areDates(array)`

パラメータ:

- `array`: `Date` オブジェクトかどうかをチェックする対象の配列。

### ローカル関数インポート

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // 真
console.log(areDates(b)); // 偽
console.log(areDates(c)); // 偽

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areDates(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areDates](../_analysis/areDates.md)

<br>

---

<small>このファイルは 31 January 2026 at 15:30:56 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>