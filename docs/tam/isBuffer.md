# isBuffer

## விளக்கம்

ஒரு மதிப்பு Node.js `Buffer` ஆக உள்ளதா என்பதைச் சரிபார்த்து `true` அல்லது `false`-ஐ திருப்பி அளிக்கிறது.

### பயன்பாட்டு நிகழ்வு

ரன்டைமில் உள்ளீடுகளை (எ.கா., API payloads, கோப்பு தரவு, அல்லது செய்தி பஃபர்கள்) சரிபார்த்து, செயலாக்குவதற்கு முன் ஒரு
மதிப்பு `Buffer` என்பதை உறுதி செய்யவும்; மேலும் Node.js-க்கு வெளியே `Buffer` இல்லாமல் இருக்கக்கூடிய இடங்களில்
இயக்கும்போது நம்பகமாக `false`-ஐ பெறவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown` மதிப்புகளை `Buffer` ஆக குறுக்க `isBuffer`-ஐ பயன்படுத்தி, அதன் பிறகு Buffer-க்கு உரிய முறைகளை அழைக்கவும்.

### நன்மைகள்

- `Buffer.isBuffer`-ஐ பயன்படுத்தி Node.js `Buffer` இன்ஸ்டன்ஸ்களை பாதுகாப்பாக கண்டறிகிறது.
- `Buffer` கிடைக்காத சூழல்களில் `false`-ஐ திருப்பி அளிக்கிறது; இதனால் ரன்டைம் பிழைகள் தவிர்க்கப்படுகின்றன.
- `unknown` உள்ளீட்டுடன் வேலை செய்கிறது; இதனால் ரன்டைம் சரிபார்ப்பு மற்றும் வகை குறுக்கீடு (type narrowing) செய்ய
  ஏற்றதாகும்.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isBuffer(value)`

அளவுருக்கள்:

- `value`: சோதிக்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // இங்கே a ஒரு Buffer ஆகும்
  console.log(a.toString("utf8"));
}
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isBuffer(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 16:33:26 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>