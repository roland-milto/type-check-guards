# areOfType

## 说明

Check kare hai ki diye gail `array` ke sab element specified `type` ke hai ki nai.

### 使用场景

Unknown input (jaise parsed JSON, API payloads, user input) ke validate kare khatir `areOfType` ke use kara, taaki array
ke har element pe type-specific operations kare se pahile sure hoe jaa.

> **给 TypeScript 用户的提示：**
>
> `areOfType` type guard hai, isliye TypeScript `if (areOfType(...)) {}` block ke bhitar array ke `Array<DataTypeOf<T>>`
> me narrow kar de hai.

### 优势

- TypeScript type guard pradaan kare hai: jab ii `true` return kare hai, input `Array<DataTypeOf<T>>` me narrow ho jaa
  hai.
- Array ke har element ke maangal runtime type ke against validate kare hai, mixed-type arrays ke pass hoe se roke hai.
- Jaldi fail kare hai: jaise hi koi non-matching element mile hai, turant `false` return kare hai.
- Design se non-arrays aur empty arrays ke reject kare hai ( `isFilledArray` pe depend kare hai ).

## 用法

### 语法

函数：

- `areOfType(array, type)`

参数：

- `array`: Check kare khatir array.
- `type`: Array me har element ke against check kare khatir type.

### 本地函数导入

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // ab values ab number[] baa
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // jhooth

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areOfType(array, type)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areOfType](../_analysis/areOfType.md)

<br>

---

<small>该文件于 30 January 2026 at 17:09:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>