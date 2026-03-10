# areStrings

## விளக்கம்

`areStrings` ஒரு வரிசை காலியல்லாததா மற்றும் அதன் அனைத்து உறுப்புகளும் சரங்களா என்பதைச் சரிபார்த்து, அந்த நிலையில்
மட்டும் `true` திருப்புகிறது.

### பயன்பாட்டு நிகழ்வு

வெளிப்புற அல்லது பயனர் வழங்கிய தரவை (எ.கா., query params, JSON payloads, CSV fields) சரிபார்த்து, செயலாக்குவதற்கு முன்
உங்களிடம் காலியல்லாத சரங்களின் பட்டியல் இருப்பதை உறுதிசெய்ய.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> சரம்-மட்டும் தர்க்கத்தை பயன்படுத்துவதற்கு முன் தெரியாத வரிசைகளை சரிபார்க்க `areStrings`-ஐ பயன்படுத்துங்கள்; காலியான
> வரிசைகளுக்கு இது `false` திருப்பும்.

### நன்மைகள்

- ஒவ்வொரு உறுப்பும் ஒரு சரம் (string) என்பதை உறுதிசெய்து, கலப்பு-வகை (mixed-type) வரிசைகளை `false` திருப்பி
  நிராகரிக்கிறது.
- காலியான வரிசைகளை நிராகரிக்கிறது; ஆகவே `true` என்பது காலியல்லாத சரங்களின் பட்டியலை மட்டுமே குறிக்கிறது.
- சரம்-மட்டும் செயல்பாடுகள் (எ.கா., `trim`, `toLowerCase`) செய்யும் முன் விரைவான runtime guard ஆக பயனுள்ளது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areStrings(value)`

அளவுருக்கள்:

- `value`: Expected type `string[]`.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // இயக்க நேரத்தில் input என்பது காலியல்லாத string[] ஆகும்
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areStrings(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 13:20:39 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>