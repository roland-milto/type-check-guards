# areValidDates

## 説明

配列が空でなく、かつ有効な `Date` オブジェクトのみで構成されているかを判定します。

### ユースケース

日付ベースの操作（ソート、範囲チェック、フォーマット）を行う前に、ユーザー提供または API 提供の配列を `areValidDates`
で検証し、すべての要素が実在する有効な `Date` オブジェクトであり、かつリストが空でないことを保証します。

> **TypeScript 利用者向けのヒント:**
>
> `areValidDates` は空配列に対して `false` を返します。バリデーション手順として依存する前に、配列が空でないことを意図しているか確認してください。

### 利点

- すべての要素が有効な `Date` インスタンスである場合にのみ `true` を返します（`new Date('invalid')` のような無効な日付は除外）。
- `false` を返すことで空の入力を拒否し、意味のある空でない日付リストのみを受け入れられるようにします。
- 他のバリデーションと組み合わせやすい、シンプルな boolean のガード形式チェックを提供します。

## 使用方法

### 構文

関数:

- `areValidDates(array)`

パラメータ:

- `array`: チェック対象の配列。`Date` オブジェクトを含む可能性があります。

### ローカル関数インポート

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // 真
console.log(areValidDates(b)); // 偽
console.log(areValidDates(c)); // 偽
console.log(areValidDates(d)); // 偽

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areValidDates(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:32:26 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>