# areBuffers

## Opis

`areBuffers` provjerava je li zadana vrijednost neprazan, popunjen niz u kojem je svaki element `Buffer`, vraćajući
`true` ako jest, a `false` u suprotnom.

### Slučaj uporabe

Validirajte dolazne nizove dijelova (npr. iz streamova, prijenosa datoteka ili mrežnih paketa) kako biste osigurali da
su svi dijelovi instance `Buffer` prije spajanja, dekodiranja ili prosljeđivanja kriptografskim ili funkcijama za
binarnu obradu.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areBuffers` za validaciju `unknown[]` prije pozivanja API-ja specifičnih za Buffer poput `Buffer.concat`,
> osiguravajući da funkcija vraća `true` samo kada je svaki element `Buffer`.

### Prednosti

- Osigurava da je svaki element u ulazu instanca Node.js `Buffer`, vraćajući `true` samo kada se cijeli niz podudara.
- Rano odbacuje nevažeće ulaze zahtijevajući neprazan, popunjen niz; vraća `false` za prazne nizove ili vrijednosti koje
  nisu nizovi.
- Korisno kao zaštita prije izvođenja operacija koje rade isključivo s bufferima (npr. spajanje, hashiranje, binarni
  protokoli).

## Uporaba

### Sintaksa

Funkcija:

- `areBuffers(array)`

Parametri:

- `array`: Niz koji se provjerava sadrži li instance buffera.

### Lokalni uvoz funkcije

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areBuffers(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 16:25:29 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>