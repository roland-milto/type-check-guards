# isBinary

## 説明

`isBinary` は、値が（任意で `0b`/`0B` が付いた）2進文字列かどうかを判定し、`true` または `false` を返します。

### ユースケース

ユーザーが提供する文字列（例: フォームフィールド、CLI 引数、設定値）を検証し、後続の処理の前に、それらが（任意で `0b`/`0B`
プレフィックス付きの）2進数の数字のみを表していることを保証します。

> **TypeScript 利用者向けのヒント:**
>
> 文字列を `BigInt`/`Number` にパースまたは変換する前に、無効な入力を避けるための型ガードとして `isBinary` を使用してください。

### 利点

- `0b`/`0B` プレフィックスの有無にかかわらず、2進文字列を受け付けます。
- 空文字列および先頭/末尾に空白（ASCII ≤ 32）がある文字列を拒否します。
- 例外を投げずに `true`/`false` を返すため、不明な入力に対しても安全です。

## 使用方法

### 構文

関数:

- `isBinary(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // true
const b = isBinary("1010");   // true
const c = isBinary("0b1020"); // false
const d = isBinary(0b1010);     // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isBinary(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>このファイルは 31 January 2026 at 23:10:18 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>