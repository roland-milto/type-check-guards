# isPlainObject

## 说明

检查指定的 `value` 是否为普通对象；若是则回传 `true`，否则回传 `false`。

### 使用场景

在读取 key 或把资料映射成有型别的设定对象之前，先验证一个 `unknown` 输入（例如解析后的 JSON、外部资料或函数参数）是否为普通对象。

> **给 TypeScript 用户的提示：**
>
> `isPlainObject` 很适合用来在把 `unknown` 当作类似 record 的对象来处理之前先缩小范围；它只会对内部 tag 为
`[object Object]` 的值回传 `true`。

### 优势

- 提供一个简单、可靠的检查，用来判断一个值是不是普通对象（也就是 `Object` / `{}`），会回传 `true` 或 `false`。
- 帮助分辨普通对象跟数组、函数、`null`，以及其他非普通对象的类型。
- 在 TypeScript 里当作型别守卫（type guard）很有用，可以先把 `unknown` 缩小范围后才去存取对象属性。

## 用法

### 语法

函数：

- `isPlainObject(value)`

参数：

- `value`: 欲测试是否为普通对象的值。

### 本地函数导入

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input tī sī chi̍t ê pêng-thàn ê o̍h-chi̍t
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // chin
console.log(isPlainObject([])); // bô
console.log(isPlainObject(null)); // bô
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isPlainObject(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>该文件于 6 February 2026 at 12:18:48 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>