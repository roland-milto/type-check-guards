# areHexadecimals

## 说明

检查数组中的所有元素是否都是十六进制字符串，仅在非空数组且每一项都有效时返回 `true`。

### 使用场景

在执行十六进制解析或进一步处理之前，使用 `areHexadecimals` 来验证用户输入或外部数据（例如 ID、校验和、不带前导“#”的颜色代码）。

> **给 TypeScript 用户的提示：**
>
> 在解析或转换值之前（例如在 `parseInt(value, 16)` 或 BigInt 转换之前），使用 `areHexadecimals` 来验证未知输入。

### 优势

- 验证每个元素都是十六进制字符串，并且仅当所有项都匹配时才返回 `true`。
- 按设计拒绝空数组，对于缺失的输入数据返回 `false`。
- 提供简单的布尔结果（`true`/`false`），适用于守卫与提前返回的验证。

## 用法

### 语法

函数：

- `areHexadecimals(array)`

参数：

- `array`: 要检查其元素是否为十六进制字符串的数组。

### 本地函数导入

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areHexadecimals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>该文件于 2026年1月31日 23:08:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>