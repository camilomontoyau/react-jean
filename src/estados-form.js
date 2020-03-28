export const formFields = {
  exploracion: [
    {
      name: "Fecha Actualización",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Financiación Institucional o Financiación privada?",
      type: "select",
      required: true,
      visible: true,
      options: ["Privada", "Institucional"]
    },
    {
      name: "Publicada por el financiador? (Sí/no)",
      type: "checkbox",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "País",
      type: "select",
      required: false,
      visible: true,
      options: [
        "Bolivia",
        "Colombia",
        "El Salvador",
        "Nicaragua",
        "Honduras",
        "México",
        "Costa Rica ",
        "Guatemala",
        "Ecuador",
        "Perú",
        "Etiopía",
        "Níger",
        "Mali",
        "Uganda",
        "Mozambique",
        "Regional Sudamérica (elegir países)",
        "Regional Centroamérica (elegir países)",
        "Regional Africa (Elegir países) ",
        "Multipaís (cualquier combinación es posible)"
      ]
    },
    {
      name: "Tipo de fuente",
      type: "select",
      required: true,
      visible: true,
      options: ["Internacional", "Española", "Privada", "Local"]
    },
    {
      name: "Financiador",
      type: "select",
      required: true,
      visible: true,
      options: ["Financiador 1", "Financiador 2", "Financiador 3"]
    },
    {
      name: "Nombre convocatoria (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Proyecto (PAC)",
      type: "select",
      required: true,
      visible: true,
      options: ["Proyecto 1", "proyecto 2", "proyecto 3"]
    },
    {
      name: "Título Proyecto (puede ser indicativo)",
      type: "text",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "GAPS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: [
        "GENERAR OPORTUNIDADES",
        "ADAPTAR PARA EL CAMBIO CLIMÁTICO",
        "PROTEGER DE VIOLENCIA / INTOLERANCIA",
        "SALVAR VIDAS"
      ]
    },
    {
      name: "Líneas estratégicas (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: [
        "PROMOVER EDUCACIÓN DE CALIDAD",
        "DESARROLLAR CADENAS DE VALOR SOSTENIBLES",
        "FOMENTAR EMPLEO Y EMPRENDIMIENTO",
        "GARANTIZAR ACCESO SOSTENIBLE A ALIMENTOS",
        "PROMOVER ACCESO SOSTENIBLE A AGUA POTABLE",
        "ACOMPAÑAR TRANSICIÓN JUSTA E INCLUSIVA",
        "PROMOVER SISTEMAS DE PROTECCIÓN Y ATENCIÓN",
        "RECONOCER PAPEL FUNDAMENTAL DE LAS MUJERES",
        "IMPULSAR LA SOLIDARIDAD Y LA CULTURA DE PAZ",
        "PROPORCIONAR RESPUESTA HUMANITARIA EFECTIVA",
        "APOYAR POBLACIÓN DESPLAZADA Y REFUGIADA",
        "PROMOVER GESTIÓN DE RIESGOS ANTE DESASTRES"
      ]
    },
    {
      name: "ODS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: false,
      options: ["ODS 1", "ODS 2", "ODS3"]
    },
    {
      name: "Duración estimada en meses",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Especificar moneda de convocatoria",
      type: "select",
      required: true,
      visible: true,
      options: ["COP", "USD", "EUR"]
    },
    {
      name: "Importe solicitado (o a solicitar) en euros",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name:
        "Si la convocatoria no es en euros, indicar importe en moneda de la convocatoria",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha estimada de publicación",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Equipo técnico de formulación (listado)",
      type: "multi select",
      required: false,
      visible: true,
      options: ["Usuario 1", "Usuario 2", "Usuario 3 "]
    },
    {
      name: "Preinversión necesaria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha de presentación",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Probabilidad de aprobación",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha Estimada de resolución (para no resueltos)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Fecha de resolución (solo resoluciones en firme)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Importe aprobado en euros",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    {
      name:
        "Importe aprobado en moneda local (o divisa oficial de la convocatoria)",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    { name: "BLOG", type: "text", required: false, visible: true, options: [] },
    {
      name: " Razones descarte o denegación (adjuntar resolución)",
      type: "note",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Fecha estimada de inicio de ejecución",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Donativo o subvención?",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Indirectos Año 1 (importe)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Personal en  sede Año 1 (importe) ",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "NICRA (%)",
      type: "number",
      required: false,
      visible: true,
      options: []
    }
  ],
  publicada: [],
  formulacionNC: [
    {
      name: "Fecha Actualización",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Financiación Institucional o Financiación privada?",
      type: "select",
      required: true,
      visible: true,
      options: ["Privada", "Institucional"]
    },
    {
      name: "Publicada por el financiador? (Sí/no)",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "País",
      type: "select",
      required: true,
      visible: true,
      options: [
        "Bolivia",
        "Colombia",
        "El Salvador",
        "Nicaragua",
        "Honduras",
        "México",
        "Costa Rica ",
        "Guatemala",
        "Ecuador",
        "Perú",
        "Etiopía",
        "Níger",
        "Mali",
        "Uganda",
        "Mozambique",
        "Regional Sudamérica (elegir países)",
        "Regional Centroamérica (elegir países)",
        "Regional Africa (Elegir países) ",
        "Multipaís (cualquier combinación es posible)"
      ]
    },
    {
      name: "Tipo de fuente",
      type: "select",
      required: true,
      visible: true,
      options: ["Internacional", "Española", "Privada", "Local"]
    },
    {
      name: "Financiador",
      type: "select",
      required: true,
      visible: true,
      options: ["Financiador 1", "Financiador 2", "Financiador 3"]
    },
    {
      name: "Nombre convocatoria (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Proyecto (PAC)",
      type: "select",
      required: true,
      visible: true,
      options: ["Proyecto 1", "proyecto 2", "proyecto 3"]
    },
    {
      name: "Título Proyecto (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "GAPS (se pueden elegir varios)",
      type: "multi select",
      required: true,
      visible: true,
      options: [
        "GENERAR OPORTUNIDADES",
        "ADAPTAR PARA EL CAMBIO CLIMÁTICO",
        "PROTEGER DE VIOLENCIA / INTOLERANCIA",
        "SALVAR VIDAS"
      ]
    },
    {
      name: "Líneas estratégicas (se pueden elegir varios)",
      type: "multi select",
      required: true,
      visible: true,
      options: [
        "PROMOVER EDUCACIÓN DE CALIDAD",
        "DESARROLLAR CADENAS DE VALOR SOSTENIBLES",
        "FOMENTAR EMPLEO Y EMPRENDIMIENTO",
        "GARANTIZAR ACCESO SOSTENIBLE A ALIMENTOS",
        "PROMOVER ACCESO SOSTENIBLE A AGUA POTABLE",
        "ACOMPAÑAR TRANSICIÓN JUSTA E INCLUSIVA",
        "PROMOVER SISTEMAS DE PROTECCIÓN Y ATENCIÓN",
        "RECONOCER PAPEL FUNDAMENTAL DE LAS MUJERES",
        "IMPULSAR LA SOLIDARIDAD Y LA CULTURA DE PAZ",
        "PROPORCIONAR RESPUESTA HUMANITARIA EFECTIVA",
        "APOYAR POBLACIÓN DESPLAZADA Y REFUGIADA",
        "PROMOVER GESTIÓN DE RIESGOS ANTE DESASTRES"
      ]
    },
    {
      name: "ODS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: false,
      options: ["ODS 1", "ODS 2", "ODS3"]
    },
    {
      name: "Duración estimada en meses",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Especificar moneda de convocatoria",
      type: "select",
      required: true,
      visible: true,
      options: ["COP", "USD", "EUR"]
    },
    {
      name: "Importe solicitado (o a solicitar) en euros",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name:
        "Si la convocatoria no es en euros, indicar importe en moneda de la convocatoria",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha estimada de publicación",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Equipo técnico de formulación (listado)",
      type: "multi select",
      required: true,
      visible: true,
      options: ["Usuario 1", "Usuario 2", "Usuario 3 "]
    },
    {
      name: "Preinversión necesaria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha de presentación",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Probabilidad de aprobación",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha Estimada de resolución (para no resueltos)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Fecha de resolución (solo resoluciones en firme)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Importe aprobado en euros",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    {
      name:
        "Importe aprobado en moneda local (o divisa oficial de la convocatoria)",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    { name: "BLOG", type: "text", required: false, visible: true, options: [] },
    {
      name: " Razones descarte o denegación (adjuntar resolución)",
      type: "note",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Fecha estimada de inicio de ejecución",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Donativo o subvención?",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Indirectos Año 1 (importe)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Personal en  sede Año 1 (importe) ",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "NICRA (%)",
      type: "number",
      required: false,
      visible: true,
      options: []
    }
  ],
  controlNC: [],
  pendienteNC: [
    {
      name: "Fecha Actualización",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Financiación Institucional o Financiación privada?",
      type: "select",
      required: true,
      visible: true,
      options: ["Privada", "Institucional"]
    },
    {
      name: "Publicada por el financiador? (Sí/no)",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "País",
      type: "select",
      required: true,
      visible: true,
      options: [
        "Bolivia",
        "Colombia",
        "El Salvador",
        "Nicaragua",
        "Honduras",
        "México",
        "Costa Rica ",
        "Guatemala",
        "Ecuador",
        "Perú",
        "Etiopía",
        "Níger",
        "Mali",
        "Uganda",
        "Mozambique",
        "Regional Sudamérica (elegir países)",
        "Regional Centroamérica (elegir países)",
        "Regional Africa (Elegir países) ",
        "Multipaís (cualquier combinación es posible)"
      ]
    },
    {
      name: "Tipo de fuente",
      type: "select",
      required: true,
      visible: true,
      options: ["Internacional", "Española", "Privada", "Local"]
    },
    {
      name: "Financiador",
      type: "select",
      required: true,
      visible: true,
      options: ["Financiador 1", "Financiador 2", "Financiador 3"]
    },
    {
      name: "Nombre convocatoria (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Proyecto (PAC)",
      type: "select",
      required: true,
      visible: true,
      options: ["Proyecto 1", "proyecto 2", "proyecto 3"]
    },
    {
      name: "Título Proyecto (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "GAPS (se pueden elegir varios)",
      type: "multi select",
      required: true,
      visible: true,
      options: [
        "GENERAR OPORTUNIDADES",
        "ADAPTAR PARA EL CAMBIO CLIMÁTICO",
        "PROTEGER DE VIOLENCIA / INTOLERANCIA",
        "SALVAR VIDAS"
      ]
    },
    {
      name: "Líneas estratégicas (se pueden elegir varios)",
      type: "multi select",
      required: true,
      visible: true,
      options: [
        "PROMOVER EDUCACIÓN DE CALIDAD",
        "DESARROLLAR CADENAS DE VALOR SOSTENIBLES",
        "FOMENTAR EMPLEO Y EMPRENDIMIENTO",
        "GARANTIZAR ACCESO SOSTENIBLE A ALIMENTOS",
        "PROMOVER ACCESO SOSTENIBLE A AGUA POTABLE",
        "ACOMPAÑAR TRANSICIÓN JUSTA E INCLUSIVA",
        "PROMOVER SISTEMAS DE PROTECCIÓN Y ATENCIÓN",
        "RECONOCER PAPEL FUNDAMENTAL DE LAS MUJERES",
        "IMPULSAR LA SOLIDARIDAD Y LA CULTURA DE PAZ",
        "PROPORCIONAR RESPUESTA HUMANITARIA EFECTIVA",
        "APOYAR POBLACIÓN DESPLAZADA Y REFUGIADA",
        "PROMOVER GESTIÓN DE RIESGOS ANTE DESASTRES"
      ]
    },
    {
      name: "ODS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: false,
      options: ["ODS 1", "ODS 2", "ODS3"]
    },
    {
      name: "Duración estimada en meses",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Especificar moneda de convocatoria",
      type: "select",
      required: true,
      visible: true,
      options: ["COP", "USD", "EUR"]
    },
    {
      name: "Importe solicitado (o a solicitar) en euros",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name:
        "Si la convocatoria no es en euros, indicar importe en moneda de la convocatoria",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha estimada de publicación",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Equipo técnico de formulación (listado)",
      type: "multi select",
      required: true,
      visible: true,
      options: ["Usuario 1", "Usuario 2", "Usuario 3 "]
    },
    {
      name: "Preinversión necesaria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha de presentación",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Probabilidad de aprobación",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha Estimada de resolución (para no resueltos)",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha de resolución (solo resoluciones en firme)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Importe aprobado en euros",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    {
      name:
        "Importe aprobado en moneda local (o divisa oficial de la convocatoria)",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    { name: "BLOG", type: "text", required: false, visible: true, options: [] },
    {
      name: " Razones descarte o denegación (adjuntar resolución)",
      type: "note",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Fecha estimada de inicio de ejecución",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Donativo o subvención?",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Indirectos Año 1 (importe)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Personal en  sede Año 1 (importe) ",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "NICRA (%)",
      type: "number",
      required: false,
      visible: true,
      options: []
    }
  ],
  aprobadoNC: [],
  denegadaNC: [],
  formulacionPC: [
    {
      name: "Fecha Actualización",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Financiación Institucional o Financiación privada?",
      type: "select",
      required: true,
      visible: true,
      options: ["Privada", "Institucional"]
    },
    {
      name: "Publicada por el financiador? (Sí/no)",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "País",
      type: "select",
      required: true,
      visible: true,
      options: [
        "Bolivia",
        "Colombia",
        "El Salvador",
        "Nicaragua",
        "Honduras",
        "México",
        "Costa Rica ",
        "Guatemala",
        "Ecuador",
        "Perú",
        "Etiopía",
        "Níger",
        "Mali",
        "Uganda",
        "Mozambique",
        "Regional Sudamérica (elegir países)",
        "Regional Centroamérica (elegir países)",
        "Regional Africa (Elegir países) ",
        "Multipaís (cualquier combinación es posible)"
      ]
    },
    {
      name: "Tipo de fuente",
      type: "select",
      required: true,
      visible: true,
      options: ["Internacional", "Española", "Privada", "Local"]
    },
    {
      name: "Financiador",
      type: "select",
      required: true,
      visible: true,
      options: ["Financiador 1", "Financiador 2", "Financiador 3"]
    },
    {
      name: "Nombre convocatoria (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Proyecto (PAC)",
      type: "select",
      required: true,
      visible: true,
      options: ["Proyecto 1", "proyecto 2", "proyecto 3"]
    },
    {
      name: "Título Proyecto (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "GAPS (se pueden elegir varios)",
      type: "multi select",
      required: true,
      visible: true,
      options: [
        "GENERAR OPORTUNIDADES",
        "ADAPTAR PARA EL CAMBIO CLIMÁTICO",
        "PROTEGER DE VIOLENCIA / INTOLERANCIA",
        "SALVAR VIDAS"
      ]
    },
    {
      name: "Líneas estratégicas (se pueden elegir varios)",
      type: "multi select",
      required: true,
      visible: true,
      options: [
        "PROMOVER EDUCACIÓN DE CALIDAD",
        "DESARROLLAR CADENAS DE VALOR SOSTENIBLES",
        "FOMENTAR EMPLEO Y EMPRENDIMIENTO",
        "GARANTIZAR ACCESO SOSTENIBLE A ALIMENTOS",
        "PROMOVER ACCESO SOSTENIBLE A AGUA POTABLE",
        "ACOMPAÑAR TRANSICIÓN JUSTA E INCLUSIVA",
        "PROMOVER SISTEMAS DE PROTECCIÓN Y ATENCIÓN",
        "RECONOCER PAPEL FUNDAMENTAL DE LAS MUJERES",
        "IMPULSAR LA SOLIDARIDAD Y LA CULTURA DE PAZ",
        "PROPORCIONAR RESPUESTA HUMANITARIA EFECTIVA",
        "APOYAR POBLACIÓN DESPLAZADA Y REFUGIADA",
        "PROMOVER GESTIÓN DE RIESGOS ANTE DESASTRES"
      ]
    },
    {
      name: "ODS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: false,
      options: ["ODS 1", "ODS 2", "ODS3"]
    },
    {
      name: "Duración estimada en meses",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Especificar moneda de convocatoria",
      type: "select",
      required: true,
      visible: true,
      options: ["COP", "USD", "EUR"]
    },
    {
      name: "Importe solicitado (o a solicitar) en euros",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name:
        "Si la convocatoria no es en euros, indicar importe en moneda de la convocatoria",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha estimada de publicación",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Equipo técnico de formulación (listado)",
      type: "multi select",
      required: true,
      visible: true,
      options: ["Usuario 1", "Usuario 2", "Usuario 3 "]
    },
    {
      name: "Preinversión necesaria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha de presentación",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Probabilidad de aprobación",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha Estimada de resolución (para no resueltos)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Fecha de resolución (solo resoluciones en firme)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Importe aprobado en euros",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    {
      name:
        "Importe aprobado en moneda local (o divisa oficial de la convocatoria)",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    { name: "BLOG", type: "text", required: false, visible: true, options: [] },
    {
      name: " Razones descarte o denegación (adjuntar resolución)",
      type: "note",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Fecha estimada de inicio de ejecución",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Donativo o subvención?",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Indirectos Año 1 (importe)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Personal en  sede Año 1 (importe) ",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "NICRA (%)",
      type: "number",
      required: false,
      visible: true,
      options: []
    }
  ],
  controlPC: [],
  pendientePC: [
    {
      name: "Fecha Actualización",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Financiación Institucional o Financiación privada?",
      type: "select",
      required: true,
      visible: true,
      options: ["Privada", "Institucional"]
    },
    {
      name: "Publicada por el financiador? (Sí/no)",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "País",
      type: "select",
      required: true,
      visible: true,
      options: [
        "Bolivia",
        "Colombia",
        "El Salvador",
        "Nicaragua",
        "Honduras",
        "México",
        "Costa Rica ",
        "Guatemala",
        "Ecuador",
        "Perú",
        "Etiopía",
        "Níger",
        "Mali",
        "Uganda",
        "Mozambique",
        "Regional Sudamérica (elegir países)",
        "Regional Centroamérica (elegir países)",
        "Regional Africa (Elegir países) ",
        "Multipaís (cualquier combinación es posible)"
      ]
    },
    {
      name: "Tipo de fuente",
      type: "select",
      required: true,
      visible: true,
      options: ["Internacional", "Española", "Privada", "Local"]
    },
    {
      name: "Financiador",
      type: "select",
      required: true,
      visible: true,
      options: ["Financiador 1", "Financiador 2", "Financiador 3"]
    },
    {
      name: "Nombre convocatoria (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Proyecto (PAC)",
      type: "select",
      required: true,
      visible: true,
      options: ["Proyecto 1", "proyecto 2", "proyecto 3"]
    },
    {
      name: "Título Proyecto (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "GAPS (se pueden elegir varios)",
      type: "multi select",
      required: true,
      visible: true,
      options: [
        "GENERAR OPORTUNIDADES",
        "ADAPTAR PARA EL CAMBIO CLIMÁTICO",
        "PROTEGER DE VIOLENCIA / INTOLERANCIA",
        "SALVAR VIDAS"
      ]
    },
    {
      name: "Líneas estratégicas (se pueden elegir varios)",
      type: "multi select",
      required: true,
      visible: true,
      options: [
        "PROMOVER EDUCACIÓN DE CALIDAD",
        "DESARROLLAR CADENAS DE VALOR SOSTENIBLES",
        "FOMENTAR EMPLEO Y EMPRENDIMIENTO",
        "GARANTIZAR ACCESO SOSTENIBLE A ALIMENTOS",
        "PROMOVER ACCESO SOSTENIBLE A AGUA POTABLE",
        "ACOMPAÑAR TRANSICIÓN JUSTA E INCLUSIVA",
        "PROMOVER SISTEMAS DE PROTECCIÓN Y ATENCIÓN",
        "RECONOCER PAPEL FUNDAMENTAL DE LAS MUJERES",
        "IMPULSAR LA SOLIDARIDAD Y LA CULTURA DE PAZ",
        "PROPORCIONAR RESPUESTA HUMANITARIA EFECTIVA",
        "APOYAR POBLACIÓN DESPLAZADA Y REFUGIADA",
        "PROMOVER GESTIÓN DE RIESGOS ANTE DESASTRES"
      ]
    },
    {
      name: "ODS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: false,
      options: ["ODS 1", "ODS 2", "ODS3"]
    },
    {
      name: "Duración estimada en meses",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Especificar moneda de convocatoria",
      type: "select",
      required: true,
      visible: true,
      options: ["COP", "USD", "EUR"]
    },
    {
      name: "Importe solicitado (o a solicitar) en euros",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name:
        "Si la convocatoria no es en euros, indicar importe en moneda de la convocatoria",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha estimada de publicación",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Equipo técnico de formulación (listado)",
      type: "multi select",
      required: true,
      visible: true,
      options: ["Usuario 1", "Usuario 2", "Usuario 3 "]
    },
    {
      name: "Preinversión necesaria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha de presentación",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Probabilidad de aprobación",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha Estimada de resolución (para no resueltos)",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Fecha de resolución (solo resoluciones en firme)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Importe aprobado en euros",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    {
      name:
        "Importe aprobado en moneda local (o divisa oficial de la convocatoria)",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    { name: "BLOG", type: "text", required: false, visible: true, options: [] },
    {
      name: " Razones descarte o denegación (adjuntar resolución)",
      type: "note",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Fecha estimada de inicio de ejecución",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Donativo o subvención?",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      name: "Indirectos Año 1 (importe)",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "Personal en  sede Año 1 (importe) ",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      name: "NICRA (%)",
      type: "number",
      required: true,
      visible: true,
      options: []
    }
  ],
  aprobadaPC: [],
  rechazadaPC: [],
  descartada: [],
  soloVista: [
    {
      name: "Fecha Actualización",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Financiación Institucional o Financiación privada?",
      type: "select",
      required: false,
      visible: true,
      options: ["Privada", "Institucional"]
    },
    {
      name: "Publicada por el financiador? (Sí/no)",
      type: "checkbox",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "País",
      type: "select",
      required: false,
      visible: true,
      options: [
        "Bolivia",
        "Colombia",
        "El Salvador",
        "Nicaragua",
        "Honduras",
        "México",
        "Costa Rica ",
        "Guatemala",
        "Ecuador",
        "Perú",
        "Etiopía",
        "Níger",
        "Mali",
        "Uganda",
        "Mozambique",
        "Regional Sudamérica (elegir países)",
        "Regional Centroamérica (elegir países)",
        "Regional Africa (Elegir países) ",
        "Multipaís (cualquier combinación es posible)"
      ]
    },
    {
      name: "Tipo de fuente",
      type: "select",
      required: false,
      visible: true,
      options: ["Internacional", "Española", "Privada", "Local"]
    },
    {
      name: "Financiador",
      type: "select",
      required: false,
      visible: true,
      options: ["Financiador 1", "Financiador 2", "Financiador 3"]
    },
    {
      name: "Nombre convocatoria (puede ser indicativo)",
      type: "text",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Proyecto (PAC)",
      type: "select",
      required: false,
      visible: true,
      options: ["Proyecto 1", "proyecto 2", "proyecto 3"]
    },
    {
      name: "Título Proyecto (puede ser indicativo)",
      type: "text",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "GAPS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: [
        "GENERAR OPORTUNIDADES",
        "ADAPTAR PARA EL CAMBIO CLIMÁTICO",
        "PROTEGER DE VIOLENCIA / INTOLERANCIA",
        "SALVAR VIDAS"
      ]
    },
    {
      name: "Líneas estratégicas (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: [
        "PROMOVER EDUCACIÓN DE CALIDAD",
        "DESARROLLAR CADENAS DE VALOR SOSTENIBLES",
        "FOMENTAR EMPLEO Y EMPRENDIMIENTO",
        "GARANTIZAR ACCESO SOSTENIBLE A ALIMENTOS",
        "PROMOVER ACCESO SOSTENIBLE A AGUA POTABLE",
        "ACOMPAÑAR TRANSICIÓN JUSTA E INCLUSIVA",
        "PROMOVER SISTEMAS DE PROTECCIÓN Y ATENCIÓN",
        "RECONOCER PAPEL FUNDAMENTAL DE LAS MUJERES",
        "IMPULSAR LA SOLIDARIDAD Y LA CULTURA DE PAZ",
        "PROPORCIONAR RESPUESTA HUMANITARIA EFECTIVA",
        "APOYAR POBLACIÓN DESPLAZADA Y REFUGIADA",
        "PROMOVER GESTIÓN DE RIESGOS ANTE DESASTRES"
      ]
    },
    {
      name: "ODS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: ["ODS 1", "ODS 2", "ODS3"]
    },
    {
      name: "Duración estimada en meses",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Especificar moneda de convocatoria",
      type: "select",
      required: false,
      visible: true,
      options: ["COP", "USD", "EUR"]
    },
    {
      name: "Importe solicitado (o a solicitar) en euros",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name:
        "Si la convocatoria no es en euros, indicar importe en moneda de la convocatoria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha estimada de publicación",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Equipo técnico de formulación (listado)",
      type: "multi select",
      required: false,
      visible: true,
      options: ["Usuario 1", "Usuario 2", "Usuario 3 "]
    },
    {
      name: "Preinversión necesaria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha de presentación",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Probabilidad de aprobación",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha Estimada de resolución (para no resueltos)",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha de resolución (solo resoluciones en firme)",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Importe aprobado en euros",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name:
        "Importe aprobado en moneda local (o divisa oficial de la convocatoria)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    { name: "BLOG", type: "text", required: false, visible: true, options: [] },
    {
      name: " Razones descarte o denegación (adjuntar resolución)",
      type: "note",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Fecha estimada de inicio de ejecución",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Donativo o subvención?",
      type: "checkbox",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Indirectos Año 1 (importe)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "Personal en  sede Año 1 (importe) ",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      name: "NICRA (%)",
      type: "number",
      required: false,
      visible: true,
      options: []
    }
  ]
};
