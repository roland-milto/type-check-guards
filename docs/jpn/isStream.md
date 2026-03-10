# isStream

## 説明

`isStream` は、指定された値がストリームオブジェクト（Node.js のストリーム風、`ReadableStream`、または `WritableStream`
）かどうかを確認します。

### ユースケース

プレーンなオブジェクトまたはストリームのいずれかになり得る入力（例: ファイルアップロード、HTTP
ボディ、処理パイプライン）を検証し、値がストリームかどうかに基づいてロジックを分岐します。

> **TypeScript 利用者向けのヒント:**
>
> ストリームメソッドを呼び出す前に `unknown` を絞り込むために `isStream` を使用してください。これは（`pipe`/`on`
> により）Node.js のストリーム風オブジェクトを認識し、それらのグローバルが存在する場合は Web Streams（`ReadableStream`/
`WritableStream`）も認識します。

### 利点

- `pipe` と `on` 関数の有無を確認することで、一般的な Node.js のストリーム風オブジェクトを安全に検出します。
- 利用可能な場合は `ReadableStream` と `WritableStream` を認識して Web Streams もサポートします。
- ガードや分岐ロジックに適した、単純な真偽値（`true`/`false`）を返します。

## 使用方法

### 構文

関数:

- `isStream(value)`

パラメータ:

- `value`: チェック対象の値。

### ローカル関数インポート

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream はストリームのように振る舞います。一般的なストリーム API を安全に使用できます
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isStream(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isStream](../_analysis/isStream.md)

<br>

---

<small>このファイルは 30 January 2026 at 23:40:39 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>