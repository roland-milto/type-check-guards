# isObject

## Aprašymas

Nustato, ar pateikta `value` yra `object` (išskyrus `null`).

### Naudojimo atvejis

Naudokite `isObject`, kad validuotumėte nežinomas įvestis (pvz., išanalizuotą JSON, API atsakymus, įvykių duomenų
paketus) prieš pasiekdami savybes, užtikrindami, kad reikšmė yra objektas, o ne `null`.

> **Pastaba TypeScript naudotojams:**
>
> `isObject` yra vykdymo laiko sargyba, kuri grąžina boolean; ji nesusiaurina iki konkrečios objekto formos. Derinkite
> ją su papildomais patikrinimais (pvz., savybių buvimu), kai reikia stipresnio tipavimo.

### Privalumai

- Grąžina `true` tik ne-`null` reikšmėms, kurių `typeof` yra `"object"`.
- Apsaugo nuo dažnos JavaScript klaidos, kai `null` kitu atveju būtų laikomas objektu.
- Veikia su paprastais objektais ir įtaisytų objektų egzemplioriais (pvz., `Date`, `RegExp`).
- Paprastas, greitas vykdymo laiko patikrinimas, tinkamas gynybiniam programavimui ir įvesties validavimui.

## Naudojimas

### Sintaksė

Funkcija:

- `isObject(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar ji yra `object`.

### Lokalus funkcijos importas

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // įvestis vykdymo metu yra ne nulinis objektas
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isObject(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isObject](../_analysis/isObject.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:19:17 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>