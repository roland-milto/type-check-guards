# isEmpty

## விளக்கம்

கொடுக்கப்பட்ட மதிப்பு வெறுமையா என்பதைத் தீர்மானித்து, `null`, `undefined`, காலி/whitespace சரங்கள், காலி arrays, காலி
`Map`/`Set`, அல்லது சொந்த enumerable பண்புகள் இல்லாத objects ஆகியவற்றிற்கு `true`-ஐத் திருப்புகிறது.

### பயன்பாட்டு நிகழ்வு

`isEmpty`-ஐப் பயன்படுத்தி பல தரவு வகைகளில் உள்ளீடுகளைச் சரிபார்த்து, காணாமல் போன/காலியான மதிப்புகளை கண்டறியலாம் (எ.கா.,
form fields, API payloads, configuration objects) — இதில் `null`, `undefined`, whitespace சரங்கள், காலி collections,
மற்றும் பண்புகள் இல்லாத objects ஆகியவை வெறுமையாகக் கருதப்பட வேண்டும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `isEmpty` என்பது boolean-ஐத் திருப்பும் utility (TypeScript type predicate அல்ல), ஆகவே இது தனியாக types-ஐ narrow
> செய்யாது; compile-time narrowing-க்கு பதிலாக validation/branching-க்கு இதைப் பயன்படுத்துங்கள்.

### நன்மைகள்

- வெறுமைச் சோதனைகளில் `null` மற்றும் `undefined`-ஐ `true` எனக் கருதுகிறது.
- நீளத்தைச் சரிபார்ப்பதற்கு முன் trim செய்து, வெறும் whitespace உள்ள சரங்களை வெறுமையாகக் கருதுகிறது.
- பொதுவான container வகைகள் (arrays, `Map`, `Set`) மற்றும் சொந்த enumerable பண்புகள் இல்லாத plain objects-ஐ ஆதரிக்கிறது.
- `hasOwnProperty` சோதனைகளைப் பயன்படுத்தி மரபுரிமை (inherited) பண்புகளை எண்ணுவதைத் தவிர்க்கிறது.
- guards மற்றும் validation-க்கு ஏற்ற எளிய boolean முடிவை (`true`/`false`) திருப்புகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isEmpty(value)`

அளவுருக்கள்:

- `value`: வெறுமையா என்பதைச் சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isEmpty(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>இந்த கோப்பு 6 February 2026 at 16:21:05 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>