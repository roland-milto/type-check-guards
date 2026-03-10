# isString

## 说明

`isString` ایہ طے کردا اے کہ دِتّی گئی ویلیو سٹرنگ اے یا نئیں۔

### 使用场景

رن ٹائم تے یوزر اِن پُٹ، API پے لوڈ فیلڈز، یا کنفیگریشن ویلیوز نوں ویلیڈیٹ کرو تاں جو ایہ یقینی بنے کہ ویلیو سٹرنگ اے،
سٹرنگ آپریشنز (مثلاً trimming، splitting، case conversion) لاگو کرن توں پہلاں۔

> **给 TypeScript 用户的提示：**
>
> `isString` نوں `unknown` یا ڈھیلی ٹائپ والی ویلیوز نوں ویلیڈیٹ کرن لئی استعمال کرو، سٹرنگ میتھڈز کال کرن توں پہلاں؛
> ایہ صرف اوہدوں `true` واپس کردا اے جدوں `typeof value === "string"` ہووے۔

### 优势

- `typeof` دا استعمال نال سادہ تے تیز چیک۔
- اک پیشگوئی جوگ بولین نتیجہ واپس کردا اے: سٹرنگ لئی `true`، نئیں تے `false`۔
- خالی تے غیر خالی دونوں سٹرنگاں لئی کم کردا اے۔
- سٹرنگ-خاص آپریشن کرن توں پہلاں ہلکا پھلکا رن ٹائم گارڈ وِج مفید اے۔

## 用法

### 语法

函数：

- `isString(value)`

参数：

- `value`: اوہ ویلیو جیہڑی نوں سٹرنگ ٹائپ لئی ٹیسٹ کرنا اے۔

### 本地函数导入

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input इहाँ स्ट्रिंग अछि
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isString(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isString](../_analysis/isString.md)

<br>

---

<small>该文件于 30 January 2026 at 13:14:18 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>