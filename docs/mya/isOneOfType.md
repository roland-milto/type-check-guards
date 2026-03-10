# isOneOfType

## ဖော်ပြချက်

`isOneOfType` သည် ပေးထားသော `value` သည် ပံ့ပိုးထားသော type string များထဲမှ အနည်းဆုံးတစ်ခုနှင့် ကိုက်ညီမှုရှိ/မရှိကို
သတ်မှတ်ပြီး ကိုက်ညီမှုတစ်ခုခုတွေ့လျှင် `true` ကို ပြန်ပေးကာ မတွေ့လျှင် `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

loosely-typed သို့မဟုတ် ပြင်ပဒေတာ (ဥပမာ- parsed JSON, query parameters) ကို စစ်ဆေးအတည်ပြုရာတွင် နောက်ထပ် logic ကို
ဆက်လုပ်မီ လက်ခံနိုင်သော runtime type မျိုးစုံ (ဥပမာ `number` သို့မဟုတ် `string`) ကို ခွင့်ပြုထားခြင်းဖြင့် အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> တန်ဖိုးတစ်ခုသည် ခွင့်ပြုထားသော type မျိုးစုံထဲမှ မည်သည့်တစ်ခုနှင့်မဆို ကိုက်ညီမှုရှိကြောင်းကို runtime တွင်
> စစ်ဆေးလိုသည့်အခါ `isOneOfType` ကို အသုံးပြုပါ; အနည်းဆုံး type တစ်ခုကိုက်ညီလျှင် `true` ကို ပြန်ပေးပြီး မဟုတ်လျှင်
`false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ခေါ်ဆိုမှုတစ်ကြိမ်တည်းအတွင်း ခွင့်ပြုထားသော type မျိုးစုံနှင့် တန်ဖိုးတစ်ခုကို စစ်ဆေးနိုင်ပြီး ပထမဆုံးကိုက်ညီသည့်အခါ
  `true` ကို ပြန်ပေးသည်။
- `unknown` input များနှင့်လည်း အလုပ်လုပ်နိုင်သောကြောင့် runtime boundary များတွင် (ဥပမာ- ပြင်ပဒေတာ၊ အသုံးပြုသူ input)
  အသုံးဝင်သည်။
- ရိုးရှင်းသော boolean ရလဒ် (`true`/`false`) ကို ပေးပြီး conditional logic နှင့် early return များနှင့်
  ပေါင်းစပ်အသုံးပြုရန် လွယ်ကူသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isOneOfType(value, types)`

ပါရာမီတာများ:

- `value`: သတ်မှတ်ထားသော type များနှင့် နှိုင်းယှဉ်စစ်ဆေးရန် တန်ဖိုး။
- `types`: တန်ဖိုး၏ ဖြစ်နိုင်သော type များကို ကိုယ်စားပြုသော type string များပါဝင်သည့် array တစ်ခု။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // runtime မှာ input က object တစ်ခု ဖြစ်တယ်
}

console.log(isOneOfType(3, ["number", "string"])); // မှန်
console.log(isOneOfType("hello", ["number", "boolean"])); // မမှန်

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isOneOfType(value, types)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 13:53:19 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>