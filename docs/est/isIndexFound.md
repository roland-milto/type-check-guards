# isIndexFound

## Kirjeldus

`isIndexFound` määrab, kas antud väärtus on mittenegatiivne täisarv, mis näitab, et indeks on leitud.

### Kasutusjuht

Valideeri, et otsingutulemus esindab kasutatavat indeksit (täisarv `>= 0`) enne massiivi või stringi indekseerimist,
vältides `-1` või mittenumbriliste väärtuste juhuslikku kasutamist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isIndexFound` pärast toiminguid nagu `indexOf`, `findIndex` või kohandatud otsingud, kus `-1` (või muud
> kehtetud väärtused) võivad tähendada „ei leitud“. Kui see tagastab `true`, on väärtus number ja seda on ohutu kasutada
> massiivi/tekstiindeksina.

### Eelised

- Pakub lihtsat tüübi kaitset, et tuvastada, kas indeks leiti, kontrollides mittenegatiivset täisarvu.
- Tagastab `true` ainult kehtivate indeksilaadsete väärtuste (täisarvud `>= 0`) korral, lükates tagasi negatiivsed,
  mittetäisarvulised ja mittenumbrilised väärtused.
- Aitab vältida ühe võrra nihke ja tähisväärtuse vigu, kui töötatakse API-dega, mis tagastavad `-1` tähenduses „ei
  leitud“.

## Kasutus

### Süntaks

Funktsioon:

- `isIndexFound(value)`

Parameetrid:

- `value`: Kontrollitav väärtus, kas see on mittenegatiivne täisarv.

### Funktsiooni kohalik import

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx on siin arv ja on >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tüüpiline kasutus koos indexOf-iga
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isIndexFound(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:45:36 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>