# isRegEx

## 说明

判断提供个值是不是一个 `RegExp` 实例。

### 使用场景

在把用户提供个或者动态个值（比方讲：配置、API 载荷、插件输入）当作正则表达式来用之前，先做校验。

> **给 TypeScript 用户的提示：**
>
> 用 `isRegEx` 来把 `unknown`（或者联合类型）个值先收窄，再去用 RegExp 专用个属性或者方法；只有当值是 `RegExp` 个实例时，伊才会返回
`true`。

### 优势

- 提供一个简单个运行时类型守卫，用来检查一个值是不是 `RegExp`。
- 帮侬避免代码期望是正则表达式时出错（比方讲：调用 `test`、`exec`，或者读取 `source` 之前）。
- 对正则字面量同用 `new RegExp(...)` 创建个实例都适用。
- 返回清爽个布尔结果（`true`/`false`），对非正则输入勿会抛出异常。

## 用法

### 语法

函数：

- `isRegEx(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input 乃是 RegExp 㑚搭
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isRegEx(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>该文件于 30 January 2026 at 23:31:39 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>