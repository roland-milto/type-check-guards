# isNumber

## 説明

`isNumber`は、値が有限で`NaN`ではない数値かどうかをチェックします。

### ユースケース

信頼できないソース（フォーム、クエリパラメータ、JSONペイロード）からの数値入力を、計算・保存・範囲チェックの前に検証し、有限の数値のみが通過（
`true`）し、それ以外はすべて`false`を返すようにします。

> **TypeScript 利用者向けのヒント:**
>
> 算術演算を行う前に`unknown`の値を検証するために`isNumber`を使用してください。`NaN`、`Infinity`、`-Infinity`は除外されます。

### 利点

- 実際のJavaScriptの数値に対してのみ`true`を返します（型チェックに加えて`NaN`と無限大を除外）。
- `NaN`、`Infinity`、または`-Infinity`が誤って数値として通ってしまう一般的なバリデーションバグを防ぎます。
- 不明な入力（例：JSON、ユーザー入力、外部API）に対するランタイムガードとして有効に機能します。
- シンプルで高速、かつ副作用がありません。

## 使用方法

### 構文

関数:

- `isNumber(value)`

パラメータ:

- `value`: チェックする値。

### ローカル関数インポート

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input は有効な有限の数値です
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.isNumber(value)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>このファイルは 30 January 2026 at 13:09:37 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>