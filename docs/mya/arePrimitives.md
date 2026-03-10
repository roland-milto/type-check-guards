# arePrimitives

## ဖော်ပြချက်

`arePrimitives` သည် ပေးထားသော အလွတ်မဟုတ်တဲ့ array တစ်ခုအတွင်းရှိ element အားလုံးသည် primitive type များဖြစ်/မဖြစ်ကို
အကဲဖြတ်သည်။

### အသုံးပြုမှုကိစ္စ

incoming data (ဥပမာ query parameters, CSV row values, သို့မဟုတ် IDs/tags စာရင်း) ကို serialize လုပ်ခြင်း၊ hash
လုပ်ခြင်း၊ log လုပ်ခြင်း၊ သို့မဟုတ် object များကို မလက်ခံရသော API များသို့ ပို့မီ primitive တန်ဖိုးများသာ ပါဝင်ကြောင်း
အတည်ပြုရန် အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> နောက်ထပ် လုပ်ဆောင်မှုများ မလုပ်မီ `unknown[]` တစ်ခုတွင် primitive တန်ဖိုးများ (string, number, bigint, boolean,
> symbol, undefined, သို့မဟုတ် null) သာ ပါဝင်ကြောင်း သေချာစေရန် လိုအပ်သည့်အခါ `arePrimitives` ကို အသုံးပြုပါ။

### အားသာချက်များ

- အရာအားလုံးက primitive တန်ဖိုးဖြစ်တဲ့အခါမှသာ `true` ကို ပြန်ပေးပြီး “object/function မပါသော” array များအတွက်
  တင်းကျပ်တဲ့ guard အဖြစ် လုပ်ဆောင်ပေးသည်။
- အမြန်ဆုံး မအောင်မြင်စေသည် (fails fast): primitive မဟုတ်တဲ့ element တစ်ခုကို တွေ့တာနဲ့ ချက်ချင်း `false` ကို
  ပြန်ပေးသည်။
- array မဟုတ်တဲ့အရာများနှင့် အလွတ် array များအတွက်လည်း (`filled-array` စစ်ဆေးမှုမှတဆင့်) `false` ကို ပြန်ပေးပြီး
  မမှန်ကန်တဲ့ input ကို မတော်တဆ လက်ခံသွားခြင်းကို တားဆီးပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `arePrimitives(array)`

ပါရာမီတာများ:

- `array`: primitive အမျိုးအစား element များ ပါ/မပါ စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // မှန်
const r2 = arePrimitives(b); // မှန်
const r3 = arePrimitives(c); // မမှန်
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.arePrimitives(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 00:05:37 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>