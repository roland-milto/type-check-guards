# isFalse

## 说明

`isFalse` چیک کردا اے کہ دِتّی گئی قدر سختی نال بولین لِٹرل `false` دے برابر اے یا نہیں۔

### 使用场景

نامعلوم ڈیٹا (مثلاً JSON، کوئری پیرامیٹرز، یا یوزر اِن پُٹ توں) دی توثیق کرو جتھے صرف صاف بولین قدر `false` نوں ہی درست
فلیگ سمجھیا جاوے، تے ہور سب کجھ ردّ کیتا جاوے۔

> **给 TypeScript 用户的提示：**
>
> `isFalse` اوہدوں ورتو جدوں تہانوں صرف لِٹرل `false` قبول کرنا ہووے تے باقی ساریاں فالسّی قدراں ردّ کرنیاں ہوون؛ ایہ
> صرف `value === false` لئی `true` واپس کردا اے۔

### 优势

- بغیر زبردستی دے، بولین لِٹرل `false` کی سخت جانچ فراہم کردا اے۔
- `false` نوں ہور فالسّی قدراں جیویں `0`, `""`, `null`, تے `undefined` توں وکھرا کرن وچ مدد کردا اے۔
- نامعلوم اِن پُٹ دی توثیق کردیاں نیت نوں صاف ظاہر کرکے پڑھنے دی سہولت ودھاؤندا اے۔

## 用法

### 语法

函数：

- `isFalse(value)`

参数：

- `value`: او قدر جیہڑی چیک کرنی اے۔

### 本地函数导入

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // इहाँ input बिलकुल false छै
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isFalse(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isFalse](../_analysis/isFalse.md)

<br>

---

<small>该文件于 31 January 2026 at 16:21:51 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>