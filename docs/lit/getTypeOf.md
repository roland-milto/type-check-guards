# getTypeOf

## Aprašymas

`getTypeOf` grąžina detalią, žmogui suprantamą tipo žymą pateiktai reikšmei, įskaitant patikslintus skaitinius tipus ir
konkrečias objektų rūšis.

### Naudojimo atvejis

Naudokite `getTypeOf`, kad suvienodintumėte tipų aptikimą įvesties validavime ir diagnostikoje—pavyzdžiui, atmesti
`nan`, priimti tik `integer` ID, skaitines eilutes, tokias kaip `decimal`, traktuoti kitaip nei paprastą `string`, arba
žurnaluoti tikslias objektų rūšis, tokias kaip `date` ir `regexp`.

> **Pastaba TypeScript naudotojams:**
>
> Grąžinamas tipas yra `DataTypeAsString | string`. Laikykite jį aprašomąja žyma; šakotuvui lyginkite su žinomais
> literalais, tokiais kaip `integer`, `float`, `nan`, `array`, `null` ir `undefined`.

### Privalumai

- Grąžina detalesnę tipo eilutę nei JavaScript `typeof`, įskaitant skaitinius potipius, tokius kaip `integer`, `float`
  ir `nan`.
- Aiškiai atskiria `null` ir `undefined` kaip `null` ir `undefined`.
- Aptinka įprastus skaitinių eilučių formatus ir praneša juos kaip `binary`, `octal`, `decimal` arba `hexadecimal`, o ne
  kaip paprastą `string`.
- Taip pat atpažįsta masyvus kaip `array` ir naudoja `Object.prototype.toString`, kad pateiktų konkrečius objektų tipų
  pavadinimus (pvz., `date`, `regexp`, `map`, `set`).
- Labai naudinga validavimui, žurnalavimui ir derinimui, kai reikia nuoseklių, žmogui suprantamų tipų žymų.

## Naudojimas

### Sintaksė

Funkcija:

- `getTypeOf(value)`

Parametrai:

- `value`: Reikšmė, kurios duomenų tipą reikia nustatyti.

### Lokalus funkcijos importas

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

// Pavyzdiniai patikrinimai
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.getTypeOf(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 13:13:07 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>