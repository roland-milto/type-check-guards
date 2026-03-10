# isDate

## 说明

`isDate` तय करै सै कि दित्ती गई value `Date` सै कि नांई; `Date` instances खातर `true` अर बाकी हालातां मं `false` लौटावै
सै।

### 使用场景

Unknown values (जैसे request data, config values, या parsed JSON) नै validate अर narrow करो, फेर `Date` operations जैसे
formatting, comparisons, या `toISOString()` कॉल करन तै पैहले।

> **给 TypeScript 用户的提示：**
>
> Runtime पै `unknown` नै `Date` मं narrow करन खातर `isDate` इस्तेमाल करो; ई सिर्फ असली `Date` instances खातर `true`
> लौटावै सै (date strings खातर नांई)।

### 优势

- `Date` है कि नांई, ई जांचण खातर इक सादा runtime guard देवे सै।
- सिर्फ `Date` instances नै validation पास होण देके type errors तै बचाव करै सै।
- अनजाण inputs (जैसे API payloads) नै date-specific methods इस्तेमाल करन तै पैहले validate करन खातर काम का सै।

## 用法

### 语法

函数：

- `isDate(value)`

参数：

- `value`: `Date` type खातर जांच्या जाण आला value।

### 本地函数导入

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input इहाँ Date हइ
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isDate(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isDate](../_analysis/isDate.md)

<br>

---

<small>该文件于 31 January 2026 at 15:37:37 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>