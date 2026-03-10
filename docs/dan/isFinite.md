# isFinite

## Beskrivelse

Afgør, om en given `value` er et endeligt `number`.

### Anvendelsestilfælde

Brug `isFinite` til at validere ukendt input (f.eks. fra JSON, formularer eller API'er), før du udfører numeriske
beregninger, så du sikrer, at værdien er et reelt, endeligt tal.

> **Bemærkning til TypeScript-brugere:**
>
> `isFinite` returnerer kun `true` for endelige tal; den returnerer `false` for `NaN`, `Infinity` og enhver værdi, der
> ikke er et tal.

### Fordele

- Bruger den indbyggede `Number.isFinite` til en pålidelig kontrol af, om noget er endeligt.
- Returnerer kun `true` for endelige tal; returnerer `false` for `NaN`, `Infinity` og input, der ikke er tal.
- Enkel, uden bivirkninger-prædikat, velegnet til validering og guard-logik.

## Brug

### Syntaks

Funktion:

- `isFinite(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for endelighed.

### Lokal import af funktion

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers er: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value er et endeligt tal her
  const doubled = value * 2;
  console.log(doubled);
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isFinite(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 16:29:32 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>