# isUndefined

## ဖော်ပြချက်

ပေးထားသော တန်ဖိုးသည် `undefined` ဟုတ်မဟုတ် စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

optional input များကို guard လုပ်ရန်၊ မရှိသော property များကို သိရှိရန်၊ သို့မဟုတ် “မပေးထား” (`undefined`) နှင့်
“တမင်တကာ အလွတ်ထား” (`null`) ကို ခွဲခြားရန် `isUndefined` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `undefined` ( `null` မဟုတ်) ကို သီးသန့် သိရှိရန် လိုအပ်သည့်အခါ `isUndefined` ကို အသုံးပြုပါ။
`typeof value === "undefined"` ကို အခြေခံထားသောကြောင့် လုံခြုံစိတ်ချရသည်။

### အားသာချက်များ

- `typeof` ကို အသုံးပြုပြီး `undefined` ကို ရှင်းလင်းတိတိကျကျ စစ်ဆေးပေးနိုင်ပြီး မကြေညာထားသော variable များကြောင့်
  ဖြစ်နိုင်သော edge case များကို ရှောင်ရှားပေးသည်။
- guard, branching နှင့် validation logic များတွင် သင့်တော်သော ရိုးရှင်းသော boolean ရလဒ် (`true`/`false`) ကို
  ပြန်ပေးသည်။
- `undefined` ကို `null`, `0`, `""`, သို့မဟုတ် `NaN` ကဲ့သို့သော အခြား “အလွတ်” တန်ဖိုးများနှင့် ခွဲခြားသိနိုင်ရန်
  ကူညီပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isUndefined(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // ဒီနေရာမှာ x က undefined ဖြစ်တယ်
} else {
  // ဒီနေရာမှာ x က undefined မဟုတ်ဘူး
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isUndefined(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:03:36 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>