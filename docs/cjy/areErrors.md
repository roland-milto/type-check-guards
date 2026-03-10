# areErrors

## 说明

检查一个数组是否非空并且只包含 `Error` 对象，返回 `true` 或 `false`。

### 使用场景

喺遍历、记录日志或者重新抛出之前，验证运行时提供的 `unknown[]`（比如汇总失败、校验结果、或者反序列化数据）系一个非空的 `Error`
对象列表。

> **给 TypeScript 用户的提示：**
>
> `areErrors` 只有喺数组有内容并且每一项都系 `Error` 时先返回 `true`；如果系空数组，或者有任何元素唔系 `Error`，就返回
`false`。

### 优势

- 确保每个元素都是一个 `Error` 实例，方便安全地处理错误同记录。
- 拒绝空数组，防止误把“冇错误”状态当作有效的错误列表。
- 处理 `unknown[]` 输入（比如来自 API 或 `catch` 代码块）时，作为运行时守卫特别好用。

## 用法

### 语法

函数：

- `areErrors(array)`

参数：

- `array`: 要检查是否包含 `Error` 对象的数组。

### 本地函数导入

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value 係一個非空嘅 Error 對象陣列
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areErrors(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areErrors](../_analysis/areErrors.md)

<br>

---

<small>该文件于 6 February 2026 at 12:33:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>