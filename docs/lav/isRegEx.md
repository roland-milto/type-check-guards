# isRegEx

## Apraksts

Nosaka, vai norādītā vērtība ir `RegExp` instance.

### Lietošanas gadījums

Validējiet lietotāja norādītas vai dinamiskas vērtības (piem., konfigurāciju, API slodzes, spraudņu ievades) pirms tās
apstrādāt kā regulāro izteiksmi.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isRegEx`, lai sašaurinātu `unknown` (vai apvienojuma) vērtības pirms RegExp specifisku īpašību vai metožu
> izmantošanas; tas atgriež `true` tikai vērtībām, kas ir `RegExp` instances.

### Priekšrocības

- Nodrošina vienkāršu izpildlaika tipa sargu, lai pārbaudītu, vai vērtība ir `RegExp`.
- Palīdz novērst kļūdas, kad kods sagaida regulāro izteiksmi (piem., pirms izsaukt `test`, `exec` vai nolasīt `source`).
- Darbojas gan ar regex literāļiem, gan ar instancēm, kas izveidotas, izmantojot `new RegExp(...)`.
- Atgriež skaidru būla rezultātu (`true`/`false`), nemetot izņēmumu ievadēm, kas nav regex.

## Lietošana

### Sintakse

Funkcija:

- `isRegEx(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input šeit ir RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isRegEx(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:30:02 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>