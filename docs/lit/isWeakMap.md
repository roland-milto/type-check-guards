# isWeakMap

## Aprašymas

Nustato, ar pateikta `value` yra `WeakMap` egzempliorius.

### Naudojimo atvejis

Naudokite `isWeakMap`, kai priimate `unknown` reikšmę (pvz., iš viešo API, įskiepių sistemos ar dinaminės
konfigūracijos) ir prieš naudodami `WeakMap` būdingą elgseną turite patikrinti, kad tai yra `WeakMap`.

> **Pastaba TypeScript naudotojams:**
>
> `isWeakMap` atlieka `instanceof WeakMap` patikrinimą; tai vykdymo laiko sargyba, kuri grąžina `true` tik tikriems
`WeakMap` egzemplioriams.

### Privalumai

- Paprastas vykdymo laiko patikrinimas, ar reikšmė yra `WeakMap`.
- Padeda išvengti neteisingo API, kuriems reikalingas `WeakMap`, naudojimo, nes grąžina `true`/`false`, o ne išmeta
  klaidą.
- Veikia su `unknown` įvestimis, todėl patogu modulio ribose (pvz., apdorojant, išorinius duomenis ar netipuotą kodą).

## Naudojimas

### Sintaksė

Funkcija:

- `isWeakMap(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a vykdymo metu yra WeakMap
}

console.log(isWeakMap(a)); // tiesa
console.log(isWeakMap(b)); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isWeakMap(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:25:53 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>