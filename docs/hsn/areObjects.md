# areObjects

## 说明

`areObjects` check करै छै जे देल गेल भरल array मे खाली object सभे अछि कि नहि।

### 使用场景

`areObjects` तखन उपयोग करू जखन अहाँक लग unknown array आबै (जइसे JSON parsing सँ वा external APIs सँ) आ अहाँकेँ iterate
करऽ आ object properties access करऽ सँ पहिने ई सुनिश्चित करऽ होइ जे ई non-empty होइ आ हर element एकटा object होइ।

> **给 TypeScript 用户的提示：**
>
> `areObjects` के उपयोग `unknown[]` के validate करऽ लेल करू, items के object मानऽ सँ पहिने; ई empty array लेल `false`
> लौटाबै छै।

### 优势

- `true` तखनै लौटाबै छै जखन इनपुट एकटा भरल (filled) array होइ आ हर element एकटा object होइ।
- जइसेँ ककरो non-object element भेटैत छै, ओतबे जल्दी रुकि कऽ `false` लौटाबै छै।
- Object-विशेष operation करऽ सँ पहिने unknown input के validate करऽ मे मदद करै छै।

## 用法

### 语法

函数：

- `areObjects(array)`

参数：

- `array`: ओ array जेकरा object element लेल check करऽ छै।

### 本地函数导入

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value bharal objectan ke array hai
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areObjects(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areObjects](../_analysis/areObjects.md)

<br>

---

<small>该文件于 31 January 2026 at 00:09:02 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>