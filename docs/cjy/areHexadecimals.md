# areHexadecimals

## 说明

检查数组入面所有元素系咪十六进制字符串；只有喺非空数组而且每一项都有效嗰阵先返回 `true`。

### 使用场景

用 `areHexadecimals` 喺做十六进制解析或者进一步处理之前，验证用户输入或者外部数据（例如 ID、校验和、冇带前导 '#' 嘅颜色码）。

> **给 TypeScript 用户的提示：**
>
> 用 `areHexadecimals` 喺解析或者转换值之前验证未知输入（例如喺 `parseInt(value, 16)` 或者 BigInt 转换之前）。

### 优势

- 验证每一个元素都系十六进制字符串，只有当所有项目都匹配嗰阵先返回 `true`。
- 设计上会拒绝空数组；输入数据缺失嗰阵会返回 `false`。
- 提供简单嘅布尔结果（`true`/`false`），适合用作守卫同提前返回嘅验证。

## 用法

### 语法

函数：

- `areHexadecimals(array)`

参数：

- `array`: 要检查嘅数组，用来确认入面嘅元素系咪十六进制字符串。

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

<small>该文件于 31 January 2026 at 23:05:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>