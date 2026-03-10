# isArray

## ဖော်ပြချက်

`isArray` သည် ပေးထားသော တန်ဖိုးသည် array ဟုတ်မဟုတ်ကို စစ်ဆေးပြီး ဟုတ်ပါက `true` ကို ပြန်ပေးသည်၊ မဟုတ်ပါက `false` ကို
ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

မသိရသေးသော ဒေတာ (ဥပမာ၊ parsed JSON သို့မဟုတ် API responses) ကို အတည်ပြုစစ်ဆေးပြီး iterate လုပ်ခြင်း၊ index ဖြင့်
ဝင်ရောက်ခြင်း သို့မဟုတ် `.length` ကို ဝင်ရောက်အသုံးပြုမီ တန်ဖိုးသည် array ဖြစ်ကြောင်း သေချာစေရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> arrays အတွက် runtime check လိုအပ်သည့်အခါ `isArray` ကို အသုံးပြုပါ; ၎င်းသည် boolean ကို ပြန်ပေးပြီး `unknown`
> တန်ဖိုးများနှင့်လည်း လုံခြုံစွာ ခေါ်သုံးနိုင်သည်။

### အားသာချက်များ

- realm များအကြား (ဥပမာ၊ iframes) တွင် array ကို ယုံကြည်စိတ်ချရစွာ ခွဲခြားသိရှိနိုင်ရန် built-in `Array.isArray` ကို
  အသုံးပြုသည်။
- guards နှင့် branching logic အတွက် သင့်တော်သော ရိုးရှင်းသည့် boolean ရလဒ် (`true`/`false`) ကို ပြန်ပေးသည်။
- parameter သည် `unknown` ဖြစ်သောကြောင့် input အမျိုးအစားမရွေး အလုပ်လုပ်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isArray(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // runtime မှာ input က array တစ်ခု ဖြစ်တယ်
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isArray(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isArray](../_analysis/isArray.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 11:31:20 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>