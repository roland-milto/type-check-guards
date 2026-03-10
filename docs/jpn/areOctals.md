# areOctals

## 説明

`areOctals` は、提供された値が有効な8進数文字列の空でない配列であるかどうかを判定します。

### ユースケース

`areOctals` は、ユーザー入力、設定値、または API ペイロードが8進リテラル（例: `0o755`
のようなファイル権限モード）を含む必要がある場合の検証に使用し、空配列や無効な要素が1つでもあれば `false`
を返して拒否したいときに役立ちます。

> **TypeScript 利用者向けのヒント:**
>
> `areOctals` を使用して、変換（例: `Number(...)` や独自のパース）を行う前に、各要素が有効な8進数文字列である空でない
`unknown[]` を確保してください。

### 利点

- 値が空でない配列であり、すべての要素が8進数文字列であることを検証し、全項目が合格した場合にのみ `true` を返します。
- 早期失敗: 8進数でない要素が見つかった時点で直ちに `false` を返します。
- 実行時エラーや入力処理の不整合を避けるために、8進数文字列を解析または変換する前のガードとして有用です。

## 使用方法

### 構文

関数:

- `areOctals(array)`

パラメータ:

- `array`: チェック対象の値です。

### ローカル関数インポート

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value は 8 進数文字列の空でない配列です
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areOctals(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:56:53 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>