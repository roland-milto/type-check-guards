# isInteger

## ဖော်ပြချက်

ပေးထားသော `value` သည် safe integer number ဟုတ်/မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

ယုံကြည်မရသော input (ဥပမာ query params, JSON payloads, environment variables) ကို array indices, pagination, counters,
သို့မဟုတ် database IDs အတွက် integer အဖြစ် မသုံးမီ အတည်ပြုရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> မသေချာသော input ကို numeric integer အဖြစ် သုံးမီ အတည်ပြုရန် `isInteger` ကို အသုံးပြုပါ; `typeof value === "number"`
> နှင့် `Number.isSafeInteger(value)` ဖြစ်သော တန်ဖိုးများအတွက်သာ `true` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- အမျိုးအစား (type) နဲ့ ကိန်းဂဏန်းလုံခြုံမှု (numeric safety) ကို နှစ်မျိုးလုံး စစ်ဆေးပေးသည် — input က number ဖြစ်ပြီး
  safe integer ဖြစ်တဲ့အခါမှသာ `true` ကို ပြန်ပေးသည်။
- ကိန်းဂဏန်းအဖြစ် အလိုအလျောက်ပြောင်းလဲခြင်း (numeric coercion) ကြောင့် ဖြစ်တတ်တဲ့ အမှားများကို တားဆီးပေးသည် — "5" လို
  string မျိုးတွေက မှန်ကန်စွာ `false` ကို ပြန်ပေးသည်။
- integer မဟုတ်တာများနဲ့ မလုံခြုံတဲ့ integer များကို ပယ်ချပြီး IDs, counters, array indexing စတဲ့အတွက် သင့်တော်စေသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isInteger(value)`

ပါရာမီတာများ:

- `value`: integer အခြေအနေရှိ/မရှိ စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // မှန်
const b = isInteger(-100);   // မှန်
const c = isInteger("5");    // မှား
const d = isInteger(5.5);    // မှား
const e = isInteger(null);   // မှား

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isInteger(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 00:50:44 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>