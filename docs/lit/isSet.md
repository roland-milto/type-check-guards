# isSet

## Aprašymas

Nustato, ar pateikta reikšmė yra `Set`.

### Naudojimo atvejis

Patikrinkite įvestis iš išorinių šaltinių (pvz., JSON analizės, naudotojo įvesties ar trečiųjų šalių API), kad
įsitikintumėte, jog reikšmė yra `Set` prieš atliekant `Set` operacijas.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isSet`, kad susiaurintumėte `unknown` reikšmes prieš kviesdami `Set`-specifines API, tokias kaip `.add`,
`.has` arba `.size`.

### Privalumai

- Pateikia paprastą vykdymo laiko patikrą, kad patvirtintų, ar reikšmė yra `Set`.
- Padeda išvengti tipų klaidų, leisdama anksti šakotis, kai reikšmė nėra `Set`.
- Veikia su bet kokiu `Set` turiniu (tuščiu arba užpildytu) ir nuosekliai grąžina `true`/`false`.

## Naudojimas

### Sintaksė

Funkcija:

- `isSet(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a yra Set vykdymo metu
  console.log(a.size);
}

console.log(isSet(b)); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isSet(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isSet](../_analysis/isSet.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:10:20 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>