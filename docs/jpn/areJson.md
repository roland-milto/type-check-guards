# areJson

## 説明

配列のすべての要素が JSON 文字列であるかを確認し、配列に要素が入っていて各項目がすべて有効な JSON の場合にのみ `true`
を返し、それ以外は `false` を返します。

### ユースケース

JSON エンコードされた文字列の配列を想定している受信データ（例: クエリパラメータ、環境変数、外部 API）を検証し、空配列や JSON
ではないエントリを含む場合に拒否したいときに使用します。

> **TypeScript 利用者向けのヒント:**
>
> `areJson` は、`unknown[]` がパース前（例: `JSON.parse`）に JSON 文字列のみを含むことを検証する必要がある場合に使用します。

### 利点

- すべての要素が有効な JSON 文字列である場合にのみ `true` を返し、それ以外は `false` を返します。
- フェイルファスト: 非 JSON の要素が見つかった時点でチェックを停止します。
- 設計上、空配列は拒否し、要素が入っていない入力に対して `false` を返します。

## 使用方法

### 構文

関数:

- `areJson(array)`

パラメータ:

- `array`: JSON 文字列要素であるかをチェックする対象の配列。

### ローカル関数インポート

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // 真
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // 偽
const empty = areJson([]); // 偽

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areJson(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areJson](../_analysis/areJson.md)

<br>

---

<small>このファイルは 30 January 2026 at 16:16:23 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>