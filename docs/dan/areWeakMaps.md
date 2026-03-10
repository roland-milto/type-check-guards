# areWeakMaps

## Beskrivelse

`areWeakMaps` kontrollerer, om en værdi er et ikke-tomt array, hvor hvert element er en `WeakMap`, og returnerer kun
`true` i det tilfælde og ellers `false`.

### Anvendelsestilfælde

Validér runtime-data (f.eks. parsed JSON, plugin-inputs eller løst typet konfiguration) for at sikre, at det er et
ikke-tomt array af `WeakMap`-instanser, før du itererer og kalder `WeakMap`-metoder; returnerer `false`, når et element
ikke er en `WeakMap`, eller når arrayet er tomt.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areWeakMaps` til at validere ukendt input, før du behandler det som et ikke-tomt `WeakMap[]`; den returnerer
`false` for tomme arrays.

### Fordele

- Sikrer, at hvert element i det angivne array er en `WeakMap`-instans.
- Returnerer `false` for tomme arrays, hvilket forhindrer utilsigtet accept af “ingen data” som gyldigt input.
- Nyttig som en guard, før der udføres `WeakMap`-specifikke operationer på alle elementer.

## Brug

### Syntaks

Funktion:

- `areWeakMaps(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for `WeakMap`-instanser.

### Lokal import af funktion

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list er et ikke-tomt array af WeakMap-instanser
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ikke et ikke-tomt WeakMap[]
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areWeakMaps(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:36:49 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>