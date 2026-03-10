# isOctal

## Descrição

Determina se um valor é uma string de literal octal válida (por exemplo, `0o755`).

### Caso de uso

Validar entrada do usuário ou valores de configuração que devem ser expressos como uma string de literal octal (por
exemplo, modos de permissão de arquivo como `0o644`) antes de analisá-los (parse) ou convertê-los.

> **Nota para utilizadores de TypeScript:**
>
> `isOctal` é uma verificação de tipo (type guard) (`value is string`). Após um resultado `true`, o TypeScript restringe
> a variável verificada para `string`.

### Vantagens

- Fornece uma verificação de tipo estrita: retorna `true` somente quando a entrada é uma string que corresponde a um
  formato de literal octal.
- Rejeita strings vazias e strings com espaços em branco à esquerda/à direita (controle/espaço ASCII), reduzindo
  correspondências acidentais.
- Suporta sinal opcional e não diferencia maiúsculas de minúsculas para o prefixo `0o`/`0O`.
- É tolerante com entradas que não são string ao retornar `false` em vez de lançar uma exceção.

## Uso

### Sintaxe

Função:

- `isOctal(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // verdadeiro
console.log(isOctal(b)); // verdadeiro
console.log(isOctal(c)); // falso
console.log(isOctal(d)); // falso

if (isOctal(a)) {
  // a é string aqui
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isOctal(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 15:42:57 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>