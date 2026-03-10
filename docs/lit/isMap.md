# isMap

## Aprašymas

Patikrina, ar pateikta `value` yra `Map`, grąžindama `true`, jei taip, ir `false` kitu atveju.

### Naudojimo atvejis

Naudokite `isMap`, kai gaunate `unknown` reikšmę (pvz., iš JSON analizavimo, išorinių API ar naudotojo įvesties) ir
prieš atlikdami `Map` operacijas turite įsitikinti, kad tai yra `Map`.

> **Pastaba TypeScript naudotojams:**
>
> `isMap` yra vykdymo laiko sargyba, kuri grąžina `true`, kai reikšmė yra `Map`, ir `false` kitu atveju; naudokite ją,
> kad susiaurintumėte `unknown` prieš kviesdami `Map` API.

### Privalumai

- Suteikia greitą vykdymo laiko patikrą, ar reikšmė yra `Map`.
- Padeda išvengti tipų klaidų, apsaugant kodo šakas, kurioms reikia `Map` metodų, tokių kaip `get`, `set` ir `has`.
- Puikiai tinka kaip lengvas validavimo žingsnis, kai apdorojamos `unknown` įvestys.

## Naudojimas

### Sintaksė

Funkcija:

- `isMap(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isMap(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isMap](../_analysis/isMap.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 16:05:12 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>