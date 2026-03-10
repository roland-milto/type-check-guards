# isPrimitive

## Περιγραφή

Το `isPrimitive` καθορίζει αν μια δοσμένη τιμή είναι primitive (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Περίπτωση χρήσης

Επικύρωση εισόδων κατά την εκτέλεση (π.χ. πεδία payload API, τιμές ρυθμίσεων ή δεδομένα που παρέχει ο χρήστης) ώστε να
διασφαλιστεί ότι μια τιμή είναι primitive πριν από τη σειριοποίηση, την καταγραφή (logging) ή την εφαρμογή λειτουργιών
που ισχύουν μόνο για primitives.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isPrimitive` για να προστατεύσεις εισόδους `unknown` πριν τις χειριστείς ως αντικείμενα ή
> συναρτήσεις· επιστρέφει `true` για primitives και `false` για αντικείμενα και συναρτήσεις.

### Πλεονεκτήματα

- Γρήγορος έλεγχος χωρίς δεσμεύσεις μνήμης για το αν μια τιμή είναι JavaScript primitive.
- Αντιμετωπίζει σωστά το `null` ως primitive (παρότι το `typeof null` είναι `"object"`).
- Βοηθά στον περιορισμό τιμών `unknown` πριν από την εκτέλεση λειτουργιών που ισχύουν μόνο για αντικείμενα.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isPrimitive(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί αν είναι primitive τύπος.

### Τοπική εισαγωγή συνάρτησης

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

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isPrimitive(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 23:55:58 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>