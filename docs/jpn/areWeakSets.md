# areWeakSets

## 説明

入力が空でない配列で、かつ各要素がすべて `WeakSet` の場合にのみ `true` を返すかどうかを確認します。

### ユースケース

実行時入力（例: API、設定、またはユーザー提供データ）を検証し、`WeakSet` の挙動に依存するロジックを進める前に、`WeakSet`
インスタンスの空でないリストを確保します。

> **TypeScript 利用者向けのヒント:**
>
> `areWeakSets` を使用して、不明な入力を `WeakSet[]` として扱う前に検証します。空配列および配列でない値に対しては `false`
> を返します。

### 利点

- 入力配列内のすべての要素が `WeakSet` であることを保証します。
- 空配列に対して `false` を返し、データ欠落時に誤って「すべて有効」と判定されるのを防ぎます。
- 入力が要素で満たされた配列でない場合（`null` を含む）に `false` を返すことで、安全に失敗します。
- `WeakSet` インスタンスを必要とする操作を行う前のガードとして有用です。

## 使用方法

### 構文

関数:

- `areWeakSets(array)`

パラメータ:

- `array`: `WeakSet` オブジェクトであるかを確認する配列。

### ローカル関数インポート

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a は WeakSet インスタンスの空でない配列です
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.areWeakSets(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>このファイルは 30 January 2026 at 14:09:23 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>