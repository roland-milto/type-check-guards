# arePrimitives

## 説明

`arePrimitives` は、提供された空でない配列のすべての要素がプリミティブ型であるかどうかを評価します。

### ユースケース

受信データ（例: クエリパラメータ、CSV の行の値、または ID/タグのリスト）にオブジェクトが含まれないことを、シリアライズ、ハッシュ化、ログ出力、またはオブジェクトを受け取ってはならない
API に渡す前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> 以降の処理の前に `unknown[]` がプリミティブ値（string, number, bigint, boolean, symbol, undefined, または
> null）のみを含むことを保証する必要がある場合は `arePrimitives` を使用してください。

### 利点

- すべての要素がプリミティブ値である場合にのみ `true` を返し、「オブジェクト/関数がない」配列に対する厳格なガードになります。
- 早期に失敗します: プリミティブでない要素が見つかった時点で直ちに `false` を返します。
- 配列でない場合や空配列の場合も（filled-array チェックにより）`false` を返し、無効な入力を誤って受け入れることを防ぎます。

## 使用方法

### 構文

関数:

- `arePrimitives(array)`

パラメータ:

- `array`: プリミティブ型の要素で構成されているかを確認する対象の配列。

### ローカル関数インポート

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // true
const r2 = arePrimitives(b); // true
const r3 = arePrimitives(c); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.arePrimitives(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:05:11 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>