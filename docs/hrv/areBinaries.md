# areBinaries

## Opis

Provjerava je li zadana vrijednost neprazno polje valjanih binarnih nizova znakova i vraća `true` samo ako sve stavke
prođu provjeru valjanosti.

### Slučaj uporabe

Upotrijebite `areBinaries` kada primite nepoznat popis (npr. iz JSON-a, obrazaca ili API-ja) i trebate osigurati da je
to neprazno polje binarnih nizova znakova prije parsiranja ili obrade.

> **Napomena za TypeScript korisnike:**
>
> Upotrijebite `areBinaries` za provjeru nepoznatog ulaza prije pretvaranja binarnih nizova znakova u
> brojeve/BigInt-ove; osigurava da je polje neprazno i da je svaki element valjan binarni niz znakova.

### Prednosti

- Provjerava je li vrijednost neprazno polje u kojem je svaki element valjan binarni niz znakova.
- Vraća jednostavan booleovski rezultat (`true`/`false`) prikladan za čuvare, rane povratke i provjeru valjanosti ulaza.
- Sprječava naknadne pogreške pri parsiranju odbacivanjem polja koja sadrže bilo koji nebinarni unos.

## Uporaba

### Sintaksa

Funkcija:

- `areBinaries(array)`

Parametri:

- `array`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // istina
console.log(areBinaries(b)); // netočno
console.log(areBinaries([])); // netočno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areBinaries(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 23:14:44 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>