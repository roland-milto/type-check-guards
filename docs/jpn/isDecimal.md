# isDecimal

## 説明

`isDecimal` は、値が先頭/末尾に空白を含まず、有効な小数形式で表現された小数文字列かどうかを確認します。

### ユースケース

解析または保存する前に、前後に空白を一切含まない（符号は任意）小数文字列として提供される必要があるフォームフィールド、API
ペイロード、または設定値を検証します。

> **TypeScript 利用者向けのヒント:**
>
> （例: `Number(value)` で）変換する前にユーザー入力を検証するために `isDecimal` を使用してください。特に空白を拒否する必要がある場合に有効です。

### 利点

- 入力が文字列であり、小数リテラルのパターンに一致することを厳密に検証します。
- 曖昧な解析を避けるため、先頭および末尾の空白（制御文字を含む）を拒否します。
- 正規表現を実行する前に、高速な事前チェック（型チェックと先頭/末尾文字の確認）を行います。
- ガードや入力検証に適した、単純な真偽値（`true`/`false`）を返します。

## 使用方法

### 構文

関数:

- `isDecimal(value)`

パラメータ:

- `value`: 小数文字列形式かどうかを確認する値。

### ローカル関数インポート

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v はここでは文字列です（実行時に検証済み）
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isDecimal(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>このファイルは 31 January 2026 at 15:53:04 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>