# isBuffer

## ဖော်ပြချက်

တန်ဖိုးတစ်ခုသည် Node.js `Buffer` ဟုတ်မဟုတ် စစ်ဆေးပြီး `true` သို့မဟုတ် `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

runtime တွင် input များ (ဥပမာ API payloads, file data, သို့မဟုတ် message buffers) ကို စစ်ဆေးပြီး တန်ဖိုးတစ်ခုသည်
`Buffer` ဖြစ်ကြောင်း သေချာစေကာ ပြုလုပ်ဆောင်ရွက်မီ စိစစ်ရန်၊ ထို့အပြင် `Buffer` မရှိနိုင်သော Node.js ပြင်ပ environment
များတွင် လည်ပတ်သောအခါ `false` ကို ယုံကြည်စိတ်ချစွာ ရယူရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `Buffer` သီးသန့် method များကို ခေါ်မီ `unknown` တန်ဖိုးများကို `Buffer` အဖြစ် type narrowing လုပ်ရန် `isBuffer` ကို
> အသုံးပြုပါ။

### အားသာချက်များ

- `Buffer.isBuffer` ကို အသုံးပြုပြီး Node.js `Buffer` instance များကို လုံခြုံစိတ်ချစွာ စစ်ဆေးပေးသည်။
- `Buffer` မရရှိနိုင်သော environment များတွင် runtime error မဖြစ်စေရန် `false` ကို ပြန်ပေးသည်။
- `unknown` input နှင့်အတူ အလုပ်လုပ်နိုင်သဖြင့် runtime validation နှင့် type narrowing အတွက် သင့်တော်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isBuffer(value)`

ပါရာမီတာများ:

- `value`: စမ်းသပ်ရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // မှန်
console.log(isBuffer(b)); // မမှန်

if (isBuffer(a)) {
  // ဒီနေရာမှာ a က Buffer ဖြစ်တယ်
  console.log(a.toString("utf8"));
}
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isBuffer(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 16:32:28 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>