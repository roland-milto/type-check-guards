# isOfType

## ဖော်ပြချက်

ပေးထားသော `value` သည် သတ်မှတ်ထားသော type string နှင့် ကိုက်ညီမှုရှိမရှိကို သတ်မှတ်ပေးပြီး primitives များအတွက် `typeof`
ကို သုံးကာ ရှုပ်ထွေးသော type များအတွက် fallback ကို အသုံးပြုသည်။

### အသုံးပြုမှုကိစ္စ

type-specific လုပ်ဆောင်ချက်များကို မလုပ်ဆောင်မီ တန်ဖိုးတစ်ခုသည် မျှော်မှန်းထားသော type string တစ်ခုဖြစ်မဖြစ်ကို
စစ်ဆေးခြင်းဖြင့် `unknown` input များ (ဥပမာ API responses, user input, parsed JSON) ကို အတည်ပြု၍ narrow လုပ်ရန်
အသုံးပြုသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown` တန်ဖိုးများနှင့် အလုပ်လုပ်ရာတွင် runtime type များအပေါ် မူတည်၍ ခွဲခြားလုပ်ဆောင်ရန် `isOfType` ကို
> အသုံးပြုပါ။ ၎င်းသည် `true`/`false` ကို ပြန်ပေးပြီး `null` နှင့် `undefined` ကို သီးသန့် ထင်ရှားစွာ ကိုင်တွယ်သည်။

### အားသာချက်များ

- မြန်နှုန်းနှင့် ရှင်းလင်းမှုအတွက် primitives များကို တိုက်ရိုက် `typeof` ဖြင့် စစ်ဆေးသည်။
- `typeof` တစ်ခုတည်းဖြင့် ရည်ရွယ်သလို ခွဲခြားမရနိုင်သော `null` နှင့် `undefined` ကို မှန်ကန်စွာ ကိုင်တွယ်ပေးသည်။
- `getTypeOf` ကို အသုံးပြုသော fallback နှိုင်းယှဉ်မှုဖြင့် ရှုပ်ထွေးသော သို့မဟုတ် စိတ်ကြိုက် type string များကို
  ထောက်ပံ့ပေးသည်။
- guards နှင့် branching အတွက် သင့်တော်သော ရိုးရှင်းသော boolean ရလဒ် (`true`/`false`) ကို ပြန်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isOfType(value, type)`

ပါရာမီတာများ:

- `value`: `type` နှင့် နှိုင်းယှဉ်စစ်ဆေးရန် တန်ဖိုး။
- `type`: စစ်ဆေးမည့် type ကို ကိုယ်စားပြုသော string ပုံစံ။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // ဒီနေရာမှာ input က နံပါတ် ဖြစ်တယ်
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // ဒီနေရာမှာ input က စာတန်း ဖြစ်တယ်
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isOfType(value, type)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 17:05:16 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>