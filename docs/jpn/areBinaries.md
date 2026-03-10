# areBinaries

## 説明

指定された値が有効なバイナリ文字列の空でない配列であるかを確認し、すべての項目が検証に合格した場合にのみ `true` を返します。

### ユースケース

`areBinaries` は、不明なリスト（例: JSON、フォーム、API から）を受け取り、パースまたは処理する前にそれがバイナリ文字列の空でない配列であることを保証したい場合に使用します。

> **TypeScript 利用者向けのヒント:**
>
> `areBinaries` を使用して、バイナリ文字列を数値/BigInts に変換する前に不明な入力を検証します。配列が空でないこと、かつ各要素が有効なバイナリ文字列であることを保証します。

### 利点

- 値が、各要素が有効なバイナリ文字列である空でない配列であることを検証します。
- ガード、早期リターン、入力検証に適した単純な真偽値（`true`/`false`）を返します。
- 非バイナリの要素を含む配列を拒否することで、後続のパースエラーを防ぎます。

## 使用方法

### 構文

関数:

- `areBinaries(array)`

パラメータ:

- `array`: チェック対象の値。

### ローカル関数インポート

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // true
console.log(areBinaries(b)); // false
console.log(areBinaries([])); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areBinaries(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>このファイルは 31 January 2026 at 23:14:59 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>