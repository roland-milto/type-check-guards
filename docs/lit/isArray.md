# isArray

## Aprašymas

`isArray` patikrina, ar pateikta reikšmė yra masyvas, ir grąžina `true`, jei taip, kitu atveju `false`.

### Naudojimo atvejis

Patikrinti nežinomus duomenis (pvz., išanalizuotą JSON ar API atsakymus), kad įsitikintumėte, jog reikšmė yra masyvas
prieš iteruojant, indeksuojant ar pasiekiant `.length`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isArray`, kai reikia vykdymo metu patikrinti masyvus; ji grąžina loginę reikšmę ir yra saugi kviesti su
`unknown` reikšmėmis.

### Privalumai

- Naudoja įtaisytąjį `Array.isArray`, kad patikimai aptiktų masyvus skirtinguose kontekstuose (pvz., iframes).
- Grąžina paprastą loginį rezultatą (`true`/`false`), tinkamą apsaugoms ir šakotajai logikai.
- Veikia su bet kokio tipo įvestimi, nes parametras yra `unknown`.

## Naudojimas

### Sintaksė

Funkcija:

- `isArray(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // įvestis vykdymo metu yra masyvas
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isArray(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isArray](../_analysis/isArray.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 11:31:11 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>