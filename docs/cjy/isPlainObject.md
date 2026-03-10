# isPlainObject

## 说明

检查给定个 `value` 是不是普通对象；是就返回 `true`，要不就返回 `false`。

### 使用场景

喺读取 key 或者把它映射成带类型个配置对象之前，先验证一个 `unknown` 输入（比如解析出来个 JSON、外部数据、或者函数参数）是不是普通对象。

> **给 TypeScript 用户的提示：**
>
> `isPlainObject` 用来喺把 `unknown` 收窄成类似 record 个对象之前挺有用；它只对内部 tag 是 `[object Object]` 个值返回
`true`。

### 优势

- 提供一个简单、靠得住个检查，用来判断一个值是不是普通对象（也就是 `Object` / `{}`），返回 `true` 或者 `false`。
- 帮你把普通对象同数组、函数、`null` 还有别个非普通对象类型区分开来。
- 喺 TypeScript 里当类型守卫用，先把 `unknown` 值收窄了再去访问对象属性，挺有用。

## 用法

### 语法

函数：

- `isPlainObject(value)`

参数：

- `value`: 要测试是不是普通对象个值。

### 本地函数导入

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input喺呢度係个普通对象
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // 真
console.log(isPlainObject([])); // 假
console.log(isPlainObject(null)); // 假
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

<small>该文件于 6 February 2026 at 12:16:49 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>