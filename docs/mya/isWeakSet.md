# isWeakSet

## ဖော်ပြချက်

ပေးထားသော `value` သည် object များ၏ `WeakSet` ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

type မသတ်မှတ်ထားသော input (ဥပမာ- external APIs, dynamic configuration, သို့မဟုတ် `unknown` တန်ဖိုးများ) ကို လက်ခံသည့်အခါ
`WeakSet`-specific operation များကို အသုံးမပြုမီ ၎င်းသည် `WeakSet` ဟုတ်မဟုတ်ကို အတည်ပြုရန် `isWeakSet` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> runtime တွင် `unknown` တန်ဖိုးကို `WeakSet<object>` အဖြစ် ကျဉ်းမြောင်းသတ်မှတ်ရန် `isWeakSet` ကို အသုံးပြုပါ။ `WeakSet`
> သည် object reference များကိုသာ ထည့်နိုင်သည်ကို သတိပြုပါ။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုသည် `WeakSet` ဟုတ်မဟုတ်ကို runtime တွင် ရိုးရှင်းစွာ စစ်ဆေးပေးသည်။
- `WeakSet` instance များကိုသာ ထိုအတိုင်း ကိုင်တွယ်စေခြင်းဖြင့် type error များကို ကာကွယ်ရန် ကူညီပေးသည်။
- `unknown` input မည်သည့်အမျိုးအစားမဆို အလုပ်လုပ်ပြီး ရှင်းလင်းသော boolean ရလဒ် (`true`/`false`) ကို ပြန်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isWeakSet(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // မှန်
console.log(isWeakSet(b)); // မမှန်

if (isWeakSet(a)) {
  // a သည် runtime တွင် WeakSet ဖြစ်သည်
}
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isWeakSet(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:18:20 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>