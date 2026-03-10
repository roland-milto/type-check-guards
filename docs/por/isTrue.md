# isTrue

## Descrição

`isTrue` determina se um determinado valor é estritamente igual a `true`.

### Caso de uso

Use `isTrue` para validar flags, feature toggles ou valores de configuração em que apenas o literal `true` deve ser
aceito e todo o resto deve ser tratado como `false`.

> **Nota para utilizadores de TypeScript:**
>
> Use `isTrue` quando você precisar aceitar apenas o literal booleano `true`, e não apenas valores truthy.

### Vantagens

- Fornece uma verificação estrita para o literal booleano `true` (sem coerção).
- Ajuda a distinguir `true` de valores truthy como `1`, `"true"` ou `{}`.
- Comportamento simples e previsível, adequado para guards e pipelines de validação.

## Uso

### Sintaxe

Função:

- `isTrue(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // verdadeiro
const b = isTrue(1);         // falso
const c = isTrue("true");   // falso

if (isTrue(a)) {
  // a é verdadeiro aqui
}
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isTrue(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:45:58 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>