# areErrors

## 説明

配列が空でなく、`Error` オブジェクトのみを含むかどうかを確認し、`true` または `false` を返します。

### ユースケース

実行時に提供される `unknown[]`（例: 集約された失敗、バリデーション結果、またはデシリアライズされたデータ）が、反復処理・ログ出力・再スローを行う前に、空でない
`Error` オブジェクトのリストであることを検証します。

> **TypeScript 利用者向けのヒント:**
>
> `areErrors` は、すべての項目が `Error` である要素が入った配列に対してのみ `true` を返します。空配列の場合、またはいずれかの要素が
`Error` でない場合は `false` を返します。

### 利点

- すべての要素が `Error` インスタンスであることを保証し、安全なエラーハンドリングとログ出力を可能にします。
- 空配列を拒否し、誤って「エラーなし」の状態が有効なエラー一覧として扱われるのを防ぎます。
- `unknown[]` 入力（例: API や `catch` ブロック由来）を扱う際のランタイムガードとして有効に機能します。

## 使用方法

### 構文

関数:

- `areErrors(array)`

パラメータ:

- `array`: `Error` オブジェクトかどうかを確認する配列。

### ローカル関数インポート

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value は Error オブジェクトの空でない配列です
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areErrors(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>このファイルは 6 February 2026 at 12:34:12 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>