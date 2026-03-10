# areFloats

## Περιγραφή

Το `areFloats` ελέγχει αν ένας δοσμένος πίνακας είναι γεμάτος και όλα τα στοιχεία του είναι float.

### Περίπτωση χρήσης

Χρησιμοποίησε το `areFloats` όταν λαμβάνεις ένα `unknown[]` (π.χ. από JSON, παραμέτρους query ή εξωτερικά API) και
χρειάζεται να διασφαλίσεις ότι είναι ένας γεμάτος πίνακας όπου κάθε στοιχείο είναι float πριν εκτελέσεις αριθμητική
λογική όπως μέσο όρο, παρεμβολή ή στατιστικούς υπολογισμούς.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `areFloats` για να προστατεύσεις (guard) ένα `unknown[]` πριν το χειριστείς ως `number[]` που
> περιέχει μόνο float· επιστρέφει `false` για κενές λίστες και για οποιοδήποτε στοιχείο που δεν είναι float.

### Πλεονεκτήματα

- Επιστρέφει `true` μόνο όταν η είσοδος είναι ένας μη κενός πίνακας και κάθε στοιχείο είναι κινητής υποδιαστολής (
  float).
- Αποτυγχάνει γρήγορα: επιστρέφει `false` μόλις βρεθεί ένα στοιχείο που δεν είναι float.
- Βοηθά στην επικύρωση άγνωστης εισόδου πριν από την εκτέλεση υπολογισμών ειδικών για float.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areFloats(array)`

Παράμετροι:

- `array`: Ο πίνακας που θα ελεγχθεί για στοιχεία float.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // ἀληθές
console.log(areFloats(b)); // ψευδές
console.log(areFloats(c)); // ψευδές

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // μηδέν

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areFloats(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 15:57:03 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>