# arePlainObjects

## 説明

配列のすべての要素がプレーンオブジェクトかどうかを確認し、すべての要素が条件を満たす場合にのみ `true` を返します。

### ユースケース

外部または型付けされていないデータ（例: パースされた JSON、API
ペイロード、フォーム送信）を検証し、反復処理してプロパティを読み取る前に、受け取ったものが空ではない配列であり、各エントリがプレーンオブジェクトであることを確認します。

> **TypeScript 利用者向けのヒント:**
>
> TypeScript で未知の入力を `Record<string, unknown>[]`（またはより厳密なオブジェクト形状）として扱う前に、
`arePlainObjects` を使用して検証します。

### 利点

- 入力配列内のすべての要素がプレーンオブジェクトであることを保証し、全項目が一致する場合にのみ `true` を返します。
- 無効な入力（配列ではない、または空配列）を `false` を返すことで早期に拒否します。
- オブジェクトリテラルのオブジェクトと `Object.create(null)` で作成されたオブジェクトの両方を、有効なプレーンオブジェクトとして扱います。

## 使用方法

### 構文

関数:

- `arePlainObjects(array)`

パラメータ:

- `array`: プレーンオブジェクト要素であるかを確認する配列。

### ローカル関数インポート

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // 真
const b = arePlainObjects([{}, Object.create(null)]); // 真
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // 偽
const d = arePlainObjects([] as unknown[]); // 偽
```

### グローバルオブジェクトインポート

関数をグローバルなオブジェクトメソッドとしてインポートするには、次を使用してください:

```ts
import "@type-check/guards/register-global-object.mjs";
```

次のメソッドがグローバルに利用可能になります:

- `Type.arePlainObjects(array)`

## 関数解析

関数にさまざまなパラメータを入力した場合に生成される出力の表形式の解析が、ここに記録されています: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>このファイルは 30 January 2026 at 16:25:47 (UTC) に *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** を使用して *
*[Roland Milto](https://roland-milto.de/)** により生成されました。</small>