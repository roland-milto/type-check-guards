# isPrimitive

## 说明

`isPrimitive` phán-toān chi̍t ê chhi̍t sī m̄-sī primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### 使用场景

Tī runtime kiám-giām input (chhin-chhiūⁿ API payload ê fields, configuration values, á-sī iōng-chiá thâu-ji̍p ê data),
hō͘ chi̍t ê chhi̍t tī serialize, logging, á-sī chò primitive-chiah ē-sái ê thao-chok chêng, khak-tēng i sī primitive.

> **给 TypeScript 用户的提示：**
>
> Iōng `isPrimitive` lâi chò `unknown` input ê guard, chiah thang kā in當做 objects á-sī functions lâi thao-chok; i ē
> hō͘ primitives trả `true`, hō͘ objects kap functions trả `false`.

### 优势

- Kín, bôe chhùi-kiat (allocation-free) ê kiám-cha, lâi khòaⁿ chi̍t ê chhi̍t (value) sī m̄-sī JavaScript ê primitive.
- Tùi `null` chòe-tit sī primitive (sui-jiân `typeof null` sī `"object"`).
- Pang-chān tī chò object chiah ē-sái ê thao-chok chêng, siong-seng (narrow) `unknown` ê chhi̍t.

## 用法

### 语法

函数：

- `isPrimitive(value)`

参数：

- `value`: Beh kiám-cha sī m̄-sī primitive type ê chhi̍t.

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

<small>该文件于 30 January 2026 at 23:57:06 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>