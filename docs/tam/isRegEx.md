# isRegEx

## விளக்கம்

வழங்கப்பட்ட மதிப்பு ஒரு `RegExp` instance ஆக உள்ளதா என்பதை நிர்ணயிக்கிறது.

### பயன்பாட்டு நிகழ்வு

பயனர் வழங்கும் அல்லது dynamic மதிப்புகளை (எ.கா., configuration, API payloads, plugin inputs) regular expression ஆகக்
கருதுவதற்கு முன் சரிபார்க்கவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown` (அல்லது union) மதிப்புகளை RegExp-க்கு உரிய properties அல்லது methods பயன்படுத்துவதற்கு முன் குறுகச் செய்ய
`isRegEx`-ஐ பயன்படுத்துங்கள்; இது `RegExp`-ன் instances ஆக உள்ள மதிப்புகளுக்கு மட்டுமே `true`-ஐ திருப்பும்.

### நன்மைகள்

- ஒரு மதிப்பு `RegExp` ஆக உள்ளதா என்பதைச் சரிபார்க்க எளிய runtime வகை guard-ஐ வழங்குகிறது.
- குறியீடு ஒரு regular expression-ஐ எதிர்பார்க்கும் போது (எ.கா., `test`, `exec` அழைப்பதற்கு முன், அல்லது `source`-ஐ
  வாசிப்பதற்கு முன்) பிழைகளைத் தவிர்க்க உதவுகிறது.
- regex literals மற்றும் `new RegExp(...)` மூலம் உருவாக்கப்பட்ட instances இரண்டுடனும் வேலை செய்கிறது.
- regex அல்லாத உள்ளீடுகளுக்கு throw செய்யாமல் தெளிவான boolean முடிவை (`true`/`false`) திருப்புகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isRegEx(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // இங்கு input ஒரு RegExp ஆகும்
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isRegEx(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 23:31:13 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>