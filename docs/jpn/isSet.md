# isSet

## 説明

指定された値が `Set` かどうかを判定します。

### ユースケース

外部ソース（例: JSON のパース、ユーザー入力、またはサードパーティ API）からの入力を検証し、`Set` の操作を行う前に値が `Set`
であることを保証します。

> **TypeScript 利用者向けのヒント:**
>
> `isSet` を使って `unknown` の値を絞り込み、`.add`、`.has`、`.size` のような `Set` 固有の API を呼び出す前に確認してください。

### 利点

- 値が `Set` であるかどうかを確認するためのシンプルな実行時チェックを提供します。
- 値が `Set` でない場合に早期に分岐できるため、型エラーの防止に役立ちます。
- （空でも要素が入っていても）あらゆる内容の `Set` で動作し、一貫して `true`/`false` を返します。

## 使用方法

### 構文

関数:

- `isSet(value)`

パラメータ:

- `value`: チェックする値。

### ローカル関数インポート

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a は実行時に Set である
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isSet(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isSet](../_analysis/isSet.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:10:09 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>