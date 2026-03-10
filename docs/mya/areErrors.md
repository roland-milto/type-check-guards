# areErrors

## ဖော်ပြချက်

array တစ်ခုသည် အလွတ်မဟုတ်ပြီး `Error` object များသာ ပါဝင်ကြောင်း စစ်ဆေးကာ `true` သို့မဟုတ် `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

runtime မှ ပေးလာသော `unknown[]` (ဥပမာ စုပေါင်း failure များ၊ validation ရလဒ်များ၊ သို့မဟုတ် deserialize လုပ်ထားသော ဒေတာ)
သည် `Error` object များ၏ အလွတ်မဟုတ်သော စာရင်းဖြစ်ကြောင်းကို iterate လုပ်ခြင်း၊ log ရေးသားခြင်း၊ သို့မဟုတ်
ပြန်လည်ပစ်ချခြင်း (rethrow) မလုပ်မီ အတည်ပြုရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areErrors` သည် item တိုင်း `Error` ဖြစ်နေသော ဖြည့်ထားသည့် array အတွက်သာ `true` ကို ပြန်ပေးပြီး အလွတ် array အတွက်
> သို့မဟုတ် element တစ်ခုခုက `Error` မဟုတ်ပါက `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- အရာဝတ္ထုတိုင်းသည် `Error` instance ဖြစ်ကြောင်း သေချာစေပြီး အမှားကို လုံခြုံစွာ ကိုင်တွယ်ခြင်းနှင့် log ရေးသားခြင်းကို
  လုပ်ဆောင်နိုင်စေသည်။
- အလွတ် array များကို ငြင်းပယ်ပြီး မတော်တဆ “အမှားမရှိ” အခြေအနေကို မှန်ကန်သော အမှားစာရင်းအဖြစ် သတ်မှတ်မိခြင်းကို
  တားဆီးပေးသည်။
- `unknown[]` input များ (ဥပမာ API များမှ သို့မဟုတ် `catch` block များမှ) ကို ကိုင်တွယ်ရာတွင် runtime guard အဖြစ်
  ကောင်းစွာ အသုံးချနိုင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areErrors(array)`

ပါရာမီတာများ:

- `array`: `Error` object များ ပါဝင်/မပါဝင် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value သည် Error အရာဝတ္ထုများပါဝင်သော အလွတ်မဟုတ်သော အာရေးတစ်ခု ဖြစ်သည်
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areErrors(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 12:34:39 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>