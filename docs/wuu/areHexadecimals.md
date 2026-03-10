# areHexadecimals

## 说明

检查数组里向所有元素是不是十六进制字符串；只有对非空数组、并且每一项都有效个情况下才返回 `true`。

### 使用场景

用 `areHexadecimals` 来验证用户输入或者外部数据（比如 ID、校验和、没带前导 '#' 个颜色码），再去做十六进制解析或者后续处理。

> **给 TypeScript 用户的提示：**
>
> 用 `areHexadecimals` 来先验证未知输入，再去解析或者转换值（比方讲，在 `parseInt(value, 16)` 或者 BigInt 转换之前）。

### 优势

- 验证数组里每个元素都是十六进制字符串，只有当所有项都匹配辰会返回 `true`。
- 按设计会拒绝空数组，输入数据缺失时返回 `false`。
- 提供简单个布尔结果（`true`/`false`），适合用来做守卫同早返回验证。

## 用法

### 语法

函数：

- `areHexadecimals(array)`

参数：

- `array`: 要检查个数组，用来确认里向个元素是不是十六进制字符串。

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

<small>该文件于 31 January 2026 at 23:08:32 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>