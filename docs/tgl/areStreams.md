# areStreams

## Paglalarawan

Tinutukoy ng `areStreams` kung ang isang value ay isang napunong array kung saan ang bawat elemento ay isang `Stream`.

### Kaso ng paggamit

I-validate ang mga koleksyong ibinigay ng user o dinamikong binuo (hal., maraming file read stream) bago i-pipe,
i-resume, o kung hindi man ay operahan ang mga ito bilang isang grupo.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areStreams` para i-validate ang hindi kilalang input bago ito ituring na `Stream[]`; nagbabalik ito ng
`true` lamang kapag ang value ay isang hindi bakanteng array at ang bawat elemento ay isang `Stream`.

### Mga bentahe

- Tinitiyak na ang input ay isang napunong array kung saan ang bawat elemento ay isang `Stream`.
- Nagbibigay ng simpleng `true`/`false` na guard para sa pag-validate ng mga koleksyon ng stream bago iproseso.
- Mabilis na bumibigay: nagbabalik ng `false` sa sandaling may matagpuang elementong hindi `Stream`.
- Tumutulong na maiwasan ang mga runtime error kapag ipinapalagay ng code na lahat ng item ay mga instance ng `Stream`.

## Paggamit

### Sintaks

Function:

- `areStreams(array)`

Mga parameter:

- `array`: Ang array na susuriin kung may mga Stream object.

### Lokal na pag-import ng function

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // ang input ay isang napunong array ng mga Stream object
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areStreams(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:35:57 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>