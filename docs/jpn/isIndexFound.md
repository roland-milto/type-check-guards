# isIndexFound

## 説明

`isIndexFound` は、与えられた値が非負の整数であるかどうかを判定し、インデックスが見つかったことを示します。

### ユースケース

検索結果が使用可能なインデックス（整数 `>= 0`）を表していることを、配列や文字列にインデックスアクセスする前に検証し、`-1`
や非数値の値を誤って使用するのを防ぎます。

> **TypeScript 利用者向けのヒント:**
>
> `indexOf`、`findIndex`、または `-1`（あるいは他の無効な値）が「見つからない」を示し得るカスタム検索のような操作の後に
`isIndexFound` を使用してください。`true` を返した場合、その値は数値であり、配列/文字列のインデックスとして安全に使用できます。

### 利点

- 非負の整数であるかどうかを確認することで、インデックスが見つかったかを検出するためのシンプルな型ガードを提供します。
- 有効なインデックス相当の値（整数 `>= 0`）に対してのみ `true` を返し、負の値、整数でない値、数値でない値を拒否します。
- `-1` を「見つからない」の意味で返す API を扱う際に、オフバイワンや番兵値の誤りを避けるのに役立ちます。

## 使用方法

### 構文

関数:

- `isIndexFound(value)`

パラメータ:

- `value`: 非負の整数であるかどうかを確認する値。

### ローカル関数インポート

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // ここでは idx は数値で、0 以上です
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// indexOf を使った典型的な使用例
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isIndexFound(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:46:29 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>