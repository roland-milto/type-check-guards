# isHexadecimal

## 説明

`isHexadecimal` は、与えられた値が必須の `0x`/`0X` プレフィックスを持つ16進文字列リテラルかどうかをチェックします。

### ユースケース

`isHexadecimal` を使用して、16進文字列リテラル（例:
ID、マスク、アドレス）として提供される必要があり、前後に空白を含んではならない設定値、APIペイロードのフィールド、またはCLI引数を検証します。

> **TypeScript 利用者向けのヒント:**
>
> 解析や変換の前に、ユーザー入力やシリアライズされたデータを厳密な16進リテラル文字列（`0x`/`0X` プレフィックスを含む）として検証する必要がある場合は
`isHexadecimal` を使用してください。

### 利点

- 値が文字列であり、厳密な16進リテラル形式（`0x`/`0X` プレフィックス必須）に一致することを検証します。
- 先頭または末尾に空白を含む文字列を拒否し、パディングされた入力を誤って受け入れるのを防ぎます。
- 符号を任意でサポートし、プレフィックスと桁は大文字小文字を区別しないため、予測可能に `true`/`false` を返します。

## 使用方法

### 構文

関数:

- `isHexadecimal(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false（接頭辞がない）
isHexadecimal(" 0x1A2B"); // false（先頭の空白）
isHexadecimal(0x1a2b); // false（文字列ではない）
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isHexadecimal(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>このファイルは 31 January 2026 at 22:59:14 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>