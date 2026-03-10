# isFloat

## 説明

`isFloat` は、与えられた `value` が有限の浮動小数点数（整数ではない `number`）かどうかを判定します。

### ユースケース

小数値が必要なユーザー提供の数値入力（例：価格、測定値、レート）を検証し、整数、`NaN`、無限大を拒否します。

> **TypeScript 利用者向けのヒント:**
>
> 有限で整数ではない数値入力のみを受け付ける必要がある場合に `isFloat` を使用してください。整数および有限でない数値は拒否されます。

### 利点

- 有限で整数ではない数値に対してのみ `true` を返します（整数、`NaN`、`Infinity`、`-Infinity` は除外）。
- あらゆる入力型（`unknown`）に対応し、`typeof value === "number"` のチェックにより安全に型を絞り込みます。
- 組み込みの数値ガード（`Number.isInteger`、`Number.isFinite`）を使用し、予測可能な挙動を実現します。

## 使用方法

### 構文

関数:

- `isFloat(value)`

パラメータ:

- `value`: 浮動小数点数かどうかを確認する値。

### ローカル関数インポート

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value は実行時に数値であり、有限で整数ではない
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isFloat(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>このファイルは 30 January 2026 at 16:08:16 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>