# areSets

## Përshkrim

Kontrollon nëse një varg i dhënë jo-bosh përmban vetëm instanca `Set`, duke kthyer `true` nëse po dhe `false`
përndryshe.

### Rast përdorimi

Valido që një vlerë (p.sh., nga hyrja e përdoruesit, analizimi i JSON-it, ose API-të e jashtme) është një varg jo-bosh
objektesh `Set` përpara se të përpunosh secilin set.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areSets` për të validuar hyrje të panjohura përpara se të iterosh dhe të thërrasësh API-të e `Set` (p.sh.,
`.size`, `.has`, `.add`) mbi çdo element.

### Përparësi

- Kthen `true` vetëm kur hyrja është një varg jo-bosh dhe çdo element është një instancë `Set`.
- Parandalon rezultate të rreme pozitive për vargje bosh duke kthyer `false` kur vargu nuk ka elemente.
- I dobishëm si një kontroll në kohë ekzekutimi përpara kryerjes së operacioneve specifike të `Set` mbi çdo element.

## Përdorim

### Sintaksë

Funksion:

- `areSets(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për instanca `Set`.

### Import lokal i funksionit

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a është një varg instancash Set në kohën e ekzekutimit
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // false
console.log(areSets(c)); // false
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areSets(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areSets](../_analysis/areSets.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:15:22 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>