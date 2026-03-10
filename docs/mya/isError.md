# isError

## ဖော်ပြချက်

ပေးထားသော `value` သည် `Error` ၏ instance ဟုတ်မဟုတ်ကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

`catch` block၊ callback၊ သို့မဟုတ် ပြင်ပ library တစ်ခုမှလာသော `unknown` တန်ဖိုးကို လက်ခံရရှိသောအခါ `message`၊ `name`၊
သို့မဟုတ် `stack` ကို ဖတ်မီ ၎င်းသည် `Error` ဟုတ်မဟုတ်ကို လုံခြုံစွာ သတ်မှတ်ရန် `isError` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown` တန်ဖိုးများ (ဥပမာ `catch` မှလာသော) ကို `Error` အဖြစ် ကိုင်တွယ်မီ `isError` ကို guard အဖြစ် အသုံးပြုပါ။

### အားသာချက်များ

- `Error` instance ဟုတ်မဟုတ်ကို runtime မှာ ရိုးရှင်းစွာ စစ်ဆေးပေးသည်။
- `message` သို့မဟုတ် `stack` ကဲ့သို့သော `Error` properties များကို ဝင်ရောက်အသုံးမပြုမီ မသိသော input များကို
  ကျဉ်းမြောင်းစေရာတွင် ကူညီပေးသည်။
- `catch` မှလာသော တန်ဖိုးများ၊ ပြင်ပ API များ၊ သို့မဟုတ် type မသတ်မှတ်ထားသော အရင်းအမြစ်များမှ တန်ဖိုးများကို
  ကိုင်တွယ်ရာတွင် runtime exceptions ဖြစ်နိုင်ခြေကို လျှော့ချပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isError(value)`

ပါရာမီတာများ:

- `value`: `Error` type နှင့် နှိုင်းယှဉ်စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isError(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isError](../_analysis/isError.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 12:46:21 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>