# areWeakMaps

## Skildring

`areWeakMaps` sjekkar om ein verdi er ein ikkje-tom array der kvart element er ein `WeakMap`, og returnerer berre `true`
i det tilfellet og `false` elles.

### Brukstilfelle

Valider køyretidsdata (t.d. parsa JSON, plugin-input eller laust typa konfigurasjon) for å sikre at det er ein ikkje-tom
array av `WeakMap`-instansar før du itererer og kallar `WeakMap`-metodar; returnerer `false` når eit element ikkje er
ein `WeakMap` eller når arrayen er tom.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areWeakMaps` til å validere ukjend input før du handsamar det som ein ikkje-tom `WeakMap[]`; funksjonen
> returnerer `false` for tomme arrayar.

### Fordelar

- Sikrar at kvart element i den oppgjevne arrayen er ein `WeakMap`-instans.
- Returnerer `false` for tomme arrayar, og hindrar utilsikta godkjenning av «ingen data» som gyldig input.
- Nyttig som ein vakt før ein utfører `WeakMap`-spesifikke operasjonar på alle elementa.

## Bruk

### Syntaks

Funksjon:

- `areWeakMaps(array)`

Parameter:

- `array`: Arrayen som skal sjekkast for `WeakMap`-instansar.

### Lokal funksjonsimport

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list er ein ikkje-tom array av WeakMap-instansar
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ikkje ein ikkje-tom WeakMap[]
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areWeakMaps(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:38:36 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>