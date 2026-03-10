# isValidDate

## ဖော်ပြချက်

`isValidDate` သည် ပေးထားသော တန်ဖိုးတစ်ခုသည် မှန်ကန်သော `Date` object ဟုတ်မဟုတ်ကို စစ်ဆေးပြီး အမှန်တကယ် မမှားယွင်းသော
date များအတွက်သာ `true` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

အသုံးပြုသူ input သို့မဟုတ် API data ထဲတွင် date များ ပါဝင်နိုင်သဖြင့် date တွက်ချက်မှုများ၊ format ပြောင်းခြင်းများ၊
သို့မဟုတ် နှိုင်းယှဉ်မှုများ မလုပ်မီ တန်ဖိုးသည် အမှန်တကယ် `Date` instance ဖြစ်ပြီး မမှန်ကန်သော date မဟုတ်ကြောင်းကို
အတည်ပြုစစ်ဆေးရန် အသုံးပြုသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown` အဖြစ် type သတ်မှတ်ထားသော တန်ဖိုးများပေါ်တွင် `Date` methods (ဥပမာ `toISOString`, `getTime`) ကို ခေါ်မသုံးမီ
`isValidDate` ကို အသုံးပြုပြီး ၎င်းတို့သည် မှန်ကန်သော `Date` objects ဖြစ်ကြောင်း သေချာစေပါ။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုသည် `Date` instance ဖြစ်ကြောင်းကို သေချာစေပြီး date လိုပုံစံရှိတဲ့ string သို့မဟုတ် number မဟုတ်ကြောင်းကို
  အတည်ပြုပေးသည်။
- `NaN` time value များကို စစ်ဆေးခြင်းဖြင့် မမှန်ကန်သော date များ (ဥပမာ `new Date("invalid")`) ကို ပယ်ချသည်။
- conditionals နှင့် validation pipelines များတွင် အသုံးပြုရ လွယ်ကူသော ရိုးရှင်းတဲ့ boolean guard တစ်ခု ဖြစ်သည်။
- အရင်ဆုံး input ကို အတည်ပြုစစ်ဆေးပေးခြင်းဖြင့် date methods များကို ခေါ်သုံးရာတွင် runtime errors မဖြစ်အောင်
  ကာကွယ်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isValidDate(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input သည် မှန်ကန်သော Date instance တစ်ခု ဖြစ်သည်
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isValidDate(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 16:51:59 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>