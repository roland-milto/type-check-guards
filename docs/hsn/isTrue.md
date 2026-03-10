# isTrue

## 说明

`isTrue` निर्धारित करैत अछि जे देल गेल मान सख्ती सँ `true` के बराबर अछि कि नहि.

### 使用场景

Flags, feature toggles, वा configuration values के validate करबाक लेल `isTrue` उपयोग करू जतय केवल लिटरल `true` स्वीकार
होय आ बाकी सभकेँ `false` मानल जाए.

> **给 TypeScript 用户的提示：**
>
> `isTrue` तखन उपयोग करू जखन अहाँकेँ केवल बूलियन लिटरल `true` स्वीकार करबाक जरूरत हो, मात्र truthy मान नहि.

### 优势

- बूलियन लिटरल `true` खातिर सख्त जाँच देवे छै (कोनो coercion नहि).
- `true` के truthy मान जइसे `1`, `"true"`, या `{}` सँ अलग करय में मदद करैत अछि.
- सरल, अनुमानयोग्य व्यवहार जे guards आ validation pipelines खातिर उपयुक्त अछि.

## 用法

### 语法

函数：

- `isTrue(value)`

参数：

- `value`: जाँच करबाक मान.

### 本地函数导入

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // साँच
const b = isTrue(1);         // झूठ
const c = isTrue("true");   // झूठ

if (isTrue(a)) {
  // इहाँ a साँच अछि
}
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isTrue(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isTrue](../_analysis/isTrue.md)

<br>

---

<small>该文件于 30 January 2026 at 13:42:35 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>