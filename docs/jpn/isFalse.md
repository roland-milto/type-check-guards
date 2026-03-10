# isFalse

## 説明

`isFalse` は、与えられた値がブールリテラル `false` と厳密に等しいかどうかをチェックします。

### ユースケース

不明なデータ（例: JSON、クエリパラメータ、ユーザー入力）を検証する際に、明示的なブール値 `false`
のみを有効なフラグとして扱い、それ以外はすべて拒否したい場合に使用します。

> **TypeScript 利用者向けのヒント:**
>
> `isFalse` は、リテラル `false` のみを受け入れ、それ以外の falsy 値をすべて拒否する必要がある場合に使用します。
`value === false` のときにのみ `true` を返します。

### 利点

- 型変換（coercion）なしで、ブールリテラル `false` を厳密にチェックできます。
- `0`、`""`、`null`、`undefined` のような他の falsy 値と `false` を区別するのに役立ちます。
- 不明な入力を検証する際に意図を明確にでき、可読性が向上します。

## 使用方法

### 構文

関数:

- `isFalse(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // ここでは input は厳密に false である
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isFalse(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>このファイルは 31 January 2026 at 16:22:09 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>