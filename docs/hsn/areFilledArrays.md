# areFilledArrays

## 说明

`areFilledArrays` जाँच करै सै कि दो-आयामी ऐरे खाली ना हो अर उसदे सारे सबऐरे भी खाली ना हों।

### 使用场景

टैबुलर या मैट्रिक्स-जैसे इनपुट (जैसे CSV rows, grid data, grouped results) की वैलिडेशन खातर `areFilledArrays` का
इस्तेमाल कर, ताकि तूं सुरक्षित रूप तै मान सको कि कम से कम एक subarray मौजूद सै अर कोई भी subarray खाली ना सै।

> **给 TypeScript 用户的提示：**
>
> जब तन्नै पक्का करणा हो कि 2D ऐरे में कम से कम एक row हो अर हर row में कम से कम एक element हो, तै iterate करणे या
> indexing करणे से पहले `areFilledArrays` का इस्तेमाल कर।

### 优势

- बाहरी ऐरे के खाली न होणे अर हर अंदरूनी ऐरे के भी खाली न होणे की जाँच करै सै, अर सिरफ तबै `true` लौटावै सै जब दोनों
  शर्तें पूरी हों।
- सब-ऐरे के अंदर किस्से भी किस्म के तत्व (जैसे numbers, strings, objects, nested arrays) के साथ काम करै सै, क्यूँकि यो
  सिरफ ऐरे के “भरे” होणे की जाँच करै सै, तत्वों की सामग्री की नहीं।
- एक सादा boolean नतीजा (`true`/`false`) दे सै, जो दो-आयामी डेटा प्रोसेस करणे से पहले guard के तौर पै काम आवै सै।

## 用法

### 语法

函数：

- `areFilledArrays(array)`

参数：

- `array`: जाँच करणे खातर दो-आयामी ऐरे।

### 本地函数导入

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // साँचो
console.log(areFilledArrays(b)); // साँचो
console.log(areFilledArrays(c)); // साँचो
console.log(areFilledArrays(d)); // झूठो
console.log(areFilledArrays(e)); // झूठो
console.log(areFilledArrays(f)); // झूठो

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areFilledArrays(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>该文件于 6 February 2026 at 11:57:01 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>