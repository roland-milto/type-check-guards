# isDecimal

## Beskrivelse

`isDecimal` sjekker om en verdi er en desimal strengrepresentasjon uten innledende/etterfølgende mellomrom og med et
gyldig desimalformat.

### Brukstilfelle

Valider skjemafelt, API-payloads eller konfigurasjonsverdier som må oppgis som en desimalstreng (valgfritt med fortegn)
uten noen omkringliggende mellomrom, før de parses eller lagres.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isDecimal` til å validere brukerinput før du konverterer den (f.eks. med `Number(value)`), spesielt når
> mellomrom må avvises.

### Fordeler

- Validerer strengt at inndata er en streng og samsvarer med et desimal-literal-mønster.
- Avviser innledende og etterfølgende mellomrom (inkludert kontrolltegn) for å unngå tvetydig parsing.
- Raske forhåndssjekker (typesjekk og første/siste tegn) før regexen kjøres.
- Returnerer et enkelt boolsk resultat (`true`/`false`) som egner seg for guards og inndatavalidering.

## Bruk

### Syntaks

Funksjon:

- `isDecimal(value)`

Parametere:

- `value`: Verdien som skal sjekkes for et desimalstrengformat.

### Lokal funksjonsimport

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v er ein streng her (køyringstid-validert)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isDecimal(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 15:53:53 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>