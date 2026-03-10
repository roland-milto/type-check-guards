# isOfType

## 说明

ایہ طے کردا اے کہ دِتّی گئی `value` کسی مخصوص ٹائپ سٹرنگ نال میل کھاندی اے یا نہیں، پرِمِٹیوز لئی `typeof` تے پیچیدہ
ٹائپس لئی فالبیک استعمال کردا اے۔

### 使用场景

`unknown` اِن پُٹس (مثلاً API ریسپانسز، یوزر اِن پُٹ، پارس کیتا JSON) نوں ویلیڈیٹ تے نیرَو کرن لئی، ٹائپ-خاص آپریشنز کرن
توں پہلاں ایہ چیک کر کے کہ ویلیو متوقع ٹائپ سٹرنگ دی اے یا نہیں۔

> **给 TypeScript 用户的提示：**
>
> `unknown` ویلیوز نال کم کردیاں رن ٹائم ٹائپس اُتے برانچ کرن لئی `isOfType` استعمال کرو؛ ایہ `true`/`false` واپس کردا
> اے تے `null` تے `undefined` نوں خاص طور تے ہینڈل کردا اے۔

### 优势

- سیدھا `typeof` نال پرِمِٹیوز دی جانچ کردا اے، رفتار تے وضاحت لئی۔
- `null` تے `undefined` نوں ٹھیک طرح سنبھالدا اے، جیہڑا صرف `typeof` نال مطلوبہ طرح وکھرا نہیں ہوندا۔
- `getTypeOf` دی مدد نال فالبیک موازنہ کرکے پیچیدہ یا کسٹم ٹائپ سٹرنگز نوں وی سپورٹ کردا اے۔
- سادہ بولین نتیجہ (`true`/`false`) واپس کردا اے، جیہڑا گارڈز تے برانچنگ لئی مناسب اے۔

## 用法

### 语法

函数：

- `isOfType(value, type)`

参数：

- `value`: `type` دے خلاف ٹیسٹ کرن لئی ویلیو۔
- `type`: چیک کرن لئی ٹائپ دی سٹرنگ نمائندگی۔

### 本地函数导入

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input इहाँ number अछि
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input इहाँ string अछि
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isOfType(value, type)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isOfType](../_analysis/isOfType.md)

<br>

---

<small>该文件于 30 January 2026 at 17:00:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>