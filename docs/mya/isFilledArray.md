# isFilledArray

## ဖော်ပြချက်

`value` သည် element အနည်းဆုံး တစ်ခုပါဝင်သော array ဟုတ်မဟုတ်ကို စစ်ဆေးပြီး `true` သို့မဟုတ် `false` ကို ပြန်ပေးပါတယ်။

### အသုံးပြုမှုကိစ္စ

iterating လုပ်မီ၊ ပထမ element ကို ဝင်ရောက်ယူမီ၊ သို့မဟုတ် item အနည်းဆုံး တစ်ခုလိုအပ်သော logic ကို အသုံးချမီ incoming
data (ဥပမာ API payloads, form values, configuration) ကို အတည်ပြုရန် `isFilledArray` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `isFilledArray` သည် boolean ကို ပြန်ပေးသော runtime guard ဖြစ်ပြီး array သည် အလွတ်မဟုတ်ကြောင်း အတည်ပြုခြင်းထက် ပိုပြီး
> element type များကို မကျဉ်းမြောင်းစေပါ။

### အားသာချက်များ

- `Array.isArray` နဲ့ length စစ်ဆေးမှုကို သုံးပြီး အလွတ်မဟုတ်တဲ့ array ကို ရိုးရှင်းပြီး မြန်မြန် စစ်ဆေးနိုင်ပါတယ်။
- ကုဒ်က array ထဲမှာ အနည်းဆုံး element တစ်ခုရှိတယ်လို့ ယူဆထားတဲ့အခါ runtime error မဖြစ်အောင် ကူညီပေးပါတယ်။
- ရှင်းလင်းတဲ့ boolean ရလဒ်: အလွတ်မဟုတ်တဲ့ array များအတွက် `true` ကို ပြန်ပေးပြီး အခြားအခြေအနေများအတွက် `false` ကို
  ပြန်ပေးပါတယ်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isFilledArray(value)`

ပါရာမီတာများ:

- `value`: အလွတ်မဟုတ်တဲ့ array ဟုတ်မဟုတ် စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // runtime မှာ input က အလွတ်မဟုတ်တဲ့ array တစ်ခု ဖြစ်တယ်
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isFilledArray(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 11:48:00 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>