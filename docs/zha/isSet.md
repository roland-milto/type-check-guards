# isSet

## 说明

判断一个给定嘅值系咪 `Set`。

### 使用场景

验证来自外部来源嘅输入（例如 JSON 解析、用户输入或者第三方 API），确保一个值系 `Set` 之后先进行 `Set` 操作。

> **以下为 TypeScript 用法：**
>
> 用 `isSet` 喺调用 `.add`、`.has`、`.size` 呢啲 `Set` 专用 API 之前，先将 `unknown` 值收窄。

### 优点

- 提供简单嘅运行时检查，用嚟确认一个值系咪 `Set`。
- 当一个值唔系 `Set` 时，可以提早分支处理，从而帮助避免类型错误。
- 适用于任何 `Set` 内容（空嘅或者有数据嘅），并且一致噉返回 `true`/`false`。

## 用法

### 语法

函数：

- `isSet(value)`

参数：

- `value`: 要检查嘅值。

### 本地函数导入

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a laeuj Set haenh daengz raeuz
  console.log(a.size);
}

console.log(isSet(b)); // mbouj
```

### 全局对象导入

要把函数当作全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

然后以下方法会在全局可用：

- `Type.isSet(value)`

## 函数分析

关于向函数传入不同参数后产生输出的表格分析，已在此处记录： [isSet](../_analysis/isSet.md)

<br>

---

<small>此文件于 30 January 2026 at 23:11:52 (UTC) 由 **[Roland Milto](https://roland-milto.de/)** 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 生成。</small>