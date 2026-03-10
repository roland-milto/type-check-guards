# isOfType

## Kirjeldus

Määrab, kas antud `value` vastab määratud tüübistringile, kasutades primitiivide jaoks `typeof` ja keerukate tüüpide
jaoks varuvarianti.

### Kasutusjuht

Valideeri ja kitsenda `unknown` sisendeid (nt API vastused, kasutaja sisend, parsitud JSON), kontrollides enne
tüübispetsiifiliste toimingute tegemist, kas väärtus on oodatud tüübistringiga.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isOfType`, et haruneda käitusaja tüüpide alusel, kui töötad `unknown` väärtustega; see tagastab `true`/`false`
> ja käsitleb `null` ja `undefined` eraldi.

### Eelised

- Kontrollib primitiive otsese `typeof` abil kiiruse ja selguse huvides.
- Käsitleb korrektselt `null` ja `undefined`, mida pelgalt `typeof` ei suuda soovitud viisil eristada.
- Toetab keerukaid või kohandatud tüübistringe varuvariandina, kasutades võrdlust `getTypeOf` abil.
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mis sobib valvuriteks ja harudeks.

## Kasutus

### Süntaks

Funktsioon:

- `isOfType(value, type)`

Parameetrid:

- `value`: Väärtus, mida testida `type` vastu.
- `type`: Kontrollitava tüübi stringiesitus.

### Funktsiooni kohalik import

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input on siin arv
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input on siin string
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isOfType(value, type)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Fail loodi 30 January 2026 at 16:59:21 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>