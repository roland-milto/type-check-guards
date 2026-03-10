# areStreams

## Descriere

`areStreams` determină dacă o valoare este un tablou nevid în care fiecare element este un `Stream`.

### Caz de utilizare

Validează colecții furnizate de utilizator sau construite dinamic (de ex., mai multe stream-uri de citire a fișierelor)
înainte de a le conecta (pipe), relua (resume) sau de a opera asupra lor ca grup.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `areStreams` pentru a valida o intrare necunoscută înainte de a o trata ca `Stream[]`; returnează `true`
> doar când valoarea este un tablou nevid și fiecare element este un `Stream`.

### Avantaje

- Asigură că o intrare este un tablou nevid în care fiecare element este un `Stream`.
- Oferă o verificare simplă `true`/`false` pentru validarea colecțiilor de stream-uri înainte de procesare.
- Eșuează rapid: returnează `false` imediat ce este găsit un element care nu este `Stream`.
- Ajută la prevenirea erorilor la rulare atunci când codul presupune că toate elementele sunt instanțe `Stream`.

## Utilizare

### Sintaxă

Funcție:

- `areStreams(array)`

Parametri:

- `array`: Tabloul care trebuie verificat pentru obiecte Stream.

### Import local al funcției

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  //‎ input este un tablou plin cu obiecte Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.areStreams(array)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:35:24 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>