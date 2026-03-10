# isTrue

## 说明

`isTrue` 判断给定个值是不是严格等于 `true`。

### 使用场景

用 `isTrue` 来验证标志位、功能开关、或者配置值：只允许字面量 `true` 通过，其他一概当作 `false` 处理。

> **给 TypeScript 用户的提示：**
>
> 当侬只想接受布尔字面量 `true`，而弗是一般个真值（truthy）值个辰光，用 `isTrue`。

### 优势

- 对布尔字面量 `true` 提供严格检查（弗做类型强制转换）。
- 帮侬区分 `true` 跟像 `1`、`"true"`、或者 `{}` 这种真值（truthy）值。
- 行为简单、可预测，适合用来做守卫同验证流水线。

## 用法

### 语法

函数：

- `isTrue(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // 对
const b = isTrue(1);         // 勿对
const c = isTrue("true");   // 勿对

if (isTrue(a)) {
  // 迭搭里 a 是对个
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isTrue(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isTrue](../_analysis/isTrue.md)

<br>

---

<small>该文件于 30 January 2026 at 13:46:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>