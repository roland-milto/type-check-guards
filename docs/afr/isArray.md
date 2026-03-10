# isArray

## Beskrywing

`isArray` kontroleer of 'n gegewe waarde 'n skikking is en gee `true` terug as dit is, anders `false`.

### Gebruikscenario

Valideer onbekende data (bv. geparste JSON of API-antwoorde) om te verseker dat 'n waarde 'n skikking is voordat jy
iterasie doen, indekseer, of `.length` benader.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isArray` wanneer jy 'n runtime-kontrole vir skikkings nodig het; dit gee 'n booleaan terug en is veilig om
> met `unknown` waardes te roep.

### Voordele

- Gebruik die ingeboude `Array.isArray` vir betroubare skikking-opsporing oor realms (bv. iframes).
- Gee 'n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir guards en vertakkingslogika.
- Werk met enige insettipe omdat die parameter `unknown` is.

## Gebruik

### Sintaksis

Funksie:

- `isArray(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // invoer is 'n skikking tydens uitvoering
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isArray(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isArray](../_analysis/isArray.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 11:29:34 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>