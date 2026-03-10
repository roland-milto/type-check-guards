# areBuffers

## 说明

`areBuffers` जाँचेला कि दिहल मान गैर-खाली, भरल ऐरे बा कि ना जहाँ हर तत्व `Buffer` बा, अइसन होखे पर `true` आ ना त `false`
लौटावेला।

### 使用场景

आवे वाला chunk ऐरे (जइसे streams, file uploads, भा network packets से) के वैलिडेट करीं ताकि concatenating, decoding, भा
cryptographic/बाइनरी-प्रोसेसिंग फंक्शन में पास करे से पहिले सब हिस्सा `Buffer` इंस्टेंस होखे।

> **给 TypeScript 用户的提示：**
>
> `areBuffers` के इस्तेमाल `unknown[]` के वैलिडेट करे खातिर करीं, Buffer-विशेष API जइसे `Buffer.concat` कॉल करे से
> पहिले, ताकि फंक्शन खाली तबे `true` लौटावे जब हर तत्व `Buffer` होखे।

### 优势

- इनपुट में हर तत्व Node.js `Buffer` इंस्टेंस होए के पक्का करेला, आ खाली तबे `true` लौटावेला जब पूरा ऐरे मेल खाला।
- अमान्य इनपुट के जल्दी अस्वीकार करेला काहेकि गैर-खाली, भरल ऐरे के जरूरत पड़ेला; खाली ऐरे भा ऐरे ना होखे पर `false`
  लौटावेला।
- बफर-खाली ऑपरेशन करे से पहिले गार्ड के रूप में उपयोगी (जइसे concatenation, hashing, binary protocols)।

## 用法

### 语法

函数：

- `areBuffers(array)`

参数：

- `array`: बफर इंस्टेंस खातिर जाँच करे वाला ऐरे।

### 本地函数导入

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBuffers(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>该文件于 31 January 2026 at 16:25:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>