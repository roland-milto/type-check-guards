# areMaps

## 説明

`areMaps` は、指定された配列が空でなく、かつその要素がすべて `Map` インスタンスであるかどうかを判定します。

### ユースケース

未知の入力（例: JSON のパース、外部 API、または動的ソース由来）を、空でない `Map` オブジェクトのリストとして扱う前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> 空配列の場合は `false` を返します。配列が埋まっていて、すべての要素が `Map` のときにのみ `true` を返します。

### 利点

- すべての要素が `Map` インスタンスであることを保証し、配列全体がチェックに合格した場合にのみ `true` を返します。
- 設計上、空配列を拒否するため、「データなし」を有効な入力として誤って受け入れることを防ぎます。
- コレクション全体に対して `Map` 固有の操作（例: `.get()`、`.set()`、反復）を行う前のガードとして有用です。

## 使用方法

### 構文

関数:

- `areMaps(array)`

パラメータ:

- `array`: チェック対象の配列。

### ローカル関数インポート

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items は実行時に Map インスタンスの空でない配列であることが保証される
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // 次の場合は false: 空の配列、または Map ではない値を含む配列
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areMaps(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>このファイルは 31 January 2026 at 16:13:08 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>