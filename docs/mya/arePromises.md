# arePromises

## ဖော်ပြချက်

`arePromises` သည် array ထဲရှိ element အားလုံးသည် `Promise` instance များဟုတ်/မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

dynamic အဖြစ် တည်ဆောက်ထားသော သို့မဟုတ် ပြင်ပမှ ပေးထားသော စာရင်းတစ်ခုတွင် promise များသာ ပါဝင်နေကြောင်းကို
စုပေါင်းမလုပ်မီ (ဥပမာ `Promise.all` ဖြင့်) အတည်ပြုရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `Promise.all` သို့မဟုတ် promise-only operation များကို ခေါ်မီ `unknown[]` ကို အတည်ပြုရန် `arePromises` ကို အသုံးပြုပါ;
> ဗလာ array များအတွက် `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- promise အထူး logic ကို ဆက်လုပ်မီ element တစ်ခုချင်းစီဟာ `Promise` ဖြစ်နေကြောင်း သေချာစေသည်။
- အချက်အလက်မပါသော array များအတွက် `false` ကို ပြန်ပေးပြီး၊ input ဗလာဖြစ်သည့်အခါ မရှင်းလင်းသော ရလဒ်များကို တားဆီးပေးသည်။
- ပြင်ပရင်းမြစ်များမှ ရလာသော `unknown[]` နှင့် အလုပ်လုပ်ရာတွင် runtime guard အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `arePromises(array)`

ပါရာမီတာများ:

- `array`: `Promise` instance များဖြစ်/မဖြစ် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values သည် runtime တွင် Promise instance များပါဝင်သော array တစ်ခုဖြစ်သည်
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.arePromises(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 23:49:11 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>