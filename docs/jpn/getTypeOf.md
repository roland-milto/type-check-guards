# getTypeOf

## 説明

`getTypeOf` は、洗練された数値型や特定のオブジェクト種別を含め、与えられた値に対して詳細で人間が読みやすい型ラベルを返します。

### ユースケース

`getTypeOf` を使って、入力バリデーションや診断における型検出を正規化します。たとえば `nan` を拒否する、`integer` の ID
のみを受け付ける、`decimal` のような数値文字列を単なる `string` と区別して扱う、または `date` や `regexp`
のような正確なオブジェクト種別をログに記録する、といった用途に使えます。

> **TypeScript 利用者向けのヒント:**
>
> 戻り値の型は `DataTypeAsString | string` です。説明用ラベルとして扱い、分岐する際は `integer`、`float`、`nan`、`array`、
`null`、`undefined` のような既知のリテラルと比較してください。

### 利点

- JavaScript の `typeof` よりも細かい型文字列を返し、`integer`、`float`、`nan` のような数値サブタイプも含みます。
- `null` と `undefined` を、それぞれ `null` と `undefined` として明示的に区別します。
- 一般的な数値文字列フォーマットを検出し、単なる `string` ではなく `binary`、`octal`、`decimal`、`hexadecimal` として報告します。
- 配列も `array` として識別し、`Object.prototype.toString` を使用して特定のオブジェクト型名（例: `date`、`regexp`、`map`、
  `set`）を提供します。
- 一貫した人間が読みやすい型ラベルが必要なバリデーション、ロギング、デバッグに非常に有用です。

## 使用方法

### 構文

関数:

- `getTypeOf(value)`

パラメータ:

- `value`: データ型を判定する対象の値。

### ローカル関数インポート

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// チェック例
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.getTypeOf(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>このファイルは 6 February 2026 at 13:12:54 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>