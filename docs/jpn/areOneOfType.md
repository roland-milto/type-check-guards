# areOneOfType

## 説明

`areOneOfType` は、空でない配列のすべての要素が指定された実行時型のいずれかであるかどうかをチェックします。

### ユースケース

受信データ（例: パースしたJSON）を検証し、あるフィールドが空でない配列であり、その要素が既知のプリミティブ型の集合に制限されている必要がある場合に使用します。配列が空、または許可されていない型が含まれている場合は
`false` を返します。

> **TypeScript 利用者向けのヒント:**
>
> この関数は boolean を返し、コンパイル時に配列要素の型を絞り込みません。後続の処理の前に、実行時検証ステップとして使用してください。

### 利点

- 配列内のすべての要素が、許可された実行時型の少なくとも1つに一致することを保証し、配列全体が条件を満たした場合にのみ
  `true` を返します。
- 無効な入力を早期に拒否します。`array` または `types` が空、または要素が入った配列でない場合は `false` を返します。
- `areOneOfType` を1回呼び出すだけで、混在型のコレクション（例: 数値と文字列）を検証するのに便利です。

## 使用方法

### 構文

関数:

- `areOneOfType(array, types)`

パラメータ:

- `array`: 指定された型に対して検証する要素の配列。
- `types`: 照合するデータ型を表す文字列の配列。

### ローカル関数インポート

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areOneOfType(array, types)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>このファイルは 31 January 2026 at 23:37:24 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>