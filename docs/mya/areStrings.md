# areStrings

## ဖော်ပြချက်

`areStrings` သည် array တစ်ခု မအလွတ်ဖြစ်ပြီး ၎င်း၏ အင်္ဂါရပ်အားလုံးသည် string များဖြစ်ကြောင်း စစ်ဆေးကာ ထိုအခြေအနေတွင်သာ
`true` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

ပြင်ပ သို့မဟုတ် အသုံးပြုသူပေးသော ဒေတာ (ဥပမာ query params, JSON payloads, CSV fields) ကို စစ်ဆေးပြီး လုပ်ဆောင်မီ string
များပါဝင်သော မအလွတ် စာရင်းတစ်ခု ရရှိထားကြောင်း သေချာစေရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> string သာသုံးသော logic ကို အသုံးချမီ မသိသော array များကို အတည်ပြုရန် `areStrings` ကို သုံးပါ; အလွတ် array များအတွက်
`false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- အင်္ဂါရပ်တိုင်းသည် string ဖြစ်ကြောင်း သေချာစေပြီး အမျိုးအစားရောနှောထားသော array များကို `false` ပြန်ပေးခြင်းဖြင့်
  ပယ်ချသည်။
- အလွတ် array များကို ပယ်ချသဖြင့် `true` သည် string များပါဝင်သော မအလွတ် စာရင်းကိုသာ ဆိုလိုသည်။
- string သာသုံးသော လုပ်ဆောင်ချက်များ (ဥပမာ `trim`, `toLowerCase`) ကို လုပ်ဆောင်မီ runtime guard အဖြစ် အမြန်အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areStrings(value)`

ပါရာမီတာများ:

- `value`: Expected type `string[]`.

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // runtime မှာ input က အလွတ်မဟုတ်တဲ့ string[] ဖြစ်တယ်
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areStrings(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 13:19:28 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>