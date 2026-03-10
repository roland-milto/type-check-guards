# areStreams

## Disgrifiad

Mae `areStreams` yn penderfynu a yw gwerth yn arae wedi’i llenwi lle mae pob elfen yn `Stream`.

### Achos defnydd

Dilysu casgliadau a ddarperir gan ddefnyddwyr neu a adeiladir yn ddeinamig (e.e., ffrydiau darllen ffeil lluosog) cyn eu
pibellu, eu hailddechrau, neu eu gweithredu fel grŵp.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areStreams` i ddilysu mewnbwn anhysbys cyn ei drin fel `Stream[]`; mae’n dychwelyd `true` dim ond pan
> fo’r gwerth yn arae nad yw’n wag a bod pob elfen yn `Stream`.

### Manteision

- Yn sicrhau bod mewnbwn yn arae wedi’i llenwi lle mae pob elfen yn `Stream`.
- Yn darparu gwarchodwr `true`/`false` syml ar gyfer dilysu casgliadau o ffrydiau cyn eu prosesu.
- Yn methu’n gyflym: yn dychwelyd `false` cyn gynted ag y canfyddir elfen nad yw’n `Stream`.
- Yn helpu i atal gwallau amser rhedeg pan fo cod yn tybio bod pob eitem yn enghreifftiau `Stream`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areStreams(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio am wrthrychau Stream.

### Mewnforio swyddogaeth leol

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // mae input yn arae wedi'i lenwi o wrthrychau Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areStreams(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 23:33:27 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>