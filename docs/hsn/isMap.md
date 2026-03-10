# isMap

## 说明

दिहल गइल `value` के जांचेला कि ऊ `Map` बा कि ना; अगर बा त `true` लौटावेला आ ना त `false`।

### 使用场景

जब रउआँ के कउनो `unknown` मान मिले (जइसे JSON parsing, external APIs, भा user input से) आ `Map` ऑपरेशन करे से पहिले
पक्का करे के होखे कि ऊ `Map` बा, तब `isMap` के इस्तेमाल करीं।

> **给 TypeScript 用户的提示：**
>
> `isMap` एगो रनटाइम गार्ड बा जे मान `Map` होखे पर `true` आ ना होखे पर `false` लौटावेला; `Map` API कॉल करे से पहिले
`unknown` के नैरो करे खातिर एकरा इस्तेमाल करीं।

### 优势

- एह जल्दी रनटाइम जांच देला कि कउनो मान `Map` बा कि ना।
- `get`, `set`, आ `has` जइसन `Map` मेथड चाहीं वाला कोड-पाथ के सुरक्षा क के टाइप गलती से बचावे में मदद करेला।
- `unknown` इनपुट सभ के संभालत घरी हल्का-फुल्का वैलिडेशन स्टेप के रूप में बढ़िया काम करेला।

## 用法

### 语法

函数：

- `isMap(value)`

参数：

- `value`: जवन मान के जांचल जाला।

### 本地函数导入

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isMap(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isMap](../_analysis/isMap.md)

<br>

---

<small>该文件于 31 January 2026 at 16:04:49 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>