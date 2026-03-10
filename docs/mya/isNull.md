# isNull

## ဖော်ပြချက်

ပေးထားသော `value` သည် `null` ဟုတ်မဟုတ် သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

`null` သည် အဓိပ္ပါယ်ရှိသော sentinel value အဖြစ် သတ်မှတ်ထားပြီး `undefined` သို့မဟုတ် အခြားတန်ဖိုးများနှင့် မတူသလို
ကိုင်တွယ်ရမည့် input များ သို့မဟုတ် API payload field များကို အတည်ပြုရန် `isNull` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `null` ကို `undefined` နှင့် အခြား falsy တန်ဖိုးများမှ ခွဲခြားရန် လိုအပ်သည့်အခါ `isNull` ကို အသုံးပြုပါ; `null`
> အတွက်သာ `true` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- `undefined` နဲ့ မရောနှောဘဲ `null` ကို တိတိကျကျ စစ်ဆေးပေးသည်။
- `unknown` ကို လက်ခံသောကြောင့် မည်သည့် input type မဆို ယုံကြည်စိတ်ချရစွာ အလုပ်လုပ်သည်။
- ရိုးရှင်း၊ မြန်ဆန်ပြီး side-effect မရှိပါ; `true` သို့မဟုတ် `false` ကိုသာ ပြန်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isNull(value)`

ပါရာမီတာများ:

- `value`: `null` ဟုတ်မဟုတ် စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // မှန်
console.log(isNull(b)); // မှား

if (isNull(a)) {
  // ဒီနေရာမှာ a က null ဖြစ်တယ်
}
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isNull(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isNull](../_analysis/isNull.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 15:40:04 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>