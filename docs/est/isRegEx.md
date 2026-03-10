# isRegEx

## Kirjeldus

Määrab, kas antud väärtus on `RegExp` instants.

### Kasutusjuht

Valideeri kasutaja antud või dünaamilisi väärtusi (nt konfiguratsioon, API payload’id, plugina sisendid) enne, kui
käsitled neid regulaaravaldisena.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isRegEx`, et kitsendada `unknown` (või liit-) väärtusi enne RegExp-spetsiifiliste omaduste või meetodite
> kasutamist; see tagastab `true` ainult väärtuste puhul, mis on `RegExp` instantsid.

### Eelised

- Pakub lihtsat käitusaja tüübi kaitset, et kontrollida, kas väärtus on `RegExp`.
- Aitab vältida vigu, kui kood eeldab regulaaravaldist (nt enne `test`, `exec` kutsumist või `source` lugemist).
- Töötab nii regex-literaalide kui ka `new RegExp(...)` kaudu loodud instantsidega.
- Tagastab selge tõeväärtuse (`true`/`false`) ilma erindit viskamata mitte-regex sisendite korral.

## Kasutus

### Süntaks

Funktsioon:

- `isRegEx(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input on siin RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isRegEx(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:29:08 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>