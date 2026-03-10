# isSet

## 说明

判断给定值是否为 `Set`。

### 使用场景

验证来自外部来源（例如 JSON 解析、用户输入或第三方 API）的输入，确保在执行 `Set` 操作之前该值是一个 `Set`。

> **给 TypeScript 用户的提示：**
>
> 在调用 `.add`、`.has` 或 `.size` 等 `Set` 专用 API 之前，使用 `isSet` 来缩小 `unknown` 值的类型范围。

### 优势

- 提供一个简单的运行时检查，用于确认某个值是否为 `Set`。
- 当值不是 `Set` 时，通过及早分支处理来帮助防止类型错误。
- 适用于任何 `Set` 内容（空或已填充），并始终一致地返回 `true`/`false`。

## 用法

### 语法

函数：

- `isSet(value)`

参数：

- `value`: 要检查的值。

### 本地函数导入

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a 在运行时是一个 Set
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isSet(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isSet](../_analysis/isSet.md)

<br>

---

<small>该文件于 2026年1月30日 23:11:54 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>