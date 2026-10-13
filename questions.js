const questions = [
  {
    "id": 1,
    "concept": "Concepto de Proposición",
    "question": "¿Qué es una proposición según la lógica matemática?",
    "options": [
      "Cualquier expresión o algoritmo que realice una asignación destructiva en memoria.",
      "Toda expresión lingüística respecto de la cual puede afirmarse inequívocamente si es verdadera o falsa.",
      "Una fórmula matemática que contiene al menos una variable libre sin especificar."
    ],
    "answer": 1
  },
  {
    "id": 2,
    "concept": "Identificación de Proposiciones",
    "question": "¿Cuál de las siguientes expresiones constituye una proposición válida?",
    "options": [
      "\"¡Cierra la conexión al servidor de inmediato!\"",
      "\"¿Cuál es el valor almacenado en el registro acumulador?\"",
      "\"El número 14 es divisible por 5.\""
    ],
    "answer": 2
  },
  {
    "id": 3,
    "concept": "Proposiciones vs Enunciados",
    "question": "¿Por qué la oración \"x + 2 = 11\" no es considerada una proposición atómica?",
    "options": [
      "Porque al contener una variable libre sin especificar su valor ni cuantificarla, no posee un valor de verdad definido.",
      "Porque las operaciones aritméticas pertenecen al álgebra lineal y no a la lógica simbólica.",
      "Porque una igualdad matemática siempre se evalúa como una contradicción en lógica binaria."
    ],
    "answer": 0
  },
  {
    "id": 4,
    "concept": "Tipos de Proposiciones",
    "question": "¿Cuál es la diferencia entre una proposición simple (atómica) y una compuesta (molecular)?",
    "options": [
      "La simple contiene conectivas como la conjunción; la compuesta solo utiliza negaciones unarias.",
      "La simple no contiene propiamente a otra proposición; la compuesta se construye uniendo simples mediante conectivas lógicas.",
      "La simple siempre es una tautología; la compuesta siempre es una contingencia."
    ],
    "answer": 1
  },
  {
    "id": 5,
    "concept": "Variables Proposicionales",
    "question": "¿Qué representa una variable proposicional (como p, q, r) en la lógica simbólica?",
    "options": [
      "Una posición de memoria física inmutable donde solo pueden guardarse números enteros.",
      "Un símbolo que no representa una proposición fija, sino cualquier proposición que pueda sustituirse en su lugar.",
      "Una función que devuelve true o false dependiendo del estado de la CPU."
    ],
    "answer": 1
  },
  {
    "id": 6,
    "concept": "Negación",
    "question": "¿Cuál es una característica distintiva de la conectiva de negación (¬p o ~p)?",
    "options": [
      "Es la única conectiva unaria, aplicándose a una sola proposición para invertir su valor de verdad.",
      "Requiere al menos dos operandos para poder evaluar la tabla de verdad correspondiente.",
      "Convierte automáticamente una contingencia en una contradicción formal."
    ],
    "answer": 0
  },
  {
    "id": 7,
    "concept": "Conjunción",
    "question": "¿Cuándo es verdadera la conjunción lógica (p ∧ q)?",
    "options": [
      "Únicamente cuando ambas proposiciones (p y q) son simultáneamente verdaderas.",
      "Cuando al menos una de las proposiciones componentes resulta ser verdadera.",
      "Cuando el antecedente es falso y el consecuente es verdadero."
    ],
    "answer": 0
  },
  {
    "id": 8,
    "concept": "Disyunción Inclusiva",
    "question": "En matemática y programación, ¿cuándo es falsa la disyunción (p ∨ q)?",
    "options": [
      "Cuando una de las dos proposiciones es verdadera y la otra es falsa.",
      "Únicamente cuando ambas proposiciones (p y q) son simultáneamente falsas.",
      "Siempre que ambas proposiciones sean simultáneamente verdaderas."
    ],
    "answer": 1
  },
  {
    "id": 9,
    "concept": "Disyunción Exclusiva vs Inclusiva",
    "question": "¿En qué se diferencia la disyunción exclusiva (⊻) de la disyunción estándar (∨)?",
    "options": [
      "La exclusiva solo es verdadera si ambas proposiciones tienen el mismo valor de verdad.",
      "La exclusiva es verdadera cuando exactamente una es verdadera, siendo falsa si ambas son simultáneamente verdaderas.",
      "La exclusiva nunca puede representarse mediante una tabla de verdad binaria."
    ],
    "answer": 1
  },
  {
    "id": 10,
    "concept": "Condicional / Implicación",
    "question": "¿Bajo qué única combinación de valores la implicación (p → q) resulta ser FALSA?",
    "options": [
      "Cuando el antecedente p es falso y el consecuente q es verdadero.",
      "Cuando tanto el antecedente p como el consecuente q son falsos.",
      "Cuando el antecedente p es verdadero y el consecuente q es falso."
    ],
    "answer": 2
  },
  {
    "id": 11,
    "concept": "Condicional y Semántica",
    "question": "Considera la frase: \"Si 5 es primo, entonces Bahía Blanca está en la provincia de Buenos Aires\". ¿Qué dictamina la lógica proposicional?",
    "options": [
      "Es un condicional inválido porque no existe relación causal ni temática entre ambas partes.",
      "Es una implicación formalmente verdadera, pues a la lógica le importa la forma y los valores de verdad, no la relación temática.",
      "Es una contradicción semántica que anula el principio de bivalencia."
    ],
    "answer": 1
  },
  {
    "id": 12,
    "concept": "Bicondicional",
    "question": "¿Cuándo resulta ser verdadera la doble implicación o bicondicional (p ↔ q)?",
    "options": [
      "Únicamente cuando el antecedente es falso.",
      "Cuando p y q tienen exactamente el mismo valor de verdad (ambas V o ambas F).",
      "Cuando al menos una de las proposiciones toma el valor verdadero."
    ],
    "answer": 1
  },
  {
    "id": 13,
    "concept": "Condición Necesaria y Suficiente",
    "question": "En una implicación p → q, ¿cómo se denominan conceptualmente p y q?",
    "options": [
      "p es condición necesaria para q; q es condición suficiente para p.",
      "p es condición suficiente para q; q es condición necesaria para p.",
      "Ambas son simultáneamente condiciones necesarias y suficientes entre sí."
    ],
    "answer": 1
  },
  {
    "id": 14,
    "concept": "Variaciones del Condicional",
    "question": "Dada la implicación directa p → q, ¿cuál de sus proposiciones asociadas es lógicamente equivalente a ella?",
    "options": [
      "La recíproca (q → p).",
      "La contraria (¬p → ¬q).",
      "La contrarecíproca (¬q → ¬p)."
    ],
    "answer": 2
  },
  {
    "id": 15,
    "concept": "Dimensiones de Tablas de Verdad",
    "question": "Si una forma proposicional contiene 4 variables proposicionales distintas (p, q, r, s), ¿cuántas filas tendrá su tabla de verdad?",
    "options": [
      "8 filas.",
      "16 filas (2⁴).",
      "24 filas."
    ],
    "answer": 1
  },
  {
    "id": 16,
    "concept": "Tautología",
    "question": "¿Qué define formalmente a una Tautología en lógica proposicional?",
    "options": [
      "Una forma proposicional que resulta verdadera para toda asignación posible de valores de verdad a sus variables.",
      "Una fórmula que posee al menos una fila con valor verdadero en su tabla de verdad.",
      "Un razonamiento cuya conclusión es idéntica a una de sus premisas."
    ],
    "answer": 0
  },
  {
    "id": 17,
    "concept": "Contradicción",
    "question": "¿Cuál de las siguientes formas proposicionales es un ejemplo canónico de una contradicción lógica?",
    "options": [
      "p ∨ ¬p",
      "p ∧ ¬p",
      "p → p"
    ],
    "answer": 1
  },
  {
    "id": 18,
    "concept": "Contingencia",
    "question": "¿Cuándo se clasifica una forma proposicional como una Contingencia?",
    "options": [
      "Cuando su tabla de verdad contiene únicamente valores falsos.",
      "Cuando no es ni tautología ni contradicción, tomando el valor V en algunas combinaciones y F en otras.",
      "Cuando contiene al menos un cuantificador existencial y una conectiva bicondicional."
    ],
    "answer": 1
  },
  {
    "id": 19,
    "concept": "Clasificación de Expresiones",
    "question": "Al evaluar la expresión (p → q) ∧ (p ∧ ¬q) mediante tabla de verdad, ¿cuál es su clasificación resultante?",
    "options": [
      "Tautología.",
      "Contradicción (es falsa en todas sus filas).",
      "Contingencia."
    ],
    "answer": 1
  },
  {
    "id": 20,
    "concept": "Clasificación de Expresiones",
    "question": "Al evaluar la expresión ¬(p → q) ↔ (p ∧ ¬q) mediante tabla de verdad, ¿qué resultado se obtiene?",
    "options": [
      "Tautología (ambas expresiones son lógicamente equivalentes).",
      "Contradicción absoluta.",
      "Contingencia con 2 filas verdaderas y 2 falsas."
    ],
    "answer": 0
  },
  {
    "id": 21,
    "concept": "Equivalencia Lógica",
    "question": "¿Qué condición formal determina que dos fórmulas A y B sean lógicamente equivalentes (A ≡ B)?",
    "options": [
      "Que la conjunción (A ∧ B) sea una contingencia.",
      "Que el bicondicional (A ↔ B) sea una tautología, teniendo idéntica tabla de verdad.",
      "Que A implique a B pero B no implique necesariamente a A."
    ],
    "answer": 1
  },
  {
    "id": 22,
    "concept": "Leyes de De Morgan",
    "question": "¿Cuál es la forma correcta de la Ley de De Morgan para la negación de una conjunción?",
    "options": [
      "¬(p ∧ q) ≡ ¬p ∨ ¬q",
      "¬(p ∧ q) ≡ ¬p ∧ ¬q",
      "¬(p ∨ q) ≡ ¬p ∨ ¬q"
    ],
    "answer": 0
  },
  {
    "id": 23,
    "concept": "Leyes de De Morgan",
    "question": "¿A qué equivale la negación de una disyunción ¬(p ∨ q)?",
    "options": [
      "¬p ∨ ¬q",
      "¬p ∧ ¬q",
      "p ∧ ¬q"
    ],
    "answer": 1
  },
  {
    "id": 24,
    "concept": "Implicación Material",
    "question": "¿Cuál es la equivalencia fundamental que define a la implicación (p → q) en términos de disyunción y negación?",
    "options": [
      "p → q ≡ ¬p ∨ q",
      "p → q ≡ ¬p ∧ q",
      "p → q ≡ p ∨ ¬q"
    ],
    "answer": 0
  },
  {
    "id": 25,
    "concept": "Negación del Condicional",
    "question": "¿Cómo se expresa la negación de una implicación ¬(p → q)?",
    "options": [
      "¬p → ¬q",
      "p ∧ ¬q",
      "¬p ∨ q"
    ],
    "answer": 1
  },
  {
    "id": 26,
    "concept": "Tercero Excluido",
    "question": "¿Qué establece la Ley del Tercero Excluido (p ∨ ¬p)?",
    "options": [
      "Que una proposición y su negación pueden ser simultáneamente verdaderas.",
      "Que toda proposición es o bien verdadera o bien falsa, no existiendo un tercer valor de verdad posible (p ∨ ¬p ≡ V).",
      "Que la disyunción de dos variables idénticas se reduce a falso."
    ],
    "answer": 1
  },
  {
    "id": 27,
    "concept": "Principio de No Contradicción",
    "question": "¿Qué afirma la Ley de No Contradicción ¬(p ∧ ¬p)?",
    "options": [
      "Que una proposición no puede ser verdadera y falsa al mismo tiempo (p ∧ ¬p ≡ F).",
      "Que una proposición siempre debe implicar a su propia negación.",
      "Que si el antecedente es falso, el consecuente queda indeterminado."
    ],
    "answer": 0
  },
  {
    "id": 28,
    "concept": "Leyes de Dominación / Absorción",
    "question": "En el álgebra de proposiciones, ¿a qué equivale la expresión p ∧ F (donde F representa la contradicción o falsedad)?",
    "options": [
      "p",
      "F",
      "V"
    ],
    "answer": 1
  },
  {
    "id": 29,
    "concept": "Leyes de Identidad",
    "question": "En el álgebra de proposiciones, ¿a qué equivale la expresión p ∨ F (donde F representa la falsedad)?",
    "options": [
      "p",
      "F",
      "¬p"
    ],
    "answer": 0
  },
  {
    "id": 30,
    "concept": "Distributividad",
    "question": "¿Cuál es la aplicación correcta de la propiedad distributiva para p ∧ (q ∨ r)?",
    "options": [
      "(p ∧ q) ∨ (p ∧ r)",
      "(p ∨ q) ∧ (p ∨ r)",
      "(p ∧ q) ∧ (p ∧ r)"
    ],
    "answer": 0
  },
  {
    "id": 31,
    "concept": "Equivalencia vs Consecuencia",
    "question": "¿Cuál es la diferencia conceptual central entre Equivalencia Lógica (A ≡ B) y Consecuencia Lógica (Σ ⊨ B)?",
    "options": [
      "La equivalencia exige mismos valores de verdad en TODAS las valuaciones; la consecuencia exige que B sea V en aquellas valuaciones donde TODAS las premisas de Σ son V.",
      "La equivalencia solo se aplica a predicados; la consecuencia solo a proposiciones atómicas.",
      "La consecuencia exige que las tablas coincidan en todas las filas; la equivalencia solo en una fila."
    ],
    "answer": 0
  },
  {
    "id": 32,
    "concept": "Teorema de la Deducción",
    "question": "¿Cuándo decimos que B es consecuencia lógica del conjunto de premisas {A₁, A₂, ..., Aₙ}?",
    "options": [
      "Cuando la disyunción (A₁ ∨ A₂ ∨ ... ∨ Aₙ) ∨ B es una contingencia.",
      "Cuando el condicional asociado ((A₁ ∧ A₂ ∧ ... ∧ Aₙ) → B) es una tautología.",
      "Cuando al menos una de las premisas resulta ser idéntica a la conclusión B."
    ],
    "answer": 1
  },
  {
    "id": 33,
    "concept": "Método por Tabla de Verdad",
    "question": "Al verificar la validez de un argumento mediante tabla de verdad, ¿en cuáles filas se debe verificar el valor de la conclusión?",
    "options": [
      "En absolutamente todas las filas de la tabla sin excepción.",
      "Únicamente en aquellas filas donde todas las premisas son simultáneamente verdaderas.",
      "En las filas donde la conclusión es falsa para verificar si las premisas también son falsas."
    ],
    "answer": 1
  },
  {
    "id": 34,
    "concept": "Demostración por Reducción al Absurdo",
    "question": "¿En qué consiste el método de demostración por Reducción al Absurdo para probar que Σ ⊨ B?",
    "options": [
      "Asumir que la conclusión B es FALSA y que todas las premisas son VERDADERAS, deduciendo una contradicción lógica imposible.",
      "Asumir que las premisas son falsas y demostrar que la conclusión es necesariamente verdadera.",
      "Construir una tabla de verdad infinita hasta encontrar una fila donde todo sea falso."
    ],
    "answer": 0
  },
  {
    "id": 35,
    "concept": "Reglas de Inferencia: Modus Ponens",
    "question": "¿Qué estructura lógica formal define a la regla de inferencia Modus Ponens?",
    "options": [
      "De p → q y q, se concluye p.",
      "De p → q y p, se concluye q.",
      "De p ∨ q y ¬p, se concluye ¬q."
    ],
    "answer": 1
  },
  {
    "id": 36,
    "concept": "Reglas de Inferencia: Modus Tollens",
    "question": "¿Qué estructura lógica formal define a la regla de inferencia Modus Tollens?",
    "options": [
      "De p → q y ¬q, se concluye ¬p.",
      "De p → q y ¬p, se concluye ¬q.",
      "De ¬p → ¬q y p, se concluye q."
    ],
    "answer": 0
  },
  {
    "id": 37,
    "concept": "Reglas de Inferencia: Silogismo Hipotético",
    "question": "¿Cuál es la conclusión que se deriva mediante la regla del Silogismo Hipotético a partir de {p → q, q → r}?",
    "options": [
      "p ∧ r",
      "p → r",
      "r → p"
    ],
    "answer": 1
  },
  {
    "id": 38,
    "concept": "Reglas de Inferencia: Silogismo Disyuntivo",
    "question": "Dadas las premisas (p ∨ q) y ¬p, ¿qué conclusión se obtiene válidamente por Silogismo Disyuntivo?",
    "options": [
      "q",
      "¬q",
      "p ∧ q"
    ],
    "answer": 0
  },
  {
    "id": 39,
    "concept": "Falacias Formales",
    "question": "¿Qué falacia lógica formal se comete al argumentar: \"Si llueve, el suelo se moja. El suelo está mojado. Por lo tanto, llueve\"?",
    "options": [
      "Falacia de afirmación del consecuente.",
      "Falacia de negación del antecedente.",
      "Falacia del tercero excluido."
    ],
    "answer": 0
  },
  {
    "id": 40,
    "concept": "Falacias Formales",
    "question": "¿Qué falacia formal se comete al razonar: \"Si estudias, apruebas. No estudiaste. Por lo tanto, no aprobarás\"?",
    "options": [
      "Modus Tollens válido.",
      "Falacia de negación del antecedente.",
      "Falacia de composición deductiva."
    ],
    "answer": 1
  },
  {
    "id": 41,
    "concept": "Limitaciones de Lógica Proposicional",
    "question": "¿Por qué el argumento \"Todo perro ladra. Lazy es un perro. Por lo tanto, Lazy ladra\" no puede validarse solo con la lógica proposicional?",
    "options": [
      "Porque la lógica proposicional trata cada enunciado como atómico y no puede analizar la estructura interna de sujetos y propiedades.",
      "Porque las constantes individuales no tienen tabla de verdad definida.",
      "Porque los nombres propios hacen que cualquier razonamiento sea automáticamente una contingencia."
    ],
    "answer": 0
  },
  {
    "id": 42,
    "concept": "Predicado o Función Proposicional",
    "question": "¿Qué es un predicado (o función proposicional) como P(x)?",
    "options": [
      "Una proposición que siempre es verdadera en cualquier base de datos.",
      "Un enunciado con una o más variables que se convierte en proposición al sustituir las variables por constantes o al cuantificarlas.",
      "Una función computacional que no admite parámetros ni valores de retorno."
    ],
    "answer": 1
  },
  {
    "id": 43,
    "concept": "Dominio o Universo de Discurso",
    "question": "¿Qué es el Dominio (o Universo de Discurso) de un predicado?",
    "options": [
      "El conjunto de todos los valores posibles que puede tomar la variable del predicado.",
      "El número total de filas de la tabla de verdad de la fórmula.",
      "La memoria RAM asignada al compilador de predicados."
    ],
    "answer": 0
  },
  {
    "id": 44,
    "concept": "Cuantificador Universal",
    "question": "¿Qué afirma la cuantificación universal ∀x P(x)?",
    "options": [
      "Que P(x) es verdadera para al menos un elemento x dentro del dominio.",
      "Que P(x) es verdadera para todos y cada uno de los elementos x pertenecientes al dominio.",
      "Que existe exactamente un único elemento x que satisface P(x)."
    ],
    "answer": 1
  },
  {
    "id": 45,
    "concept": "Falsedad del Cuantificador Universal",
    "question": "¿Qué se requiere para demostrar que la proposición universal ∀x P(x) es FALSA?",
    "options": [
      "Demostrar que todos los elementos del dominio hacen que P(x) sea falsa.",
      "Encontrar un único contraejemplo: un elemento c en el dominio tal que P(c) sea falsa.",
      "Cambiar el dominio por el conjunto vacío."
    ],
    "answer": 1
  },
  {
    "id": 46,
    "concept": "Cuantificador Existencial",
    "question": "¿Qué afirma la cuantificación existencial ∃x P(x)?",
    "options": [
      "Que existe al menos un elemento x en el dominio para el cual P(x) es verdadera.",
      "Que todos los elementos del dominio cumplen obligatoriamente la propiedad P(x).",
      "Que ningún elemento del dominio puede satisfacer P(x)."
    ],
    "answer": 0
  },
  {
    "id": 47,
    "concept": "Verdad del Cuantificador Existencial",
    "question": "¿Qué alcanza para demostrar que una proposición existencial ∃x P(x) es VERDADERA?",
    "options": [
      "Verificar exhaustivamente todos los elementos infinitos del universo.",
      "Encontrar al menos un solo ejemplo en el dominio tal que P(c) sea verdadera.",
      "Demostrar que su negación es una tautología."
    ],
    "answer": 1
  },
  {
    "id": 48,
    "concept": "Dominios Finitos y Conectivas",
    "question": "Si el dominio es finito {x₁, x₂, ..., xₙ}, ¿a qué equivale la cuantificación universal ∀x P(x)?",
    "options": [
      "A una disyunción generalizada: P(x₁) ∨ P(x₂) ∨ ... ∨ P(xₙ)",
      "A una conjunción generalizada: P(x₁) ∧ P(x₂) ∧ ... ∧ P(xₙ)",
      "A una cadena de implicaciones sucesivas: P(x₁) → P(x₂) → ... → P(xₙ)"
    ],
    "answer": 1
  },
  {
    "id": 49,
    "concept": "Dominios Finitos y Conectivas",
    "question": "Si el dominio es finito {x₁, x₂, ..., xₙ}, ¿a qué equivale la cuantificación existencial ∃x P(x)?",
    "options": [
      "A una disyunción generalizada: P(x₁) ∨ P(x₂) ∨ ... ∨ P(xₙ)",
      "A una conjunción generalizada: P(x₁) ∧ P(x₂) ∧ ... ∧ P(xₙ)",
      "A una negación múltiple: ¬P(x₁) ∧ ¬P(x₂) ∧ ... ∧ ¬P(xₙ)"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "concept": "Regla de Oro de Traducción",
    "question": "Según los apuntes de clase, ¿cuál es la conectiva adecuada al traducir \"Todos los P son Q\" versus \"Algunos P son Q\"?",
    "options": [
      "Usar condicional (→) con ∀, y conjunción (∧) con ∃.",
      "Usar conjunción (∧) con ∀, y condicional (→) con ∃.",
      "Usar bicondicional (↔) en ambos enunciados."
    ],
    "answer": 0
  },
  {
    "id": 51,
    "concept": "Error Clásico de Traducción",
    "question": "¿Por qué es un grave error traducir \"Todos los programadores usan Linux\" como ∀x (P(x) ∧ L(x)) en un dominio de todas las personas?",
    "options": [
      "Porque afirmaría que TODA persona en el mundo es simultáneamente programador y usuario de Linux.",
      "Porque la conjunción no está permitida dentro del alcance de un cuantificador universal.",
      "Porque el cuantificador universal solo puede vincular números enteros."
    ],
    "answer": 0
  },
  {
    "id": 52,
    "concept": "Negación de Cuantificadores",
    "question": "¿Cuál es la ley lógica de equivalencia para la negación del cuantificador universal ¬∀x P(x)?",
    "options": [
      "∀x ¬P(x)",
      "∃x ¬P(x)",
      "¬∃x P(x)"
    ],
    "answer": 1
  },
  {
    "id": 53,
    "concept": "Negación de Cuantificadores",
    "question": "¿Cuál es la ley lógica de equivalencia para la negación del cuantificador existencial ¬∃x P(x)?",
    "options": [
      "∀x ¬P(x)",
      "∃x ¬P(x)",
      "¬∀x ¬P(x)"
    ],
    "answer": 0
  },
  {
    "id": 54,
    "concept": "Negación de Enunciados Universales",
    "question": "¿A qué equivale lógicamente la negación de \"Todos los algoritmos son eficientes\": ¬∀x (A(x) → E(x))?",
    "options": [
      "\"Ningún algoritmo es eficiente\" (∀x (A(x) → ¬E(x))).",
      "\"Existen algoritmos que no son eficientes\" (∃x (A(x) ∧ ¬E(x))).",
      "\"Todos los algoritmos no son ineficientes\" (∀x (A(x) ∧ E(x)))."
    ],
    "answer": 1
  },
  {
    "id": 55,
    "concept": "Negación de Enunciados Existenciales",
    "question": "¿Cómo se niega formalmente el enunciado existencial \"Hay servidores que no están conectados\": ¬∃x (S(x) ∧ ¬C(x))?",
    "options": [
      "∀x (S(x) → C(x)) (\"Todos los servidores están conectados\").",
      "∃x (S(x) ∧ C(x)) (\"Algunos servidores están conectados\").",
      "∀x (S(x) ∧ ¬C(x)) (\"Todos los servidores no están conectados\")."
    ],
    "answer": 0
  },
  {
    "id": 56,
    "concept": "Leyes de Intercambio de Cuantificadores",
    "question": "¿Cuál de las siguientes relaciones de intercambio de cuantificadores es una equivalencia lógica válida?",
    "options": [
      "∀x P(x) ≡ ¬∃x ¬P(x)",
      "∀x P(x) ≡ ∃x ¬P(x)",
      "∃x P(x) ≡ ∀x ¬P(x)"
    ],
    "answer": 0
  },
  {
    "id": 57,
    "concept": "Distribución de Cuantificadores",
    "question": "¿Sobre cuál conectiva se distribuye con equivalencia bidireccional (≡) el cuantificador universal ∀x?",
    "options": [
      "Sobre la disyunción: ∀x (P(x) ∨ Q(x)) ≡ (∀x P(x)) ∨ (∀x Q(x))",
      "Sobre la conjunción: ∀x (P(x) ∧ Q(x)) ≡ (∀x P(x)) ∧ (∀x Q(x))",
      "Sobre el condicional: ∀x (P(x) → Q(x)) ≡ (∀x P(x)) → (∀x Q(x))"
    ],
    "answer": 1
  },
  {
    "id": 58,
    "concept": "Distribución de Cuantificadores y Contraejemplo",
    "question": "¿Por qué (∀x P(x)) ∨ (∀x Q(x)) no es equivalente a ∀x (P(x) ∨ Q(x))?",
    "options": [
      "Porque con P(x):\"x es par\" y Q(x):\"x es impar\" en los enteros, todo número es par o impar (V), pero no todos son pares ni todos son impares (F).",
      "Porque la lógica de predicados prohíbe el uso de la disyunción entre proposiciones cuantificadas.",
      "Porque el cuantificador existencial siempre prevalece sobre el universal en una disyunción."
    ],
    "answer": 0
  },
  {
    "id": 59,
    "concept": "Ley de Subalternación",
    "question": "Bajo la hipótesis de un dominio no vacío, ¿qué establece la Ley de Subalternación?",
    "options": [
      "∀x P(x) → ∃x P(x) (Si la propiedad se cumple para todos, en particular se cumple para al menos uno).",
      "∃x P(x) → ∀x P(x) (Si se cumple para uno, se cumple para todos).",
      "¬∀x P(x) → ∀x ¬P(x)"
    ],
    "answer": 0
  },
  {
    "id": 60,
    "concept": "Decidibilidad: Proposicional vs Predicados",
    "question": "¿Por qué la lógica de predicados de primer orden es formalmente indecidible, a diferencia de la lógica proposicional?",
    "options": [
      "Porque los dominios pueden ser infinitos y, como demostraron Church y Turing en los años 30, no existe un algoritmo general que determine la validez universal en tiempo finito.",
      "Porque las tablas de verdad en predicados tienen 3 valores de verdad en lugar de 2.",
      "Porque los cuantificadores no pueden representarse en memoria de computadoras binarias."
    ],
    "answer": 0
  },
  {
    "id": 61,
    "concept": "Lógica de Predicados en JavaScript",
    "question": "¿Qué método nativo de arrays en JavaScript representa exactamente al cuantificador universal ∀x?",
    "options": [
      "Array.prototype.some()",
      "Array.prototype.every()",
      "Array.prototype.filter()"
    ],
    "answer": 1
  },
  {
    "id": 62,
    "concept": "Lógica de Predicados en JavaScript",
    "question": "¿Qué método nativo de arrays en JavaScript representa al cuantificador existencial ∃x?",
    "options": [
      "Array.prototype.some()",
      "Array.prototype.every()",
      "Array.prototype.map()"
    ],
    "answer": 0
  },
  {
    "id": 63,
    "concept": "Lógica de Predicados en SQL",
    "question": "En SQL, ¿cómo se representa formalmente la negación existencial ¬∃f (Factura(f) ∧ Impaga(f))?",
    "options": [
      "SELECT * FROM Clientes c WHERE NOT EXISTS (SELECT 1 FROM Facturas f WHERE f.cliente_id = c.id AND f.estado = 'IMPAGA');",
      "SELECT * FROM Clientes c WHERE EXISTS (SELECT 1 FROM Facturas f WHERE f.estado = 'IMPAGA');",
      "SELECT * FROM Clientes c JOIN Facturas f ON c.id = f.cliente_id;"
    ],
    "answer": 0
  },
  {
    "id": 64,
    "concept": "Simplificación de Código con De Morgan",
    "question": "Al refactorizar la condición if (!(edad >= 18 && tieneDNI)) aplicando la Ley de De Morgan, ¿cuál es el código equivalente más limpio?",
    "options": [
      "if (edad < 18 || !tieneDNI)",
      "if (edad < 18 && !tieneDNI)",
      "if (!(edad < 18) || tieneDNI)"
    ],
    "answer": 0
  },
  {
    "id": 65,
    "concept": "Traducción de Condicional Cuantificado en JS",
    "question": "Para evaluar \"todos los usuarios activos son mayores de edad\" (∀u (Activo(u) → MayorDeEdad(u))), aplicando u.activo → u.edad >= 18 ≡ !u.activo || u.edad >= 18, ¿cuál es el código correcto en JavaScript?",
    "options": [
      "usuarios.every(u => !u.activo || u.edad >= 18)",
      "usuarios.every(u => u.activo && u.edad >= 18)",
      "usuarios.some(u => !u.activo || u.edad >= 18)"
    ],
    "answer": 0
  },
  {
    "id": 66,
    "concept": "Examen: Proposición vs Función Proposicional",
    "question": "En el contexto de simbolización, ¿cómo se clasifica la oración \"Pedro usa bastón\"?",
    "options": [
      "Función proposicional con variable dependiente 'Pedro'.",
      "Proposición simple, donde 'Pedro' es una constante individual concreta.",
      "Forma contingente indeterminada."
    ],
    "answer": 1
  },
  {
    "id": 67,
    "concept": "Examen: Proposición vs Función Proposicional",
    "question": "¿Cómo se clasifica el enunciado \"Ellos son buenos amigos\" sin un contexto previo que defina a quiénes refiere el pronombre?",
    "options": [
      "Proposición molecular verdadera.",
      "Tautología gramatical del discurso.",
      "Función proposicional, ya que 'Ellos' actúa como una variable libre cuyo referente no está especificado."
    ],
    "answer": 2
  },
  {
    "id": 68,
    "concept": "Examen: Tabla de Verdad y Clasificación",
    "question": "¿Cuál es la clasificación de la fórmula (p ∨ q) → (¬q → p)?",
    "options": [
      "Tautología (la implicación ¬q → p es equivalente a ¬(¬q) ∨ p ≡ q ∨ p, y (p ∨ q) → (p ∨ q) es siempre verdadera).",
      "Contradicción absoluta en 2 variables.",
      "Contingencia con 1 fila falsa."
    ],
    "answer": 0
  },
  {
    "id": 69,
    "concept": "Examen: Demostración por Absurdo",
    "question": "Al validar {p ∨ q, p → r, ¬r} ⊨ q por Reducción al Absurdo, ¿qué paso conduce a la contradicción?",
    "options": [
      "Suponer q = F. Como ¬r = V (r = F), p → r exige p = F. Entonces p ∨ q resulta ser F, contradiciendo la premisa p ∨ q = V.",
      "Suponer q = V, lo que fuerza a r = V contradiciendo ¬r = V.",
      "Suponer que el condicional p → r es una tautología independiente."
    ],
    "answer": 0
  },
  {
    "id": 70,
    "concept": "Examen: Silogismo con Predicados",
    "question": "Dado el argumento: \"Todos los lenguajes compilados son de alto nivel. C++ es compilado. Por lo tanto, C++ es de alto nivel\", ¿cómo se valida formalmente?",
    "options": [
      "Mediante una tabla de verdad de 4 filas con dos variables proposicionales.",
      "Por Instanciación Universal de ∀x (Compilado(x) → AltoNivel(x)) aplicada a la constante C++, seguida de Modus Ponens con Compilado(C++).",
      "Por reducción a contradicción utilizando la Ley del Tercero Excluido."
    ],
    "answer": 1
  }
];

// Export standard CommonJS module if in Node, or expose globally in browser
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = questions;
} else {
  window.questionsData = questions;
}
