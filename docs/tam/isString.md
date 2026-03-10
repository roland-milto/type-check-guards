# isString

## விளக்கம்

`isString` கொடுக்கப்பட்ட மதிப்பு string ஆக உள்ளதா என்பதை தீர்மானிக்கிறது.

### பயன்பாட்டு நிகழ்வு

பயனர் உள்ளீடு, API payload புலங்கள், அல்லது configuration மதிப்புகளை runtime-இல் சரிபார்த்து, string செயல்பாடுகள் (
எ.கா., trimming, splitting, case conversion) பயன்படுத்துவதற்கு முன் ஒரு மதிப்பு string என்பதை உறுதிப்படுத்தவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> string methods-ஐ அழைப்பதற்கு முன் `unknown` அல்லது தளர்வான வகையிடப்பட்ட மதிப்புகளை சரிபார்க்க `isString`-ஐ
> பயன்படுத்துங்கள்; `typeof value === "string"` ஆக இருக்கும் போது மட்டுமே இது `true`-ஐ திருப்பும்.

### நன்மைகள்

- `typeof` பயன்படுத்தி எளிய மற்றும் வேகமான சரிபார்ப்பு.
- முன்கணிக்கக்கூடிய boolean முடிவை வழங்குகிறது: string களுக்கு `true`, இல்லையெனில் `false`.
- காலியான மற்றும் காலியல்லாத string களில் இரண்டிலும் வேலை செய்கிறது.
- string-க்கு குறிப்பான செயல்பாடுகளை செய்வதற்கு முன் இலகுவான runtime guard ஆக பயனுள்ளது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isString(value)`

அளவுருக்கள்:

- `value`: string வகையா என்பதைச் சோதிக்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // இங்கே input ஒரு சரம் ஆகும்
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isString(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isString](../_analysis/isString.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 13:15:50 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>