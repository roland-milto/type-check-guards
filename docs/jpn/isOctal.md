# isOctal

## 説明

値が有効な8進リテラル文字列（例: `0o755`）かどうかを判定します。

### ユースケース

解析や変換を行う前に、8進リテラル文字列（例: `0o644` のようなファイル権限モード）として表現されている必要があるユーザー入力や設定値を検証します。

> **TypeScript 利用者向けのヒント:**
>
> `isOctal` は型ガード（`value is string`）です。結果が `true` の後、TypeScript はチェックした変数を `string` に絞り込みます。

### 利点

- 厳密な型ガードを提供します。入力が8進リテラル形式に一致する文字列である場合にのみ `true` を返します。
- 空文字列および先頭/末尾に空白（ASCII 制御文字/スペース）を含む文字列を拒否し、偶発的な一致を減らします。
- 符号の省略可能な指定をサポートし、`0o`/`0O` プレフィックスは大文字小文字を区別しません。
- 文字列以外の入力に対しては例外を投げずに `false` を返すため、寛容です。

## 使用方法

### 構文

関数:

- `isOctal(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // true
console.log(isOctal(b)); // true
console.log(isOctal(c)); // false
console.log(isOctal(d)); // false

if (isOctal(a)) {
  // ここではaは文字列です
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isOctal(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>このファイルは 30 January 2026 at 15:41:49 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>