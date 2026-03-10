# areEqual

## 説明

`areEqual` は、配列内のすべての要素が指定された期待値と等しいかどうかを確認し、すべての項目が一致する非空配列の場合にのみ
`true` を返します。

### ユースケース

リストが単一の許可された値のみを含むこと（例: すべてのステータスフラグが `true`、すべてのロールが `"admin"`
、またはすべての数値エントリが必須の定数に等しい）を検証しつつ、空の入力は無効（`false`）として扱います。

> **TypeScript 利用者向けのヒント:**
>
> 厳密に「全項目が一致する」ことを確認したい場合に `areEqual` を使用してください。空配列、および配列でない入力や埋まった配列でない入力に対しては
`false` を返します。

### 利点

- すべての要素が期待値に一致する場合にのみ `true` を返し、それ以外は `false` を返します。
- フェイルファスト: 一致しない要素が見つかった時点でチェックを停止します。
- 入力が埋まった配列でない場合は `false` を返すことで、不正な入力を防ぎます。

## 使用方法

### 構文

関数:

- `areEqual(value, expected)`

パラメータ:

- `value`: チェック対象の配列。
- `expected`: 配列の各要素と比較する要素。

### ローカル関数インポート

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areEqual(value, expected)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>このファイルは 31 January 2026 at 23:51:02 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>