# isNumber

## Descrição

`isNumber` verifica se um valor é um número finito e não `NaN`.

### Caso de uso

Valide entrada numérica de fontes não confiáveis (formulários, parâmetros de consulta, payloads JSON) antes de cálculos,
armazenamento ou verificações de intervalo, garantindo que apenas números finitos passem (`true`) e que todo o resto
retorne `false`.

> **Nota para utilizadores de TypeScript:**
>
> Use `isNumber` para validar valores `unknown` antes de fazer aritmética; ele rejeita `NaN`, `Infinity` e `-Infinity`.

### Vantagens

- Retorna `true` apenas para números JavaScript reais (verificação de tipo mais rejeição de `NaN` e infinito).
- Evita bugs comuns de validação em que `NaN`, `Infinity` ou `-Infinity` passam acidentalmente como números.
- Funciona bem como uma guarda em tempo de execução para entrada desconhecida (por exemplo, JSON, entrada do usuário,
  APIs externas).
- Simples, rápido e sem efeitos colaterais.

## Uso

### Sintaxe

Função:

- `isNumber(value)`

Parâmetros:

- `value`: O valor a verificar.

### Importação local da função

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input é um número finito válido
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isNumber(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:10:43 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>