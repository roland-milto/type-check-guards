# areStreams

## ဖော်ပြချက်

`areStreams` သည် တန်ဖိုးတစ်ခုက အစိတ်အပိုင်းတိုင်းမှာ `Stream` ဖြစ်နေသော အလွတ်မဟုတ်သည့် array ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

အသုံးပြုသူပေးထားသော သို့မဟုတ် dynamic အဖြစ် တည်ဆောက်ထားသော စုစည်းမှုများ (ဥပမာ၊ ဖိုင်ဖတ် stream များ အများအပြား) ကို
piping လုပ်ခြင်း၊ resume လုပ်ခြင်း သို့မဟုတ် အုပ်စုလိုက် လုပ်ဆောင်မီ အတည်ပြုစစ်ဆေးရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areStreams` ကို `Stream[]` အဖြစ် သဘောထားမီ unknown input ကို အတည်ပြုစစ်ဆေးရန် အသုံးပြုပါ; တန်ဖိုးသည် အလွတ်မဟုတ်သော
> array ဖြစ်ပြီး အစိတ်အပိုင်းတိုင်းက `Stream` ဖြစ်သည့်အခါမှသာ `true` ပြန်ပေးသည်။

### အားသာချက်များ

- ထည့်သွင်းထားသောတန်ဖိုးသည် အစိတ်အပိုင်းတိုင်းမှာ `Stream` ဖြစ်နေသော အလွတ်မဟုတ်သည့် array ဖြစ်ကြောင်း သေချာစေသည်။
- လုပ်ဆောင်မှုမစတင်မီ stream စုစည်းမှုများကို စစ်ဆေးအတည်ပြုရန် ရိုးရှင်းသော `true`/`false` guard ကို ပေးသည်။
- အမြန်ပျက်ကွက်စေသည်: `Stream` မဟုတ်သော အစိတ်အပိုင်းတစ်ခုကို တွေ့သည်နှင့် ချက်ချင်း `false` ပြန်ပေးသည်။
- ကုဒ်က အရာအားလုံးကို `Stream` instance များဟု ယူဆထားသည့်အခါ runtime error များ ဖြစ်ပေါ်ခြင်းကို ကာကွယ်ရန် ကူညီသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areStreams(array)`

ပါရာမီတာများ:

- `array`: Stream object များဖြစ်မဖြစ် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input သည် Stream အရာဝတ္ထုများ ပါဝင်သော အပြည့်အစုံ အာရေး ဖြစ်သည်
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areStreams(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 23:34:49 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>