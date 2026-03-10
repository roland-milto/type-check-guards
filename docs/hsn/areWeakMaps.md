# areWeakMaps

## 说明

`areWeakMaps` चैक करदा ऐ के कोई वैल्यू इक गैर-खाली अर्रे ऐ जिथै हर एलिमेंट `WeakMap` ऐ; एह सिर्फ उस हालत च `true`
लौटांदा ऐ, निं तां `false`।

### 使用场景

रनटाइम डेटा (जियां parsed JSON, plugin inputs, जां loosely typed configuration) गी वैलिडेट करो तां जे एह पक्का होऐ के एह
`WeakMap` इंस्टैंसां दा इक गैर-खाली अर्रे ऐ, इटरेट करन ते `WeakMap` मेथड कॉल करन तो पैह्लें; जे किसे वी एलिमेंट
`WeakMap` निं ऐ जां अर्रे खाली ऐ तां `false` लौटांदा ऐ।

> **给 TypeScript 用户的提示：**
>
> अनजाण इनपुट गी गैर-खाली `WeakMap[]` समझण तो पैह्लें वैलिडेट करन लई `areWeakMaps` इस्तेमाल करो; एह खाली अर्रे आस्तै
`false` लौटांदा ऐ।

### 优势

- दित्ते गे अर्रे दे हर इक एलिमेंट गी `WeakMap` इंस्टैंस होण दी पुख्ता करदा ऐ।
- खाली अर्रे आस्तै `false` लौटांदा ऐ, जिस कन्नै “कोई डेटा निं” गी गल्ती कन्नै वैध इनपुट समझण तो बचाव होंदा ऐ।
- `WeakMap`-खास ऑपरेशन सारे आइटमां उप्पर करन तो पैह्लें गार्ड वजों फायदेमंद ऐ।

## 用法

### 语法

函数：

- `areWeakMaps(array)`

参数：

- `array`: `WeakMap` इंस्टैंसां आस्तै चैक करन लई अर्रे।

### 本地函数导入

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // सूची WeakMap उदाहरणन का गैर-खाली सरणी है
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // गैर-खाली WeakMap[] ना है
}

```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areWeakMaps(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>该文件于 30 January 2026 at 13:37:38 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>