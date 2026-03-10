# areWeakMaps

## Beskrivelse

`areWeakMaps` sjekker om en verdi er en ikke-tom matrise der hvert element er en `WeakMap`, og returnerer `true` kun i
det tilfellet og ellers `false`.

### Brukstilfelle

Valider kjøretidsdata (f.eks. parset JSON, plugin-input eller løst typet konfigurasjon) for å sikre at det er en
ikke-tom matrise av `WeakMap`-instanser før du itererer og kaller `WeakMap`-metoder; returnerer `false` når et element
ikke er en `WeakMap` eller når matrisen er tom.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areWeakMaps` til å validere ukjent input før du behandler det som en ikke-tom `WeakMap[]`; den returnerer
`false` for tomme matriser.

### Fordeler

- Sikrer at hvert element i den oppgitte matrisen er en `WeakMap`-instans.
- Returnerer `false` for tomme matriser, noe som hindrer utilsiktet aksept av «ingen data» som gyldig input.
- Nyttig som en vakt før du utfører `WeakMap`-spesifikke operasjoner på alle elementer.

## Bruk

### Syntaks

Funksjon:

- `areWeakMaps(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for `WeakMap`-instanser.

### Lokal funksjonsimport

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list er en ikke-tom matrise av WeakMap-instanser
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ikke en ikke-tom WeakMap[]
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areWeakMaps(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:38:40 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>