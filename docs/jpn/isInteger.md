# isInteger

## 説明

指定された `value` が安全な整数の数値かどうかを判定します。

### ユースケース

信頼できない入力（例: クエリパラメータ、JSON ペイロード、環境変数）を、配列インデックス、ページネーション、カウンター、またはデータベース
ID の整数として使用する前に検証します。

> **TypeScript 利用者向けのヒント:**
>
> `isInteger` を使用して、不明な入力を数値の整数として扱う前に検証してください。`typeof value === "number"` かつ
`Number.isSafeInteger(value)` を満たす値に対してのみ `true` を返します。

### 利点

- 型と数値の安全性の両方をチェックします。入力が数値かつ安全な整数である場合にのみ `true` を返します。
- 数値への強制変換に伴う一般的な落とし穴を防ぎます。"5" のような文字列は正しく `false` を返します。
- 整数でない値や安全でない整数を拒否するため、ID、カウンター、配列のインデックスに適しています。

## 使用方法

### 構文

関数:

- `isInteger(value)`

パラメータ:

- `value`: 整数かどうかを確認する値。

### ローカル関数インポート

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // 真
const b = isInteger(-100);   // 真
const c = isInteger("5");    // 偽
const d = isInteger(5.5);    // 偽
const e = isInteger(null);   // 偽

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isInteger(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:50:21 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>