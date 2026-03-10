# isEmpty

## ဖော်ပြချက်

ပေးထားသော တန်ဖိုးသည် အလွတ်ဖြစ်/မဖြစ်ကို သတ်မှတ်ပြီး `null`, `undefined`, အလွတ်/whitespace string များ၊ အလွတ် array များ၊
အလွတ် `Map`/`Set` များ၊ သို့မဟုတ် ကိုယ်ပိုင် enumerable properties မရှိသော object များအတွက် `true` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

`isEmpty` ကို input များကို validate လုပ်ရန်နှင့် data type မျိုးစုံအတွင်း ပျောက်နေသော/အလွတ် (blank) တန်ဖိုးများကို
ရှာဖွေရန် အသုံးပြုပါ (ဥပမာ form fields, API payloads, configuration objects) — `null`, `undefined`, whitespace string
များ၊ အလွတ် collections များနှင့် property မရှိသော objects များကို အလွတ်အဖြစ် သတ်မှတ်လိုသောအခါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `isEmpty` သည် boolean ပြန်ပေးသော utility တစ်ခုဖြစ်ပြီး (TypeScript type predicate မဟုတ်သဖြင့်) သူ့တစ်ခုတည်းနဲ့ type
> များကို မကျဉ်းမြောင်း (narrow) ပေးနိုင်ပါ; compile-time narrowing အတွက်မဟုတ်ဘဲ validation/branching အတွက် အသုံးပြုပါ။

### အားသာချက်များ

- အလွတ်ဖြစ်မှု စစ်ဆေးရာတွင် `null` နှင့် `undefined` ကို `true` (အလွတ်) အဖြစ် သတ်မှတ်ပေးသည်။
- အရှည်ကို စစ်မီ trim လုပ်ပြီး စစ်ဆေးသဖြင့် whitespace သာပါတဲ့ string များကို အလွတ်ဟု သတ်မှတ်သည်။
- ပုံမှန် container အမျိုးအစားများ (arrays, `Map`, `Set`) နှင့် ကိုယ်ပိုင် enumerable property မရှိသော plain object
  များကို ထောက်ပံ့သည်။
- `hasOwnProperty` စစ်ဆေးမှုကို အသုံးပြု၍ အမွေဆက်ခံ (inherited) properties များကို မရေတွက်ဘဲ ရှောင်ရှားသည်။
- guards နှင့် validation အတွက် သင့်တော်သော ရိုးရှင်းသော boolean ရလဒ် (`true`/`false`) ကို ပြန်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isEmpty(value)`

ပါရာမီတာများ:

- `value`: အလွတ်ဖြစ်မှုကို စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isEmpty(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 16:19:43 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>