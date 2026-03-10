# isBoolean

## ဖော်ပြချက်

ပေးထားသော တန်ဖိုးသည် `boolean` ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

အပြင်ဘက်မှ သို့မဟုတ် type မသတ်မှတ်ထားသော ဒေတာ (ဥပမာ၊ environment variables, JSON payloads, query parameters) ကို
စစ်ဆေးအတည်ပြု၍ conditional logic ထဲတွင် မသုံးမီ တန်ဖိုးသည် `boolean` ဖြစ်ကြောင်း သေချာစေရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> boolean လုပ်ဆောင်ချက်များကို အသုံးမပြုမီ `unknown` ကို `boolean` အဖြစ် ကျဉ်းမြောင်းသတ်မှတ်ရန် `isBoolean` ကို
> အသုံးပြုပါ။

### အားသာချက်များ

- `typeof` ကို အသုံးပြုပြီး ရိုးရှင်းပြီး မြန်ဆန်တဲ့ runtime စစ်ဆေးမှုကို လုပ်နိုင်သည်။
- boolean အထူး logic ကို မသုံးခင် မသိသော input ကို အတည်ပြုစစ်ဆေးရန် ကူညီသည်။
- ခန့်မှန်းနိုင်သော `boolean` ရလဒ် (`true`/`false`) ကို ပြန်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isBoolean(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // ဒီနေရာမှာ input က boolean ဖြစ်တယ်
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isBoolean(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:37:11 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>