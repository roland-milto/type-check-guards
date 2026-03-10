# arePlainObjects

## ဖော်ပြချက်

array တစ်ခု၏ element အားလုံးသည် plain object များဖြစ်/မဖြစ် စစ်ဆေးပြီး၊ element တိုင်း အရည်အချင်းပြည့်မီမှသာ `true` ကို
ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

ပြင်ပမှ သို့မဟုတ် type မသတ်မှတ်ထားသော ဒေတာ (ဥပမာ JSON ကို parse လုပ်ထားသော ဒေတာ၊ API payload များ၊ form submission များ)
ကို စစ်ဆေးအတည်ပြုရန်—iteration လုပ်ပြီး property များကို ဖတ်မီ entry တိုင်းသည် plain object ဖြစ်သော အလွတ်မဟုတ်သော array
တစ်ခုကို လက်ခံရရှိထားကြောင်း သေချာစေရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> TypeScript တွင် မသိရှိသေးသော input ကို `Record<string, unknown>[]` (သို့မဟုတ် ပိုမိုတင်းကျပ်သော object shape) အဖြစ်
> သဘောထားမီ `arePlainObjects` ကို အသုံးပြုပြီး အတည်ပြုစစ်ဆေးပါ။

### အားသာချက်များ

- အဝင် array ထဲရှိ element တိုင်းဟာ plain object ဖြစ်ကြောင်း သေချာစေပြီး၊ item အားလုံးကိုက်ညီတဲ့အခါမှသာ `true` ကို
  ပြန်ပေးသည်။
- မမှန်ကန်သော အဝင်များ (array မဟုတ်ခြင်း သို့မဟုတ် အလွတ် array) ကို `false` ပြန်ပေးခြင်းဖြင့် အစောပိုင်းတွင်ပင်
  ပယ်ချသည်။
- object-literal object များနှင့် `Object.create(null)` ဖြင့် ဖန်တီးထားသော object များကိုလည်း မှန်ကန်သော plain object
  များအဖြစ် သတ်မှတ်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `arePlainObjects(array)`

ပါရာမီတာများ:

- `array`: plain object element များဖြစ်/မဖြစ် စစ်ဆေးရန် array။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // မှန်
const b = arePlainObjects([{}, Object.create(null)]); // မှန်
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // မမှန်
const d = arePlainObjects([] as unknown[]); // မမှန်
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.arePlainObjects(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 16:54:54 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>