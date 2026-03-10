# areFloats

## 説明

`areFloats` は、指定された配列が空でなく、かつその要素がすべて浮動小数点数であるかどうかを確認します。

### ユースケース

JSON、クエリパラメータ、外部APIなどから `unknown[]`
を受け取ったときに、平均、補間、統計計算などの数値ロジックを実行する前に、それが空でない配列であり、各項目がすべて浮動小数点数であることを保証する必要がある場合に
`areFloats` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `unknown[]` を浮動小数点数のみを含む `number[]` として扱う前に、それをガードするために `areFloats`
> を使用してください。空の配列や、浮動小数点数でない要素が1つでもある場合は `false` を返します。

### 利点

- 入力が空でない配列であり、かつすべての要素が浮動小数点数である場合にのみ `true` を返します。
- 早期に失敗します: 浮動小数点数でない要素が見つかった時点でただちに `false` を返します。
- 浮動小数点数に特化した計算を行う前に、不明な入力を検証するのに役立ちます。

## 使用方法

### 構文

関数:

- `areFloats(array)`

パラメータ:

- `array`: 浮動小数点数の要素かどうかを確認する配列。

### ローカル関数インポート

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // 真
console.log(areFloats(b)); // 偽
console.log(areFloats(c)); // 偽

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areFloats(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>このファイルは 30 January 2026 at 15:58:00 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>