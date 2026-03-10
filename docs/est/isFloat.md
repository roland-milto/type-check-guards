# isFloat

## Kirjeldus

`isFloat` määrab, kas antud `value` on lõplik ujukomaarv (st `number`, mis ei ole täisarv).

### Kasutusjuht

Valideeri kasutaja sisestatud arvuline väärtus, kus on vaja murdarvulisi väärtusi (nt hinnad, mõõtmised, määrad), ning
lükka tagasi täisarvud, `NaN` ja lõpmatused.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isFloat`, kui pead aktsepteerima ainult lõplikke, mitte-täisarvulisi arvulisi sisendeid; see lükkab tagasi
> täisarvud ja mittelõplikud arvud.

### Eelised

- Tagastab `true` ainult lõplike, mitte-täisarvuliste arvude korral (välistab täisarvud, `NaN`, `Infinity` ja
  `-Infinity`).
- Töötab mis tahes sisendtüübiga (`unknown`) ja kitsendab turvaliselt, kontrollides `typeof value === "number"`.
- Kasutab sisseehitatud arvulisi kontrollfunktsioone (`Number.isInteger`, `Number.isFinite`) etteaimatava käitumise
  jaoks.

## Kasutus

### Süntaks

Funktsioon:

- `isFloat(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollitakse, kas see on ujukomaarv.

### Funktsiooni kohalik import

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // väärtus on käitusajal number; see on lõplik ja mitte täisarv
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isFloat(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Fail loodi 30 January 2026 at 16:07:26 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>