# isStream

## Descriere

`isStream` verifică dacă o valoare dată este un obiect stream (de tip stream-like Node.js, `ReadableStream` sau
`WritableStream`).

### Caz de utilizare

Validează intrări care pot fi fie obiecte simple, fie stream-uri (de ex., încărcări de fișiere, corpuri HTTP sau
pipeline-uri de procesare) și ramifică logica în funcție de faptul dacă valoarea este un stream.

> **Notă pentru utilizatorii TypeScript:**
>
> Folosește `isStream` pentru a restrânge `unknown` înainte de a apela metode de stream; recunoaște obiecte stream-like
> din Node.js (prin `pipe`/`on`) și Web Streams (`ReadableStream`/`WritableStream`) atunci când există aceste globale.

### Avantaje

- Detectează în siguranță obiecte comune de tip stream din Node.js verificând funcțiile `pipe` și `on`.
- Suportă și Web Streams prin recunoașterea `ReadableStream` și `WritableStream` atunci când sunt disponibile.
- Returnează un rezultat boolean simplu (`true`/`false`), potrivit pentru gărzi și logică de ramificare.

## Utilizare

### Sintaxă

Funcție:

- `isStream(value)`

Parametri:

- `value`: Valoarea care trebuie verificată.

### Import local al funcției

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream este de tip stream; poți folosi în siguranță API-urile comune ale stream-urilor
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Import global al obiectului

Pentru a importa funcțiile ca metode globale ale obiectului, folosește:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Următoarea metodă va fi apoi disponibilă global:

- `Type.isStream(value)`

## Analiza funcțiilor

Aici este documentată o analiză tabelară a rezultatelor obținute la introducerea unor parametri diferiți în
funcții: [isStream](../_analysis/isStream.md)

<br>

---

<small>Fișierul a fost generat la 30 January 2026 at 23:42:45 (UTC) cu utilizarea *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** de către *
*[Roland Milto](https://roland-milto.de/)**.</small>