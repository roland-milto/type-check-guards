# arePrimitives

## Aprašymas

`arePrimitives` įvertina, ar visi pateikto, netuščio masyvo elementai yra primityvieji tipai.

### Naudojimo atvejis

Patikrinkite, kad gaunami duomenys (pvz., užklausos parametrai, CSV eilutės reikšmės arba ID/žymų sąrašas) turėtų tik
primityviąsias reikšmes prieš serializuojant, maišant (hashing), registruojant (logging) arba perduodant juos API, kurie
neturi gauti objektų.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `arePrimitives`, kai reikia užtikrinti, kad `unknown[]` turi tik primityviąsias reikšmes (string, number,
> bigint, boolean, symbol, undefined arba null) prieš tolesnį apdorojimą.

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas yra primityvioji reikšmė, todėl tai yra griežta apsauga masyvams „be
  objektų/funkcijų“.
- Greitai nutraukia tikrinimą: grąžina `false` vos tik aptinkamas neprimityvus elementas.
- Taip pat grąžina `false` ne masyvams ir tuštiems masyvams (per užpildyto masyvo patikrą), taip užkertant kelią
  netyčiniam neteisingos įvesties priėmimui.

## Naudojimas

### Sintaksė

Funkcija:

- `arePrimitives(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jo elementai yra primityviojo tipo.

### Lokalus funkcijos importas

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // teisinga
const r2 = arePrimitives(b); // teisinga
const r3 = arePrimitives(c); // neteisinga
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.arePrimitives(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:05:26 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>