# areBinaries

## Beskrivelse

Sjekker om den oppgitte verdien er en ikke-tom matrise av gyldige binærstrenger og returnerer `true` bare hvis alle
elementer består valideringen.

### Brukstilfelle

Bruk `areBinaries` når du mottar en ukjent liste (f.eks. fra JSON, skjemaer eller API-er) og må sikre at det er en
ikke-tom matrise av binærstrenger før du parser eller behandler den.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areBinaries` til å validere ukjent inndata før du konverterer binærstrenger til tall/BigInts; den sikrer at
> matrisen ikke er tom og at hvert element er en gyldig binærstreng.

### Fordeler

- Validerer at en verdi er en ikke-tom matrise der hvert element er en gyldig binærstreng.
- Returnerer et enkelt boolsk resultat (`true`/`false`) som egner seg for guards, tidlige returer og inndatavalidering.
- Forhindrer nedstrøms parsefeil ved å avvise matriser som inneholder en ikke-binær oppføring.

## Bruk

### Syntaks

Funksjon:

- `areBinaries(array)`

Parametere:

- `array`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // sann
console.log(areBinaries(b)); // usann
console.log(areBinaries([])); // usann
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areBinaries(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 23:15:27 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>