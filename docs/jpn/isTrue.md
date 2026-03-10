# isTrue

## 説明

`isTrue` は、与えられた値が `true` と厳密に等しいかどうかを判定します。

### ユースケース

`isTrue` を使用して、フラグ、機能トグル、または設定値を検証し、リテラル `true` のみを受け入れ、それ以外はすべて `false`
として扱うようにします。

> **TypeScript 利用者向けのヒント:**
>
> truthy 値ではなく、ブール値リテラル `true` のみを受け入れる必要がある場合は `isTrue` を使用してください。

### 利点

- ブール値リテラル `true` に対する厳密なチェックを提供します（型変換なし）。
- `1`、`"true"`、`{}` のような truthy 値と `true` を区別するのに役立ちます。
- ガードやバリデーションパイプラインに適した、シンプルで予測可能な挙動です。

## 使用方法

### 構文

関数:

- `isTrue(value)`

パラメータ:

- `value`: チェックする値。

### ローカル関数インポート

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // 真
const b = isTrue(1);         // 偽
const c = isTrue("true");   // 偽

if (isTrue(a)) {
  // ここではaは真です
}
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isTrue(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:42:47 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>