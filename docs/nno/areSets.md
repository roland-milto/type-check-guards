# areSets

## Skildring

Sjekkar om ei gitt ikkje-tom matrise berre inneheld `Set`-instansar, og returnerer `true` dersom ho gjer det og `false`
elles.

### Brukstilfelle

Valider at ein verdi (t.d. frå brukarinput, JSON-parsing eller eksterne API) er ei ikkje-tom matrise av `Set`-objekt før
du behandlar kvart sett.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areSets` til å validere ukjend inndata før du itererer og kallar `Set`-API (t.d. `.size`, `.has`, `.add`) på
> kvart element.

### Fordelar

- Returnerer `true` berre når inndata er ein ikkje-tom matrise og kvart element er ein `Set`-instans.
- Hindrar falske positive for tomme matriser ved å returnere `false` når matrisen ikkje har nokon element.
- Nyttig som ein runtime-guard før du utfører `Set`-spesifikke operasjonar på kvart element.

## Bruk

### Syntaks

Funksjon:

- `areSets(array)`

Parameter:

- `array`: Matrisen som skal sjekkast for `Set`-instansar.

### Lokal funksjonsimport

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a er ein matrise av Set-instansar ved køyretid
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // usann
console.log(areSets(c)); // usann
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areSets(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areSets](../_analysis/areSets.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:14:39 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>