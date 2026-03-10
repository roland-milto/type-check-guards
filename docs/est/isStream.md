# isStream

## Kirjeldus

`isStream` kontrollib, kas antud väärtus on voogobjekt (Node.js-i voogudega sarnane, `ReadableStream` või
`WritableStream`).

### Kasutusjuht

Valideeri sisendeid, mis võivad olla kas tavalised objektid või vood (nt failide üleslaadimised, HTTP-kehad või
töötlemistorustikud), ning hargne loogikat selle põhjal, kas väärtus on voog.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isStream`-i, et kitsendada `unknown` enne voogude meetodite kutsumist; see tunneb ära Node.js-i voogudega
> sarnased objektid (läbi `pipe`/`on`) ja Web Streamsid (`ReadableStream`/`WritableStream`), kui need globaalsed objektid
> eksisteerivad.

### Eelised

- Tuvastab turvaliselt levinud Node.js-i voogudega sarnased objektid, kontrollides `pipe` ja `on` funktsioonide
  olemasolu.
- Toetab ka Web Streamse, tuvastades `ReadableStream` ja `WritableStream`, kui need on saadaval.
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mis sobib valvuriteks ja hargnemisloogikaks.

## Kasutus

### Süntaks

Funktsioon:

- `isStream(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream on voosarnane; saad turvaliselt kasutada levinud voogude API-sid
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isStream(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isStream](../_analysis/isStream.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:39:32 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>