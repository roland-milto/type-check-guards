# areNaNs

## 説明

`areNaNs` は配列内のすべての要素が `NaN` かどうかを確認し、すべての要素が `NaN` の場合にのみ `true` を返します。

### ユースケース

`NaN` がセンチネル値として使用されており、配列全体が `NaN` のみで構成されていることを保証する必要がある受信データを検証します（例：すべて欠損の数値系列を検出する場合）。

> **TypeScript 利用者向けのヒント:**
>
> 文字列から数値への強制変換なしで、配列が数値の `NaN` 値のみを含むことを検証する必要がある場合は `areNaNs` を使用してください。

### 利点

- すべての要素が `NaN` の場合にのみ `true` を返します（全要素の厳密チェック）。
- 文字列を数値に強制変換しません。"NaN" のような値は `NaN` のままにならず、結果を `false` にします。
- 未充填の配列に対しては `false` を返し、空入力で誤って `true` になるのを防ぎます。

## 使用方法

### 構文

関数:

- `areNaNs(array)`

パラメータ:

- `array`: `NaN` 値が含まれているかを確認する配列。

### ローカル関数インポート

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // true
const b = areNaNs([NaN, 1, NaN]); // false
const c = areNaNs([NaN, "NaN", NaN]); // false
const d = areNaNs([NaN, null, NaN]); // false
const e = areNaNs([] as unknown[]); // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areNaNs(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>このファイルは 30 January 2026 at 15:52:04 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>