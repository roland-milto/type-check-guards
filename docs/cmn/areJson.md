# areJson

## 说明

检查数组的所有元素是否都是 JSON 字符串；仅当数组非空且每一项都是有效 JSON 时返回 `true`；否则返回 `false`。

### 使用场景

验证传入数据（例如来自查询参数、环境变量或外部 API），当你期望得到一个由 JSON 编码字符串组成的数组，并希望拒绝空数组或任何非
JSON 条目时使用。

> **给 TypeScript 用户的提示：**
>
> 当你需要在解析（例如使用 `JSON.parse`）之前验证某个 `unknown[]` 仅包含 JSON 字符串时，请使用 `areJson`。

### 优势

- 仅当每个元素都是有效的 JSON 字符串时才返回 `true`；否则返回 `false`。
- 快速失败：一旦发现非 JSON 元素就停止检查。
- 按设计拒绝空数组，对未填充的输入返回 `false`。

## 用法

### 语法

函数：

- `areJson(array)`

参数：

- `array`: 要检查其元素是否为 JSON 字符串的数组。

### 本地函数导入

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // 真
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // 假
const empty = areJson([]); // 假

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areJson(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areJson](../_analysis/areJson.md)

<br>

---

<small>该文件于 30 January 2026 at 16:15:22 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>