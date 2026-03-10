# isFalse

## Περιγραφή

Το `isFalse` ελέγχει αν μια δεδομένη τιμή είναι αυστηρά ίση με το boolean literal `false`.

### Περίπτωση χρήσης

Επικύρωση άγνωστων δεδομένων (π.χ. από JSON, παραμέτρους query ή είσοδο χρήστη) όπου μόνο η ρητή boolean τιμή `false`
πρέπει να αντιμετωπίζεται ως έγκυρη σημαία (flag), και οτιδήποτε άλλο πρέπει να απορρίπτεται.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isFalse` όταν χρειάζεται να αποδεχτείς μόνο το literal `false` και να απορρίψεις όλες τις άλλες
> falsy τιμές· επιστρέφει `true` μόνο για `value === false`.

### Πλεονεκτήματα

- Παρέχει αυστηρό έλεγχο για το boolean literal `false` χωρίς εξαναγκασμό τύπου (coercion).
- Βοηθά να διακρίνεται το `false` από άλλες falsy τιμές όπως `0`, `""`, `null` και `undefined`.
- Βελτιώνει την αναγνωσιμότητα κάνοντας την πρόθεση ρητή κατά την επικύρωση άγνωστης εισόδου.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isFalse(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // η είσοδος είναι ακριβώς ψευδής εδώ
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isFalse(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 31 January 2026 at 16:21:24 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>