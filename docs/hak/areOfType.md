# areOfType

## 说明

檢查指定个 `array` 內所有元素係毋係指定个 `type`。

### 使用场景

在對陣列內每隻元素做特定類型操作之前，用 `areOfType` 來驗證未知輸入（例如：解析後个 JSON、API payload、使用者輸入）。

> **给 TypeScript 用户的提示：**
>
> 因為 `areOfType` 係一隻類型守衛，TypeScript 會在 `if (areOfType(...)) {}` 區塊內，將陣列收窄做 `Array<DataTypeOf<T>>`。

### 优势

- 提供 TypeScript 類型守衛：當佢回傳 `true` 時，輸入會收窄做 `Array<DataTypeOf<T>>`。
- 逐個元素用要求个 runtime 類型來驗證，防止混合類型个陣列通過。
- 快速失敗：一旦發現有元素毋符合，就即刻回傳 `false`。
- 按設計會拒絕非陣列同空陣列（取決於 `isFilledArray`）。

## 用法

### 语法

函数：

- `areOfType(array, type)`

参数：

- `array`: 愛檢查个陣列。
- `type`: 用來同陣列內每隻元素比對个類型。

### 本地函数导入

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values 這下係 number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

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

<small>该文件于 30 January 2026 at 17:09:34 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>