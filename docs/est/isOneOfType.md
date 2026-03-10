# isOneOfType

## Kirjeldus

`isOneOfType` määrab, kas antud `value` vastab vähemalt ühele pakutud tüübistringile, tagastades `true`, kui leitakse
mõni vaste, ja `false` vastasel juhul.

### Kasutusjuht

Valideeri lõdvalt tüübitud või väliseid andmeid (nt parsitud JSON, päringuparameetrid), lubades enne edasise loogika
jätkamist mitu vastuvõetavat käitusaja tüüpi (näiteks `number` või `string`).

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isOneOfType`, kui soovid käitusajal kontrollida, et väärtus vastab mõnele mitmest lubatud tüübist; see
> tagastab `true`, kui vähemalt üks tüüp sobib, vastasel juhul `false`.

### Eelised

- Kontrollib väärtust mitme lubatud tüübi vastu ühe väljakutsega, tagastades `true` esimese vaste korral.
- Töötab `unknown` sisenditega, muutes selle kasulikuks käitusaja piiridel (nt välisandmed, kasutaja sisend).
- Lihtne tõeväärtuslik tulemus (`true`/`false`), mis sobitub hästi tingimusloogika ja varajaste tagastustega.

## Kasutus

### Süntaks

Funktsioon:

- `isOneOfType(value, types)`

Parameetrid:

- `value`: Väärtus, mida kontrollitakse määratud tüüpide vastu.
- `types`: Tüübistringide massiiv, mis esindab väärtuse võimalikke tüüpe.

### Funktsiooni kohalik import

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input on käitusajal objekt
}

console.log(isOneOfType(3, ["number", "string"])); // tõene
console.log(isOneOfType("hello", ["number", "boolean"])); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isOneOfType(value, types)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Fail loodi 31 January 2026 at 23:43:04 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>