# isPlainObject

## Kirjeldus

Kontrollib, kas antud `value` on tavaline objekt, ja tagastab `true`, kui on; vastasel juhul `false`.

### Kasutusjuht

Valideeri, et `unknown` sisend (nt parsitud JSON, välised andmed või funktsiooni argumendid) on tavaline objekt enne
võtmete lugemist või selle kaardistamist tüübitud konfiguratsiooniobjektiks.

> **Märkus TypeScripti kasutajatele:**
>
> `isPlainObject` on kasulik `unknown` kitsendamiseks enne, kui seda käsitletakse kirje-laadse objektina; see tagastab
`true` ainult väärtuste puhul, mille sisemine silt on `[object Object]`.

### Eelised

- Pakub lihtsat ja usaldusväärset kontrolli selle kohta, kas väärtus on tavaline objekt (s.t. `Object` / `{}`),
  tagastades `true` või `false`.
- Aitab eristada tavalisi objekte massiividest, funktsioonidest, `null`-ist ja muudest mittetavaliste objektide
  tüüpidest.
- Kasulik TypeScriptis tüübikaitsjana, et kitsendada `unknown` väärtusi enne objekti omadustele ligipääsu.

## Kasutus

### Süntaks

Funktsioon:

- `isPlainObject(value)`

Parameetrid:

- `value`: Väärtus, mida testitakse tavalise objekti staatuse suhtes.

### Funktsiooni kohalik import

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input on siin tavaline objekt
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // tõene
console.log(isPlainObject([])); // väär
console.log(isPlainObject(null)); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isPlainObject(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Fail loodi 6 February 2026 at 12:17:15 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>