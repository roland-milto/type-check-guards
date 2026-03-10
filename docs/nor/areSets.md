# areSets

## Beskrivelse

Sjekker om en gitt ikke-tom matrise kun inneholder `Set`-instanser, og returnerer `true` hvis den gjør det og `false`
ellers.

### Brukstilfelle

Valider at en verdi (f.eks. fra brukerinput, JSON-parsing eller eksterne API-er) er en ikke-tom matrise med `Set`
-objekter før du behandler hvert sett.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areSets` til å validere ukjent inndata før du itererer og kaller `Set`-API-er (f.eks. `.size`, `.has`, `.add`)
> på hvert element.

### Fordeler

- Returnerer `true` bare når inndata er en ikke-tom matrise og hvert element er en `Set`-instans.
- Forhindrer falske positiver for tomme matriser ved å returnere `false` når matrisen ikke har noen elementer.
- Nyttig som en kjøretidsvakt før du utfører `Set`-spesifikke operasjoner på hvert element.

## Bruk

### Syntaks

Funksjon:

- `areSets(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for `Set`-instanser.

### Lokal funksjonsimport

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a ke lenaneo la disete tsa Set ka nako ya ho matha
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // fosahetse
console.log(areSets(c)); // fosahetse
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areSets(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areSets](../_analysis/areSets.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:14:38 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>