# isEmpty

## Kirjeldus

Määrab, kas antud väärtus on tühi, tagastades `true` väärtuste `null`, `undefined`, tühjade/ainult tühikutest koosnevate
stringide, tühjade massiivide, tühja `Map`/`Set` või objektide puhul, millel puuduvad enda loendatavad omadused.

### Kasutusjuht

Kasuta `isEmpty` sisendite valideerimiseks ja puuduvate/tühjade väärtuste tuvastamiseks mitmes andmetüübis (nt
vormiväljad, API payload’id, konfiguratsiooniobjektid), kus `null`, `undefined`, tühikutest koosnevad stringid, tühjad
kogumid ja omadusteta objektid tuleks käsitleda tühjana.

> **Märkus TypeScripti kasutajatele:**
>
> `isEmpty` on tõeväärtust tagastav utiliit (mitte TypeScripti tüübi predikaat), seega see ei kitsenda tüüpe iseenesest;
> kasuta seda valideerimiseks/harunemiseks, mitte kompileerimisaja kitsendamiseks.

### Eelised

- Käsitleb `null` ja `undefined` väärtusi tühjuse kontrollimisel kui `true`.
- Peab ainult tühikutest koosnevaid stringe tühjaks, kärpides enne pikkuse kontrolli.
- Toetab levinud konteineritüüpe (massiivid, `Map`, `Set`) ning tavalisi objekte, millel puuduvad enda loendatavad
  omadused.
- Väldib päritud omaduste arvestamist, kasutades `hasOwnProperty` kontrolle.
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mis sobib valvuriteks ja valideerimiseks.

## Kasutus

### Süntaks

Funktsioon:

- `isEmpty(value)`

Parameetrid:

- `value`: Väärtus, mille tühjust kontrollida.

### Funktsiooni kohalik import

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isEmpty(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Fail loodi 6 February 2026 at 16:18:11 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>