# areBooleans

## ဖော်ပြချက်

`areBooleans` သည် ပေးထားသော အလွတ်မဟုတ်သော array တစ်ခုတွင် boolean တန်ဖိုးများသာ ပါဝင်နေသလားကို စစ်ဆေးပြီး ပါဝင်ပါက
`true` ကို ပြန်ပေးကာ မပါဝင်ပါက `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

အသုံးပြုသူပေးသော သို့မဟုတ် ပြင်ပမှလာသော ဒေတာ (ဥပမာ JSON payloads, query params, config arrays) ကို စစ်ဆေး၍ အလွတ်မဟုတ်သော
စာရင်းတစ်ခုတွင် boolean များသာ ပါဝင်ကြောင်း သေချာစေပြီးနောက် boolean logic ကို အသုံးချခြင်း သို့မဟုတ် `boolean[]` ကို
မျှော်လင့်သော APIs များသို့ ပို့ရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown[]` ကို `boolean[]` အဖြစ် သတ်မှတ်ပြီး သုံးမီ `areBooleans` ဖြင့် အတည်ပြုပါ; အလွတ် array များအတွက် `false`
> ပြန်ပေးသဖြင့် အလွတ်စာရင်းကို ခွင့်ပြုလိုပါက ထိုကိစ္စကို သီးသန့် ကိုင်တွယ်ပါ။

### အားသာချက်များ

- အင်ပတ်သည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး element အားလုံးသည် boolean ဖြစ်သောအခါမှသာ `true` ကို ပြန်ပေးသည်။
- အလွတ် array များကို ပယ်ချခြင်း ( `false` ပြန်ပေးခြင်း ) ဖြင့် false positive မဖြစ်စေရန် ကာကွယ်ပေးသည်။
- boolean သာသုံးသော လုပ်ဆောင်ချက်များ (ဥပမာ `every`, `some`, logical reductions) မလုပ်မီ runtime guard အဖြစ် သုံးရန်
  သင့်တော်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areBooleans(array)`

ပါရာမီတာများ:

- `array`: boolean element များ ပါဝင်/မပါဝင် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areBooleans(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:41:23 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>