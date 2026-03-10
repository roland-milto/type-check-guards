# isMap

## 説明

指定された `value` が `Map` かどうかをチェックし、`Map` であれば `true`、そうでなければ `false` を返します。

### ユースケース

JSON のパース、外部 API、ユーザー入力などから `unknown` の値を受け取り、`Map` の操作を行う前にそれが `Map`
であることを保証する必要がある場合に `isMap` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `isMap` は、値が `Map` のときに `true` を返し、それ以外では `false` を返す実行時ガードです。`Map` API を呼び出す前に
`unknown` を絞り込むために使用してください。

### 利点

- 値が `Map` であるかどうかを素早く実行時にチェックできます。
- `get`、`set`、`has` などの `Map` メソッドを必要とするコードパスをガードすることで、型エラーの防止に役立ちます。
- `unknown` の入力を扱う際の軽量なバリデーション手順としてうまく機能します。

## 使用方法

### 構文

関数:

- `isMap(value)`

パラメータ:

- `value`: チェックする値。

### ローカル関数インポート

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isMap(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isMap](../_analysis/isMap.md)

<br>

---

<small>このファイルは 31 January 2026 at 16:05:02 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>