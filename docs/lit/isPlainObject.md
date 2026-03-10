# isPlainObject

## Aprašymas

Patikrina, ar pateikta `value` yra paprastas objektas, ir grąžina `true`, jei taip, kitu atveju `false`.

### Naudojimo atvejis

Patikrinti, kad `unknown` įvestis (pvz., išanalizuotas JSON, išoriniai duomenys ar funkcijos argumentai) yra paprastas
objektas prieš skaitant raktus arba mapinant ją į tipizuotą konfigūracijos objektą.

> **Pastaba TypeScript naudotojams:**
>
> `isPlainObject` naudinga susiaurinant `unknown` prieš traktuojant jį kaip įrašą primenantį objektą; ji grąžina `true`
> tik toms reikšmėms, kurių vidinė žyma yra `[object Object]`.

### Privalumai

- Pateikia paprastą, patikimą patikrą, ar reikšmė yra paprastas objektas (t. y. `Object` / `{}`), grąžindama `true` arba
  `false`.
- Padeda atskirti paprastus objektus nuo masyvų, funkcijų, `null` ir kitų ne paprasto objekto tipų.
- Naudinga kaip tipo sargyba TypeScript'e, kad susiaurintų `unknown` reikšmes prieš pasiekiant objekto savybes.

## Naudojimas

### Sintaksė

Funkcija:

- `isPlainObject(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar ji yra paprastas objektas.

### Lokalus funkcijos importas

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // įvestis čia yra paprastas objektas
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // tiesa
console.log(isPlainObject([])); // netiesa
console.log(isPlainObject(null)); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isPlainObject(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 12:18:30 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>