# areMaps

## Beskrivelse

`areMaps` avgjør om et gitt array er ikke-tomt og om alle elementene er `Map`-instanser.

### Brukstilfelle

Valider ukjent input (f.eks. fra JSON-parsing, eksterne API-er eller dynamiske kilder) før du behandler det som en
ikke-tom liste med `Map`-objekter.

> **Merknad for TypeScript-brukere:**
>
> Returnerer `false` for et tomt array; den returnerer bare `true` når arrayet er fylt og hvert element er en `Map`.

### Fordeler

- Sikrer at hvert element er en `Map`-instans, og returnerer `true` bare når hele arrayet består testen.
- Avviser tomme arrayer med vilje, og forhindrer utilsiktet godkjenning av «ingen data» som gyldig input.
- Nyttig som en guard før du utfører `Map`-spesifikke operasjoner (f.eks. `.get()`, `.set()`, iterasjon) på tvers av en
  samling.

## Bruk

### Syntaks

Funksjon:

- `areMaps(array)`

Parametere:

- `array`: Arrayet som skal sjekkes.

### Lokal funksjonsimport

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items er garantert å være en ikke-tom matrise av Map-instanser ved kjøretid
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false for: tomme matriser, eller matriser som inneholder en hvilken som helst ikke-Map-verdi
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areMaps(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 16:13:52 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>