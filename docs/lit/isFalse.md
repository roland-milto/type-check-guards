# isFalse

## Aprašymas

`isFalse` patikrina, ar pateikta reikšmė yra griežtai lygi loginės reikšmės literalui `false`.

### Naudojimo atvejis

Patikrinti nežinomus duomenis (pvz., iš JSON, užklausos parametrų ar naudotojo įvesties), kai tik aiški loginė reikšmė
`false` turi būti laikoma galiojančia vėliava, o visa kita turi būti atmesta.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isFalse`, kai reikia priimti tik literalą `false` ir atmesti visas kitas klaidingas (falsy) reikšmes; ji
> grąžina `true` tik kai `value === false`.

### Privalumai

- Pateikia griežtą loginės reikšmės literalo `false` patikrą be prievartinio tipo keitimo.
- Padeda atskirti `false` nuo kitų klaidingų (falsy) reikšmių, tokių kaip `0`, `""`, `null` ir `undefined`.
- Pagerina skaitomumą, nes tikrinant nežinomą įvestį aiškiai išreiškia ketinimą.

## Naudojimas

### Sintaksė

Funkcija:

- `isFalse(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // čia input yra tiksliai false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isFalse(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 16:43:39 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>