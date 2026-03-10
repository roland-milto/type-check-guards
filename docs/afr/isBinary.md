# isBinary

## Beskrywing

`isBinary` bepaal of 'n waarde 'n binêre string is (opsioneel met `0b`/`0B` as voorvoegsel) en gee `true` of `false`
terug.

### Gebruikscenario

Valideer gebruiker-verskafte stringe (bv. vormvelde, CLI-argumente, konfigurasiewaardes) om te verseker dat hulle slegs
binêre syfers verteenwoordig, opsioneel met 'n `0b`/`0B`-voorvoegsel, voordat verdere verwerking plaasvind.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isBinary` as 'n tipe-wag (type guard) voordat jy 'n string na `BigInt`/`Number` ontleed of omskakel om
> ongeldige inset te vermy.

### Voordele

- Aanvaar binêre stringe met of sonder die `0b`/`0B`-voorvoegsel.
- Verwerp leë stringe en stringe met voor-/agterste witspasie (ASCII ≤ 32).
- Gee `true`/`false` terug sonder om 'n uitsondering te gooi, wat dit veilig maak vir onbekende insette.

## Gebruik

### Sintaksis

Funksie:

- `isBinary(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // waar
const b = isBinary("1010");   // waar
const c = isBinary("0b1020"); // vals
const d = isBinary(0b1010);     // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isBinary(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 23:09:05 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>