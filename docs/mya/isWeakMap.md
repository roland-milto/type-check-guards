# isWeakMap

## ဖော်ပြချက်

ပေးထားသော `value` သည် `WeakMap` instance ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

`unknown` တန်ဖိုးတစ်ခုကို (ဥပမာ public API, plugin system, သို့မဟုတ် dynamic configuration မှ) လက်ခံသည့်အခါ `WeakMap`
-သီးသန့် အပြုအမူကို အသုံးမပြုမီ ၎င်းသည် `WeakMap` ဟုတ်မဟုတ်ကို အတည်ပြုရန် `isWeakMap` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `isWeakMap` သည် `instanceof WeakMap` စစ်ဆေးမှုကို လုပ်ဆောင်သည်; ၎င်းသည် runtime guard ဖြစ်ပြီး တကယ့် `WeakMap`
> instance များအတွက်သာ `true` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုက `WeakMap` ဟုတ်မဟုတ်ကို runtime မှာ ရိုးရှင်းစွာ စစ်ဆေးနိုင်သည်။
- `WeakMap` လိုအပ်သော API များကို မှားယွင်းအသုံးပြုခြင်းကို ကာကွယ်ရန် ကူညီပေးပြီး error ပစ်မထုတ်ဘဲ `true`/`false` ကို
  ပြန်ပေးသည်။
- `unknown` input များနှင့်လည်း အလုပ်လုပ်နိုင်သဖြင့် module boundary များတွင် (ဥပမာ parsing, external data, သို့မဟုတ်
  type မသတ်မှတ်ထားသော code) အသုံးပြုရန် အဆင်ပြေသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isWeakMap(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a သည် runtime တွင် WeakMap ဖြစ်သည်
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isWeakMap(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 13:26:02 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>