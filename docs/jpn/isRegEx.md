# isRegEx

## 説明

提供された値が `RegExp` インスタンスかどうかを判定します。

### ユースケース

ユーザー提供または動的な値（例: 設定、API ペイロード、プラグイン入力）を、正規表現として扱う前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> `isRegEx` を使用して、RegExp 固有のプロパティやメソッドを使う前に `unknown`（またはユニオン）値を絞り込みます。`RegExp`
> のインスタンスである値に対してのみ `true` を返します。

### 利点

- 値が `RegExp` であるかどうかを確認するための、シンプルなランタイム型ガードを提供します。
- コードが正規表現を想定している場合（例: `test` や `exec` を呼び出す前、または `source` を読み取る前）に、エラーの防止に役立ちます。
- `/.../` の正規表現リテラルと、`new RegExp(...)` によって作成されたインスタンスの両方で動作します。
- 正規表現でない入力に対して例外を投げず、明確な真偽値（`true`/`false`）を返します。

## 使用方法

### 構文

関数:

- `isRegEx(value)`

パラメータ:

- `value`: チェック対象の値です。

### ローカル関数インポート

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // ここでは input は RegExp です
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isRegEx(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:29:52 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>