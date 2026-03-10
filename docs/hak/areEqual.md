# areEqual

## 说明

`areEqual` 會檢查一隻陣列內个所有元素係毋係都等於指定个預期值；淨係對非空陣列、而且每一項都相符个情況下回傳 `true`。

### 使用场景

驗證一個清單淨係包含單一允許个值（比方講：全部狀態旗標都係 `true`、全部角色都係 `"admin"`、或者全部數字項目都等於指定常數），同時把空輸入當做無效（
`false`）。

> **给 TypeScript 用户的提示：**
>
> 當你需要嚴格檢查「全部項目都相等」个時節用 `areEqual`；對空陣列、還係任何毋係陣列或毋係有內容个輸入，佢會回傳 `false`。

### 优势

- 淨係當每隻元素都符合預期值个時節先會回傳 `true`；無个話就回傳 `false`。
- 會當快快失敗：一發現有毋相符个元素就停止檢查。
- 當輸入毋係一隻有內容个陣列時，會回傳 `false`，用來防止無效輸入。

## 用法

### 语法

函数：

- `areEqual(value, expected)`

参数：

- `value`: 愛檢查个陣列。
- `expected`: 用來同陣列內每一項做比較个元素。

### 本地函数导入

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areEqual(value, expected)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areEqual](../_analysis/areEqual.md)

<br>

---

<small>该文件于 31 January 2026 at 23:50:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>