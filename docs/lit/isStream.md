# isStream

## Aprašymas

`isStream` patikrina, ar pateikta reikšmė yra srauto objektas (į Node.js srautą panašus, `ReadableStream` arba
`WritableStream`).

### Naudojimo atvejis

Validuokite įvestis, kurios gali būti arba paprasti objektai, arba srautai (pvz., failų įkėlimai, HTTP turiniai (body)
ar apdorojimo konvejeriai), ir šakokite logiką pagal tai, ar reikšmė yra srautas.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isStream`, kad susiaurintumėte `unknown` prieš kviesdami srautų metodus; jis atpažįsta į Node.js srautus
> panašius objektus (per `pipe`/`on`) ir Web Streams (`ReadableStream`/`WritableStream`), kai tie globalūs objektai
> egzistuoja.

### Privalumai

- Saugiai aptinka įprastus į Node.js srautus panašius objektus, tikrindamas `pipe` ir `on` funkcijas.
- Taip pat palaiko Web Streams, atpažindamas `ReadableStream` ir `WritableStream`, kai jie prieinami.
- Grąžina paprastą loginį rezultatą (`true`/`false`), tinkamą apsaugoms (guard) ir šakotajai logikai.

## Naudojimas

### Sintaksė

Funkcija:

- `isStream(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream yra panašus į srautą; galite saugiai naudoti įprastas srautų API
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isStream(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isStream](../_analysis/isStream.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:41:55 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>