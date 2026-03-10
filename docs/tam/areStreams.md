# areStreams

## விளக்கம்

`areStreams` என்பது ஒரு மதிப்பு, ஒவ்வொரு கூறும் `Stream` ஆக இருக்கும் நிரப்பப்பட்ட (காலியல்லாத) வரிசையா என்பதை
நிர்ணயிக்கிறது.

### பயன்பாட்டு நிகழ்வு

பயனர் வழங்கிய அல்லது இயக்கநிலையில் உருவாக்கப்பட்ட தொகுப்புகளை (எ.கா., பல கோப்பு read stream-கள்) குழுவாக pipe
செய்வதற்கு, resume செய்வதற்கு, அல்லது வேறு விதமாக செயல்படுத்துவதற்கு முன் சரிபார்க்கவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `Stream[]` எனக் கருதுவதற்கு முன் தெரியாத (unknown) உள்ளீட்டைச் சரிபார்க்க `areStreams` ஐப் பயன்படுத்துங்கள்; மதிப்பு
> காலியல்லாத வரிசையாகவும், ஒவ்வொரு கூறும் `Stream` ஆகவும் இருந்தால் மட்டுமே இது `true` ஐத் திருப்பும்.

### நன்மைகள்

- ஒவ்வொரு கூறும் `Stream` ஆக இருக்கும் நிரப்பப்பட்ட (காலியல்லாத) வரிசை (array) என்பதைக் உறுதிசெய்கிறது.
- செயலாக்கத்திற்கு முன் stream தொகுப்புகளை சரிபார்க்க எளிய `true`/`false` guard-ஐ வழங்குகிறது.
- விரைவாக தோல்வியடைகிறது: `Stream` அல்லாத கூறு கிடைத்தவுடன் உடனே `false` ஐத் திருப்புகிறது.
- அனைத்து உருப்படிகளும் `Stream` instance-கள் என்று குறியீடு கருதும் போது ஏற்படும் runtime பிழைகளைத் தடுக்க உதவுகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areStreams(array)`

அளவுருக்கள்:

- `array`: Stream பொருட்களுக்காகச் சரிபார்க்க வேண்டிய வரிசை (array).

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input என்பது Stream பொருட்களின் நிரம்பிய வரிசை
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areStreams(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 23:35:55 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>