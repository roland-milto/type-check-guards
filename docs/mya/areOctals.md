# areOctals

## ဖော်ပြချက်

`areOctals` သည် ပေးထားသော တန်ဖိုးသည် မှန်ကန်သော octal string များပါဝင်သည့် အလွတ်မဟုတ်သော array ဟုတ်မဟုတ်ကို
သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

အသုံးပြုသူ input၊ configuration တန်ဖိုးများ၊ သို့မဟုတ် API payload များကို စစ်ဆေးရာတွင် octal literals (ဥပမာ `0o755`
ကဲ့သို့ file permission modes) ပါဝင်ရမည်ဖြစ်ပြီး အလွတ် array များ သို့မဟုတ် မမှန်ကန်သော entry တစ်ခုခု ပါဝင်ပါက `false`
ပြန်ပေးပြီး ပယ်ချလိုသည့်အခါ `areOctals` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areOctals` ကို အသုံးပြုပြီး (ဥပမာ `Number(...)` သို့မဟုတ် custom parsing ဖြင့်) ပြောင်းလဲမလုပ်မီ entry
> တစ်ခုချင်းစီသည် မှန်ကန်သော octal string ဖြစ်နေသော အလွတ်မဟုတ်သော `unknown[]` ကို သေချာစေပါ။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုသည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး element တိုင်းသည် octal string ဖြစ်ကြောင်း စစ်ဆေးပေးသည်။ item အားလုံး
  စစ်ဆေးမှုအောင်မြင်မှသာ `true` ကို ပြန်ပေးသည်။
- အမြန်ဆုံး မအောင်မြင်စေသည် (fails fast): octal မဟုတ်သော element တစ်ခုကို တွေ့သည်နှင့်တပြိုင်နက် `false` ကို ပြန်ပေးသည်။
- runtime error များနှင့် input ကို မညီမညာ ကိုင်တွယ်မှုများကို ရှောင်ရှားရန် octal string များကို parse/convert မလုပ်မီ
  guard အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areOctals(array)`

ပါရာမီတာများ:

- `array`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value သည် အောက်တယ်လ် စာတန်းများ ပါဝင်သော မလွတ်သော အာရေး ဖြစ်သည်
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areOctals(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:57:24 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>