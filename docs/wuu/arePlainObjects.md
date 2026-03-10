# arePlainObjects

## 说明

检查一个数组里向所有元素是不是普通对象，只有每个元素侪符合条件辰返回 `true`。

### 使用场景

验证外部或者无类型个数据（比方讲解析出来个 JSON、API payload、表单提交），确保收到个是一个非空数组，而且每一条侪是普通对象，然后再去遍历同读取属性。

> **给 TypeScript 用户的提示：**
>
> 用 `arePlainObjects` 来验证未知输入，再把伊当作 TypeScript 里向个 `Record<string, unknown>[]`（或者更严格个对象形状）来用。

### 优势

- 确保输入数组里向每个元素侪是普通对象，只有当所有项侪匹配辰会返回 `true`。
- 碰着无效输入（非数组或空数组）会早点拒绝，直接返回 `false`。
- 把对象字面量对象同 `Object.create(null)` 创建个对象侪当作有效个普通对象。

## 用法

### 语法

函数：

- `arePlainObjects(array)`

参数：

- `array`: 要检查个数组，用来判断里向元素是不是普通对象。

### 本地函数导入

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // 真
const b = arePlainObjects([{}, Object.create(null)]); // 真
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // 假
const d = arePlainObjects([] as unknown[]); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePlainObjects(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>该文件于 30 January 2026 at 16:56:34 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>