# isNumeric

## 说明

`isNumeric` diye gail `value` ke numeric maana jaawe hai ki na, ee dekhe khatir uske resolved type ke `NUMERIC_TYPES` se
milaan kare hai.

### 使用场景

Numeric operations kare se pahile inputs (jaise API payloads, form values, configuration) ke validate kare khatir
`isNumeric` ke istemaal kara, aur `NUMERIC_TYPES` ke mutaabik numeric-like types (jaise `BigInt`) ke consistently accept
kara.

> **给 TypeScript 用户的提示：**
>
> `isNumeric` boolean-returning predicate hai; iske runtime check ke roop me treat kara, ki koi value library-defined
> numeric type set me aawela ki na.

### 优势

- `getTypeOf` ate `NUMERIC_TYPES` ke istemaal se numeric pahchaan ke logic ke ek jagah kendrit kare hai aur poore
  codebase me checks ke ek jaisa rakhe hai.
- Asaan branching aur guard-style istemaal khatir seedha boolean (`true`/`false`) return kare hai.
- `NUMERIC_TYPES` me jaisan define hai, waisan kai numeric representations (jaise `number`, `BigInt`) ke support kare
  hai.

## 用法

### 语法

函数：

- `isNumeric(value)`

参数：

- `value`: Numeric type khatir check kare waala value.

### 本地函数导入

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v लाइब्रेरी के टाइप नियमां के हिसाब सूं संख्यात्मक मान्या जावै सै
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

<small>该文件于 6 February 2026 at 15:52:52 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>