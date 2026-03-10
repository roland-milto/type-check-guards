# areErrors

## Aprašymas

Patikrina, ar masyvas nėra tuščias ir ar jame yra tik `Error` objektai, grąžindamas `true` arba `false`.

### Naudojimo atvejis

Patvirtinti, kad vykdymo metu pateiktas `unknown[]` (pvz., suagreguotos nesėkmės, validavimo rezultatai arba
deserializuoti duomenys) yra netuščias `Error` objektų sąrašas prieš iteruojant, registruojant ar pakartotinai išmetant.

> **Pastaba TypeScript naudotojams:**
>
> `areErrors` grąžina `true` tik užpildytam masyvui, kuriame kiekvienas elementas yra `Error`; ji grąžina `false`
> tuščiam masyvui arba jei bent vienas elementas nėra `Error`.

### Privalumai

- Užtikrina, kad kiekvienas elementas yra `Error` egzempliorius, leidžiantis saugiai apdoroti klaidas ir jas
  registruoti.
- Atmeta tuščius masyvus, neleisdamas netyčia laikyti „nėra klaidų“ būsenų galiojančiais klaidų sąrašais.
- Puikiai tinka kaip vykdymo laiko apsauga dirbant su `unknown[]` įvestimis (pvz., iš API arba `catch` blokų).

## Naudojimas

### Sintaksė

Funkcija:

- `areErrors(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl `Error` objektų.

### Lokalus funkcijos importas

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value yra netuščias Error objektų masyvas
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areErrors(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 12:34:24 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>