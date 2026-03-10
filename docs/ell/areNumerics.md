# areNumerics

## Περιγραφή

Το `areNumerics` ελέγχει αν μια τιμή είναι ένας μη κενός πίνακας όπου όλα τα στοιχεία είναι αριθμητικά.

### Περίπτωση χρήσης

Χρησιμοποιήστε το `areNumerics` για να επικυρώσετε εξωτερικά ή μη τυποποιημένα δεδομένα (π.χ. JSON payloads, query
parameters, form input) πριν υπολογίσετε αθροίσματα, μέσους όρους ή άλλες αριθμητικές πράξεις, διασφαλίζοντας ότι η
είσοδος είναι ένας μη κενός αριθμητικός πίνακας και επιστρέφοντας `false` διαφορετικά.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `areNumerics` για να προστατεύσετε είσοδο τύπου `unknown` πριν τη χειριστείτε ως αριθμητικό πίνακα·
> επιστρέφει `false` για μη πίνακες και για κενούς πίνακες.

### Πλεονεκτήματα

- Επιστρέφει `true` μόνο όταν η είσοδος είναι ένας μη κενός πίνακας και κάθε στοιχείο είναι αριθμητικό.
- Αποτυγχάνει γρήγορα: σταματά τον έλεγχο μόλις βρεθεί ένα μη αριθμητικό στοιχείο, επιστρέφοντας `false`.
- Βοηθά στην ασφαλή επικύρωση άγνωστης εισόδου πριν από την εκτέλεση αριθμητικών πράξεων.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areNumerics(array)`

Παράμετροι:

- `array`: Ο πίνακας που θα ελεγχθεί για αριθμητικά στοιχεία.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // ἀληθές
console.log(areNumerics(b)); // ἀληθές
console.log(areNumerics(c)); // ψεῦδος
console.log(areNumerics(d)); // ψεῦδος
console.log(areNumerics(e)); // ψεῦδος

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // μηδέν

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areNumerics(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 6 February 2026 at 16:04:50 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>