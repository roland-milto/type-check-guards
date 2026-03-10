# areStreams

## Përshkrim

`areStreams` përcakton nëse një vlerë është një varg i mbushur në të cilin çdo element është një `Stream`.

### Rast përdorimi

Vërteto koleksione të ofruara nga përdoruesi ose të ndërtuara në mënyrë dinamike (p.sh., disa stream-e leximi skedarësh)
përpara se t’i lidhësh (pipe), t’i rifillosh (resume) ose të kryesh veprime të tjera mbi to si grup.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areStreams` për të vërtetuar hyrje të panjohura përpara se ta trajtosh si `Stream[]`; kthen `true` vetëm kur
> vlera është një varg jo-bosh dhe çdo element është një `Stream`.

### Përparësi

- Siguron që një hyrje është një varg i mbushur ku çdo element është një `Stream`.
- Ofron një kontroll të thjeshtë `true`/`false` për të vërtetuar koleksionet e stream-eve përpara përpunimit.
- Dështon shpejt: kthen `false` sapo të gjendet një element që nuk është `Stream`.
- Ndihmon në parandalimin e gabimeve në kohë ekzekutimi kur kodi supozon se të gjithë elementët janë instanca `Stream`.

## Përdorim

### Sintaksë

Funksion:

- `areStreams(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për objekte Stream.

### Import lokal i funksionit

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input është një varg i mbushur me objekte Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areStreams(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:35:43 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>