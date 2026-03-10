# isTrue

## 说明

`isTrue` 用来判断给定个值是否严格等于 `true`。

### 使用场景

用 `isTrue` 来校验标志位、功能开关、或者配置值：只允许字面量 `true`，其他一概当作 `false`。

> **给 TypeScript 用户的提示：**
>
> 当你只想接受布尔字面量 `true`，而弗是仅仅真值个时候，用 `isTrue`。

### 优势

- 对布尔字面量 `true` 提供严格检查（无强制类型转换）。
- 帮你区分 `true` 同 `1`、`"true"`、`{}` 这类真值（truthy）。
- 行为简单、可预测，适合用作守卫同校验流水线。

## 用法

### 语法

函数：

- `isTrue(value)`

参数：

- `value`: 要检查个值。

### 本地函数导入

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // 真
const b = isTrue(1);         // 假
const c = isTrue("true");   // 假

if (isTrue(a)) {
  // a 咧块儿系真
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

<small>该文件于 30 January 2026 at 13:41:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>