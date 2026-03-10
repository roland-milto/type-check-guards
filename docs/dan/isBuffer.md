# isBuffer

## Beskrivelse

Kontrollerer, om en værdi er en Node.js-`Buffer`, og returnerer `true` eller `false`.

### Anvendelsestilfælde

Validér input ved runtime (f.eks. API-payloads, fildata eller meddelelsesbuffere) for at sikre, at en værdi er en
`Buffer`, før den behandles, og få pålideligt `false`, når der køres uden for Node.js, hvor `Buffer` muligvis ikke
findes.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isBuffer` til at indsnævre `unknown`-værdier til `Buffer`, før du kalder Buffer-specifikke metoder.

### Fordele

- Registrerer sikkert Node.js-`Buffer`-instanser ved hjælp af `Buffer.isBuffer`.
- Returnerer `false` i miljøer, hvor `Buffer` ikke er tilgængelig, og undgår dermed runtime-fejl.
- Fungerer med input af typen `unknown`, hvilket gør den velegnet til runtime-validering og typeindsnævring.

## Brug

### Syntaks

Funktion:

- `isBuffer(value)`

Parametre:

- `value`: Værdien, der skal testes.

### Lokal import af funktion

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // sand
console.log(isBuffer(b)); // falsk

if (isBuffer(a)) {
  // a er en Buffer her
  console.log(a.toString("utf8"));
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isBuffer(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 16:31:18 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>