# areOneOfType

## 说明

`areOneOfType` 用来检查一个非空数组里嘅所有元素，系咪都属于指定嘅运行时类型之一。

### 使用场景

校验传入数据（例如解析后嘅 JSON）：某个字段必须系一个非空数组，而且数组项只允许系一组已知嘅基础类型；当数组为空或者包含任何唔允许嘅类型时返回
`false`。

> **给 TypeScript 用户的提示：**
>
> 呢个函数返回一个 boolean，喺编译期唔会收窄数组元素类型；建议当作运行时校验步骤，用喺后续处理之前。

### 优势

- 确保数组里每个元素都至少匹配一个允许嘅运行时类型，只有当成个数组都通过时先返回 `true`。
- 提早拒绝无效输入：当 `array` 或 `types` 为空，或者唔系一个有内容嘅数组时返回 `false`。
- 适合用一次调用 `areOneOfType` 去校验混合类型集合（例如数字同字符串）。

## 用法

### 语法

函数：

- `areOneOfType(array, types)`

参数：

- `array`: 要同提供嘅类型进行核对嘅元素数组。
- `types`: 表示要检查嘅数据类型嘅字符串数组。

### 本地函数导入

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOneOfType(array, types)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>该文件于 31 January 2026 at 23:36:17 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>