# isNaN

## 说明

दिहल गइल `value` `number` टाइप के `NaN` बा कि नाहीं, स्ट्रिंग के बदले बिना तय करेला।

### 使用场景

अविश्वसनीय भा ढीला टाइप वाला इनपुट (जइसे API payloads, form values, parsed JSON) के वैधता जाँच में खास `NaN` मान के
पहचान के साफ-साफ संभाले खातिर, आ गैर-संख्या इनपुट के `NaN` ना मानते।

> **给 TypeScript 用户的提示：**
>
> `isNaN` तब इस्तेमाल करीं जब रउआ के खास संख्यात्मक मान `NaN` के पहचानल जरूरी होखे आ साथे ई पक्का करे के होखे कि इनपुट
> सचमुच `number` बा (स्ट्रिंग-से-नंबर रूपांतरण ना होखे)।

### 优势

- बिना गैर-संख्या (जइसे स्ट्रिंग) के संख्या में बदले, मान `NaN` है कि नाहीं—इ जाँचेला।
- `true` खाली ओही मान खातिर देला जे `number` टाइप के भी होखे आ `NaN` भी होखे।
- `unknown` इनपुट खातिर सुरक्षित बा आ अप्रत्यक्ष रूपांतरण से होखे वाला गलत-सकारात्मक नतीजा से बचे ला।

## 用法

### 语法

函数：

- `isNaN(value)`

参数：

- `value`: जाँच करे खातिर मान कि ई `number` टाइप के `NaN` बा कि नाहीं।

### 本地函数导入

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // true
console.log(isNaN(b)); // false
console.log(isNaN(c)); // false

if (isNaN(a)) {
  // a ek number hai aur khaas taur par NaN hai
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isNaN(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isNaN](../_analysis/isNaN.md)

<br>

---

<small>该文件于 30 January 2026 at 15:46:26 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>