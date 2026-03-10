# areFloats

## 说明

`areFloats` जाँच करै छै जे देल गेल array भरल अछि आ ओकर सभ element float अछि कि नहि।

### 使用场景

`areFloats` के उपयोग तखन करू जखन अहाँ के `unknown[]` भेटै (जइसे JSON, query parameters, वा external APIs सँ) आ अहाँ के
सुनिश्चित करय छै जे ई एकटा भरल array अछि जाहिमे हर item float अछि, numeric logic (जइसे averaging, interpolation, वा
statistical calculations) चलाबय सँ पहिने।

> **给 TypeScript 用户的提示：**
>
> `areFloats` के उपयोग `unknown[]` के guard करबाक लेल करू, जखन अहाँ एकरा `number[]` (जाहिमे खाली floats हो) मानि क'
> उपयोग करय चाहैत छी; ई खाली arrays लेल आ ककरो non-float element लेल `false` लौटाबै छै।

### 优势

- `true` तभैं लौटाबै छै जखन इनपुट एकटा खाली नहि होइ वाला array होइ आ ओकर हर element float होइ।
- जल्दी फेल होइ: जइने ककरो non-float element भेटैत अछि, तइने `false` लौटाबै छै।
- Float-विशेष गणना करबाक पहिने unknown input के validate करय में मदद करै छै।

## 用法

### 语法

函数：

- `areFloats(array)`

参数：

- `array`: Float elements लेल जाँच करबाक array।

### 本地函数导入

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // true
console.log(areFloats(b)); // false
console.log(areFloats(c)); // false

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFloats(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFloats](../_analysis/areFloats.md)

<br>

---

<small>该文件于 30 January 2026 at 15:57:42 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>