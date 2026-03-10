# isNumber

## Beskrywing

`isNumber` kontroleer of ’n waarde ’n eindige, nie-`NaN` getal is.

### Gebruikscenario

Valideer numeriese insette uit onbetroubare bronne (vorms, navraagparameters, JSON-ladings) voor berekeninge, stoor of
reeks-kontroles, en verseker dat slegs eindige getalle deurgaan (`true`) en alles anders `false` teruggee.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isNumber` om `unknown`-waardes te valideer voordat jy rekenkunde doen; dit verwerp `NaN`, `Infinity` en
`-Infinity`.

### Voordele

- Gee `true` terug slegs vir werklike JavaScript-getalle (tipekontrole plus verwerping van `NaN` en oneindigheid).
- Voorkom algemene valideringsfoute waar `NaN`, `Infinity` of `-Infinity` per ongeluk as getalle deurgaan.
- Werk goed as ’n runtime-beskerming vir onbekende insette (bv. JSON, gebruikersinvoer, eksterne API’s).
- Eenvoudig, vinnig en sonder newe-effekte.

## Gebruik

### Sintaksis

Funksie:

- `isNumber(value)`

Parameters:

- `value`: Die waarde om te kontroleer.

### Plaaslike funksie-invoer

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // invoer is 'n geldige eindige getal
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isNumber(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:08:02 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>