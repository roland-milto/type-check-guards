# areJson

## 说明

检查一个数组里向所有元素是不是 JSON 字符串：只有数组有内容而且每一项都是有效 JSON 才返回 `true`；否则返回 `false`。

### 使用场景

验证进来个数据（比方讲来自 query params、environment variables 或者外部 APIs），侬预期是一个装了 JSON
编码字符串个数组，并且想要拒绝空数组或者任何非 JSON 个条目。

> **给 TypeScript 用户的提示：**
>
> 当侬需要先验证一个 `unknown[]` 里向只包含 JSON 字符串，再去解析（比方讲用 `JSON.parse`）个辰光，用 `areJson`。

### 优势

- 只有当每个元素都是有效个 JSON 字符串辰光才会返回 `true`；否则返回 `false`。
- 快速失败：一旦寻着非 JSON 个元素就立刻停止检查。
- 按设计拒绝空数组，对没填内容个输入返回 `false`。

## 用法

### 语法

函数：

- `areJson(array)`

参数：

- `array`: 要检查个数组，用来判断里向元素是不是 JSON 字符串。

### 本地函数导入

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // 对
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // 勿对
const empty = areJson([]); // 勿对

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

<small>该文件于 30 January 2026 at 16:18:13 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>