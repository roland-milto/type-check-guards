# areWeakMaps

## ဖော်ပြချက်

`areWeakMaps` သည် value တစ်ခုက element အားလုံးသည် `WeakMap` ဖြစ်သော အလွတ်မဟုတ်သည့် array ဟုတ်/မဟုတ်ကို စစ်ဆေးပြီး၊
အဲဒီအခြေအနေမှာသာ `true` ကို ပြန်ပေးကာ အခြားအခြေအနေများတွင် `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

runtime ဒေတာ (ဥပမာ parsed JSON, plugin input များ၊ သို့မဟုတ် type မတိကျသော configuration) ကို စစ်ဆေးပြီး `WeakMap`
instance များပါဝင်သော အလွတ်မဟုတ်သည့် array ဖြစ်ကြောင်း သေချာစေကာ iterate လုပ်ပြီး `WeakMap` method များကို ခေါ်သုံးမီ
validate လုပ်ရန်; element တစ်ခုခုက `WeakMap` မဟုတ်ပါက သို့မဟုတ် array အလွတ်ဖြစ်ပါက `false` ကို ပြန်ပေးသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> မသိရသေးသော input ကို အလွတ်မဟုတ်သည့် `WeakMap[]` အဖြစ် သတ်မှတ်မီ စစ်ဆေးရန် `areWeakMaps` ကို အသုံးပြုပါ; array
> အလွတ်များအတွက် `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ပေးထားသော array ထဲရှိ element တစ်ခုချင်းစီသည် `WeakMap` instance ဖြစ်ကြောင်း သေချာစေသည်။
- array အလွတ်များအတွက် `false` ကို ပြန်ပေးသဖြင့် “ဒေတာမရှိ” ကို မှားယွင်းစွာ မှန်ကန်သော input အဖြစ် လက်ခံမိခြင်းကို
  တားဆီးပေးသည်။
- item အားလုံးပေါ်တွင် `WeakMap`-သီးသန့် operation များကို လုပ်ဆောင်မီ guard အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areWeakMaps(array)`

ပါရာမီတာများ:

- `array`: `WeakMap` instance များဖြစ်/မဖြစ် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list သည် WeakMap instance များပါဝင်သော အလွတ်မဟုတ်သော array တစ်ခုဖြစ်သည်
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // အလွတ်မဟုတ်သော WeakMap[] မဟုတ်ပါ
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areWeakMaps(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 13:38:26 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>