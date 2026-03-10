# isDate

## Beskrywing

`isDate` bepaal of 'n verskafde waarde 'n `Date` is, en gee `true` terug vir `Date`-instansies en `false` andersins.

### Gebruikscenario

Valideer en vernou onbekende waardes (bv. versoekdata, konfigurasiewaardes, of geparste JSON) voordat `Date`-bewerkings
soos formatering, vergelykings, of die aanroep van `toISOString()` uitgevoer word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isDate` om `unknown` by runtime te vernou na `Date`; dit gee slegs `true` terug vir werklike `Date`
> -instansies (nie datumstringe nie).

### Voordele

- Bied 'n eenvoudige runtime-wag om te verifieer of 'n waarde 'n `Date` is.
- Help om tipefoute te voorkom deur te verseker dat slegs `Date`-instansies validering slaag.
- Nuttig om onbekende insette (bv. API-payloads) te valideer voordat datumspesifieke metodes gebruik word.

## Gebruik

### Sintaksis

Funksie:

- `isDate(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word vir `Date`-tipe.

### Plaaslike funksie-invoer

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input is hier 'n Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isDate(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isDate](../_analysis/isDate.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 15:36:29 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>