# isFinite

## விளக்கம்

கொடுக்கப்பட்ட `value` ஒரு முடிவுற்ற `number` ஆக உள்ளதா என்பதை நிர்ணயிக்கிறது.

### பயன்பாட்டு நிகழ்வு

எண் கணக்கீடுகளைச் செய்வதற்கு முன், தெரியாத உள்ளீட்டை (எ.கா., JSON, படிவங்கள், அல்லது APIகளிலிருந்து) சரிபார்க்க
`isFinite`-ஐ பயன்படுத்துங்கள்; இதனால் அந்த மதிப்பு உண்மையான, முடிவுற்ற எண் என்பதை உறுதிசெய்யலாம்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `isFinite` முடிவுற்ற எண்களுக்கு மட்டும் `true`-ஐ திருப்பும்; `NaN`, `Infinity`, மற்றும் எண் அல்லாத எந்த மதிப்பிற்கும்
`false`-ஐ திருப்பும்.

### நன்மைகள்

- நம்பகமான முடிவுற்றதா (finiteness) சரிபார்ப்பிற்காக உட்பொதிந்த `Number.isFinite`-ஐ பயன்படுத்துகிறது.
- முடிவுற்ற எண்களுக்கு மட்டும் `true`-ஐ திருப்பும்; `NaN`, `Infinity`, மற்றும் எண் அல்லாத உள்ளீடுகளுக்கு `false`-ஐ
  திருப்பும்.
- சரிபார்ப்பு (validation) மற்றும் காப்பு (guarding) தர்க்கத்திற்கு ஏற்ற, எளிய, பக்கவிளைவு இல்லாத predicate.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isFinite(value)`

அளவுருக்கள்:

- `value`: முடிவுற்றதா என்பதைச் சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers என்பது: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // இங்கே value ஒரு வரையறுக்கப்பட்ட எண் ஆகும்
  const doubled = value * 2;
  console.log(doubled);
}
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isFinite(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 16:31:51 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>