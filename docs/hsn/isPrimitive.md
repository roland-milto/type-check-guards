# isPrimitive

## 说明

`isPrimitive` nakki kare chhe ke aapelu value primitive chhe ke nai (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### 使用场景

Runtime par inputs validate karo (jem ke API payload fields, configuration values, ke user-provided data) etle
serializing, logging, ke primitive-only operations apply karva pehla value primitive chhe ke nai eni khatri thay.

> **给 TypeScript 用户的提示：**
>
> `unknown` inputs ne objects ke functions tarike treat karva pehla guard karva mate `isPrimitive` vapro; aa primitives
> mate `true` ane objects ane functions mate `false` return kare chhe.

### 优势

- Tez, allocation-free check chhe ke koi value JavaScript primitive chhe ke nai.
- `null` ne primitive tarike sacho rite treat kare chhe (bhale `typeof null` `"object"` hoy).
- Object-only operations karva pehla `unknown` values ne narrow karva ma madad kare chhe.

## 用法

### 语法

函数：

- `isPrimitive(value)`

参数：

- `value`: Primitive type mate check karva nu value.

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

<small>该文件于 30 January 2026 at 23:56:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>