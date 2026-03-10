# isDate

## ဖော်ပြချက်

`isDate` သည် ပေးထားသော တန်ဖိုးတစ်ခုက `Date` ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးပြီး `Date` instance များအတွက် `true` ကို ပြန်ပေးကာ
အခြားအရာများအတွက် `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

`toISOString()` ကို ခေါ်ခြင်း၊ နှိုင်းယှဉ်ခြင်း၊ format ပြုလုပ်ခြင်း စသည့် `Date` လုပ်ဆောင်ချက်များ မလုပ်မီ မသိသေးသော
တန်ဖိုးများ (ဥပမာ request data, config values, သို့မဟုတ် parsed JSON) ကို စစ်ဆေးပြီး `Date` အဖြစ် ကျဉ်းမြောင်း (narrow)
သတ်မှတ်ရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> runtime တွင် `unknown` ကို `Date` သို့ ကျဉ်းမြောင်း (narrow) စေရန် `isDate` ကို သုံးပါ; အမှန်တကယ် `Date` instance
> များအတွက်သာ `true` ကို ပြန်ပေးသည် (date string များအတွက် မဟုတ်)။

### အားသာချက်များ

- `Date` ဟုတ်မဟုတ်ကို စစ်ဆေးရန် ရိုးရှင်းသော runtime guard တစ်ခုကို ပံ့ပိုးပေးသည်။
- စစ်ဆေးမှုကို `Date` instance များသာ ဖြတ်သန်းနိုင်အောင် သေချာစေခြင်းဖြင့် type error များကို ကာကွယ်ရန် ကူညီပေးသည်။
- ရက်စွဲဆိုင်ရာ method များကို မသုံးမီ မသိသေးသော input များ (ဥပမာ API payload များ) ကို စစ်ဆေးရန် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isDate(value)`

ပါရာမီတာများ:

- `value`: `Date` အမျိုးအစားဟုတ်မဟုတ် စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // ဒီနေရာမှာ input က Date ဖြစ်တယ်
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isDate(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isDate](../_analysis/isDate.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 15:46:54 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>