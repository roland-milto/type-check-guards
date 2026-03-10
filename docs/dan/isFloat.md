# isFloat

## Beskrivelse

`isFloat` afgør, om en given `value` er et endeligt flydende tal (et `number`, der ikke er et heltal).

### Anvendelsestilfælde

Validér brugerangivet numerisk input, hvor brøkværdier er påkrævet (f.eks. priser, målinger, satser), og afvis heltal,
`NaN` og uendeligheder.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isFloat`, når du kun skal acceptere endelige, ikke-heltal numeriske input; den afviser heltal og ikke-endelige
> tal.

### Fordele

- Returnerer kun `true` for endelige, ikke-heltal (udelukker heltal, `NaN`, `Infinity` og `-Infinity`).
- Fungerer med enhver inputtype (`unknown`) og indsnævrer sikkert ved at tjekke `typeof value === "number"`.
- Bruger indbyggede numeriske guards (`Number.isInteger`, `Number.isFinite`) for forudsigelig adfærd.

## Brug

### Syntaks

Funktion:

- `isFloat(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for, om den er et flydende tal.

### Lokal import af funktion

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // værdien er et tal ved kørsel; den er endelig og ikke et heltal
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isFloat(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 16:07:17 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>