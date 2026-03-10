# isPrimitive

## Bschrybig

`isPrimitive` bestimmt, öb en gegebene Wert es Primitive isch (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Aawändig

Iigabe zur Laufzyt validiere (z.B. API-Payload-Fälder, Konfigurationswert oder vom Benutzer aagee Date), zum
sicherstelle, dass en Wert es Primitive isch, bevor mer serialisiert, loggt oder nume-Primitive-Operatione aawändet.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isPrimitive` als Guard für `unknown`-Iigabe, bevor du si als Objäkt oder Funktion behandlisch; es git `true`
> zrugg für Primitive und `false` für Objäkt und Funktione.

### Vorteil

- Schnälle, allokationsfreii Prüef, öb en Wert es JavaScript-Primitive isch.
- Behandlet `null` korrekt als Primitive (au wenn `typeof null` `"object"` isch).
- Hilft, `unknown`-Wert z iischränke, bevor mer Operatione macht, wo nume für Objäkt gilt.

## Verwendig

### Syntax

Funktion:

- `isPrimitive(value)`

Parameter:

- `value`: De Wert, wo uf Primitive-Typ söll prüeft werde.

### Lokale Funktions-Import

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isPrimitive(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:56:12 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>