# isIndexFound

## Aprašymas

`isIndexFound` nustato, ar pateikta reikšmė yra neneigiamas sveikasis skaičius, rodantis, kad indeksas rastas.

### Naudojimo atvejis

Patikrinkite, ar paieškos rezultatas yra naudojamas indeksas (sveikasis skaičius `>= 0`) prieš indeksuojant masyvą ar
eilutę, taip užkertant kelią atsitiktiniam `-1` ar ne skaitinių reikšmių naudojimui.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isIndexFound` po tokių operacijų kaip `indexOf`, `findIndex` ar pasirinktinių paieškų, kur `-1` (ar kitos
> netinkamos reikšmės) gali reikšti „nerasta“. Kai ji grąžina `true`, reikšmė yra skaičius ir ją saugu naudoti kaip
> masyvo/eilutės indeksą.

### Privalumai

- Pateikia paprastą tipo apsaugą, leidžiančią nustatyti, ar indeksas buvo rastas, patikrinant, ar tai neneigiamas
  sveikasis skaičius.
- Grąžina `true` tik galiojančioms į indeksą panašioms reikšmėms (sveikiesiems skaičiams `>= 0`), atmesdamas neigiamas,
  ne sveikąsias ir ne skaitines reikšmes.
- Padeda išvengti „off-by-one“ ir sarginių reikšmių klaidų dirbant su API, kurios grąžina `-1`, kai „nerasta“.

## Naudojimas

### Sintaksė

Funkcija:

- `isIndexFound(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar ji yra neneigiamas sveikasis skaičius.

### Lokalus funkcijos importas

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx čia yra skaičius ir yra >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tipinis naudojimas su indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isIndexFound(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:46:42 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>