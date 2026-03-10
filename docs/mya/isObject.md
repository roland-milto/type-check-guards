# isObject

## ဖော်ပြချက်

ပေးထားသော `value` သည် `object` ဖြစ်မဖြစ် (`null` ကို မပါဝင်စေဘဲ) သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

Property များကို မဝင်ရောက်မီ `isObject` ကို အသုံးပြုပြီး မသေချာသော input များ (ဥပမာ parsed JSON, API responses, event
payloads) ကို စစ်ဆေးအတည်ပြုပါ။ ထိုသို့လုပ်ခြင်းဖြင့် တန်ဖိုးသည် object ဖြစ်ပြီး `null` မဟုတ်ကြောင်း သေချာစေသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `isObject` သည် boolean ကို ပြန်ပေးသော runtime guard ဖြစ်ပြီး သီးသန့် object shape တစ်ခုသို့ မကျဉ်းမြောင်းပေးပါ။
> ပိုမိုခိုင်မာသော typing လိုအပ်သည့်အခါ ထပ်ဆင့် စစ်ဆေးမှုများ (ဥပမာ property ရှိ/မရှိ) နှင့် ပေါင်းစပ်အသုံးပြုပါ။

### အားသာချက်များ

- `typeof` သည် `"object"` ဖြစ်ပြီး `null` မဟုတ်သော တန်ဖိုးများအတွက်သာ `true` ကို ပြန်ပေးသည်။
- `null` ကို object အဖြစ် သတ်မှတ်သွားနိုင်သော JavaScript တွင် မကြာခဏ ကြုံရသော အမှားကို တားဆီးပေးသည်။
- ရိုးရိုး object များနှင့် built-in object instance များ (ဥပမာ `Date`, `RegExp`) အတွက်လည်း အလုပ်လုပ်သည်။
- ကာကွယ်ရေးဆိုင်ရာ programming နှင့် input validation အတွက် သင့်တော်သော ရိုးရှင်း၊ မြန်ဆန်သော runtime စစ်ဆေးမှု ဖြစ်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isObject(value)`

ပါရာမီတာများ:

- `value`: `object` ဖြစ်မဖြစ် စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // runtime မှာ input က null မဟုတ်တဲ့ object တစ်ခု ဖြစ်တယ်
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isObject(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isObject](../_analysis/isObject.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 00:19:28 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>