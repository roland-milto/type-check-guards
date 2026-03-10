# isNumeric

## 说明

`isNumeric` 通过把给定个 `value` 解析出类型，再拿去跟 `NUMERIC_TYPES` 对照，来判断伊算勿算数值。

### 使用场景

用 `isNumeric` 来验证输入（比如 API payload、表单值、配置）再去做数值运算；并且根据 `NUMERIC_TYPES` 一致性格接受像 `BigInt`
这种“像数值”个类型。

> **给 TypeScript 用户的提示：**
>
> `isNumeric` 是个返回布尔值个谓词；把伊当作运行时检查，用来判断一个值是不是属于库里定义个数值类型集合。

### 优势

- 用 `getTypeOf` 搭配 `NUMERIC_TYPES` 来集中管理数值侦测逻辑，保证整个代码库里个检查一致。
- 返回简单个布尔值（`true`/`false`），方便做分支判断跟守卫式用法。
- 支持多种数值表示（比如 `number`、`BigInt`），具体由 `NUMERIC_TYPES` 定义。

## 用法

### 语法

函数：

- `isNumeric(value)`

参数：

- `value`: 要检查是不是数值类型个值。

### 本地函数导入

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v 畀库里向类型规则当作数目
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNumeric(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>该文件于 6 February 2026 at 15:55:21 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>