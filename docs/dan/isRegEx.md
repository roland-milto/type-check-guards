# isRegEx

## Beskrivelse

Afgør, om en angivet værdi er en `RegExp`-instans.

### Anvendelsestilfælde

Validér brugerleverede eller dynamiske værdier (f.eks. konfiguration, API-payloads, plugin-inputs), før de behandles som
et regulært udtryk.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isRegEx` til at indsnævre `unknown`- (eller union-) værdier, før du bruger RegExp-specifikke egenskaber eller
> metoder; den returnerer kun `true` for værdier, der er instanser af `RegExp`.

### Fordele

- Giver en enkel runtime-type guard til at kontrollere, om en værdi er en `RegExp`.
- Hjælper med at forhindre fejl, når kode forventer et regulært udtryk (f.eks. før kald til `test`, `exec` eller læsning
  af `source`).
- Fungerer med både regex-litteraler og instanser oprettet via `new RegExp(...)`.
- Returnerer et tydeligt boolesk resultat (`true`/`false`) uden at kaste fejl for ikke-regex-input.

## Brug

### Syntaks

Funktion:

- `isRegEx(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input er et RegExp her
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isRegEx(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:29:02 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>