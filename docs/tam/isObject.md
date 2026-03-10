# isObject

## விளக்கம்

கொடுக்கப்பட்ட `value` ஒரு `object` ஆக உள்ளதா (`null` ஐத் தவிர்த்து) என்பதை நிர்ணயிக்கிறது.

### பயன்பாட்டு நிகழ்வு

properties ஐ அணுகுவதற்கு முன் தெரியாத உள்ளீடுகளை (எ.கா., parse செய்யப்பட்ட JSON, API responses, event payloads)
சரிபார்க்க `isObject` ஐப் பயன்படுத்தவும்; இதனால் அந்த மதிப்பு `null` அல்லாத ஒரு object என்பதை உறுதி செய்யலாம்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `isObject` என்பது boolean ஐத் திருப்பும் runtime guard; இது ஒரு குறிப்பிட்ட object வடிவத்திற்கு narrow செய்யாது.
> வலுவான typing தேவைப்படும் போது கூடுதல் சரிபார்ப்புகளுடன் (எ.கா., property இருப்பு) இதை இணைக்கவும்.

### நன்மைகள்

- `typeof` என்பது `"object"` ஆக இருக்கும் `null` அல்லாத மதிப்புகளுக்கு மட்டுமே `true` ஐத் திருப்புகிறது.
- `null` ஐ ஒரு object ஆகக் கருதிவிடும் பொதுவான JavaScript சிக்கலைத் தவிர்க்கிறது.
- சாதாரண objects மற்றும் உட்பொதிந்த object instances (எ.கா., `Date`, `RegExp`) ஆகியவற்றிற்கு வேலை செய்கிறது.
- பாதுகாப்பு நோக்கிலான நிரலாக்கம் மற்றும் உள்ளீடு சரிபார்ப்புக்கு ஏற்ற எளிய, வேகமான runtime சரிபார்ப்பு.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isObject(value)`

அளவுருக்கள்:

- `value`: `object` ஆக உள்ளதா என்பதைச் சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // இயக்க நேரத்தில் input என்பது null அல்லாத ஒரு பொருள்
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isObject(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isObject](../_analysis/isObject.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 00:20:34 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>