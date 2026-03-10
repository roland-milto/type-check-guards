# areWeakMaps

## 説明

`areWeakMaps` は、値が空ではない配列であり、かつ各要素がすべて `WeakMap` であるかどうかを確認し、その場合にのみ `true`
を返し、それ以外は `false` を返します。

### ユースケース

実行時データ（例: パースした JSON、プラグイン入力、または緩く型付けされた設定）を検証し、反復処理して `WeakMap`
メソッドを呼び出す前に、それが `WeakMap` インスタンスの空ではない配列であることを保証します。いずれかの要素が `WeakMap`
でない場合、または配列が空の場合は `false` を返します。

> **TypeScript 利用者向けのヒント:**
>
> 未知の入力を空ではない `WeakMap[]` として扱う前に `areWeakMaps` で検証してください。空配列の場合は `false` を返します。

### 利点

- 提供された配列内のすべての要素が `WeakMap` インスタンスであることを保証します。
- 空配列に対して `false` を返し、「データなし」を有効な入力として誤って受け入れるのを防ぎます。
- すべての項目に対して `WeakMap` 固有の操作を行う前のガードとして有用です。

## 使用方法

### 構文

関数:

- `areWeakMaps(array)`

パラメータ:

- `array`: `WeakMap` インスタンスかどうかを確認する対象の配列。

### ローカル関数インポート

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list は WeakMap インスタンスの空でない配列です
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // 空でない WeakMap[] ではありません
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areWeakMaps(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:37:57 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>