# isFloat

## 说明

`isFloat` एह तय करदा ऐ कि दित्ती गई `value` finite floating-point number ऐ (इक `number` जेहड़ा integer न होवे)।

### 使用场景

User वलों दित्ते numeric input नूं validate करो जिथे fractional values लाज़मी होण (जिवें prices, measurements, rates) ते
integers, `NaN`, ते infinities नूं रद्द करो।

> **给 TypeScript 用户的提示：**
>
> `isFloat` ओह्दो वक़्त इस्तेमाल करो जदों तुहानूं सिरिफ finite, non-integer numeric inputs कबूल करने होण; एह integers ते
> non-finite numbers नूं रद्द करदा ऐ।

### 优势

- `true` सिरिफ ओह्दो वक़्त लौटांदा ऐ जदों नंबर finite ते non-integer होवे (integers, `NaN`, `Infinity`, ते `-Infinity`
  नूं बाहर रखदा ऐ)।
- किसे वी input type (`unknown`) नाल कम करदा ऐ ते `typeof value === "number"` चेक करके सुरक्षित तरीके नाल narrow करदा ऐ।
- पक्के व्यवहार लेई built-in numeric guards (`Number.isInteger`, `Number.isFinite`) इस्तेमाल करदा ऐ।

## 用法

### 语法

函数：

- `isFloat(value)`

参数：

- `value`: ओह value जिह्नूं चेक करना ऐ कि की एह floating-point number ऐ।

### 本地函数导入

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value runtime par number aahe; yo finite aahe aur integer naahi aahe
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFloat(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFloat](../_analysis/isFloat.md)

<br>

---

<small>该文件于 30 January 2026 at 16:08:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>