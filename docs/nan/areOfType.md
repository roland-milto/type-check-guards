# areOfType

## 说明

檢查指定的 `array` 內底所有元素敢攏是指定的 `type`。

### 使用场景

用 `areOfType` 來驗證未知的輸入（例如：解析過的 JSON、API payload、使用者輸入），才來對陣列內逐个元素做型別相關的操作。

> **给 TypeScript 用户的提示：**
>
> 因為 `areOfType` 是型別守衛，TypeScript 會佇 `if (areOfType(...)) {}` 區塊內底，將陣列收窄做 `Array<DataTypeOf<T>>`。

### 优势

- 提供一個 TypeScript 型別守衛：當它回傳 `true` 時，輸入會收窄做 `Array<DataTypeOf<T>>`。
- 逐个元素用要求的執行期型別來驗證，防止混合型別的陣列通過檢查。
- 快速失敗：一旦發現有元素無符合，就立刻回傳 `false`。
- 設計上會拒絕非陣列佮空陣列（取決於 `isFilledArray`）。

## 用法

### 语法

函数：

- `areOfType(array, type)`

参数：

- `array`: 欲檢查的陣列。
- `type`: 欲對陣列內逐个元素檢查的型別。

### 本地函数导入

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values chit-má sī number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // bô sī
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOfType(array, type)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOfType](../_analysis/areOfType.md)

<br>

---

<small>该文件于 30 January 2026 at 17:10:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>