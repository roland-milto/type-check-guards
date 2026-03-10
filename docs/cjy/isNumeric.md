# isNumeric

## 说明

`isNumeric` 会通过把给定个 `value` 解析出类型，再同 `NUMERIC_TYPES` 对照，来判断伊是不是算数值。

### 使用场景

用 `isNumeric` 来验证输入（比如 API payload、表单值、配置）之后再做数值运算；并且按 `NUMERIC_TYPES` 个规则，一致性地接受像
`BigInt` 这种“像数值”个类型。

> **给 TypeScript 用户的提示：**
>
> `isNumeric` 是一个返回布尔值个谓词；把伊当作运行时检查，用来判断一个值是不是属于库里定义个数值类型集合。

### 优势

- `getTypeOf` 搭配 `NUMERIC_TYPES` 来集中管理数值判定逻辑，保证整个代码库里个检查都一致。
- 返回一个简单个布尔值（`true`/`false`），方便写分支判断同守卫式用法。
- 支持多种数值表示（比如 `number`、`BigInt`），具体由 `NUMERIC_TYPES` 定义。

## 用法

### 语法

函数：

- `isNumeric(value)`

参数：

- `value`: 要检查个值，看伊是不是数值类型。

### 本地函数导入

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v 按照这个库个类型规则算作数值
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

<small>该文件于 6 February 2026 at 15:52:00 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>