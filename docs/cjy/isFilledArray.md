# isFilledArray

## 说明

检查 `value` 係唔係一个至少有一个元素个数组，并返回 `true` 或 `false`。

### 使用场景

用 `isFilledArray` 来校验传入数据（比如 API payload、表单值、配置）之后再去遍历、访问第一个元素，或者执行需要至少一个条目个逻辑。

> **给 TypeScript 用户的提示：**
>
> `isFilledArray` 係一个运行时 guard，会返回布尔值；除咗确认数组非空之外，佢唔会进一步收窄元素类型。

### 优势

- 用 `Array.isArray` 搭配长度检查，简单又快地判断非空数组。
- 帮你避免代码假设数组至少有一个元素时出现运行时错误。
- 布尔结果清楚：非空数组返回 `true`，否则返回 `false`。

## 用法

### 语法

函数：

- `isFilledArray(value)`

参数：

- `value`: 要检查个值，看佢系唔系一个非空数组。

### 本地函数导入

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input 咧运行辰光是只非空数组
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFilledArray(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>该文件于 6 February 2026 at 11:46:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>