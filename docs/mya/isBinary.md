# isBinary

## ဖော်ပြချက်

`isBinary` သည် တန်ဖိုးတစ်ခုသည် binary string (လိုအပ်ပါက `0b`/`0B` ရှေ့ဆက်ပါနိုင်) ဟုတ်မဟုတ်ကို သတ်မှတ်ပြီး `true`
သို့မဟုတ် `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

နောက်ထပ် လုပ်ဆောင်မှုများ မပြုလုပ်မီ `0b`/`0B` ရှေ့ဆက် ပါနိုင်သည့် binary digit များသာ ကိုယ်စားပြုကြောင်း သေချာစေရန်
အသုံးပြုသူပေးသော string များ (ဥပမာ form fields, CLI args, config values) ကို အတည်ပြုစစ်ဆေးရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> string ကို `BigInt`/`Number` သို့ parse သို့မဟုတ် convert မလုပ်မီ မမှန်ကန်သော input မဖြစ်စေရန် `isBinary` ကို type
> guard အဖြစ် အသုံးပြုပါ။

### အားသာချက်များ

- `0b`/`0B` ရှေ့ဆက် (prefix) ပါရှိသော်လည်းကောင်း မပါရှိသော်လည်းကောင်း binary string များကို လက်ခံသည်။
- အလွတ် string များနှင့် အရှေ့/အနောက်တွင် whitespace (ASCII ≤ 32) ပါသော string များကို ငြင်းပယ်သည်။
- `true`/`false` ကို throw မလုပ်ဘဲ ပြန်ပေးသဖြင့် မသေချာသော input များအတွက်လည်း လုံခြုံစွာ အသုံးပြုနိုင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isBinary(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // မှန်
const b = isBinary("1010");   // မှန်
const c = isBinary("0b1020"); // မှား
const d = isBinary(0b1010);     // မှား

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isBinary(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 23:10:40 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>