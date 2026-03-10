# areIntegers

## 説明

`areIntegers` は、指定された配列のすべての要素が整数かどうかを判定し、整数であれば `true`、そうでなければ `false` を返します。

### ユースケース

`areIntegers`
は、ロジック上、ID、カウンター、ページネーションのオフセット、配列インデックスなどの整数値の入ったリストが必要な場合に、ユーザー提供または外部データ（例:
クエリパラメータ、JSON ペイロード、CSV 行）を検証するために使用します。

> **TypeScript 利用者向けのヒント:**
>
> `areIntegers` を、`unknown[]` 入力を整数のみを含む `number[]` として扱う前の実行時ガードとして使用してください。`false`
> が返る場合、入力は要素が入った配列ではないか、少なくとも1つの非整数値を含んでいます。

### 利点

- すべての要素が整数である場合にのみ `true` を返し、それ以外の場合は `false` を返します。
- 整数のみの操作（例: インデックス指定、件数、ID）を行う前に、不明な入力を検証するのに役立ちます。
- 早期失敗: 非整数の要素が見つかった時点でチェックを停止します。

## 使用方法

### 構文

関数:

- `areIntegers(array)`

パラメータ:

- `array`: 整数要素が含まれているかを確認する配列。

### ローカル関数インポート

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // 真
console.log(areIntegers(b)); // 真
console.log(areIntegers(c)); // 偽

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areIntegers(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:59:06 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>