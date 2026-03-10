# isNumeric

## விளக்கம்

`isNumeric` என்பது, கொடுக்கப்பட்ட `value`-இன் தீர்மானிக்கப்பட்ட வகையை `NUMERIC_TYPES`-க்கு எதிராகச் சரிபார்த்து, அது எண்
எனக் கருதப்படுகிறதா என்பதை நிர்ணயிக்கிறது.

### பயன்பாட்டு நிகழ்வு

எண் செயல்பாடுகளைச் செய்வதற்கு முன் உள்ளீடுகளை (எ.கா., API payloads, form values, configuration) சரிபார்க்கவும், மேலும்
`NUMERIC_TYPES`-க்கு ஏற்ப (`BigInt` போன்ற) எண் போன்ற வகைகளை ஒரே மாதிரியாக ஏற்கவும் `isNumeric`-ஐ பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `isNumeric` என்பது boolean-ஐத் திருப்பி அளிக்கும் predicate; ஒரு மதிப்பு நூலகம் வரையறுத்த எண் வகை தொகுப்பில் சேர்ந்ததா
> என்பதை அறிய இதை runtime check ஆகக் கருதுங்கள்.

### நன்மைகள்

- `getTypeOf` மற்றும் `NUMERIC_TYPES`-ஐ பயன்படுத்தி எண் கண்டறிதல் தர்க்கத்தை மையப்படுத்துகிறது; இதனால் ஒரு codebase
  முழுவதும் சரிபார்ப்புகள் ஒரே மாதிரியாக இருக்கும்.
- எளிதான branching மற்றும் guard-பாணி பயன்பாட்டிற்காக ஒரு எளிய boolean (`true`/`false`) ஐத் திருப்பி அளிக்கிறது.
- `NUMERIC_TYPES` மூலம் வரையறுக்கப்பட்ட பல எண் பிரதிநிதிப்புகளை (எ.கா., `number`, `BigInt`) ஆதரிக்கிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isNumeric(value)`

அளவுருக்கள்:

- `value`: எண் வகையா என்பதைச் சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // நூலகத்தின் வகை விதிகளின்படி v எண் வகையாகக் கருதப்படுகிறது
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isNumeric(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>இந்த கோப்பு 6 February 2026 at 15:54:46 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>