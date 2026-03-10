# areBuffers

## ဖော်ပြချက်

`areBuffers` သည် ပေးထားသောတန်ဖိုးသည် အလွတ်မဟုတ်ပြီး အချက်အလက်ဖြည့်ထားသော array ဖြစ်ကာ အစိတ်အပိုင်းတိုင်းသည် `Buffer`
ဖြစ်နေသလားကို စစ်ဆေးပြီး၊ ဟုတ်ပါက `true` မဟုတ်ပါက `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

ဝင်လာသော chunk array များ (ဥပမာ- streams၊ file uploads၊ သို့မဟုတ် network packets မှ) ကို အစိတ်အပိုင်းအားလုံး `Buffer`
instances ဖြစ်ကြောင်း အတည်ပြုရန် စစ်ဆေးပြီးနောက် ပေါင်းစည်းခြင်း၊ decode လုပ်ခြင်း၊ သို့မဟုတ် cryptographic သို့မဟုတ်
binary-processing function များထံ ပို့ရန် အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areBuffers` ကို `unknown[]` ကို စစ်ဆေးအတည်ပြုရန် အသုံးပြုပြီး `Buffer.concat` ကဲ့သို့ Buffer-သီးသန့် API များကို
> ခေါ်မီ အသုံးချပါ။ အစိတ်အပိုင်းတိုင်းသည် `Buffer` ဖြစ်သောအခါမှသာ function သည် `true` ကို ပြန်ပေးကြောင်း သေချာစေသည်။

### အားသာချက်များ

- အဝင်ဒေတာထဲရှိ အစိတ်အပိုင်းတိုင်းဟာ Node.js `Buffer` instance ဖြစ်ကြောင်း သေချာစေပြီး၊ အာရေးတစ်ခုလုံး ကိုက်ညီတဲ့အခါမှသာ
  `true` ကို ပြန်ပေးသည်။
- မမှန်ကန်သော အဝင်ဒေတာများကို အစောပိုင်းတွင်ပင် ပယ်ချနိုင်ရန် အလွတ်မဟုတ်ပြီး အချက်အလက်ဖြည့်ထားသော array ဖြစ်ရန်
  လိုအပ်သည်။ အလွတ် array များ သို့မဟုတ် array မဟုတ်သောတန်ဖိုးများအတွက် `false` ကို ပြန်ပေးသည်။
- buffer သာသုံးနိုင်သော လုပ်ဆောင်ချက်များ (ဥပမာ- ပေါင်းစည်းခြင်း၊ hashing၊ binary protocols) ကို လုပ်ဆောင်မီ guard အဖြစ်
  အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areBuffers(array)`

ပါရာမီတာများ:

- `array`: Buffer instances ဟုတ်မဟုတ် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areBuffers(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 16:26:22 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>