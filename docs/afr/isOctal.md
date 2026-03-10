# isOctal

## Beskrywing

Bepaal of 'n waarde 'n geldige oktale letterlike string is (bv. `0o755`).

### Gebruikscenario

Valideer gebruikersinvoer of konfigurasiewaardes wat as 'n oktale letterlike string uitgedruk moet word (byvoorbeeld,
lêertoestemmingsmodusse soos `0o644`) voordat dit ontleed of omgeskakel word.

> **Wenk vir TypeScript-gebruikers:**
>
> `isOctal` is 'n tipe-wag (`value is string`). Ná 'n `true`-resultaat vernou TypeScript die nagegane veranderlike na
`string`.

### Voordele

- Verskaf 'n streng tipe-wag: gee slegs `true` terug wanneer die invoer 'n string is wat met 'n oktale letterlike
  formaat ooreenstem.
- Verwerp leë stringe en stringe met voor-/agteraan witspasie (ASCII-beheer/spasie), wat toevallige treffers verminder.
- Ondersteun 'n opsionele teken en is hoofletter-/kleinletter-ongevoelig vir die `0o`/`0O`-voorvoegsel.
- Verdraagsaam vir nie-string-insette deur `false` terug te gee in plaas daarvan om 'n fout te gooi.

## Gebruik

### Sintaksis

Funksie:

- `isOctal(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // waar
console.log(isOctal(b)); // waar
console.log(isOctal(c)); // vals
console.log(isOctal(d)); // vals

if (isOctal(a)) {
  // a is hier 'n string
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isOctal(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:43:55 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>