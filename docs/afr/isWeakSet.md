# isWeakSet

## Beskrywing

Bepaal of die gegewe `value` 'n `WeakSet` van objekte is.

### Gebruikscenario

Gebruik `isWeakSet` wanneer jy ongetipeerde invoer aanvaar (bv. van eksterne API's, dinamiese konfigurasie, of `unknown`
waardes) en jy dit moet verifieer as 'n `WeakSet` voordat jy `WeakSet`-spesifieke bewerkings gebruik.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isWeakSet` om 'n `unknown` waarde by looptyd te vernou na `WeakSet<object>`; let daarop dat `WeakSet` slegs
> objekverwysings kan bevat.

### Voordele

- Bied 'n eenvoudige looptydkontrole om te bepaal of 'n waarde 'n `WeakSet` is.
- Help om tipefoute te voorkom deur te verseker dat slegs `WeakSet`-instansies as sodanig behandel word.
- Werk met enige `unknown`-invoer en gee 'n duidelike booleaanse resultaat (`true`/`false`).

## Gebruik

### Sintaksis

Funksie:

- `isWeakSet(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // waar
console.log(isWeakSet(b)); // vals

if (isWeakSet(a)) {
  // a is 'n WeakSet tydens uitvoering
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isWeakSet(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:13:50 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>