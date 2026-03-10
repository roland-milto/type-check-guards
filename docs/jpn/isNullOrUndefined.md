# isNullOrUndefined

## 説明

指定された値が `null` または `undefined` かどうかをチェックします。

### ユースケース

任意入力のバリデーション、APIペイロードの正規化、または欠損している可能性のある値を参照（デリファレンス）する前のコードパスのガードなど、
`null` と `undefined` の両方を「値がない」として扱う必要がある場合に `isNullOrUndefined` を使用します。

> **TypeScript 利用者向けのヒント:**
>
> `isNullOrUndefined` を使って、プロパティへアクセスしたりメソッドを呼び出したりする前に欠損値をガードしてください。`null`
> と `undefined` の場合にのみ `true` を返します。

### 利点

- `null` と `undefined` を1か所で検出するための明確で再利用可能なガードを提供します。
- 条件分岐やバリデーションで組み合わせやすい、シンプルなブール値（`true`/`false`）を返します。
- プロパティへアクセスしたりメソッドを呼び出したりする前に欠損値をチェックすることで、よくある実行時エラーを回避するのに役立ちます。

## 使用方法

### 構文

関数:

- `isNullOrUndefined(value)`

パラメータ:

- `value`: `null` または `undefined` かどうかをチェックする値。

### ローカル関数インポート

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // 欠損値を処理する
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isNullOrUndefined(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>このファイルは 31 January 2026 at 00:34:13 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>