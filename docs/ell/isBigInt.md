# isBigInt

## Περιγραφή

Το `isBigInt` ελέγχει αν μια δεδομένη τιμή είναι τύπου `bigint`, επιστρέφοντας `true` για πρωτογενείς τιμές BigInt και
`false` διαφορετικά.

### Περίπτωση χρήσης

Επικύρωση και στένωση τιμών που προέρχονται από πηγές χωρίς τύπους (π.χ. ανάλυση JSON, είσοδος χρήστη, εξωτερικά API)
πριν από την εκτέλεση υπολογισμών ειδικών για BigInt ή την αποθήκευσή τους σε πεδία που δέχονται μόνο BigInt.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isBigInt` για να στενώσεις το `unknown` σε `bigint` πριν κάνεις αριθμητική BigInt (π.χ. `+`, `*`), η
> οποία απαιτεί τελεστέους BigInt.

### Πλεονεκτήματα

- Παρέχει έναν απλό, αξιόπιστο έλεγχο χρόνου εκτέλεσης για τον πρωτογενή τύπο `bigint`.
- Βοηθά στη στένωση τιμών `unknown` πριν από την εκτέλεση λειτουργιών αποκλειστικά για BigInt.
- Αποφεύγει ψευδώς θετικά: οι κανονικοί αριθμοί, οι συμβολοσειρές και άλλοι τύποι επιστρέφουν `false`.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isBigInt(value)`

Παράμετροι:

- `value`: Η τιμή προς έλεγχο.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // ἀληθές
console.log(isBigInt(10));  // ψευδές
console.log(isBigInt("10")); // ψευδές
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isBigInt(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 31 January 2026 at 23:31:39 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>