# isNullOrUndefined

## Aprašymas

Patikrina, ar pateikta reikšmė yra `null` arba `undefined`.

### Naudojimo atvejis

Naudokite `isNullOrUndefined`, kai reikia tiek `null`, tiek `undefined` traktuoti kaip „nėra reikšmės“, pavyzdžiui,
validuojant pasirenkamas įvestis, normalizuojant API duomenų paketus arba saugant kodo šakas prieš dereferencijuojant
potencialiai trūkstamą reikšmę.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isNullOrUndefined`, kad apsisaugotumėte nuo trūkstamų reikšmių prieš pasiekdami savybes ar kviesdami
> metodus; ji grąžina `true` tik `null` ir `undefined` atvejais.

### Privalumai

- Pateikia aiškų, pakartotinai naudojamą sargą, skirtą vienoje vietoje aptikti `null` ir `undefined`.
- Grąžina paprastą loginę reikšmę (`true`/`false`), kurią lengva komponuoti sąlygose ir validacijose.
- Padeda išvengti dažnų vykdymo laiko klaidų, patikrinant, ar nėra trūkstamų reikšmių prieš pasiekiant savybes ar
  kviečiant metodus.

## Naudojimas

### Sintaksė

Funkcija:

- `isNullOrUndefined(value)`

Parametrai:

- `value`: Reikšmė, kuri turi būti patikrinta dėl `null` arba `undefined`.

### Lokalus funkcijos importas

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // apdoroti trūkstamą reikšmę
}

console.log(isNullOrUndefined(b)); // tiesa
console.log(isNullOrUndefined(c)); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isNullOrUndefined(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:34:21 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>