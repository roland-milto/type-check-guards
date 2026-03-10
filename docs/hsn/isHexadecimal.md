# isHexadecimal

## 说明

`isHexadecimal` ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ ਲਾਜ਼ਮੀ `0x`/`0X` ਪ੍ਰੀਫਿਕਸ ਵਾਲੀ ਹੈਕਸਾਡੈਸੀਮਲ ਸਟਰਿੰਗ ਲਿਟਰਲ ਹੈ ਜਾਂ ਨਹੀਂ।

### 使用场景

`isHexadecimal` ਨੂੰ ਕਨਫਿਗਰੇਸ਼ਨ ਮੁੱਲਾਂ, API ਪੇਲੋਡ ਫੀਲਡਾਂ, ਜਾਂ CLI ਆਰਗਿਊਮੈਂਟਾਂ ਦੀ ਜਾਂਚ ਲਈ ਵਰਤੋ ਜੋ ਹੈਕਸਾਡੈਸੀਮਲ ਸਟਰਿੰਗ
ਲਿਟਰਲਾਂ ਵਜੋਂ ਹੀ ਦਿੱਤੇ ਜਾਣੇ ਲਾਜ਼ਮੀ ਹਨ (ਜਿਵੇਂ IDs, masks, ਜਾਂ addresses) ਅਤੇ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਆਲੇ-ਦੁਆਲੇ whitespace ਨਹੀਂ ਹੋਣਾ
ਚਾਹੀਦਾ।

> **给 TypeScript 用户的提示：**
>
> ਜਦੋਂ ਤੁਹਾਨੂੰ ਪਾਰਸ ਜਾਂ ਕਨਵਰਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਯੂਜ਼ਰ ਇਨਪੁੱਟ ਜਾਂ ਸੀਰੀਅਲਾਈਜ਼ਡ ਡਾਟਾ ਨੂੰ ਸਖ਼ਤ ਹੈਕਸਾਡੈਸੀਮਲ ਲਿਟਰਲ ਸਟਰਿੰਗ (ਜਿਸ
> ਵਿੱਚ `0x`/`0X` ਪ੍ਰੀਫਿਕਸ ਸ਼ਾਮਲ ਹੋਵੇ) ਵਜੋਂ ਵੈਲੀਡੇਟ ਕਰਨ ਦੀ ਲੋੜ ਹੋਵੇ, ਤਾਂ `isHexadecimal` ਵਰਤੋ।

### 优势

- ਇਹ ਜਾਂਚ ਕਰਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ ਸਟਰਿੰਗ ਹੈ ਅਤੇ ਸਖ਼ਤ ਹੈਕਸਾਡੈਸੀਮਲ ਲਿਟਰਲ ਫਾਰਮੈਟ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ (ਲਾਜ਼ਮੀ `0x`/`0X` ਪ੍ਰੀਫਿਕਸ ਦੀ
  ਲੋੜ ਹੁੰਦੀ ਹੈ)।
- ਅੱਗੇ ਜਾਂ ਪਿੱਛੇ ਵਾਲੀ ਖਾਲੀ ਥਾਂ (whitespace) ਵਾਲੀਆਂ ਸਟਰਿੰਗਾਂ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਪੈਡ ਕੀਤੇ ਇਨਪੁੱਟ ਦੀ ਗਲਤੀ ਨਾਲ
  ਸਵੀਕਾਰਤਾ ਤੋਂ ਬਚਾਵ ਹੁੰਦਾ ਹੈ।
- ਚੋਣਵਾਂ ਸਾਈਨ ਨੂੰ ਸਹਾਰਦਾ ਹੈ ਅਤੇ ਪ੍ਰੀਫਿਕਸ ਤੇ ਅੰਕਾਂ ਲਈ ਕੇਸ-ਇਨਸੈਂਸਿਟਿਵ ਹੈ, `true`/`false` ਨੂੰ ਭਰੋਸੇਯੋਗ ਤਰੀਕੇ ਨਾਲ ਵਾਪਸ ਕਰਦਾ
  ਹੈ।

## 用法

### 语法

函数：

- `isHexadecimal(value)`

参数：

- `value`: ਜਾਂਚਿਆ ਜਾਣ ਵਾਲਾ ਮੁੱਲ।

### 本地函数导入

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (prefix na hai)
isHexadecimal(" 0x1A2B"); // false (aage whitespace)
isHexadecimal(0x1a2b); // false (string na hai)
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isHexadecimal(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>该文件于 31 January 2026 at 22:59:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>