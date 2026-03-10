# areRegExes

## 説明

`areRegExes` は、値が `RegExp` オブジェクトのみを含む、要素が入った配列かどうかをチェックします。

### ユースケース

設定オプション（例: 許可/拒否パターンのリスト）が、マッチングに使用する前に空でない正規表現配列であることを検証します。

> **TypeScript 利用者向けのヒント:**
>
> 反復処理やパターンの合成を行う前に、`areRegExes` を使って `unknown` を `RegExp[]` に絞り込みます。

### 利点

- 値が空でない配列であり、すべての要素が `RegExp` インスタンスであることを保証します。
- ユーザー入力や設定を検証するためのシンプルな真偽ガード（`true`/`false`）を提供します。
- 後続のコードがすべての項目で正規表現操作が可能であることを前提とする場合の実行時エラーを防ぐのに役立ちます。

## 使用方法

### 構文

関数:

- `areRegExes(array)`

パラメータ:

- `array`: チェック対象の値です。

### ローカル関数インポート

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // ここではpatternsはRegExpの配列である
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areRegExes(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:19:23 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>