# isNull

## Beskrivelse

Afgør, om den angivne `value` er `null`.

### Anvendelsestilfælde

Brug `isNull` til at validere input eller API-payloadfelter, hvor `null` er en meningsfuld sentinelværdi og skal
håndteres anderledes end `undefined` eller andre værdier.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isNull`, når du har brug for at skelne `null` fra `undefined` og andre falsy værdier; den returnerer kun `true`
> for `null`.

### Fordele

- Giver en præcis kontrol for `null` uden at sammenblande det med `undefined`.
- Fungerer pålideligt for enhver inputtype, fordi den accepterer `unknown`.
- Simpel, hurtig og uden sideeffekter; returnerer kun `true` eller `false`.

## Brug

### Syntaks

Funktion:

- `isNull(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for `null`.

### Lokal import af funktion

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // sand
console.log(isNull(b)); // falsk

if (isNull(a)) {
  // a er null her
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isNull(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isNull](../_analysis/isNull.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 15:38:58 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>