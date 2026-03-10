# isString

## ဖော်ပြချက်

`isString` သည် ပေးထားသော တန်ဖိုးတစ်ခုသည် string ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

အသုံးပြုသူ input၊ API payload field များ၊ သို့မဟုတ် configuration value များကို runtime တွင် စစ်ဆေးပြီး string
ဟုတ်ကြောင်း သေချာစေရန် (ဥပမာ trimming, splitting, case conversion ကဲ့သို့) string လုပ်ဆောင်ချက်များကို အသုံးမပြုမီ
အတည်ပြုရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown` သို့မဟုတ် type မတိကျသော တန်ဖိုးများကို string method များ ခေါ်မီ စစ်ဆေးရန် `isString` ကို အသုံးပြုပါ;
`typeof value === "string"` ဖြစ်သည့်အခါတွင်သာ `true` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- `typeof` ကို သုံးပြီး ရိုးရှင်းပြီး မြန်ဆန်စွာ စစ်ဆေးနိုင်သည်။
- ခန့်မှန်းနိုင်သော boolean ရလဒ်ကို ပြန်ပေးသည်: string များအတွက် `true`၊ အခြားအရာများအတွက် `false`။
- အလွတ် string နှင့် အလွတ်မဟုတ်သော string နှစ်မျိုးလုံးအတွက် အလုပ်လုပ်သည်။
- string သီးသန့် လုပ်ဆောင်ချက်များကို လုပ်မီ runtime guard အဖြစ် ပေါ့ပါးစွာ အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isString(value)`

ပါရာမီတာများ:

- `value`: string အမျိုးအစား ဟုတ်မဟုတ် စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // ဒီနေရာမှာ input က စာသား (string) ဖြစ်တယ်
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isString(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isString](../_analysis/isString.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 13:14:52 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>