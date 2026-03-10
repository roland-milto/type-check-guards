# areNumerics

## 説明

`areNumerics` は、値が空でない配列であり、すべての要素が数値かどうかを確認します。

### ユースケース

`areNumerics` を使用して、外部または型付けされていないデータ（例: JSON
ペイロード、クエリパラメータ、フォーム入力）を合計、平均、その他の数値演算を行う前に検証します。入力が空でない数値配列であることを保証し、それ以外の場合は
`false` を返します。

> **TypeScript 利用者向けのヒント:**
>
> `unknown` 入力を数値配列として扱う前に `areNumerics` をガードとして使用してください。配列でない場合や空配列の場合は
`false` を返します。

### 利点

- 入力が空でない配列であり、かつすべての要素が数値である場合にのみ `true` を返します。
- 早期に失敗します: 数値でない要素が見つかった時点でチェックを停止し、`false` を返します。
- 数値演算を行う前に、不明な入力を安全に検証するのに役立ちます。

## 使用方法

### 構文

関数:

- `areNumerics(array)`

パラメータ:

- `array`: 数値要素かどうかを確認する配列。

### ローカル関数インポート

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // 真
console.log(areNumerics(b)); // 真
console.log(areNumerics(c)); // 偽
console.log(areNumerics(d)); // 偽
console.log(areNumerics(e)); // 偽

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areNumerics(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>このファイルは 6 February 2026 at 16:05:49 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>