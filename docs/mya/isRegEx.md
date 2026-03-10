# isRegEx

## ဖော်ပြချက်

ပေးထားသော တန်ဖိုးသည် `RegExp` instance ဟုတ်မဟုတ်ကို သတ်မှတ်သည်။

### အသုံးပြုမှုကိစ္စ

အသုံးပြုသူပေးသော သို့မဟုတ် dynamic တန်ဖိုးများ (ဥပမာ configuration, API payloads, plugin inputs) ကို regular expression
အဖြစ် သတ်မှတ်အသုံးမပြုမီ အတည်ပြုစစ်ဆေးရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `RegExp` သီးသန့် property သို့မဟုတ် method များကို အသုံးမပြုမီ `unknown` (သို့မဟုတ် union) တန်ဖိုးများကို narrow
> လုပ်ရန် `isRegEx` ကို အသုံးပြုပါ; ၎င်းသည် `RegExp` ၏ instance ဖြစ်သော တန်ဖိုးများအတွက်သာ `true` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- `RegExp` ဟုတ်မဟုတ် စစ်ဆေးရန် ရိုးရှင်းသော runtime type guard ကို ပေးသည်။
- ကုဒ်က regular expression ကို မျှော်လင့်နေသည့်အခါ (ဥပမာ `test`, `exec` ကို ခေါ်မီ သို့မဟုတ် `source` ကို ဖတ်မီ)
  အမှားများကို ကာကွယ်ရန် ကူညီသည်။
- regex literal များနှင့် `new RegExp(...)` ဖြင့် ဖန်တီးထားသော instance များ နှစ်မျိုးလုံးနှင့် အလုပ်လုပ်သည်။
- regex မဟုတ်သော input များအတွက် error မပစ်ဘဲ ရှင်းလင်းသော boolean ရလဒ် (`true`/`false`) ကို ပြန်ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isRegEx(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // ဒီနေရာမှာ input က RegExp ဖြစ်တယ်
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isRegEx(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 23:30:14 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>