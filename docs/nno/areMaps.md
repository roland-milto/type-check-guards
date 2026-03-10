# areMaps

## Skildring

`areMaps` avgjer om eit gitt array er ikkje-tomt og om alle elementa er `Map`-instansar.

### Brukstilfelle

Valider ukjent input (t.d. frå JSON-parsing, eksterne API-ar eller dynamiske kjelder) før du handsamar det som ei
ikkje-tom liste med `Map`-objekt.

> **Merknad for TypeScript-brukarar:**
>
> Returnerer `false` for eit tomt array; det returnerer berre `true` når arrayet er fylt og kvart element er ein `Map`.

### Fordelar

- Sikrar at kvart element er ein `Map`-instans, og returnerer `true` berre når heile arrayet består sjekken.
- Avviser tomme array med vilje, og hindrar utilsikta godkjenning av «ingen data» som gyldig input.
- Nyttig som ein vakt før ein utfører `Map`-spesifikke operasjonar (t.d. `.get()`, `.set()`, iterasjon) på tvers av ei
  samling.

## Bruk

### Syntaks

Funksjon:

- `areMaps(array)`

Parameter:

- `array`: Arrayet som skal sjekkast.

### Lokal funksjonsimport

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items er garantert å vere ein ikkje-tom array av Map-instansar ved køyretid
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false for: tomme arrayar, eller arrayar som inneheld ein ikkje-Map-verdi
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areMaps(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 16:13:50 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>