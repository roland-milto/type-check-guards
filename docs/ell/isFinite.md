# isFinite

## Περιγραφή

Καθορίζει αν μια δεδομένη `value` είναι πεπερασμένος `number`.

### Περίπτωση χρήσης

Χρησιμοποίησε το `isFinite` για να επικυρώσεις άγνωστη είσοδο (π.χ. από JSON, φόρμες ή APIs) πριν εκτελέσεις
αριθμητικούς υπολογισμούς, διασφαλίζοντας ότι η τιμή είναι ένας πραγματικός, πεπερασμένος αριθμός.

> **Σημείωση για χρήστες TypeScript:**
>
> Το `isFinite` επιστρέφει `true` μόνο για πεπερασμένους αριθμούς· επιστρέφει `false` για `NaN`, `Infinity` και για
> οποιαδήποτε τιμή που δεν είναι αριθμός.

### Πλεονεκτήματα

- Χρησιμοποιεί το ενσωματωμένο `Number.isFinite` για έναν αξιόπιστο έλεγχο περατότητας.
- Επιστρέφει `true` μόνο για πεπερασμένους αριθμούς· επιστρέφει `false` για `NaN`, `Infinity` και εισόδους που δεν είναι
  αριθμοί.
- Απλό κατηγόρημα χωρίς παρενέργειες, κατάλληλο για επικύρωση και λογική προστασίας (guarding).

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isFinite(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί ως προς την περατότητα.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers είναι: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // η value είναι εδώ ένας πεπερασμένος αριθμός
  const doubled = value * 2;
  console.log(doubled);
}
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isFinite(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 16:29:33 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>