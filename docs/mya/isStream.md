# isStream

## ဖော်ပြချက်

`isStream` သည် ပေးထားသော တန်ဖိုးသည် stream အရာဝတ္ထု (Node.js stream-like, `ReadableStream`, သို့မဟုတ် `WritableStream`)
ဟုတ်မဟုတ်ကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

ထည့်သွင်းတန်ဖိုးများသည် ပုံမှန် object များ သို့မဟုတ် stream များ ဖြစ်နိုင်သည့်အခါ (ဥပမာ ဖိုင်တင်ခြင်းများ၊ HTTP body
များ၊ သို့မဟုတ် processing pipeline များ) ကို အတည်ပြုပြီး တန်ဖိုးသည် stream ဟုတ်မဟုတ်အပေါ် မူတည်၍ logic ကို
ခွဲခြားလုပ်ဆောင်ရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown` ကို stream method များ ခေါ်မီ `isStream` ဖြင့် type ကို ကျဉ်းမြောင်းစေရန် အသုံးပြုပါ။ ၎င်းသည် Node.js
> stream-like အရာဝတ္ထုများကို (`pipe`/`on` မှတစ်ဆင့်) နှင့် Web Streams (`ReadableStream`/`WritableStream`) ကို (ထို
> global များ ရှိသည့်အခါ) အသိအမှတ်ပြုသည်။

### အားသာချက်များ

- `pipe` နှင့် `on` ဖန်ရှင်များကို စစ်ဆေးခြင်းဖြင့် ပုံမှန်တွေ့ရသော Node.js stream-like အရာဝတ္ထုများကို လုံခြုံစွာ
  ခွဲခြားသိရှိနိုင်သည်။
- ရရှိနိုင်သည့်အခါ `ReadableStream` နှင့် `WritableStream` ကို အသိအမှတ်ပြုခြင်းဖြင့် Web Streams ကိုလည်း ထောက်ပံ့သည်။
- guard များနှင့် branching logic အတွက် သင့်တော်သော ရိုးရှင်းသည့် boolean ရလဒ် (`true`/`false`) ကို ပြန်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isStream(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream သည် stream လိုပုံစံဖြစ်သည်; သင်သည် ပုံမှန် stream API များကို လုံခြုံစွာ အသုံးပြုနိုင်သည်
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isStream(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isStream](../_analysis/isStream.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 23:42:07 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>