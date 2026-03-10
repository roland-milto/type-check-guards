# isMap

## تشریح

ਇਹ ਜਾਂਚਦਾ ਹੈ ਕਿ ਦਿੱਤਾ ਗਿਆ `value` ਇੱਕ `Map` ਹੈ ਜਾਂ ਨਹੀਂ; ਜੇ ਹੈ ਤਾਂ `true` ਵਾਪਸ ਕਰਦਾ ਹੈ ਨਹੀਂ ਤਾਂ `false`।

### د کارولو بېلګه

ਜਦੋਂ ਤੁਹਾਨੂੰ ਕੋਈ `unknown` ਮੁੱਲ ਮਿਲੇ (ਜਿਵੇਂ JSON ਪਾਰਸਿੰਗ, ਬਾਹਰੀ APIs, ਜਾਂ ਯੂਜ਼ਰ ਇਨਪੁੱਟ ਤੋਂ) ਅਤੇ `Map` ਓਪਰੇਸ਼ਨ ਕਰਨ ਤੋਂ
ਪਹਿਲਾਂ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੋਵੇ ਕਿ ਇਹ `Map` ਹੈ, ਤਾਂ `isMap` ਵਰਤੋ।

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isMap` ਇੱਕ ਰਨਟਾਈਮ ਗਾਰਡ ਹੈ ਜੋ ਮੁੱਲ `Map` ਹੋਣ ਤੇ `true` ਅਤੇ ਨਹੀਂ ਹੋਣ ਤੇ `false` ਵਾਪਸ ਕਰਦਾ ਹੈ; `Map` APIs ਕਾਲ ਕਰਨ ਤੋਂ
> ਪਹਿਲਾਂ `unknown` ਨੂੰ ਨੈਰੋ ਕਰਨ ਲਈ ਇਸਦਾ ਇਸਤੇਮਾਲ ਕਰੋ।

### ګټې

- ਇਹ ਤੇਜ਼ ਰਨਟਾਈਮ ਜਾਂਚ ਦਿੰਦਾ ਹੈ ਕਿ ਕੋਈ ਮੁੱਲ `Map` ਹੈ ਜਾਂ ਨਹੀਂ।
- ਇਹ ਉਹਨਾਂ ਕੋਡ ਰਾਹਾਂ ਦੀ ਰੱਖਿਆ ਕਰਕੇ ਟਾਈਪ ਗਲਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨੂੰ `Map` ਦੇ ਮੈਥਡਾਂ ਜਿਵੇਂ `get`, `set`, ਅਤੇ `has`
  ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।
- ਜਦੋਂ `unknown` ਇਨਪੁੱਟਾਂ ਨੂੰ ਹੈਂਡਲ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੋਵੇ, ਇਹ ਹਲਕੀ-ਫੁਲਕੀ ਵੈਲੀਡੇਸ਼ਨ ਕਦਮ ਵਜੋਂ ਚੰਗਾ ਕੰਮ ਕਰਦਾ ਹੈ।

## کارونه

### سینټکس

فنکشن:

- `isMap(value)`

پارامېټرونه:

- `value`: ਜਾਂਚਣ ਲਈ ਮੁੱਲ।

### د فنکشن محلي امپورټ

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isMap(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isMap](‎../_analysis/isMap.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 16:29:33 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>