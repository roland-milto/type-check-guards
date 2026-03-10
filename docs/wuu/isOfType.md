# isOfType

## 说明

判断给定个 `value` 是否匹配指定个类型字符串：基本类型用 `typeof`，复杂类型用兜底逻辑来判断。

### 使用场景

通过检查一个值是不是预期个类型字符串，来验证并收窄 `unknown` 输入（比方讲 API 响应、用户输入、解析出来个 JSON），再去做对应类型个操作。

> **给 TypeScript 用户的提示：**
>
> 处理 `unknown` 值个辰光，用 `isOfType` 来按运行时类型做分支；伊会返回 `true`/`false`，并且会明确处理 `null` 跟
`undefined`。

### 优势

- 用直接个 `typeof` 来检查基本类型，速度快也清爽明了。
- 能正确处理 `null` 跟 `undefined`，光靠 `typeof` 没法按预期区分。
- 支持复杂或自定义个类型字符串：会用 `getTypeOf` 做兜底比较。
- 返回简单个布尔结果（`true`/`false`），适合做类型守卫跟分支判断。

## 用法

### 语法

函数：

- `isOfType(value, type)`

参数：

- `value`: 要拿来同 `type` 对照测试个值。
- `type`: 要检查对照个类型字符串表示。

### 本地函数导入

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input 迭个辰光是个数字
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input 迭个辰光是个字符串
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

<small>该文件于 30 January 2026 at 17:07:25 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>