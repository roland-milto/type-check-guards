# areNumerics

## Beschrijving

`areNumerics` controleert of een waarde een niet-lege array is waarvan alle elementen numeriek zijn.

### Use case

Gebruik `areNumerics` om externe of ongetypeerde data (bijv. JSON-payloads, queryparameters, formulierinvoer) te
valideren voordat je sommen, gemiddelden of andere numerieke bewerkingen uitvoert, zodat de invoer een niet-lege
numerieke array is en anders `false` retourneert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areNumerics` om `unknown`-invoer af te schermen voordat je die als een numerieke array behandelt; het
> retourneert `false` voor niet-arrays en lege arrays.

### Voordelen

- Retourneert `true` alleen wanneer de invoer een niet-lege array is en elk element numeriek is.
- Faalt snel: stopt met controleren zodra een niet-numeriek element wordt gevonden en retourneert `false`.
- Helpt onbekende invoer veilig te valideren voordat numerieke bewerkingen worden uitgevoerd.

## Gebruik

### Syntax

Functie:

- `areNumerics(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op numerieke elementen.

### Lokale functie-import

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // waar
console.log(areNumerics(b)); // waar
console.log(areNumerics(c)); // onwaar
console.log(areNumerics(d)); // onwaar
console.log(areNumerics(e)); // onwaar

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areNumerics(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 16:06:28 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>