# arePlainObjects

## 说明

检查数组的所有元素是否都是普通对象，只有当每个元素都符合条件时才返回 `true`。

### 使用场景

验证外部或无类型的数据（例如解析后的 JSON、API 载荷、表单提交），以确保在迭代并读取属性之前，你收到的是一个非空数组且其中每一项都是普通对象。

> **给 TypeScript 用户的提示：**
>
> 在 TypeScript 中，在将未知输入当作 `Record<string, unknown>[]`（或更严格的对象结构）处理之前，使用 `arePlainObjects` 进行验证。

### 优势

- 确保输入数组中的每个元素都是普通对象，只有当所有项都匹配时才返回 `true`。
- 通过返回 `false` 及早拒绝无效输入（非数组或空数组）。
- 将对象字面量对象和 `Object.create(null)` 创建的对象都视为有效的普通对象。

## 用法

### 语法

函数：

- `arePlainObjects(array)`

参数：

- `array`: 要检查其元素是否为普通对象的数组。

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

<small>该文件于 2026年1月30日 16:56:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>