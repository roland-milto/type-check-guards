# isNumeric

## Kirjeldus

`isNumeric` määrab, kas antud `value` loetakse numbriliseks, kontrollides selle lahendatud tüüpi `NUMERIC_TYPES`-i
vastu.

### Kasutusjuht

Kasuta `isNumeric`-ut sisendite valideerimiseks (nt API payload’id, vormiväärtused, konfiguratsioon) enne numbriliste
operatsioonide tegemist ning numbrilaadsete tüüpide (nt `BigInt`) järjepidevaks aktsepteerimiseks vastavalt
`NUMERIC_TYPES`-ile.

> **Märkus TypeScripti kasutajatele:**
>
> `isNumeric` on tõeväärtuse tagastav predikaat; käsitle seda käitusaja kontrollina, kas väärtus kuulub teegi poolt
> määratletud numbriliste tüüpide hulka.

### Eelised

- Kasutab `getTypeOf` koos `NUMERIC_TYPES`-iga, et tsentraliseerida numbrilise tuvastamise loogika ja hoida kontrollid
  kogu koodibaasis järjepidevad.
- Tagastab lihtsa tõeväärtuse (`true`/`false`) hõlpsaks harundamiseks ning guard-stiilis kasutuseks.
- Toetab mitut numbrilist esitust (nt `number`, `BigInt`) vastavalt `NUMERIC_TYPES`-is määratule.

## Kasutus

### Süntaks

Funktsioon:

- `isNumeric(value)`

Parameetrid:

- `value`: Väärtus, mille numbrilist tüüpi kontrollida.

### Funktsiooni kohalik import

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v loetakse teegi tüübireeglite järgi numbriliseks
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isNumeric(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Fail loodi 6 February 2026 at 15:52:23 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>