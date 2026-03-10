# isBigInt

## 説明

`isBigInt` は、与えられた値が `bigint` 型かどうかをチェックし、BigInt プリミティブであれば `true`、それ以外は `false`
を返します。

### ユースケース

BigInt 固有の計算を行ったり BigInt 専用フィールドに保存したりする前に、型付けされていないソース（例: JSON のパース、ユーザー入力、外部
API）から来る値を検証し、絞り込みます。

> **TypeScript 利用者向けのヒント:**
>
> BigInt のオペランドが必要な BigInt の算術（例: `+`、`*`）を行う前に、`isBigInt` を使って `unknown` を `bigint` に絞り込んでください。

### 利点

- `bigint` プリミティブ型に対するシンプルで信頼性の高い実行時チェックを提供します。
- BigInt 専用の操作を行う前に、`unknown` の値を絞り込むのに役立ちます。
- 誤検知を回避します。通常の数値、文字列、その他の型は `false` を返します。

## 使用方法

### 構文

関数:

- `isBigInt(value)`

パラメータ:

- `value`: チェックする値。

### ローカル関数インポート

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // 真
console.log(isBigInt(10));  // 偽
console.log(isBigInt("10")); // 偽
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isBigInt(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>このファイルは 31 January 2026 at 23:32:16 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>