# isStream

## Apraksts

`isStream` pārbauda, vai dotā vērtība ir straumes objekts (Node.js straumei līdzīgs, `ReadableStream` vai
`WritableStream`).

### Lietošanas gadījums

Validēt ievades, kas var būt vai nu parasti objekti, vai straumes (piem., failu augšupielādes, HTTP ķermeņi vai
apstrādes konveijeri), un atzarot loģiku atkarībā no tā, vai vērtība ir straume.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isStream`, lai sašaurinātu `unknown` pirms straumes metožu izsaukšanas; tas atpazīst Node.js straumei
> līdzīgus objektus (caur `pipe`/`on`) un Web Streams (`ReadableStream`/`WritableStream`), ja šie globālie objekti pastāv.

### Priekšrocības

- Droši nosaka izplatītus Node.js straumei līdzīgus objektus, pārbaudot `pipe` un `on` funkciju esamību.
- Atbalsta arī Web Streams, atpazīstot `ReadableStream` un `WritableStream`, ja tie ir pieejami.
- Atgriež vienkāršu būla rezultātu (`true`/`false`), kas piemērots sargiem un atzarošanas loģikai.

## Lietošana

### Sintakse

Funkcija:

- `isStream(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream ir straumei līdzīgs; jūs varat droši izmantot izplatītos straumju API
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isStream(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isStream](../_analysis/isStream.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:41:54 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>