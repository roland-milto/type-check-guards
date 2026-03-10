# isObject

## 説明

指定された `value` が `object`（`null` を除く）かどうかを判定します。

### ユースケース

`isObject` を使用して、プロパティへアクセスする前に未知の入力（例: パースした JSON、API レスポンス、イベントペイロード）を検証し、その値が
`null` ではなくオブジェクトであることを保証します。

> **TypeScript 利用者向けのヒント:**
>
> `isObject` は boolean
> を返す実行時ガードであり、特定のオブジェクト形状へは絞り込みません。より強い型付けが必要な場合は、追加のチェック（例:
> プロパティの存在確認）と組み合わせてください。

### 利点

- `typeof` が `"object"` である非 `null` の値に対してのみ `true` を返します。
- `null` がオブジェクトとして扱われてしまう一般的な JavaScript の落とし穴を防ぎます。
- プレーンオブジェクトおよび組み込みのオブジェクトインスタンス（例: `Date`、`RegExp`）で動作します。
- 防御的プログラミングや入力検証に適した、シンプルで高速な実行時チェックです。

## 使用方法

### 構文

関数:

- `isObject(value)`

パラメータ:

- `value`: `object` であるかどうかをチェックする値。

### ローカル関数インポート

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input は実行時に null ではないオブジェクトです
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isObject(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isObject](../_analysis/isObject.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:19:01 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>