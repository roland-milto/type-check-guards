# isBoolean

## Περιγραφή

Καθορίζει αν μια δεδομένη τιμή είναι `boolean`.

### Περίπτωση χρήσης

Επικύρωσε εξωτερικά ή χωρίς τύπους δεδομένα (π.χ. μεταβλητές περιβάλλοντος, JSON payloads, παραμέτρους query) ώστε να
διασφαλίσεις ότι μια τιμή είναι `boolean` πριν τη χρησιμοποιήσεις σε λογική υπό συνθήκη.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isBoolean` για να περιορίσεις το `unknown` σε `boolean` πριν εφαρμόσεις πράξεις boolean.

### Πλεονεκτήματα

- Απλός και γρήγορος έλεγχος χρόνου εκτέλεσης με χρήση του `typeof`.
- Βοηθά στην επικύρωση άγνωστης εισόδου πριν από λογική ειδική για boolean.
- Επιστρέφει ένα προβλέψιμο αποτέλεσμα `boolean` (`true`/`false`).

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isBoolean(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // ὧδε τὸ input ἐστὶν boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isBoolean(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 14:36:09 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>