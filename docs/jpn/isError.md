# isError

## 説明

指定された `value` が `Error` のインスタンスかどうかをチェックします。

### ユースケース

`catch` ブロック、コールバック、外部ライブラリなどから `unknown` 値を受け取ったときに、`message`、`name`、`stack` を読む前にそれが
`Error` かどうかを安全に判定する必要がある場合は `isError` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `Error` として扱う前に、`isError` を使って（例: `catch` からの）`unknown` 値をガードしてください。

### 利点

- 値が `Error` インスタンスかどうかを実行時に簡単にチェックできます。
- `message` や `stack` などの `Error` プロパティにアクセスする前に、不明な入力を絞り込むのに役立ちます。
- `catch`、外部 API、または型付けされていないソースからの値を扱う際に、実行時例外のリスクを減らします。

## 使用方法

### 構文

関数:

- `isError(value)`

パラメータ:

- `value`: `Error` 型に対してチェックする値です。

### ローカル関数インポート

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isError(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isError](../_analysis/isError.md)

<br>

---

<small>このファイルは 6 February 2026 at 12:46:00 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>