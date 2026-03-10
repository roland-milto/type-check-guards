# isHexadecimal

## Lýsing

`isHexadecimal` athugar hvort tiltekið gildi sé sextándakerfis strengjabókstafur með skyldubundnu `0x`/`0X` forskeyti.

### Notkunartilvik

Notaðu `isHexadecimal` til að staðfesta stillingagildi, reiti í API-farmgögnum eða CLI-viðföng sem verða að vera gefin
upp sem sextándakerfis strengjabókstafir (t.d. auðkenni, grímur eða vistföng) og mega ekki innihalda bil í kring.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isHexadecimal` þegar þú þarft að staðfesta notendainntak eða raðað gögn sem strangt
> sextándakerfis-bókstafsstreng (þar með talið `0x`/`0X` forskeytið) áður en það er þáttað eða umbreytt.

### Kostir

- Staðfestir að gildi sé strengur og passi við strangt sextándakerfis-bókstafsform (krefst `0x`/`0X` forskeytis).
- Hafnar strengjum með bilum fremst eða aftast, sem hjálpar til við að forðast að óvart sé samþykkt inntak með fyllingu.
- Styður valkvætt formerki og er óháð há-/lágstöfum fyrir forskeyti og tölustafi, og skilar `true`/`false` á
  fyrirsjáanlegan hátt.

## Notkun

### Málfræði

Fall:

- `isHexadecimal(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // satt
isHexadecimal("-0Xff"); // satt
isHexadecimal("1A2B"); // ósatt (vantar forskeyti)
isHexadecimal(" 0x1A2B"); // ósatt (bil fremst)
isHexadecimal(0x1a2b); // ósatt (ekki strengur)
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isHexadecimal(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 22:59:10 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>