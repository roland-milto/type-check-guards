# isTrue

## Kirjeldus

`isTrue` määrab, kas antud väärtus on rangelt võrdne `true`-ga.

### Kasutusjuht

Kasuta `isTrue` lippude, funktsioonilülitite (feature toggles) või konfiguratsiooniväärtuste valideerimiseks, kus
aktsepteerida tohib ainult literaali `true` ning kõike muud tuleb käsitleda kui `false`.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isTrue`, kui pead aktsepteerima ainult booleani literaali `true`, mitte lihtsalt tõeväärtuslikke (truthy)
> väärtusi.

### Eelised

- Pakub ranget kontrolli booleani literaali `true` jaoks (ilma tüübiteisenduseta).
- Aitab eristada `true`-d tõeväärtuslikest (truthy) väärtustest nagu `1`, `"true"` või `{}`.
- Lihtne ja etteaimatav käitumine, sobib kaitseteks (guards) ja valideerimistorustikeks.

## Kasutus

### Süntaks

Funktsioon:

- `isTrue(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // tõene
const b = isTrue(1);         // väär
const c = isTrue("true");   // väär

if (isTrue(a)) {
  // a on siin tõene
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isTrue(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:42:12 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>