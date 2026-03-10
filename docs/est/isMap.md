# isMap

## Kirjeldus

Kontrollib, kas antud `value` on `Map`, tagastades `true`, kui on, ja `false` muul juhul.

### Kasutusjuht

Kasuta `isMap`, kui saad `unknown` väärtuse (nt JSON-i parsimisest, välistest API-dest või kasutaja sisendist) ja pead
enne `Map`-i toimingute tegemist veenduma, et see on `Map`.

> **Märkus TypeScripti kasutajatele:**
>
> `isMap` on käitusaja kaitse, mis tagastab `true`, kui väärtus on `Map`, ja `false` muul juhul; kasuta seda `unknown`
> kitsendamiseks enne `Map` API-de kutsumist.

### Eelised

- Pakub kiiret käitusaja kontrolli, kas väärtus on `Map`.
- Aitab vältida tüübi vigu, kaitstes koodiharusid, mis nõuavad `Map`-i meetodeid nagu `get`, `set` ja `has`.
- Toimib hästi kergekaalulise valideerimissammuna `unknown` sisendite käsitlemisel.

## Kasutus

### Süntaks

Funktsioon:

- `isMap(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isMap(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isMap](../_analysis/isMap.md)

<br>

---

<small>Fail loodi 31 January 2026 at 16:04:18 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>