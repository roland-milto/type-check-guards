# isNumber

## ဖော်ပြချက်

`isNumber` သည် တန်ဖိုးတစ်ခုသည် အကန့်အသတ်ရှိပြီး `NaN` မဟုတ်သော နံပါတ်ဖြစ်/မဖြစ်ကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

မယုံကြည်ရသော အရင်းအမြစ်များ (forms, query params, JSON payloads) မှ လာသော ဂဏန်း input ကို တွက်ချက်မှု၊ သိမ်းဆည်းမှု၊
သို့မဟုတ် range စစ်ဆေးမှု မလုပ်မီ အတည်ပြုရန် အသုံးပြုပါ။ ထို့ကြောင့် အကန့်အသတ်ရှိသော နံပါတ်များသာ (`true`)
ဖြတ်သန်းနိုင်ပြီး အခြားအားလုံးသည် `false` ကို ပြန်ပေးမည်ဖြစ်သည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> ဂဏန်းတွက်ချက်မှု မလုပ်မီ `unknown` တန်ဖိုးများကို အတည်ပြုရန် `isNumber` ကို အသုံးပြုပါ; ၎င်းသည် `NaN`, `Infinity`,
> နှင့် `-Infinity` ကို ပယ်ချသည်။

### အားသာချက်များ

- အမှန်တကယ် JavaScript နံပါတ်များအတွက်သာ `true` ကို ပြန်ပေးသည် (type စစ်ဆေးမှုအပြင် `NaN` နှင့် infinity ကို
  ပယ်ချခြင်းပါဝင်သည်)။
- `NaN`, `Infinity`, သို့မဟုတ် `-Infinity` တို့က မတော်တဆ နံပါတ်အဖြစ် ဖြတ်သန်းသွားနိုင်သော အများအားဖြင့်တွေ့ရသော
  validation bug များကို တားဆီးပေးသည်။
- မသိရှိသေးသော input (ဥပမာ JSON, အသုံးပြုသူ input, ပြင်ပ API များ) အတွက် runtime guard အဖြစ် ကောင်းစွာ အသုံးချနိုင်သည်။
- ရိုးရှင်း၊ မြန်ဆန်ပြီး side-effect မရှိသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isNumber(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input သည် မှန်ကန်သော အဆုံးရှိသော ကိန်းဂဏန်း ဖြစ်သည်
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isNumber(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 13:10:04 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>