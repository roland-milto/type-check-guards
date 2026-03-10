# areDates

## ဖော်ပြချက်

`areDates` သည် ပေးထားသော array သည် အလွတ်မဟုတ်ပြီး `Date` object များသာ ပါဝင်နေသလားကို သတ်မှတ်ပေးပြီး အင်္ဂါရပ်အားလုံးသည်
မှန်ကန်သော date များဖြစ်သည့်အခါမှသာ `true` ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

အချိန်အလိုက် စီခြင်း၊ format ပြောင်းခြင်း၊ သို့မဟုတ် range တွက်ချက်ခြင်းကဲ့သို့ date ဆိုင်ရာ logic များကို လုပ်ဆောင်မီ
မသေချာသော input (ဥပမာ parsed JSON, form data, API payloads) ကို အတည်ပြုရန် `areDates` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> အင်္ဂါရပ်တိုင်းသည် `Date` ဖြစ်ပြီး အလွတ်မဟုတ်သော array များအတွက်သာ `true` ပြန်ပေးသည်။ အလွတ် array များအတွက် `false`
> ပြန်ပေးသည်။

### အားသာချက်များ

- အကြောင်းအရာများကို စစ်ဆေးမီ array သည် အလွတ်မဟုတ်ကြောင်း သေချာစေပြီး အလွတ် input များအတွက် `true` ပြန်လာခြင်းကို
  တားဆီးပေးသည်။
- အင်္ဂါရပ်တိုင်းသည် `Date` instance ဖြစ်ကြောင်း အတည်ပြုပေးပြီး မကိုက်ညီမှု ပထမဆုံးတွေ့သည့်အချိန်တွင် ချက်ချင်း `false`
  ပြန်ပေးသည်။
- array အတွင်းရှိ item များပေါ်တွင် date ဆိုင်ရာ လုပ်ဆောင်ချက်များကို ဆောင်ရွက်မီ guard-style စစ်ဆေးမှုအဖြစ်
  အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areDates(array)`

ပါရာမီတာများ:

- `array`: `Date` object များရှိ/မရှိ စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // မှန်
console.log(areDates(b)); // မမှန်
console.log(areDates(c)); // မမှန်

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areDates(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areDates](../_analysis/areDates.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 15:31:31 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>