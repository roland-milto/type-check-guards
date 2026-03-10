# areIntegers

## Kirjeldus

`areIntegers` määrab, kas kõik antud massiivi elemendid on täisarvud, tagastades `true`, kui nad on, ja `false` muul
juhul.

### Kasutusjuht

Kasuta `areIntegers`-i kasutaja esitatud või väliste andmete (nt päringuparameetrid, JSON-payloadid, CSV-read)
valideerimiseks, kui sinu loogika nõuab täidetud täisarvuliste väärtuste loendit, näiteks ID-d, loendurid, lehekülgede
nihked või massiivi indeksid.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areIntegers`-i käitusaja valvurina `unknown[]` sisendite jaoks enne, kui käsitled neid kui `number[]`, mis
> sisaldab ainult täisarve. Kui see tagastab `false`, siis sisend kas ei ole täidetud massiiv või sisaldab vähemalt üht
> mittetäisarvulist väärtust.

### Eelised

- Tagastab `true` ainult siis, kui iga element on täisarv; vastasel juhul tagastab `false`.
- Aitab valideerida tundmatut sisendit enne ainult täisarvudega tehtavaid toiminguid (nt indekseerimine, loendused,
  ID-d).
- Ebaõnnestub kiiresti: lõpetab kontrollimise niipea, kui leitakse mittetäisarvuline element.

## Kasutus

### Süntaks

Funktsioon:

- `areIntegers(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollida täisarvuliste elementide suhtes.

### Funktsiooni kohalik import

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // tõene
console.log(areIntegers(b)); // tõene
console.log(areIntegers(c)); // väär

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areIntegers(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:58:10 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>