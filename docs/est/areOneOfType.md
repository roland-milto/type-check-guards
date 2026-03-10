# areOneOfType

## Kirjeldus

`areOneOfType` kontrollib, kas kõik mittetühja massiivi elemendid on ühte määratud käitusaja tüüpidest.

### Kasutusjuht

Valideeri sissetulevaid andmeid (nt parsitud JSON), kus väli peab olema mittetühi massiiv, mille elemendid on piiratud
teadaoleva primitiivtüüpide hulgaga; tagasta `false`, kui massiiv on tühi või sisaldab mõnda mittelubatud tüüpi.

> **Märkus TypeScripti kasutajatele:**
>
> See funktsioon tagastab tõeväärtuse ega kitsenda kompileerimisajal massiivi elementide tüüpe; kasuta seda käitusaja
> valideerimissammuna enne edasist töötlemist.

### Eelised

- Tagab, et iga massiivi element vastab vähemalt ühele lubatud käitusaja tüübile, tagastades `true` ainult siis, kui
  kogu massiiv läbib kontrolli.
- Lükkab vigased sisendid varakult tagasi: tagastab `false`, kui `array` või `types` on tühi või ei ole täidetud
  massiiv.
- Kasulik segatüübiliste kogumite (nt numbrid ja stringid) valideerimiseks ühe `areOneOfType` väljakutsega.

## Kasutus

### Süntaks

Funktsioon:

- `areOneOfType(array, types)`

Parameetrid:

- `array`: Elementide massiiv, mida kontrollida antud tüüpide vastu.
- `types`: Stringide massiiv, mis esindab andmetüüpe, mille vastu kontrollida.

### Funktsiooni kohalik import

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areOneOfType(array, types)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Fail loodi 31 January 2026 at 23:36:37 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>