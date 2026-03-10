# areWeakSets

## Beskrivelse

Kontrollerer, om et input er et ikke-tomt array, hvor hvert element er et `WeakSet`, og returnerer kun `true` i det
tilfælde.

### Anvendelsestilfælde

Validér runtime-input (f.eks. fra API'er, konfiguration eller brugerleverede data) for at sikre, at du har en ikke-tom
liste af `WeakSet`-instanser, før du fortsætter med logik, der afhænger af `WeakSet`-adfærd.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areWeakSets` til at validere ukendt input, før du behandler det som `WeakSet[]`. Den returnerer `false` for
> tomme arrays og ikke-arrays.

### Fordele

- Sikrer, at hvert element i input-arrayet er et `WeakSet`.
- Returnerer `false` for tomme arrays, hvilket forhindrer utilsigtede “alle gyldige”-resultater ved manglende data.
- Fejler sikkert ved at returnere `false`, når input ikke er et udfyldt array (inklusive `null`).
- Nyttig som en guard, før der udføres operationer, der kræver `WeakSet`-instanser.

## Brug

### Syntaks

Funktion:

- `areWeakSets(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for `WeakSet`-objekter.

### Lokal import af funktion

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a er et ikke-tomt array af WeakSet-instanser
}

console.log(areWeakSets(a)); // sand
console.log(areWeakSets(b)); // falsk
console.log(areWeakSets(c)); // falsk
console.log(areWeakSets(null as unknown)); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areWeakSets(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:08:17 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>