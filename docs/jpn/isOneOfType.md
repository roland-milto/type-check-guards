# isOneOfType

## 説明

`isOneOfType`は、与えられた`value`が提供された型文字列のうち少なくとも1つに一致するかどうかを判定し、いずれかの一致が見つかれば
`true`を返し、そうでなければ`false`を返します。

### ユースケース

疎に型付けされたデータや外部データ（例: パースしたJSON、クエリパラメータ）を検証する際に、追加のロジックへ進む前に複数の許容される実行時型（
`number`や`string`など）を許可します。

> **TypeScript 利用者向けのヒント:**
>
> 複数の許可された型のいずれかに値が一致するかを実行時にチェックしたい場合は`isOneOfType`を使用します。少なくとも1つの型に一致すれば
`true`を返し、それ以外は`false`を返します。

### 利点

- 1回の呼び出しで値を複数の許可された型と照合し、最初に一致した時点で`true`を返します。
- `unknown`入力に対応しており、実行時の境界（例: 外部データ、ユーザー入力）で有用です。
- 単純な真偽値（`true`/`false`）の結果を提供し、条件分岐ロジックや早期リターンと組み合わせやすいです。

## 使用方法

### 構文

関数:

- `isOneOfType(value, types)`

パラメータ:

- `value`: 指定された型に対してチェックされる値。
- `types`: 値の候補となる型を表す型文字列の配列。

### ローカル関数インポート

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input は実行時にオブジェクトです
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isOneOfType(value, types)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>このファイルは 6 February 2026 at 13:52:51 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>