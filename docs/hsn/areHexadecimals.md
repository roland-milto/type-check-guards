# areHexadecimals

## 说明

जाँचेला कि एरे में सभे एलिमेंट हेक्साडेसिमल स्ट्रिंग बा कि ना, आ `true` तभिए लौटावेला जब एरे खाली ना होखे आ हर आइटम वैध
होखे।

### 使用场景

`areHexadecimals` के इस्तेमाल यूजर इनपुट भा बाहरी डेटा (जइसे, IDs, checksums, लीडिंग '#' बिना color codes) के वैलिडेट
करे खातिर करीं, हेक्साडेसिमल पार्सिंग भा आगे के प्रोसेसिंग करे से पहिले।

> **给 TypeScript 用户的提示：**
>
> `areHexadecimals` के इस्तेमाल अज्ञात इनपुट के पार्स भा कन्वर्ट करे से पहिले वैलिडेट करे खातिर करीं (जइसे,
`parseInt(value, 16)` से पहिले भा BigInt कन्वर्जन से पहिले)।

### 优势

- हर एलिमेंट के हेक्साडेसिमल स्ट्रिंग होए के जाँच करेला आ `true` तभिए लौटावेला जब सभे आइटम मैच करेला।
- डिज़ाइन से खाली एरे के रिजेक्ट करेला, इनपुट डेटा ना होए पर `false` लौटावेला।
- गार्ड आ जल्दी-रिटर्न वैलिडेशन खातिर उपयुक्त सादा बूलियन रिजल्ट (`true`/`false`) देला।

## 用法

### 语法

函数：

- `areHexadecimals(array)`

参数：

- `array`: हेक्साडेसिमल स्ट्रिंग एलिमेंट खातिर जाँच करे वाला एरे।

### 本地函数导入

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areHexadecimals(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>该文件于 31 January 2026 at 23:06:29 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>