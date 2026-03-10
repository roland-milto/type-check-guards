# isNaN

## Beskrivelse

Afgør, om den angivne `value` er en `NaN` af typen `number` uden at konvertere strenge.

### Anvendelsestilfælde

Validér utroværdigt eller løst typet input (f.eks. API-payloads, formularværdier, parset JSON) for at opdage den særlige
`NaN`-værdi og håndtere den eksplicit, mens input, der ikke er tal, behandles som ikke-`NaN`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isNaN`, når du har brug for at registrere den særlige numeriske værdi `NaN`, samtidig med at du sikrer, at
> inputtet faktisk er et `number` (ingen streng-til-tal-konvertering).

### Fordele

- Kontrollerer, om en værdi er `NaN`, uden at tvinge ikke-tal (f.eks. strenge) til at blive tal.
- Returnerer kun `true` for værdier, der både er af typen `number` og `NaN`.
- Sikker for `unknown`-input og undgår falske positiver fra implicitte konverteringer.

## Brug

### Syntaks

Funktion:

- `isNaN(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for, om den er en `NaN` af typen `number`.

### Lokal import af funktion

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // sand
console.log(isNaN(b)); // falsk
console.log(isNaN(c)); // falsk

if (isNaN(a)) {
  // a er et tal og specifikt NaN
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isNaN(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 15:45:40 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>