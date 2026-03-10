# isSet

## Kirjeldus

Määrab, kas antud väärtus on `Set`.

### Kasutusjuht

Valideeri välisallikatest (nt JSON-i parsimine, kasutaja sisend või kolmandate osapoolte API-d) pärit sisendeid, et
tagada väärtuse `Set`-iks olemine enne `Set`-i toimingute tegemist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isSet`-i, et kitsendada `unknown` väärtusi enne `Set`-ile omaste API-de, nagu `.add`, `.has` või `.size`,
> kutsumist.

### Eelised

- Pakub lihtsat käitusaja kontrolli, et kinnitada, kas väärtus on `Set`.
- Aitab vältida tüübivigu, võimaldades varajast hargnemist, kui väärtus ei ole `Set`.
- Töötab mis tahes `Set`-i sisuga (tühi või täidetud) ja tagastab järjekindlalt `true`/`false`.

## Kasutus

### Süntaks

Funktsioon:

- `isSet(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a on käitusajal Set
  console.log(a.size);
}

console.log(isSet(b)); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isSet(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isSet](../_analysis/isSet.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:09:27 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>