# isDecimal

## Skildring

`isDecimal` sjekkar om ein verdi er ei desimalstreng-representasjon utan innleiande/avsluttande blankteikn og med eit
gyldig desimalformat.

### Brukstilfelle

Validér skjemafelt, API-nyttelastar eller konfigurasjonsverdiar som må oppgjevast som ein desimalstreng (valfritt med
fortegn) utan blankteikn rundt, før tolking eller lagring.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isDecimal` til å validere brukarinnput før du konverterer det (t.d. med `Number(value)`), særleg når blankteikn
> må avvisast.

### Fordelar

- Validerer strengt at inndata er ein streng og samsvarar med eit desimal-litteral-mønster.
- Avviser innleiande og avsluttande blankteikn (inkludert kontrollteikn) for å unngå tvetydig tolking.
- Raske førehandskontrollar (typekontroll og første/siste teikn) før regexen blir køyrd.
- Returnerer eit enkelt boolsk resultat (`true`/`false`) som passar for vakter og inndatavalidering.

## Bruk

### Syntaks

Funksjon:

- `isDecimal(value)`

Parameter:

- `value`: Verdien som skal kontrollerast for desimalstrengformat.

### Lokal funksjonsimport

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v er ein streng her (køyretidsvalidert)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isDecimal(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 15:53:48 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>