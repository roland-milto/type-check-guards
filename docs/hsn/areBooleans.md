# areBooleans

## 说明

`areBooleans` चेक करदा ऐ के दित्ता گیا गैर-खाली ऐरे सिरिफ बूलियन वैल्यूआں تے मुश्तमिल ऐ या नئیں، जे होवे तां `true` واپس
करदा ऐ वरना `false`।

### 使用场景

यूज़र-वळों दित्ते होए या बाहरी डेटा (जिवें JSON payloads, query params, config arrays) नूं वैलिडेट करो तां के गैर-खाली
लिस्ट विच सिरिफ बूलियन होण، फेर बूलियन लॉजिक लाओ या ओह्नूं ओह्ना APIs نूं पास करो जे `boolean[]` दी उम्मीद करदیاں नें।

> **给 TypeScript 用户的提示：**
>
> `areBooleans` नूं `unknown[]` नूं `boolean[]` समझण तोں پہلاں वैलिडेट करन लئی ਵਰतो; एह खाली ऐरेआں لئی `false` واپس करदा
> ऐ، इस لئی जे खाली लिस्ट अलाउ करनी होवे तां उस केस नूं वखरे तौर تے हैंडल करो।

### 优势

- `true` सिरिफ ता ओह्दो वेल्ले वापस करदा ऐ जदों हर इक एलिमैंट बूलियन होवे अते इनपुट इक गैर-खाली ऐरे होवे।
- खाली ऐरेआں नूं रद्द करके ( `false` वापस करदा ऐ) गलत पॉज़िटिव तोں बचांदा ऐ।
- बूलियन-ओनली ऑपरेशनाں توں پہلاں रनटाइम गार्ड वजوں चंगा کم करदा ऐ (जिवें `every`, `some`, लॉजिकल रिडक्शन्स)।

## 用法

### 语法

函数：

- `areBooleans(array)`

参数：

- `array`: ओह ऐरे जिह्नूं बूलियन एलिमैंटाں लئی चेक कीता جانا ऐ।

### 本地函数导入

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### 全局对象导入

如需将函数作为全局对象方法导入，请使用：

```ts
import "@type-check/guards/register-global-object.mjs";
```

随后以下方法可全局使用：

- `Type.areBooleans(array)`

## 函数分析

此处记录了当向函数传入不同参数时产生的输出的表格分析： [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>该文件于 30 January 2026 at 14:40:34 (UTC) 使用 *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** 由 *
*[Roland Milto](https://roland-milto.de/)** 生成。</small>