# isDecimal

## Apraksts

`isDecimal` pārbauda, vai vērtība ir decimālās virknes reprezentācija bez sākuma/beigu atstarpēm un ar derīgu decimālo
formātu.

### Lietošanas gadījums

Validēt formas laukus, API slodzes vai konfigurācijas vērtības, kurām jābūt norādītām kā decimālai virknei (pēc izvēles
ar zīmi) bez jebkādām apkārtējām atstarpēm, pirms tās parsē vai saglabā.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isDecimal`, lai validētu lietotāja ievadi pirms tās konvertēšanas (piem., ar `Number(value)`), īpaši, ja
> atstarpes ir jānoraida.

### Priekšrocības

- Stingri pārbauda, vai ievade ir virkne un atbilst decimālliterāļa paraugam.
- Noraida sākuma un beigu atstarpes (tostarp vadības rakstzīmes), lai izvairītos no divdomīgas parsēšanas.
- Ātras sākotnējās pārbaudes (tipa pārbaude un pirmā/pēdējā rakstzīme) pirms regex palaišanas.
- Atgriež vienkāršu būla rezultātu (`true`/`false`), kas piemērots sargiem un ievades validācijai.

## Lietošana

### Sintakse

Funkcija:

- `isDecimal(value)`

Parametri:

- `value`: Vērtība, kuru pārbaudīt attiecībā uz decimālās virknes formātu.

### Lokāls funkcijas imports

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v šeit ir virkne (izpildlaikā pārbaudīta)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isDecimal(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 15:53:15 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>