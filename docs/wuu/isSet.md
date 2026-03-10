# isSet

## 说明

判断给定个值是不是 `Set`。

### 使用场景

校验来自外部来源个输入（比如 JSON 解析、用户输入、或者第三方 API），确保一个值是 `Set` 之后再做 `Set` 操作。

> **给 TypeScript 用户的提示：**
>
> 用 `isSet` 来收窄 `unknown` 值，再去调用 `Set` 专用个 API，比方讲 `.add`、`.has` 或者 `.size`。

### 优势

- 提供一个简单个运行时检查，用来确认一个值是不是 `Set`。
- 帮侬通过早点分支处理，避免当值勿是 `Set` 个辰光出现类型错误。
- 对任何 `Set` 内容（空个或者有内容个）都适用，并且稳定返回 `true`/`false`。

## 用法

### 语法

函数：

- `isSet(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a tshe Set, tshe shiji shang
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

<small>该文件于 30 January 2026 at 23:11:49 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>