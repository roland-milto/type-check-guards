# isSet

## Beskrywing

Bepaal of 'n gegewe waarde 'n `Set` is.

### Gebruikscenario

Valideer insette vanaf eksterne bronne (bv. JSON-ontleding, gebruikersinvoer, of derdeparty-API's) om te verseker dat 'n
waarde 'n `Set` is voordat `Set`-bewerkings uitgevoer word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isSet` om `unknown`-waardes te vernou voordat jy `Set`-spesifieke API's soos `.add`, `.has`, of `.size`
> aanroep.

### Voordele

- Verskaf 'n eenvoudige looptydkontrole om te bevestig of 'n waarde 'n `Set` is.
- Help om tipefoute te voorkom deur vroeë vertakking toe te laat wanneer 'n waarde nie 'n `Set` is nie.
- Werk met enige `Set`-inhoud (leeg of gevul) en gee konsekwent `true`/`false` terug.

## Gebruik

### Sintaksis

Funksie:

- `isSet(value)`

Parameters:

- `value`: Die waarde om na te gaan.

### Plaaslike funksie-invoer

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a is 'n Set tydens uitvoering
  console.log(a.size);
}

console.log(isSet(b)); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isSet(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isSet](../_analysis/isSet.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 23:08:46 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>