# isSymbol

## ဖော်ပြချက်

`isSymbol` သည် ပေးထားသော တန်ဖိုးသည် `symbol` အမျိုးအစား ဟုတ်မဟုတ်ကို သတ်မှတ်ပြီး symbol ဖြစ်ပါက `true` ကို ပြန်ပေးကာ
မဟုတ်ပါက `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

`unknown` တန်ဖိုးတစ်ခုကို unique identifier၊ registry key သို့မဟုတ် objects နှင့် maps များတွင် computed property key
အဖြစ် အသုံးမပြုမီ `symbol` ဖြစ်ကြောင်း အတည်ပြုရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> symbol ဆိုင်ရာ function များကို ခေါ်မီ သို့မဟုတ် computed property key အဖြစ် အသုံးမပြုမီ `unknown` ကို `symbol` အဖြစ်
> ခွဲခြားရန် `isSymbol` ကို အသုံးပြုပါ။

### အားသာချက်များ

- JavaScript `symbol` primitive type အတွက် ရိုးရှင်းပြီး ယုံကြည်စိတ်ချရသော runtime စစ်ဆေးမှုကို ပံ့ပိုးပေးသည်။
- `unknown` တန်ဖိုးများကို symbol သီးသန့် API များကို သုံးမီ သို့မဟုတ် key အဖြစ် သိမ်းဆည်းမီ ပိုမိုတိကျစွာ
  ခွဲခြားနိုင်ရန် ကူညီပေးသည်။
- `typeof` ကို အသုံးပြုခြင်းဖြင့် မှားယွင်းသော အတည်ပြုမှုများကို ရှောင်ရှားနိုင်သည်၊ အကြောင်းမှာ `symbol` တန်ဖိုးများကို
  ရှာဖွေသတ်မှတ်ရန် စံနည်းလမ်းဖြစ်သောကြောင့် ဖြစ်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isSymbol(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // ဒီနေရာမှာ input က symbol ဖြစ်တယ်
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isSymbol(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:27:53 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>