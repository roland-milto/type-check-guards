# isWeakMap

## Beskrivelse

Afgør, om en given `value` er en `WeakMap`-instans.

### Anvendelsestilfælde

Brug `isWeakMap`, når du accepterer en `unknown` værdi (f.eks. fra et offentligt API, et pluginsystem eller en dynamisk
konfiguration) og har brug for at verificere, at den er en `WeakMap`, før du bruger `WeakMap`-specifik adfærd.

> **Bemærkning til TypeScript-brugere:**
>
> `isWeakMap` udfører en `instanceof WeakMap`-kontrol; det er en runtime-guard, der kun returnerer `true` for faktiske
`WeakMap`-instanser.

### Fordele

- Simpel runtime-kontrol af, om en værdi er en `WeakMap`.
- Hjælper med at forhindre forkert brug af API'er, der kræver en `WeakMap`, ved at returnere `true`/`false` i stedet for
  at kaste en fejl.
- Fungerer med `unknown`-input, hvilket gør den praktisk ved modulgrænser (f.eks. parsing, eksterne data eller utypet
  kode).

## Brug

### Syntaks

Funktion:

- `isWeakMap(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a er et WeakMap ved kørselstid
}

console.log(isWeakMap(a)); // sand
console.log(isWeakMap(b)); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isWeakMap(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:24:40 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>