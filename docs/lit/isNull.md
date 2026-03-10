# isNull

## Aprašymas

Nustato, ar pateikta `value` reikšmė yra `null`.

### Naudojimo atvejis

Naudokite `isNull` įvesčių arba API duomenų laukų tikrinimui, kai `null` yra prasminga žymė (sentinel) ir turi būti
apdorojama kitaip nei `undefined` ar kitos reikšmės.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isNull`, kai reikia atskirti `null` nuo `undefined` ir kitų klaidingų (falsy) reikšmių; ji grąžina `true`
> tik `null` atveju.

### Privalumai

- Pateikia tikslų `null` patikrinimą, nesupainiodamas jo su `undefined`.
- Patikimai veikia su bet kokio tipo įvestimi, nes priima `unknown`.
- Paprasta, greita ir be šalutinių poveikių; grąžina tik `true` arba `false`.

## Naudojimas

### Sintaksė

Funkcija:

- `isNull(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar ji yra `null`.

### Lokalus funkcijos importas

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // tiesa
console.log(isNull(b)); // netiesa

if (isNull(a)) {
  // a čia yra null
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isNull(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isNull](../_analysis/isNull.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 15:39:55 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>