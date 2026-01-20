# PrimerTime

![Status](https://img.shields.io/badge/status-early--development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

PrimerTime is a 🧠heuristically driven PCR primer design tool that programmatically generates and evaluates primer candidates for gene targets using biologically informed constraints. Candidate primers are scored and filtered based on factors such as GC content, melting temperature (Tm), sequence length, and structural viability, producing a ranked set of primers suitable for downstream validation.

By prioritizing heuristic evaluation over brute-force optimization, PrimerTime delivers fast, interpretable results that align with real-world primer design practices.

## Current Status

PrimerTime is in active 🚧early-stage development🚧 and is currently focused on defining a clear, explainable primer-evaluation pipeline rather than exhaustive biological optimization.

### What Exists Today

- Project architecture and scope definition
- Initial heuristic framework for primer evaluation
- Clearly defined biological constraints (e.g., GC content ranges, melting temperature windows, primer length)
- Design emphasis on transparency and explainability over black-box optimization

### In Progress

- Implementation of the core heuristic scoring pipeline
- Primer candidate generation and filtering stages
- Scoring breakdowns that surface why primers pass or fail
- Backend API endpoints for primer evaluation

### Planned Next

- Interactive frontend for inspecting primer candidates and scores
- Opinionated presets for common PCR use cases
- Side-by-side primer comparison and visualization
- Exportable primer evaluation summaries

### Non-Goals (By Design)

- Replacing established tools such as Primer3
- Exhaustive or globally optimal primer search
- Claims of experimental or clinical validation

## Addition Description

PrimerTime is intentionally scoped as a learning-driven, heuristic, and explainable system, designed to complement existing 🔬bioinformatics tools while exploring how modern software practices can improve transparency and usability in primer design.

PrimerTime is a modern, web-native, explainable system with an interactive UI, clear scoring breakdown per primer, step-by-step heuristic reasoning, and easy ⚙️API consumption.

PrimerTime is especially strong for learning about PCR and choosing primers, debugging failed PCR, teaching bioinformatics, and trust & reproducibility.

PrimerTime targets common lab workflows, provides sane defaults, emphasizes speed and clarity over edge cases and offers presets (qPCR, standard PCR, teaching labs, etc.).

PrimerTime relies on modern fullstack developement.

PrimerTime is a heuristically driven PCR primer design tool focused on explainability, accessibility, and modern web-based workflows, complementing established tools such as Primer3.

## Why Not Primer3?

Primer3 is a mature, scientifically trusted tool for PCR primer design and remains a cornerstone of many bioinformatics workflows. PrimerTime is not intended to replace Primer3, nor to compete with its depth of optimization or decades of validation.

Instead, PrimerTime exists to explore a complementary design space focused on accessibility, explainability, and modern developer workflows.

### Key Differences in Philosophy

Primer3 prioritizes optimization and configurability, provides extensive parameterization and edge-case handling, is highly flexible but has complex configuration, and the output is focused on results rather than rationale.
PrimerTime prioritizes clarity and learning, utilizes heuristically driven, rule-based scoring, provides transparent evaluation of primer candidates and clear explanations for why primers pass or fail, provides opinionated defaults aligned with common PCR use cases.

When PrimerTime Is a Better Fit:
You want to understand why primers are selected or rejected, you are learning or teaching primer design principles, you want an interactive, web-based interface, you need an API-friendly tool for integration into modern applications, or you prefer fast, interpretable results over exhaustive optimization.

PrimerTime embraces the reality that primer design is often guided by heuristics and biological judgment. By making those heuristics explicit and inspectable, it aims to reduce trial-and-error while improving user understanding and trust.