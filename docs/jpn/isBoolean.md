# isBoolean

## 説明

指定された値が `boolean` かどうかを判定します。

### ユースケース

外部または型付けされていないデータ（例: 環境変数、JSON ペイロード、クエリパラメータ）を検証し、条件分岐ロジックで使用する前に値が
`boolean` であることを確認します。

> **TypeScript 利用者向けのヒント:**
>
> ブール演算を適用する前に、`isBoolean` を使用して `unknown` を `boolean` に絞り込みます。

### 利点

- `typeof` を使用したシンプルで高速な実行時チェック。
- ブール値固有のロジックを適用する前に、不明な入力を検証するのに役立ちます。
- 予測可能な `boolean` の結果（`true`/`false`）を返します。

## 使用方法

### 構文

関数:

- `isBoolean(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // ここでは input は boolean です
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isBoolean(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:36:50 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>