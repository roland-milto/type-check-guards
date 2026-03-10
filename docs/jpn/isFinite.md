# isFinite

## 説明

指定された `value` が有限の `number` であるかどうかを判定します。

### ユースケース

数値計算を行う前に、未知の入力（例: JSON、フォーム、または API 由来）を検証して、その値が実在する有限の数値であることを保証するために
`isFinite` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `isFinite` は有限の数値に対してのみ `true` を返し、`NaN`、`Infinity`、および数値以外の値に対しては `false` を返します。

### 利点

- 信頼できる有限性チェックのために組み込みの `Number.isFinite` を使用します。
- 有限の数値に対してのみ `true` を返し、`NaN`、`Infinity`、および数値以外の入力に対しては `false` を返します。
- 検証やガードロジックに適した、シンプルで副作用のない述語です。

## 使用方法

### 構文

関数:

- `isFinite(value)`

パラメータ:

- `value`: 有限かどうかをチェックする値。

### ローカル関数インポート

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers は: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // ここでは value は有限の数値です
  const doubled = value * 2;
  console.log(doubled);
}
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isFinite(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>このファイルは 30 January 2026 at 16:30:22 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>