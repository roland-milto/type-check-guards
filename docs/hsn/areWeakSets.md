# areWeakSets

## 说明

Check karda ae ke input ik non-empty array ae jithe har element `WeakSet` ae; sirf ohdo hi `true` return karda ae.

### 使用场景

Runtime input (jiven APIs, configuration, ya user-provided data) nu validate karo taan jo proceed karan ton pehlan
tuhade kol `WeakSet` instances di ik non-empty list hove, khas kar ke oh logic layi jo `WeakSet` behavior te depend
karda ae.

> **给 TypeScript 用户的提示：**
>
> `areWeakSets` nu use karo unknown input nu validate karan layi, ohnu `WeakSet[]` samajh ke treat karan ton pehlan. Eh
> khali arrays te non-arrays layi `false` return karda ae.

### 优势

- Input array de har element `WeakSet` honi chahiye, eh pakka karda ae.
- Khali array layi `false` return karda ae, jis naal missing data te galti naal “all valid” result nahi aunda.
- Jadon input filled array na hove (including `null`), oh safe tareeke naal `false` return karke fail karda ae.
- `WeakSet` instances di lod wali operations karan ton pehlan guard vajo useful ae.

## 用法

### 语法

函数：

- `areWeakSets(array)`

参数：

- `array`: `WeakSet` objects layi check karan vaste array.

### 本地函数导入

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a WeakSet instance ke non-empty array hai
}

console.log(areWeakSets(a)); // sahi
console.log(areWeakSets(b)); // galat
console.log(areWeakSets(c)); // galat
console.log(areWeakSets(null as unknown)); // galat
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areWeakSets(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>该文件于 30 January 2026 at 14:08:56 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>