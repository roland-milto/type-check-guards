# isOfType

## விளக்கம்

primitive வகைகளுக்கு `typeof`-ஐ பயன்படுத்தியும், சிக்கலான வகைகளுக்கு fallback-ஐ பயன்படுத்தியும், கொடுக்கப்பட்ட `value`
ஒரு குறிப்பிட்ட type string-க்கு பொருந்துகிறதா என்பதை நிர்ணயிக்கிறது.

### பயன்பாட்டு நிகழ்வு

ஒரு மதிப்பு எதிர்பார்க்கப்படும் type string-ஆக உள்ளதா என்பதைச் சரிபார்த்து, type-க்கு உரிய செயல்பாடுகளைச் செய்வதற்கு
முன் `unknown` உள்ளீடுகளை (எ.கா., API பதில்கள், பயனர் உள்ளீடு, parse செய்யப்பட்ட JSON) சரிபார்த்து குறுகலாக்க (narrow)
பயன்படுத்தவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown` மதிப்புகளுடன் வேலை செய்யும்போது runtime வகைகளின் அடிப்படையில் branching செய்ய `isOfType`-ஐ பயன்படுத்துங்கள்;
> இது `true`/`false`-ஐ திருப்புகிறது மற்றும் `null` மற்றும் `undefined`-ஐ வெளிப்படையாகக் கையாளுகிறது.

### நன்மைகள்

- வேகம் மற்றும் தெளிவுக்காக நேரடி `typeof` மூலம் primitive வகைகளைச் சரிபார்க்கிறது.
- `typeof` மட்டும் நோக்கமிட்டபடி வேறுபடுத்த முடியாத `null` மற்றும் `undefined`-ஐ சரியாக கையாளுகிறது.
- `getTypeOf`-ஐ பயன்படுத்தும் fallback ஒப்பீட்டின் மூலம் சிக்கலான அல்லது தனிப்பயன் வகை string-களையும் ஆதரிக்கிறது.
- guards மற்றும் branching-க்கு ஏற்ற எளிய boolean முடிவை (`true`/`false`) திருப்புகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isOfType(value, type)`

அளவுருக்கள்:

- `value`: `type`-க்கு எதிராகச் சோதிக்க வேண்டிய மதிப்பு.
- `type`: சரிபார்க்க வேண்டிய வகையின் string பிரதிநிதித்துவம்.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // இங்கே input ஒரு எண் ஆகும்
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // இங்கே input ஒரு சரம் ஆகும்
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isOfType(value, type)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 17:06:45 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>