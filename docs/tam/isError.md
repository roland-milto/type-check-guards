# isError

## விளக்கம்

கொடுக்கப்பட்ட `value` ஒரு `Error` இன்ஸ்டன்ஸா என்பதை சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

`catch` ப்ளாக், ஒரு callback, அல்லது வெளிப்புற நூலகம் போன்றவற்றிலிருந்து `unknown` மதிப்பு கிடைக்கும் போது, `message`,
`name`, அல்லது `stack`-ஐ வாசிப்பதற்கு முன் அது `Error` தானா என்பதை பாதுகாப்பாகத் தீர்மானிக்க `isError`-ஐ
பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown` மதிப்புகளை (`catch` இலிருந்து வரும் போன்றவை) `Error` ஆகக் கருதுவதற்கு முன் பாதுகாப்பாகச் சரிபார்க்க
`isError`-ஐ பயன்படுத்துங்கள்.

### நன்மைகள்

- ஒரு மதிப்பு `Error` இன்ஸ்டன்ஸ் தானா என்பதை எளிய ரன்டைம் சரிபார்ப்பாக வழங்குகிறது.
- `message` அல்லது `stack` போன்ற `Error` பண்புகளை அணுகுவதற்கு முன் தெரியாத உள்ளீடுகளை குறுக்க உதவுகிறது.
- `catch`, வெளிப்புற APIகள், அல்லது வகை குறிப்பிடப்படாத மூலங்களிலிருந்து வரும் மதிப்புகளை கையாளும் போது ரன்டைம்
  விதிவிலக்குகளின் அபாயத்தை குறைக்கிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isError(value)`

அளவுருக்கள்:

- `value`: `Error` வகைக்கு எதிராக சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isError(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isError](../_analysis/isError.md)

<br>

---

<small>இந்த கோப்பு 6 February 2026 at 12:47:16 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>