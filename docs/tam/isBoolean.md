# isBoolean

## விளக்கம்

கொடுக்கப்பட்ட மதிப்பு `boolean` ஆக உள்ளதா என்பதைத் தீர்மானிக்கிறது.

### பயன்பாட்டு நிகழ்வு

வெளிப்புற அல்லது வகையிடப்படாத தரவை (எ.கா., சூழல் மாறிகள், JSON payloads, query parameters) சரிபார்த்து, நிபந்தனைத்
தர்க்கத்தில் பயன்படுத்துவதற்கு முன் ஒரு மதிப்பு `boolean` என்பதை உறுதிசெய்யவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> பூலியன் செயல்பாடுகளைப் பயன்படுத்துவதற்கு முன் `unknown` ஐ `boolean` ஆக குறுக்க `isBoolean` ஐப் பயன்படுத்தவும்.

### நன்மைகள்

- `typeof` பயன்படுத்தி எளிய மற்றும் வேகமான இயக்கநேரச் சரிபார்ப்பு.
- பூலியன்-சார்ந்த தர்க்கத்தைப் பயன்படுத்துவதற்கு முன் தெரியாத உள்ளீட்டைச் சரிபார்க்க உதவுகிறது.
- முன்கணிக்கக்கூடிய `boolean` முடிவை (`true`/`false`) திருப்பி அளிக்கிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isBoolean(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // இங்கே input ஒரு boolean ஆகும்
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isBoolean(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 14:38:05 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>