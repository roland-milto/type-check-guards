# isHexadecimal

## விளக்கம்

`isHexadecimal` என்பது கொடுக்கப்பட்ட மதிப்பு கட்டாயமான `0x`/`0X` முன்னொட்டுடன் கூடிய hexadecimal string literal ஆக
உள்ளதா என்பதைச் சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

கட்டமைப்பு (configuration) மதிப்புகள், API payload புலங்கள், அல்லது CLI arguments ஆகியவை hexadecimal string literals
ஆக (எ.கா., IDs, masks, அல்லது addresses) வழங்கப்பட வேண்டும்; மேலும் சுற்றியுள்ள whitespace இருக்கக் கூடாது என்ற நிலையில்
அவற்றைச் சரிபார்க்க `isHexadecimal` ஐப் பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> பயனர் உள்ளீடு அல்லது serialized data-வை parse அல்லது convert செய்வதற்கு முன், கடுமையான hexadecimal literal string (
`0x`/`0X` முன்னொட்டுடன்) ஆகச் சரிபார்க்க வேண்டியபோது `isHexadecimal` ஐப் பயன்படுத்துங்கள்.

### நன்மைகள்

- ஒரு மதிப்பு string என்பதைச் சரிபார்த்து, கடுமையான hexadecimal literal வடிவத்துடன் பொருந்துகிறதா என்பதை
  உறுதிப்படுத்துகிறது (`0x`/`0X` முன்னொட்டு அவசியம்).
- முன் அல்லது பின் வெற்றிடங்கள் (whitespace) உள்ள string-களை நிராகரிக்கிறது; இதனால் padding செய்யப்பட்ட உள்ளீடு தவறுதலாக
  ஏற்றுக்கொள்ளப்படுவதைத் தவிர்க்க உதவுகிறது.
- விருப்பமான sign-ஐ ஆதரிக்கிறது; மேலும் முன்னொட்டு மற்றும் இலக்கங்களுக்கு case-insensitive ஆக இருந்து, கணிக்கக்கூடிய
  வகையில் `true`/`false` ஐத் திருப்புகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isHexadecimal(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (முன்னொட்டு இல்லை)
isHexadecimal(" 0x1A2B"); // false (முன்னிலை வெற்றிடம்)
isHexadecimal(0x1a2b); // false (சரம் அல்ல)

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isHexadecimal(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 23:01:17 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>