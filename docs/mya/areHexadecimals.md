# areHexadecimals

## ဖော်ပြချက်

array ထဲရှိ အစိတ်အပိုင်းအားလုံးဟာ hexadecimal စာတန်းများ ဟုတ်မဟုတ် စစ်ဆေးပြီး၊ အလွတ်မဟုတ်သော array များတွင်
အရာအားလုံးမှန်ကန်တဲ့အခါမှသာ `true` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

hexadecimal parsing သို့မဟုတ် နောက်ထပ် လုပ်ဆောင်မှုများ မလုပ်မီ user input သို့မဟုတ် ပြင်ပဒေတာ (ဥပမာ IDs, checksums,
ရှေ့မှာ '#' မပါသော color codes) ကို စစ်ဆေးရန် `areHexadecimals` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areHexadecimals` ကို မသိရသေးသော input ကို parse လုပ်ခြင်း သို့မဟုတ် တန်ဖိုးများကို ပြောင်းလဲခြင်း မလုပ်မီ စစ်ဆေးရန်
> အသုံးပြုပါ (ဥပမာ `parseInt(value, 16)` မလုပ်မီ သို့မဟုတ် BigInt ပြောင်းလဲမှုများ မလုပ်မီ)။

### အားသာချက်များ

- အချက်အလက်တိုင်းဟာ hexadecimal စာတန်းဖြစ်ကြောင်း စစ်ဆေးပြီး အရာအားလုံးကိုက်ညီတဲ့အခါမှသာ `true` ကို ပြန်ပေးသည်။
- ဒီဇိုင်းအရ အလွတ် array များကို လက်မခံဘဲ input ဒေတာမရှိပါက `false` ကို ပြန်ပေးသည်။
- guards နှင့် early-return validation အတွက် သင့်တော်သော ရိုးရှင်းတဲ့ boolean ရလဒ် (`true`/`false`) ကို ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areHexadecimals(array)`

ပါရာမီတာများ:

- `array`: hexadecimal စာတန်း အစိတ်အပိုင်းများ ပါဝင်မပါဝင် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areHexadecimals(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 23:07:05 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>