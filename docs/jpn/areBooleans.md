# areBooleans

## 説明

`areBooleans` は、与えられた空でない配列がブール値のみを含むかどうかを確認し、含む場合は `true`、そうでない場合は `false`
を返します。

### ユースケース

ユーザー提供または外部データ（例: JSON ペイロード、クエリパラメータ、設定配列）を検証し、空でないリストがブール値のみを含むことを確認してから、ブール論理を適用したり
`boolean[]` を期待する API に渡したりします。

> **TypeScript 利用者向けのヒント:**
>
> `unknown[]` を `boolean[]` として扱う前に `areBooleans` を使って検証してください。空配列に対しては `false`
> を返すため、空リストを許可したい場合はそのケースを明示的に処理してください。

### 利点

- すべての要素がブール値であり、かつ入力が空でない配列である場合にのみ `true` を返します。
- 空配列を拒否して（`false` を返して）誤検知を防ぎます。
- ブール値のみの操作（例: `every`、`some`、論理的なリダクション）の前に行う実行時ガードとして有効です。

## 使用方法

### 構文

関数:

- `areBooleans(array)`

パラメータ:

- `array`: ブール要素かどうかをチェックする対象の配列。

### ローカル関数インポート

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areBooleans(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:40:55 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>