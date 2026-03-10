# isPromise

## ဖော်ပြချက်

ပေးထားသော တန်ဖိုးတစ်ခုသည် `Promise` ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

plugin များ၊ dynamic import များ၊ သို့မဟုတ် type မတိကျသော API များမှ ပြန်လာနိုင်သော တန်ဖိုးများကို `Promise` အဖြစ်
ကိုင်တွယ်မီ unknown input များကို အတည်ပြုရန် `isPromise` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `isPromise` သည် `instanceof Promise` ဖြင့် စစ်ဆေးသောကြောင့် `Promise` instance အမှန်တကယ်များအတွက်သာ `true` ကို
> ပြန်ပေးသည် (generic thenable များအတွက် မဟုတ်)။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုသည် `Promise` ဟုတ်မဟုတ်ကို runtime မှာ ရိုးရှင်းစွာ စစ်ဆေးပေးသည်။
- `Promise` instance အမှန်တကယ် လိုအပ်သော code path များကို ကာကွယ်ရန် ကူညီပြီး `true` သို့မဟုတ် `false` ကို
  ခန့်မှန်းနိုင်စွာ ပြန်ပေးသည်။
- `Promise` instance အမှန်တကယ် လိုအပ်ခြင်းကြောင့် “thenable” object များ (ဥပမာ `{ then() {} }`) မှ ဖြစ်နိုင်သော false
  positive များကို ရှောင်ရှားပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isPromise(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // မှန်
console.log(isPromise(b)); // မှား
console.log(isPromise(123)); // မှား
console.log(isPromise(null)); // မှား

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isPromise(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 23:53:34 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>