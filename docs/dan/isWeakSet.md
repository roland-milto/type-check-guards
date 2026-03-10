# isWeakSet

## Beskrivelse

Afgør, om den givne `value` er en `WeakSet` af objekter.

### Anvendelsestilfælde

Brug `isWeakSet`, når du accepterer utypet input (f.eks. fra eksterne API'er, dynamisk konfiguration eller `unknown`
-værdier), og du har brug for at verificere, at det er en `WeakSet`, før du bruger `WeakSet`-specifikke operationer.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isWeakSet` til at indsnævre en `unknown`-værdi til `WeakSet<object>` ved runtime; bemærk, at `WeakSet` kun kan
> indeholde objektreferencer.

### Fordele

- Giver en enkel runtime-kontrol af, om en værdi er en `WeakSet`.
- Hjælper med at forhindre typefejl ved at sikre, at kun `WeakSet`-instanser behandles som sådanne.
- Fungerer med enhver `unknown`-input og returnerer et klart boolesk resultat (`true`/`false`).

## Brug

### Syntaks

Funktion:

- `isWeakSet(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // sand
console.log(isWeakSet(b)); // falsk

if (isWeakSet(a)) {
  // a er et WeakSet ved kørselstid
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isWeakSet(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:14:27 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>