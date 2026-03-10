# isHexadecimal

## ဖော်ပြချက်

`isHexadecimal` သည် ပေးထားသော တန်ဖိုးတစ်ခုသည် မဖြစ်မနေ `0x`/`0X` prefix ပါသော hexadecimal string literal ဟုတ်မဟုတ်ကို
စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

`isHexadecimal` ကို configuration values, API payload fields, သို့မဟုတ် CLI arguments များတွင် hexadecimal string
literals (ဥပမာ IDs, masks, သို့မဟုတ် addresses) အဖြစ် ပေးရမည့်အရာများကို စစ်ဆေးရန် အသုံးပြုပါ၊ ထို့အပြင် ပတ်လည်
whitespace မပါဝင်ရပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> parse သို့မဟုတ် convert မလုပ်မီ user input သို့မဟုတ် serialized data ကို တင်းကျပ်သော hexadecimal literal string (
`0x`/`0X` prefix ပါဝင်ရမည်) အဖြစ် အတည်ပြုရန် လိုအပ်သည့်အခါ `isHexadecimal` ကို အသုံးပြုပါ။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုသည် စာတန်း (string) ဖြစ်ကြောင်းနှင့် တင်းကျပ်သော hexadecimal literal ဖော်မတ် ( `0x`/`0X` prefix လိုအပ်)
  နှင့် ကိုက်ညီကြောင်း စစ်ဆေးပေးသည်။
- ရှေ့/နောက် whitespace ပါသော စာတန်းများကို ငြင်းပယ်ပြီး၊ padding ပါသော input ကို မတော်တဆ လက်ခံမိခြင်းကို ရှောင်ရှားရန်
  ကူညီပေးသည်။
- optional sign ကို ထောက်ပံ့ပြီး prefix နှင့် digit များအတွက် case-insensitive ဖြစ်သဖြင့် `true`/`false` ကို
  ခန့်မှန်းနိုင်အောင် တိတိကျကျ ပြန်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isHexadecimal(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // မှန်
isHexadecimal("-0Xff"); // မှန်
isHexadecimal("1A2B"); // မမှန် (ရှေ့ဆက်စကားလုံး မပါ)
isHexadecimal(" 0x1A2B"); // မမှန် (ရှေ့ဘက် အလွတ်နေရာ)
isHexadecimal(0x1a2b); // မမှန် (စာတန်း မဟုတ်)

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isHexadecimal(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 22:59:38 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>