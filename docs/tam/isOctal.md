# isOctal

## விளக்கம்

ஒரு மதிப்பு செல்லுபடியான எண்மம் (octal) literal string (எ.கா. `0o755`) ஆக உள்ளதா என்பதை தீர்மானிக்கிறது.

### பயன்பாட்டு நிகழ்வு

பயனர் உள்ளீடு அல்லது கட்டமைப்பு (configuration) மதிப்புகள் எண்மம் (octal) literal string ஆகவே வெளிப்படுத்தப்பட வேண்டிய
நிலையில் (உதாரணமாக, `0o644` போன்ற கோப்பு அனுமதி முறைகள்) அவற்றை parse அல்லது convert செய்வதற்கு முன் சரிபார்க்க.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `isOctal` ஒரு type guard (`value is string`). `true` முடிவுக்குப் பிறகு, TypeScript சரிபார்க்கப்பட்ட மாறியை `string`
> ஆக குறுக்குகிறது (narrow செய்கிறது).

### நன்மைகள்

- கடுமையான வகை பாதுகாப்பை வழங்குகிறது: உள்ளீடு எண்மம் (octal) literal வடிவத்துடன் பொருந்தும் ஒரு string ஆக இருக்கும்
  போது மட்டுமே `true` திருப்பும்.
- காலியான string-களையும், முன்னிலும்/பின்னிலும் whitespace (ASCII control/space) உள்ள string-களையும் நிராகரிக்கிறது;
  இதனால் தவறுதலான பொருத்தங்கள் குறைகின்றன.
- விருப்பமான sign-ஐ ஆதரிக்கிறது மற்றும் `0o`/`0O` முன்னொட்டிற்கு case-insensitive ஆக உள்ளது.
- string அல்லாத உள்ளீடுகளுக்கு exception எறியாமல் `false` திருப்புவதன் மூலம் நெகிழ்வாக செயல்படுகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isOctal(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // உண்மை
console.log(isOctal(b)); // உண்மை
console.log(isOctal(c)); // பொய்
console.log(isOctal(d)); // பொய்

if (isOctal(a)) {
  // இங்கே a ஒரு சரம்
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isOctal(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 15:43:36 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>