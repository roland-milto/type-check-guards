# getTypeOf

## Beskrywing

`getTypeOf` gee 'n gedetailleerde, mensleesbare tipe-etiket vir 'n gegewe waarde terug, insluitend verfynde numeriese
tipes en spesifieke objeksoorte.

### Gebruikscenario

Gebruik `getTypeOf` om tipe-opsporing te normaliseer in invoervalidering en diagnostiek—byvoorbeeld om `nan` te verwerp,
slegs `integer`-ID's te aanvaar, numeriese stringe soos `decimal` anders te hanteer as 'n gewone `string`, of om
presiese objeksoorte soos `date` en `regexp` te log.

> **Wenk vir TypeScript-gebruikers:**
>
> Die terugkeertipe is `DataTypeAsString | string`. Hanteer dit as 'n beskrywende etiket; vergelyk teen bekende
> letterlikes soos `integer`, `float`, `nan`, `array`, `null` en `undefined` wanneer jy vertak.

### Voordele

- Gee 'n meer fynkorrelige tipe-string terug as JavaScript se `typeof`, insluitend numeriese subtipes soos `integer`,
  `float` en `nan`.
- Onderskei `null` en `undefined` uitdruklik as `null` en `undefined`.
- Bespeur algemene numeriese stringformate en rapporteer dit as `binary`, `octal`, `decimal` of `hexadecimal` in plaas
  van 'n gewone `string`.
- Identifiseer skikkings as `array` en gebruik `Object.prototype.toString` om spesifieke objektipe-name te verskaf (bv.
  `date`, `regexp`, `map`, `set`).
- Nuttig vir validering, logboeke en ontfouting waar konsekwente, mensleesbare tipe-etikette benodig word.

## Gebruik

### Sintaksis

Funksie:

- `getTypeOf(value)`

Parameters:

- `value`: Die waarde waarvoor die datatipe bepaal moet word.

### Plaaslike funksie-invoer

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Voorbeeldkontroles
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.getTypeOf(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 13:05:00 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>