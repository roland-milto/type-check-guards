# isNullOrUndefined

## Περιγραφή

Ελέγχει αν μια δεδομένη τιμή είναι `null` ή `undefined`.

### Περίπτωση χρήσης

Χρησιμοποιήστε το `isNullOrUndefined` όταν χρειάζεται να αντιμετωπίζετε τόσο το `null` όσο και το `undefined` ως «καμία
τιμή», όπως κατά την επικύρωση προαιρετικών εισόδων, την κανονικοποίηση payloads API ή την προστασία διαδρομών κώδικα
πριν από την αποαναφορά (dereferencing) μιας δυνητικά ελλείπουσας τιμής.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `isNullOrUndefined` για να προστατευτείτε από ελλείπουσες τιμές πριν από την πρόσβαση σε ιδιότητες ή
> την κλήση μεθόδων· επιστρέφει `true` μόνο για `null` και `undefined`.

### Πλεονεκτήματα

- Παρέχει μια σαφή, επαναχρησιμοποιήσιμη guard για την ανίχνευση `null` και `undefined` σε ένα σημείο.
- Επιστρέφει ένα απλό boolean (`true`/`false`) που είναι εύκολο να συνδυαστεί σε συνθήκες και επικυρώσεις.
- Βοηθά στην αποφυγή συνηθισμένων σφαλμάτων χρόνου εκτέλεσης ελέγχοντας για ελλείπουσες τιμές πριν από την πρόσβαση σε
  ιδιότητες ή την κλήση μεθόδων.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isNullOrUndefined(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί για `null` ή `undefined`.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // χειρίσου τὴν ἐλλείπουσαν τιμήν
}

console.log(isNullOrUndefined(b)); // ἀληθές
console.log(isNullOrUndefined(c)); // ψεῦδος

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isNullOrUndefined(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 31 January 2026 at 00:33:32 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>