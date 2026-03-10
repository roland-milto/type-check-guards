# arePlainObjects

## 说明

检查一个数组嘅所有元素系唔系普通对象，只有每个元素都符合先返回 `true`。

### 使用场景

校验外部或者无类型数据（比如解析出来嘅 JSON、API payload、表单提交），确保你收到嘅系一个非空数组，而且每一项都系普通对象，然后先去遍历同读取属性。

> **给 TypeScript 用户的提示：**
>
> 喺 TypeScript 里头，用 `arePlainObjects` 先校验未知输入，再当佢系 `Record<string, unknown>[]`（或者更严格嘅对象结构）来用。

### 优势

- 确保输入数组里头每一个元素都系普通对象，只有当所有项都符合嗰阵先返回 `true`。
- 对无效输入（唔系数组或者空数组）会早早就拒绝，直接返回 `false`。
- 把对象字面量对象同 `Object.create(null)` 创建嘅对象都当作有效嘅普通对象。

## 用法

### 语法

函数：

- `arePlainObjects(array)`

参数：

- `array`: 要检查嘅数组，用来判断里头元素系唔系普通对象。

### 本地函数导入

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // 真
const b = arePlainObjects([{}, Object.create(null)]); // 真
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // 假
const d = arePlainObjects([] as unknown[]); // 假
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.arePlainObjects(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>该文件于 30 January 2026 at 16:24:40 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>