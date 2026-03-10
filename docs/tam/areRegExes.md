# areRegExes

## விளக்கம்

`areRegExes` என்பது ஒரு மதிப்பு `RegExp` பொருட்களை மட்டும் கொண்ட, நிரம்பிய (காலியாக இல்லாத) வரிசையா என்பதைச்
சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

ஒரு கட்டமைப்பு விருப்பம் (எ.கா., allow/deny patterns பட்டியல்) பொருத்துதலுக்கு (matching) பயன்படுத்துவதற்கு முன், அது
regular expressions-களின் காலியாக இல்லாத வரிசையா என்பதைச் சரிபார்க்கவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> மீளச்சுழற்சி (iterate) செய்யும் முன் அல்லது patterns-ஐ இணைக்கும் (compose) முன், `unknown`-ஐ `RegExp[]` ஆக குறுக்க (
> narrow) `areRegExes`-ஐ பயன்படுத்துங்கள்.

### நன்மைகள்

- ஒவ்வொரு கூறும் `RegExp` இன்ஸ்டன்ஸ் ஆக இருக்கும், காலியாக இல்லாத வரிசை (array) என்பதை ஒரு மதிப்பு உறுதிப்படுத்துகிறது.
- பயனர் உள்ளீடு அல்லது கட்டமைப்பை சரிபார்க்க ஒரு எளிய boolean காப்பு (`true`/`false`) வழங்குகிறது.
- பின்னர் வரும் குறியீடு அனைத்து உருப்படிகளும் regular-expression செயல்பாடுகளை ஆதரிக்கும் என்று கருதும் போது ஏற்படும்
  runtime பிழைகளைத் தடுக்க உதவுகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areRegExes(array)`

அளவுருக்கள்:

- `array`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // இங்கே patterns என்பது RegExp-களின் ஒரு வரிசை
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areRegExes(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 23:22:09 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>