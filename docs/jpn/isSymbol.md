# isSymbol

## 説明

`isSymbol` は、指定された値が `symbol` 型かどうかを判定し、シンボルであれば `true`、それ以外は `false` を返します。

### ユースケース

一意の識別子、レジストリキー、またはオブジェクトや Map における算出プロパティキーとして使用する前に、`unknown` の値が
`symbol` であることを検証します。

> **TypeScript 利用者向けのヒント:**
>
> シンボル関連の関数を呼び出したり、算出プロパティキーとして使用したりする前に、`isSymbol` を使って `unknown` を `symbol`
> に絞り込んでください。

### 利点

- JavaScript のプリミティブ型 `symbol` に対して、シンプルで信頼性の高い実行時チェックを提供します。
- シンボル固有の API を使用したり、キーとして保存したりする前に、`unknown` の値を絞り込むのに役立ちます。
- `typeof` を使用することで誤検出を回避します。`typeof` は `symbol` 値を検出するための標準的な方法です。

## 使用方法

### 構文

関数:

- `isSymbol(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // ここでは input はシンボルです
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isSymbol(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:27:26 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>