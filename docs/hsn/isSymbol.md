# isSymbol

## 说明

`isSymbol` طے کردا ہے کہ دِتّی گئی ویلیو `symbol` ٹائپ دی ہے یا نہیں، symbols لئی `true` تے ہور صورت وچ `false` واپس
کردا ہے۔

### 使用场景

کسی `unknown` ویلیو نوں `symbol` ہون دی تصدیق کرو، تاں جو اینوں unique identifier، registry key، یا objects تے maps وچ
computed property key دے طور تے محفوظ طریقے نال ورتیا جا سکے۔

> **给 TypeScript 用户的提示：**
>
> `unknown` نوں `symbol` تک narrow کرن لئی symbol-نال متعلق فنکشنز کال کرن توں پہلاں یا اینوں computed property key دے
> طور تے ورتن توں پہلاں `isSymbol` استعمال کرو۔

### 优势

- JavaScript `symbol` primitive type لئی سادہ تے بھروسے جوگ runtime چیک فراہم کرے ہے۔
- `unknown` ویلیوز نوں symbol-خاص APIs ورتن توں پہلاں یا انہاں نوں keys دے طور تے سٹور کرن توں پہلاں narrow کرن وچ مدد
  کرے ہے۔
- `typeof` استعمال کر کے غلط مثبت نتیجیاں توں بچدا ہے، جیہڑا `symbol` ویلیوز نوں پچھانن دا معیاری طریقہ ہے۔

## 用法

### 语法

函数：

- `isSymbol(value)`

参数：

- `value`: چیک کیتے جان والی ویلیو۔

### 本地函数导入

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input hia par symbol hai
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.isSymbol(value)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>该文件于 30 January 2026 at 14:27:07 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>