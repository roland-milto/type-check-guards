# areNullOrUndefined

## ဖော်ပြချက်

ပေးထားသော array ထဲရှိ အရာဝတ္ထုအားလုံးသည် `null` သို့မဟုတ် `undefined` ဖြစ်နေသလားကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

optional field များစာရင်းတစ်ခုမှာ အမှန်တကယ်တန်ဖိုးများ မပါဝင်ဘဲ (`null`/`undefined`) ပဲ ရှိနေကြောင်း စစ်ဆေးပြီး
processing ကို ကျော်သွားမလား၊ သို့မဟုတ် “တန်ဖိုးမပေးထားပါ” အခြေအနေကို ပြသမလား ဆုံးဖြတ်ရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> array တစ်ခုမှာ ပျောက်နေသောတန်ဖိုးများ (`null`/`undefined`) ပဲ ပါဝင်နေကြောင်း အတည်ပြုရန်လိုသည့်အခါ `areNullOrUndefined`
> ကို အသုံးပြုပါ။ အလွတ် array အတွက်တော့ `false` ကို ပြန်ပေးသည်ကို သတိပြုပါ။

### အားသာချက်များ

- အရာဝတ္ထုတိုင်းက `null` သို့မဟုတ် `undefined` ဖြစ်နေတဲ့အခါမှသာ `true` ကို ပြန်ပေးသည်။
- အလွတ် array များအတွက် `false` ကို ပြန်ပေးပြီး “ဒေတာမရှိ” နဲ့ “တန်ဖိုးအားလုံးပျောက်နေ” ကို ခွဲခြားနိုင်အောင် ကူညီသည်။
- `unknown[]` နဲ့လည်း အလုပ်လုပ်နိုင်သောကြောင့် type များကို narrowing မလုပ်ခင် အသုံးပြုရန် လုံခြုံသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areNullOrUndefined(array)`

ပါရာမီတာများ:

- `array`: စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areNullOrUndefined(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 00:30:28 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>