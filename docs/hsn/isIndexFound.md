# isIndexFound

## 说明

`isIndexFound` ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤੀ ਕਦਰ ਗੈਰ-ਨਕਾਰਾਤਮਕ ਪੂਰਨ ਅੰਕ ਹੈ ਜਾਂ ਨਹੀਂ, ਜਿਸ ਨਾਲ ਦਰਸਾਇਆ ਜਾਂਦਾ ਹੈ ਕਿ ਇੰਡੈਕਸ ਮਿਲ
ਗਿਆ ਹੈ।

### 使用场景

ਇਹ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਖੋਜ ਨਤੀਜਾ ਵਰਤਣਯੋਗ ਇੰਡੈਕਸ (ਪੂਰਨ ਅੰਕ `>= 0`) ਹੈ, ਐਰੇ ਜਾਂ ਸਟਰਿੰਗ ਵਿੱਚ ਇੰਡੈਕਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਤਾਂ ਜੋ ਅਣਜਾਣੇ
ਵਿੱਚ `-1` ਜਾਂ ਗੈਰ-ਅੰਕੀ ਕਦਰਾਂ ਦੀ ਵਰਤੋਂ ਤੋਂ ਬਚਿਆ ਜਾ ਸਕੇ।

> **给 TypeScript 用户的提示：**
>
> `isIndexFound` ਨੂੰ `indexOf`, `findIndex`, ਜਾਂ ਕਸਟਮ ਖੋਜਾਂ ਵਰਗੀਆਂ ਕਾਰਵਾਈਆਂ ਤੋਂ ਬਾਅਦ ਵਰਤੋ ਜਿੱਥੇ `-1` (ਜਾਂ ਹੋਰ ਅਵੈਧ
> ਕਦਰਾਂ) “ਨਹੀਂ ਮਿਲਿਆ” ਦਰਸਾ ਸਕਦੀਆਂ ਹਨ। ਜਦੋਂ ਇਹ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਕਦਰ ਇੱਕ ਨੰਬਰ ਹੁੰਦੀ ਹੈ ਅਤੇ ਐਰੇ/ਸਟ੍ਰਿੰਗ ਇੰਡੈਕਸ ਵਜੋਂ
> ਵਰਤਣ
> ਲਈ ਸੁਰੱਖਿਅਤ ਹੁੰਦੀ ਹੈ।

### 优势

- ਇੱਕ ਸੌਖਾ ਟਾਈਪ ਗਾਰਡ ਦਿੰਦਾ ਹੈ ਜੋ ਗੈਰ-ਨਕਾਰਾਤਮਕ ਪੂਰਨ ਅੰਕ ਦੀ ਜਾਂਚ ਕਰਕੇ ਪਤਾ ਲਗਾਉਂਦਾ ਹੈ ਕਿ ਇੰਡੈਕਸ ਮਿਲਿਆ ਹੈ ਜਾਂ ਨਹੀਂ।
- ਸਿਰਫ਼ ਵੈਧ ਇੰਡੈਕਸ-ਵਰਗੀਆਂ ਕਦਰਾਂ (ਪੂਰਨ ਅੰਕ `>= 0`) ਲਈ ਹੀ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ, ਨਕਾਰਾਤਮਕ, ਗੈਰ-ਪੂਰਨ ਅੰਕ ਅਤੇ ਗੈਰ-ਅੰਕ ਕਦਰਾਂ
  ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ।
- ਉਹਨਾਂ API ਨਾਲ ਕੰਮ ਕਰਦੇ ਸਮੇਂ off-by-one ਅਤੇ sentinel-value ਵਾਲੀਆਂ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਜੋ “ਨਹੀਂ ਮਿਲਿਆ” ਲਈ `-1` ਵਾਪਸ
  ਕਰਦੀਆਂ ਹਨ।

## 用法

### 语法

函数：

- `isIndexFound(value)`

参数：

- `value`: ਉਹ ਕਦਰ ਜਿਸਦੀ ਜਾਂਚ ਕਰਨੀ ਹੈ ਕਿ ਕੀ ਇਹ ਗੈਰ-ਨਕਾਰਾਤਮਕ ਪੂਰਨ ਅੰਕ ਹੈ।

### 本地函数导入

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx इहाँ नंबर है आउर >= 0 है
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// indexOf के साथ आम इस्तेमाल
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isIndexFound(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>该文件于 31 January 2026 at 00:46:14 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>