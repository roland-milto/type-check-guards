# areObjects

## ဖော်ပြချက်

`areObjects` သည် ပေးထားသော အချက်အလက်ပါသော array ထဲတွင် object များသာ ပါဝင်နေသလားကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

မသိသေးသော array (ဥပမာ JSON parsing သို့မဟုတ် ပြင်ပ API များမှ) ကို လက်ခံရရှိသောအခါ၊ iterate လုပ်ပြီး object property
များကို ဝင်ရောက်အသုံးပြုမီ ၎င်းသည် အလွတ်မဟုတ်ကြောင်းနှင့် element တိုင်းသည် object ဖြစ်ကြောင်း သေချာစေရန် `areObjects`
ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown[]` ကို item များကို object အဖြစ် သဘောထားမလုပ်မီ `areObjects` ဖြင့် စစ်ဆေးအတည်ပြုရန် အသုံးပြုပါ; အလွတ် array
> များအတွက် `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ထည့်သွင်းထားသော တန်ဖိုးသည် အချက်အလက်ပါသော array ဖြစ်ပြီး element တိုင်းသည် object ဖြစ်သောအခါမှသာ `true` ကို
  ပြန်ပေးသည်။
- object မဟုတ်သော element တစ်ခုကို တွေ့သည်နှင့် ချက်ချင်း ရပ်ပြီး `false` ကို ပြန်ပေးသည်။
- object အထူးပြု လုပ်ဆောင်ချက်များကို မလုပ်မီ မသိသေးသော input ကို စစ်ဆေးအတည်ပြုရန် ကူညီပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areObjects(array)`

ပါရာမီတာများ:

- `array`: object element များ ပါဝင်/မပါဝင် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value သည် အရာဝတ္ထုများဖြင့် ပြည့်နေသော အရာဝတ္ထုအစု (array) ဖြစ်သည်
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areObjects(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 00:09:39 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>