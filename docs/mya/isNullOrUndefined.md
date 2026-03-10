# isNullOrUndefined

## ဖော်ပြချက်

ပေးထားသော တန်ဖိုးသည် `null` သို့မဟုတ် `undefined` ဟုတ်မဟုတ် စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

optional input များကို စစ်ဆေးခြင်း၊ API payload များကို normalizing လုပ်ခြင်း၊ သို့မဟုတ် ပျောက်နေနိုင်သော တန်ဖိုးကို
dereference မလုပ်မီ code path များကို ကာကွယ်ခြင်းကဲ့သို့ `null` နှင့် `undefined` နှစ်မျိုးလုံးကို “တန်ဖိုးမရှိ” ဟု
သတ်မှတ်လိုသည့်အခါ `isNullOrUndefined` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> property များကို ဝင်ရောက်အသုံးပြုခြင်း သို့မဟုတ် method များကို ခေါ်ယူခြင်း မတိုင်မီ တန်ဖိုးမရှိခြင်းကို ကာကွယ်ရန်
`isNullOrUndefined` ကို အသုံးပြုပါ; ၎င်းသည် `null` နှင့် `undefined` အတွက်သာ `true` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- `null` နှင့် `undefined` ကို တစ်နေရာတည်းတွင် ရှင်းလင်းပြီး ပြန်လည်အသုံးပြုနိုင်သော guard တစ်ခုအဖြစ် စစ်ဆေးပေးသည်။
- အခြေအနေများနှင့် validation များတွင် ပေါင်းစည်းအသုံးပြုရန် လွယ်ကူသော ရိုးရှင်းသည့် boolean (`true`/`false`) ကို
  ပြန်ပေးသည်။
- property များကို ဝင်ရောက်အသုံးပြုခြင်း သို့မဟုတ် method များကို ခေါ်ယူခြင်း မတိုင်မီ တန်ဖိုးမရှိခြင်းကို
  စစ်ဆေးပေးခြင်းဖြင့် ပုံမှန်တွေ့ရသော runtime error များကို ရှောင်ရှားရန် ကူညီပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isNullOrUndefined(value)`

ပါရာမီတာများ:

- `value`: `null` သို့မဟုတ် `undefined` ဟုတ်မဟုတ် စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // ပျောက်နေသော တန်ဖိုးကို ကိုင်တွယ်ပါ
}

console.log(isNullOrUndefined(b)); // မှန်
console.log(isNullOrUndefined(c)); // မှား

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isNullOrUndefined(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 00:34:32 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>