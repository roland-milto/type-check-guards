# areSets

## ဖော်ပြချက်

ပေးထားသော အလွတ်မဟုတ်သော array တစ်ခုတွင် `Set` instances များသာ ပါဝင်နေသလားကို စစ်ဆေးပြီး ဟုတ်လျှင် `true` မဟုတ်လျှင်
`false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

တန်ဖိုးတစ်ခု (ဥပမာ user input, JSON parsing, သို့မဟုတ် external APIs မှ) သည် အလွတ်မဟုတ်သော `Set` objects array
ဖြစ်ကြောင်းကို set တစ်ခုချင်းစီကို ကိုင်တွယ်မလုပ်ဆောင်မီ အတည်ပြုစစ်ဆေးရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areSets` ကို အသုံးပြုပြီး မသေချာသော input ကို iterate လုပ်ပြီး element တစ်ခုချင်းစီအပေါ် `Set` APIs (ဥပမာ `.size`,
`.has`, `.add`) ကို ခေါ်သုံးမီ အတည်ပြုစစ်ဆေးပါ။

### အားသာချက်များ

- အဝင်တန်ဖိုးသည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး element တစ်ခုချင်းစီသည် `Set` instance ဖြစ်သည့်အခါမှသာ `true` ကို
  ပြန်ပေးသည်။
- array ထဲတွင် element မရှိသောအခါ `false` ကို ပြန်ပေးခြင်းဖြင့် အလွတ် array များအတွက် false positive မဖြစ်စေရန်
  ကာကွယ်ပေးသည်။
- element တစ်ခုချင်းစီအပေါ် `Set` သီးသန့် operation များကို လုပ်ဆောင်မီ runtime guard အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areSets(array)`

ပါရာမီတာများ:

- `array`: `Set` instances ဟုတ်မဟုတ် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a သည် runtime တွင် Set instance များပါဝင်သော array တစ်ခုဖြစ်သည်
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // မမှန်
console.log(areSets(c)); // မမှန်

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areSets(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areSets](../_analysis/areSets.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 23:14:24 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>