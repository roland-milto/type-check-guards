# isMap

## ဖော်ပြချက်

ပေးထားသော `value` သည် `Map` ဟုတ်မဟုတ်ကို စစ်ဆေးပြီး ဟုတ်ပါက `true` ကို ပြန်ပေးကာ မဟုတ်ပါက `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

JSON parsing, external APIs, သို့မဟုတ် user input ကဲ့သို့သောနေရာများမှ `unknown` တန်ဖိုးကို လက်ခံရရှိသောအခါ `Map`
operation များကို လုပ်ဆောင်မီ ၎င်းသည် `Map` ဖြစ်ကြောင်း သေချာစေရန် `isMap` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `isMap` သည် runtime guard တစ်ခုဖြစ်ပြီး တန်ဖိုးသည် `Map` ဖြစ်ပါက `true` ကို ပြန်ပေးကာ မဟုတ်ပါက `false` ကို ပြန်ပေးသည်။
`Map` API များကို ခေါ်မီ `unknown` ကို narrow လုပ်ရန် ၎င်းကို အသုံးပြုပါ။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုက `Map` ဟုတ်မဟုတ်ကို runtime မှာ လျင်မြန်စွာ စစ်ဆေးပေးနိုင်သည်။
- `get`, `set`, `has` စတဲ့ `Map` method များလိုအပ်တဲ့ code path များကို guard လုပ်ပေးခြင်းအားဖြင့် type error များကို
  ကာကွယ်ရန် ကူညီပေးသည်။
- `unknown` input များကို ကိုင်တွယ်ရာတွင် ပေါ့ပါးသော validation အဆင့်တစ်ခုအဖြစ် ကောင်းစွာ အလုပ်လုပ်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isMap(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isMap(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isMap](../_analysis/isMap.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 16:28:57 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>