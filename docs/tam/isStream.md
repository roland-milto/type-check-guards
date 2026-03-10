# isStream

## விளக்கம்

`isStream` கொடுக்கப்பட்ட மதிப்பு ஒரு stream பொருளா (Node.js stream போன்றது, `ReadableStream`, அல்லது `WritableStream`)
என்பதைச் சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

உள்ளீடுகள் சாதாரண பொருட்களாகவோ அல்லது streams ஆகவோ இருக்கக்கூடிய சூழலில் (எ.கா., கோப்பு பதிவேற்றங்கள், HTTP bodies,
அல்லது processing pipelines) அவற்றை சரிபார்த்து, மதிப்பு stream ஆக உள்ளதா என்பதின் அடிப்படையில் தர்க்கத்தை
கிளைப்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> stream முறைகளை அழைப்பதற்கு முன் `unknown` ஐ குறுக்க (narrow) `isStream` ஐ பயன்படுத்துங்கள்; இது Node.js stream போன்ற
> பொருட்களை (`pipe`/`on` மூலம்) மற்றும் அந்த globals இருந்தால் Web Streams (`ReadableStream`/`WritableStream`) ஐ அடையாளம்
> காண்கிறது.

### நன்மைகள்

- `pipe` மற்றும் `on` செயல்பாடுகள் உள்ளதா என்பதைச் சரிபார்த்து, பொதுவான Node.js stream போன்ற பொருட்களை பாதுகாப்பாக
  கண்டறிகிறது.
- கிடைக்கும்போது `ReadableStream` மற்றும் `WritableStream` ஐ அடையாளம் கண்டு Web Streams-ஐயும் ஆதரிக்கிறது.
- காவல்கள் (guards) மற்றும் கிளை தர்க்கம் (branching logic) க்கு ஏற்ற எளிய boolean முடிவை (`true`/`false`)
  திருப்புகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isStream(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream என்பது ஸ்ட்ரீம் போன்றது; பொதுவான ஸ்ட்ரீம் APIகளை நீங்கள் பாதுகாப்பாக பயன்படுத்தலாம்
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isStream(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isStream](../_analysis/isStream.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 23:43:15 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>