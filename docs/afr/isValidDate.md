# isValidDate

## Beskrywing

`isValidDate` kontroleer of 'n gegewe waarde 'n geldige `Date`-objek is en gee slegs `true` terug vir regte,
nie-ongeldige datums.

### Gebruikscenario

Valideer gebruikersinvoer of API-data wat moontlik datums bevat, en verseker dat die waarde 'n regte `Date`-instansie is
en nie 'n ongeldige datum nie voordat datum-berekeninge, formatering of vergelykings uitgevoer word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isValidDate` voordat `Date`-metodes (bv. `toISOString`, `getTime`) op waardes getipeer as `unknown` aangeroep
> word om te verseker dat dit geldige `Date`-objekte is.

### Voordele

- Verseker dat 'n waarde 'n `Date`-instansie is en nie net 'n datumagtige string of nommer nie.
- Verwerp ongeldige datums (bv. `new Date("invalid")`) deur te kontroleer vir `NaN`-tydwaardes.
- Eenvoudige booleaanse wag wat maklik is om in voorwaardes en valideringspyplyne te gebruik.
- Help om looptydfoute te voorkom wanneer datum-metodes aangeroep word deur eers die invoer te verifieer.

## Gebruik

### Sintaksis

Funksie:

- `isValidDate(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // invoer is 'n geldige Date-instansie
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // vals
console.log(isValidDate("2025-12-22")); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isValidDate(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 16:38:47 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>