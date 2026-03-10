# areStrings

## 説明

`areStrings` は、配列が空でなく、かつ全要素が文字列であるかを確認し、その場合にのみ `true` を返します。

### ユースケース

外部またはユーザー提供のデータ（例: クエリパラメータ、JSON ペイロード、CSV フィールド）を検証し、処理前に空でない文字列のリストであることを確実にします。

> **TypeScript 利用者向けのヒント:**
>
> 文字列専用のロジックを適用する前に、未知の配列を検証するために `areStrings` を使用してください。空配列の場合は `false`
> を返します。

### 利点

- すべての要素が文字列であることを保証し、混在型の配列は `false` を返して拒否します。
- 空配列を拒否するため、`true` は「空でない文字列のリスト」であることのみを示します。
- 文字列専用の操作（例: `trim`、`toLowerCase`）を行う前の、手早い実行時ガードとして有用です。

## 使用方法

### 構文

関数:

- `areStrings(value)`

パラメータ:

- `value`: Expected type `string[]`.

### ローカル関数インポート

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input は実行時に空でない string[] である
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areStrings(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:18:54 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>