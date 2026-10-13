const questions = [
  {
    "id": 1,
    "concept": "Cálculo de Verdad: Condicional",
    "question": "Si se sabe que v(p) = V y v(q) = F, ¿cuál es el valor de verdad de la fórmula: (p ∧ ¬q) → q?",
    "options": [
      "Verdadero (V)",
      "Falso (F), ya que el antecedente es V y el consecuente es F (V → F = F).",
      "Indeterminado sin conocer el dominio."
    ],
    "answer": 1
  },
  {
    "id": 2,
    "concept": "Cálculo de Verdad: Implicación Falsa",
    "question": "Si la implicación p → q es FALSA, ¿cuál es el valor de verdad de la expresión: (p ∨ q) ∧ ¬q?",
    "options": [
      "Falso (F)",
      "Verdadero (V), porque obliga a p = V y q = F, resultando (V ∨ F) ∧ V = V.",
      "Contingente dependiendo del valor de p."
    ],
    "answer": 1
  },
  {
    "id": 3,
    "concept": "Cálculo de Verdad: Tres Variables",
    "question": "Dada la valuación p = F, q = V y r = F, ¿cuánto vale la expresión: (p ∨ q) → (r ∧ ¬p)?",
    "options": [
      "Verdadero (V)",
      "Falso (F), porque el antecedente es V y el consecuente es F (V → F = F).",
      "Indeterminado."
    ],
    "answer": 1
  },
  {
    "id": 4,
    "concept": "Cálculo de Verdad: Antecedente Falso",
    "question": "Si sabemos con certeza que v(p) = F, ¿cuál es el valor de verdad de: p → (q ↔ (r ∧ ¬s))?",
    "options": [
      "Verdadero (V), porque cualquier condicional con antecedente falso es automáticamente verdadero.",
      "Falso (F), porque el consecuente está indeterminado.",
      "Depende de los valores que tomen q, r y s."
    ],
    "answer": 0
  },
  {
    "id": 5,
    "concept": "Cálculo de Verdad: Fila Crítica del Parcial",
    "question": "En la tabla de verdad de [(p → q) ∧ ¬p] → ¬q, ¿qué valor toma la fórmula en la fila p = F y q = V?",
    "options": [
      "Falso (F), porque el antecedente da (V ∧ V) = V y el consecuente ¬q da F (V → F = F).",
      "Verdadero (V), porque una contradicción siempre implica falsedad.",
      "Verdadero (V), porque el antecedente es falso."
    ],
    "answer": 0
  },
  {
    "id": 6,
    "concept": "Cálculo de Verdad: Bicondicional",
    "question": "Si v(p) = F y v(q) = F, ¿cuál es el valor de verdad de la fórmula: ¬p ↔ ¬q?",
    "options": [
      "Falso (F)",
      "Verdadero (V), porque ambas subfórmulas tienen el mismo valor de verdad (V ↔ V = V).",
      "Contradicción lógica."
    ],
    "answer": 1
  },
  {
    "id": 7,
    "concept": "Cálculo de Verdad: Disyunción Exclusiva",
    "question": "Si v(p) = V y v(q) = V, ¿cuánto vale la disyunción exclusiva (p ⊻ q)?",
    "options": [
      "Verdadero (V)",
      "Falso (F), porque la disyunción exclusiva exige que exactamente una sea verdadera.",
      "Equivale a la disyunción inclusiva."
    ],
    "answer": 1
  },
  {
    "id": 8,
    "concept": "Cálculo de Verdad: Condicional Encadenado",
    "question": "Si v(p → q) = F y v(q → r) = V, ¿qué valor de verdad tiene la variable r?",
    "options": [
      "Obligatoriamente debe ser Falso (F).",
      "Obligatoriamente debe ser Verdadero (V).",
      "Puede ser tanto Verdadero como Falso, ya que con q = F el condicional (F → r) siempre es V."
    ],
    "answer": 2
  },
  {
    "id": 9,
    "concept": "Tablas de Verdad: Cantidad de Filas",
    "question": "¿Cuántas filas tiene la tabla de verdad de una fórmula con variables p, q, r que clasifique un argumento?",
    "options": [
      "6 filas (2 × 3).",
      "8 filas (2³ = 8).",
      "16 filas (2⁴ = 16)."
    ],
    "answer": 1
  },
  {
    "id": 10,
    "concept": "Tablas de Verdad: Clasificación del Parcial",
    "question": "Al construir la tabla de verdad de (p ∨ q) → (¬q → p), ¿cuál es el resultado de su columna principal?",
    "options": [
      "Todas sus 4 filas son Verdaderas (V) ⟹ Es una Tautología.",
      "Tiene 3 Verdaderas y 1 Falsa ⟹ Es una Contingencia.",
      "Todas sus 4 filas son Falsas (F) ⟹ Es una Contradicción."
    ],
    "answer": 0
  },
  {
    "id": 11,
    "concept": "Simbolización: Programación",
    "question": "Simboliza: 'El código compila correctamente y no contiene errores de sintaxis'. (p: compila, q: contiene errores)",
    "options": [
      "p ∧ ¬q",
      "p → ¬q",
      "¬(p ∧ q)"
    ],
    "answer": 0
  },
  {
    "id": 12,
    "concept": "Simbolización: Condición Necesaria",
    "question": "En el enunciado 'Tener conexión a Internet es condición necesaria para que la API responda' (c: conexión, r: API responde), ¿cuál es la simbolización correcta?",
    "options": [
      "c → r",
      "r → c (la condición necesaria siempre se ubica en el consecuente).",
      "c ↔ r"
    ],
    "answer": 1
  },
  {
    "id": 13,
    "concept": "Simbolización: Condición Suficiente",
    "question": "En el enunciado 'Aprobar el parcial es condición suficiente para promocionar' (a: aprueba, p: promociona), ¿cuál es la simbolización correcta?",
    "options": [
      "a → p (la condición suficiente siempre se ubica en el antecedente).",
      "p → a",
      "a ∧ p"
    ],
    "answer": 0
  },
  {
    "id": 14,
    "concept": "Simbolización: Ejercicio del Simulacro",
    "question": "Simboliza la frase del examen: 'Si Juan y Laura van al circo, nos dejarán su auto'. (j: Juan va, l: Laura va, a: dejan auto)",
    "options": [
      "(j ∧ l) → a",
      "(j ∨ l) → a",
      "j → (l ∧ a)"
    ],
    "answer": 0
  },
  {
    "id": 15,
    "concept": "Simbolización: Autenticación",
    "question": "Simboliza: 'El sistema concede acceso si y solo si la contraseña es válida y el usuario no está bloqueado'. (a: acceso, c: clave válida, b: bloqueado)",
    "options": [
      "a ↔ (c ∧ ¬b)",
      "(a → c) ∧ ¬b",
      "a ↔ (c ∨ ¬b)"
    ],
    "answer": 0
  },
  {
    "id": 16,
    "concept": "Identificación Práctica: Proposición vs Predicado",
    "question": "De las siguientes tres expresiones, ¿cuál clasifica formalmente como FUNCIÓN PROPOSICIONAL?",
    "options": [
      "\"Buenos Aires es la capital de Argentina.\"",
      "\"2 + 3 = 5\"",
      "\"x + 2 = 11\" (posee una variable libre sin especificar)."
    ],
    "answer": 2
  },
  {
    "id": 17,
    "concept": "Identificación Práctica: Constantes y Variables",
    "question": "Al simbolizar 'Pedro usa bastón' como B(p), ¿qué representa el símbolo 'p'?",
    "options": [
      "Una variable proposicional libre.",
      "Una constante individual concreta que refiere al sujeto específico Pedro.",
      "Un cuantificador existencial implícito."
    ],
    "answer": 1
  },
  {
    "id": 18,
    "concept": "Identificación Práctica: Pronombre Libre",
    "question": "¿Por qué el enunciado 'Ellos son buenos amigos' del parcial clasifica como función proposicional?",
    "options": [
      "Porque 'Ellos' funciona como una variable libre cuyo valor no está determinado en el discurso.",
      "Porque la amistad es un concepto subjetivo no cuantificable.",
      "Porque contiene más de un sujeto en la oración."
    ],
    "answer": 0
  },
  {
    "id": 19,
    "concept": "Simbolización: Negación de Conjunción",
    "question": "Traduce al lenguaje natural la expresión ¬(p ∧ q), donde p: 'El servidor está activo' y q: 'Hay conexión':",
    "options": [
      "\"El servidor no está activo y no hay conexión.\"",
      "\"No es cierto que el servidor esté activo y haya conexión a la vez.\"",
      "\"El servidor está activo o no hay conexión.\""
    ],
    "answer": 1
  },
  {
    "id": 20,
    "concept": "Simbolización: Disyunción Excluyente",
    "question": "¿Cómo se formaliza: 'El usuario paga con tarjeta o con transferencia, pero no con ambas'? (t: tarjeta, f: transferencia)",
    "options": [
      "(t ∨ f) ∧ ¬(t ∧ f)",
      "t ∨ f",
      "(t ∧ f) ∨ ¬(t ∨ f)"
    ],
    "answer": 0
  },
  {
    "id": 21,
    "concept": "Simplificación: Ley de De Morgan",
    "question": "Aplica la Ley de De Morgan para simplificar: ¬(p ∨ ¬q). ¿Cuál es la expresión equivalente resultante?",
    "options": [
      "¬p ∧ q (se niega p, cambia ∨ por ∧, y ¬(¬q) se vuelve q).",
      "¬p ∨ q",
      "¬p ∧ ¬q"
    ],
    "answer": 0
  },
  {
    "id": 22,
    "concept": "Simplificación: Ley de De Morgan",
    "question": "Aplica De Morgan a la expresión: ¬(¬p ∧ ¬q). ¿A qué equivale de forma simplificada?",
    "options": [
      "p ∨ q",
      "p ∧ q",
      "¬p ∨ ¬q"
    ],
    "answer": 0
  },
  {
    "id": 23,
    "concept": "Simplificación: Implicación Material",
    "question": "Reescribe el condicional ¬p → q utilizando únicamente negación y disyunción (Implicación Material):",
    "options": [
      "p ∨ q (ya que ¬(¬p) ∨ q ≡ p ∨ q).",
      "¬p ∨ q",
      "p ∧ ¬q"
    ],
    "answer": 0
  },
  {
    "id": 24,
    "concept": "Simplificación: Negación del Condicional",
    "question": "¿A qué equivale directamente la negación de una implicación: ¬(p → q)?",
    "options": [
      "¬p → ¬q",
      "p ∧ ¬q",
      "¬p ∨ q"
    ],
    "answer": 1
  },
  {
    "id": 25,
    "concept": "Simplificación: Ley de Absorción",
    "question": "Al aplicar la Ley de Absorción a la forma proposicional: p ∨ (p ∧ q), ¿qué fórmula equivalente se obtiene?",
    "options": [
      "p",
      "q",
      "p ∧ q"
    ],
    "answer": 0
  },
  {
    "id": 26,
    "concept": "Simplificación: Distributiva y Tercero Excluido",
    "question": "Simplifica la expresión del TP1: ¬(p ∨ q) ∨ (¬p ∧ q). Aplicando De Morgan y distributiva inversa resulta:",
    "options": [
      "¬p (porque queda ¬p ∧ (¬q ∨ q) ≡ ¬p ∧ V ≡ ¬p).",
      "¬q",
      "p ∨ q"
    ],
    "answer": 0
  },
  {
    "id": 27,
    "concept": "Equivalencia: Variaciones del Condicional",
    "question": "¿Cuál es la proposición CONTRARECÍPROCA equivalente a: 'Si un número es divisible por 4, entonces es par'?",
    "options": [
      "\"Si un número no es par, entonces no es divisible por 4.\"",
      "\"Si un número es par, entonces es divisible por 4.\"",
      "\"Si un número no es divisible por 4, entonces no es par.\""
    ],
    "answer": 0
  },
  {
    "id": 28,
    "concept": "Equivalencia: Variaciones del Condicional",
    "question": "¿Por qué la proposición recíproca (q → p) NO es lógicamente equivalente a la directa (p → q)?",
    "options": [
      "Porque tienen tablas de verdad distintas: cuando p es F y q es V, p → q es V mientras que q → p es F.",
      "Porque una recíproca siempre da una contradicción.",
      "Porque la recíproca solo es válida en lógica de predicados."
    ],
    "answer": 0
  },
  {
    "id": 29,
    "concept": "Simplificación: Identidad y Dominación",
    "question": "En el álgebra proposicional, ¿a qué se reduce la expresión: (p ∧ V) ∨ (q ∧ F)?",
    "options": [
      "p (ya que p ∧ V ≡ p, y q ∧ F ≡ F, quedando p ∨ F ≡ p).",
      "q",
      "V"
    ],
    "answer": 0
  },
  {
    "id": 30,
    "concept": "Simplificación: Equivalencia del TP1",
    "question": "En el TP1 se pide demostrar que p → (q ∨ r) ≡ (p ∧ ¬q) → r. ¿Cuál es el paso algebraico clave?",
    "options": [
      "p → (q ∨ r) ≡ ¬p ∨ q ∨ r ≡ (¬p ∨ q) ∨ r ≡ ¬(p ∧ ¬q) ∨ r ≡ (p ∧ ¬q) → r.",
      "Aplicar Modus Ponens directo en q.",
      "Suponer que r es una tautología independiente."
    ],
    "answer": 0
  },
  {
    "id": 31,
    "concept": "Inferencia: Modus Ponens Aplicado",
    "question": "Premisas: 1. Si el servidor se sobrecalienta, el sistema se reinicia (s → r). 2. El servidor se sobrecalentó (s). ¿Cuál es la conclusión válida?",
    "options": [
      "El sistema se reinicia (r), por Modus Ponens.",
      "El servidor no se sobrecalentó (¬s).",
      "El sistema se reinició por otra causa."
    ],
    "answer": 0
  },
  {
    "id": 32,
    "concept": "Inferencia: Modus Tollens Aplicado",
    "question": "Premisas: 1. Si el código tiene un bucle infinito, la memoria colapsa (b → m). 2. La memoria NO colapsó (¬m). ¿Qué se concluye válidamente?",
    "options": [
      "El código no tiene un bucle infinito (¬b), por Modus Tollens.",
      "El código tiene un bucle infinito (b).",
      "No se puede concluir nada de forma válida."
    ],
    "answer": 0
  },
  {
    "id": 33,
    "concept": "Inferencia: Silogismo Hipotético",
    "question": "Premisas: 1. Si estudio Álgebra, apruebo el parcial (a → p). 2. Si apruebo el parcial, promociono la materia (p → m). ¿Cuál es la conclusión?",
    "options": [
      "Si estudio Álgebra, promociono la materia (a → m), por Silogismo Hipotético.",
      "Estudié Álgebra y promocioné (a ∧ m).",
      "Promocioné la materia (m)."
    ],
    "answer": 0
  },
  {
    "id": 34,
    "concept": "Inferencia: Silogismo Disyuntivo",
    "question": "Premisas: 1. El bug está en el frontend o en el backend (f ∨ b). 2. El bug NO está en el frontend (¬f). ¿Qué se concluye?",
    "options": [
      "El bug está en el backend (b), por Silogismo Disyuntivo.",
      "El bug no está en ningún lado (¬f ∧ ¬b).",
      "El bug está en ambos componentes (f ∧ b)."
    ],
    "answer": 0
  },
  {
    "id": 35,
    "concept": "Inferencia: Detección de Falacia Formal",
    "question": "Razonamiento: 'Si llueve, el piso se moja. El piso está mojado. Por lo tanto, llueve'. ¿Por qué es un argumento INVÁLIDO?",
    "options": [
      "Porque comete la Falacia de Afirmación del Consecuente (el piso pudo mojarse con una manguera).",
      "Porque comete la Falacia de Negación del Antecedente.",
      "Porque el condicional es una contradicción."
    ],
    "answer": 0
  },
  {
    "id": 36,
    "concept": "Inferencia: Detección de Falacia Formal",
    "question": "Razonamiento: 'Si compilas con flags de optimización, el binario es rápido. No compilaste con flags de optimización. Por lo tanto, el binario no es rápido'. ¿Qué falacia es?",
    "options": [
      "Falacia de Negación del Antecedente (el binario pudo ser rápido por tener un algoritmo O(1)).",
      "Modus Tollens válido.",
      "Falacia del Tercero Excluido."
    ],
    "answer": 0
  },
  {
    "id": 37,
    "concept": "Inferencia: Cadena Deductiva",
    "question": "Premisas: 1. p → q, 2. q → r, 3. p. ¿Cuál es la deducción válida paso a paso?",
    "options": [
      "Por Silogismo Hipotético en 1 y 2 se obtiene p → r; luego por Modus Ponens con 3 se concluye r.",
      "Se concluye ¬r por Modus Tollens.",
      "Se concluye p ∧ q ∧ r como una contingencia."
    ],
    "answer": 0
  },
  {
    "id": 38,
    "concept": "Inferencia: Modus Tollens con Doble Negación",
    "question": "Premisas: 1. ¬p → q, 2. ¬q. ¿Cuál es la conclusión rigurosa?",
    "options": [
      "p (por Modus Tollens se deduce ¬(¬p), y por doble negación resulta p).",
      "¬p",
      "q"
    ],
    "answer": 0
  },
  {
    "id": 39,
    "concept": "Inferencia: Resolución Disyuntiva",
    "question": "Premisas: 1. p ∨ q, 2. ¬p ∨ r. ¿Qué fórmula se deriva por la Regla de Resolución?",
    "options": [
      "q ∨ r",
      "q ∧ r",
      "p ∧ r"
    ],
    "answer": 0
  },
  {
    "id": 40,
    "concept": "Inferencia: Conjunción de Premisas",
    "question": "Premisas: 1. El proceso A terminó (a). 2. El proceso B terminó (b). ¿Qué regla de inferencia permite concluir formalmente: a ∧ b?",
    "options": [
      "Regla de Conjunción (o Introducción de la Conjunción).",
      "Regla de Simplificación.",
      "Regla de Adición."
    ],
    "answer": 0
  },
  {
    "id": 41,
    "concept": "Reducción al Absurdo: Hipótesis Inicial",
    "question": "Para validar {p ∨ q, p → r, ¬r} ⊨ q por Reducción al Absurdo, ¿cuál es el primer paso metodológico?",
    "options": [
      "Suponer que el argumento es INVÁLIDO: conclusión falsa v(q) = F y todas las premisas verdaderas.",
      "Construir una tabla de 8 filas completa.",
      "Asumir que todas las premisas son falsas y la conclusión verdadera."
    ],
    "answer": 0
  },
  {
    "id": 42,
    "concept": "Reducción al Absurdo: Despeje de Variable",
    "question": "En el absurdo de {p ∨ q, p → r, ¬r} ⊨ q, si la premisa ¬r es Verdadera (v(¬r) = V), ¿cuánto vale r?",
    "options": [
      "v(r) = F obligatoriamente por definición de la negación.",
      "v(r) = V",
      "r queda indeterminado."
    ],
    "answer": 0
  },
  {
    "id": 43,
    "concept": "Reducción al Absurdo: Despeje del Condicional",
    "question": "Siguiendo con {p ∨ q, p → r, ¬r} ⊨ q, si v(p → r) = V y ya dedujimos que v(r) = F, ¿qué valor se ve forzado a tomar p?",
    "options": [
      "v(p) = F, porque si p fuera V el condicional resultaría falso (V → F = F), violando la hipótesis de premisa verdadera.",
      "v(p) = V",
      "Cualquier valor es compatible."
    ],
    "answer": 0
  },
  {
    "id": 44,
    "concept": "Reducción al Absurdo: Hallazgo de Contradicción",
    "question": "Con v(q) = F y v(p) = F, al evaluar la premisa restante (p ∨ q), ¿dónde surge la contradicción?",
    "options": [
      "v(p ∨ q) = F ∨ F = F, lo que contradice abiertamente que la premisa (p ∨ q) debía ser Verdadera (V).",
      "La contradicción surge en la variable r.",
      "No surge contradicción: el argumento es inválido."
    ],
    "answer": 0
  },
  {
    "id": 45,
    "concept": "Reducción al Absurdo: Silogismo Hipotético",
    "question": "Al demostrar {p → q, q → r} ⊨ p → r por el absurdo, suponer la conclusión falsa exige:",
    "options": [
      "v(p → r) = F, lo cual obliga a v(p) = V y v(r) = F.",
      "v(p) = F y v(r) = V.",
      "v(p) = F y v(r) = F."
    ],
    "answer": 0
  },
  {
    "id": 46,
    "concept": "Reducción al Absurdo: Contradicción del SH",
    "question": "Continuando con {p → q, q → r} ⊨ p → r, con p = V y r = F: de la premisa 1 (p → q = V) se fuerza q = V. ¿Qué contradicción surge en la premisa 2 (q → r = V)?",
    "options": [
      "Evalúa a V → F = F, contradiciendo que la premisa 2 debía ser Verdadera.",
      "Evalúa a F → F = V, sin contradicción.",
      "La contradicción surge en la variable p."
    ],
    "answer": 0
  },
  {
    "id": 47,
    "concept": "Reducción al Absurdo: Modus Tollens",
    "question": "Para validar {p → q, ¬q} ⊨ ¬p por el absurdo, se supone la conclusión falsa v(¬p) = F. Esto obliga a:",
    "options": [
      "v(p) = V. Luego, como p → q = V y p = V, se fuerza q = V, lo que contradice la premisa ¬q = V (q = F).",
      "v(p) = F, lo cual convalida todas las premisas.",
      "v(q) = V directamente sin analizar p."
    ],
    "answer": 0
  },
  {
    "id": 48,
    "concept": "Reducción al Absurdo: Silogismo Disyuntivo",
    "question": "Al validar {p ∨ q, ¬p} ⊨ q por el absurdo: suponemos q = F. Con ¬p = V (p = F), la premisa p ∨ q resulta ser:",
    "options": [
      "Falso (F ∨ F = F), contradiciendo que p ∨ q debía ser Verdadera.",
      "Verdadero (V), validando el absurdo.",
      "Indeterminada."
    ],
    "answer": 0
  },
  {
    "id": 49,
    "concept": "Reducción al Absurdo: Detección de Invalidez",
    "question": "¿Qué ocurre al aplicar reducción al absurdo sobre la falacia {p → q, q} ⊨ p?",
    "options": [
      "Suponiendo p = F, con q = V, la premisa p → q da F → V = V. ¡No hay contradicción! El argumento es efectivamente INVÁLIDO.",
      "Siempre se llega a una contradicción forzada.",
      "La reducción al absurdo no se puede aplicar a falacias."
    ],
    "answer": 0
  },
  {
    "id": 50,
    "concept": "Reducción al Absurdo: Justificación Final",
    "question": "¿Cuál es la conclusión formal obligatoria a escribir en el examen tras llegar a una contradicción en el absurdo?",
    "options": [
      "\"Habiéndose obtenido una contradicción, es imposible hacer las premisas verdaderas y la conclusión falsa simultáneamente. Por lo tanto, el argumento es VÁLIDO.\"",
      "\"El argumento es una contingencia demostrada.\"",
      "\"Las premisas deben ser descartadas.\""
    ],
    "answer": 0
  },
  {
    "id": 51,
    "concept": "Predicados: Regla de Oro Universal",
    "question": "Traduce al lenguaje formal: 'Todos los desarrolladores de software programan en C++'. (Dominio: personas, D(x): desarrollador, C(x): programa C++)",
    "options": [
      "∀x (D(x) → C(x))",
      "∀x (D(x) ∧ C(x))",
      "∃x (D(x) → C(x))"
    ],
    "answer": 0
  },
  {
    "id": 52,
    "concept": "Predicados: Regla de Oro Existencial",
    "question": "Traduce al lenguaje formal: 'Existen bucles que se repiten indefinidamente'. (Dominio: bucles, B(x): bucle, I(x): se repite indefinidamente)",
    "options": [
      "∃x (B(x) ∧ I(x))",
      "∃x (B(x) → I(x))",
      "∀x (B(x) ∧ I(x))"
    ],
    "answer": 0
  },
  {
    "id": 53,
    "concept": "Predicados: Ejercicio i del Simulacro",
    "question": "¿Cuáles son las DOS formas equivalentes de expresar 'Todas las personas pueden hacer eso'? (P(x): persona, H(x): puede hacer eso)",
    "options": [
      "Forma 1: ∀x (P(x) → H(x))  |  Forma 2: ¬∃x (P(x) ∧ ¬H(x))",
      "Forma 1: ∀x (P(x) ∧ H(x))  |  Forma 2: ∃x (P(x) → H(x))",
      "Forma 1: ∃x (P(x) ∧ H(x))  |  Forma 2: ¬∀x (P(x) → ¬H(x))"
    ],
    "answer": 0
  },
  {
    "id": 54,
    "concept": "Predicados: Ejercicio ii del Simulacro",
    "question": "¿Cuáles son las DOS formas equivalentes de 'No todos los perros ladran'? (P(x): perro, L(x): ladra)",
    "options": [
      "Forma 1: ¬∀x (P(x) → L(x))  |  Forma 2: ∃x (P(x) ∧ ¬L(x))",
      "Forma 1: ∀x (P(x) → ¬L(x))  |  Forma 2: ¬∃x (P(x) ∧ L(x))",
      "Forma 1: ∃x (P(x) ∧ L(x))   |  Forma 2: ¬∀x (P(x) ∧ L(x))"
    ],
    "answer": 0
  },
  {
    "id": 55,
    "concept": "Predicados: Ejercicio iii del Simulacro",
    "question": "¿Cuáles son las DOS formas equivalentes de 'Hay servidores que no están conectados a Internet'? (S(x): servidor, C(x): conectado)",
    "options": [
      "Forma 1: ∃x (S(x) ∧ ¬C(x))  |  Forma 2: ¬∀x (S(x) → C(x))",
      "Forma 1: ∃x (S(x) → ¬C(x))  |  Forma 2: ∀x (S(x) ∧ ¬C(x))",
      "Forma 1: ¬∃x (S(x) ∧ C(x))  |  Forma 2: ∀x (S(x) → ¬C(x))"
    ],
    "answer": 0
  },
  {
    "id": 56,
    "concept": "Predicados: Negación de 'Ninguno'",
    "question": "¿Cómo se simboliza 'Ningún número primo es negativo' y cuál es su negación lógica?",
    "options": [
      "Fórmula: ∀x (P(x) → ¬N(x)). Su negación es: ∃x (P(x) ∧ N(x)) ('Existe algún número primo negativo').",
      "Fórmula: ∃x (P(x) ∧ ¬N(x)). Su negación es: ∀x (P(x) ∧ N(x)).",
      "Fórmula: ¬∀x (P(x) → N(x)). Su negación es una contradicción."
    ],
    "answer": 0
  },
  {
    "id": 57,
    "concept": "Predicados: Contraejemplo Universal",
    "question": "Para el predicado Q(x): 'x < 2' con dominio los números enteros positivos, ¿cuál contraejemplo demuestra que ∀x Q(x) es FALSA?",
    "options": [
      "x = 3, ya que Q(3) afirma '3 < 2', lo cual es Falso.",
      "x = 1, ya que Q(1) es Verdadero.",
      "x = 0, porque no pertenece a los positivos."
    ],
    "answer": 0
  },
  {
    "id": 58,
    "concept": "Predicados: Demostración del Parcial (C++)",
    "question": "En el ejercicio 4a del parcial ('Todos los lenguajes compilados son de alto nivel. C++ es compilado. Por lo tanto, C++ es de alto nivel'): ¿qué pasos formales componen la prueba?",
    "options": [
      "1. ∀x (C(x) → A(x)) [Premisa], 2. C(c) [Premisa], 3. C(c) → A(c) [Instanciación Universal en 1], 4. A(c) [Modus Ponens en 3 y 2].",
      "1. C(c) [Premisa], 2. C(c) → A(c) [Premisa], 3. Tabla de verdad de 4 filas.",
      "1. Reducción al absurdo asumiendo C(c) = F."
    ],
    "answer": 0
  },
  {
    "id": 59,
    "concept": "Predicados: Falacia en Predicados",
    "question": "Premisas: 1. Todos los estudiantes de la tecnicatura programan (∀x (E(x) → P(x))). 2. Sofía programa (P(s)). Conclusión: Sofía es estudiante de la tecnicatura (E(s)). ¿Es válido?",
    "options": [
      "INVÁLIDO: comete la falacia de afirmación del consecuente (Sofía podría programar sin ser estudiante de la tecnicatura).",
      "VÁLIDO por Modus Ponens directo.",
      "VÁLIDO por Instanciación Universal."
    ],
    "answer": 0
  },
  {
    "id": 60,
    "concept": "Predicados: Distribución y Contraejemplo",
    "question": "En el dominio de los números enteros con P(x): 'x es par' y Q(x): 'x es impar', ¿por qué (∀x P(x)) ∨ (∀x Q(x)) es FALSA mientras que ∀x (P(x) ∨ Q(x)) es VERDADERA?",
    "options": [
      "Porque todo entero es par o impar (V), pero no todos son pares (F) ni todos son impares (F), dando F ∨ F = F.",
      "Porque la disyunción entre cuantificadores siempre se evalúa como falsa.",
      "Porque el número cero anula las dos propiedades."
    ],
    "answer": 0
  },
  {
    "id": 61,
    "concept": "Programación: Refactor con De Morgan",
    "question": "En JavaScript, ¿cómo se simplifica la condición if (!(esAdmin || tienePermiso)) aplicando De Morgan?",
    "options": [
      "if (!esAdmin && !tienePermiso)",
      "if (!esAdmin || !tienePermiso)",
      "if (esAdmin && tienePermiso)"
    ],
    "answer": 0
  },
  {
    "id": 62,
    "concept": "Programación: Refactor con De Morgan",
    "question": "En JavaScript, ¿cómo se reescribe de forma limpia if (!(edad >= 18 && tieneDNI))?",
    "options": [
      "if (edad < 18 || !tieneDNI)",
      "if (edad < 18 && !tieneDNI)",
      "if (edad >= 18 || !tieneDNI)"
    ],
    "answer": 0
  },
  {
    "id": 63,
    "concept": "Programación: Array.every() como ∀",
    "question": "Dado el array const notas = [7, 8, 10, 6], ¿qué valor devuelve la expresión: notas.every(n => n >= 6)?",
    "options": [
      "true, porque actúa como el cuantificador universal ∀x (Nota(x) ≥ 6) y todos los elementos lo cumplen.",
      "false, porque 6 no es estrictamente mayor a 6.",
      "[7, 8, 10, 6]"
    ],
    "answer": 0
  },
  {
    "id": 64,
    "concept": "Programación: Array.some() como ∃",
    "question": "Dado const logs = ['OK', 'WARN', 'ERROR', 'OK'], ¿qué evalúa logs.some(l => l === 'ERROR')?",
    "options": [
      "true, porque actúa como el cuantificador existencial ∃x (Log(x) = 'ERROR') y basta un solo elemento para ser verdadero.",
      "false, porque la mayoría de logs son 'OK'.",
      "undefined"
    ],
    "answer": 0
  },
  {
    "id": 65,
    "concept": "Programación: Condicional en Array.every()",
    "question": "Para verificar en JS que 'todos los usuarios activos son mayores de edad' (∀u (Activo(u) → MayorDeEdad(u))), aplicando p → q ≡ !p || q:",
    "options": [
      "usuarios.every(u => !u.activo || u.edad >= 18)",
      "usuarios.every(u => u.activo && u.edad >= 18)",
      "usuarios.some(u => !u.activo && u.edad >= 18)"
    ],
    "answer": 0
  },
  {
    "id": 66,
    "concept": "Programación: Python any() y all()",
    "question": "En Python, para verificar si existe al menos un elemento negativo en la lista nums, ¿cuál es el código idóneo?",
    "options": [
      "any(n < 0 for n in nums)",
      "all(n < 0 for n in nums)",
      "filter(n < 0, nums)"
    ],
    "answer": 0
  },
  {
    "id": 67,
    "concept": "Programación: SQL NOT EXISTS",
    "question": "En SQL, para consultar los clientes que no tienen ninguna factura impaga (¬∃f (Factura(f) ∧ Impaga(f))), ¿qué cláusula lógica se utiliza?",
    "options": [
      "SELECT * FROM Clientes c WHERE NOT EXISTS (SELECT 1 FROM Facturas f WHERE f.cliente_id = c.id AND f.estado = 'IMPAGA');",
      "SELECT * FROM Clientes c WHERE EXISTS (SELECT 1 FROM Facturas f WHERE f.estado = 'PAGADA');",
      "SELECT * FROM Clientes c JOIN Facturas f ON c.id = f.cliente_id;"
    ],
    "answer": 0
  },
  {
    "id": 68,
    "concept": "Programación: Cortocircuito Lógico (Short-Circuit)",
    "question": "En la expresión de JavaScript: false && funcionPesada(), ¿por qué funcionPesada() nunca se ejecuta?",
    "options": [
      "Por la ley de dominación de la conjunción: F ∧ p ≡ F, el motor interrumpe la evaluación de inmediato.",
      "Porque false genera una excepción en tiempo de ejecución.",
      "Por el principio del tercero excluido."
    ],
    "answer": 0
  },
  {
    "id": 69,
    "concept": "Programación: Cortocircuito con Disyunción",
    "question": "En la expresión de JavaScript: true || funcionPesada(), ¿por qué no se ejecuta funcionPesada()?",
    "options": [
      "Por la ley de dominación de la disyunción: V ∨ p ≡ V, el resultado ya es verdadero.",
      "Porque la función requiere parámetros obligatorios.",
      "Porque la disyunción exclusiva prevalece."
    ],
    "answer": 0
  },
  {
    "id": 70,
    "concept": "Programación: Negación de Comparaciones",
    "question": "¿Cuál es la negación lógica exacta de la expresión en código: (saldo > 1000)?",
    "options": [
      "saldo <= 1000 (menor o igual, no simplemente menor).",
      "saldo < 1000",
      "saldo >= 1000"
    ],
    "answer": 0
  },
  {
    "id": 71,
    "concept": "Examen: Clasificación de Expresión",
    "question": "Dada la fórmula [(p → q) ∧ p] → q, ¿cuál es su clasificación formal?",
    "options": [
      "Tautología (es la forma condicional del Modus Ponens).",
      "Contradicción.",
      "Contingencia."
    ],
    "answer": 0
  },
  {
    "id": 72,
    "concept": "Examen: Clasificación de Expresión",
    "question": "Dada la fórmula [(p → q) ∧ ¬q] → ¬p, ¿cuál es su clasificación formal?",
    "options": [
      "Tautología (es la forma condicional del Modus Tollens).",
      "Contradicción.",
      "Contingencia."
    ],
    "answer": 0
  },
  {
    "id": 73,
    "concept": "Examen: Tabla de Verdad",
    "question": "Al construir la tabla de verdad de la fórmula p ∧ (q ∨ ¬q), ¿a qué columna equivale exactamente el resultado final?",
    "options": [
      "A la columna de p (ya que q ∨ ¬q ≡ V y p ∧ V ≡ p).",
      "A la columna de q.",
      "A una columna de solo valores V."
    ],
    "answer": 0
  },
  {
    "id": 74,
    "concept": "Examen: Reducción al Absurdo",
    "question": "Para demostrar que {p → q, q → r, ¬r} ⊨ ¬p por el absurdo, si suponemos ¬p = F (p = V), ¿cuál es la cadena de contradicción?",
    "options": [
      "Con p = V y p → q = V ⟹ q = V. Con q = V y q → r = V ⟹ r = V, contradiciendo la premisa ¬r = V (r = F).",
      "No se deduce contradicción en r.",
      "La contradicción se produce en p = F."
    ],
    "answer": 0
  },
  {
    "id": 75,
    "concept": "Examen: Silogismo con Predicados",
    "question": "Premisas: 1. Todo número par es divisible por 2 (∀x (P(x) → D(x))). 2. El número 8 es par (P(8)). ¿Cuál es la demostración formal paso a paso?",
    "options": [
      "1. ∀x (P(x) → D(x)) [Premisa], 2. P(8) [Premisa], 3. P(8) → D(8) [IU en 1], 4. D(8) [MP en 3 y 2]. Conclusión: 8 es divisible por 2.",
      "Aplicar tabla de verdad de 4 filas con p y q.",
      "Por inducción completa sobre los números enteros."
    ],
    "answer": 0
  }
];

// Export standard CommonJS module if in Node, or expose globally in browser
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = questions;
} else {
  window.questionsData = questions;
}
