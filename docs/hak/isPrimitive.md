# isPrimitive

## 说明

`isPrimitive` quyết-tēng yit ê giá-trị sî-m̄-sî primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### 使用场景

Chāi runtime kiểm-chhà input (chhin-chhiok API payload ê field, configuration values, á-sî yōng-chhiá ê data), khì-khìng
yit ê giá-trị sî primitive chiah chòe serialize, logging, á-sî chhài-êng primitive-chhî ê thao-chok.

> **给 TypeScript 用户的提示：**
>
> Sûng `isPrimitive` lâi guard `unknown` ê input, chhâi-chhâi chhù-lí in sî object á-sî function chhîn; i hōe trả `true`
> chòe primitives, `false` chòe objects kap functions.

### 优势

- Khiàm, bô siong fēn-pài (allocation-free) ê kiểm-cha, sîng-sîng chhâ chhit-kiân yit ê giá-trị sî JavaScript primitive
  m̄-sî.
- Chhîn-chhiok chhù-lí `null` sî primitive (chhin-chhiok `typeof null` sî `"object"`).
- Pang-chō nâi-sió `unknown` ê giá-trị, chhâi-chhâi chhài-êng chhù-lí chî-kò object-chhî ê thao-chok.

## 用法

### 语法

函数：

- `isPrimitive(value)`

参数：

- `value`: Yōng-lâi kiểm-cha sî-m̄-sî primitive type ê giá-trị.

### 本地函数导入

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isPrimitive(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>该文件于 30 January 2026 at 23:56:17 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>