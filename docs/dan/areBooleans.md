# areBooleans

## Beskrivelse

`areBooleans` kontrollerer, om et givent ikke-tomt array kun indeholder booleske værdier, og returnerer `true`, hvis det
gør, og ellers `false`.

### Anvendelsestilfælde

Validér brugerleverede eller eksterne data (f.eks. JSON-payloads, query-parametre, konfigurations-arrays) for at sikre,
at en ikke-tom liste kun indeholder booleans, før du anvender boolesk logik eller sender den til API'er, der forventer
`boolean[]`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areBooleans` til at validere `unknown[]`, før du behandler det som `boolean[]`; den returnerer `false` for tomme
> arrays, så håndtér det tilfælde eksplicit, hvis en tom liste skal være tilladt.

### Fordele

- Returnerer kun `true`, når hvert element er en boolesk værdi, og inputtet er et ikke-tomt array.
- Forhindrer falske positiver ved at afvise tomme arrays (returnerer `false`).
- Fungerer godt som en runtime-guard før operationer, der kun må bruges på booleans (f.eks. `every`, `some`, logiske
  reduktioner).

## Brug

### Syntaks

Funktion:

- `areBooleans(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for booleske elementer.

### Lokal import af funktion

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areBooleans(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:39:51 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>