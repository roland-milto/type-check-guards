# isEmpty

## Beskrywing

Bepaal of ’n gegewe waarde leeg is, en gee `true` terug vir `null`, `undefined`, leë/witspasie-stringe, leë skikkings,
leë `Map`/`Set`, of objekte sonder eie enumereerbare eienskappe.

### Gebruikscenario

Gebruik `isEmpty` om insette te valideer en ontbrekende/leë waardes oor verskeie datatipes op te spoor (bv. vormvelde,
API-payloads, konfigurasie-objekte) waar `null`, `undefined`, witspasie-stringe, leë versamelings en objekte sonder
eienskappe as leeg behandel moet word.

> **Wenk vir TypeScript-gebruikers:**
>
> `isEmpty` is ’n nut wat ’n booleaan teruggee (nie ’n TypeScript-tipepredikaat nie), dus vernou dit nie tipes op sy eie
> nie; gebruik dit vir validering/vertakking eerder as vernouing tydens kompilering.

### Voordele

- Behandel `null` en `undefined` as `true` vir leegheidskontroles.
- Beskou stringe wat slegs uit witspasie bestaan as leeg deur te snoei voordat die lengte nagegaan word.
- Ondersteun algemene houertipes (skikkings, `Map`, `Set`) en gewone objekte sonder eie enumereerbare eienskappe.
- Vermy die tel van geërfde eienskappe deur `hasOwnProperty`-kontroles te gebruik.
- Gee ’n eenvoudige booleaanse resultaat (`true`/`false`) terug wat geskik is vir wagte en validering.

## Gebruik

### Sintaksis

Funksie:

- `isEmpty(value)`

Parameters:

- `value`: Die waarde om vir leegheid na te gaan.

### Plaaslike funksie-invoer

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isEmpty(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 16:17:15 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>