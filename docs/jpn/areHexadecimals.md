# areHexadecimals

## 説明

配列内のすべての要素が16進数文字列であるかを確認し、空でない配列で全項目が有効な場合にのみ `true` を返します。

### ユースケース

`areHexadecimals` を使用して、ユーザー入力や外部データ（例: ID、チェックサム、先頭に「#」のないカラーコード）を16進数として解析したり、さらに処理したりする前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> `areHexadecimals` を使用して、解析や値の変換（例: `parseInt(value, 16)` の前や BigInt への変換）の前に不明な入力を検証してください。

### 利点

- すべての要素が16進数文字列であることを検証し、全項目が一致する場合にのみ `true` を返します。
- 設計上、空配列は受け付けず、入力データが欠落している場合は `false` を返します。
- ガードや早期リターンによる検証に適した、シンプルな真偽値（`true`/`false`）の結果を提供します。

## 使用方法

### 構文

関数:

- `areHexadecimals(array)`

パラメータ:

- `array`: 16進数文字列要素であるかを確認する対象の配列。

### ローカル関数インポート

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areHexadecimals(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>このファイルは 31 January 2026 at 23:06:43 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>