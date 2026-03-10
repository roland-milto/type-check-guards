# areRegExes

## ဖော်ပြချက်

`areRegExes` သည် တန်ဖိုးတစ်ခုက `RegExp` object များသာ ပါဝင်သော အပြည့်ဖြစ်နေသည့် array ဟုတ်မဟုတ်ကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

configuration option တစ်ခု (ဥပမာ allow/deny pattern စာရင်း) သည် regular expression များ၏ အလွတ်မဟုတ်သော array
ဖြစ်ကြောင်းကို matching အတွက် အသုံးမပြုမီ စစ်ဆေးအတည်ပြုရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> iterate လုပ်ခြင်း သို့မဟုတ် pattern များကို ပေါင်းစည်းခြင်း မပြုမီ `unknown` ကို `RegExp[]` သို့ ကျဉ်းမြောင်းစေရန်
`areRegExes` ကို အသုံးပြုပါ။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုသည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး အစိတ်အပိုင်းတိုင်းသည် `RegExp` instance ဖြစ်ကြောင်း သေချာစေသည်။
- အသုံးပြုသူ input သို့မဟုတ် configuration ကို စစ်ဆေးရန် ရိုးရှင်းသော boolean guard (`true`/`false`) ကို ပံ့ပိုးပေးသည်။
- နောက်ပိုင်း code တွင် item အားလုံးက regular-expression လုပ်ဆောင်ချက်များကို ထောက်ပံ့နိုင်သည်ဟု ယူဆသည့်အခါ runtime
  error မဖြစ်စေရန် ကူညီပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areRegExes(array)`

ပါရာမီတာများ:

- `array`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // ဒီနေရာမှာ patterns က RegExp အစု (array) ဖြစ်တယ်
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areRegExes(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 23:20:03 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>