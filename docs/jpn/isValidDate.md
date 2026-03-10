# isValidDate

## 説明

`isValidDate` は、与えられた値が有効な `Date` オブジェクトかどうかを確認し、実在する無効ではない日付に対してのみ `true`
を返します。

### ユースケース

日付を含む可能性のあるユーザー入力や API データを検証し、日付の計算・フォーマット・比較を行う前に、その値が無効な日付ではなく実際の
`Date` インスタンスであることを確実にします。

> **TypeScript 利用者向けのヒント:**
>
> `unknown` 型の値に対して `Date` メソッド（例: `toISOString`, `getTime`）を呼び出す前に `isValidDate` を使用し、それらが有効な
`Date` オブジェクトであることを確認してください。

### 利点

- 値が日付のような文字列や数値ではなく、`Date` のインスタンスであることを保証します。
- `NaN` の時刻値をチェックすることで、無効な日付（例: `new Date("invalid")`）を拒否します。
- 条件分岐やバリデーションパイプラインで使いやすい、シンプルな boolean ガードです。
- 入力を事前に検証することで、日付メソッド呼び出し時の実行時エラーを防ぐのに役立ちます。

## 使用方法

### 構文

関数:

- `isValidDate(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input は有効な Date インスタンスです
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isValidDate(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>このファイルは 30 January 2026 at 16:51:30 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>