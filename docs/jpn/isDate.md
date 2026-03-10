# isDate

## 説明

`isDate` は、渡された値が `Date` かどうかを判定し、`Date` インスタンスであれば `true`、それ以外は `false` を返します。

### ユースケース

不明な値（例: リクエストデータ、設定値、またはパースした JSON）を検証して絞り込んだうえで、フォーマット、比較、`toISOString()`
の呼び出しなどの `Date` 操作を行います。

> **TypeScript 利用者向けのヒント:**
>
> `isDate` を使用して、実行時に `unknown` を `Date` に絞り込みます。実際の `Date` インスタンスに対してのみ `true`
> を返します（date 文字列は対象外）。

### 利点

- 値が `Date` であるかどうかを検証するためのシンプルな実行時ガードを提供します。
- `Date` インスタンスのみが検証を通過することを保証することで、型エラーの防止に役立ちます。
- 日付固有のメソッドを使用する前に、不明な入力（例: API ペイロード）を検証するのに便利です。

## 使用方法

### 構文

関数:

- `isDate(value)`

パラメータ:

- `value`: `Date` 型かどうかをチェックする値。

### ローカル関数インポート

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // ここではinputはDateです
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isDate(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isDate](../_analysis/isDate.md)

<br>

---

<small>このファイルは 31 January 2026 at 15:37:52 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>