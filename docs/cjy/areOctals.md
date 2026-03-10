# areOctals

## 说明

`areOctals` 用来判断提供个值系唔系一个由有效八进制字符串组成个非空数组。

### 使用场景

当你要验证用户输入、配置值或者 API 载荷，要求必须包含八进制字面量（比如文件权限模式 `0o755`）时用 `areOctals`
；你想拒绝空数组或者任何无效项，就让它返回 `false`。

> **给 TypeScript 用户的提示：**
>
> 用 `areOctals` 来确保你拿到个系一个非空个 `unknown[]`，并且每一项都系有效个八进制字符串，然后再去转换（比如用
`Number(...)` 或者自定义解析）。

### 优势

- 验证一个值系一个非空数组，并且数组里每个元素都系八进制字符串；只有当所有项都通过时才返回 `true`。
- 快速失败：一旦发现有非八进制元素，就立刻返回 `false`。
- 喺解析或转换八进制字符串之前当作守卫用，避免运行时错误同输入处理唔一致。

## 用法

### 语法

函数：

- `areOctals(array)`

参数：

- `array`: 要检查个值。

### 本地函数导入

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value 係一個非空个八进制字符串数组
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOctals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOctals](../_analysis/areOctals.md)

<br>

---

<small>该文件于 30 January 2026 at 14:44:23 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>