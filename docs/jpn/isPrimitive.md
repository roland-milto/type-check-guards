# isPrimitive

## 説明

`isPrimitive` は、指定された値がプリミティブ（`null`、`undefined`、`boolean`、`number`、`string`、`bigint`、`symbol`）かどうかを判定します。

### ユースケース

実行時に入力（例: API ペイロードのフィールド、設定値、ユーザー提供データ）を検証し、シリアライズ、ログ出力、またはプリミティブ専用の操作を適用する前に、その値がプリミティブであることを確認します。

> **TypeScript 利用者向けのヒント:**
>
> `isPrimitive` を使って、`unknown` の入力をオブジェクトや関数として扱う前にガードしてください。プリミティブには `true`
> を返し、オブジェクトと関数には `false` を返します。

### 利点

- 値が JavaScript のプリミティブかどうかを高速かつ割り当てなしでチェックできます。
- `null` をプリミティブとして正しく扱います（`typeof null` が `"object"` であるにもかかわらず）。
- オブジェクト専用の操作を行う前に、`unknown` の値を絞り込むのに役立ちます。

## 使用方法

### 構文

関数:

- `isPrimitive(value)`

パラメータ:

- `value`: プリミティブ型かどうかをチェックする値。

### ローカル関数インポート

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isPrimitive(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:56:41 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>