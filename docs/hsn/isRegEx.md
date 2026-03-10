# isRegEx

## 说明

ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ ਮੁੱਲ `RegExp` ਇੰਸਟੈਂਸ ਹੈ ਜਾਂ ਨਹੀਂ।

### 使用场景

ਯੂਜ਼ਰ ਵੱਲੋਂ ਦਿੱਤੇ ਜਾਂ ਡਾਇਨਾਮਿਕ ਮੁੱਲਾਂ (ਜਿਵੇਂ ਕਨਫਿਗਰੇਸ਼ਨ, API ਪੇਲੋਡ, ਪਲੱਗਇਨ ਇਨਪੁੱਟ) ਨੂੰ ਰੈਗੂਲਰ ਐਕਸਪ੍ਰੈਸ਼ਨ ਵਜੋਂ ਵਰਤਣ ਤੋਂ
ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕਰੋ।

> **给 TypeScript 用户的提示：**
>
> `isRegEx` ਨੂੰ `unknown` (ਜਾਂ ਯੂਨੀਅਨ) ਮੁੱਲਾਂ ਨੂੰ ਨੈਰੋ ਕਰਨ ਲਈ ਵਰਤੋ, RegExp-ਖਾਸ ਪ੍ਰਾਪਰਟੀਜ਼ ਜਾਂ ਮੈਥਡ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ; ਇਹ
`true` ਸਿਰਫ਼ ਉਹਨਾਂ ਮੁੱਲਾਂ ਲਈ ਵਾਪਸ ਕਰਦਾ ਹੈ ਜੋ `RegExp` ਦੀਆਂ ਇੰਸਟੈਂਸਾਂ ਹਨ।

### 优势

- ਇੱਕ ਸੌਖਾ ਰਨਟਾਈਮ ਟਾਈਪ ਗਾਰਡ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਚੈਕ ਕੀਤਾ ਜਾ ਸਕੇ ਕਿ ਕੋਈ ਮੁੱਲ `RegExp` ਹੈ ਜਾਂ ਨਹੀਂ।
- ਜਦੋਂ ਕੋਡ ਨੂੰ ਰੈਗੂਲਰ ਐਕਸਪ੍ਰੈਸ਼ਨ ਦੀ ਉਮੀਦ ਹੁੰਦੀ ਹੈ (ਜਿਵੇਂ `test`, `exec` ਕਾਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਜਾਂ `source` ਪੜ੍ਹਨ ਤੋਂ
  ਪਹਿਲਾਂ), ਤਦ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
- `/regex/` ਲਿਟਰਲਾਂ ਅਤੇ `new RegExp(...)` ਰਾਹੀਂ ਬਣੀਆਂ ਇੰਸਟੈਂਸਾਂ ਦੋਹਾਂ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ।
- ਗੈਰ-ਰੇਗੈਕਸ ਇਨਪੁੱਟ ਲਈ ਐਰਰ ਸੁੱਟਣ ਬਿਨਾਂ ਸਾਫ਼ ਬੂਲੀਅਨ ਨਤੀਜਾ (`true`/`false`) ਵਾਪਸ ਕਰਦਾ ਹੈ।

## 用法

### 语法

函数：

- `isRegEx(value)`

参数：

- `value`: ਜਿਸ ਮੁੱਲ ਦੀ ਜਾਂਚ ਕਰਨੀ ਹੈ।

### 本地函数导入

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input इहाँ RegExp अछि
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isRegEx(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>该文件于 30 January 2026 at 23:29:41 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>