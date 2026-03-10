# isString

## Kirjeldus

`isString` määrab, kas antud väärtus on string.

### Kasutusjuht

Valideeri kasutaja sisendit, API päringuandmete välju või konfiguratsiooniväärtusi käitusajal, et tagada väärtuse
stringiks olemine enne stringitoimingute rakendamist (nt kärpimine, tükeldamine, tõstutundlikkuse muutmine).

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isString`-i `unknown` või lõdvalt tüübitud väärtuste valideerimiseks enne stringimeetodite kutsumist; see
> tagastab `true` ainult siis, kui `typeof value === "string"`.

### Eelised

- Lihtne ja kiire kontroll `typeof` abil.
- Tagastab etteaimatava tõeväärtuse: `true` stringide puhul, muidu `false`.
- Töötab nii tühjade kui ka mittetühjade stringidega.
- Kasulik kergekaalulise käitusaja kaitsekontrollina enne stringipõhiste toimingute tegemist.

## Kasutus

### Süntaks

Funktsioon:

- `isString(value)`

Parameetrid:

- `value`: Väärtus, mida testitakse, kas see on stringi tüüpi.

### Funktsiooni kohalik import

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input on siin string
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isString(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isString](../_analysis/isString.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:13:48 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>