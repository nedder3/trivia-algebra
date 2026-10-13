# Psicokiller: Álgebra y Lógica (Método G)

> Juego de trivia implacable en modo **permadeath** enfocado en **Lógica Proposicional y Lógica de Predicados** para la Tecnicatura Superior en Desarrollo de Software (I.S.F.T. N.º 191).

---

## 🎯 Dinámica del Juego (Método G)

- **50 preguntas consecutivas** seleccionadas aleatoriamente de un banco riguroso de 70 preguntas.
- **Sin margen de error (Permadeath)**: Un solo fallo o falacia lógica te elimina de inmediato y te obliga a reiniciar el desafío desde la pregunta 1.
- **Racha y Progreso**: HUD en tiempo real con seguimiento de racha, porcentaje de avance y aumento de tensión acústica (latido cardíaco progresivo).
- **Control de Sonido**: Efectos de sonido sintetizados puros (Web Audio API) con botón de activación/silencio. Sin música de fondo invasiva.
- **Soporte de Teclado**: Puedes responder usando las teclas `1`/`2`/`3` o `A`/`B`/`C`, y continuar/reiniciar con `Enter` o `Espacio`.

---

## 📚 Contenidos Evaluados

Basado en la currícula oficial de la cátedra de Álgebra y Lógica:

1. **Unidad 1: Lógica Proposicional**
   - Definición de proposición (atómicas y moleculares).
   - Conectivas lógicas: Negación ($\neg$), Conjunción ($\land$), Disyunción ($\lor$), Disyunción exclusiva ($\veebar$), Condicional ($\rightarrow$), Bicondicional ($\leftrightarrow$).
   - Tablas de verdad y dimensiones ($2^n$).
   - Clasificación semántica: Tautología, Contradicción y Contingencia.
   - Leyes lógicas fundamentales: De Morgan, Implicación material, Tercero excluido, Principio de no contradicción, Distribución, Absorción e Identidad.
   - Variaciones del condicional: Recíproca, Contraria y Contrarecíproca.
   - Consecuencia lógica ($\Sigma \models B$) vs. Equivalencia lógica ($A \equiv B$).
   - Métodos de demostración: Tabla de verdad, Demostración analítica, Reducción al absurdo y Tautología del condicional asociado.
   - Reglas de inferencia: Modus Ponens, Modus Tollens, Silogismo Hipotético, Silogismo Disyuntivo.
   - Falacias formales (afirmación del consecuente, negación del antecedente).

2. **Unidad 2: Lógica de Predicados (Lógica Cuantificacional)**
   - Limitaciones de la lógica proposicional.
   - Predicados y funciones proposicionales: $P(x)$, constantes y variables individuales.
   - Dominio o universo de discurso.
   - Cuantificador Universal ($\forall x$) y Existencial ($\exists x$).
   - Regla de oro de traducción: $\rightarrow$ con $\forall$, y $\land$ con $\exists$.
   - Negación de cuantificadores y enunciados universales/existenciales.
   - Leyes de intercambio, distribución y subalternación.
   - Decidibilidad vs. Indecidibilidad (Church y Turing).
   - Aplicaciones en programación e informática: `.every()` / `.some()` en JavaScript, `all()` / `any()` en Python, `EXISTS` / `NOT EXISTS` en SQL.

---

## 🚀 Cómo Ejecutar Localmente

No requiere Node.js, librerías externas ni servidores especiales:

1. Abre `index.html` directamente en tu navegador (doble click o mediante una extensión como Live Server en VS Code).
2. O ejecuta en una terminal:
   ```bash
   python -m http.server 8000
   ```
   y accede a `http://localhost:8000`.

---

## 🌐 Despliegue en GitHub Pages

El repositorio incluye el workflow automatizado `.github/workflows/static.yml`. Al pushear los cambios a la rama `main`, la web se desplegará automáticamente en GitHub Pages.
