# isOfType

## 说明

判断给定的 `value` 是否匹配指定的类型字符串：对原始类型使用 `typeof`，对复杂类型使用回退方案。

### 使用场景

通过在执行特定类型操作之前检查某个值是否为期望的类型字符串，来验证并收窄 `unknown` 输入（例如 API 响应、用户输入、解析后的
JSON）。

> **给 TypeScript 用户的提示：**
>
> 在处理 `unknown` 值时，使用 `isOfType` 根据运行时类型进行分支；它返回 `true`/`false`，并会显式处理 `null` 与 `undefined`。

### 优势

- 通过直接使用 `typeof` 检查原始类型，速度快且清晰。
- 正确处理 `null` 和 `undefined`，这是仅靠 `typeof` 无法按预期区分的。
- 通过使用 `getTypeOf` 的回退比较，支持复杂或自定义的类型字符串。
- 返回简单的布尔结果（`true`/`false`），适用于类型守卫与分支判断。

## 用法

### 语法

函数：

- `isOfType(value, type)`

参数：

- `value`: 要针对 `type` 进行测试的值。
- `type`: 要检查匹配的类型字符串表示。

### 本地函数导入

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // 这里的 input 是一个数字
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // 这里的 input 是一个字符串
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOfType(value, type)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOfType](../_analysis/isOfType.md)

<br>

---

<small>该文件于 30 January 2026 at 16:59:03 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>