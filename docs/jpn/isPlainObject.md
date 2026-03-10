# isPlainObject

## 説明

指定された `value` がプレーンオブジェクトかどうかを判定し、そうであれば `true`、そうでなければ `false` を返します。

### ユースケース

`unknown` の入力（例: パースした JSON、外部データ、または関数引数）がプレーンオブジェクトであることを、キーを読み取ったり型付きの設定オブジェクトへマッピングしたりする前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> `isPlainObject` は、`unknown` をレコード風のオブジェクトとして扱う前に絞り込むのに有用です。内部タグが `[object Object]`
> の値に対してのみ `true` を返します。

### 利点

- 値がプレーンオブジェクト（すなわち `Object` / `{}`）であるかどうかを、`true` または `false` を返してシンプルかつ信頼性高く判定できます。
- プレーンオブジェクトを、配列、関数、`null`、およびその他の非プレーンオブジェクト型と区別するのに役立ちます。
- TypeScript において、オブジェクトのプロパティへアクセスする前に `unknown` 値を絞り込むための型ガードとして有用です。

## 使用方法

### 構文

関数:

- `isPlainObject(value)`

パラメータ:

- `value`: プレーンオブジェクトかどうかを判定する対象の値。

### ローカル関数インポート

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // ここではinputはプレーンオブジェクトです
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isPlainObject(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>このファイルは 6 February 2026 at 12:18:14 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>