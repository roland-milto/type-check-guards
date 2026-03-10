# isOfType

## 说明

判断指定个 `value` 是勿是符合某个类型字符串：基本类型用 `typeof`，复杂类型用后备逻辑处理。

### 使用场景

通过检查一个值是勿是预期个类型字符串，来验证并收窄 `unknown` 输入（比如 API 返回、用户输入、解析出来个 JSON），再去做对应类型个操作。

> **给 TypeScript 用户的提示：**
>
> 处理 `unknown` 值个辰光，可以用 `isOfType` 来按运行时类型做分支；伊返回 `true`/`false`，并且会明明白白处理 `null` 跟
`undefined`。

### 优势

- 用直接个 `typeof` 来检查基本类型，快又清爽。
- 能正确处理 `null` 跟 `undefined`，单用 `typeof` 分勿清个情况。
- 支持复杂或者自定义个类型字符串：用 `getTypeOf` 做后备比较。
- 返回简单个布尔结果（`true`/`false`），适合做类型守卫跟分支判断。

## 用法

### 语法

函数：

- `isOfType(value, type)`

参数：

- `value`: 要拿来跟 `type` 对照测试个值。
- `type`: 要检查对照个类型字符串表示。

### 本地函数导入

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // 这块 input 是个数
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // 这块 input 是个字符串
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

<small>该文件于 30 January 2026 at 16:58:58 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>