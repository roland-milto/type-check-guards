# isPrimitive

## ဖော်ပြချက်

`isPrimitive` သည် ပေးထားသော တန်ဖိုးတစ်ခုက primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`) ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

runtime တွင် input များကို စစ်ဆေးအတည်ပြုရန် (ဥပမာ API payload fields, configuration values, သို့မဟုတ် user-provided
data) တန်ဖိုးတစ်ခုက primitive ဟုတ်မဟုတ်ကို serialization, logging, သို့မဟုတ် primitive-only လုပ်ဆောင်ချက်များကို
အသုံးချမီ သေချာစေရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown` input များကို object သို့မဟုတ် function အဖြစ် ကိုင်တွယ်မလုပ်မီ `isPrimitive` ကို guard အဖြစ် အသုံးပြုပါ;
> ၎င်းသည် primitives အတွက် `true` ပြန်ပေးပြီး objects နှင့် functions အတွက် `false` ပြန်ပေးသည်။

### အားသာချက်များ

- တန်ဖိုးတစ်ခုက JavaScript primitive ဟုတ်မဟုတ်ကို မြန်ဆန်ပြီး allocation မလိုဘဲ စစ်ဆေးနိုင်သည်။
- `null` ကို primitive အဖြစ် မှန်ကန်စွာ သတ်မှတ်ပေးသည် (`typeof null` က `"object"` ဖြစ်နေသော်လည်း)။
- object-only လုပ်ဆောင်ချက်များကို မလုပ်မီ `unknown` တန်ဖိုးများကို ပိုမိုတိကျစွာ ခွဲခြားနိုင်ရန် ကူညီပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isPrimitive(value)`

ပါရာမီတာများ:

- `value`: primitive type ဟုတ်မဟုတ် စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isPrimitive(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 23:56:59 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>