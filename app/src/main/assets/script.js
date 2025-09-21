// script.js — auto-scroll al iniciar + orden numérico de temas + parser robusto + aleatorio + persistencia falladas
(() => {
  // === Cuestionario embebido ===
  const EMBEDDED_TXT = `
TEMARIO:

Tema 1. La Constitución Española de 1978 (I): Principios Generales. Características y estructura. Reforma de la Constitución.
Preguntas 1-54

Tema 2. La Constitución Española de 1978 (II): Derechos y deberes fundamentales  de los españoles. Garantías y suspensión de los derechos y libertades.
Preguntas 55-101

Tema 3. Organización Territorial del Estado Español. Principios generales. Las  Comunidades Autónomas. El Estatuto de Autonomía de Andalucía. La  Administración Local.
Preguntas 102-137

Tema 4. Sometimiento de la Administración a la Ley y al Derecho. Fuentes del  Derecho Administrativo. La Ley. Clases de leyes. Disposiciones del  Ejecutivo con rango de ley.
Preguntas 138-186

Tema 5. Procedimiento Administrativo Común (I): Los derechos del ciudadano en  sus relaciones con las Administraciones Públicas. Consideración especial  del interesado: Concepto y capacidad de obrar. Identificación y firma de  los interesados. Normas generales de actuación de la actividad de las  Administraciones Públicas.
Preguntas 187-233

Tema 6. Procedimiento Administrativo Común (II): El acto administrativo.  Concepto. Elementos. Clases. Requisitos: La motivación y la forma. La  eficacia de los actos administrativos. Condiciones. La notificación y la  publicación de los actos.
Preguntas 235-283

Tema 7. Procedimiento Administrativo Común (III): Las fases del procedimiento  administrativo. Iniciación, Ordenación, Instrucción y Finalización  del  procedimiento administrativo. La ejecución.
Preguntas 284-307

Tema 8. Procedimiento Administrativo Común (IV): La invalidez del acto  administrativo. Supuestos de nulidad de pleno derecho y anulabilidad.  La revisión de actos y disposiciones por la propia Administración:  supuestos. Los recursos administrativos.
Preguntas 309-358

Tema 9. Régimen local español. Principios constitucionales y regulación jurídica  en la Ley 7/1985. Organización y competencias provinciales y  municipales
Preguntas 359-399

Tema 10. El municipio y la provincia en la Ley 5/2010, de 11 de junio, de  Autonomía Local de Andalucía: Competencias municipales.  Competencias Provinciales.
Preguntas 400-438

Tema 11. El Servicio público local. Concepto. Formas de gestión directa. Formas de  gestión indirecta.
Preguntas 439-478

Tema 12. La potestad reglamentaria en la esfera local. Ordenanzas y reglamentos.  Clases. Procedimiento de elaboración y aprobación.
Preguntas 479-521

Tema 13. Los órganos colegiados locales. Convocatoria, orden del día. Requisitos  de constitución. Funcionamiento. Actas y certificados de acuerdos.
Preguntas 522-570

Tema 14. Personal al servicio de las entidades locales: La función pública local y su  organización. Selección y situaciones administrativas. Derechos y  deberes del personal al servicio de los entes locales.
Preguntas 571-637

Tema 15. Personal al servicio de las entidades locales: El personal laboral. El  contrato de trabajo: Elementos y eficacia, modalidades, contenido,  suspensión y extinción.
Preguntas 639-699

Tema 16. El presupuesto de las entidades locales. Elaboración, aprobación y  ejecución presupuestaria. Su control y fiscalización.
Preguntas 700-746

Tema 17. La Ley de contratos del Sector Público: Objeto y ámbito de aplicación de  la Ley.  Delimitación de los tipos contractuales.
Preguntas 747-795

Tema 18. La actividad subvencional de las Administraciones Públicas. Ámbito de  aplicación. Disposiciones comunes a las subvenciones públicas.
Preguntas 796-844

PREGUNTAS:

PREGUNTA Nº 1.- El art. 8.1 de la Constitución Española de 1978 determina como misión de las Fuerzas  Armadas:
a)  Garantizar la soberanía e independencia de España
b)  La resolución de los conflictos de orden público.
c)  El agotamiento de la vía diplomática.
d)  Garantizar el funcionamiento del Estado y el Gobierno de la Nación.

PREGUNTA Nº 2.- ¿Qué artículo de la Constitución Española de 1978  regula el principio de jerarquía  normativa?
a)  No se recoge expresamente en la Constitución Española de 1978.
b)  Aparece reflejado en el preámbulo de la Constitución Española de 1978.
c)  El artículo 10.1 de la Constitución Española de 1978.
d)  El artículo 9.3 de la Constitución Española de 1978.

PREGUNTA Nº 3.- ¿Cuál de los siguientes principios, entre otros,  garantiza la Constitución Española de 1978 en  su artículo 9.3?
a)  Igualdad.
b)  Mérito.
c)  Legalidad.
d)  No discriminación.

PREGUNTA Nº 4.- Conforme al artículo 3.3 de la Constitución Española de 1978, la riqueza de las distintas  modalidades lingüísticas de España es:
a)  Un patrimonio material del Estado.
b)  Un bien inmaterial en el territorio de la respectiva Comunidad Autónoma.
c)  Objeto de regulación, mediante norma con rango de ley, por el Estado.
d)  Un patrimonio cultural.

PREGUNTA Nº 5.- Según determina el artículo 1.2 de la Constitución Española de 1978, los poderes del Estado:
a)  Son el ejecutivo, legislativo y judicial.
b)  Emanan del pueblo español.
c)  Son los ejercidos por el Rey  o en su nombre.
d)  Se encuentran representados por el Congreso y el Senado.

PREGUNTA Nº 6.- ¿Cuál es la forma política del Estado español conforme al artículo 1.3 de la Constitución  Española?
a)  La Monarquía.
b)  La Monarquía Constitucional.
c)  La Monarquía Parlamentaria.
d)  La Monarquía Democrática.    

PREGUNTA Nº 7.- Dispone el artículo 4 de la Constitución Española respecto a la bandera y enseñas propias de  las Comunidades Autónomas:
a)  Los Estatutos podrán reconocer banderas y enseñas propias de las Comunidades  Autónomas. Estas se utilizarán  junto a la bandera de España en sus edificios oficiales y en  sus actos públicos.
b)  Los Estatutos podrán reconocer banderas y enseñas propias de las Comunidades  Autónomas. Estas se utilizarán  junto a la bandera de España en sus edificios públicos y en  sus actos oficiales.
c)  Las Comunidades Autónomas podrán crear y reconocer banderas y enseñas propias.
d)  Las Leyes autonómicas podrán reconocer banderas y enseñas propias.

PREGUNTA Nº 8.- El artículo 6 de la Constitución Española, dispone respecto a los partidos políticos, lo  siguiente:
a)  Su estructura interna y funcionamiento podrán ser democráticos.
b)  Expresan el pluralismo político, concurren a la formación y manifestación de la voluntad  ciudadana y son instrumento fundamental para la participación política.
c)  Contribuyen a la defensa y promoción de los intereses que les son propios.
d)  Los partidos políticos expresan el pluralismo político, concurren a la formación y  manifestación de la voluntad popular y son instrumento fundamental para la participación  política.

PREGUNTA Nº 9.- Según establece el artículo 7 de la Constitución Española:
a)  Los sindicatos de trabajadores y asociaciones empresariales contribuyen a la defensa y  promoción de los intereses económicos y sociales que les son propios.
b)  Su creación y el ejercicio de su actividad son libres dentro del respeto a las leyes.
c)  Su estructura y organización serán democráticos.
d)  Los sindicatos de empresarios contribuyen a la defensa de los intereses económicos y  sociales que les son propios.

PREGUNTA Nº 10.- La Constitución española de 1978 se estructura en:
a)  Preámbulo, Título preliminar, 10 títulos, 9 disposiciones adicionales, 4 disposiciones  transitorias, 1 disposición derogatoria y 1 disposición final.
b)  Preámbulo, Título preliminar, 10 títulos, 4 disposiciones adicionales, 9 disposiciones  transitorias, 2 disposiciones derogatorias y 1 disposición final.
c)  Preámbulo, Título preliminar, 9 Títulos, 4 disposiciones adicionales, 10 disposiciones  transitorias, 2 disposiciones derogatorias y 1 disposición final.
d)  Preámbulo, Título preliminar, 10 Títulos, 4 disposiciones adicionales, 9 disposiciones  transitorias, 1 disposición derogatoria y 1 disposición final.    

PREGUNTA Nº 11.- El proceso de reforma constitucional regulado en el art. 168 de la Constitución española de  1978, está previsto para aquellos supuestos en que:
a)  Se proponga la revisión total de la Constitución o una parcial que afecte al Título preliminar,  al Capítulo segundo, Sección segunda del Título I, o al Título II.
b)  Se proponga la revisión total de la Constitución o una parcial que afecte al Título preliminar,  al Capítulo primero, Sección primera del Título I, o al Título II.
c)  Se proponga la revisión total de la Constitución o una parcial que afecte al Título preliminar,  al Capítulo segundo, Sección primera del Título I, o al Título III.
d)  Se proponga la revisión total de la Constitución o una parcial que afecte al Título preliminar,  al Capítulo segundo, Sección primera del Título I, o al Título II.

PREGUNTA Nº 12.- La reforma constitucional, según se regula en la Constitución Española de 1978:
a)  No podrá iniciarse fuera de los periodos ordinarios de sesiones.
b)  No podrá iniciarse en tiempo de guerra, ni cuando esté declarado el estado de alarma,  el  de excepción o el de sitio.
c)  Podrá iniciarse en cualquier momento.
d)  No podrá iniciarse en tiempo de guerra, ni cuando esté declarado el estado de excepción o  de sitio.

PREGUNTA Nº 13.- La reforma de la Constitución española:
a)  Se regula en el Título X de la Constitución.
b)  Se regula en el Título IX de la Constitución.
c)  Se regula en el Título X de la Constitución, que abarca los artículos 167 al 169.
d)  Se regula en el Título X de la Constitución, artículos 168 y 169.

PREGUNTA Nº 14.- En relación con la Reforma Constitucional regulada en el Título X de la Constitución  Española: De no lograrse la aprobación del proyecto, tras la falta de acuerdo entre las  cámaras, culminados que sean los trámites marcados constitucionalmente:
a)  Cada Cámara, por mayoría absoluta, podrá aprobar la reforma.
b)  En ningún caso podrá continuarse adelante con la tramitación del proyecto de reforma  constitucional.
c)  El Congreso, por mayoría de dos tercios, podrá aprobar la reforma, si el texto hubiere  obtenido el voto favorable de la mayoría absoluta del Senado.
d)  Sólo se podrá aprobar el texto, si hubiere obtenido al menos el voto favorable de la  mayoría absoluta del Congreso.

PREGUNTA Nº 15.- Nuestra Constitución se caracteriza por ser:
a)  Escrita y no consensuada.
b)  Flexible en cuanto a su reforma.
c)  Formal y escrita.
d)  Originaria.

PREGUNTA Nº 16.- ¿Cuántos tipos de reforma constitucional existen?
a)  Uno, el extraordinario.
b)  Dos, ordinario y extraordinario.
c)  Dos, ordinario y sumario.
d)  Tres, ordinario, extraordinario y sumario.    

PREGUNTA Nº 17.- ¿Cuántas disposiciones transitorias dispone la Constitución?
a)  Cuatro
b)  Seis
c)  Nueve
d)  Tres

PREGUNTA Nº 18.- La reforma de los artículos 20, 21, 22, 23 y 24 de la Constitución Española, ¿qué tipo de  mayoría requerirá?
a)  Mayoría de tres quintos del Congreso y del Senado.
b)  Mayoría de dos tercios del Congreso y del Senado.
c)  Mayoría absoluta del Congreso.
d)  Mayoría absoluta del Congreso y del Senado.

PREGUNTA Nº 19.- La revisión total de la Constitución requiere:
a)  Referéndum por mayoría de 2/3 de ambas Cámaras, previa disolución de las Cortes.
b)  Referéndum obligatoriamente.
c)  Ley orgánica.
d)  Referéndum decidido por mayoría de 2/3 de ambas Cámaras

PREGUNTA Nº 20.- Según el artículo 167 de la Constitución Española, los proyectos de reforma constitucional  deberán ser aprobados:
a)  Por mayoría absoluta de cada una de las Cámaras.
b)  Por mayoría de tres quintos de cada una de las cámaras.
c)  Por mayoría absoluta de las cámaras reunidas en sesión conjunta.
d)  Por mayoría de tres quintos de las Cámaras reunidas en sesión conjunta.

PREGUNTA Nº 21.- ¿En qué fecha fue promulgada la Constitución Española de 1978?
a)  El 27 de diciembre de 1978.
b)  El 29 de diciembre de 1978.
c)  El 6 de diciembre de 1978.
d)  El 31 de octubre de 1978.

PREGUNTA Nº 22.- ¿En qué fecha fue ratificada en referéndum la Constitución española?
a)  El 6 de diciembre de 1978.
b)  El 27 de diciembre de 1978.
c)  El 29 de Diciembre de 1978.
d)  El 31 de Octubre de 1978.

PREGUNTA Nº 23.- ¿Cuándo se publicó la Constitución Española en el Boletín oficial del Estado?
a)  El 6 de diciembre de 1978.
b)  El 27 de Diciembre de 1978.
c)  El 28 de diciembre de 1978.
d)  El 29 de diciembre de 1978.    

PREGUNTA Nº 24.- La Constitución Española establece en su artículo 9.1:
a)  Corresponde al gobierno promover las condiciones para que la libertad y la seguridad del  individuo sean reales y efectivas.
b)  Les corresponde al Gobierno central y a las Comunidades Autónomas promover las  condiciones para que la libertad e igualdad del individuo sean reales y efectivas
c)  Los ciudadanos y los poderes públicos están sujetos a la Constitución y al resto del  ordenamiento jurídico.
d)  Los principios en los que se basa el gobierno para promover la igualdad y seguridad de los  ciudadanos son el de legalidad, seguridad jurídica e interdicción de la arbitrariedad de los  poderes públicos.

PREGUNTA Nº 25.- Según establece nuestra Constitución, todos los españoles, con respecto al idioma oficial del  Estado:
a)  Tienen el deber y el derecho de conocerlo.
b)  Tienen el derecho de conocerlo y el deber de usarlo.
c)  Tienen el deber y el derecho de usarlo.
d)  Tienen el deber de conocerlo y el derecho de usarlo.

PREGUNTA Nº 26.- ¿Cuál es la lengua oficial del Estado español?
a)  El castellano.
b)  Cualquiera de las lenguas oficiales reconocidas en España.
c)  El español exclusivamente.
d)  El castellano y las demás lenguas de acuerdo con los Estatutos de las Comunidades  Autónomas.

PREGUNTA Nº 27.- Las banderas y enseñas propias de las Comunidades Autónomas, reconocidas en sus  Estatutos:
a)  Se utilizarán junto con la española sólo en los actos oficiales de carácter estatal.
b)  La utilización conjunta de la bandera de España y la de cada Comunidad autónoma es  potestad de las autoridades de la administración autonómica.
c)  Se utilizarán junto a la española en sus edificios públicos y en sus actos oficiales.
d)  Se utilizarán en sustitución de la española en los edificios públicos oficiales propios de cada  Comunidad.

PREGUNTA Nº 28.- ¿Quiénes tienen como misión garantizar la soberanía e independencia de España, defender  su integridad territorial y el ordenamiento constitucional?
a)  Artículo 7.1: Las Fuerzas armadas, constituidas por el Ejército de Tierra, la Armada y el  ejército del Aire.
b)  Artículo 7.1: Las Fuerzas Armadas, constituidas por el Ejército de Tierra, la Marina y el  Ejército del Aire.
c)  Artículo 8.1: Las Fuerzas Armadas, constituidas por el Ejército de Tierra, la Armada y el  Ejército del Aire.
d)  Artículo 8.1: Las Fuerzas Armadas, constituidas por el Ejército de tierra, la Marina y el  Ejército del Aire.    

PREGUNTA Nº 29.- En el Procedimiento ordinario de reforma constitucional, el referéndum es:
a)  Improcedente.
b)  Obligatorio en cada caso.
c)  Voluntario en cualquier caso.
d)  Preceptivo cuando se solicite por una décima parte de los Diputados o Senadores, dentro  de los quince días siguientes a la aprobación de la reforma.

PREGUNTA Nº 30.- Establece el artículo 9.3 del texto constitucional:
a)  La Constitución garantiza el principio de legalidad, la jerarquía normativa, la publicidad de  las normas, la irretroactividad de las disposiciones sancionadoras no favorables o  restrictivas de derechos individuales, la seguridad jurídica, la responsabilidad y la  interdicción de la arbitrariedad de los poderes públicos.
b)  La Constitución garantiza el principio de legalidad, la publicidad de las normas, la  irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos  individuales, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad de  los poderes públicos.
c)  Corresponde a los poderes del Estado promover las condiciones para que la libertad y la  igualdad del individuo y de los grupos en que se integra sean reales y efectivas; remover los  obstáculos que impidan o dificulten su plenitud y facilitar la participación de todos los  ciudadanos en la vida política, económica, cultural y social.
d)  Corresponde a los poderes públicos del Estado promover las condiciones para que la  libertad y la igualdad del individuo y de los grupos en que se integra sean reales y efectivas;  remover los obstáculos que impidan o dificulten su plenitud y facilitar la participación de  todos los ciudadanos en la vida política, económica, cultural y social.

PREGUNTA Nº 31.- Establece el artículo 9.2 del texto constitucional:
a)  La Constitución garantiza el principio de legalidad, la jerarquía normativa, la publicidad de  las normas, la irretroactividad de las disposiciones sancionadoras no favorables o  restrictivas de derechos individuales, la seguridad jurídica, la responsabilidad y la  interdicción de la arbitrariedad de los poderes públicos.
b)  La Constitución garantiza el principio de legalidad, la publicidad de las normas, la  irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos  individuales, la seguridad jurídica, la responsabilidad y la interdicción de la arbitrariedad de  los poderes públicos.
c)  Corresponde a los poderes públicos promover las condiciones para que la libertad y la  igualdad del individuo y de los grupos en que se integra sean reales y efectivas; remover los  obstáculos que impidan o dificulten su plenitud y facilitar la participación de todos los  ciudadanos en la vida política, económica, cultural y social.
d)  Corresponde a los poderes del Estado promover las condiciones para que la libertad y la  igualdad del individuo y de los grupos en que se integra sean reales y efectivas; remover los  obstáculos que impidan o dificulten su plenitud y facilitar la participación de todos los  ciudadanos en la vida política, económica, cultural y social.    

PREGUNTA Nº 32.- Respecto a las nacionalidades y regiones que integran a la Nación española, la Constitución  Española 1978 les reconoce y garantiza:
a)  El derecho a la autonomía.
b)  El derecho a la solidaridad entre ellas, pero no el derecho a la autonomía políticamente  entendida.
c)  El derecho a su libre federación o confederación.
d)  El derecho a la libre autodeterminación.

PREGUNTA Nº 33.- Para que el Congreso pueda aprobar el Proyecto de reforma a que se refiere el artículo  167.2 de la Constitución Española:
a)  Necesita mayoría absoluta, si el Senado lo aprobó por 2/3.
b)  Necesita siempre mayoría de 3/5 de sus miembros.
c)  Necesita mayoría de 3/5, si los aprobó el Senado por mayoría absoluta.
d)  Necesita mayoría de 2/3, si lo aprobó el Senado por mayoría absoluta.

PREGUNTA Nº 34.- Según el Artículo 1.1 de la Constitución Española, ¿cuáles son los valores superiores de su  ordenamiento jurídico?
a)  La libertad y la igualdad.
b)  La libertad, la justicia, la igualdad y el pluralismo político.
c)  La libertad, la justicia y la igualdad.
d)  La libertad y el pluralismo político.

PREGUNTA Nº 35.- El Capítulo II del Título I de la Constitución Española de 1978 trata de:
a)  Los principios rectores de la política social y económica.
b)  Los derechos y las libertades.
c)  Las garantías y las libertades y derechos fundamentales.
d)  De los españoles y los extranjeros

PREGUNTA Nº 36.- De acuerdo con lo establecido en el art. 6 de la Constitución Española de 1978 los partidos  políticos expresan:
a)  El pluralismo político.
b)  La defensa de los intereses de los ciudadanos.
c)  La voluntad popular.
d)  Son instrumento fundamental para la formación política.

PREGUNTA Nº 37.- Las medidas de las franjas horizontales de la bandera Española son:
a)  Las franjas rojas son de doble anchura que la amarilla.
b)  Cada una tiene una medida diferente.
c)  La franja amarilla es de doble anchura que cada una de las franjas rojas.
d)  Las tres son iguales.

PREGUNTA Nº 38.- Según el artículo 3 de la Constitución Española: Todos los españoles, con respecto al idioma  oficial del Estado
a)  Tienen el deber y el derecho de conocerlo.
b)  Tienen el deber de conocerlo y el derecho de usarlo.
c)  Tienen el deber y el derecho de usarlo.
d)  Tienen el deber de usarlo.    

PREGUNTA Nº 39.- La Constitución Española de 1978 atribuye el promover las condiciones para que la libertad  y la igualdad del individuo y de los grupos que se integran sean reales y efectivas, a:
a)  Los Partidos Políticos.
b)  Al Gobierno.
c)  A los Jueces.
d)  A los poderes públicos.

PREGUNTA Nº 40.- Según el artículo 1.2 de la Constitución Española, la soberanía reside en:
a)  En el Jefe del Estado y en el pueblo español.
b)  En las Cortes Generales.
c)  En las distintas partes que forman el Estado español.
d)  En el pueblo español.

PREGUNTA Nº 41.- En el artículo 1.1 de la Constitución Española de 1978 es donde se enumeran:
a)  Los Poderes del Estado.
b)  Los valores superiores del ordenamiento jurídico.
c)  Las Comunidades Autónomas.
d)  Las Entidades Locales.

PREGUNTA Nº 42.- Podemos decir que el Título Preliminar de la Constitución Española de 1978:
a)  Es donde se enumeran los Poderes del Estado.
b)  En él se contienen los principios fundamentales que sirven de base a toda la Constitución.
c)  En él se recogen los derechos fundamentales de los españoles.
d)  En él se recogen los poderes del Estado y los derechos fundamentales.

PREGUNTA Nº 43.- El Título I de la Constitución: "De los derechos y deberes fundamentales", ¿de cuántos  capítulos consta?
a)  5 capítulos.
b)  3 capítulos.
c)  4 capítulos.
d)  2 capítulos y cada uno se divide en 3 secciones.

PREGUNTA Nº 44.- ¿Qué derecho reconoce y garantiza el artículo 2 de la Constitución Española?
a)  El derecho a usar el castellano.
b)  El derecho a la autonomía de las nacionalidades y regiones.
c)  El derecho a la libertad, la justicia y la igualdad.
d)  La igualdad de los españoles ante la ley.

PREGUNTA Nº 45.- La Constitución de 1978 regula la bandera de España en el artículo:
a)  4.
b)  3.
c)  5.
d)  3.3.    

PREGUNTA Nº 46.- De acuerdo con la Constitución Española, expresan el pluralismo político, concurren a la  formación y manifestación de la voluntad popular y son instrumento fundamental para la  participación política:
a)  Los sindicatos de trabajadores y las asociaciones empresariales.
b)  Los partidos políticos.
c)  Las Fuerzas Armadas.
d)  Los poderes públicos.

PREGUNTA Nº 47.- El principio de irretroactividad garantizado en la Constitución Española en el artículo 9.3,  abarca:
a)  A todas las normas de carácter penal.
b)  A todas las disposiciones legales de cualquier orden.
c)  A las disposiciones sancionadoras no favorables o restrictivas de derechos individuales.
d)  A las disposiciones sancionadoras, más aquellas que impongan penas privativas de libertad  no superior a los seis años, o de multa cualquiera que fuese su cuantía.

PREGUNTA Nº 48.- Corresponde a los poderes públicos promover las condiciones para que la libertad y la  igualdad del individuo y de los grupos en que se integra: (art. 9 de la Constitución)
a)  Sean reales y efectivas.
b)  Alcancen el nivel más alto posible.
c)  Se empleen por los ciudadanos dentro del respeto a la Constitución y las leyes.
d)  Sean comunes a todos los miembros de la sociedad.

PREGUNTA Nº 49.- Según el artículo 7 de la Constitución Española: Los sindicatos de trabajadores:
a)  Contribuyen en solitario a la promoción de los intereses sociales.
b)  Contribuyen a la defensa de los intereses sociales, pero no de naturaleza propia, sino  general.
c)  Contribuyen a la defensa de sus exclusivos intereses económicos.
d)  Contribuyen a la defensa y promoción de los intereses económicos y sociales que le son  propios.

PREGUNTA Nº 50.- La iniciativa para la reforma constitucional se ejercerá conforme al artículo 166:
a)  Podrá ejercerla el Defensor del Pueblo.
b)  Por el Gobierno, el Congreso y el Senado.
c)  Por el Gobierno, el Congreso, el Senado y las Asambleas de las Comunidades Autónomas.
d)  Por el Gobierno, el Congreso, el Senado, las Asambleas de las Comunidades Autónomas y el  pueblo, a través de la iniciativa popular.

PREGUNTA Nº 51.- La estructura interna y el funcionamiento de los Partidos Políticos deberá ser:
a)  Estructurada.
b)  Transparente.
c)  Jerárquica.
d)  Democrática.    

PREGUNTA Nº 52.- La capital del Estado (art. 5 de la Constitución) es:
a)  El centro de Madrid.
b)  La provincia de Madrid.
c)  La ciudad de Madrid.
d)  La villa de Madrid.

PREGUNTA Nº 53.- No puede iniciarse la reforma constitucional en:
a)  El supuesto de que el Rey no lo estime oportuno.
b)  El supuesto de que el Congreso de los Diputados no lo estime oportuno.
c)  Tiempo de guerra o de vigencia de alguno de los estados previstos en el artículo 116.
d)  Un período extraordinario de sesiones de las Cámaras.

PREGUNTA Nº 54.- La Sección II del Capítulo Segundo, correspondiente al Título  I de la Constitución Española,  regula:
a)  Las garantías de las libertades y derechos fundamentales.
b)  Los principios rectores de la política social y económica.
c)  Los derechos y deberes de los ciudadanos.
d)  Los derechos fundamentales y de las libertades públicas.        

PREGUNTA Nº 55.- El Capítulo II del Título I de la Constitución Española de 1978 trata de:
a)  Los principios rectores de la política social y económica.
b)  Los derechos y las libertades.
c)  Las garantías y las libertades y derechos fundamentales.
d)  De los españoles y los extranjeros

PREGUNTA Nº 56.- El Título I de la Constitución: "De los derechos y deberes fundamentales", ¿de cuántos  capítulos consta?
a)  5 capítulos.
b)  3 capítulos.
c)  4 capítulos.
d)  2 capítulos y cada uno se divide en 3 secciones.

PREGUNTA Nº 57.- De las siguientes afirmaciones, es correcta:
a)  Las personas extranjeras gozan en España de idénticas libertades públicas que los  españoles.
b)  Las personas extranjeras gozan en España de idénticos derechos que los españoles.
c)  Las personas extranjeras gozan en España de las libertades públicas que se garantizan en el  Título I de la Constitución en los términos que establezcan los Tratados y la Ley.
d)  Las personas extranjeras no gozan de ninguno de los derechos reconocidos en el Título I de  la Constitución.

PREGUNTA Nº 58.- El Artículo 14 de la Constitución Española de 1978 establece lo siguiente:
a)  Los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por  razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia  personal o social.
b)  Todos los ciudadanos son iguales ante la ley, sin que pueda prevalecer discriminación  alguna por razón de nacimiento, raza, sexo, religión u opinión.
c)  Los españoles y españolas son iguales ante la ley.
d)  Los españoles son iguales, sin que pueda prevalecer discriminación alguna por cualquier  condición o circunstancia personal o social.

PREGUNTA Nº 59.- De acuerdo con el artículo 116 de la Constitución Española, el Estado de Excepción será  declarado mediante:
a)  Decreto acordado en Consejo de Ministros dando cuenta al Congreso de los Diputados.
b)  Decreto acordado en Consejo de Ministros previa autorización del Congreso de los  Diputados
c)  Decreto autorizado por las Cortes Generales.
d)  Una ley.    

PREGUNTA Nº 60.- De acuerdo con el artículo 18 de la Constitución Española de 1978, el domicilio es inviolable,  de modo que no se podrá entrar en él:
a)  Salvo sospecha de delito.
b)  Salvo denuncia de que se ha cometido un delito.
c)  Salvo flagrante delito.
d)  En ningún caso.

PREGUNTA Nº 61.- El derecho de huelga reconocido en el artículo 28 de la Constitución Española de 1978:
a)  Sólo se refiere a los trabajadores.
b)  No podrá llevarse a cabo por los funcionarios.
c)  La Administración debe previamente autorizarlo.
d)  Sólo la mitad de los trabajadores de una empresa pueden acudir a ella.

PREGUNTA Nº 62.- El artículo 31.2 de la Constitución Española de 1978, establece que el gasto público realizará  una asignación:
a)  Equitativa de los recursos públicos.
b)  Mayoritaria en las Comunidades Autónomas más necesitadas.
c)  Igual para todos los españoles.
d)  A las familias necesitadas.

PREGUNTA Nº 63.- El Defensor del Pueblo a nivel estatal se regula, según el artículo 54 de la Constitución  Española de 1978:
a)  Por Real Decreto.
b)  Por ley ordinaria.
c)  Por Ley Orgánica.
d)  Por Real Decreto Legislativo.

PREGUNTA Nº 64.- Según el artículo 17 de la Constitución Española de 1978, la detención preventiva no puede  durar más de:
a)  24 horas.
b)  72 horas.
c)  48 horas.
d)  No se establece límite.

PREGUNTA Nº 65.- Para garantizar el honor y la intimidad personal y familiar de los/as ciudadanos/as, el  artículo 18.4 de la Constitución Española de 1978, establece que una Ley limitará:
a)  Las escuchas autorizadas por resolución judicial.
b)  El uso de la informática.
c)  Los medios de comunicación.
d)  Las reproducciones gráficas y sonoras.

PREGUNTA Nº 66.- En relación con el derecho a la educación, el art. 27 de la Constitución Española de 1978  reconoce la gratuidad de:
a)  La enseñanza universitaria.
b)  Toda la Formación Profesional.
c)  Los cursos organizados por el Servicio de Empleo Público Estatal.
d)  La enseñanza básica.    

PREGUNTA Nº 67.- La Constitución Española de 1978, en su artículo 28 establece, respecto a las medidas de  conflicto colectivo que:
a)  Sólo se reconocen a los trabajadores.
b)  Una ley regulará el ejercicio de este derecho que no podrá establecer limitaciones.
c)  Se requiere la previa autorización gubernativa para su ejercicio.
d)  Habrá de asegurarse el funcionamiento de los servicios esenciales de la comunidad.

PREGUNTA Nº 68.- ¿Pueden interceptarse las comunicaciones postales a tenor del artículo 18 de la  Constitución Española?
a)  Sí, por medio de resolución administrativa.
b)  No, en ningún caso.
c)  Sólo mediante resolución judicial.
d)  Sí, por medio de resolución judicial o administrativa.

PREGUNTA Nº 69.- La Constitución Española de 1978 prevé en el artículo 24, que por Ley pueda dispensarse a  una persona de la obligación a declarar la comisión de hechos presuntamente delictivos, por  razón de:
a)  Afectividad.
b)  Dependencia profesional.
c)  Parentesco.
d)  La Constitución no prevé ninguna excepción a dicha obligación.

PREGUNTA Nº 70.- El derecho sobre libertad de expresión y difusión de pensamientos, ideas y opiniones podrá  suspenderse, según dispone el art. 55 de la Constitución Española:
a)  Cuando se declare el estado de excepción.
b)  Cuando se declare el estado de excepción o de sitio.
c)  En ningún caso.
d)  Cuando se declare el estado de sitio.

PREGUNTA Nº 71.- ¿Quién designa al Defensor del Pueblo según dispone el artículo 54 de la Constitución  Española de 1978?
a)  El Rey.
b)  Las Cortes Generales.
c)  La Comisión Mixta Congreso-Senado para las relaciones con el Defensor del Pueblo.
d)  El Presidente del Gobierno.

PREGUNTA Nº 72.- La Sección II del Capítulo Segundo, correspondiente al Título I de la Constitución Española,  regula:
a)  Las garantías de las libertades y derechos fundamentales.
b)  Los principios rectores de la política social y económica.
c)  Los derechos y deberes de los ciudadanos.
d)  Los derechos fundamentales y de las libertades públicas.

PREGUNTA Nº 73.- ¿Qué regula el artículo 44.1 de la Constitución Española?
a)  El derecho a la salud.
b)  El derecho de acceso a la cultura.
c)  El derecho a una vivienda adecuada.
d)  El derecho a vacaciones retribuidas.  

PREGUNTA Nº 74.- Según el artículo 17 de la Constitución Española, en caso de detención preventiva, según el  art. 17 ¿en qué momento está garantizada por la asistencia de abogado?
a)  En las diligencias policiales.
b)  En las diligencias policiales y judiciales.
c)  Sólo en las diligencias judiciales.
d)  Sólo en las diligencias policiales en las que lo solicite el interesado.

PREGUNTA Nº 75.- ¿Puede limitarse el derecho a la entrada y salida de territorio español por motivos  ideológicos a los españoles?
a)  Sí, a tenor del contenido del artículo 20 de la Constitución.
b)  Sí, a tenor del artículo 23 de la Constitución.
c)  No, a tenor del contenido del artículo 19 de la Constitución Española de 1978.
d)  No, a tenor del artículo 21 de la Constitución.

PREGUNTA Nº 76.- De conformidad con el art. 53, vinculan a todos los poderes públicos los derechos y  libertades reconocidos en la Constitución Española de 1978, en concreto:
a)  En los Capítulos Primero y Segundo del Título Primero.
b)  En los Capítulos Primero, Segundo y Tercero del título Primero.
c)  En los Capítulos Primero y Tercero del Título Primero.
d)  En el Capítulo Segundo del Título Primero.

PREGUNTA Nº 77.- ¿Cuál de los siguientes no es un principio rector de la política social y económica sino un  derecho fundamental?
a)  El derecho a una vivienda digna y adecuada.
b)  El derecho de sindicación.
c)  El derecho a disfrutar de un medio ambiente adecuado.
d)  La protección a la familia y a la infancia.

PREGUNTA Nº 78.- Según dispone la Constitución Española, ¿qué asociaciones son ilegales?
a)  Las asociaciones prohibidas.
b)  Las que se reúnan sin autorización previa.
c)  Las que persigan fines o utilicen medios tipificados como delito.
d)  Las que no estén inscritas en el registro correspondiente del Ministerio del Interior.

PREGUNTA Nº 79.- Según dispone la Constitución Española, los ciudadanos tienen derecho a participar en los  asuntos públicos:
a)  Sólo de forma directa.
b)  Sólo por medio de representantes.
c)  Cuando lo haga a través de representantes, estos deberán haber sido elegidos  directamente por los afectados.
d)  Directamente o por medio de representantes.    

PREGUNTA Nº 80.- Tal y como dispone la Constitución Española, las asociaciones se inscribirán en un registro a  efectos de:
a)  Publicidad.
b)  Constitución.
c)  Legalidad.
d)  Creación.

PREGUNTA Nº 81.- Conforme el artículo 47 de la Constitución Española, el derecho a disfrutar de una vivienda  digna y adecuada es:
a)  Una libertad pública.
b)  Un derecho fundamental de los españoles.
c)  Un principio rector de la política social y económica.
d)  Un deber fundamental de los poderes públicos.

PREGUNTA Nº 82.- Conforme el artículo 31 de la Constitución Española de 1978:
a)  No podrán establecerse prestaciones personales.
b)  La programación y ejecución del gasto público responderá a los criterios de eficiencia y  economía.
c)  No podrán establecerse prestaciones personales patrimoniales.
d)  El gasto público realizará una asignación arbitraria de los recursos públicos.

PREGUNTA Nº 83.- Según establece el artículo 54 de la Constitución Española, ¿ante quién debe rendir cuenta  el Defensor del Pueblo?
a)  Ante el Congreso de los Diputados.
b)  Ante las Cortes Generales.
c)  Ante los Tribunales y el Congreso de los Diputados.
d)  Ante el Gobierno y la Administración.

PREGUNTA Nº 84.- ¿Qué artículo de la Constitución regula el derecho y el deber de trabajar?
a)  El artículo 33.
b)  El artículo 37.
c)  El artículo 35.
d)  El artículo 39.

PREGUNTA Nº 85.- ¿Cuál de los siguientes derechos no podrá ser suspendido en caso de que se acuerde la  declaración de estado de excepción o de sitio, según el art. 55 de la Constitución Española de  1978?
a)  Derecho al honor.
b)  Derecho al secreto de las comunicaciones.
c)  Derecho a la libertad y a la seguridad.
d)  Derecho a la inviolabilidad del domicilio.

PREGUNTA Nº 86.- ¿Cuál de los siguientes no es un principio rector de la política social y económica sino un  derecho fundamental, según la Constitución Española de 1978?
a)  El derecho a una vivienda digna y adecuada.
b)  El derecho de sindicación.
c)  El derecho a disfrutar de un medio ambiente adecuado.
d)  La protección a la familia y a la infancia.  

PREGUNTA Nº 87.- Según se regula en el artículo 18 de la Constitución Española, ¿en qué casos se puede  proceder a la entrada en un domicilio particular?
a)  En caso de autorización del titular o resolución judicial exclusivamente.
b)  En caso de delito flagrante o resolución judicial exclusivamente.
c)  En caso de autorización del titular, resolución judicial o flagrante delito.
d)  En caso de resolución judicial exclusivamente.

PREGUNTA Nº 88.- Según dispone la Constitución Española, el derecho al "habeas corpus", podrá suspenderse:
a)  Cuando se declare el estado de sitio.
b)  En ningún caso.
c)  Cuando se declare el estado de excepción.
d)  Cuando se declare el estado o de sitio.

PREGUNTA Nº 89.- ¿En qué artículo de la Constitución Española de 1978 se contiene el derecho a la libertad y  seguridad individual?
a)  En el artículo 21.
b)  En el artículo 20.
c)  En el artículo 17.
d)  En el artículo 18.

PREGUNTA Nº 90.- Según el artículo 54 de la Constitución Española, el Defensor del Pueblo es designado por las  Cortes Generales para la defensa de los derechos comprendidos en:
a)  Toda la Constitución.
b)  El título I de la Constitución.
c)  El capítulo segundo del título I de la Constitución.
d)  La sección primera del capítulo segundo del título I de la Constitución.

PREGUNTA Nº 91.- ¿Ante quién debe rendir cuenta el Defensor del Pueblo, según dispone la Constitución  Española?
a)  Ante el Congreso de los Diputados.
b)  Ante las Cortes Generales.
c)  Ante los Tribunales y el Congreso de los Diputados.
d)  Ante el Gobierno y la Administración.

PREGUNTA Nº 92.- El artículo 18.4 de nuestra Constitución, de cara a garantizar el honor y la intimidad personal  y familiar de los ciudadanos, y el pleno ejercicio de sus derechos, limita:
a)  El uso de la libertad de expresión.
b)  El uso de la libertad de prensa.
c)  El uso de la informática.
d)  El uso de la publicidad.

PREGUNTA Nº 93.- Según dispone nuestra Constitución Española de 1978:
a)  No podrán establecerse prestaciones personales.
b)  La programación y ejecución del gasto público responderá a los criterios de eficiencia y  economía.
c)  No podrán establecerse prestaciones personales patrimoniales.
d)  El gasto público realizará una asignación arbitraria de los recursos públicos.  

PREGUNTA Nº 94.- Dispone la Constitución Española la siguiente afirmación:
a)  Se reconoce el derecho de reunión con armas.  El ejercicio de este derecho no necesita  autorización previa.
b)  Se reconoce el derecho de reunión con armas, siempre que sea pacífica. El ejercicio de este  derecho necesita autorización previa.
c)  Se reconoce el derecho de reunión pacífica y sin aras. El ejercicio de este derecho necesita  autorización previa.
d)  Se reconoce el derecho de reunión pacífica y sin armas. El ejercicio de este derecho no  necesita autorización previa.

PREGUNTA Nº 95.- Señala la Constitución Española que el derecho a disfrutar de una vivienda digna y adecuada  es:
a)  Una libertad pública.
b)  Un derecho fundamental de los españoles.
c)  Un principio rector de la política social y económica.
d)  Un deber fundamental de los poderes públicos.

PREGUNTA Nº 96.- El Capítulo II del Título I de la Constitución consta de:
a)  3 Secciones.
b)  1 Sección.
c)  4 Secciones.
d)  2 Secciones.

PREGUNTA Nº 97.- Tal y como dispone la Constitución Española, las asociaciones se inscribirán en un registro a  efectos de:
a)  Publicidad.
b)  Constitución.
c)  Legalidad.
d)  Creación.

PREGUNTA Nº 98.- Según dispone la Constitución Española, los ciudadanos tienen derecho a participar en los  asuntos públicos:
a)  Sólo de forma directa.
b)  Sólo por medio de representantes.
c)  Cuando lo haga a través de representantes, estos deberán haber sido elegidos  directamente por los afectados.
d)  Directamente o por medio de representantes.

PREGUNTA Nº 99.- ¿Cuál es el tiempo máximo de duración de la detención preventiva?
a)  24 horas.
b)  48 horas.
c)  36 horas.
d)  72 horas.    

PREGUNTA Nº 100.- Señale el derecho que no podrá ser suspendido en el estado de excepción pero sí en el  estado de sitio:
a)  Derecho de toda persona a ser informada de forma inmediata y de modo que le sea  comprensible de sus derechos y de las razones de su detención.
b)  Derecho de los trabajadores y empresarios a adoptar medidas de conflicto colectivo.
c)  Derecho a que no sean secuestradas las publicaciones, grabaciones y otros medios de  información salvo en virtud de resolución judicial.
d)  Derecho a la huelga de los trabajadores para la defensa de sus intereses.

PREGUNTA Nº 101.- ¿Qué artículo cierra el Título I de la Constitución Española?
a)  El artículo 53.
b)  El artículo 54.
c)  El artículo 55.
d)  El artículo 56.        

PREGUNTA Nº 102.- La Organización territorial del Estado se regula en la Constitución Española de 1978 en el  Título:
a)  Título X
b)  Título VIII
c)  Título VII
d)  Título IX

PREGUNTA Nº 103.- El artículo 137 de la Constitución Española establece las entidades en que se organiza  territorialmente el Estado, determinando que todas ellas tienen autonomía:
a)  Para el cumplimiento de sus fines.
b)  Para la gestión de sus competencias.
c)  Para la gestión de sus respectivos intereses.
d)  Para la gestión del interés público.

PREGUNTA Nº 104.- El artículo 140 de la Constitución Española de 1978 garantiza la autonomía de los  municipios. Estos gozarán de personalidad jurídica:
a)  Plena.
b)  Sometida la Comunidad Autónoma.
c)  Sometida al Estado.
d)  Sometida a la Diputación Provincial

PREGUNTA Nº 105.- Según el artículo 144 de la Constitución Española de 1978, las Cortes Generales, mediante  Ley Orgánica, podrán, por motivos de interés nacional:
a)  Autorizar la constitución de una Comunidad Autónoma cuando su ámbito territorial no  supere el de una provincia y no reúna las condiciones del apartado 1 del artículo 143.
b)  Elaborar, en su caso, un Estatuto de Autonomía para territorios que no estén integrados en  la organización territorial de ámbito autonómico
c)  Complementar la iniciativa de las Corporaciones locales a que se refiere el apartado 2 del  artículo 143.
d)  Crear la constitución de una Ciudad Autónoma, siempre que se cumplan los requisitos  esenciales para su creación.

PREGUNTA Nº 106.- Según el artículo 145.1 de la Constitución Española de 1978, indique la opción correcta:
a)  Se admitirá la federación de Comunidades Autónomas.
b)  En ningún caso se admitirá la federación de Comunidades Autónomas.
c)  Se admitirá la federación de Comunidades Autónomas, pero sólo para las provincias  limítrofes con características históricas, culturales y económicas comunes.
d)  La Constitución no establece nada al  respecto.    

PREGUNTA Nº 107.- Según el artículo 148.1.9 de la Constitución Española de 1978, la gestión en materia de  protección del medio ambiente, es una competencia:
a)  De las Comunidades Autónomas.
b)  Del Estado.
c)  De la Unión Europea.
d)  De los municipios.

PREGUNTA Nº 108.- Según dispone el artículo 157.2 de la Constitución Española de 1978, las Comunidades  Autónomas:
a)  Podrán adoptar medidas tributarias sobre bienes situados fuera de su territorio.
b)  No podrán en ningún caso adoptar medidas tributarias sobre bienes situados fuera de su  territorio o que supongan obstáculo para la libre circulación de mercancías o servicios.
c)  Podrán adoptar medidas tributarias sobre bienes situados fuera de su territorio si no  suponen obstáculo para la libre circulación de mercancías o servicios.
d)  Podrán adoptar medidas tributarias sobre bienes situados fuera de su territorio aunque  supongan obstáculo para la libre circulación de mercancías o servicios.

PREGUNTA Nº 109.- Según el artículo 153 de la Constitución Española de 1978, el control de la actividad de los  órganos de las Comunidades Autónomas se ejercerá:
a)  Por el Tribunal Superior de Justicia de cada Comunidad Autónoma, el de la administración  autónoma y sus normas reglamentarias.
b)  Por el Senado, el económico y presupuestario.
c)  Por el Gobierno, previo dictamen del Consejo de Estado, la totalidad de su actividad
d)  Por el Tribunal de Cuentas, el económico y presupuestario.

PREGUNTA Nº 110.- ¿Cómo son elegidos los Alcaldes según la Constitución Española?
a)  Según el artículo 140 de la Constitución Española, serán elegidos por los Concejales o por  los vecinos.
b)  Según el artículo 140 de la Constitución Española, serán elegidos los alcaldes por los  vecinos del municipio mediante sufragio universal, igual, libre, directo y secreto, en la  forma establecida por la ley.
c)  Según el artículo 141 de la Constitución Española, los alcaldes serán elegidos por los  Concejales o por los vecinos, en la forma establecida por la ley.
d)  Según el artículo 141 de la Constitución Española serán elegidos los alcaldes por los vecinos  del municipio.

PREGUNTA Nº 111.- De acuerdo con el artículo 149.1.9 de la Constitución Española de 1978, ¿cuál de las  siguientes competencias no pertenece a las Comunidades Autónomas?
a)  Ordenación del territorio, urbanismo y vivienda.
b)  Los montes y aprovechamientos forestales.
c)  La gestión en materia de protección de medio ambiente.
d)  La Legislación sobre propiedad intelectual e industrial.    

PREGUNTA Nº 112.- Prevé la Constitución Española de 1978 en su artículo 142 que las Haciendas Locales  deberán:
a)  Disponer de los medios suficientes para el desempeño de sus funciones.
b)  Disponer de los medios suficientes para el desempeño de sus funciones y establecimiento  de sus propios servicios.
c)  Establecer los recursos necesarios para el cumplimiento de sus competencias.
d)  Exigir los medios económicos necesarios para atender sus fines.

PREGUNTA Nº 113.- De acuerdo con lo dispuesto en el art. 143.2 de la Constitución Española de 1978, se  reconoce la iniciativa del proceso autonómico a todas las Diputaciones interesadas y:
a)  A las 3/4 partes de los Municipios que representen la mayoría del censo electoral de la  circunscripción que pretenda constituirse en Comunidad Autónoma.
b)  A las 2/3 partes de los Municipios que presenten la mayoría del censo electoral de la  circunscripción que pretenda constituirse en Comunidad Autónoma.
c)  A las 3/4 partes de los municipios cuya población represente, al menos, la mayoría del  Censo electoral de cada provincia o isla.
d)  A las 2/3 partes de los municipios cuya población represente, al menos, la mayoría del  Censo electoral de cada provincia o isla.

PREGUNTA Nº 114.- El artículo 144 de la Constitución Española de 1978 prevé que la iniciativa de las  Corporaciones Locales respecto al proceso autonómico se pueda sustituir por:
a)  Los Entes Autonómicos existentes.
b)  Acuerdos del consejo de Ministros.
c)  Por las Cortes Generales.
d)  Por el Congreso.

PREGUNTA Nº 115.- La Federación de Comunidades Autónomas, de acuerdo con nuestra Constitución Española  de 1978:
a)  Requiere la aprobación de una Ley Orgánica.
b)  Requiere la autorización de las Cortes Generales.
c)  Requiere la autorización del Gobierno.
d)  La Federación de Comunidades autónomas está totalmente prohibida.

PREGUNTA Nº 116.- El Estatuto de Autonomía de Andalucía consta de:
a)  Título Preliminar y diez Títulos.
b)  Preámbulo, Título Preliminar y diez Títulos.
c)  Diez Títulos.
d)  Preámbulo y diez Títulos.

PREGUNTA Nº 117.- En caso de no prosperar la iniciativa de acceso a la autonomía recogida en el artículo 143  de la Constitución Española de 1978, podrá reiterarse pasados:
a)  3 años.
b)  4 años.
c)  5 años.
d)  6 meses.    

PREGUNTA Nº 118.- Una vez elaborado el proyecto de Estatuto de autonomía, dispone el art. 146 de la  Constitución que:
a)  Se elevará a las Cortes para su tramitación como ley.
b)  Se someterá a referéndum.
c)  Deberá ser ratificado por las Provincias afectadas.
d)  Se dará traslado a una comisión Mixta del Congreso.

PREGUNTA Nº 119.- La Constitución Española de 1978 en el ejercicio del derecho a la autonomía prevé en su  art. 143 que puedan constituirse en Comunidades Autónomas las provincias que:
a)  Tengan tradición histórica.
b)  Sean unicomarcales.
c)  Tengan entidad regional histórica.
d)  Tengan plebiscitado con anterioridad Estatutos de Autonomía.

PREGUNTA Nº 120.- ¿Qué principios informan las relaciones entre las Administraciones Públicas, según se  recoge en la Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público?
a)  Las Administraciones Públicas se relacionan de acuerdo con el principio de lealtad  institucional.
b)  Las Administraciones Públicas se relacionan de acuerdo con el principio de legalidad.
c)  Las Administraciones Públicas se relacionan de acuerdo con los principios de legalidad,  jerarquía y lealtad constitucional.
d)  Las Administraciones Públicas se relacionan de acuerdo con el principio de jerarquía.

PREGUNTA Nº 121.- En relación con los símbolos de la Comunidad Autónoma de Andalucía, se dispone en su  Estatuto lo siguiente:
a)  Andalucía tiene escudo propio, aprobado por ley de su Parlamento, de acuerdo con el  acuerdo de la Junta Liberalista de 1933.
b)  Andalucía tiene himno propio, aprobado por ley de su Parlamento, de acuerdo con lo  publicado por la Junta Liberalista de Andalucía en 1933.
c)  La bandera de Andalucía es la histórica, formada por tres franjas horizontales- verde, blanca  y verde- siendo la blanca de doble  anchura que las verdes, tal como fue aprobada en la  Asamblea de Ronda de 1938.
d)  La protección jurídica que corresponde a los símbolos de Andalucía debe ser las mismas  que corresponda a los símbolos del Estado.

PREGUNTA Nº 122.- No es una competencia asumible por las Comunidades Autónomas, tal y como se recoge  en la Constitución Española:
a)  Educación.
b)  Seguridad privada.
c)  Promoción y ordenación del turismo.
d)  Sanidad Exterior.

PREGUNTA Nº 123.- La mayoría necesaria para aprobar la reforma de un Estatuto de Autonomía en el Senado,  según se recoge en el Título VIII de la Constitución es:
a)  Simple.
b)  Dos tercios.
c)  Tres quintos.
d)  Absoluta.  

PREGUNTA Nº 124.- En relación con los Convenios entre Comunidades Autónomas, dispone la Constitución de  1978:
a)  Según el artículo 145.1, están totalmente prohibidos.
b)  Según el artículo 145. 2, se permiten para la gestión y prestación de servicios propios de las  mismas.
c)  Conforme al artículo 145.1 se permiten, cualquiera que sea su finalidad, sin perjuicio de las  autorizaciones que deba otorgar el Gobierno de la Nación.
d)  Según el artículo 145.2 sólo se permiten para fines culturales y sociales.

PREGUNTA Nº 125.- Según el artículo 148 de la Constitución Española, las Comunidades Autónomas podrán  asumir competencias en las siguientes materias:
a)  Nacionalidad, Inmigración, emigración, extranjería y derecho de asilo.
b)  Pesca marítima, marina mercante y abanderamiento de buques.
c)  Ordenación del territorio, urbanismo y vivienda.
d)  Defensa del patrimonio cultural, artístico y monumental.

PREGUNTA Nº 126.- El Estatuto de Autonomía de Andalucía:
a)  Se publicó en el BOE de 11 de enero de 1982 como Ley Orgánica 6/1981, de 30 de  diciembre, y la Ley Orgánica 2/2009, de 19 de marzo, reforma el mencionado Estatuto de  Autonomía para Andalucía.
b)  Se publicó en el BOE de 11 de enero de 1982 como Ley Orgánica 6/1981, de 30 de  diciembre, y la Ley Orgánica 2/2007, de 19 de marzo, reforma el mencionado Estatuto de  Autonomía para Andalucía.
c)  Se publicó en el BOE de 30 de diciembre de 1982 como Ley Orgánica 6/1981, de 30 de  diciembre, y la Ley Orgánica 2/2009, de 19 de marzo, reforma el mencionado Estatuto de  Autonomía para Andalucía.
d)  Se publicó en el BOE de 11 de enero de 1986 como Ley Orgánica 16/1986, de 30 de enero, y  la Ley Orgánica 2/2012, de 19 de marzo, reforma el mencionado Estatuto de Autonomía  para Andalucía.

PREGUNTA Nº 127.- El Artículo 151. 1 de la Constitución Española de 1978 establece un procedimiento para  acceder a la autonomía plena que exige, entre otras cosas, que:
a)  La iniciativa autonómica sea ratificada mediante referéndum por el voto afirmativo de la  mayoría de los electores de cada provincia.
b)  La iniciativa autonómica sea ratificada mediante referéndum por el voto afirmativo de la  mayoría absoluta de los electores de cada provincia.
c)  La iniciativa autonómica sea ratificada mediante referéndum por el voto afirmativo de la  mayoría absoluta de los votos emitidos en cada provincia.
d)  La iniciativa autonómica sea ratificada mediante referéndum por el voto afirmativo de una  mayoría de dos tercios de los electores de cada provincia.    

PREGUNTA Nº 128.- Según el artículo 10 de la Ley Orgánica 2/2007, de 19 de marzo, de reforma del Estatuto de  Autonomía para Andalucía,  no es un objetivo básico de la Comunidad Autónoma de  Andalucía:
a)  La defensa, promoción, estudio y prestigio de la modalidad lingüística andaluza en todas  sus variedades.
b)  La incorporación del pueblo andaluz a la sociedad del conocimiento.
c)  La especial atención a las personas en situación de dependencia.
d)  La integración laboral, económica, social y cultural de los inmigrantes.

PREGUNTA Nº 129.- Es un principio rector de acuerdo con el artículo 37 de la Ley Orgánica 2/2007, de 19 de  marzo, de reforma del Estatuto de Autonomía para Andalucía:
a)  El empleo de calidad, la prevención de los riesgos laborales y la promoción en el trabajo.
b)  El fomento de la cultura de la paz y el diálogo entre los pueblos.
c)  La especial atención a las personas en situación de dependencia.
d)  El acceso de todos los andaluces a una educación permanente y de calidad que les permita  su realización personal y social.

PREGUNTA Nº 130.- ¿Cómo es la estructura territorial de la Comunidad Autónoma de Andalucía, según el  artículo 89 de  la Ley Orgánica 2/2007, de 19 de marzo, de reforma del Estatuto de  Autonomía para Andalucía?
a)  Andalucía se organiza territorialmente en municipios, provincias y demás entidades  territoriales que puedan crearse por reglamento del Parlamento.
b)  Andalucía se organiza territorialmente en municipios, provincias y demás entidades que  puedan crearse por ley orgánica.
c)  Andalucía se organiza territorialmente en municipios, provincias y demás entidades  territoriales que puedan crearse por ley.
d)  Andalucía se organiza territorialmente en municipios, provincias, mancomunidades,  comarcas, áreas metropolitanas y demás entidades interterritoriales que puedan crearse  por ley.

PREGUNTA Nº 131.- La organización institucional de las Comunidades Autónomas que accedan por la vía del  artículo 151.1 de la Constitución Española de 1978 estará comprendida por:
a)  Asamblea Legislativa, Junta, Consejo, Presidente y Tribunal Superior de Justicia.
b)  Asamblea Legislativa, Consejo de Gobierno, Presidente y vicepresidente.
c)  Asamblea Legislativa, Consejo de Gobierno, Presidente y Tribunal Superior de Justicia.
d)  Asamblea constituyente, Consejo de Gobierno, Presidente y Tribunal de Justicia.

PREGUNTA Nº 132.- En principio, las competencias asumidas por las Comunidades Autónomas al amparo de lo  establecido en el art.148.1 de la Constitución, podrán ampliarse sucesivamente, dentro del  marco establecido en el mismo texto constitucional, transcurridos:
a)  Dos años.
b)  Cuatro años.
c)  Cinco años.
d)  Tres años.    

PREGUNTA Nº 133.- ¿Qué tipo de norma aprueba un Estatuto de Autonomía?
a)  Una Ley orgánica.
b)  Una ley ordinaria.
c)  Un Real Decreto.
d)  Un Decreto ley.

PREGUNTA Nº 134.- Dispone el artículo 141 de la Constitución Española que:
a)  La provincia es una entidad local con personalidad jurídica plena, en los términos que se  establezcan mediante ley orgánica.
b)  La provincia es una entidad local con personalidad jurídica propia, conforme a lo dispuesto  en los correspondientes Estatutos de Autonomía.
c)  La provincia es una entidad local con personalidad jurídica propia, determinada por la  agrupación de municipios.
d)  La provincia goza de personalidad jurídica propia y de plena autonomía en el ámbito de sus  intereses.

PREGUNTA Nº 135.- Según se regula en el art. 1.3 de la Ley Orgánica 2/2007, de 19 de marzo, de reforma del  Estatuto de Autonomía para Andalucía, los poderes de la Comunidad Autónoma de  Andalucía:
a)  Emanan de la Constitución y del pueblo andaluz, en los términos del presente Estatuto de  Autonomía, que es su norma institucional básica.
b)  Emanan de la Constitución, en los términos del presente Estatuto de Autonomía, que es su  norma institucional básica.
c)  Emanan del presente Estatuto de Autonomía, que es su norma institucional básica.
d)  Emanan de la Constitución y   de su Estatuto de Autonomía.

PREGUNTA Nº 136.- Según dispone el artículo 1.2  de la Ley Orgánica 2/2007, de 19 de marzo, de reforma del  Estatuto de Autonomía para Andalucía:
a)  Son valores superiores la libertad, la justicia, la igualdad y el pluralismo político para los  vecinos, en un marco de igualdad y solidaridad con las demás Comunidades Autónomas de  España.
b)  Son valores superiores la libertad, la igualdad y el pluralismo político para todos los  andaluces, en un marco de igualdad y solidaridad con las demás Comunidades Autónomas  de España.
c)  Son valores superiores la libertad, la justicia, la igualdad y el pluralismo político para todos  los andaluces, en un marco de igualdad y solidaridad con las demás Comunidades  Autónomas de España.
d)  Son valores superiores  la justicia, la igualdad y el pluralismo político para todos los  andaluces, en un marco de igualdad y solidaridad con las demás Comunidades Autónomas  del territorio español.

PREGUNTA Nº 137.- Los Estatutos de Autonomía podrán establecer circunscripciones territoriales propias:
a)  Mediante la agrupación de municipios aunque no sean limítrofes.
b)  Sin personalidad jurídica propia.
c)  Mediante la agrupación de municipios limítrofes.
d)  En ningún caso.        

PREGUNTA Nº 138.- Entre los principios de actuación de las Administraciones Públicas mencionados en el  artículo 103 de la Constitución Española de 1978, se encuentra el de:
a)  Autonomía
b)  Igualdad de trato.
c)  Coordinación.
d)  Indemnización.

PREGUNTA Nº 139.- Según la Constitución Española de 1978, los Decretos Legislativos pueden:
a)  Refundir textos legales.
b)  Regular el desarrollo directo de los derechos fundamentales y libertades públicas.
c)  Fijar directrices a desarrollar por el gobierno en un texto refundido.
d)  Delegar en el gobierno cualesquiera materias.

PREGUNTA Nº 140.- Las disposiciones aprobadas por el/la Presidente/a del Gobierno de la Nación,  revisten la  forma de:
a)  Orden del Presidente/a del Gobierno.
b)  Decreto del Presidente/a del Gobierno.
c)  Real Decreto del Presidente/a del Gobierno.
d)  Acuerdo del Presidente/a del Gobierno.

PREGUNTA Nº 141.- Cuando una disposición ministerial afecte a varios departamentos ministeriales, revestirá  la forma de:
a)  Real Decreto.
b)  Decreto.
c)  Orden del Ministro de la Presidencia
d)  Real Decreto de la Presidencia del Gobierno.

PREGUNTA Nº 142.- ¿Qué dispone el artículo 103 de la Constitución Española de 1978?
a)  La Administración Pública sirve con objetividad los intereses generales y particulares.
b)  Una ley Orgánica regulará el estatuto de los funcionarios públicos.
c)  Los órganos de la Administración del Estado son creados, regidos y coordinados de acuerdo  con la Constitución y la ley.
d)  La Administración Pública sirve con objetividad los intereses generales y actúa de acuerdo  con los principios de eficacia, jerarquía, descentralización, desconcentración y  coordinación, con sometimiento pleno a la ley y al Derecho.    

PREGUNTA Nº 143.- Según el artículo 106.1 de la Constitución Española, ¿cuál de las siguientes respuestas es  correcta?
a)  Los Juzgados controlan la potestad reglamentaria y la legalidad de la actuación  administrativa, así como el sometimiento de ésta al principio de jerarquía normativa que la  justifican.
b)  Los Tribunales controlan la potestad reglamentaria y administrativa, así como el  sometimiento de la Administración a los fines públicos que la justifican.
c)  Los Juzgados controlan la potestad reglamentaria, de autoorganización y administrativa, así  como el sometimiento de la Administración a los fines públicos que la justifican.
d)  Los Tribunales controlan la potestad reglamentaria y la legalidad de la actuación  administrativa, así como el sometimiento de ésta a los fines que la justifican.

PREGUNTA Nº 144.- ¿En qué artículo de nuestra Constitución, quedan sujetos los poderes públicos "a la  Constitución y al resto del Ordenamiento jurídico"?
a)  En el artículo 9.1.
b)  En el artículo 103.1.
c)  En el artículo 97.
d)  En el artículo 98.

PREGUNTA Nº 145.- Señale la opción correcta respecto al artículo 103 de la Constitución Española de 1978, que  establece los principios que deben regir las actuaciones de las Administraciones Públicas:
a)  Eficacia, descentralización, desconcentración y coordinación, con sometimiento pleno al  Derecho.
b)  Eficacia, transparencia, descentralización y coordinación, con sometimiento pleno a la ley y  al Derecho.
c)  Eficacia, descentralización, desconcentración y coordinación, con sometimiento pleno a la  ley y al Derecho.
d)  Eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento  pleno a la ley y al Derecho.

PREGUNTA Nº 146.- ¿Cuándo serán de aplicación en España las normas jurídicas contenidas en los Tratados  Internacionales?
a)  Tras su ratificación por acuerdo del Consejo de Ministros.
b)  Tras la ratificación por el Estado Español.
c)  Tras su íntegra publicación en el Boletín Oficial del Estado.
d)  Tras su ratificación por las Cortes Generales.

PREGUNTA Nº 147.- ¿Qué implica el principio de reserva de ley?
a)  Que la ley se sitúa en la posición más alta en la pirámide normativa.
b)  Que determinadas materias no pueden ser reguladas a través de reglamentos.
c)  Que las leyes autonómicas, al no ser elaboradas por el Parlamento Español, no son  directamente aplicables.
d)  Que las leyes ordinarias y orgánicas son las únicas normas jurídicas con rango legal.    

PREGUNTA Nº 148.- El segundo periodo ordinario de sesiones es según establece el artículo 73 de la  Constitución Española:
a)  De agosto a diciembre.
b)  De enero a junio.
c)  De febrero a junio.
d)  De septiembre a diciembre.

PREGUNTA Nº 149.- ¿Cuál de las siguientes materias no puede ser regulada por una Ley Orgánica, según el art.  81 de la Constitución Española de 1978?
a)  La creación de las policías dependientes de las Comunidades Autónomas.
b)  Los términos del referéndum.
c)  Las bases de la organización militar.
d)  La Ley de presupuestos.

PREGUNTA Nº 150.- De Conformidad con el artículo 2 del Código Civil, ¿cuándo entrarán las leyes en vigor?
a)  A los 20 días de su completa publicación en el Boletín Oficial del Estado, si en ellas no se  dispone otra cosa.
b)  A los 15 días naturales de su completa publicación en el Boletín Oficial del Estado, si en  ellas no se dispone otra cosa.
c)  A los 20 días hábiles de su completa publicación en el diario Oficial correspondiente.
d)  A los 15 días hábiles de su completa publicación en el diario Oficial correspondiente.

PREGUNTA Nº 151.- Según el artículo 129 de la Ley 39/2015, de 1 de Octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, entre los principios de buena  regulación, se encuentra:
a)  Coordinación.
b)  Lealtad institucional.
c)  Eficacia.
d)  Publicidad.

PREGUNTA Nº 152.- Según el art. 127 de la Ley 39/2015, de 1 de octubre, los respectivos órganos de gobierno  de las Comunidades Autónomas, en relación con la iniciativa legislativa y potestad para  dictar normas con rango de ley podrán:
a)  Aprobar reales decretos- leyes y reales decretos legislativos, de conformidad con lo  establecido en la Constitución.
b)  Aprobar reales decretos- leyes y reales decretos legislativos, de conformidad con lo  establecido en la Constitución y en sus respectivos Estatutos de Autonomía.
c)  Aprobar normas equivalentes a reales decretos- leyes y reales decretos legislativos en su  ámbito territorial, de conformidad con lo establecido en la Constitución y en sus  respectivos Estatutos de Autonomía.
d)  Sólo el Gobierno de España  tiene potestad para dictar decretos leyes y decretos  legislativos.    

PREGUNTA Nº 153.- Las leyes de bases según dispone el artículo 82 de la Constitución Española:
a)  Delimitarán con precisión el objeto y el alcance de las leyes orgánicas
b)  Delimitarán con precisión el objeto y alcance de la delegación legislativa y los principios y  criterios que ha de seguirse en su ejercicio.
c)  Delimitarán con precisión los principios y criterios que han de seguirse en el ejercicio de la  delegación legislativa.
d)  Delimitarán con precisión el objeto y alcance de las leyes orgánicas.

PREGUNTA Nº 154.- En referencia a los Estados de alarma, excepción y de sitio:
a)  Se encuentran regulados en el artículo 116 de la Constitución Española y en la Ley Orgánica  4/1981, de 1 de junio, de Estados de Alarma, Excepción y Sitio.
b)  La declaración de alguno de estos estados podrán modificar el principio de responsabilidad  del Gobierno y de sus agentes reconocidos en la constitución y en las leyes.
c)  El estado de alarma será declarado por un plazo mínimo de quince días, y necesitará  autorización del Congreso de los diputados para ser prorrogado.
d)  El Estado de alarma será declarado por un plazo máximo de quince días, y necesitará  autorización del Congreso y del Senado para ser prorrogado.

PREGUNTA Nº 155.- Una vez aprobado un proyecto de ley ordinaria u orgánica por el Congreso de los  Diputados, su presidente dará inmediata cuenta del mismo al Presidente del Senado, el cual  lo someterá a la deliberación de éste. Si el Senado se opone con un veto, el Congreso ha de  ratificar por mayoría simple: (artículo 90 de la Constitución Española)  
a)  El texto inicial, si no han transcurrido dos meses desde la interposición del veto.
b)  El veto, si no han transcurrido dos meses desde la interposición del mismo.
c)  El veto, si han transcurrido dos meses desde la interposición del mismo.
d)  El texto inicial, si han transcurrido dos meses desde la interposición del veto.

PREGUNTA Nº 156.- ¿Quién tiene la potestad para declarar si existen o no estipulaciones contrarias a la  Constitución Española de 1978 contenidas en un tratado internacional?
a)  De acuerdo con el artículo 96.1 de la Constitución Española, el Gobierno.
b)  De acuerdo con el artículo 95.1 de la Constitución Española, cualquiera de las cámaras.
c)  Según el artículo 95.2 el Gobierno o cualquiera  de las Cámaras puede requerir al Tribunal  Constitucional para que declare si existe o no esa contradicción.
d)  Según el artículo 95.1 el Gobierno o cualquiera  de las cámaras puede requerir al Tribunal  Constitucional para que declare si existe o no esa contradicción.

PREGUNTA Nº 157.- ¿Qué trámites son necesarios para convocar un referéndum según el artículo 92 de la  Constitución Española de 1978?
a)  Será convocado por el Rey, mediante propuesta del Presidente del Gobierno, previamente  autorizada por el Congreso de los Diputados.
b)  Será convocado por el Rey, mediante propuesta del Presidente del Gobierno, previamente  autorizada por el Congreso de los Diputados y el Senado.
c)  Será convocado   por el Presidente del Gobierno, previamente autorizado por el Congreso  de los Diputados.
d)  Será convocado  por el Presidente del Gobierno, previamente autorizado por ambas  Cámaras.    

PREGUNTA Nº 158.- Respecto a la sanción de las leyes, el artículo 91 de la Constitución Española de 1978,  establece:
a)  El Rey sancionará en el plazo de 20 días las leyes aprobadas por las Cortes Generales, y las  promulgará y ordenará su inmediata publicación.
b)  El Rey sancionará en el plazo de 15 días hábiles las leyes aprobadas por el Senado, y las  promulgará y ordenará su inmediata publicación.
c)  El Rey sancionará en el plazo de 15 días las leyes aprobadas por las Cortes Generales, y las  promulgará y ordenará su inmediata publicación.
d)  El Rey sancionará en el plazo de 15 días las leyes aprobadas por el Congreso de los  Diputados, y las promulgará y ordenará su inmediata publicación.

PREGUNTA Nº 159.- En relación con la iniciativa legislativa regulada en el artículo 87 de la Constitución  Española de 1978, se dispone lo siguiente:
a)  La iniciativa legislativa corresponde únicamente  al Gobierno, al Congreso y al Senado.
b)  La iniciativa legislativa corresponde al Consejo de Gobierno de las Comunidades  Autónomas, de acuerdo con la Constitución.
c)  A la iniciativa popular para la presentación de proposiciones de ley se le exigirán no menos  de 500.000 firmas acreditadas.
d)  Sólo en el caso de materias propias de ley orgánica, no procederá la iniciativa popular.

PREGUNTA Nº 160.- ¿Qué recoge la Constitución Española en el artículo 81 respecto de las leyes orgánicas?
a)  La aprobación y derogación de las leyes orgánicas exigirá la mayoría simple del Congreso de  los Diputados.
b)  Son leyes orgánicas las relativas al desarrollo de los derechos fundamentales y de las  libertades públicas, las que aprueben los Estatutos de Autonomía y el régimen electoral  general y las demás previstas en la Constitución.
c)  La modificación de las leyes orgánicas requieren mayoría absoluta de ambas Cámaras.
d)  La aprobación, modificación o derogación de las leyes orgánicas exigirá mayoría simple del  Congreso, en una votación final sobre el conjunto del proyecto.

PREGUNTA Nº 161.- Dispone el artículo 82 de la Constitución Española de 1978 respecto de la delegación  legislativa lo siguiente:
a)  El Congreso podrá delegar en el Gobierno la potestad de dictar normas con rango de ley  sobre materias reservadas a leyes orgánicas.
b)  La delegación legislativa deberá otorgarse mediante ley orgánica, únicamente cuando su  objeto sea la formación de textos articulados.
c)  La delegación legislativa habrá de otorgarse al Gobierno de forma expresa para materia  concreta y sin fijación del plazo para su ejercicio.
d)  La delegación legislativa habrá de otorgarse al Gobierno de forma expresa para materia  concreta y con fijación del plazo para su ejercicio.    

PREGUNTA Nº 162.- La ley de Bases, según el art. 82 de la Constitución Española de 1978:
a)  Las leyes de bases delimitarán con precisión el objeto y alcance de la delegación legislativa  y los principios y criterios que han de seguirse en su ejercicio.
b)  Las leyes de delegación, sin perjuicio de la competencia del Tribunal Constitucional podrán  establecer sus propias fórmulas de control.
c)  La delegación legislativa podrá entenderse concedida de modo implícito o por tiempo  indeterminado.
d)  La delegación legislativa podrá permitir la subdelegación a autoridades distintas del propio  Gobierno.

PREGUNTA Nº 163.- ¿Qué se recoge en el artículo 81 de la Constitución Española de 1978 respecto a las leyes  de base?
a)  La delegación se podrá prorrogar una vez se agote el uso que de ella se haga por parte del  Gobierno, mediante la publicación de la norma correspondiente.
b)  La delegación legislativa no podrá entenderse concedida de modo implícito o por tiempo  indeterminado. Tampoco podrá permitir la subdelegación a autoridades distintas del propio  Gobierno.
c)  La autorización para refundir textos legales determinará el ámbito normativo a que se  refiere el contenido de la delegación, especificando si se refiere a la aclaración de textos  legales o la creación de un texto único.
d)  Tendrá el Gobierno sus propias fórmulas de control respecto de la delegación.

PREGUNTA Nº 164.- Según dispone el artículo 83 de la Constitución Española de 1978:
a)  Las leyes de bases podrán en determinados casos, facultar para dictar normas con carácter  retroactivo.
b)  Las leyes de bases podrán modificar otras leyes de bases.
c)  No podrán en ningún caso las leyes de bases, autorizar la modificación de la propia ley de  bases.
d)  No podrán las leyes de bases, salvo determinadas excepciones, facultar para dictar normas  con carácter retroactivo.

PREGUNTA Nº 165.- ¿Cómo se denominan según el artículo 85 de la Constitución Española de 1978, las  disposiciones del Gobierno que contengan legislación delegada?
a)  Decretos Legislativos.
b)  Decretos Leyes.
c)  Decretos.
d)  Reales Decretos.

PREGUNTA Nº 166.- En relación a la regulación de los Decretos-leyes recogidos en el art. 86 de la Constitución  Española de 1978, ¿cuál es la respuesta correcta?
a)  En caso de necesidad, el Gobierno podrá dictar disposiciones legislativas que tomarán la  forma de Reales Decretos-leyes.
b)  En caso de extraordinaria y urgente necesidad, las Cámaras podrán dictar disposiciones  legislativas provisionales que tomarán la forma de Decretos - Leyes.
c)  En caso de extraordinaria y urgente necesidad, el Gobierno podrá dictar disposiciones  legislativas provisionales que tomarán la forma de Decretos-leyes.
d)  En caso de extraordinaria y urgente necesidad, el Gobierno podrá dictar disposiciones  legislativas excepcionales que tomarán la forma de Decretos-leyes.  

PREGUNTA Nº 167.- Según el artículo 127 de la Ley 39/2015, de 1 de Octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, el Gobierno de la Nación ejercerá la  iniciativa legislativa prevista en la Constitución Española mediante la elaboración y  aprobación:
a)  De las proposiciones de Ley y su remisión al Congreso.
b)  De las proposiciones de ley y su remisión a las Cortes Generales.
c)  De los anteproyectos de Ley.
d)  De los anteproyectos de Ley y la ulterior remisión de los proyectos de ley a las Cortes  Generales.

PREGUNTA Nº 168.- Según dispone el art. 127 de la Ley 39/2015, de 1 de Octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, el Gobierno de la Nación ejercerá la  iniciativa legislativa prevista en la Constitución mediante la elaboración de los anteproyectos  de Ley y la ulterior remisión de los proyectos de ley:
a)  Al Congreso de los Diputados.
b)  Al Senado.
c)  A las Cortes Generales.
d)  Al Rey.

PREGUNTA Nº 169.- ¿Quién podrá aprobar reales decretos- leyes y reales decretos legislativos en los términos  previstos en la Constitución Española, según el artículo 127 de la Ley 39/2015, de 1 de  Octubre, del Procedimiento Administrativo Común de las Administraciones Públicas?
a)  Las Comunidades Autónomas.
b)  El Congreso de los diputados.
c)  Las Cortes Generales.
d)  El Gobierno de la Nación.

PREGUNTA Nº 170.- ¿Qué materias no pueden ser afectadas por los Decretos- leyes según el art. 86 de la  Constitución Española de 1978?
a)  Las instituciones básicas del Estado, los derechos, deberes y libertades de los ciudadanos  regulados en el Título I, el régimen de las Comunidades Autónomas ni el Derecho electoral  general.
b)  Las materias relativas a los derechos fundamentales, salvo situaciones de declaración de  alguno de los Estados de Alarma.
c)  Las relativas al desarrollo de los derechos fundamentales y de las libertades públicas, las  que aprueben los Estatutos de autonomía y el régimen electoral general y las demás  previstas en la Constitución.
d)  Las instituciones básicas del Estado, los derechos, deberes y libertades de los ciudadanos  regulados en el Título I, el contenido del Título II, el régimen de las Comunidades  Autónomas ni el Derecho electoral general.    

PREGUNTA Nº 171.- Conforme al artículo 128.1 de la Ley 39/2015, de 1 de Octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, el ejercicio de la potestad  reglamentaria corresponde:
a)  Principalmente, al Gobierno de la Nación.
b)  A los órganos de Gobierno de las Comunidades Autónomas, de conformidad con lo  establecido en la Constitución.
c)  A los órganos de gobierno locales, de acuerdo con lo previsto en sus propias normas.
d)  Al Gobierno de la Nación, a los órganos de Gobierno de las Comunidades Autónomas, de  conformidad con lo establecido en sus respectivos Estatutos, y a los órganos de gobierno  locales, de acuerdo con lo previsto en la Constitución, los Estatutos de Autonomía y la Ley  7/1985, de 2 de abril, reguladora de las Bases del Régimen Local.

PREGUNTA Nº 172.- Es correcto, respecto a lo regulado en el artículo 86 de la Constitución Española que:
a)  Durante el plazo de 20 días, las Cortes podrán tramitar los Decretos-leyes como proyectos  de ley por el procedimiento de urgencia.
b)  Durante el plazo de los 30 días siguientes a su promulgación, las Cortes podrán tramitar los  Decretos-leyes como proyectos de ley por el procedimiento de urgencia.
c)  Los Decretos-leyes deberán ser inmediatamente sometidos a debate y votación, al menos  de la mitad del Congreso de los Diputados, convocado al efecto si no estuviere reunido.
d)  El Congreso habrá de pronunciarse dentro del plazo de los 30 días siguientes a su  promulgación sobre su convalidación o derogación. En caso contrario, se entiendo  tácitamente derogado.

PREGUNTA Nº 173.- Los reglamentos y disposiciones administrativas, según el artículo 128.2 de la Ley 39/2015:
a)  No podrán vulnerar otras disposiciones.
b)  No podrán vulnerar las leyes de carácter estatal.
c)  No podrán regular aquellas materias que la Constitución les prohíba expresamente.
d)  No podrán vulnerar la Constitución o las leyes ni regular aquellas materias que la  Constitución o los Estatutos de Autonomía reconocen de la competencia de las Cortes  Generales o de las Asambleas Legislativas de las Comunidades Autónomas.

PREGUNTA Nº 174.- ¿Qué implican los principios de necesidad y eficacia según el artículo 129 de la Ley  39/2015, de 1 de Octubre, del Procedimiento Administrativo Común de las Administraciones  Públicas?
a)  La iniciativa normativa debe estar justificada por una razón de interés general, basarse en  una identificación clara de los fines perseguidos y ser el instrumento más adecuado para  garantizar su consecución.
b)  La iniciativa que se proponga deberá contener la regulación imprescindible para atender la  necesidad a cubrir con la norma.
c)  La iniciativa normativa se ejercerá de manera coherente con el resto del ordenamiento  jurídico, nacional y de la Unión Europea.
d)  Las Administraciones Públicas posibilitarán el acceso sencillo, universal y actualizado a la  normativa en vigor.    

PREGUNTA Nº 175.- Según el artículo 128.2 de la Ley 39/2015, de 1 de Octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, establece en relación a los  reglamentos y disposiciones administrativas lo siguiente:
a)  Podrán establecer sanciones que no impliquen penas.
b)  No podrán tener función de desarrollo o colaboración con respecto a la ley.
c)  No podrán tipificar delitos, faltas o infracciones administrativas.
d)  Podrán crear tributos específicos sobre materias que regulen.

PREGUNTA Nº 176.- ¿Cuáles son los principios de buena regulación del artículo 129 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas?
a)  Proporcionalidad, eficacia, seguridad jurídica, no indefensión, transparencia y jerarquía.
b)  Proporcionalidad, seguridad administrativa, eficacia, eficiencia y servicio público.
c)  Necesidad, eficacia, proporcionalidad, seguridad jurídica, transparencia y eficiencia.
d)  Jerarquía, eficiencia, seguridad jurídica y administrativa, transparencia y servicio público.

PREGUNTA Nº 177.- ¿Dónde debe quedar suficientemente justificada la adecuación a los principios recogidos  en el artículo 129 de la Ley 39/2015 de anteproyectos de ley o de proyectos de reglamento?
a)  En la exposición de motivos en ambos casos.
b)  En el preámbulo en ambos casos.
c)  En la exposición de motivos o en el preámbulo según se trate de proyectos de ley o de  reglamento, respectivamente.
d)  En la introducción justificativa.

PREGUNTA Nº 178.- ¿Qué significa el principio de eficiencia regulado en el artículo 129 de la Ley 39/ 2015?
a)  La iniciativa normativa debe evitar cargas administrativas innecesarias o accesorias y  racionalizar, en su aplicación, la gestión de los recursos públicos.
b)  La iniciativa normativa se ejercerá de manera coherente con el resto del ordenamiento  jurídico.
c)  La iniciativa que se proponga deberá contener la regulación imprescindible para atender la  necesidad a cubrir con la norma.
d)  La iniciativa legislativa debe estar justificada por una razón de interés general.

PREGUNTA Nº 179.- De acuerdo con el artículo 131 de la Ley 39/2015, habrán de publicarse en el diario oficial  correspondiente para que entren en vigor y produzcan efectos jurídicos:
a)  Cualquier tipo de norma.
b)  Sólo las normas con rango de ley.
c)  Únicamente los reglamentos y disposiciones administrativas.
d)  Las normas con rango de ley, los reglamentos y disposiciones administrativas.

PREGUNTA Nº 180.- ¿Con qué frecuencia las Administraciones Públicas harán público un Plan Normativo que  contendrá las iniciativas legales o reglamentarias, tal y como se establece en el art. 132 de la  Ley 39/2015 de 1 de octubre del Procedimiento Administrativo Común de las  Administraciones Públicas?
a)  Semestralmente.
b)  Cada dos años.
c)  Trimestralmente.
d)  Anualmente.    

PREGUNTA Nº 181.- Según el artículo 130 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, el resultado de la evaluación normativa se plasmará  en un informe:
a)  Que se hará público, con el detalle, periodicidad y por el órgano que determine la  normativa reguladora de la Administración correspondiente.
b)  Que se hará público, con el detalle y periodicidad que determine el órgano de la  Administración correspondiente.
c)  Que no se hará público, con el detalle, periodicidad y por el órgano que determine la  normativa reguladora de la Administración correspondiente.
d)  Que no se hará público, con el detalle y periodicidad que determine el órgano de la  Administración correspondiente.

PREGUNTA Nº 182.- Una vez aprobado, el Plan Anual Normativo regulado en el artículo 132 de la Ley 39/2015,  se publicará en:
a)  La sede electrónica del Organismo competente.
b)  El Portal de la Transparencia de la Administración Pública correspondiente.
c)  El Boletín Oficial del Estado.
d)  El Diario oficial correspondiente.

PREGUNTA Nº 183.- Según dispone la Ley 39/2015,de 1 de octubre, del Procedimiento Administrativo Común  de las Administraciones Públicas, ¿cuándo se sustanciará una consulta pública, a través del  portal web de la Administración competente en la que se recabará la opinión de los sujetos y  de las organizaciones más representativas potencialmente afectados por la futura norma  acerca de los problemas que se pretenden solucionar con la iniciativa, la necesidad y  oportunidad de su aprobación, los objetivos de la norma y las posibles soluciones  alternativas regulatorias y no regulatorias?:
a)  Con carácter previo a la elaboración del proyecto o anteproyecto de ley o de reglamento.
b)  Con carácter posterior a la elaboración del proyecto o anteproyecto de ley.
c)  Con carácter previo a la elaboración del proyecto o anteproyecto de ley.
d)  Con carácter posterior a la elaboración del proyecto o anteproyecto de ley o de  reglamento.

PREGUNTA Nº 184.- ¿En qué casos podrá prescindirse de los trámites de consulta, audiencia e información  públicas previstos en el artículo 133 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas?
a)  Cuando concurran razones graves de interés general que lo justifiquen.
b)  Sólo en el caso de normas presupuestarias u organizativas de la Administración General del  Estado.
c)  En el caso de normas presupuestarias u organizativas de la Administración General del  Estado y de la Administración local, únicamente.
d)  Cuando concurran razones graves de interés público que lo justifiquen.

PREGUNTA Nº 185.- Los principios generales del Derecho:
a)  Se mencionan en el art. 1º del Código Civil como fuente del derecho.
b)  No son fuente del Derecho Administrativo.
c)  No pueden aplicarse por los Tribunales.
d)  Se enumeran en la Ley 39/2015, de 1 de Octubre, del Procedimiento Administrativo Común  de las Administraciones Públicas.  

PREGUNTA Nº 186.- El Título VI de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común  de las Administraciones Públicas, se denomina:
a)  De la revisión de los actos en vía administrativa.
b)  De la iniciativa legislativa y de la potestad para dictar reglamentos y otras disposiciones.
c)  De los actos administrativos.
d)  De las disposiciones sobre el procedimiento administrativo común.        

PREGUNTA Nº 187.- ¿Quiénes tienen capacidad de obrar ante las Administraciones Públicas según el art. 3 de la  Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas?
a)  Las personas físicas o jurídicas que ostenten capacidad de obrar con arreglo a las normas  civiles.
b)  Los menores de edad e incapacitados, estos últimos con la asistencia de persona que ejerza  la patria potestad, tutela o curatela.
c)  En todo caso, los grupos de afectados y los patrimonios independientes o autónomos.
d)  Las personas físicas o jurídicas que ostenten capacidad de obrar con arreglo a las normas  administrativas.

PREGUNTA Nº 188.- Los menores incapacitados, según establece el artículo 3 de la Ley 39/2015 de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Carecen de la condición de interesados en un procedimiento administrativo.
b)  Se equiparan a los menores capaces, en el ámbito del procedimiento administrativo.
c)  Carecen de capacidad de obrar ante las Administraciones Públicas cuando la extensión de la  incapacitación afecte al ejercicio y defensa de los derechos e intereses de que se trate.
d)  Tienen capacidad de obrar ante las Administraciones Públicas cuando la extensión de  incapacitación afecte al ejercicio y defensa de los derechos e intereses de que se trate.

PREGUNTA Nº 189.- Según se regula en el artículo 4 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las administraciones Públicas, quienes promuevan un  procedimiento como titulares de intereses legítimos:
a)  Tienen la obligación de intervenir en el procedimiento.
b)  Tienen la condición de interesados en el procedimiento.
c)  Tienen derecho a que se le reintegren los gastos que ello les origine.
d)  Pueden tener la condición de interesados en el procedimiento.

PREGUNTA Nº 190.- La representación en un procedimiento administrativo, según el artículo 5 de la Ley  39/2015 de 1 de octubre, del Procedimiento Administrativo Común de las administraciones  Públicas:
a)  Puede asumirse por cualquier persona que designe el interesado.
b)  Habrá de acreditarse siempre que la Administración lo requiera.
c)  Habrá de ostentarla un Gestor Administrativo en todo caso.
d)  Se presume para los actos de mero trámite.    

PREGUNTA Nº 191.- Las asociaciones y organizaciones representativas de intereses económicos y sociales,  según el artículo 4 de la Ley 39/2015 de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas:
a)  Serán titulares de intereses legítimos individuales y colectivos en los términos que  reglamentariamente se establezca.
b)  Serán titulares de intereses legítimos individuales y colectivos, en todo caso.
c)  No serán titulares de intereses legítimos colectivos.
d)  Serán titulares de intereses legítimos colectivos en los términos que la Ley reconozca.

PREGUNTA Nº 192.- Cuando la condición de interesado derivase de alguna relación jurídica transmisible el  derecho- habiente sucederá en tal condición, según dispone el artículo 4.3 de la Ley 39/2015  de 1 de octubre, del Procedimiento Administrativo Común de las administraciones Públicas:
a)  Cualquiera que sea el estado del procedimiento.
b)  Si el procedimiento no ha alcanzado el trámite de información pública.
c)  Si el procedimiento no ha alcanzado el trámite de audiencia.
d)  Si el procedimiento no ha alcanzado la fase de instrucción.

PREGUNTA Nº 193.- Según el artículo 5 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, se presumirá la representación para:
a)  Interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra  persona.
b)  Formular solicitudes.
c)  Los actos y gestiones de mero trámite.
d)  Presentar declaraciones responsables o comunicaciones.

PREGUNTA Nº 194.- Según se dispone en el artículo 5 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, la falta o insuficiente acreditación  de la representación no impedirá que se tenga por realizado el acto de que se trate, siempre  que se aporte aquélla o se subsane el defecto dentro del plazo de:
a)  20 días o de un plazo  superior cuando las circunstancias del caso así lo requieran.
b)  15 días o de un plazo superior cuando las circunstancias del caso así lo requieran.
c)  10 días o de un plazo superior cuando las circunstancias del caso así lo requieran.
d)  5 días o de un plazo superior cuando las circunstancias del caso así lo requieran.

PREGUNTA Nº 195.- ¿Quiénes dispondrán de un Registro electrónico de apoderamiento según dispone el  artículo 6 de la Ley 39/2015 de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas?
a)  La Administración General del Estado.
b)  Las Comunidades Autónomas y las Entidades Locales.
c)  Todas las Entidades que integran el Sector Público.
d)  La Administración  General del Estado, las Comunidades Autónomas y las Entidades  Locales.    

PREGUNTA Nº 196.- Respecto a la tramitación de urgencia regulada en el art. 33 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  No cabrá recurso alguno contra el acuerdo que declare la aplicación de la tramitación de  urgencia al procedimiento, sin perjuicio del procedente contra la resolución que ponga fin  al procedimiento.
b)  Cabrá recurso contra el acuerdo que declare la aplicación de la tramitación de urgencia al  procedimiento, así como contra la resolución que ponga fin al procedimiento.
c)  Sólo de oficio podrá acordarse la aplicación al procedimiento de la tramitación de urgencia.
d)  En la tramitación de urgencia se reducirán a la mitad todos los plazos establecidos para el  procedimiento ordinario.

PREGUNTA Nº 197.- Establece el artículo 30 de la  Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, que si el plazo es fijado en meses o  años, el plazo concluirá:
a)  El día siguiente en que se produjo la notificación, publicación o silencio administrativo en el  mes o el año de vencimiento.
b)  El mismo día en que se produjo la notificación, publicación o silencio administrativo en el  mes o el año de vencimiento.
c)  El día antes en que se produjo la notificación, publicación o silencio administrativo en el  mes o el año de vencimiento.
d)  El ultimo día del mes en que se produjo la notificación, publicación o silencio administrativo  en el mes o el año de vencimiento.

PREGUNTA Nº 198.- Respecto a la pluralidad de interesados, establece el artículo 7 de la Ley 39/2015 de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Cuando en una solicitud, escrito o comunicación figuren varios interesados, las actuaciones  se efectuarán con el representante en todo caso.
b)  Cuando en una solicitud, escrito o comunicación figuren varios interesados, las actuaciones  a que den lugar se efectuarán con el representante o interesado que expresamente hayan  señalado, y, en su defecto, con el que figure en primer término.
c)  Cuando en una solicitud, escrito o comunicación figuren varios interesados, cada uno de  ellos deberá actuar con el representante expresamente señalado al efecto.
d)  Cuando en una solicitud, escrito o comunicación figuren varios interesados, las actuaciones  a que den lugar se efectuarán con el representante o el interesado que hayan señalado,  indistintamente.

PREGUNTA Nº 199.- Según el artículo 53 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, los interesados en un procedimiento administrativo  tienen derecho a:
a)  No presentar en ningún caso documentos originales.
b)  Conocer el sentido del silencio administrativo que corresponda, en caso de que la  Administración no dicte ni notifique resolución expresa en plazo.
c)  Conocer, antes del trámite de audiencia, el estado de la tramitación de los procedimientos  en los que tengan la condición de interesados.
d)  Formular alegaciones, utilizar los medios de defensa admitidos por el ordenamiento  jurídico, y a aportar documentos en cualquier fase del procedimiento.    

PREGUNTA Nº 200.- ¿Quiénes no estarán obligados a relacionarse a través de medios electrónicos con las  Administraciones Públicas según dispone el artículo 14 de la Ley 39/2015, de 1 de octubre de  1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas?
a)  Quienes representen a un interesado que esté obligado a relacionarse electrónicamente  con la Administración.
b)  Los empleados de las Administraciones Públicas para los trámites y actuaciones que  realicen con ellas por razón de su condición de empleado público.
c)  Las personas jurídicas.
d)  Las entidades con personalidad jurídica.

PREGUNTA Nº 201.- Respecto de la obligación de resolver regulada en el artículo 21 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  En todos los procedimientos y supuestos, la Administración está obligada a dictar  resolución expresa y a notificarla.
b)  El plazo máximo en el que debe notificarse la resolución expresa será el fijado por la norma  reguladora del correspondiente procedimiento, el cual no podrá exceder de 3 meses.
c)  Cuando las normas reguladoras de los procedimientos no fijen el plazo máximo, éste será  de tres meses.
d)  En los procedimientos iniciados a solicitud del interesado, el plazo se contará desde la fecha  del acuerdo de iniciación.

PREGUNTA Nº 202.- El calendario de días inhábiles a efectos de cómputos de plazos, según dispone el art. 30 de  la Ley 39/2015 de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas:
a)  Deberá publicarse en el primer trimestre de cada año en el diario oficial que corresponda,  así como en otros medios de difusión que garanticen su conocimiento generalizado.
b)  Deberá publicarse en el primer mes de cada año en el diario oficial que corresponda.
c)  Deberá publicarse en el primer trimestre de cada año en el diario oficial que corresponda.
d)  Deberá publicarse antes del comienzo de cada año en el diario oficial que corresponda, así  como en otros medios de difusión que garanticen su conocimiento generalizado.

PREGUNTA Nº 203.- Según el artículo 28 de la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo  Común de las Administraciones Públicas, cuando se trate de informes preceptivos ya  elaborados por un órgano administrativo distinto al que tramita el procedimiento, éstos  deberán ser remitidos en el plazo de:
a)  10 días a contar desde su solicitud.
b)  15 días a contar desde su solicitud.
c)  20 días a contar desde su solicitud.
d)  30 días a contar desde su solicitud.

PREGUNTA Nº 204.- Según lo dispuesto en el art. 30 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando los plazos se señalen por  horas, se entiende que éstas son hábiles:
a)  Salvo que reglamentariamente se disponga otro cómputo.
b)  Salvo que en las normas que regulan el procedimiento se disponga otro cómputo.
c)  Salvo que por Ley o en el Derecho de la Unión Europea se disponga otro cómputo.
d)  Salvo que una norma con rango de ley o una norma con rango de ley de Derecho  internacional disponga otro cómputo.  

PREGUNTA Nº 205.- Según el artículo 30 de la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo  Común de las Administraciones Públicas:
a)  Son hábiles las horas comprendidas entre las 8 de la mañana y las 9 de la noche del día.
b)  Las horas comprendidas entre las 8 de la mañana y las 9 de la noche de un día hábil.
c)  Todas las horas del día que formen parte del día natural.
d)  Son hábiles todas las horas del día que formen parte de un día hábil.

PREGUNTA Nº 206.- Las Administraciones Públicas emitirán los documentos administrativos según dispone el  art. 36 de la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las  Administraciones Públicas:
a)  Por escrito, a través de medio no electrónicos, o verbalmente si así lo solicita el interesado.
b)  Por escrito, a través de medios electrónicos, a menos que su naturaleza exija otra forma  más adecuada de expresión y constancia.
c)  Por escrito, a través de medios no electrónicos, a menos que su naturaleza exija otra forma  más adecuada de expresión y constancia
d)  Por escrito, a través de medios electrónicos, o verbalmente si así lo solicita el interesado.

PREGUNTA Nº 207.- Dispone el art. 24 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, que el certificado acreditativo del silencio  producido se expedirá de oficio por el órgano competente para resolver:
a)  En el plazo de 30 días desde que expire el plazo máximo para resolver el procedimiento.
b)  En el plazo de 20 días desde que expire el plazo máximo para resolver el procedimiento.
c)  En el plazo de 10 días desde que expire el plazo máximo para resolver el procedimiento.
d)  En el plazo de 15 días desde que expire el plazo máximo para resolver el procedimiento.

PREGUNTA Nº 208.- ¿En qué casos se puede suspender el plazo máximo legal para resolver tal y como  establece el artículo 22 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas?
a)  Cuando deba obtenerse un pronunciamiento previo y no preceptivo de un órgano de la  Unión Europea.
b)  Cuando exista un procedimiento no finalizado en el ámbito de la Unión Europea que  condicione directamente el contenido de la resolución de que se trate.
c)  Cuando deban realizarse pruebas técnicas o análisis contradictorios o dirimentes  propuestos por los órganos competentes.
d)  Cuando para la resolución del procedimiento sea conveniente la obtención de un  preceptivo pronunciamiento por parte de un órgano jurisdiccional.

PREGUNTA Nº 209.- Contra el acuerdo que resuelva sobre la ampliación de plazos, que deberá ser notificado a  los interesados, según dispone el art. 23 de la Ley 39/2015, de 1 de octubre del  Procedimiento Administrativo Común de las Administraciones Públicas:
a)  No cabrá recurso alguno.
b)  Procederá el recurso de alzada.
c)  Procederá el recurso extraordinario de revisión.
d)  Procederá el recurso potestativo de reposición.    

PREGUNTA Nº 210.- Según el artículo 35.1 de la Ley   39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, ¿cuáles de los siguientes serán  motivados, con sucinta referencia de hechos y fundamentos de derecho?
a)  Los actos que amplíen derechos o intereses.
b)  Los actos que resuelvan procedimientos de revisión de oficio de disposiciones o actos  administrativos, recursos administrativos y procedimientos de arbitraje y los que declaren  la inadmisión.
c)  Los que continúen con el criterio seguido en actuaciones precedentes.
d)  Los actos que acepten pruebas propuestas por los interesados.

PREGUNTA Nº 211.- Según la Ley   39/2015, de 1 de octubre del Procedimiento Administrativo Común de las  Administraciones Públicas, el contenido de los actos se ajustará:
a)  A lo dispuesto por el Ordenamiento jurídico y será determinado y adecuado a los fines de  aquéllos.
b)  Exclusivamente a lo dispuesto por la presente ley y será determinado y adecuado a los fines  del ordenamiento jurídico.
c)  A lo dispuesto por el Ordenamiento jurídico y será determinado y adecuado a los fines de la  presente ley.
d)  Exclusivamente a lo dispuesto por la presente ley y será determinado y adecuado a los fines  de aquéllos.

PREGUNTA Nº 212.- Establece el artículo 40 de la  Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, que toda notificación deberá ser  cursada dentro del plazo de:
a)  5 días a partir de la fecha en que el acto haya sido dictado.
b)  10 días a partir de la fecha en que el acto haya sido dictado.
c)  15 días a partir de la fecha en que el acto haya sido dictado.
d)  20 días a partir de la fecha en que el acto haya sido dictado.

PREGUNTA Nº 213.- En relación a la forma de los actos administrativos, señala el artículo 36 de la Ley 39/2015,  de 1 de octubre del Procedimiento Administrativo Común de las Administraciones Públicas,  lo siguiente:
a)  Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de  expresión y constancia, se producirán por escrito a través de medios electrónicos.
b)  Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de  expresión y constancia, por escrito a través de medios no electrónicos.
c)  Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de  expresión y constancia, por escrito a través de medios electrónicos o no electrónicos.
d)  Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de  expresión y constancia, verbalmente.    

PREGUNTA Nº 214.- Excepcionalmente, dispone la  Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, podrá otorgarse eficacia retroactiva  a los actos:
a)  Cuando produzcan efectos favorables al interesado, siempre que los supuestos de hecho  necesarios no existieran en la fecha a que se retrotraiga la eficacia del acto.
b)  Cuando produzcan efectos desfavorables al interesado, siempre que los supuestos de  hecho necesarios existieran ya en la fecha a que se retrotraiga la eficacia del acto.
c)  Cuando produzcan efectos favorables al interesado, siempre que los supuestos de hecho  necesarios existieran ya en la fecha a que se retrotraiga la eficacia del acto.
d)  Cuando produzcan efectos desfavorables al interesado, siempre que los supuestos de  hecho necesarios no existieran en la fecha a que se retrotraiga la eficacia del acto.

PREGUNTA Nº 215.- Según la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las  Administraciones Públicas, la eficacia de los actos administrativos quedará demorada:
a)  Cuando esté supeditada a su notificación.
b)  Cuando esté supeditada a la aprobación de otro órgano administrativo.
c)  En ningún caso podrá quedar demorada.
d)  Cuando pueda ser objeto de convalidación.

PREGUNTA Nº 216.- Dispone la  Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las  Administraciones Públicas, cuando los interesados en un procedimiento administrativo sean  desconocidos, se ignore el lugar de la notificación o bien, intentada ésta, no se hubiese  podido practicar, la notificación se hará por medio de:
a)  Un anuncio publicado en el Boletín Oficial del Estado.
b)  Un anuncio en el boletín oficial de la Comunidad autónoma o de la Provincia.
c)  Un anuncio en el tablón de edictos del Ayuntamiento del último domicilio del interesado.
d)  Un anuncio en un periódico de difusión nacional.

PREGUNTA Nº 217.- Los actos de las Administraciones Públicas sujetos al Derecho Administrativo se  presumirán válidos y producirán efectos desde:
a)  La fecha en que se dicten, en cualquier caso.
b)  La fecha en que se dicten, salvo que en ellos se disponga otra cosa.
c)  El día siguiente a la fecha en que se dicten, en cualquier caso.
d)  El día siguiente a la fecha en que se dicten, salvo que en ellos se disponga otra cosa.

PREGUNTA Nº 218.- De acuerdo con el artículo 35.1 de la Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, ¿cuáles serán motivados, con  sucinta referencia de hechos y fundamentos de derecho?
a)  Los actos que limiten derechos subjetivos o intereses legítimos.
b)  Los actos que limiten derechos objetivos o intereses legítimos.
c)  Los actos que amplíen derechos objetivos o intereses legítimos.
d)  Los actos que amplíen derechos objetivos o intereses ilegítimos.    

PREGUNTA Nº 219.- Dispone el artículo 36.2 de la  Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, que en los casos en que los órganos  administrativos ejerzan su competencia de forma verbal, la constancia escrita del acto,  cuando sea necesaria, se efectuará y firmará por:
a)  El titular del órgano superior.
b)  El titular del órgano superior o funcionario que la reciba oralmente.
c)  El titular del órgano inferior.
d)  El titular del órgano inferior o funcionario que la reciba oralmente.

PREGUNTA Nº 220.- Según el artículo 40.2 de la  Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, ¿cuál de los siguientes elementos no  es esencial que contenga la notificación de un acto administrativo?
a)  La indicación de si el acto pone fin a la vía administrativa.
b)  Los recursos que contra él proceden.
c)  La indicación de si el acto es o no firme.
d)  Los plazos de interposición de los eventuales recursos.

PREGUNTA Nº 221.- Según el artículo 41.3 de la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo  Común de las Administraciones Públicas, en los procedimientos iniciados a solicitud del  interesado, la notificación se practicará:
a)  En el domicilio del que tenga conocimiento la Administración.
b)  Por el medio señalado al efecto por aquel.
c)  En el tablón de anuncios del Ayuntamiento de su residencia.
d)  En el Boletín Oficial del Estado.

PREGUNTA Nº 222.- Según el artículo 41.7 de la  Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando el interesado fuera  notificado por distintos cauces:
a)  Se tomará como fecha de notificación la de aquélla que se hubiera producido en último  lugar.
b)  Se tomará como fecha de notificación la de aquélla que se hubiera producido en primer  lugar.
c)  Se tomará como fecha de notificación  la de aquélla que se hubiera producido en papel.
d)  Se tomará como fecha de notificación la de aquélla que se hubiera producida por vía  electrónica.

PREGUNTA Nº 223.- Dispone el artículo 42.2 de la  Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando la notificación se practique  en el domicilio del interesado, si nadie pudiera hacerse cargo de la notificación, se hará  constar esta circunstancia en el expediente, junto con el día y la hora en que se intentó la  notificación, intento que se repetirá por una sola vez y en una hora distinta:
a)  Dentro de los tres días siguientes.
b)  Dentro de los cuatro días siguientes.
c)  Dentro de los cinco días siguientes.
d)  Dentro de los diez días siguientes.    

PREGUNTA Nº 224.- ¿Qué regula la  Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de  las Administraciones Públicas, sobre la motivación de los actos que pongan fin a los  procedimientos selectivos y de concurrencia competitiva?
a)  No precisarán de motivación
b)  La motivación se realizará de conformidad con lo que dispongan las normas que regulen sus  convocatorias, debiendo, en todo caso, quedar acreditados en el procedimiento los  fundamentos de la resolución que se adopte.
c)  La motivación se realizará de conformidad con lo que disponga la presente ley.
d)  La motivación se realizará de conformidad con lo que dispongan las normas que regulen sus  convocatorias, sin necesidad de que queden acreditadas en el procedimiento los  fundamentos de la resolución que se adopte.

PREGUNTA Nº 225.- Sobre las resoluciones administrativas que vulneren lo establecido en una disposición  reglamentaria, ¿qué dispone la  Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas?
a)  Modifican la disposición reglamentaria.
b)  Son recurribles.
c)  Son nulas.
d)  Son prioritarias.

PREGUNTA Nº 226.- Según el artículo 40.1 de la Ley   39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, se notificará a los interesados:
a)  Toda resolución o acto administrativo, afecte o no a sus derechos e intereses legítimos.
b)  Únicamente las resoluciones que afecten a sus intereses.
c)  Las resoluciones y actos administrativos que afecten a sus derechos e intereses.
d)  Únicamente los actos que afecten a sus intereses.

PREGUNTA Nº 227.- Según el artículo 39.1 de la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo  Común de las Administraciones Públicas, los actos de las Administraciones Públicas sujetos al  Derecho Administrativo se presumirán válidos y producirán efectos desde:
a)  Desde la publicación en el diario o boletín correspondiente, o desde el día siguiente a su  notificación.
b)  La fecha en que se dicten, salvo que en ellos se disponga otra cosa.
c)  Desde el mismo día de su notificación a los interesados.
d)  El día siguiente a la fecha en que fueron dictados, salvo que en ellos se disponga otra cosa.

PREGUNTA Nº 228.- Según el artículo 35 de la  Ley 39/2015, de 1 de octubre del Procedimiento Administrativo  Común de las Administraciones Públicas, serán motivados, entre otros, con sucinta  referencia de hechos y fundamentos de derecho:
a)  Los actos administrativos que se dicten en el ejercicio de potestades discrecionales.
b)  Los actos administrativos que amplíen derechos subjetivos o intereses legítimos.
c)  Los actos que sigan el criterio establecido en el dictamen de órganos consultivos.
d)  Las propuestas de resolución en los procedimientos de responsabilidad patrimonial.    

PREGUNTA Nº 229.- Toda notificación deberá ser cursada, según la Ley 39/2015, de 1 de octubre del  Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Dentro del plazo de un mes a partir de la fecha en que el acto haya sido dictado.
b)  Dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado.
c)  Dentro del plazo de quince días a partir de la fecha en que el acto haya sido dictado.
d)  Dentro del plazo de quince días a partir de la fecha en que el acto haya sido publicado.

PREGUNTA Nº 230.- Respecto a la práctica de las notificaciones a través de medios electrónicos, los interesados  podrán acceder a las notificaciones desde:
a)  El Punto de Acceso General electrónico de la Administración, que funcionará como un  portal de acceso.
b)  La página inicial de la Web de la Administración electrónica, que funcionará como un portal  de acceso.
c)  La oficina de la Administración virtual, que funcionará como un portal de acceso.
d)  El Portal de Aplicaciones Informáticas, que funcionará como un portal de acceso.

PREGUNTA Nº 231.- Según la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo Común de las  Administraciones Públicas, ¿cuál de los siguientes no es un sistema admitido por las  Administraciones Públicas para la identificación electrónica de los interesados?
a)  Sistemas basados en certificados electrónicos cualificados de sello electrónico.
b)  Sistema de registro de usuario cualificado.
c)  Sistemas basados en certificados electrónicos cualificados de firma electrónica.
d)  Sistemas de clave concertada.

PREGUNTA Nº 232.- Tal y como dispone el artículo 40 de la Ley 40/2015, de 1 de octubre, del Régimen Jurídico  del Sector Público, las Administraciones Públicas podrán identificarse mediante el uso de:
a)  Cualquier sistema electrónico basado en un certificado electrónico reconocido o cualificado  que reúna los requisitos exigido por la legislación de firma electrónica.
b)  Cualquier sistema electrónico basado en un certificado electrónico reconocido o cualificado  que reúna los requisitos exigidos por la legislación de protección de datos.
c)  Un sello electrónico basado en un certificado electrónico reconocido o cualificado que  reúna los requisitos exigidos por la legislación de protección de datos.
d)  Un sello electrónico basado en un certificado electrónico reconocido o cualificado que  reúna los requisitos exigidos por la legislación de firma electrónica.

PREGUNTA Nº 233.- Según el artículo 12.2 de la Ley 39/2015, de 1 de octubre del Procedimiento Administrativo  Común de las Administraciones Públicas, las Administraciones Públicas asistirán en el uso de  medios electrónicos:
a)  A los interesados no incluidos en los apartados 2 y 3 del artículo 14, de la citada Ley, que así  lo soliciten.
b)  A todos los interesados no incluidos en los apartados 2 y 3 del artículo 14, de la citada Ley.
c)  A los interesados incluidos en los apartados 2 y 3 del artículo 14, de la citada Ley, que así lo  soliciten.
d)  A todos los interesados no incluidos en los apartados 2 y 3 del artículo 14, de la citada Ley.        

PREGUNTA Nº 234.- A tenor del artículo 12.2 de la Ley 39/2015, de 1 de octubre del Procedimiento  Administrativo Común de las Administraciones Públicas, su algunos de los interesados, con  derecho a ser asistidos en el uso de medios electrónicos no dispone de los medios  electrónicos necesarios, su identificación o firma electrónica en el procedimiento  administrativo:
a)  No podrá ser realizado por funcionario público.
b)  Podrá ser válidamente realizada por un funcionario público.
c)  Se tramitará por cualquier funcionario público un sistema válido de identificación o firma  electrónica.
d)  Será sustituida por su firma presencial, mediante escrito dirigido al órgano encargado de  tramitar el procedimiento administrativo.        

PREGUNTA Nº 235.- Según el artículo 35.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, ¿cuáles de los siguientes serán  motivados, con sucinta referencia de hechos y fundamentos de derecho?
a)  Los actos que amplíen derechos o intereses.
b)  Los actos que resuelvan procedimientos de revisión de oficio de disposiciones o actos  administrativos, recursos administrativos y procedimientos de arbitraje y los que declaren  la inadmisión.
c)  Los que continúen con el criterio seguido en actuaciones precedentes.
d)  Los actos que acepten pruebas propuestas por los interesados.

PREGUNTA Nº 236.- Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas, el contenido de los actos se ajustará:
a)  A lo dispuesto por el Ordenamiento jurídico y será determinado y adecuado a los fines de  aquéllos.
b)  Exclusivamente a lo dispuesto por la presente ley y será determinado y adecuado a los fines  del ordenamiento jurídico.
c)  A lo dispuesto por el Ordenamiento jurídico y será determinado y adecuado a los fines de la  presente ley.
d)  Exclusivamente a lo dispuesto por la presente ley y será determinado y adecuado a los fines  de aquéllos.

PREGUNTA Nº 237.- Dispone el artículo 39.5 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que cuando una Administración  Pública tenga que dictar, en el ámbito de sus competencias, un acto que necesariamente  tenga por base otro dictado por una Administración Pública distinta y aquélla entienda que  es ilegal, podrá requerir a ésta previamente para que anule o revise el acto y, de rechazar el  requerimiento, podrá interponer.
a)  Recurso extraordinario de revisión.
b)  Recurso de alzada.
c)  Recurso contencioso- administrativo.
d)  Recurso potestativo de reposición.

PREGUNTA Nº 238.- Establece el artículo 40 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que toda notificación deberá ser  cursada dentro del plazo de:
a)  5 días a partir de la fecha en que el acto haya sido dictado.
b)  10 días a partir de la fecha en que el acto haya sido dictado.
c)  15 días a partir de la fecha en que el acto haya sido dictado.
d)  20 días a partir de la fecha en que el acto haya sido dictado.    

PREGUNTA Nº 239.- Señala el artículo 36 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, la forma de los actos administrativos, según el cual:
a)  Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de  expresión y constancia, se producirán por escrito a través de medios electrónicos.
b)  Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de  expresión y constancia, por escrito a través de medios no electrónicos.
c)  Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de  expresión y constancia, por escrito a través de medios electrónicos o no electrónicos.
d)  Los actos administrativos, a menos que su naturaleza exija otra forma más adecuada de  expresión y constancia, verbalmente.

PREGUNTA Nº 240.- Respecto a la ejecutividad regulada en el artículo 38 de la Ley 39/2015, de 1 de octubre,  del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Los actos de las Administraciones Públicas sujetos al Derecho Administrativo serán  ejecutivos con arreglo a lo dispuesto en esta Ley.
b)  Los actos de las Administraciones Públicas sujetos al Derecho Administrativo serán  ejecutivos con arreglo a lo dispuesto en la Ley reguladora de la Jurisdicción Contenciosa- Administrativa.
c)  Los actos de las Administraciones Públicas sujetos al Derecho Administrativo serán  ejecutivos con arreglo a lo dispuesto en la Constitución Española.
d)  Los actos de las Administraciones Públicas sujetos al Derecho Administrativo serán  ejecutivos con arreglo a lo dispuesto en la Ley de Régimen Jurídico del Sector Público.

PREGUNTA Nº 241.- Excepcionalmente, dispone la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, podrá otorgarse eficacia retroactiva  a los actos:
a)  Cuando produzcan efectos favorables al interesado, siempre que los supuestos de hecho  necesarios no existieran en la fecha a que se retrotraiga la eficacia del acto.
b)  Cuando produzcan efectos desfavorables al interesado, siempre que los supuestos de  hecho necesarios existieran ya en la fecha a que se retrotraiga la eficacia del acto.
c)  Cuando produzcan efectos favorables al interesado, siempre que los supuestos de hecho  necesarios existieran ya en la fecha a que se retrotraiga la eficacia del acto y ésta no lesione  derechos o intereses legítimos de otras personas.
d)  Cuando produzcan efectos desfavorables al interesado, siempre que los supuestos de  hecho necesarios no existieran en la fecha a que se retrotraiga la eficacia del acto.

PREGUNTA Nº 242.- Según el artículo 35 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, serán motivados, con sucinta referencia de hechos  y fundamentos de derecho (señala la incorrecta)  :
a)  Los acuerdos de suspensión de actos, cualquiera que sea el motivo de ésta.
b)  Los actos que resuelvan procedimientos de revisión de oficio de disposiciones o actos  administrativos.
c)  Los actos que limiten derechos subjetivos o intereses legítimos.
d)  Los acuerdos de acumulación de un procedimiento a otro con el que guarde identidad  sustancial o íntima conexión.    

PREGUNTA Nº 243.- El título III de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de  las Administraciones Públicas, comprende los artículos:
a)  30 a 47
b)  32 a 49
c)  34 a 52
d)  28 a 41

PREGUNTA Nº 244.- Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas, la eficacia de los actos administrativos quedará demorada:
a)  Cuando así lo exija el contenido del acto o esté supeditada a su notificación, publicación o  aprobación superior.
b)  Cuando esté supeditada a la aprobación de otro órgano administrativo.
c)  En ningún caso podrá quedar demorada.
d)  Cuando pueda ser objeto de convalidación.

PREGUNTA Nº 245.- Dispone la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas, cuando los interesados en un procedimiento administrativo sean  desconocidos, se ignore el lugar de la notificación o bien, intentada ésta, no se hubiese  podido practicar, la notificación se hará por medio de:
a)  Un anuncio publicado en el boletín Oficial del Estado.
b)  Un anuncio en el boletín oficial de la Comunidad autónoma o de la Provincia.
c)  Un anuncio en el tablón de edictos del Ayuntamiento del último domicilio del interesado.
d)  Un anuncio en un periódico de difusión nacional.

PREGUNTA Nº 246.- Señale la respuesta correcta respecto a los efectos de los actos administrativos, según se  regulan en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas:
a)  Como regla general, podrá otorgarse eficacia retroactiva a los actos cuando se dicten en  sustitución de actos nulos.
b)  En ningún caso, podrá otorgarse eficacia retroactiva a los actos cuando se dicten en  sustitución de actos anulados.
c)  Excepcionalmente, podrá otorgarse eficacia retroactiva a los actos cuando se dicten en  sustitución de actos nulos.
d)  Excepcionalmente, podrá otorgarse eficacia retroactiva a los actos cuando se dicten en  sustitución de actos anulados, así como cuando produzcan efectos favorables al interesado,  siempre que los supuestos de hecho necesarios existieran ya en la fecha a que se  retrotraiga la eficacia del acto y ésta no lesione derechos o intereses legítimos de otras  personas.

PREGUNTA Nº 247.- Según lo establecido en el artículo 34.2 de la Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Públicas, ¿qué es lo que se  ajustará a lo dispuesto por el ordenamiento jurídico y será determinado y adecuado a los  fines de aquéllos?
a)  La tramitación de los actos.
b)  La motivación de los actos.
c)  El fundamento de los actos.
d)  El contenido de los actos.    

PREGUNTA Nº 248.- Los actos de las Administraciones Públicas sujetos al Derecho Administrativo se  presumirán válidos y producirán efectos desde: (artículo 39 la Ley 39/2015, de 1 de octubre,  del Procedimiento Administrativo Común de las Administraciones Públicas)
a)  La fecha en que se dicten, en cualquier caso.
b)  La fecha en que se dicten, salvo que en ellos se disponga otra cosa.
c)  El día siguiente a la fecha en que se dicten, en cualquier caso.
d)  El día siguiente a la fecha en que se dicten, salvo que en ellos se disponga otra cosa.

PREGUNTA Nº 249.- De acuerdo con el artículo 35.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, ¿cuáles serán motivados, con  sucinta referencia de hechos y fundamentos de derecho?
a)  Los actos que limiten derechos subjetivos o intereses legítimos.
b)  Los actos que limiten derechos objetivos o intereses legítimos.
c)  Los actos que amplíen derechos objetivos o intereses legítimos.
d)  Los actos que amplíen derechos objetivos o intereses ilegítimos.

PREGUNTA Nº 250.- Según el artículo 35.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas: ¿En qué procedimientos la  motivación de los actos se realizará de conformidad con lo que dispongan las normas que  regulen sus convocatorias, debiendo, en todo caso, quedar acreditados en el procedimiento  los fundamentos de la resolución que se adopte?
a)  En todos los actos de los procedimientos selectivos y de concurrencia competitiva.
b)  En los actos que pongan fin a los procedimientos que pongan fin a los procedimientos  selectivos y de concurrencia competitiva.
c)  En todos los actos que pongan fin a un procedimiento administrativo.
d)  En los actos que cada órgano competente estime convenientes, informando previamente a  los interesados.

PREGUNTA Nº 251.- Respecto a la publicación de los actos administrativos, no es correcto afirmar: (artículo 45  de la  Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas)
a)  La publicación de un acto deberá contener los mismos elementos que el artículo 40.2 de la  Ley 39/2015, de 1 de octubre,   exige respecto de las notificaciones.
b)  En los supuestos de publicaciones de actos que contengan elementos comunes, podrán  publicarse de forma conjunta los aspectos coincidentes, especificándose solamente los  aspectos individuales de cada acto.
c)  La publicación de los actos se realizará en el diario oficial que corresponda, según cuál sea  la Administración de la que proceda el acto a notificar.
d)  La publicación de actos y comunicaciones que, por disposición legal o reglamentaria deba  practicarse en tablón de anuncios o edictos, se entenderá cumplida por su publicación en  dichos tablones de anuncios o edictos.    

PREGUNTA Nº 252.- Dispone el artículo 36.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que en los casos en que los órganos  administrativos ejerzan su competencia de forma verbal, la constancia escrita del acto,  cuando sea necesaria, se efectuará y firmará por:
a)  El titular del órgano superior.
b)  El titular del órgano superior o funcionario que la reciba oralmente.
c)  El titular del órgano inferior.
d)  El titular del órgano inferior o funcionario que la reciba oralmente, expresando en la  comunicación del mismo la autoridad de la que procede.

PREGUNTA Nº 253.- Con independencia del medio utilizado, las notificaciones serán válidas siempre que  permitan tener constancia de: (artículo 41 de la Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Públicas)
a)  Su envío o puesta a disposición, de la recepción o acceso por el interesado o su  representante, de sus fechas y horas, del contenido íntegro, y de la identidad fidedigna del  remitente y destinatario de la misma.
b)  Es suficiente con saber su fecha y hora.
c)  El único requisito  es conocer la identidad fidedigna del remitente y destinatario de la  misma.
d)  La acreditación de la notificación efectuada se incorporará al expediente y deberá ser  comunicado a todos los interesados.

PREGUNTA Nº 254.- En relación con la forma de los actos administrativo, en los casos en que los órganos  administrativos ejerzan su competencia de forma verbal, ¿qué dispone el artículo 36.2 de la  Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas?
a)  Si se tratara de resoluciones, el titular de la competencia deberá autorizar una relación de  las que haya dictado de forma verbal, con expresión de su contenido.
b)  Si se trata de notificaciones, el titular de la competencia deberá autorizar una relación de  las que haya dictado de forma verbal, con expresión de su contenido.
c)  Si se trata de resoluciones, el titular deberá autorizar una relación de las que haya dictado  de forma escrita, con expresión de su contenido.
d)  Si se trata de notificaciones, el titular de la competencia deberá autorizar una relación de  las que haya dictado de forma escrita, con expresión de su contenido.

PREGUNTA Nº 255.- Cuando deba dictarse una serie de actos administrativos de la misma naturaleza, ¿qué  dispone el artículo 36.3 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas?
a)  Deberán refundirse en un único acto, acordado por el órgano competente, que especificará  las personas u otras circunstancias que individualicen los efectos del acto para cada  interesado.
b)  Podrán refundirse  en un único acto, acordado por el órgano competente, que especificará  las personas u otras circunstancias que individualicen los efectos del acto para cada  interesado.
c)  Deberá realizarse un acto por cada uno de los interesados.
d)  Podrán refundirse en un único acto, acordado por el órgano competente, que especificará  las personas u otras circunstancias que generalicen los efectos del acto para cada  interesado.  

PREGUNTA Nº 256.- Según el artículo 40.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, ¿cuál de los siguientes elementos no  es esencial que contenga la notificación de un acto administrativo?
a)  La indicación de si el acto pone fin a la vía administrativa.
b)  Los recursos que contra él proceden.
c)  La indicación de si el acto es o no firme.
d)  Los plazos de interposición de los eventuales recursos.

PREGUNTA Nº 257.- Según el artículo 41.3 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, en los procedimientos iniciados a  solicitud del interesado, la notificación se practicará:
a)  En el domicilio del que tenga conocimiento la Administración.
b)  Por el medio señalado al efecto por aquel. Esta notificación será electrónica en los casos en  los que exista obligación de relacionarse de esta forma con la Administración.
c)  En el tablón de anuncios del Ayuntamiento de su residencia.
d)  En el Boletín Oficial del Estado.

PREGUNTA Nº 258.- Establece el artículo 35 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que serán motivados, con sucinta  referencia de hechos y fundamentos de derecho (señalar la incorrecta)  :
a)  Los actos que rechacen pruebas propuestas por la Administración.
b)  Los actos que se dicten en el ejercicio de potestades discrecionales.
c)  Los actos que acuerden la terminación del procedimiento por imposibilidad material de  continuarlo por causas sobrevenidas.
d)  Las propuestas de resolución en los procedimientos de carácter sancionador.

PREGUNTA Nº 259.- Según el artículo 41.7 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando el interesado fuera  notificado por distintos cauces:
a)  Se tomará como fecha de notificación la de aquélla que se hubiera producido en último  lugar.
b)  Se tomará como fecha de notificación la de aquélla que se hubiera producido en primer  lugar.
c)  Se tomará como fecha de notificación  la de aquella que se hubiera producido en papel.
d)  Se tomará como fecha de notificación la de aquélla que se hubiera producida por vía  electrónica.

PREGUNTA Nº 260.- Dispone el artículo 42.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando la notificación se practique  en el domicilio del interesado, si nadie pudiera hacerse cargo de la notificación, se hará  constar esta circunstancia en el expediente, junto con el día y la hora en que se intentó la  notificación, intento que se repetirá por una sola vez y en una hora distinta:
a)  Dentro de los tres días siguientes.
b)  Dentro de los cuatro días siguientes.
c)  Dentro de los cinco días siguientes.
d)  Dentro de los diez días siguientes.    

PREGUNTA Nº 261.- Según el artículo 41.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, las notificaciones se practicarán, en  todo caso, por medios electrónicos:
a)  A partir del 1 de enero del año siguiente a la entrada en vigor de la Ley.
b)  Cuando la Administración resulte obligada a remitirlas por esta vía exclusivamente.
c)  A los 6 meses de la entrada en vigor de la Ley.
d)  Cuando el interesado resulte obligado a recibirlas por estas vías.

PREGUNTA Nº 262.- ¿Qué regula la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de  las Administraciones Públicas, sobre la motivación de los actos que pongan fin a los  procedimientos selectivos y de concurrencia competitiva?
a)  No precisarán de motivación
b)  La motivación se realizará de conformidad con lo que dispongan las normas que regulen sus  convocatorias, debiendo, en todo caso, quedar acreditados en el procedimiento los  fundamentos de la resolución que se adopte.
c)  La motivación se realizará de conformidad con lo que disponga la presente ley.
d)  La motivación se realizará de conformidad con lo que dispongan las normas que regulen sus  convocatorias, sin necesidad de que queden acreditadas en el procedimiento los  fundamentos de la resolución que se adopte.

PREGUNTA Nº 263.- Sobre las resoluciones administrativas que vulneren lo establecido en una disposición  reglamentaria, ¿qué dispone la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas?
a)  Modifican la disposición reglamentaria.
b)  Son recurribles.
c)  Son nulas.
d)  Son prioritarias.

PREGUNTA Nº 264.- Según el artículo 42 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, a efectos de la práctica de las notificaciones en  papel, señale la respuesta correcta:
a)  En los procedimientos iniciados a solicitud del interesado la notificación se practicará  únicamente en el domicilio fiscal de éste.
b)  En los procedimientos iniciados de oficio la notificación se practicará exclusivamente en el  domicilio fiscal del obligado tributario o en el centro de trabajo.
c)  Cuando el interesado accediera al contenido de la notificación en sede electrónica, se le  ofrecerá la posibilidad de que el resto de notificaciones se puedan realizar a través de  medios electrónicos.
d)  En los procedimientos iniciados de oficio la notificación se practicará en primer término en  el lugar señalado a tal efecto por el obligado tributario o su representante.

PREGUNTA Nº 265.- Según el artículo 40.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, se notificará a los interesados:
a)  Toda resolución o acto administrativo, afecte o no a sus derechos e intereses legítimos.
b)  Únicamente las resoluciones que afecten a sus intereses.
c)  Las resoluciones y actos administrativos que afecten a sus derechos e intereses.
d)  Únicamente los actos que afecten a sus intereses.    

PREGUNTA Nº 266.- Según el artículo 40.5 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando las resoluciones y actos  administrativos tengan por destinatarios a más de un interesado, las Administraciones  Públicas:
a)  Deberán adoptar las medidas que consideren necesarias para la protección de los datos  personales.
b)  Deberán hacer constar en las mismas los datos de todos los interesados para el  conocimiento y posibles recursos a presentar de manera conjunta.
c)  Deberán comunicar a todos los interesados los datos del resto de interesados, a meros  efectos de conocimiento.
d)  Podrán adoptar las medidas que consideren necesarias para la protección de los datos  personales.

PREGUNTA Nº 267.- De conformidad al artículo 39.4 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, las normas y actos dictados por los  órganos de las Administraciones Públicas en el ejercicio de su propia competencia:
a)  Deberán ser observadas por el resto de los órganos administrativos, si dependen  jerárquicamente  entre sí y pertenecen a otra Administración.
b)  Deberán ser observadas por el resto de los órganos administrativos, aunque no dependan  jerárquicamente entre sí o pertenezcan a otra Administración.
c)  Deberán ser observadas por el resto de los órganos administrativos siempre que  pertenezcan a la misma administración.
d)  Deberán ser observadas por el resto de los órganos administrativos, siempre que dependan  jerárquicamente del órgano que dictó la norma o acto.

PREGUNTA Nº 268.- Según el artículo 39.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, los actos de las Administraciones  Públicas sujetos al Derecho Administrativo se presumirán válidos y producirán efectos desde:
a)  Desde la publicación en el diario o boletín correspondiente, o desde el día siguiente a su  notificación.
b)  La fecha en que se dicten, salvo que en ellos se disponga otra cosa.
c)  Desde el mismo día de su notificación a los interesados.
d)  El día siguiente a la fecha en que fueron dictados, salvo que en ellos se disponga otra cosa.

PREGUNTA Nº 269.- Según el artículo 35 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, serán motivados, entre otros, con sucinta  referencia de hechos y fundamentos de derecho:
a)  Los actos administrativos que se dicten en el ejercicio de potestades discrecionales, así  como los que deban serlo en virtud de disposición legal o reglamentaria expresa.
b)  Los actos administrativos que amplíen derechos subjetivos o intereses legítimos.
c)  Los actos que sigan el criterio establecido en el dictamen de órganos consultivos.
d)  Las propuestas de resolución en los procedimientos de responsabilidad patrimonial.    

PREGUNTA Nº 270.- Toda notificación deberá ser cursada, según la Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Dentro del plazo de un mes a partir de la fecha en que el acto haya sido dictado.
b)  Dentro del plazo de diez días a partir de la fecha en que el acto haya sido dictado.
c)  Dentro del plazo de quince días a partir de la fecha en que el acto haya sido dictado.
d)  Dentro del plazo de quince días a partir de la fecha en que el acto haya sido publicado.

PREGUNTA Nº 271.- Toda notificación según el artículo 40 de la Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Públicas:
a)  A los solos efectos de entender cumplida la obligación de notificar dentro del plazo máximo  de duración de los procedimientos, debe contener el texto íntegro de la resolución.
b)  Si la notificación omitiese algún requisito imprescindible, se dará un plazo prudencial para  su rectificación.
c)  A los solos efectos de entender cumplida la obligación de notificar dentro del plazo máximo  de duración de los procedimientos, será suficiente la notificación que contenga, cuando  menos, el texto íntegro de la resolución, así como el intento de notificación debidamente  acreditado.
d)  El órgano que dicte las resoluciones y actos administrativos los notificará a las personas con  capacidad de obrar según lo dispuesto en el artículo 3.

PREGUNTA Nº 272.- Respecto a la práctica de las notificaciones a través de medios electrónicos, los interesados  podrán acceder a las notificaciones desde: (la Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Públicas)
a)  El Punto de Acceso General electrónico de la Administración, que funcionará como un  portal de acceso.
b)  La página inicial de la Web de la Administración electrónica, que funcionará como un portal  de acceso.
c)  La oficina de la Administración virtual, que funcionará como un portal de acceso.
d)  El Portal de Aplicaciones Informáticas, que funcionará como un portal de acceso.

PREGUNTA Nº 273.- Según el artículo 40.3 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, las notificaciones que:
a)  Deberán contener, al menos, un resumen comprensivo de la resolución.
b)  Conteniendo el texto íntegro del acto, omitiesen alguno de los demás requisitos previstos  en el apartado anterior, surtirán efecto a partir de la fecha en que el interesado realice  actuaciones que supongan el conocimiento del contenido y alcance de la resolución o acto  objeto de la notificación, o interponga cualquier recurso que proceda.
c)  A los solos efectos de entender cumplida la obligación de notificar dentro del plazo máximo  de duración de los procedimientos, será suficiente la notificación que contenga cuando  menos un resumen comprensivo de la resolución.
d)  Deberán señalar, al menos, las reclamaciones contra ese acto.    

PREGUNTA Nº 274.- Según el artículo 41.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, ¿quiénes podrán decidir y  comunicar en cualquier momento a la Administración Pública, mediante modelos  normalizados que se establezcan al efecto, que las notificaciones sucesivas se practiquen o  dejen de practicar por medios electrónicos?
a)  Todos los interesados.
b)  Los interesados que no estén obligados a recibir notificaciones electrónicas.
c)  Los interesados que estén obligados a recibir notificaciones electrónicas.
d)  Los interesados que estén obligados a recibir notificaciones por escrito.

PREGUNTA Nº 275.- ¿Cómo podrán establecer, las Administraciones Públicas, la obligación de practicar  electrónicamente las notificaciones para determinados procedimientos, según se regula en la  Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas?
a)  Mediante ley.
b)  Mediante orden del órgano encargado de resolver.
c)  Mediante orden del órgano encargado de  tramitar.
d)  Reglamentariamente.

PREGUNTA Nº 276.- A los solos efectos de entender cumplida la obligación de notificar dentro del plazo  máximo de duración de los procedimientos, será suficiente la notificación que contenga: (La  Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas)
a)  El texto íntegro de la resolución, así como la expresión de los recursos que procedan.
b)  El texto íntegro de la resolución.
c)  El texto íntegro de la resolución, así como la indicación de si pone fin o no a la vía  administrativa.
d)  El texto íntegro de la resolución, así como el intento de notificación debidamente  acreditado.

PREGUNTA Nº 277.- Respecto a la inderogabilidad singular regulada en el artículo 37 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Las resoluciones administrativas de carácter general no podrán vulnerar lo establecido en  una disposición de carácter particular, salvo que aquéllas procedan de un órgano de igual o  superior jerarquía al que dictó la disposición general.
b)  Las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en  una disposición de carácter general, aunque aquéllas procedan de un órgano de igual o  superior jerarquía al que dictó la disposición general.
c)  Las resoluciones administrativas de carácter general no podrán vulnerar lo establecido en  una disposición de carácter particular, aunque aquéllas precedan de un órgano de igual o  superior jerarquía al que dictó la disposición general.
d)  Las resoluciones administrativas de carácter particular no podrán vulnerar lo establecido en  una disposición de carácter general, salvo que aquéllas precedan de un órgano de igual o  superior jerarquía al que dictó la disposición general.        

PREGUNTA Nº 278.- Según el artículo 41.4 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, en los procedimientos iniciados de  oficio, a los solos efectos de su iniciación, las Administraciones Públicas podrán recabar,  mediante consulta a las bases de datos del INE, los datos sobre el domicilio del interesado  recogidos en el Padrón Municipal, remitidos por las entidades Locales en aplicación de  lo  previsto en:
a)  La Ley 3/2007, de 24 de mayo, del Instituto Nacional de Estadística.
b)  La Ley 7/1985, de 2 de abril, reguladora de las Bases del Régimen Local.
c)  El Reglamento 3/2007, de 24 de mayo, del Instituto Nacional de Estadística.
d)  La Ley 3/1999, de Protección y Acceso a los Datos de Carácter Personal.

PREGUNTA Nº 279.- ¿Cómo se practicará la notificación en los procedimientos iniciados a solicitud del  interesado, salvo en los casos en los que exista obligación de relacionarse de manera  electrónica con la Administración, según el artículo 41.3 de la Ley 39/2015, de 1 de octubre,  del Procedimiento Administrativo Común de las Administraciones Públicas?
a)  Siempre electrónicamente.
b)  Siempre por escrito.
c)  Por el medio señalado al efecto por aquel.
d)  Por el mismo procedimiento por el que el interesado inicie el procedimiento.

PREGUNTA Nº 280.- Señale la correcta respecto a las notificaciones, según lo regulado en el artículo 41 de la  Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas:
a)  En ningún caso las Administraciones podrán establecer la obligación de practicar  electrónicamente las notificaciones para determinados procedimientos o para ciertos  colectivos de personas físicas.
b)  La acreditación de la notificación efectuada se incorporará al expediente.
c)  El interesado podrá identificar un dispositivo electrónico y/o una dirección de correo  electrónico que servirán para el envío de los avisos y para la práctica de notificaciones.
d)  Los interesados que estén obligados a recibir notificaciones electrónicas, podrán decidir y  comunicar en cualquier momento a la Administración Pública que las notificaciones  sucesivas se practiquen o dejen de practicarse por medios electrónicos.

PREGUNTA Nº 281.- Están obligados a relacionarse electrónicamente con las Administraciones Públicas, según  el artículo 14 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común  de las Administraciones Públicas:
a)  Las personas jurídicas
b)  Los funcionarios de las Administraciones Públicas, según disponga la presente Ley.
c)  Quienes ejerzan una actividad profesional se requiera o no colegiación obligatoria.
d)  Reglamentariamente, el Gobierno podrá establecer la obligación de relacionarse con las  Administraciones Públicas a través de medios electrónicos para determinados  procedimientos.    

PREGUNTA Nº 282.- De acuerdo con el artículo 41.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas,  reglamentariamente las  Administraciones podrán establecer la obligación de practicar electrónicamente las  notificaciones para determinados procedimientos y para ciertos colectivos de personas:
a)  Jurídicas que, por razón de su capacidad económica, técnica, dedicación profesional u otros  motivos quede acreditado que tiene acceso y disponibilidad de los medios electrónicos  necesarios.
b)  Físicas o jurídicas que, por razón de su capacidad económica, técnica, dedicación  profesional u otros motivos quede acreditado que tiene acceso y disponibilidad de los  medios electrónicos necesarios.
c)  Físicas que, por razón de su capacidad económica, técnica, dedicación profesional u otros  motivos quede acreditado que tiene acceso y disponibilidad de los medios electrónicos  necesarios.
d)  Físicas o jurídicas que, por razón de su capacidad económica, residencia, horario,  dedicación profesional u otros motivos quede acreditado que tiene acceso y disponibilidad  de los medios electrónicos necesarios.

PREGUNTA Nº 283.- Las notificaciones se practicarán preferentemente, según la Ley 39/2015, de 1 de octubre,  del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Por medios electrónicos y, en todo caso, cuando el interesado resulte obligado a recibirlas  por esta vía.
b)  Por medios no electrónicos y, en todo caso, cuando el interesado resulte obligado a  recibirlas por esta vía.
c)  Verbalmente y, en todo caso, cuando el interesado resulte obligado a recibirlas por esta vía.
d)  Con carácter general por medios electrónicos, salvo que la Administración determine otra  vía más eficaz de notificación.        

PREGUNTA Nº 284.- Según el artículo 100 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, la ejecución forzosa por las Administraciones  Públicas se efectuará, respetando siempre el principio de proporcionalidad, por los  siguientes medios:
a)  Apremio sobre el patrimonio, ejecución solidaria, multa coercitiva y compulsión sobre las  personas.
b)  Apremio sobre las personas, ejecución solidaria, multa coercitiva y compulsión sobre el  patrimonio.
c)  Apremio sobre el patrimonio, ejecución subsidiaria, multa coercitiva y compulsión sobre las  personas.
d)  Apremio sobre las personas, ejecución solidaria, multa coercitiva y compulsión sobre el  patrimonio.

PREGUNTA Nº 285.- Según el artículo 88 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, la resolución que ponga fin al procedimiento  decidirá todas las cuestiones planteadas por los interesados y aquellas otras derivadas del  mismo. Ahora bien, cuando se trate de cuestiones conexas que no hubieran sido planteadas  por los interesados:
a)  El órgano competente no podrá pronunciarse sobre las mismas.
b)  El órgano competente podrá pronunciarse sobre las mismas.
c)  El órgano competente podrá pronunciarse sobre las mismas, poniéndolo antes de  manifiesto a aquéllos por un plazo no superior a 15 días.
d)  El órgano competente podrá pronunciarse sobre las mismas, poniéndolo antes de  manifiesto a aquéllos por un plazo no superior a un mes.

PREGUNTA Nº 286.- La Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas, en su Título IV, distingue los siguientes capítulos sobre el  procedimiento administrativo común:
a)  Iniciación, Instrucción y Finalización.
b)  Iniciación, Ordenación, Instrucción, Finalización y Reclamación.
c)  Iniciación, Instrucción, Finalización y Ejecución.
d)  Garantías, Iniciación, Ordenación, Instrucción, Finalización, tramitación Simplificada y  Ejecución.

PREGUNTA Nº 287.- En relación con la ejecución forzosa que se encuentra regulada en el artículo 100 de la Ley  39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones  Públicas, indique cuál de las siguientes afirmaciones es correcta:
a)  Se efectuará siempre respetando el principio de proporcionalidad.
b)  Si fueran varios los medios de ejecución admisibles, se elegirá el menos restrictivo de la  seguridad individual.
c)  Si fuese necesario entrar en el domicilio del afectado se necesitará en todo caso,  autorización judicial.
d)  Se efectuará siempre respetando el principio de proporcionalidad e igualdad.  

PREGUNTA Nº 288.- Respecto al inicio del procedimiento a solicitud del interesado, según se refiere el artículo  66 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas, no es correcto afirmar lo siguiente:
a)  Las oficinas de asistencia en materia de registros estarán obligadas a facilitar a los  interesados el código de identificación si el interesado lo desconoce.
b)  Las Administraciones Públicas deberán mantener y actualizar en la sede electrónica  correspondiente un listado con los códigos de identificación vigentes.
c)  Cuando las pretensiones correspondientes a una pluralidad de personas tengan un  contenido y fundamento idéntico o sustancialmente similar, serán en todo caso formuladas  en una única solicitud.
d)  De las solicitudes, comunicaciones y escritos que se presenten electrónicamente o en las  oficinas de asistencia en materia de registros de la Administración, podrán éstos exigir el  correspondiente recibo que acredite la fecha y hora de presentación.

PREGUNTA Nº 289.- Tal como dispone el artículo 77 de la Ley 39/2015, de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando la Administración no tenga  por ciertos los hechos alegados por los interesados o la naturaleza del procedimiento lo  exija, el instructor acordará la apertura de un período de prueba por un plazo:
a)  No superior a treinta días ni inferior a cinco.
b)  No superior a diez días ni inferior a cinco.
c)  No superior a veinte días ni inferior a quince.
d)  No superior a treinta días ni inferior a diez.

PREGUNTA Nº 290.- Según el artículo 82 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, se podrá prescindir del trámite de audiencia:
a)  Cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resolución otros  hechos ni otras alegaciones y pruebas que las aducidas por el interesado.
b)  Cuando figuren en el procedimiento o sean tenidos en cuenta en la resolución otros hechos  o alegaciones y pruebas adicionales a las aducidas por el interesado.
c)  Cuando lo autorice el superior jerárquico del órgano actuante.
d)  Nunca se podrá prescindir de este trámite.

PREGUNTA Nº 291.- Dispone el artículo 76 de la Ley 39/ 2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que los interesados podrán alegar  los defectos de tramitación y, en especial, los que supongan paralización, infracción de los  plazos preceptivamente señalados o la omisión de trámites que pueden ser subsanados  antes de la resolución definitiva del asunto:
a)  En todo momento.
b)  En cualquier momento del procedimiento anterior al acuerdo de iniciación.
c)  En cualquier momento del procedimiento anterior al trámite de audiencia.
d)  En cualquier momento del procedimiento anterior al trámite de información pública.    

PREGUNTA Nº 292.- Cuando lo considere necesario, la ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, regula que el instructor, a petición  de los interesados, podrá decidir la apertura de un período extraordinario de prueba por un  plazo:
a)  No superior a dos días.
b)  No superior a cinco días.
c)  No superior a 7 días.
d)  No superior a 10 días.

PREGUNTA Nº 293.- De acuerdo con el artículo 73 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, los trámites que deban ser  cumplimentados por los interesados deberán realizarse en el plazo de:
a)  Treinta días a partir del siguiente al de la notificación del correspondiente acto, salvo en el  caso de que en la norma correspondiente se fije plazo distinto.
b)  Veinte días a partir del siguiente al de la notificación del correspondiente acto, salvo en el  caso de que en la norma correspondiente se fije plazo distinto.
c)  Quince días a partir del siguiente al de la notificación del correspondiente acto, salvo en el  caso de que en la norma correspondiente se fije plazo distinto.
d)  Diez días a partir del siguiente al de la notificación del correspondiente acto, salvo en el  caso de que en la norma correspondiente se fije plazo distinto.

PREGUNTA Nº 294.- Respecto a la práctica de la prueba regulada en el artículo 78 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, la  Administración comunicará a los interesados el inicio de las actuaciones necesarias para la  realización de las pruebas que hayan sido admitidas:
a)  Con 24 horas de antelación.
b)  Con 48 horas de antelación.
c)  Con 72 horas de antelación.
d)  Con antelación suficiente.

PREGUNTA Nº 295.- Dispone el artículo 56.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que las medidas provisionales  deberán ser confirmadas, modificadas o levantadas en el acuerdo de iniciación del  procedimiento, que deberá efectuarse dentro de los:
a)  10 días siguientes a su adopción, el cual no podrá ser objeto de recurso.
b)  15 días siguientes a su adopción, el cual podrá ser objeto del recurso que proceda.
c)  15 días siguientes a su adopción, el cual no podrá ser objeto de recurso.
d)  10 días siguientes a su adopción, el cual podrá ser objeto del recurso que proceda.

PREGUNTA Nº 296.- Dispone el artículo 83 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que el trámite de información   pública será por un plazo:
a)  De veinte días.
b)  No inferior a veinte días.
c)  No superior a veinte días.
d)  De diez días.    

PREGUNTA Nº 297.- Se podrán adoptar medidas provisionales que estime oportunas para asegurar la eficacia  de la resolución que pudiera recaer (artículo 56 Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Públicas)
a)  Antes de iniciar el procedimiento, el órgano administrativo competente para iniciar o  instruir, de oficio o a instancia de parte y de forma motivada.
b)  Iniciado el procedimiento, el órgano administrativo competente para resolver, de oficio o a  instancia de parte y de forma motivada.
c)  Antes de iniciar el procedimiento, el órgano administrativo competente para resolver, de  oficio o a instancia de parte y de forma motivada.
d)  Iniciado el procedimiento, el órgano administrativo competente para iniciar o instruir, de  oficio y de forma motivada.

PREGUNTA Nº 298.- Según el artículo 58 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, los procedimientos se iniciarán de oficio por  acuerdo del órgano competente:
a)  Por iniciativa propia.
b)  Como consecuencia de orden superior
c)  A petición razonada de otros órganos.
d)  Por cualquiera de las anteriores, e incluso por denuncia.

PREGUNTA Nº 299.- Iniciado el procedimiento, el órgano administrativo competente para resolver, podrá  adoptar, en los términos que previene el artículo 56 de la Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Públicas, las medidas  provisionales que estime oportunas si lo hace:
a)  De oficio.
b)  De oficio o a instancia de parte.
c)  De oficio o a instancia de parte y de forma motivada.
d)  De manera electrónica.

PREGUNTA Nº 300.- La multa coercitiva es, según se regula en el artículo 103 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Dependiente de las sanciones que puedan imponerse con tal carácter e incompatible con  ellas.
b)  Independiente de las sanciones que puedan imponerse con tal carácter y compatible con  ellas.
c)  Dependiente de las sanciones que puedan imponerse con tal carácter y compatible con  ellas.
d)  Independiente de las sanciones que puedan imponerse con tal carácter e incompatible con  ellas.    

PREGUNTA Nº 301.- A los interesados que no cumplan lo dispuesto en cuanto al cumplimiento de trámites se  les podrá declarar decaídos en su derecho al trámite correspondiente. No obstante, se  admitirá la actuación del interesado y producirá sus efectos legales, si se produjera:
a)  Antes del día que se notifique la resolución en la que se tenga por transcurrido el plazo.  (Art. 73.1 Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas)
b)  Antes o dentro del día que se notifique la resolución en la que se tenga por transcurrido el  plazo. (Art. 73.3 Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de  las Administraciones Públicas)
c)  Hasta 24 horas después del día que se notifique la resolución en la que se tenga por  transcurrido el plazo. (Art.73.1 Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas)
d)  Hasta 48 horas después del día que se notifique la resolución en la que se tenga por  transcurrido el plazo. (Art. 73.3 Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas)

PREGUNTA Nº 302.- De acuerdo con el artículo 72 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, el principio de simplificación  administrativa implica:
a)  Se acordarán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso  simultáneo y sea obligado su cumplimiento sucesivo.
b)  Se acordarán en sucesivos actos todos los trámites que, por su naturaleza, admitan un  impulso simultáneo y no sea obligado su cumplimiento sucesivo.
c)  Se acordarán en un solo acto todos los trámites que, por su naturaleza, admitan un impulso  simultáneo y no sea obligado su cumplimiento sucesivo.
d)  Se acordarán en sucesivos actos todos los trámites que, por su naturaleza, admitan un  impulso simultáneo y sea obligado su cumplimiento sucesivo.

PREGUNTA Nº 303.- ¿Qué se entiende por Expediente Administrativo según lo dispuesto en el artículo 70 de la  Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas?
a)  El conjunto ordenado de documentos que sirven de antecedentes y fundamento a la  instrucción del procedimiento, así como las diligencias encaminadas a ejecutarla.
b)  El conjunto ordenado de documentos y actuaciones que sirven de antecedente y  fundamento a la resolución administrativa, así como las diligencias encaminadas a  ejecutarla.
c)  el conjunto ordenado de documentos y actuaciones que sirven de antecedente y  fundamento a la instrucción del procedimiento, así como las diligencias encaminadas a  ejecutarla.
d)  El conjunto ordenado de documentos que sirven de antecedente y fundamento a la  resolución administrativa, así como las diligencias encaminadas a ejecutarla.    

PREGUNTA Nº 304.- Según el artículo 74 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, las cuestiones incidentales que se susciten en el  procedimiento:
a)  Suspenderán la tramitación del mismo.
b)  No suspenderán la tramitación del mismo.
c)  No suspenderá la tramitación del mismo, salvo la recusación.
d)  Suspenderá la tramitación del mismo en ciertos casos.

PREGUNTA Nº 305.- Respecto a la declaración responsable, regulada en el artículo 69 de la Ley 39/2015, de 1  de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, las  Administraciones podrán requerir que se aporte la documentación que acredite el  cumplimiento de los requisitos para obtener el reconocimiento de un derecho o facultad o  para su ejercicio:
a)  En cualquier momento y el interesado podrá no aportarla.
b)  Durante la fase de ordenación y el interesado podrá no aportarla.
c)  En cualquier momento y el interesado deberá aportarla.
d)  Durante la fase de ordenación y el interesado deberá aportarla.

PREGUNTA Nº 306.- Respecto al inicio del procedimiento de oficio al que se refiere la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas en el  artículo 62, ¿qué se entiende por denuncia?
a)  El acto por el que cualquier persona, en cumplimiento o no de una obligación legal, pone en  conocimiento de un órgano administrativo la existencia de un determinado hecho que  pudiera justificar la iniciación de oficio de un procedimiento administrativo.
b)  La actuación derivada del conocimiento directo o indirecto de las circunstancias, conductas  o hechos objetos del procedimiento por el órgano que tiene atribuida la competencia de  iniciación.
c)  La propuesta de iniciación del procedimiento formulada por cualquier órgano  administrativo que no tiene competencia para iniciar el mismo y que ha tenido  conocimiento de las circunstancias, conductas o hechos objeto del procedimiento.
d)  La orden emitida por un órgano administrativo superior jerárquico del competente para la  iniciación del procedimiento.

PREGUNTA Nº 307.- Establece el artículo 71 de la Ley 39/2015,de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que el procedimiento, sometido al  principio de celeridad, se impulsará de oficio en todos sus trámites y a través de medios  electrónicos, respetando los principios de:
a)  Transparencia y publicidad.
b)  Economía y eficacia.
c)  Economía y eficiencia.
d)  Transparencia e información pública.    

PREGUNTA Nº 308.- Según el artículo 103.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando así lo autorice una  disposición administrativa, y en la forma y cuantía que éstas determine, las Administraciones  Públicas pueden, para la ejecución de determinados actos, imponer multas coercitivas,  reiteradas por lapsos de tiempo que sean suficientes para cumplir lo ordenado, en los  siguientes supuestos:
a)  Actos personalísimos en que proceda la compulsión directa sobre la persona del obligado.
b)  Actos en que, procediendo la compulsión, la Administración no la estimara conveniente.
c)  Actos cuya ejecución no pueda el obligado encargar a otra persona.
d)  Actos que impongan una obligación personalísima de no hacer.        

PREGUNTA Nº 309.- Dispone el artículo 39.5 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, que cuando una Administración  Pública tenga que dictar, en el ámbito de sus competencias, un acto que necesariamente  tenga por base otro dictado por una Administración Pública distinta y aquélla entienda que  es ilegal, podrá requerir a ésta previamente para que anule o revise el acto y, de rechazar el  requerimiento, podrá interponer:
a)  Recurso extraordinario de revisión.
b)  Recurso de alzada.
c)  Recurso contencioso- administrativo.
d)  Recurso potestativo de reposición.

PREGUNTA Nº 310.- La revisión de los actos nulos, según la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, puede tener lugar:
a)  Sólo a instancia del interesado.
b)  Dentro de los cuatro años siguientes a la notificación del acto.
c)  En cualquier momento.
d)  Sólo por propia iniciativa.

PREGUNTA Nº 311.- Las Administraciones Públicas declararán de oficio la nulidad de los actos administrativos  que hayan puesto fin a la vía administrativa o que no hayan sido recurridos en plazo, en los  supuestos previstos en el artículo 47.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas:
a)  En cualquier momento anterior al trámite de audiencia, por iniciativa propia, y previo  dictamen favorable del Consejo de Estado u órgano consultivo equivalente de la  Comunidad Autónoma, si lo hubiere.
b)  En cualquier momento, a solicitud de interesado, y previo dictamen favorable del Consejo  de Estado u órgano consultivo equivalente de la Comunidad autónoma, si lo hubiere.
c)  En cualquier momento anterior al trámite de audiencia, por iniciativa propia o a solicitud de  interesado, y previo dictamen favorable del Consejo de Estado u órgano consultivo  equivalente de la Comunidad Autónoma, si lo hubiere.
d)  En cualquier momento, por iniciativa propia o a solicitud de interesado, y previo dictamen  favorable del Consejo de Estado u órgano consultivo equivalente de la Comunidad  Autónoma, si lo hubiere.

PREGUNTA Nº 312.- Conforme al artículo 107 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, la declaración de lesividad no podrá  adoptarse una vez transcurridos:
a)  6 meses desde que se dictó el acto administrativo.
b)  1 año desde que se dictó el acto administrativo.
c)  2 años desde que se dictó el acto administrativo.
d)  4 años desde que se dictó el acto administrativo.    

PREGUNTA Nº 313.- Según el artículo 108 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, iniciado el procedimiento de revisión de oficio, el  órgano competente para resolver podrá suspender la ejecución del acto:
a)  Siempre.
b)  Nunca.
c)  Antes del transcurso de 6 meses.
d)  Cuando la ejecución pudiera causar perjuicios de imposible o difícil reparación.

PREGUNTA Nº 314.- Atendiendo al artículo 117.3 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, la ejecución del acto impugnado se  entenderá suspendida:
a)  Si transcurrido un mes desde que la solicitud de suspensión haya tenido entrada en el  registro del órgano competente para decidir sobre la misma, éste no ha dictado y  notificado resolución expresa al respecto.
b)  Si transcurridos 60 días desde que la solicitud de suspensión  haya tenido entrada en el  registro del órgano competente para decidir sobre la misma, éste no ha dictado y  notificado resolución expresa al respecto.
c)  Si transcurridos 90 días desde que la solicitud de suspensión haya tenido entrada en el  registro del órgano competente para decidir sobre la misma, éste no ha dictado y  notificado resolución expresa al respecto.
d)  Si transcurridos 15 días desde que la solicitud de suspensión haya tenido entrada en el  registro del órgano competente para decidir sobre la misma, éste no ha dictado y  notificado resolución expresa al respecto.

PREGUNTA Nº 315.- Sobre la declaración de lesividad regulada en el artículo 107 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Requerirá en todo caso la aprobación expresa del Consejo de Ministros u órgano  equivalente de las Comunidad Autónomas.
b)  Exigirá la oportuna autorización por el órgano competente en materia de Hacienda Pública.
c)  Requerirá previo dictamen favorable del Consejo de Estado u órgano consultivo  equivalente de la Comunidad Autónoma, si lo hubiere.
d)  Exigirá la previa audiencia de cuantos aparezcan como interesados en el mismo.

PREGUNTA Nº 316.- Según el artículo 122.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, en el recurso de alzada, el plazo  máximo para dictar y notificar la resolución será de:
a)  Tres meses.
b)  Dos meses.
c)  Un mes.
d)  Quince días.

PREGUNTA Nº 317.- Contra los actos de trámite, si estos últimos deciden directa o indirectamente el fondo del  asunto, se pondrán interponer: (Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas)
a)  Los recursos de alzada y reposición.
b)  Recurso de revisión.
c)  Recurso ordinario.
d)  Recurso extraordinario.  

PREGUNTA Nº 318.- Según La Ley 39/2015, de 1 de octubre,  del Procedimiento Administrativo Común de las  Administraciones Públicas, un acto que tenga contenido imposible:
a)  Es nulo de pleno derecho y no puede ser objeto de convalidación.
b)  Es nulo de pleno derecho y puede ser objeto de convalidación.
c)  Es anulable y puede ser objeto de convalidación.
d)  Es anulable y no puede ser objeto de convalidación.

PREGUNTA Nº 319.- Dispone el artículo 114 de la Ley 39/2015, de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, que ponen fin a la vía  administrativa:
a)  Los acuerdos y contratos financieros que tengan la consideración de finalizadores del  procedimiento.
b)  Las demás resoluciones de Administraciones Públicas cuando una disposición así lo  establezca.
c)  La resolución administrativa de los procedimientos de responsabilidad patrimonial.
d)  Los pactos y convenios cuando una disposición reglamentaria así lo establezca.

PREGUNTA Nº 320.- Según el artículo 121.2 de la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, el recurso de alzada podrá  interponerse:
a)  Únicamente ante el órgano que dictó el acto que se impugna.
b)  Sólo ante el órgano competente para resolverlo.
c)  Ante el superior jerárquico del órgano competente para resolverlo.
d)  Ante el órgano que dictó el acto que se impugna o ante el competente para resolverlo.

PREGUNTA Nº 321.- Respecto a la convalidación de los actos administrativos, no es correcto, según lo  establecido en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de  las Administraciones Públicas:
a)  La Administración podrá convalidar los actos anulables, subsanando los vicios de que  adolezcan.
b)  El acto de convalidación producirá efecto desde su fecha, salvo lo dispuesto en el artículo  39.3 para la retroactividad de los actos administrativos.
c)  Si el vicio consistiese en la falta de alguna autorización, podrá ser convalidado el acto  mediante el otorgamiento de la misma por el órgano competente.
d)  Si el vicio consistiera en incompetencia no determinante de nulidad, la convalidación podrá  realizarse por el órgano competente siempre que no sea superior jerárquico del que dictó  el acto viciado.

PREGUNTA Nº 322.- El recurso extraordinario de revisión regulado en el artículo 125 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, se  interpondrá cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los  propios documentos incorporados al expediente en el plazo de:
a)  1 mes siguiente a la fecha de la notificación de la resolución impugnada.
b)  2 meses siguientes a la fecha de la notificación de la resolución impugnada.
c)  3 meses siguientes a la fecha de notificación de la resolución impugnada.
d)  4 años siguientes a la fecha de la notificación de la resolución impugnada.    

PREGUNTA Nº 323.- Respecto a la nulidad y anulabilidad de un acto administrativo, según dispone la Ley  39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones  Públicas, señale la incorrecta:
a)  La nulidad o anulabilidad de un acto no implicará la de los sucesivos en el procedimiento  que sean independientes del primero.
b)  La nulidad o anulabilidad en parte del acto administrativo no implicará la de las partes del  mismo independientes de aquélla, salvo que la parte viciada sea de tal importancia que sin  ella el acto administrativo no hubiera sido dictado.
c)  Los actos nulos o anulables que contengan los elementos constitutivos de otro distinto no  producirán los efectos de éste.
d)  El órgano que declare la nulidad o anule las actuaciones dispondrá siempre la conservación  de aquellos actos y trámites cuyo contenido se hubiera mantenido igual de no haberse  cometido la infracción.

PREGUNTA Nº 324.- Atendiendo al artículo 107 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, la declaración de lesividad hace  referencia a:
a)  Actos nulos de pleno derecho favorables para los interesados.
b)  Actos anulables favorables para los interesados.
c)  Actos nulos de pleno derecho desfavorables para los interesados.
d)  Actos anulables desfavorables para los interesados.

PREGUNTA Nº 325.- Dispone el artículo 112.1 de  la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, respecto a la oposición a los  restantes actos de trámite:
a)  Podrá efectuarse mediante recurso de reposición.
b)  Podrá efectuarse mediante recurso de alzada.
c)  Podrá efectuarse mediante recurso de revisión.
d)  Podrá alegarse por los interesados para su consideración en la resolución que ponga fin al  procedimiento.

PREGUNTA Nº 326.- Según  la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas, un acto que tenga contenido imposible:
a)  Es nulo de pleno derecho y no puede ser objeto de convalidación.
b)  Es nulo de pleno derecho y puede ser objeto de convalidación.
c)  Es anulable y puede ser objeto de convalidación.
d)  Es anulable y no puede ser objeto de convalidación.    

PREGUNTA Nº 327.- Indique la opción correcta, según se regula en la Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Pública:
a)  Contra los actos firmes en vía administrativa, sólo procederá el recurso extraordinario de  revisión cuando concurra alguna de las circunstancias previstas en el artículo 125.1 de la  Ley 39/2015.
b)  Contra los actos firmes en vía administrativa, sólo procederá el recurso potestativo de  reposición cuando concurra alguna de las circunstancias previstas en el artículo 125.1 de la  Ley 39/2015.
c)  Contra los actos firmes en vía administrativa, sólo procederá el recurso extraordinario de  reposición cuando concurra alguna de las circunstancias previstas en el artículo 125.1 de la  Ley 39/2015.
d)  Contra los actos firmes en vía administrativa, sólo procederá el recurso extraordinario de  alzada cuando concurra alguna de las circunstancias previstas en el artículo 125.1 de la Ley  39/2015.

PREGUNTA Nº 328.- Conforme al artículo 124 de la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, contra la resolución de un recurso  de reposición:
a)  Puede interponerse de nuevo dicho recurso.
b)  No puede interponerse de nuevo dicho recurso.
c)  Puede interponerse de nuevo dicho recurso en el plazo de diez días.
d)  Puede interponerse de nuevo dicho recurso en el plazo de quince días.

PREGUNTA Nº 329.- Según el artículo 113 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, contra los actos firmes en vía administrativa:
a)  Sólo procederá recurso de alzada.
b)  Sólo procederá recurso de reposición.
c)  Sólo procederá recurso extraordinario de revisión, si concurren las circunstancias previstas  en el artículo 125.1.
d)  Sólo procederá recurso extraordinario de revisión, si concurren las circunstancias previstas  en el artículo 125.1 de la Ley 29/1998, reguladora de la Jurisdicción Contenciosa  Administrativa.

PREGUNTA Nº 330.- Serán nulas de pleno derecho, tal y como dispone el artículo 47 de  la Ley 39/2015,  de 1 de  octubre,  del Procedimiento Administrativo Común de las Administraciones Públicas: (Señale  la incorrecta)  
a)  Las disposiciones administrativas que vulneren la Constitución.
b)  Las disposiciones administrativas que vulneren las leyes u otras disposiciones  administrativas de rango superior.
c)  Las disposiciones administrativas que regulen materias reservadas a la Ley.
d)  Las disposiciones administrativas que establezcan la irretroactividad de disposiciones  sancionadoras no favorables o restrictivas de derechos individuales.    

PREGUNTA Nº 331.- Dispone la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas, en su artículo 119.3, que el órgano que resuelva el recurso:
a)  Decidirá cuantas cuestiones de forma como de fondo plantee el procedimiento, si han sido  alegados por los interesados.
b)  Decidirá cuantas cuestiones, tanto de forma como de fondo, plantee el procedimiento,  hayan sido o no alegadas por los interesados. En este último caso, no se les dará audiencia.
c)  Decidirá cuantas cuestiones de fondo plante el procedimiento, hayan sido o no alegadas  por los interesados. En este último caso, se les oirá previamente.
d)  Decidirá cuantas cuestiones, tanto de forma como de fondo, plantee el procedimiento,  hayan sido o no alegadas por los interesados. En este último caso, se les oirá previamente.  No obstante, la resolución será congruente con las peticiones formuladas por el recurrente,  sin que en ningún caso pueda agravarse su situación inicial.

PREGUNTA Nº 332.- Cuando existiendo vicio de forma no se estime procedente resolver sobre el fondo, según  el art. 119.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de  las Administraciones Públicas:
a)  Se ordenará la retroacción del procedimiento al inicio del mismo.
b)  Se ordenará la retroacción del procedimiento al inicio del mismo, salvo lo dispuesto en el  artículo 67.
c)  Se ordenará la retroacción del procedimiento al momento en el que el vicio fue cometido.
d)  Se ordenará la retroacción del procedimiento al momento en el que el vicio fue cometido,  sin perjuicio de que eventualmente pueda acordarse la convalidación de actuaciones por el  órgano competente para ello, de acuerdo con lo dispuesto en el artículo 52.

PREGUNTA Nº 333.- Según el artículo 117.1 de  la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, la interposición de cualquier  recurso:
a)  Excepto en los casos en que una disposición establezca lo contrario, no suspenderá la  ejecución del acto impugnado.
b)  Excepto en los casos en una disposición establezca lo contrario, suspenderá la ejecución del  acto impugnado.
c)  Siempre suspenderá la ejecución del acto impugnado.
d)  Nunca suspenderá la ejecución del acto impugnado.

PREGUNTA Nº 334.- Señale la respuesta correcta, según el artículo 122.3 de la Ley 39/2015,  de 1 de octubre,   del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Contra la resolución de un recurso de alzada no cabrá ningún otro recurso administrativo,  salvo el recurso extraordinario de revisión en los casos establecidos en el artículo 125.1.
b)  Contra la resolución de un recurso de alzada no cabrá ningún otro recurso administrativo,  salvo el recurso extraordinario de reposición en los casos establecidos en el artículo 125.1.
c)  Contra la resolución de un recurso de alzada no cabrá ningún otro recurso administrativo,  salvo el recurso contencioso-administrativo en los casos establecidos en el artículo 125.1.
d)  Contra la resolución de un recurso de alzada no cabrá ningún otro recurso administrativo.    

PREGUNTA Nº 335.- De acuerdo con el artículo 47 de la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, son nulos de pleno derecho los  actos:
a)  Que limiten derechos subjetivos o intereses legítimos.
b)  Cualquiera que se establezca expresamente en una disposición con rango de Ley o  reglamentaria.
c)  Dictados por órgano manifiestamente incompetente por razón de la materia o del  territorio.
d)  Que sean constitutivos de infracción administrativa o se dicten como consecuencia de ésta.

PREGUNTA Nº 336.- ¿Cuál es el plazo de interposición del recurso de reposición, según la Ley 39/2015,  de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas?
a)  Un mes, si el acto fuera presunto. Transcurrido dicho plazo, únicamente podrá interponerse  recurso contencioso-administrativo, sin perjuicio, en su caso de la procedencia del recurso  extraordinario de revisión.
b)  Un mes, si el acto fuera expreso. Transcurrido dicho plazo, únicamente podrá interponerse  recurso contencioso-administrativo.
c)  Un mes, si el acto fuera implícito. Transcurrido dicho plazo, únicamente podrá interponerse  recurso contencioso-administrativo, sin perjuicio, en su caso de la procedencia del recurso  extraordinario de revisión.
d)  Un mes, si el acto fuera expreso. Transcurrido dicho plazo, únicamente podrá interponerse  recurso contencioso-administrativo, sin perjuicio, en su caso de la procedencia del recurso  extraordinario de revisión.

PREGUNTA Nº 337.- Según el artículo 48.1 de  la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, indique cuáles de los siguientes  actos serán anulables:
a)  Los que sean constitutivos de infracción penal o se dicten como consecuencia de ésta.
b)  Los actos expresos o presuntos contrarios al ordenamiento jurídico por los que se  adquieren facultades o derechos cuando se carezca de los requisitos esenciales para su  adquisición.
c)  Los actos de la administración que incurran en cualquier infracción del ordenamiento  jurídico, incluso la desviación de poder.
d)  Los actos que se realicen fuera del tiempo establecido para ello.

PREGUNTA Nº 338.- Conforme al artículo 107 de la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, las Administraciones Públicas  podrán impugnar ante el orden jurisdiccional contencioso-administrativo:
a)  Los actos favorables para los interesados que sean anulables conforme a lo dispuesto en el  artículo 48, previa su declaración de lesividad para el interés público.
b)  Los actos no favorables para los interesados que sean anulables conforme a lo dispuesto en  el artículo 48, previa su declaración de lesividad para el interés público.
c)  Los actos favorables para los interesados que no sean anulables conforme a lo dispuesto en  el artículo 48, previa su declaración de lesividad para el interés público.
d)  Los actos no favorables para los interesados que no sean anulables conforme a lo dispuesto  en el artículo 48, previa su declaración de lesividad para el interés público.    

PREGUNTA Nº 339.- Según el artículo 109 de la  Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, las Administraciones Públicas  podrán revocar sus actos de gravamen o desfavorables, siempre que tal revocación no  constituya dispensa o exención no permitida por las leyes, ni sea contraria al principio de  igualdad, al interés público o al ordenamiento jurídico:
a)  En cualquier momento.
b)  Mientras no haya transcurrido el plazo de prescripción.
c)  Mientras no haya transcurrido el plazo de caducidad.
d)  En los primeros diez días desde que se dictó el acto.

PREGUNTA Nº 340.- Según se recoge en  la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, la interposición del recurso deberá expresar:  (señale la incorrecta)  
a)  El nombre y apellidos del recurrente, así como la identificación personal del mismo.
b)  El acto que se recurre, la razón de su impugnación y la legislación en que se base el recurso.
c)  Lugar, fecha, firma del recurrente, identificación del medio y en su caso, del lugar que se  señale a efectos de notificaciones.
d)  Órgano, centro o unidad administrativa al que se dirige y su correspondiente código de  identificación.

PREGUNTA Nº 341.- Las Administraciones Públicas podrán declarar la nulidad de las disposiciones  administrativas en los supuestos previstos en el artículo 47.2 de  la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, según  dispone el artículo 106 de la citada Ley:
a)  De oficio o a solicitud del interesado, previo dictamen favorable del Consejo de Estado u  órgano consultivo equivalente de la Comunidad Autónoma si lo hubiere.
b)  De oficio, previo dictamen favorable del Consejo de Estado u órgano consultivo equivalente  de la Comunidad Autónoma si lo hubiere.
c)  De oficio, previo dictamen favorable o no del Consejo de Estado u órgano consultivo  equivalente de la Comunidad Autónoma si lo hubiere.
d)  De oficio o a solicitud del interesado, previo dictamen favorable o no del Consejo de Estado  u órgano consultivo equivalente de la Comunidad Autónoma si lo hubiere.

PREGUNTA Nº 342.- Ponen fin a la vía administrativa conforme al artículo 114 de  la Ley 39/2015, de 1 de  octubre,  del Procedimiento Administrativo Común de las Administraciones Públicas: (Señale  la respuesta incorrecta)  :
a)  Las resoluciones de los recursos de alzada.
b)  Las resoluciones de los procedimientos a que se refiere el artículo 112.2 de la Ley 39/2015.
c)  Las resoluciones de los órganos administrativos que carezcan de superior jerárquico, en  todo caso.
d)  Los acuerdos, pactos, convenios o contratos que tengan la consideración de finalizadores  del procedimiento.    

PREGUNTA Nº 343.- Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las  Administraciones Públicas, las resoluciones administrativas que vulneren lo establecido en  una disposición reglamentaria:
a)  Son nulas.
b)  Son anulables.
c)  Son válidas.
d)  No son recurribles.

PREGUNTA Nº 344.- Contra las resoluciones y determinados actos de trámite, fundado en cualquiera de los  motivos de nulidad o anulabilidad previstos en los artículos 47 y 48 de la Ley 39/2015, de 1  de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas,  podrá interponerse por los interesados:
a)  Únicamente el recurso de alzada.
b)  Los recursos de alzada y potestativo de reposición.
c)  Los recursos de alzada y extraordinario de revisión.
d)  Los recursos de alzada, potestativo de reposición y extraordinario de revisión.

PREGUNTA Nº 345.- Según el artículo 109 de la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, las Administraciones Públicas  podrán rectificar los errores materiales, de hecho o aritméticos existentes en sus actos:
a)  Mientras no haya transcurrido el plazo de prescripción, de oficio.
b)  En cualquier momento, de oficio.
c)  Mientras no haya transcurrido el plazo de prescripción, de oficio o a instancia de los  interesados.
d)  En cualquier momento, de oficio o a instancia de los interesados.

PREGUNTA Nº 346.- Dispone  la Ley 39/2015,  de 1 de octubre,  del Procedimiento Administrativo Común de las  Administraciones Públicas, respecto al procedimiento iniciado de oficio de revisión de  disposiciones y actos nulos, que el transcurso del plazo:
a)  De 6 meses desde su inicio sin dictarse resolución producirá la caducidad del mismo.
b)  De 3 meses desde su inicio sin dictarse resolución producirá la caducidad del mismo.
c)  De 1 mes desde su inicio sin dictarse resolución producirá la caducidad del mismo.
d)  De 2 meses desde su inicio sin dictarse resolución producirá la caducidad del mismo.

PREGUNTA Nº 347.- Según   la Ley 39/2015,  de 1 de octubre,  del Procedimiento Administrativo Común de las  Administraciones Públicas, indique cuál de las siguientes afirmaciones es correctas:
a)  La nulidad o anulabilidad de un acto implica necesariamente la de los sucesivos en el  procedimiento.
b)  Los actos nulos o anulables que, sin embargo, contengan los elementos constitutivos de  otro distinto producirán los efectos de éste.
c)  El órgano que declare la nulidad o anule las actuaciones podrá disponer cuando estime  oportuno la conservación de aquellos actos y trámites cuyo contenido se hubiera  mantenido igual de no haberse cometido la infracción.
d)  No podrán convalidarse los actos anulables cuando el vicio consista en incompetencia no  determinante de nulidad.    

PREGUNTA Nº 348.- La interposición de cualquier recurso, tal y como se establece en  la Ley 39/2015,  de 1 de  octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:
a)  Suspenderá la ejecución del acto impugnado, en todo caso.
b)  Excepto en los casos en una disposición establezca lo contrario, no suspenderá la ejecución  del acto impugnado.
c)  Excepto en los casos en que una disposición establezca lo contrario, suspenderá la  ejecución del acto impugnado.
d)  No suspenderá la ejecución del acto impugnado, en ningún caso.

PREGUNTA Nº 349.- Si el recurso de alzada regulado en  la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, se hubiera interpuesto ante el  órgano que dictó el acto impugnado, éste deberá remitirlo al competente con su informe y  con una copia completa y ordenada del expediente en el plazo de:
a)  5 días.
b)  10 días.
c)  15 días.
d)  20 días.

PREGUNTA Nº 350.- Según el artículo 48. 2 de la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, el defecto de forma:
a)  Determina la nulidad de pleno derecho cuando el acto carezca de los requisitos formales  indispensables para alcanzar su fin o den lugar a la indefensión de los interesados.
b)  Determina la anulabilidad cuando el acto carezca de los requisitos formales indispensables  para alcanzar su fin o dé lugar a  indefensión de los interesados.
c)  Determina la nulidad de pleno derecho.
d)  Determina la anulabilidad.

PREGUNTA Nº 351.- Según el artículo 118.1 de  la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, cuando hayan de tenerse en cuenta  nuevos hechos o documentos recogidos en el expediente originario, se pondrán de  manifiesto a los interesados para que:
a)  En un plazo no inferior a diez días ni superior a quince, formulen las alegaciones y  presenten los documentos y justificantes que estimen procedentes. Se tendrán en cuenta  en la resolución de los recursos, hechos, documentos o alegaciones del recurrente, aun  cuando habiendo podido aportarlos en el trámite de alegaciones no lo haya hecho.
b)  En un plazo no superior a quince días ni inferior a diez, formulen las alegaciones y  presenten los documentos y justificantes que estimen procedentes. Se tendrán en cuenta  en la resolución de los recursos, hechos, documentos o alegaciones del recurrente, aun  cuando habiendo podido aportarlos en el trámite de alegaciones no lo haya hecho.
c)  En un plazo no inferior a diez días ni superior a quince, formulen las alegaciones y  presenten los documentos y justificantes que estimen procedentes. No se tendrán en  cuenta en la resolución de los recursos, hechos, documentos o alegaciones del recurrente,  a menos que habiendo podido aportarlos en el trámite de alegaciones no lo haya hecho.
d)  En un plazo no inferior a diez días ni superior a quince, formulen las alegaciones y  presenten los documentos y justificantes que estimen procedentes. No se tendrán en  cuenta en la resolución de los recursos, hechos, documentos o alegaciones del recurrente,  cuando habiendo podido aportarlos en el trámite de alegaciones no lo haya hecho.    

PREGUNTA Nº 352.- Respecto al recurso de alzada, transcurrido el plazo máximo para dictar y notificar  resolución sin que se produzca, salvo en el supuesto previsto en el artículo 24.1, tercer  párrafo, de la Ley 39/2015,  de 1 de octubre,  del Procedimiento Administrativo Común de las  Administraciones Públicas:
a)  Se podrá entender estimado el recurso.
b)  Se podrá entender desestimado el recurso.
c)  Se producirá la caducidad del recurso.
d)  Se producirá la suspensión del recurso.

PREGUNTA Nº 353.- Dispone el artículo 106 de  la Ley 39/2015,  de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, respecto a la revisión de  disposiciones y actos nulos, si el procedimiento se hubiera iniciado a solicitud de interesado  y transcurrido el plazo máximo sin dictarse resolución:
a)  Se producirá la caducidad del mismo.
b)  Se podrá entender la misma estimada por silencio administrativo.
c)  Se podrá entender la misma desestimada por silencio administrativo.
d)  Se producirá la invalidez del mismo.

PREGUNTA Nº 354.- Indique la opción correcta teniendo conforme a lo estipulado en el artículo 126.3 de  la Ley  39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones  Públicas:
a)  Transcurrido el plazo de dos meses desde la interposición del recurso extraordinario de  revisión sin haberse dictado y notificado la resolución, se entenderá desestimado,  quedando expedita la vía jurisdiccional contenciosa- administrativa.
b)  Transcurrido el plazo de tres meses desde la interposición del recurso extraordinario de  revisión sin haberse dictado y notificado la resolución, se entenderá desestimado,  quedando expedita la vía jurisdiccional contenciosa- administrativa.
c)  Transcurrido el plazo de seis meses desde la interposición del recurso extraordinario de  revisión sin haberse dictado y notificado la resolución, se entenderá desestimado,  quedando expedita la vía jurisdiccional contenciosa- administrativa.
d)  Transcurrido el plazo de cinco meses desde la interposición del recurso extraordinario de  revisión sin haberse dictado y notificado la resolución, se entenderá desestimado,  quedando expedita la vía jurisdiccional contenciosa- administrativa.

PREGUNTA Nº 355.- ¿Cuál de las siguientes es una de las circunstancias para que se pueda interponer el recurso  extraordinario de revisión regulado en el artículo 125.1 de  la Ley 39/2015,  de 1 de octubre,   del Procedimiento Administrativo Común de las Administraciones Públicas?
a)  Que al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios  documentos incorporados al expediente.
b)  Que aparezcan documentos de valor especial, y necesarios para la resolución del asunto  que, aunque sean posteriores, evidencien el error.
c)  Que aparezcan documentos declarados falsos por sentencia administrativa firme.
d)  Que el acto se hubiera dictado como consecuencia de prevaricación, cohecho, violencia,  maquinación fraudulenta u otra conducta punible.    

PREGUNTA Nº 356.- ¿Cuándo se entenderá suspendida la ejecución del acto impugnado según dispone el  artículo 117.3 de la Ley 39/2015,  de 1 de octubre,  del Procedimiento Administrativo Común  de las Administraciones Públicas?
a)  Si transcurrido dos meses desde que la solicitud de suspensión haya tenido entrada en el  registro electrónico de la Administración u Organismo competente para decidir sobre la  misma, el órgano a quien competa resolver el recurso no ha dictado y notificado resolución  expresa al respecto.
b)  Si transcurrido un mes desde que la solicitud de suspensión haya tenido entrada en el  registro electrónico de la Administración u Organismo competente para decidir sobre la  misma, el órgano a quien competa resolver el recurso no ha dictado y notificado resolución  expresa al respecto.
c)  Si transcurridos veinte días desde que la solicitud de suspensión haya tenido entrada en el  registro electrónico de la Administración u Organismo competente para decidir sobre la  misma, el órgano a quien competa resolver el recurso no ha dictado y notificado resolución  expresa al respecto.
d)  Si transcurridos treinta días desde que la solicitud de suspensión haya tenido entrada en el  registro electrónico de la Administración u Organismo competente para decidir sobre la  misma, el órgano a quien competa resolver el recurso no ha dictado y notificado resolución  expresa al respecto.

PREGUNTA Nº 357.- Según el artículo 124 de  la Ley 39/2015,  de 1 de octubre,  del Procedimiento  Administrativo Común de las Administraciones Públicas, respecto del recurso potestativo de  reposición:
a)  El plazo máximo para dictar y notificar la resolución del recurso será de dos meses.
b)  El plazo máximo para dictar y notificar la resolución del recurso será de tres meses.
c)  El plazo máximo para dictar y notificar la resolución del recurso será de un mes.
d)  El plazo máximo para dictar y notificar la resolución del recurso será de un año.

PREGUNTA Nº 358.- Atendiendo al artículo 109.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, la revocación hace referencia a:
a)  Actos nulos de pleno derecho.
b)  Actos anulables.
c)  Actos nulos de pleno derecho o anulables.
d)  Actos de gravamen o desfavorables.        

PREGUNTA Nº 359.- ¿Cuál es la Ley que regula las Haciendas Locales?
a)  La Ley Reguladora de las Haciendas Locales 3/2004, de 5 de marzo.
b)  El Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido  de la Ley Reguladora de las Haciendas Locales.
c)  El Real Decreto Ley 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la  Ley Reguladora de las Haciendas Locales.
d)  La Ley de Haciendas Locales y Régimen Local 2/2004, de 5 de marzo.

PREGUNTA Nº 360.- Según dispone el artículo 3 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local, ¿cuáles son las Entidades Locales territoriales?
a)  El Municipio y la Provincia.
b)  El Municipio, la Provincia y la Isla en los archipiélagos balear y canario.
c)  El Municipio, la Provincia, las Áreas Metropolitanas y las Mancomunidades de Municipios.
d)  Las Comarcas, las Áreas Metropolitanas y Las Mancomunidades de Municipios.

PREGUNTA Nº 361.- El artículo 5 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local,  establece que las Entidades Locales, de acuerdo con la Constitución y las leyes, tendrán plena  capacidad jurídica para una serie de potestades, entre las que se encuentran:
a)  Participar en  celebración de contratos privados en sus ámbitos territoriales.
b)  Adquirir, poseer, reivindicar, permutar, gravar o enajenar toda clase de bienes.
c)  Únicamente adquirir, poseer, reivindicar, permutar, gravar o enajenar toda clase de bienes.
d)  Con carácter excepcional podrán adquirir, poseer, reivindicar, permutar, gravar o enajenar  toda clase de bienes.

PREGUNTA Nº 362.- En la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local, dispone que las  Entidades Locales, en su calidad de Administraciones públicas de carácter territorial, y dentro  de la esfera de sus competencias, corresponden en todo caso a los municipios, las provincias  y las islas, una serie de potestades, regulándose las mismas en el artículo:
a)  4
b)  5
c)  6
d)  2.1

PREGUNTA Nº 363.- En todos los Ayuntamientos ha de existir el siguiente órgano:
a)  La Junta de Gobierno.
b)  Las Juntas Municipales de Distrito.
c)  La Comisión Especial de Cuentas.
d)  Los Concejales que ostentes delegaciones.    

PREGUNTA Nº 364.- En relación a los Vicepresidentes de la Diputación, según dispone la Ley 7/1985, de 2 de  abril, Reguladora de las Bases de Régimen Local:
a)  Son nombrados por el Pleno al comienzo de su mandato.
b)  Son como mucho dos.
c)  Son designados libremente por el presidente de entre todos los Diputados.
d)  Sustituyen al Presidente en caso de enfermedad por el orden de su nombramiento.

PREGUNTA Nº 365.- ¿En qué norma se recoge la posibilidad de crear agrupaciones de municipios distintos de la  provincia?
a)  Esa posibilidad es inconstitucional, ya que se prohíbe expresamente en la Constitución  Española.
b)  Se regula únicamente en el Ley 7/1985, de 2 de abril.
c)  Se reconoce expresamente en la Constitución en el artículo 141.
d)  Se reconoce esa posibilidad en la Constitución  Española en el artículo 142.

PREGUNTA Nº 366.- Conforme al artículo 15 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local, ¿qué constituye el conjunto de personas inscritas en el Padrón municipal?
a)  Los vecinos del municipio.
b)  La población del municipio.
c)  Término municipal.
d)  Ciudadanos municipales.

PREGUNTA Nº 367.- ¿Qué dispone el artículo 19 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local, sobre el Gobierno y la administración municipal?
a)  El Gobierno y la administración municipal corresponde al Ayuntamiento, integrado por el  alcalde y los Concejales.
b)  El Gobierno y la administración municipal corresponde al Ayuntamiento y a la Junta de  Gobierno Local.
c)  El Gobierno y administración municipal corresponde al Pleno.
d)  El Gobierno y administración municipal corresponde únicamente al Alcalde.

PREGUNTA Nº 368.- El artículo 137 de la Constitución Española reconoce la autonomía para la gestión de sus  respectivos intereses:
a)  A las Comunidades Autónomas que se constituyan.
b)  A los Municipios, Provincias e Islas.
c)  A los Municipios, provincias y Comunidades Autónomas que se constituyan.
d)  A los Municipios, Provincias, Islas y Comunidades Autónomas que se constituyan.

PREGUNTA Nº 369.- ¿A quién corresponde la jefatura superior del personal de la Diputación según establece la  Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  Al Pleno en todo caso.
b)  Al Presidente en todo caso.
c)  Al Diputado-Delegado de personal.
d)  Al Presidente o al Diputado Provincial.    

PREGUNTA Nº 370.- ¿Cómo está constituido el Pleno de la Diputación según el artículo 33.1 de la Ley 7/1985,  de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  Por el Presidente y los Diputados.
b)  Los miembros que disponga cada Reglamento Orgánico.
c)  Los Diputados Provinciales.
d)  El Presidente, el Secretario y los Diputados.

PREGUNTA Nº 371.- Respecto a las potestades que se le reconocen en el artículo 4 a los Municipios, Provincias  e Islas, ¿cómo será de aplicación para las entidades territoriales de ámbito inferior al  municipal, a las comarcas, áreas metropolitanas y demás entidades locales?
a)  Será la Constitución Española la que determine cuáles de esas potestades les serán de  aplicación a dichas Entidades.
b)  Serán sus propios Estatutos reguladores los que determinen dicha aplicación.
c)  Las entidades territoriales de ámbito inferior no tienen posibilidad de ejercer dichas  potestades.
d)  Serán las Leyes de las Comunidades Autónomas las que concreten cuales de aquellas  potestades serán de aplicación.

PREGUNTA Nº 372.- Entre los órganos necesarios de la Diputación se encuentra, según la Ley 7/1985, de 2 de  abril, Reguladora de las Bases de Régimen Local:
a)  Los Tenientes de Alcalde.
b)  Los Diputados Delegados.
c)  La Junta de Gobierno.
d)  Las Juntas de distrito.

PREGUNTA Nº 373.- Las Áreas Metropolitanas, según la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local:
a)  Son de preceptiva creación en los términos fijados en la misma.
b)  Son entidades locales.
c)  Carecen de la consideración de entidad local.
d)  Equivalen a las Mancomunidades allí donde no existen.

PREGUNTA Nº 374.- La alteración de los límites provinciales:
a)  Habrá de ser aprobada por las Cortes Generales mediante Ley Orgánica.
b)  Se encuentra expresamente prohibido en la Constitución Española.
c)  Se atribuye a las Comunidades Autónomas a las que afecte, mediante Ley de su  Parlamento.
d)  Corresponde a las comunidades Autónomas, previo informe preceptivo

PREGUNTA Nº 375.- ¿Qué consideración tiene la Provincia según la Ley 7/1985, de 2 de abril, Reguladora de las  Bases de Régimen Local?
a)  Una Entidad local básica.
b)  Una Entidad local territorial.
c)  El órgano de administración de las Diputaciones.
d)  Una entidad integrante en la Comunidad Autónoma.    

PREGUNTA Nº 376.- Entre los elementos del municipio de encuentra:
a)  El Ayuntamiento.
b)  La autonomía.
c)  El territorio.
d)  La Junta de Gobierno Local.

PREGUNTA Nº 377.- ¿En qué Ley se recoge expresamente la competencia de la Comunidad Autónoma de  Andalucía en materia de Régimen Local?
a)  En el artículo 2 de la Ley 7/1985, de 2 de abril, reguladora de las bases del régimen local.
b)  En el artículo 137 de la Constitución Española.
c)  En el artículo 60 del Estatuto de Autonomía de Andalucía aprobado por la Ley Orgánica  2/2007.
d)  No se recoge expresamente.

PREGUNTA Nº 378.- Según el artículo 141 de la Constitución, la entidad local que constituye la división  territorial para el cumplimiento de las actividades del Estado es:
a)  La Provincia.
b)  El Municipio.
c)  La Diputación Provincial.
d)  La Mancomunidad de Municipios.

PREGUNTA Nº 379.- En relación a las Mancomunidades de Municipios, el artículo 44 de la Ley 7/1985, de 2 de  abril, de Bases de Régimen Local, establece que:
a)  Son entidades Locales formadas por la asociación de Municipios.
b)  Son Entidades Locales formadas por la asociación de Municipios, pertenecientes a una  misma o varias provincias limítrofes, para la ejecución en común de obras o la prestación  de servicios de su competencia.
c)  No tienen personalidad y capacidad jurídica para el cumplimiento de sus fines específicos.
d)  La elaboración de sus estatutos y el procedimiento de aprobación de los mismos se  determinará por las estipulaciones fijadas en la legislación básica estatal.

PREGUNTA Nº 380.- Según el artículo 6 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen  Local, las Entidades Locales sirven con objetividad los intereses públicos que les están  encomendados y actúan de acuerdo con:
a)  Los principios de eficacia, sostenibilidad, descentralización y coordinación, con  sometimiento pleno a la ley y al Derecho.
b)  Los principios de transparencia, eficacia y coordinación, con sometimiento pleno a la ley y  al Derecho.
c)  Los principios de eficacia, descentralización y coordinación, con sometimiento pleno a la ley  y al Derecho.
d)  Los principios de eficacia, descentralización, desconcentración y coordinación, con  sometimiento pleno a la ley y al Derecho.    

PREGUNTA Nº 381.- ¿Qué son las Áreas Metropolitanas según el artículo 43 de la Ley 7/1985, de 2 de abril,  Reguladora de las Bases de Régimen Local?
a)  Son Entidades Locales creadas por acuerdo del Consejo de Ministros que están integradas  por Municipios de grandes aglomeraciones urbanas.
b)  Son Entidades Locales creadas por las Comunidades Autónomas que están integradas por  Municipios de grandes aglomeraciones urbanas.
c)  Son Entidades Locales creadas por las Diputaciones Provinciales que están integradas por  Municipios de grandes aglomeraciones urbanas.
d)  Son Entidades Locales creadas por las Comunidades autónomas, que están integradas por  Ayuntamientos y Corporaciones de grandes aglomeraciones urbanas.

PREGUNTA Nº 382.- Según el artículo 10 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen  Local,  la Administración Local y las demás Administraciones Públicas:
a)  Ajustarán sus relaciones recíprocas a los deberes de información mutua, colaboración,  coordinación y respeto a los ámbitos competenciales respectivos.
b)  Ajustarán sus relaciones recíprocas a los deberes de información mutua, colaboración,  transparencia y respeto a los ámbitos competenciales respectivos.
c)  Ajustarán sus relaciones recíprocas a los deberes de información mutua, colaboración,  eficacia, coordinación y respeto a los ámbitos competenciales respectivos
d)  Ajustarán sus relaciones recíprocas a los deberes de lealtad institucional, información  mutua, colaboración, coordinación y respeto a los ámbitos competenciales respectivos.

PREGUNTA Nº 383.- En relación con la creación o supresión de municipios o su alteración, dispone el artículo 13  de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local, que requerirán:
a)  Informe de la Administración que ejerza la tutela financiera.
b)  Audiencia de los municipios interesados en todo caso y dictamen del Consejo de Estado o  del órgano consultivo superior del Consejo de Gobierno de la Comunidad Autónoma  concernida.
c)  Únicamente audiencia de los municipios interesados.
d)  Audiencia de los municipios interesados en todo caso y dictamen del Consejo de Estado o  del órgano consultivo superior del Consejo de Gobierno de la Comunidad Autónoma  concernida, y el Informe de la Administración que ejerza la tutela financiera.

PREGUNTA Nº 384.- Según el artículo 43 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen  Local, la característica de los núcleos que se integran en Áreas Metropolitanas:
a)  Suponen que entre sus núcleos de población hay algún municipio de más de 20.000 por lo  que se hace necesaria la planificación conjunta y la coordinación de determinados servicios  y obras.
b)  Suponen que entre sus núcleos de población existe algún municipio declarado zona de  intervención preferente, que hace necesaria la planificación conjunta y la coordinación de  determinados servicios y obras.
c)  Suponen que entre sus núcleos de población existen vinculaciones económicas y sociales  que hacen necesaria la planificación conjunta y la coordinación de determinados servicios y  obras.
d)  Suponen que entre sus núcleos de población existen desequilibrios estructurales que hacen  necesaria la planificación conjunta y la coordinación de determinados servicios y obras.    

PREGUNTA Nº 385.- ¿Cómo deberá efectuarse el nombramiento del personal directivo que, en su caso, hubiera  en las Diputaciones, según el artículo 32 bis de la Ley 7/1985, de 2 de abril, Reguladora de las  Bases de Régimen Local?
a)  De acuerdo a los criterios de competencia profesional, igualdad, y experiencia entre  funcionarios de carrera que pertenezcan a cuerpos o escalas clasificados en el subgrupo A1  o A2.
b)  De acuerdo a criterios de competencia profesional y experiencia, entre funcionarios de  carrera del Estado, de las Comunidades autónomas, de las Entidades Locales o con  habilitación de carácter nacional.
c)  Entre funcionarios de carrera o interinos del subgrupo A1 o A2.
d)  Lo nombrará el Presidente de la diputación, en todo caso.

PREGUNTA Nº 386.- ¿A quién corresponde la competencia para alterar los límites provinciales?
a)  A las Cortes Generales, mediante Ley Orgánica.
b)  A las Comunidades Autónomas, cuando lo dispongan sus Estatutos expresamente.
c)  A los Parlamentos Autonómicos.
d)  Lo deciden los vecinos de los municipios que pudieran verse afectados.

PREGUNTA Nº 387.- Señale la respuesta correcta respecto a la organización provincial, de acuerdo con lo  previsto en  la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local:
a)  El Presidente y los Vicepresidentes son los únicos que existen en todas las Diputaciones.
b)  Existirán en todas las Diputaciones órganos que tengan por objeto el estudio, informe o  consulta de los asuntos que han de ser sometidos a la decisión de la Junta de Gobierno.
c)  Los órganos complementarios serán regulados por el Reglamento de la Diputación.
d)  El Presidente, los Vicepresidentes, la Junta de Gobierno y el Pleno existen en todas las  Diputaciones.

PREGUNTA Nº 388.- Definición de la Provincia según el artículo 31 de la Ley 7/1985, de 2 de abril, Reguladora  de las Bases de Régimen Local:
a)  Entidad Local determinada por la agrupación de Municipios, con personalidad jurídica  propia y plena capacidad para el cumplimiento de sus fines.
b)  Entidad local territorial.
c)  Entidad local básica con personalidad jurídica.
d)  Entidad Local determinada por la agrupación de Municipios, con personalidad jurídica plena  y propia capacidad para el cumplimiento de sus objetivos.

PREGUNTA Nº 389.- Según el artículo 25.2 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen  Local, el Municipio ostenta competencias en materia de:
a)  Protección de medio ambiente urbano.
b)  Transporte interurbano de viajeros.
c)  Ordenación del tráfico en vías interurbanas.
d)  Protección de carreteras.

PREGUNTA Nº 390.- ¿Qué regula el artículo 142 de la Constitución  Española?
a)  Las Haciendas Locales.
b)  El Municipio.
c)  La elección de los Alcaldes.
d)  Las Comunidades Autónomas.  

PREGUNTA Nº 391.- ¿En qué materias el Municipio ejercerá como competencias propias, en todo caso, en los  términos de la legislación del Estado y de las Comunidades Autónomas, según el artículo 25  de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  Protección civil.
b)  Transporte colectivo urbano de viajeros.
c)  Prevención y extinción de incendios.
d)  Abastecimiento de agua potable a domicilio y evacuación y tratamiento de aguas  residuales.

PREGUNTA Nº 392.- ¿Quiénes son los vecinos de un municipio según establece la Ley 7/1985, de 2 de abril,  Reguladora de las Bases de Régimen Local?
a)  Las personas residentes en el Municipio.
b)  Las personas inscritas en el Padrón Municipal.
c)  Los españoles y extranjeros mayores de edad residentes en el Municipio.
d)  Las personas inscritas en el Padrón, con una antigüedad de 3 meses de dicha inscripción.

PREGUNTA Nº 393.- ¿Cómo se nutrirán fundamentalmente las Haciendas Locales según la Constitución  Española?
a)  De los tributos impuestos por las Comunidades Autónomas.
b)  De tributos propios y participación en los del Estado y las Comunidades Autónomas.
c)  De los tributos propios, principalmente.
d)  De la participación en los tributos del Estado y de tributos cedidos.

PREGUNTA Nº 394.- ¿Cómo es elegido el Alcalde, de acuerdo a la Ley 7/1985, de 2 de abril, Reguladora de las  Bases de Régimen Local?
a)  Por los Concejales del Ayuntamiento.
b)  Por los Concejales o por los vecinos.
c)  Por sufragio universal, libre, y secreto, en todos los supuestos.
d)  Por los vecinos en todo caso.

PREGUNTA Nº 395.- ¿A quién le corresponde aprobar la oferta de empleo público en el ámbito municipal,  según la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  Al Pleno.
b)  A la Junta de Gobierno.
c)  Al Alcalde.
d)  Al Alcalde de acuerdo con el presupuesto y la plantilla aprobados por la Junta de Gobierno.

PREGUNTA Nº 396.- Los Tenientes de Alcalde, según el artículo 23 de la Ley 7/1985, de 2 de abril, Reguladora  de las Bases de Régimen Local:
a)  Son nombrados por el Pleno al comienzo de su mandato.
b)  No pueden exceder, en su número, de tres.
c)  Han de ser nombrados de entre los miembros de la Junta de gobierno, donde ésta exista.
d)  Pueden ser cesados por el Pleno.    

PREGUNTA Nº 397.- ¿Qué Municipios funcionan en Concejo Abierto, según la Ley 7/1985, de 2 de abril,  Reguladora de las Bases de Régimen Local?
a)  Los Municipios de menos de 300 habitantes que así lo acuerden.
b)  Los Municipios de menos de 100 habitantes.
c)  Los Municipios de menos de 500 habitantes.
d)  Los Municipios que tradicional y voluntariamente cuenten con ese singular régimen de  gobierno y administración.

PREGUNTA Nº 398.- ¿Qué nombre recibe la administración propia de las islas en los archipiélagos balear y  canario, según se dispone en el artículo 141.4 de la Constitución Española?
a)  Comunidades Autónomas.
b)  Mancomunidades de Municipios.
c)  Diputaciones Insulares.
d)  Los Consejos y Cabildos.

PREGUNTA Nº 399.- Las Diputaciones Provinciales se mencionan expresamente en la Constitución Española de  1978, en el artículo:
a)  137.
b)  142.1
c)  141.1
d)  141.2.        

PREGUNTA Nº 400.- ¿Cuál es el objeto de la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía, según  el artículo 2 de la Ley?
a)  Con carácter general, determinar las competencias y potestades de los municipios y de los  demás entes locales.
b)  Determinar el régimen económico de los bienes de las entidades locales.
c)  Regular las relaciones entre las entidades locales de Andalucía y las instituciones de la Junta  de Andalucía, y de otras Comunidades Autónomas.
d)  Determinar las competencias y potestades de los municipios y de los demás entes locales, y  las reglas por las que hayan de regirse las eventuales transferencias y delegaciones a estos  de competencias de la Comunidad Autónoma de Andalucía.

PREGUNTA Nº 401.- Señale cuál de las siguientes se corresponde con la definición de Provincia, según dispone  el artículo 3 de la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía:
a)  La provincia es la entidad territorial básica de Andalucía, instancia de representación  política y cauce inmediato de  participación ciudadana en los asuntos públicos.
b)  La provincia es la entidad territorial básica de Andalucía.
c)  La provincia es una entidad local, determinada por la agrupación de municipios, cuya  principal función, de conformidad con los mismos, es garantizar el ejercicio de  competencias municipales y facilitar la articulación de las relaciones de los municipios entre  sí y con la Comunidad Autónoma de Andalucía.
d)  La provincia es una entidad territorial con plena capacidad jurídica, plena y propia.

PREGUNTA Nº 402.- De las siguientes, ¿cuál es competencia propia de los municipios según dispone el artículo  9 de Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  Ordenación, gestión y prestación del servicio de alumbrado público.
b)  Promoción, defensa y protección de la salud general y municipal.
c)  Organización de las condiciones de seguridad de los servicios organizados en espacios  oficiales.
d)  Protección del turismo.

PREGUNTA Nº 403.- ¿En qué artículo de la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía, se  regula la Autonomía Local de los municipios y Provincias de Andalucía?
a)  En el artículo 2.
b)  En el artículo 3.
c)  En el artículo 6.
d)  En el artículo 4.    

PREGUNTA Nº 404.- ¿Qué competencias abarca, en materia de educación, el municipio conforme al artículo 9  de la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  La vigilancia del cumplimiento de la escolaridad obligatoria y no obligatoria.
b)  La asistencia a la Consejería competente en materia de educación en la aplicación de los  criterios de admisión del alumnado en los centros docentes sostenidos con fondos públicos.
c)  La protección de los edificios destinados a centros públicos de  segundo ciclo de educación  infantil y de educación primaria.
d)  La coordinación en los planes implantados en los centros públicos.

PREGUNTA Nº 405.- ¿Cómo se determinan las competencias de los municipios y de las provincias según la Ley  5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  Por ley.
b)  Por Reglamento.
c)  Conforme a lo dispuesto en la Constitución Española.
d)  Por Ley Orgánica.

PREGUNTA Nº 406.- ¿Qué dispone el artículo 3.4 de la Ley 5/2010, de 11 de junio de Autonomía Local en  Andalucía, sobre las entidades locales complementarias?
a)  Las entidades locales complementarias podrán crearse por ley, o de acuerdo con la  presente ley.
b)  Las entidades locales complementarias son entidades territoriales.
c)  Las entidades locales complementarias no alterarán, salvo autorización del Parlamento  Andaluz, la estructura territorial de Andalucía.
d)  Las Entidades locales complementarias únicamente podrán crearse por acuerdo de otras  entidades locales territoriales.

PREGUNTA Nº 407.- ¿Cómo pueden ejercer sus competencias los municipios conforme al artículo 10 de la Ley  5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  Los municipios podrán asociarse entre sí o solo con otras entidades locales.
b)  La única manera de ejercer las competencias es mediante la asociación entre ellos.
c)  Los municipios podrán asociarse entre sí o con otras entidades locales, administraciones  públicas o entidades públicas o privadas sin ánimo de lucro.
d)  Los municipios podrán celebrar contratos con otras entidades para la obtención de un  ejercicio de sus competencias más efectivo.

PREGUNTA Nº 408.- ¿En qué artículos de la Ley 5/2010, de 11 de junio, de Administración Local de Andalucía se  encuentran reguladas las competencias propias de las provincias?
a)  Se regulan en la Sección 3ª, Capítulo II, Título I en los artículos del 11 al 14.
b)  Se regulan en la Sección 2ª, Capítulo II, Título I en los artículos del 11 al 14.
c)  Se regulan en la Sección 3ª, Capítulo II, Título I en los artículos del 11 al 15.
d)  Se regulan en la Sección 4ª, Capítulo II, Título I en los artículos del 11 al 16.

PREGUNTA Nº 409.- ¿Qué regula el artículo 4 de la Ley 5/2010, de 11 de junio de Autonomía Local en  Andalucía?
a)  La Autonomía Local.
b)  La capacidad jurídica de los municipios y provincias.
c)  La Organización territorial de Andalucía.
d)  La Potestad de auto organización.  

PREGUNTA Nº 410.- Indique cuáles son las competencias materiales de la provincia según dispone el artículo 15  de la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía:
a)  Carreteras municipales, los archivos de interés provincial y los museos e instituciones  culturales de interés provincial.
b)  Carreteras provinciales, los archivos de interés provincial y los museos e instituciones  culturales de interés provincial.
c)  Fundamentalmente, los archivos de interés provincial  y municipal.
d)  Los bienes artísticos de interés provincial.

PREGUNTA Nº 411.- ¿Cómo se determinarán los requisitos de asistencia y las formas de financiación relativos a  la asistencia técnica de la provincia al municipio regulada en el artículo 12 de la Ley 5/2010,  de 11 de junio de Autonomía Local en Andalucía?
a)  Se determinarán a través de reglamentos municipales.
b)  Lo determinará la Comunidad Autónoma.
c)  Se determinará por norma provincial.
d)  Se determinará mediante acuerdo entre provincia y municipio.

PREGUNTA Nº 412.- ¿Existe alguna condición en lo que a potestad de auto organización se refiere, regulada en  el artículo 5 de la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  Si, conforme al art. 5 de la Ley 5/2010, de 11 de junio, los municipios y provincias habrán de  contar con los órganos necesarios, previstos en la Constitución Española.
b)  No, conforme al art. 5 de la Ley 5/2010, de 11 de junio, los municipios y provincias tendrán  plena potestad de auto organización en cuanto a sus órganos y régimen se refieren.
c)  Si, conforme al art. 5 de la Ley 5/2010, de 11 de junio, el funcionamiento, régimen de  acuerdos y estatuto de miembros de los órganos de los municipios y de las provincias, se  ajustarán a lo que la legislación básica establezca, conforme al principio de lealtad  institucional.
d)  Si, conforme al art. 5 de la Ley 5/2010, de 11 de junio, los municipios y provincias habrán de  contar con los órganos necesarios, previstos en la legislación básica sobre régimen local,  para su gobierno y administración.

PREGUNTA Nº 413.- ¿Qué dispone el artículo 16 de la Ley 5/2010, de 11 de junio de Autonomía Local en  Andalucía respecto a la Transferencia y Delegación de Competencias?
a)  La Junta de Andalucía podrá transferir competencias a los municipios, o delegarlas con  carácter ordinario en estos o en las provincias.
b)  Las instituciones jurídicas de la transferencia y delegación de competencias servirán al  principio de especificación y vendrán fundamentadas por características demográficas,  geográficas, funcionales y sociales de los distintos entes locales.
c)  El ejercicio de las competencias objeto de transferencia o delegación podrá ser ejercido por  otros entes locales cuando así lo prevea expresamente la provincia.
d)  En el marco de la normativa vigente y respetando la voluntad de las entidades afectadas,  por razones de economía y transparencia, la Junta de Andalucía podrá transferir  competencias a los municipios.    

PREGUNTA Nº 414.- ¿Cómo se transfieren las competencias a los municipios según dispone el artículo 17 de la  Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  Mediante ley, a iniciativa del Parlamento Andaluz.
b)  A iniciativa del Consejo de Gobierno de la Junta de Andalucía, mediante ley.
c)  A iniciativa de la Comunidad Autónoma de Andalucía.
d)  A iniciativa del Consejo Andaluz de Concertación Local, mediante ley.

PREGUNTA Nº 415.- ¿Cuáles son los criterios para determinar los requisitos de asistencia y las formas de  financiación regulados en el artículo 12 de la Ley 5/2010, de 11 de junio de Autonomía Local  en Andalucía?
a)  Criterios de atención preferente a los municipios de mayor población y a los que tengan  suficiente capacidad económica.
b)  Criterios de atención preferente a los municipios de menor población y a los municipios de  insuficiente capacidad económica y de gestión, así como la urgencia de la asistencia  requerida.
c)  Atendiendo únicamente a criterios de capacidad económica.
d)  Atendiendo principalmente a la urgencia de la asistencia que es requerida.

PREGUNTA Nº 416.- ¿Qué es necesario para que sea efectiva la delegación del ejercicio de competencias en los  municipios y provincias por parte de la Comunidad Autónoma, según el artículo 19 de la Ley  5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  Se requiere la aceptación expresa de la entidad local delegada y la cesión de uso de todos  los materiales y recursos necesarios. En caso de aceptación, no se podrá delegar en dicha  entidad durante al menos, el año siguiente.
b)  Se requiere la aceptación expresa de la entidad local delegada y la cesión de uso de los  medios materiales, las dotaciones económicas y financieras y, en su caso, la adscripción de  los recursos humanos necesarios para su desempeño.
c)  Se requiere la aceptación expresa en el plazo determinado en la delegación, de la entidad  local delegada y la cesión de uso de los medios materiales, las dotaciones económicas y  financieras y, en su caso, la adscripción de los recursos humanos necesarios para su  desempeño.
d)  Se requiere el respeto por parte de la entidad local de la competencia delegada, la cual se  ejercerá respetando el principio de responsabilidad.          

PREGUNTA Nº 417.- ¿Qué dispone el artículo 18 de la Ley 5/2010, de 11 de junio de Autonomía Local en  Andalucía sobre la suspensión y revocación de la transferencia hecha a los municipios?
a)  Por razones de interés general, en caso de grave incumplimiento de las obligaciones que los  municipios afectados asumen en virtud de las transferencias de competencias de la  Comunidad Autónoma de Andalucía, el Consejo de Gobierno de la Junta de Andalucía podrá  suspender por tiempo determinado, no inferior a un año, el ejercicio de la competencia por  el municipio, previa audiencia del Consejo Andaluz de Gobierno Locales y de la entidad o  entidades locales afectadas.
b)  La Comunidad Autónoma, podrá proponer al Parlamento la revocación de la transferencia,  que deberá aprobarse por ley, así como la devolución de bienes y el pago de costas.
c)  Por razones de interés general, en caso de grave incumplimiento de las obligaciones que los  municipios afectados asumen en virtud de las transferencias de competencias de la  Comunidad Autónoma de Andalucía, el Consejo de Gobierno de la Junta de Andalucía podrá  suspender por tiempo determinado, no superior a un año, el ejercicio de la competencia  por el municipio, previa audiencia del Consejo Andaluz de Gobierno Locales y de la entidad  o entidades locales afectadas.
d)  Asimismo, la Provincia, podrá proponer al Parlamento la revocación de la transferencia,  que deberá aprobarse por ley, así como la devolución de bienes y el pago de costas.

PREGUNTA Nº 418.- Señale la respuesta correcta según lo dispuesto en los artículos 9, 11 y 14 de la Ley 5/2010,  de 11 de junio de Autonomía Local en Andalucía:
a)  La planificación, programación y gestión de viviendas y participación en la planificación de  la vivienda protegida, es una competencia delegada de los municipios andaluces.
b)  La ordenación, gestión y prestación del servicio de limpieza viaria es una competencia  propia de los municipios andaluces.
c)  La planificación y gestión de actividades culturales y promoción de la cultura es una  competencia propia de las provincias andaluzas.
d)  El asesoramiento jurídico, técnico y económico, incluida la representación y defensa  jurídica en vía administrativa y jurisdiccional, forma parte de los servicios materiales que le  presta la provincia al municipio andaluz.

PREGUNTA Nº 419.- Se recogen en el artículo 11 de la Ley 5/2010, de 11 de junio, las competencias de  asistencia a los municipios, respecto a las cuales podemos afirmar lo siguiente:
a)  La asistencia provincial será siempre obligatoria.
b)  La asistencia provincial podrá ser obligatoria o voluntaria.
c)  La asistencia provincial podrá ser obligatoria, cuando la provincia deba prestarla a solicitud  de los municipios, o concertada.
d)  La asistencia provincial será voluntaria a solicitud de los municipios.

PREGUNTA Nº 420.- ¿Dónde se encuentran reguladas las relaciones financieras de la Comunidad Autónoma de  Andalucía con las entidades locales?
a)  En el Estatuto de Autonomía de Andalucía.
b)  Dichas relaciones se establecen mediante acuerdos privados entre ambas partes.
c)  En la Ley 5/2010 de 11 de junio, de Autonomía Local de Andalucía.
d)  No se encuentran reguladas expresamente.    

PREGUNTA Nº 421.- Principios en los que se basa el procedimiento de la solicitud de asistencia técnica de la  provincia al municipio: (artículo 12 de la Ley 5/2010, de 11 de junio de Autonomía Local en  Andalucía)  
a)  Eficacia, transparencia y celeridad.
b)  Eficiencia, eficacia y transparencia.
c)  Eficacia, publicidad y transparencia.
d)  Eficacia, transparencia y coordinación.

PREGUNTA Nº 422.- ¿Cuál de las siguientes no es una competencia propia del municipio según el artículo 9 de  la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  Ejecución de las políticas de inmigración a través de la acreditación del arraigo para la  integración social de inmigrantes, así como la acreditación de la adecuación de la vivienda  para el reagrupamiento familiar de inmigrantes.
b)  Provisión de medios materiales y humanos para el ejercicio de las funciones de los juzgados  de paz.
c)  Planificación, programación y gestión de viviendas y participación en la planificación de la  vivienda protegida.
d)  Elaboración del Plan y Mapa Regional de Servicios Sociales de Andalucía.

PREGUNTA Nº 423.- Señale la respuesta correcta respecto a la colaboración financiera a la que se refiere el  artículo 24 de la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía:
a)  En ningún caso la Comunidad Autónoma podrá establecer programas de colaboración  financiera específicas para materias concretas.
b)  La determinación de las entidades beneficiarias responderá a criterios subjetivos y  objetivos y estará supeditada a su aceptación.
c)  La determinación de las entidades beneficiarias responderá a criterios objetivos y estará  supeditada a su aceptación.
d)  La determinación de las entidades beneficiarias responderá únicamente a criterios   objetivos y estará supeditada a su aceptación.

PREGUNTA Nº 424.- ¿En qué cosiste la Encomienda de gestión regulada en la Ley 5/2010, de 11 de junio de  Autonomía Local en Andalucía?
a)  La Administración de la Junta de Andalucía podrá acordar con las entidades locales y con  sus entes dependientes o vinculados la realización de actividades de carácter material,  técnico o de servicios de su competencia, en el marco de la legislación autonómica.
b)  La Administración de la Junta de Andalucía podrá acordar con los municipios la realización  de actividades de carácter material, técnico o de servicios de su competencia, en el marco  de la legislación autonómica.
c)  La Junta de Andalucía podrá acordar con las entidades locales y con sus entes dependientes  o vinculados la realización de actividades de carácter material, técnico o de servicios de su  competencia, en el marco de la legislación autonómica y estatal.
d)  El Consejo de Gobierno de la Junta de Andalucía podrá acordar con las entidades locales y  con sus entes dependientes o vinculados la realización de actividades de carácter material,  técnico o de servicios de su competencia, en el marco de la legislación autonómica y  estatal.    

PREGUNTA Nº 425.- ¿Cuál de las siguientes no es una competencia material de la provincia según se regula en  el artículo 15 de Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía?:
a)  Carreteras municipales.
b)  Los archivos de interés provincial.
c)  Los museos de interés provincial.
d)  Las instituciones culturales de interés provincial.

PREGUNTA Nº 426.- ¿Cómo se consideran las competencias locales según el artículo 6 de la Ley 5/2010, de 11  de junio de Autonomía Local en Andalucía?
a)  Las competencias locales tienen la consideración de propias y mínimas, y no podrán ser  ampliadas por las leyes sectoriales.
b)  Las competencias locales tienen la consideración de propias y mínimas, y podrán ser  ampliadas por las leyes sectoriales.
c)  Las competencias locales tienen la consideración de mínimas.
d)  Las competencias locales tienen la consideración de máximas.

PREGUNTA Nº 427.- ¿Qué principios rigen el procedimiento de elaboración de la asistencia económica de la  provincia al municipio según la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía?
a)  Se regirá por los principios de transparencia y publicidad de las distintas actuaciones,  informes y alegaciones municipales y provinciales y tendrá 8  fases.
b)  Se regirá por los principios de transparencia y eficiencia de las distintas actuaciones,  informes y alegaciones de los Ayuntamientos.
c)  Se regirá por los principios de transparencia, publicidad y eficiencia  de las distintas  actuaciones, informes y alegaciones municipales y provinciales.
d)  Se regirá por el principio de transparencia de las distintas actuaciones, informes y  alegaciones municipales y provinciales.

PREGUNTA Nº 428.- En relación con la potestad de auto organización, el artículo 5 de la Ley 5/2010, de 11 de  junio de Autonomía Local en Andalucía dispone lo siguiente:
a)  Los municipios definen, con el apoyo de las  provincias, las estructuras administrativas  internas con las que pueden dotarse.
b)  Las entidades locales definen por sí mismas las estructuras administrativas internas con las  que pueden dotarse, con objeto de poder adaptarlas a sus necesidades específicas y a fin  de permitir una gestión eficaz.
c)  Las entidades locales complementarias también podrán definir sus propias estructuras  administrativas.
d)  Todas las entidades locales definirán sus estructuras organizativas y administrativas.

PREGUNTA Nº 429.- Sobre la encomienda de gestión regulada en el artículo 23 de la Ley 5/2010, de 11 de junio  de Autonomía Local en Andalucía:
a)  No existe dicha figura.
b)  La encomienda se formalizará mediante un acuerdo interadministrativo.
c)  La efectividad de la encomienda requerirá que vaya acompañada de la dotación económica  o incremento de financiación, de los medios económicos para llevarla a cabo.
d)  La encomienda se formalizará mediante un convenio interadministrativo, que determinará,  como mínimo, su alcance material y económico.    

PREGUNTA Nº 430.- ¿Qué dispone el artículo 25 de la Ley 5/2010, de 11 de junio de Autonomía Local en  Andalucía respecto a la Financiación de nuevas atribuciones de la Comunidad Autónoma de  Andalucía a las entidades locales?
a)  Si la Comunidad Autónoma asigna servicios o actividades que entrañen nuevos gastos o la  ampliación de los ya existentes, acordará la dotación de instrumentos financieros para  realizar nuevas inversiones.
b)  En el caso de que la Comunidad Autónoma de Andalucía asigne a las entidades locales  servicios o funciones que entrañen nuevos gastos o la ampliación de los ya existentes,  acordará simultáneamente la dotación de los recursos económicos para hacer frente a las  nuevas cargar financieras.
c)  No se acordará la dotación de recursos económicos a las entidades locales para hacer  frente a las nuevas cargas financieras, salvo que dichas entidades demuestren su  imposibilidad de autofinanciación.
d)  En ningún caso se podrá asignar por parte de la Comunidad Autónoma de Andalucía,  servicios o funciones que entrañen nuevos gastos a las entidades locales.

PREGUNTA Nº 431.- Conforme el  artículo 9 de la Ley 5/2010, de 11 de junio de Autonomía Local en Andalucía,  el contenido de la competencia de los municipios en materia de protección del turismo  incluye:
a)  La promoción de sus recursos turísticos y fiestas de especial interés.
b)  El diseño de la política de infraestructuras turísticas de titularidad propia y ajena.
c)  La participación en la formulación de los instrumentos de planificación y promoción del  sistema turístico en el Municipio correspondiente.
d)  Elaborar planes de actividades culturales.

PREGUNTA Nº 432.- Respecto a la colaboración financiera de la Comunidad autónoma de Andalucía a la  financiación de competencias, señale la correcta:
a)  Se regula exclusivamente en la Ley 5/2010, de 11 de junio, de Autonomía Local de  Andalucía.
b)  La aportación a la financiación se realizará únicamente a través del mecanismo de  participación en los tributos de la Comunidad autónoma previsto en el Artículo 192.1 del  Estatuto de Autonomía para Andalucía.
c)  La aportación a la financiación de las competencias locales propias y transferidas se  realizará fundamentalmente a través del mecanismo de participación en los tributos de la  Comunidad autónoma previsto en el Artículo 192.1 del Estatuto de Autonomía para  Andalucía.
d)  Los requisitos de la colaboración financiera viene n regulados en el artículo 191 del Estatuto   de Autonomía para Andalucía.    

PREGUNTA Nº 433.- ¿Se puede, y en caso afirmativo de qué forma, renunciar a la delegación de competencias  que regula la Ley 5/2010, de 11 de junio, de Autonomía Local de Andalucía.
a)  No se puede renunciar, salvo imposibilidad de su desempeño sin menoscabo.
b)  Las entidades locales delegadas podrán renunciar sólo en los casos que se les permita por  parte del delegante.
c)  Las entidades locales delegadas podrán renunciar a la delegación en los casos establecidos  en el decreto o cuando, por circunstancias sobrevenidas, se justifique suficientemente la  imposibilidad de su desempeño sin menoscabo del ejercicio de sus competencias propias o,  en su caso, de las transferidas.
d)  En ningún caso se puede renunciar.

PREGUNTA Nº 434.- Respecto de la asistencia económica de la provincia al municipio, regulada en el artículo 13  de la Ley 5/2010, de 11 de junio, de Autonomía Local de Andalucía, podemos afirmar lo  siguiente:
a)  La aplicación del plan aprobado estará sujeta a seguimiento y control de la diputación  provincial y de los ayuntamientos.
b)  Cada municipio está obligado a aplicar la asistencia económica a los proyectos específicos  aprobados en el plan o programa provincial.
c)  La diputación provincial efectuará una evaluación anual de los efectos sociales,  económicos, ambientales y territoriales del plan o programa de asistencia económica.
d)  A las entidades locales que sean destinatarias y beneficiarias de los planes y programas  provinciales, se les exigirá estar al corriente en sus obligaciones tributarias con cualquier  Administración o con la Seguridad Social.

PREGUNTA Nº 435.- Según el artículo 22 de la  Ley 5/2010, de 11 de junio, de Autonomía Local de Andalucía,  ¿Quién establecerá los mecanismos de liquidación de los recursos y cargas provocados por la  delegación, previa instrucción del correspondiente expediente administrativo?
a)  El Consejo de Gobierno de la Junta de Andalucía.
b)  La Comunidad Autónoma de Andalucía.
c)  La Consejería competente en dicha competencia.
d)  La provincia y Comunidad Autónoma.

PREGUNTA Nº 436.- ¿Cuál de las siguientes  facultades de dirección y control podrá reservarse la Comunidad  Autónoma en el decreto de delegación, al que se refiere el artículo 20 de la Ley 5/2010, de 11  de junio, de Autonomía Local de Andalucía?
a)  La potestad normativa sobre la materia.
b)  El establecimiento de recurso de reposición ante los órganos de la Comunidad Autónoma  que se determinen.
c)  Elaborar programas y dictar directrices sobre la gestión de las competencias, así como  dictar instrucciones técnicas de carácter general.
d)  Formular los requerimientos pertinentes para la subsanación de defectos y de las  deficiencias observadas y alegadas.      

PREGUNTA Nº 437.- El procedimiento de elaboración de los planes y programas de asistencia económica se  compondrá de las siguientes fases, (artículo 13 de la Ley 5/2010, de 11 de junio, de  Autonomía Local de Andalucía)  :
a)  Recabar información, Fijar criterios básicos, Formular propuesta por cada ayuntamiento,  Formular un proyecto de plan o programa de asistencia económica por la Diputación  Provincial, Someter el proyecto a un trámite de consulta o audiencia, Introducir  modificaciones, Aprobación definitiva y Ejecución del plan.
b)  Recabar información, Fijar criterios básicos, Formular propuesta por cada municipio,  Formular un proyecto de plan o programa de asistencia económica por el Ayuntamiento,  Someter el proyecto a un trámite de consulta o audiencia, Introducir modificaciones,  Aprobación definitiva y Ejecución del plan.
c)  Recabar información, Fijar criterios básicos, Formular propuesta por cada ayuntamiento,  Formular un proyecto de plan o programa de asistencia económica por la Diputación  Provincial, Someter el proyecto a un trámite de consulta o audiencia, Aprobación definitiva  y Ejecución del plan.
d)  Recabar información, Fijar criterios básicos, Formular un proyecto de plan o programa de  asistencia económica por la Diputación Provincial, Someter el proyecto a un trámite de  consulta o audiencia, Introducir modificaciones, Aprobación definitiva y Ejecución del plan.

PREGUNTA Nº 438.- ¿En qué podrán consistir las competencias de asistencia a los municipios por parte de las  provincias reguladas en el artículo 11 de la Ley 5/2010, de 11 de junio, de Autonomía Local  de Andalucía?
a)  Asistencia material de prestación de servicios municipales.
b)  Asistencia financiera para ejecutar inversiones y actividades.
c)  Asistencia de apoyo informático.
d)  Asistencia de prestación de servicios a entes locales.        

PREGUNTA Nº 439.- Según el artículo 97 del Real Decreto Legislativo 781/1986, de 18 de abril, por el que se  aprueba el texto refundido de las disposiciones legales vigentes en materia de Régimen  Local, "recaído acuerdo de la Corporación, se elevará el expediente completo al órgano  competente de la Comunidad Autónoma. El Consejo de Gobierno de ésta deberá resolver  sobre su aprobación, en el plazo de":
a)  Cuatro meses.
b)  Dos meses.
c)  Tres meses.
d)  Seis Meses.

PREGUNTA Nº 440.- Para los casos de prestación indirecta, el art.108 del Real Decreto Legislativo 781/1986, de  18 de abril, por el que se aprueba el texto refundido de las disposiciones legales vigentes en  materia de Régimen Local, establece unas normas en los casos de prestación indirecta de la  actividad, con la única excepción de los:
a)  Servicios de Alcantarillado.
b)  Servicios de Mercados Centrales.
c)  Servicios concedidos.
d)  Servicios de Extinción de incendios.

PREGUNTA Nº 441.- Señale las modalidades de gestión directa de los servicios, según el artículo 67 del Decreto  de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de las  Corporaciones locales:
a)  Gestión por la Corporación con órgano especial de administración, y Sociedad municipal.
b)  Gestión por la Entidad Local con órgano de administración y gestión, y Sociedad Provincial.
c)  Gestión por la Corporación: sin y con órgano especial de administración; Fundación pública  del servicio y Sociedad privada, municipal o provincial.
d)  Gestión por la Entidad Local sin órgano de administración y gestión y Sociedad Municipal.

PREGUNTA Nº 442.- ¿Qué son los servicios públicos locales conforme al artículo 85 de la Ley 7/1985, de 2 de  abril, Reguladora de las Bases del Régimen Local?
a)  Son servicios públicos locales los que prestan las entidades locales en el ámbito de sus  competencias y de las que les deleguen.
b)  Son servicios públicos locales los que prestan las entidades locales en el ámbito de sus  competencias.
c)  Son servicios públicos locales los que prestan los ayuntamientos en el ámbito territorial de  sus competencias.
d)  Son servicios públicos locales los que prestan todos los Organismos Públicos a los que le es  de aplicación la presente ley en el ámbito territorial de sus competencias.    

PREGUNTA Nº 443.- Según el artículo 71  del Decreto de 17 de junio de 1955 por el que se aprueba el  Reglamento de Servicios de las Corporaciones locales, ¿quién estará a cargo de los servicios  municipalizados o provincializados en régimen de gestión directa con órgano especial?
a)  Un Consejo de Administración.
b)  Un Consejo de Administración y de un Gerente.
c)  Un miembro de la Corporación elegido por el Pleno.
d)  El Presidente del Consejo de Administración.

PREGUNTA Nº 444.- ¿A qué servicios provincializados se podrá aplicar el sistema de monopolio según dispone  el artículo 49 del Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de  Servicios de las Corporaciones locales?
a)  De modo extraordinario, a cualquier servicio provincializado, en las condiciones  determinadas por el párrafo 3 del artículo 166 de la Ley.
b)  A la producción y suministro de energía eléctrica, con carácter excepcional.
c)  Al abastecimiento de aguas, cuando la iniciativa popular no fuere suficiente.
d)  A ferrocarriles, tranvías, autobuses y trolebuses interurbanos, en determinados casos.

PREGUNTA Nº 445.- Las funciones del Gerente en la modalidad de la gestión directa de los servicios, a través de  la Gestión por la Corporación, son entre otras, según se encuentran regulados en el artículo  75 del Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de  las Corporaciones locales, las siguientes: (señale la incorrecta)  
a)  Ordenar todos los pagos que tengan consignación expresa.
b)  Las que el Consejo le confiera.
c)  Dirigir e inspeccionar los servicios.
d)  Asistir a las sesiones del Consejo con voz y voto.

PREGUNTA Nº 446.- Según dispone el artículo 73 del  Decreto de 17 de junio de 1955 por el que se aprueba el  Reglamento de Servicios de las Corporaciones locales, el Consejo de Administración será  nombrado por la Corporación interesada:
a)  Sin que exceda de tres el número de sus miembros en los Municipios de población inferior  a 10.000 habitantes ni de nueve en los de población superior o en los casos de  provincialización
b)  Sin que exceda de cinco el número de sus miembros en los Municipios de población inferior  a 10.000 habitantes ni de nueve en los de población superior o en los casos de  provincialización
c)  Sin que exceda de cinco el número de sus miembros en los Municipios de población inferior  a 20.000 habitantes ni de nueve en los de población superior o en los casos de  provincialización.
d)  Sin que exceda de siete el número de sus miembros en los Municipios de población inferior  a 20.000 habitantes ni de nueve en los de población superior o en los casos de  provincialización    

PREGUNTA Nº 447.- ¿Cuándo calcularán las Entidades Locales el coste efectivo de los servicios que prestan,  según el artículo 116 ter. de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del  Régimen Local?
a)  Antes del 1 de diciembre de cada año calcularán el coste efectivo, partiendo de los datos  contenidos en la liquidación del presupuesto general correspondiente al ejercicio  inmediato anterior.
b)  Antes del 1 de diciembre de cada año calcularán el coste efectivo, partiendo de  estimaciones del presupuesto general, teniendo en cuenta los datos contenidos en el  precedente presupuesto.
c)  Antes del 1 de octubre de cada año calcularán el coste efectivo, partiendo de los datos  contenidos en la liquidación del presupuesto general y, en su caso, de las cuentas anuales  aprobadas de las entidades vinculadas o dependientes, correspondiente al ejercicio  inmediato anterior.
d)  Antes del 1 de noviembre de cada año calcularán el coste efectivo, partiendo de los datos  contenidos en la liquidación del presupuesto general y, en su caso, de las cuentas anuales  aprobadas de las entidades vinculadas o dependientes, correspondiente al ejercicio  inmediato anterior.

PREGUNTA Nº 448.- En supuestos de gestión por empresa mixta y de acuerdo con los dispuesto en el artículo  107 del Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de  las Corporaciones locales, para la adopción de una serie de acuerdos se exige un quórum de  la mayoría de tres cuartas partes del número estatutario de votos, no afectando a:
a)  La aprobación de balances.
b)  El aumento o disminución del Capital Social.
c)  La modificación de los Estatutos de la Empresa.
d)  La aprobación de los proyectos generales de los servicios.

PREGUNTA Nº 449.- Respecto a la gestión directa de los servicios económicos en régimen de Empresa privada,  ¿cuál de las siguientes afirmaciones es correcta según el artículo 89 del Decreto de 17 de  junio de 1955 por el que se aprueba el Reglamento de Servicios de las Corporaciones locales?
a)  El capital de estas Empresas habrá de ser desembolsado antes o desde el momento de su  constitución.
b)  Sólo podrá adoptar la forma de responsabilidad limitada.
c)  Adoptará la forma de responsabilidad limitada o de Sociedad anónima, y se constituirá y  actuará con sujeción a las normas legales que regulen dichas Compañías mercantiles, sin  perjuicio de las adaptaciones previstas por este Reglamento.
d)  Es preferible que adopten la forma de Sociedad anónima.    

PREGUNTA Nº 450.- Señale la respuesta correcta respecto a la transformación y extinción de las  municipalizaciones y provincializaciones a que se refiere Decreto de 17 de junio de 1955 por  el que se aprueba el Reglamento de Servicios de las Corporaciones locales:
a)  Las municipalizaciones y provincializaciones serán por tiempo indefinido, salvo disposición  o acuerdo en contrario. (Artículo 95).
b)  La Corporación podrá acordar la sustitución del régimen de monopolio por el de libre  concurrencia, pero no a la inversa. (Artículo 96).
c)  Éstas cesarán como consecuencia de pérdidas que reduzcan el capital a la mitad. (Artículo  98).
d)  Éstas cesarán, en cualquier tiempo, por acuerdo de la Corporación interesada, adoptado  con el quórum de las tres quintas partes del número legal de sus miembros. (Artículo 98)

PREGUNTA Nº 451.- Dispone el artículo 94 del  Real Decreto Legislativo 781/1986, de 18 de abril, por el que se  aprueba el texto refundido de las disposiciones legales vigentes en materia de Régimen  Local, respecto a las obras comprendidas en los planes de obras y servicios locales, lo  siguiente:
a)  Sólo en  caso de los planes provinciales de cooperación, llevarán aneja la declaración de  utilidad pública.
b)  Llevarán aneja la declaración de utilidad pública y la necesidad de ocupación de los  terrenos y edificios en ellos comprendidos a efectos de su expropiación forzosa.
c)  No es necesaria ninguna declaración de utilidad pública.
d)  No podrán ser objeto de expropiación forzosa, en caso de ocupación de terrenos y edificios.

PREGUNTA Nº 452.- Conforme al artículo 107 del Decreto de 17 de junio de 1955 por el que se aprueba el  Reglamento de Servicios de las Corporaciones locales, los acuerdos de los órganos de  gobierno y administración de la Empresa mixta deberán, en una serie de casos, por:
a)  La mayoría absoluta del número de miembros de la sociedad.
b)  Las tres cuartas partes del número de miembros de la sociedad.
c)  La mayoría absoluta del número estatutario de votos.
d)  La mayoría de tres cuartas partes del número estatutario de votos

PREGUNTA Nº 453.- Según establece el artículo 85 de la Ley 7/1985, de 2 abril, Reguladora de las Bases del  Régimen Local, los servicios públicos de competencia local habrán de gestionarse de la forma  más sostenible y eficiente, entre las enumeradas a continuación:
a)  Sólo a través de la gestión directa,  por la propia Entidad Local.
b)  A través de la gestión directa e indirecta.
c)  A través de la gestión por delegación.
d)  Sólo a través de la gestión indirecta.

PREGUNTA Nº 454.- Entre los supuestos que contempla el Decreto de 17 de junio de 1955 por el que se  aprueba el Reglamento de Servicios de las Corporaciones locales, para que la Entidad Local  pueda proceder al secuestro de un servicio público no se encuentra:
a)  La imposibilidad de llevarlo a cabo por quiebra del concesionario.
b)  La desobediencia  del concesionario a las órdenes de modificación.
c)  Si el concesionario incurriera en infracción de carácter grave que pusiera en peligro la  buena prestación del servicio público.
d)  Cuando el concesionario actuare de mala fe en ejecución de las órdenes de la Corporación  sobre conservación de obras e instalaciones.  

PREGUNTA Nº 455.- En el artículo 86. 2 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen  Local, se declara la reserva a favor de las Entidades Locales de una serie de actividades o  servicio esenciales, de entre los que se encuentran:
a)  Depuración de residuos.
b)  Recogida de aguas residuales.
c)  Transporte público y concertado de viajeros.
d)  Tratamiento y aprovechamiento de residuos.

PREGUNTA Nº 456.- ¿Cuándo se entenderán aprobadas las tarifas de los servicios que deben ser autorizadas  por las Comunidades autónomas u otra Administración competente, según el Real Decreto  Legislativo 781/1986, de 18 de abril, por el que se aprueba el texto refundido de las  disposiciones legales vigentes en materia de Régimen Local?:
a)  Las tarifas se entenderán aprobadas, cuando hayan transcurrido 2 meses desde la fecha de  entrada del expediente en la Administración autorizante sin que haya recaído resolución.
b)  Transcurridos tres meses desde la fecha de entrada del expediente en la Administración  autorizante sin que haya recaído resolución, las tarifas se entenderán aprobadas.
c)  Las tarifas se entenderán tácitamente aprobadas, cuando haya transcurrido 1 mes desde la  fecha de entrada del expediente en la Administración autorizante sin que haya recaído  resolución.
d)  Las tarifas se entenderán tácitamente aprobadas, cuando hayan transcurrido 2 meses  desde la fecha de entrada del expediente en la Administración autorizante sin que haya  recaído resolución.

PREGUNTA Nº 457.- En relación con las tarifas de los servicios públicos, reguladas en el Decreto de 17 de junio  de 1955 por el que se aprueba el Reglamento de Servicios de las Corporaciones locales,  señale la respuesta incorrecta:
a)  Para la validez de las tarifas se requerirá que sean fijadas y aprobadas por la Corporación  titular del servicio y, en su caso, además, cuando se tratare de servicios de carácter  industrial o mercantil, por el Ministerio al que correspondiere la inspección del mismo.
b)  La cuantía de las tarifas de los servicios públicos de competencia municipal o provincial  podrá ser igual, superior o inferior al coste del servicio, según aconsejaren las  circunstancias sociales y económicas relevantes en orden a su prestación.
c)  Las tarifas por prestación de servicios de primera necesidad o relativos a la alimentación o  vestido no suntuarios no excederán del costo necesario para la financiación de los mismos
d)  La modificación de las tarifas habrá de ser aprobada por la Corporación, en todo caso.

PREGUNTA Nº 458.- ¿Cuál de los siguientes es un requisito para el ejercicio de actividades económicas por las  Entidades Locales, según dispone el artículo 97 del Real Decreto Legislativo 781/1986, de 18  de abril, por el que se aprueba el texto refundido de las disposiciones legales vigentes en  materia de Régimen Local?
a)  Acuerdo inicial de la Corporación, previa designación de una Comisión de estudio  compuesta por miembros de la misma y por personal técnico.
b)  Exposición pública de la memoria antes de ser tomada en consideración por la Corporación.
c)  Aprobación del proyecto por mayoría simple del Pleno de la Entidad Local.
d)  Redacción por parte de una Comisión de investigación, de una memoria de los aspectos  social, jurídico, técnico y financiero de la actividad económica de que se trate.    

PREGUNTA Nº 459.- En relación con las retribuciones previstas para el concesionario, establece el artículo 129  del  Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de las  Corporaciones locales, que aquéllas deberán ser calculadas de modo que permitan: (Señale  la respuesta incorrecta)  
a)  Cubrir los gastos de explotación.
b)  Un margen normal de beneficio industrial.
c)  Amortizar durante el plazo concesional el coste del establecimiento del servicio.
d)  Cubrir los gastos iniciales de inversión.

PREGUNTA Nº 460.- ¿Cómo se pueden efectuar la municipalización y provincialización de servicios según el  artículo 47 del Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de  Servicios de las Corporaciones locales?
a)  Sólo en régimen de libre concurrencia.
b)  En régimen de libre concurrencia o de monopolio.
c)  Sólo en régimen de monopolio.
d)  A través de Empresas Públicas.

PREGUNTA Nº 461.- Entre las funciones que posee el Gerente según el artículo 75 del Decreto de 17 de junio de  1955 por el que se aprueba el Reglamento de Servicios de las Corporaciones locales, no se  encuentra la de:
a)  Ejecutar y hacer cumplir los acuerdos del Consejo.
b)  Asistir a las sesiones del Consejo, con voz y voto.
c)  Dirigir e inspeccionar los servicios.
d)  Ordenar todos los pagos que tengan consignación expresa

PREGUNTA Nº 462.- En el artículo 85 ter de la Ley 7/1985, de 2 abril, Reguladora de las Bases del Régimen  Local, vienen reguladas las sociedades mercantiles locales, según el cual:
a)  Se regirán íntegramente y sin excepciones, cualquiera que sea su forma jurídica, por el  ordenamiento jurídico privado.
b)  Se regirán íntegramente, cualquiera que sea su forma jurídica, por el ordenamiento jurídico  privado, salvo las materias en que les sea de aplicación la normativa presupuestaria,  contable, de control financiero, de control de eficacia y contratación.
c)  En la escritura de constitución constará el capital mínimo exigido por la Administraciones  Públicas o entidades dependientes.
d)  Sus estatutos solo determinarán el funcionamiento de la Junta General.

PREGUNTA Nº 463.- ¿Qué circunstancias tienen que concurrir para que proceda la municipalización o  provincialización, según el artículo 46 del Decreto de 17 de junio de 1955 por el que se  aprueba el Reglamento de Servicios de las Corporaciones locales? (señale la incorrecta)  
a)  Que los servicios tengan naturaleza mercantil, industrial, extractiva, forestal o agraria.
b)  Que los servicios se presten dentro del correspondiente término municipal o provincial.
c)  Que los servicios tiendan a conseguir que su prestación reporte a los usuarios condiciones  más ventajosas que las que pudiera ofrecerles la iniciativa popular y la gestión indirecta.
d)  Que los servicios sean de primera necesidad o de mera utilidad pública, teniendo que estar  específicamente determinados en las enumeraciones de la competencia local.    

PREGUNTA Nº 464.- Según el artículo 116 ter de la Ley 7/1985, de 2 abril, Reguladora de las Bases del Régimen  Local, todas las Entidades Locales, calcularán el coste efectivo de los servicios que prestan:
a)  Antes del día 15 de diciembre de cada año.
b)  Antes del día 1 de diciembre de cada año.
c)  Antes del día 31 de diciembre de cada año.
d)  Antes del día 1 de noviembre de cada año.

PREGUNTA Nº 465.- El artículo 103.2 del Real Decreto Legislativo 781/1986, de 18 de abril, por el que se  aprueba el texto refundido de las disposiciones legales vigentes en materia de Régimen  Local, prevé que será obligatoria la disolución de una Sociedad Mercantil creada para la  gestión de un servicio público cuando las pérdidas:
a)  Excedan de una tercera parte del Capital Social.
b)  Excedan de la mitad del Capital Social.
c)  Se mantengan durante tres años consecutivos.
d)  Se mantengan durante dos años consecutivos.

PREGUNTA Nº 466.- Respecto a la gestión indirecta de los servicios, en concreto, a través del arrendamiento,  según regula Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de  Servicios de las Corporaciones locales, no es correcto afirmar:
a)  Las Corporaciones locales podrán disponer la prestación de los servicios mediante  arrendamiento de las instalaciones de su pertenencia.
b)  Siempre será utilizable la forma de gestión indirecta.
c)  Serán utilizables cuando se hubieren de tener primordialmente en cuenta los intereses  económicos de la Corporación contratante en orden a la disminución de los costos o al  aumento de los ingresos.
d)  No podrán ser prestados a través del arrendamiento los servicios de beneficencia y  asistencia sanitaria, incendios y Establecimientos de Crédito.

PREGUNTA Nº 467.- Señale la respuesta correcta, según lo regulado en el artículo 101 del Real Decreto  Legislativo 781/1986, de 18 de abril, por el que se aprueba el texto refundido de las  disposiciones legales vigentes en materia de Régimen Local:
a)  Cuando la gestión directa de los servicios se realice mediante una organización  especializada, habrá de constituirse un Consejo de Administración que será presidido por  quienes designen los miembros de la Corporación por unanimidad. A propuesta de dicho  Consejo, el Alcalde designará al Gerente.
b)  Cuando la gestión indirecta de los servicios se realice mediante una organización  especializada, habrá de constituirse un Consejo de Administración que será presidido por  quienes designen los miembros de la Corporación por unanimidad. A propuesta de dicho  Consejo, el Alcalde designará al Gerente.
c)  Cuando la gestión indirecta de los servicios se realice mediante una organización  especializada, habrá de constituirse un Consejo de Administración que será presidido por  un  miembro de la Corporación. A propuesta de dicho Consejo, el Alcalde designará al  Gerente.
d)  Cuando la gestión directa de los servicios se realice mediante una organización  especializada, habrá de constituirse un Consejo de Administración que será presidido por  un miembro de la Corporación. A propuesta de dicho Consejo, el Alcalde o Presidente  designará al Gerente.    

PREGUNTA Nº 468.- Respecto del concierto, como forma de gestión indirecta de los servicios, dispone el  Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de las  Corporaciones locales, lo siguiente:
a)  El concierto puede originar una nueva persona jurídica.
b)  La duración de los conciertos no podrá exceder de diez años, sin posibilidad de prórrogas.
c)  El concierto podrá establecerse con personas o entidades radicantes dentro o fuera del  territorio de la Entidad local.
d)  El concierto en cualquier caso, requerirá prestación de garantía.

PREGUNTA Nº 469.- La gestión directa de los servicios de la competencia local mediante las formas de  organismos autónomos locales y de entidades públicas empresariales locales tendrán las  siguientes especialidades, de acuerdo al artículo 85 bis de la Ley 7/1985, de 2 de abril,   Reguladora de las Bases del Régimen Local. Indique cuál de las siguientes es una de ellas:
a)  En los organismos autónomos locales deberá existir un consejo rector, cuya composición se  determinará por Reglamento.
b)  Su inventario de bienes y derechos se remitirá semestralmente a la concejalía, área u  órgano equivalente de la entidad local.
c)  Estarán sometidos a un control de eficacia por la concejalía, área u órgano equivalente de  la entidad local a la que estén adscritos.
d)  La determinación y modificación de las condiciones retributivas, deberán remitirse  anualmente.

PREGUNTA Nº 470.- Fases del procedimiento por el que quedan instituidas las Empresas Mixtas, en el caso de  los servicios gestionados por Empresa mixta, según se regula en el artículo 104 del Decreto  de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de las  Corporaciones locales:
a)  Previo expediente de municipalización o provincialización; adquisición de participaciones o  acciones de empresas ya constituidas; fundación de la Sociedad a través de la suscripción  pública de acciones o concurso de iniciativas y Convenio con Empresa única ya existente, en  el que se fijará el Estatuto por el que hubiere de regirse en lo sucesivo.
b)  Adquisición de participaciones o acciones de empresas ya constituidas; fundación de la  Sociedad a través de la suscripción pública de acciones o concurso de iniciativas y Convenio  con Empresa única ya existente, en el que se fijará el Estatuto.
c)  Previo expediente de municipalización o provincialización; adquisición de participaciones o  acciones de empresas ya constituidas; fundación de la Sociedad a través de la suscripción  pública de acciones o concurso de iniciativas; Redacción del Estatuto  y Convenio con  Empresa única ya existente.
d)  Previo expediente de municipalización o provincialización; adquisición de participaciones o  acciones de empresas ya constituidas y Convenio con Empresa única ya existente, en el que  se fijará el Estatuto.    

PREGUNTA Nº 471.- ¿Qué consecuencias tiene el cese definitivo de la municipalización o provincialización  según dispone el artículo 100 del Decreto de 17 de junio de 1955 por el que se aprueba el  Reglamento de Servicios de las Corporaciones locales?
a)  En todo caso, se determinará su transformación en servicio gestionado por concesión o  arrendamiento.
b)  En ningún caso se transformaría la gestión de dicho servicio.
c)  Determinará su trasformación en servicio gestionado por concesión o arrendamiento, o  con, la enajenación en pública subasta de los elementos e instalaciones que no fueren  útiles para otras funciones de la Corporación, la devolución a la iniciativa privada del  cometido de satisfacer las necesidades atendidas por el servicio.
d)  Directamente, se produciría la devolución a la iniciativa privada el cometido de satisfacer  las necesidades atendidas por el servicio.

PREGUNTA Nº 472.- Tal y como dispone el artículo 108 del Real Decreto Legislativo 781/1986, de 18 de abril,  por el que se aprueba el texto refundido de las disposiciones legales vigentes en materia de  Régimen Local, la prestación indirecta de la actividad, no podrá exceder de:
a)  Cincuenta Años.
b)  Cien años.
c)  No se establece ningún límite máximo de duración.
d)  Diez años.

PREGUNTA Nº 473.- Respecto a los servicios prestados mediante una organización especializada a los que se  refiere el artículo 102 del Real Decreto Legislativo 781/1986, de 18 de abril, por el que se  aprueba el texto refundido de las disposiciones legales vigentes en materia de Régimen  Local:
a)  Llevarán, con independencia de la contabilidad general de la Entidad Local, una  contabilidad especial, debiendo publicarse los balances y liquidaciones.
b)  Llevarán, con independencia de la contabilidad general de la Entidad Local, una  contabilidad especial, debiendo publicarse casa seis meses los balances y liquidaciones.
c)  La liquidación o compensación de las pérdidas se hará en la forma que determine la propia  entidad Local.
d)  Las Ordenanzas podrán prohibir constituir fondos de reserva con cargo a las ganancias, en  el caso de que hubieran.    

PREGUNTA Nº 474.- De acuerdo con el artículo 85.2 de la Ley 7/1985, de 2 de abril,  Reguladora de las Bases del  Régimen Local, señale la respuesta correcta:
a)  La Gestión directa de los servicios públicos podrá realizarse de alguna de las siguientes  formas: Gestión por la propia Entidad Local, Organismo autónomo local, Entidad pública  empresarial local y Sociedad Mercantil local, cuyo capital social sea de titularidad  concertada.
b)  Se recabará informe del interventor local quien valorará la sostenibilidad financiera de las  propuestas planteadas, de conformidad con lo previsto en el artículo 4 de la LO 2/20112, de  27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera.
c)  Solo podrá hacerse uso de la entidad Pública empresarial local y de la Sociedad Mercantil  local cuando quede acreditado mediante memoria justificativa elaborada al efecto que  resultan más sostenibles y eficientes que las formas de Gestión por la propia Entidad Local  y Organismo autónomo local, para lo que se deberán tener en cuenta los criterios de  eficiencia financiera y amortización de la inversión.
d)  La Gestión directa sólo podrá llevarse a cabo por la propia Entidad Local.

PREGUNTA Nº 475.- ¿Cómo define el Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de  Servicios de las Corporaciones locales por gestión directa de servicios?
a)  Se entenderá por gestión directa la que para prestar los servicios de su competencia  realicen las Corporaciones locales por sí mismas.
b)  Se entenderá por gestión directa la que para prestar los servicios de su competencia o las  que le puedan delegar, realicen las Corporaciones locales por sí mismas.
c)  Se entenderá por gestión directa la que para prestar los servicios de su competencia  realicen las Corporaciones locales por sí mismas o mediante Organismos que en su mayoría  podrán ser dependientes de ellas.
d)  Se entenderá por gestión directa la que para prestar los servicios de su competencia  realicen las Corporaciones locales por sí mismas o mediante Organismos exclusivamente  dependientes de ellas.

PREGUNTA Nº 476.- ¿Qué dispone con carácter general, el artículo 30 del Decreto de 17 de junio de 1955 por el  que se aprueba el Reglamento de Servicios de las Corporaciones locales por gestión directa  de servicios?
a)  Las Corporaciones locales tendrán plena potestad para constituir, organizar modificar y  suprimir los servicios de su competencia, tanto en el orden personal como en el económico  o en cualesquiera otros aspectos, con arreglo a la Ley de Régimen local y a sus reglamentos  y demás disposiciones de aplicación.
b)  Las Corporaciones locales tendrán plena potestad para constituir, organizar, modificar y  suprimir los servicios de su competencia, tanto en el orden personal como en el económico  o en cualesquiera otros aspectos, únicamente con arreglo a la Ley de Régimen local.
c)  Las Corporaciones locales tendrán plena potestad para constituir, organizar modificar y  suprimir los servicios de su competencia, sólo en el orden económico, con arreglo a la Ley  de Régimen local y a sus reglamentos y demás disposiciones de aplicación.
d)  Las Corporaciones locales podrán tener potestad para constituir, organizar modificar y  suprimir los servicios de su competencia, tanto en el orden personal como en el económico  o en cualesquiera otros aspectos, con arreglo a la Ley de Régimen local y a sus reglamentos  y demás disposiciones de aplicación.    

PREGUNTA Nº 477.- De acuerdo con lo dispuesto en el artículo 95 del Real Decreto Legislativo 781/1986, de 18  de abril, por el que se aprueba el texto refundido de las disposiciones legales vigentes en  materia de Régimen Local, los servicios públicos locales:
a)  Podrán ser gestionados solo de manera directa.
b)  Podrán ser gestionados solo de manera indirecta.
c)  Podrán ser gestionados directa o indirectamente.
d)  Los servicios que impliquen ejercicio de autoridad sólo podrán ser ejercidos por gestión  indirecta.

PREGUNTA Nº 478.- Para la efectiva ejecución de estas actividades en régimen de monopolio, de acuerdo con  lo previsto en el artículo 86.2 de la Ley 7/1985, de 2 de abril,  Reguladora de las Bases del  Régimen Local, se requiere:
a)  Además del acuerdo de aprobación del pleno de la correspondiente Corporación local, la  aprobación por el órgano competente de la Comunidad Autónoma.
b)  Aprobación del acuerdo por el Parlamento de Andalucía.
c)  Aprobación del acuerdo por el Consejero/a de Gobernación.
d)  Aprobación del acuerdo por Junta de Gobierno.        

PREGUNTA Nº 479.- La aprobación de las Ordenanzas locales se regula en la Ley 7/1985, de 2 de abril,  Reguladora de las Bases de Régimen Local, se ajustará al siguiente  procedimiento, que  cuenta con diferentes fases, que, de manera resumida son las siguientes:
a)  Aprobación inicial por la Concejalía competente, información pública y aprobación  definitiva por el Pleno.
b)  Aprobación inicial por el Pleno, información pública, audiencia a los interesados, resolución  de reclamaciones y aprobación definitiva por el Pleno.
c)  Aprobación inicial por la Concejalía competente, información pública y aprobación  definitiva por el Pleno.
d)  Aprobación inicial por el Pleno, audiencia a los interesados, resolución de reclamaciones y  aprobación definitiva por el Pleno.

PREGUNTA Nº 480.- ¿En qué artículo de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local,  se le reconoce expresamente a los municipios, provincias e islas, las potestades  reglamentarias y de auto organización?
a)  Artículo 4.1.c.
b)  Artículo 4.1.a
c)  Artículo 5
d)  Artículo 3

PREGUNTA Nº 481.- Según el artículo 128 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  Común de las Administraciones Públicas, la potestad reglamentaria corresponde a:
a)  Al Gobierno de la Nación, a los órganos de Gobierno de las Comunidades Autónomas, de  conformidad con lo establecido en sus respectivos Estatutos, y a los órganos de gobierno  locales.
b)  Al Gobierno de la Nación y a los órganos de Gobierno de las Comunidades autónomas, de  conformidad con lo establecido en sus respectivos Estatutos.
c)  Al Gobierno de la Nación y a los restantes órganos de la Administración General del Estado.
d)  Al Gobierno de la Nación.

PREGUNTA Nº 482.- ¿Qué establece el artículo 55 del Real Decreto Legislativo 781/86, de 18 de abril, por el que  se aprueba el Texto Refundido de las disposiciones legales vigentes en materia de Régimen  Local?
a)  Las Entidades locales aprobarán Ordenanzas, Reglamentos y Bandos.
b)  La aprobación de las Ordenanzas, se ajustará al procedimiento establecido.
c)  En la esfera de su competencia, las Entidades locales podrán aprobar Ordenanzas y  Reglamentos, y los Alcaldes dictar Bandos. En ningún caso contendrán preceptos opuestos  a las leyes.
d)  Será necesario el informe previo del Secretario para la adopción de modificaciones en las  Ordenanzas.    

PREGUNTA Nº 483.- Contra los actos que pongan fin a las reclamaciones formuladas en relación con los  acuerdos de las Corporaciones en materia de aprobación y modificación de Ordenanzas  fiscales, ¿qué recurso podrán interponer los interesados?
a)  Según el artículo 113 de la Ley 7/1985 de 2 de abril, Reguladora de las Bases de Régimen  Local, podrán interponer directamente el recurso contencioso- administrativo.
b)  El artículo 113 de la Ley 7/1985 de 2 de abril, Reguladora de las Bases de Régimen Local no  regula expresamente la posibilidad de recurrir dichos actos.
c)  Según el artículo 114 de la Ley 7/1985 de 2 de abril, Reguladora de las Bases de Régimen  Local, primero habría que recurrir en alzada.
d)  Según el artículo 114 de la Ley 7/1985 de 2 de abril, Reguladora de las Bases de Régimen  Local,  no cabe el recurso contencioso-administrativo.

PREGUNTA Nº 484.- ¿Tiene el Presidente de la Diputación Provincial potestad para dictar bandos?
a)  No.
b)  Sí.
c)  No, salvo que sea requerido para ello.
d)  No de manera individual, pero sí como apoyo a un Alcalde que así lo solicite.

PREGUNTA Nº 485.- ¿Con qué frecuencia las Administraciones Públicas harán público un Plan Normativo con  las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobación en el año  siguiente, según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común  de las Administraciones Públicas?
a)  Anualmente.
b)  Cada 6 meses.
c)  Cada dos años.
d)  Cada 5 meses.

PREGUNTA Nº 486.- ¿Quién podrá suspender los actos y acuerdos que provengan de una Corporación Local,  que atenten gravemente al interés general de España?
a)  Según la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local, el Delegado  de Gobierno, previo requerimiento para su anulación al Presidente de la Corporación  efectuado dentro de los veinte días siguientes al de la recepción de aquéllos.
b)  Según la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local, el Delegado  de Gobierno, previo requerimiento para su anulación al Presidente de la Corporación  efectuado dentro de los diez días siguientes al de la recepción de aquéllos.
c)  Según la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local, el Delegado  de Gobierno, previo requerimiento para su anulación al Presidente de la Corporación  efectuado dentro de los treinta días siguientes al de la recepción de aquéllos.
d)  Según la LBRL, el Delegado de Gobierno, previo requerimiento para su anulación al  Presidente de la Corporación efectuado dentro de los quince días siguientes al de la  recepción de aquéllos.    

PREGUNTA Nº 487.- En los Municipios de Gran población del Título X de la Ley 7/1985, de 2 de abril,  Reguladora de las Bases de Régimen Local, ¿quién posee la potestad para aprobar y  modificar las ordenanzas y los reglamentos municipales?
a)  El Alcalde.
b)  El Pleno.
c)  El Alcalde, con la asistencia de los Tenientes de Alcalde.
d)  La Junta de Gobierno Local.

PREGUNTA Nº 488.- ¿En qué casos podrá prescindirse de los trámites de consulta, audiencia e información  pública previstos en el artículo 133 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas?:
a)  Sólo en el caso de normas presupuestarias u organizativas de la Administración General del  Estado.
b)  En el caso de normas presupuestarias u organizativas de la Administración General del  Estado.
c)  Sólo cuando concurran razones graves de interés público que lo justifiquen.
d)  Cuando los destinatarios de las normas no tengan la necesidad de emitir su opinión sobre  los proyectos normativos.

PREGUNTA Nº 489.- En relación con la publicidad de las normas que establece el artículo 131 de la Ley 39/2015,  de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas,  ¿qué dispone dicho artículo?:
a)  Las normas con rango de ley, los reglamentos y disposiciones administrativas habrán de  publicarse en el diario oficial correspondiente para que entren en vigor y produzcan efectos  jurídicos
b)  Las Administraciones Públicas podrán establecer otros medios de publicidad  complementarios, si así lo solicitan los interesados.
c)  La publicación de los diarios o boletines oficiales en las sedes electrónicas de la  Administración, Órgano, Organismo público o Entidad competente no tendrá los mismos  efectos que los atribuidos a su edición impresa.
d)  La publicación del Boletín Oficial del Estado en la sede electrónica del Organismo  competente tendrá carácter público.

PREGUNTA Nº 490.- ¿Con qué regularidad tendrán las Administraciones Públicas que revisar su normativa  según dispone el artículo 130 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo común de las Administraciones Públicas?
a)  Anualmente.
b)  Cuando lo soliciten los interesados.
c)  Semestralmente.
d)  Periódicamente.    

PREGUNTA Nº 491.- ¿Qué atribuciones le corresponde a la Junta de Gobierno Local respecto de las ordenanzas  y reglamentos en los Municipios de gran población, regulados en la Ley 7/1985, de 2 de abril,  Reguladora de las Bases de Régimen Local?
a)  La aprobación de los proyectos de ordenanzas y reglamentos, con excepción de las normas  reguladoras del Pleno y sus comisiones.
b)  La aprobación de los proyectos de ordenanzas y reglamentos, incluidos los orgánicos,  incluidas las normas reguladoras del Pleno y sus comisiones.
c)  Únicamente le corresponde aprobar la propuesta de los proyectos de ordenanzas y  reglamentos.
d)  La aprobación de los proyectos de ordenanzas y reglamentos, incluidos los orgánicos, con  excepción de las normas reguladoras del Pleno y sus comisiones.

PREGUNTA Nº 492.- Cuando la Administración del Estado o de las Comunidades Autónomas requieran a una  Entidad local para que anule un acto que consideren que infringe el ordenamiento jurídico,  ¿qué requisitos debe cumplir dicho requerimiento según establece el artículo 65 de la Ley  7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  El requerimiento debe expresar la normativa que se estime vulnerada y se formulará en el  plazo de quince días hábiles a partir de la recepción de la comunicación del acuerdo.
b)  El requerimiento deberá ser motivado y expresar la normativa que se estime vulnerada y se  formulará en el plazo de quince días naturales a partir de la recepción de la comunicación  del acuerdo.
c)  El requerimiento deberá ser motivado y expresar la normativa que se estime vulnerada y se  formulará en el plazo de veinte días hábiles a partir de la recepción de la comunicación del  acuerdo.
d)  El requerimiento deberá ser motivado y expresar la normativa que se estime vulnerada y se  formulará en el plazo de quince días hábiles a partir de la recepción de la comunicación del  acuerdo.

PREGUNTA Nº 493.- ¿Cuál es la respuesta correcta, según dispone el artículo 129.7 de la Ley 39/2015, de 1 de  octubre, del Procedimiento Administrativo común de las Administraciones Públicas?:
a)  Cuando la iniciativa normativa afecte a los gastos o ingresos públicos presentes o futuros,  se deberán cuantificar y valorar sus repercusiones y efectos, y supeditarse al cumplimiento  de los principios de estabilidad presupuestaria.
b)  Cuando la iniciativa normativa afecte a los gastos o ingresos públicos presentes o futuros,  se deberán presupuestas sus efectos, y supeditarse al cumplimiento de los principios de  estabilidad presupuestaria.
c)  Cuando la iniciativa normativa afecte a los gastos o ingresos públicos presentes o futuros,  se deberán cuantificar y valorar sus repercusiones y efectos, y supeditarse al cumplimiento  del principio de economía.
d)  Cuando la iniciativa normativa afecte a los gastos o ingresos públicos presentes o futuros,  se deberán cuantificar y valorar sus repercusiones y efectos, y supeditarse al cumplimiento  de los principios de  eficiencia y eficacia.    

PREGUNTA Nº 494.- ¿En qué momento comienzan a aplicarse las Ordenanzas fiscales reguladoras de los  tributos locales, según dispone la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local?
a)  En el momento de su publicación en el tablón de anuncios del Organismo correspondiente.
b)  A los 20 días de su publicación en el Boletín Oficial de la Comunidad Autónoma.
c)  En el momento de su publicación en el BOE.
d)  En el momento de su publicación definitiva en el " Boletín Oficial" de la provincia o, en su  caso, de la Comunidad Autónoma uniprovincial, salvo que en las mismas se señale otra  fecha.

PREGUNTA Nº 495.- La siguiente definición:"La iniciativa normativa debe evitar cargas administrativas  innecesarias o accesorias y racionalizar, en su aplicación, la gestión de los recursos públicos"  ¿a qué principio de buena regulación del artículo 129 de la Ley 39/2015, de 1 de octubre, del  Procedimiento Administrativo Común de las Administraciones Públicas corresponde?
a)  Principio de transparencia.
b)  Principio de eficiencia.
c)  Principio de proporcionalidad.
d)  Principio de celeridad.

PREGUNTA Nº 496.- Señale la respuesta correcta según lo dispuesto en el artículo 129.4 de la Ley 39/2015, de 1  de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas  respecto a los principios de buena regulación:
a)  Las habilitaciones para el desarrollo reglamentario de una ley serán conferidas siempre al  Gobierno o Consejo de Gobierno respectivo.
b)  La atribución directa a los titulares de los departamentos ministeriales o de las consejerías  del Gobierno tendrá siempre carácter excepcional.
c)  Las leyes podrán habilitar directamente a Autoridades Independientes u otros organismos  que tengan atribuida esta potestad para aprobar normas en desarrollo o aplicación de las  mismas, cuando la naturaleza de la materia así lo exija.
d)  A fin de garantizar el principio de seguridad jurídica, la iniciativa normativa deberá contener  la regulación imprescindible para atender la necesidad a cubrir con la norma.

PREGUNTA Nº 497.- ¿Qué establece el artículo 129.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas en relación al principio de necesidad  y eficacia?
a)  La iniciativa normativa debe estar justificada por razón de interés general, basarse en una  identificación clara de los fines perseguidos y ser el instrumento más adecuado para  garantizar su consecución.
b)  la iniciativa que se proponga deberá contener la regulación imprescindible para atender la  necesidad a cubrir con la norma, tras constatar que no existen otras medidas menos  restrictivas de derechos, o que impongan menos obligaciones a los destinatarios.
c)  La iniciativa normativa se ejercerá de manera coherente con el resto del ordenamiento  jurídico.
d)  Las Administraciones Públicas posibilitarán el acceso sencillo, universal y actualizado a la  normativa en vigor.    

PREGUNTA Nº 498.- Señale la respuesta correcta en relación al procedimiento para la aprobación de las  Ordenanzas locales regulado en el artículo 49 de la Ley 7/1985, de 2 de abril, Reguladora de  las Bases de Régimen Local.
a)  La Información pública y audiencia a los interesados por el plazo mínimo de 20 días.
b)  La Resolución de todas las reclamaciones corresponde  al Pleno y Junta de Gobierno.
c)  En el caso de que no se hubiera presentado ninguna reclamación o sugerencia, se  entenderá definitivamente adoptado el acuerdo hasta entonces provisional.
d)  La Información pública y audiencia a los interesados por el plazo máximo de 30 días.

PREGUNTA Nº 499.- ¿Cómo ejercen las entidades locales la potestad reglamentaria en materia tributaria según  la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  En ningún caso podrán las Corporaciones locales emanar disposiciones interpretativas de  las ordenanzas en materia tributaria.
b)  Se ejercerá a través de Ordenanzas fiscales reguladoras de sus tributos propios y de  Ordenanzas generales de gestión, recaudación e inspección.
c)  Se ejercerá exclusivamente a través de Ordenanzas fiscales reguladoras de sus tributos.
d)  En materia tributaria, no tienen las entidades locales, potestad reglamentaria.

PREGUNTA Nº 500.- Sin perjuicio de la función de desarrollo o colaboración de las leyes que tienen los  reglamentos y disposiciones administrativas, ¿qué materias no podrán regular éstos, según   el artículo 128 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo común  de las Administraciones Públicas?
a)  No podrán tipificar delitos, faltas o infracciones administrativas.
b)  No podrán tipificar penas o sanciones.
c)  No podrán tipificar prestaciones personales o patrimoniales de carácter general.
d)  No podrán tipificar delitos ni faltas, pero si infracciones administrativas.

PREGUNTA Nº 501.- Señale la respuesta correcta, teniendo en cuenta lo regulado en el artículo 65 de la  Ley  7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local, respecto a la impugnación  de actos o acuerdos de las Entidades Locales:
a)  Antes de acudir a su impugnación en la vía contenciosa- administrativa por parte del Estado  o Comunidad Autónoma, en su caso, es necesario formular el requerimiento regulado en  dicho artículo.
b)  La Administración del Estado o, en su caso, la de la Comunidad autónoma, podrá impugnar  el acto o acuerdo ante la jurisdicción contenciosa-administrativa, sin necesidad de formular  requerimiento.
c)  Sólo la Administración del Estado podrá impugnar el acto o acuerdo ante la jurisdicción  contenciosa-administrativa
d)  La Administración del Estado o, en su caso, la de la Comunidad autónoma, podrá  impugnar  el acto o acuerdo ante la jurisdicción contenciosa-administrativa, previo requerimiento.    

PREGUNTA Nº 502.- ¿Qué dispone el artículo 84 de la  Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local, respecto de la intervención de las Entidades locales en la  actividad de los  ciudadanos a través de Ordenanzas y bandos?
a)  Se tendrá que ajustar la actividad de intervención a los principios de igualdad de trato y  necesidad.
b)  Se tendrá que ajustar la actividad de intervención al principio de proporcionalidad.
c)  Se tendrá que ajustar la actividad de intervención a los principios de igualdad de trato,  necesidad y proporcionalidad con el objetivo que se persigue.
d)  Se tendrá que ajustar la actividad de intervención a los principios de igualdad de trato,  eficacia, necesidad y proporcionalidad con el objetivo que se persigue.

PREGUNTA Nº 503.- ¿Qué dispone el artículo 128 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo Común de las Administraciones Públicas, sobre la potestad reglamentaria?
a)  El ejercicio de la potestad reglamentaria corresponde únicamente al Gobierno de la Nación  y a los órganos de Gobierno de las Comunidades Autónomas.
b)  Se reconoce, en determinados supuestos, dicha potestad a los órganos de gobierno locales.
c)  El ejercicio de la potestad reglamentaria corresponde  al Gobierno de la Nación y a los  órganos de Gobierno de las Comunidades Autónomas, e conformidad con lo establecido en  sus respectivos Estatutos, y a los órganos de gobierno locales, de acuerdo con lo previsto  en la Constitución, los Estatutos de Autonomía y la Ley 7/1985, de 2 de abril, reguladora de  las Bases del régimen Local.
d)  El ejercicio de la potestad reglamentaria corresponde  al Gobierno de la Nación y a los  órganos de Gobierno de las Comunidades Autónomas, e conformidad con lo establecido en  sus respectivos Estatutos, y a los órganos de gobierno locales, de acuerdo con lo previsto  en la Constitución.

PREGUNTA Nº 504.- ¿Qué dispone el Real Decreto Legislativo 781/86, de 18 de abril, por el que se aprueba el  texto refundido de las disposiciones legales vigentes en materia de Régimen Local, sobre la  aprobación de las Ordenanzas locales?
a)  La aprobación de las Ordenanzas locales se ajustará al procedimiento establecido en el  artículo 49 de la Ley 7/1985, de 2 abril.
b)  Los Alcaldes podrán aprobar Ordenanzas.
c)  No será necesario para la modificación de las Ordenanzas y Reglamentos observar los  mismos trámites que para su aprobación.
d)  La aprobación de las Ordenanzas locales se ajustará al procedimiento establecido por cada  Entidad Local.

PREGUNTA Nº 505.- Según el artículo 175 del Real Decreto 2568/1986, de 28 de noviembre, por el que se  aprueba el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las  Entidades Locales, los informes para resolver los expedientes se redactarán en forma de  propuesta de resolución y contendrán los extremos siguientes: (Señalar la incorrecta)  
a)  Disposiciones legales aplicables
b)  Motivación sucinta de los hechos.
c)  Enumeración clara y sucinta de los hechos.
d)  Pronunciamiento que haya de contener la parte dispositiva.    

PREGUNTA Nº 506.- Señale los distintos tipos de bandos:
a)  Ordinarios y de urgencia.
b)  Ordinarios, periódicos, de urgencia y de buen gobierno.
c)  Ordinarios y periódicos.
d)  Ordinarios, de urgencia y de buen gobierno.

PREGUNTA Nº 507.- ¿Quién ostenta la atribución de dictar bandos en las Corporaciones Locales, según lo  dispuesto en la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local?
a)  El Pleno.
b)  El Alcalde.
c)  A la Junta de Gobierno Local.
d)  Al Alcalde y al Teniente de alcalde conjuntamente.

PREGUNTA Nº 508.- Establece la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local, que  cuando la Administración del Estado o de las Comunidades Autónomas considere, en el  ámbito de las respectivas competencias, que un acto o acuerdo de alguna Entidad local  infringe el ordenamiento jurídico, podrá requerirla, para que anule dicho acto:
a)  En el plazo de 1 mes.
b)  En el plazo máximo de 1 mes.
c)  En el plazo de 3 meses.
d)  En el plazo máximo de 3 meses.

PREGUNTA Nº 509.- ¿En qué artículos de la Constitución Española de 1978 se recoge la capacidad normativa de  las Entidades Locales?
a)  Artículos 137 y 138.
b)  Artículos del 140 a 142.
c)  Artículos 137 y 140 a 142.
d)  Artículo 137.

PREGUNTA Nº 510.- ¿Se pueden recurrir en la vía administrativa las disposiciones administrativas de carácter  general?
a)  Según el artículo 112.3 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo común de las Administraciones Públicas, contra las disposiciones  administrativas de carácter general no cabrá recurso en vía administrativa.
b)  Según el artículo 112.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo común de las Administraciones Públicas, si cabrá recurso en vía  administrativa contra las disposiciones administrativas de carácter general.
c)  Según artículo 112.2 de la Ley 39/2015, de 1 de octubre,  del Procedimiento Administrativo  común de las Administraciones Públicas, se podrá interponer el recurso de alzada.
d)  Según artículo 112.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo  común de las Administraciones Públicas, se podrá interponer el recurso potestativo de  reposición.    

PREGUNTA Nº 511.- Según el artículo 123 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen  Local ¿qué mayoría se requiere en los Municipios de Gran Población, para la adopción de las  ordenanzas y reglamentos municipales?
a)  Mayoría absoluta del número legal de miembros del Pleno.
b)  Mayoría simple de votos.
c)  Mayoría de 2/3.
d)  Mayoría de 3/5.

PREGUNTA Nº 512.- ¿Cuándo podrán salir de las oficinas los expedientes o documentos originales, según lo  dispuesto en el artículo 171 del Real Decreto 2568/1986, de 28 de noviembre, por el que se  aprueba el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las  Entidades Locales?
a)  Cuando se solicite, verbalmente o por escrito, su desglose quienes lo hubieren presentado,  una vez que hayan surtido los efectos consiguientes.
b)  Cuando hayan de enviarse a un Organismo público en cumplimiento de trámites  reglamentarios o para que recaiga resolución definitiva.
c)  Cuando los Tribunales los soliciten por escrito.
d)  No se contempla la posibilidad de que puedan salir los originales, únicamente copias.

PREGUNTA Nº 513.- ¿Cuáles son los principios de buena regulación regulados en el artículo 129 de la Ley  39/2015, de 1 de octubre, del Procedimiento Administrativo común de las administraciones  Públicas?
a)  Principios de necesidad, eficacia, proporcionalidad, seguridad jurídica y eficiencia.
b)  Principios de necesidad, eficacia, proporcionalidad, seguridad jurídica, transparencia y  eficiencia.
c)  Principios de  eficacia, proporcionalidad, seguridad jurídica, transparencia y eficiencia.
d)  Principios de necesidad, eficacia, proporcionalidad, transparencia y eficiencia.

PREGUNTA Nº 514.- ¿Qué límites impone el artículo 128 de la Ley 39/2015, de 1 de octubre, del Procedimiento  Administrativo común de las Administraciones Públicas a la Potestad reglamentaria?
a)  Los reglamentos no podrán vulnerar las leyes.
b)  Los reglamentos y disposiciones administrativas no podrán vulnerar la Constitución o las  leyes ni regular aquellas materias que la Constitución o los Estatutos de Autonomía  reconocen de la competencia de las Cortes Generales o de las Asambleas Legislativas de las  Comunidades Autónomas.
c)  Los reglamentos y disposiciones administrativas no podrán regular aquellas materias que la  Constitución  reconoce de la competencia de las Cortes Generales o de las Asambleas  Legislativas de las Comunidades Autónomas, salvo aprobación expresa de éstas.
d)  La única limitación con la que se encuentra la potestad reglamentaria es con la materia a  regular.    

PREGUNTA Nº 515.- ¿Qué dispone el artículo 166 del Real Decreto 2568/1986, de 28 de noviembre, por el que  se aprueba el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las  Entidades Locales, respecto a las medidas provisionales?
a)  No se podrán dictar medidas provisionales que puedan causar perjuicios irreparables a los  interesados, o que impliquen violación de derechos amparados por las Leyes.
b)  Siempre se podrán adoptar medidas provisionales, siempre que sean necesarias para el  buen fin de la Comunidad.
c)  Antes de iniciar el procedimiento, la autoridad competente podrá adoptar las medidas  provisionales que estime oportunas.
d)  No se podrán dictar medidas provisionales que puedan implicar violación irreparable a los  interesados.

PREGUNTA Nº 516.- ¿Qué plazo tiene el Presidente de la Corporación en caso de que se le requiera para que  anule un acto o acuerdo que atente gravemente al interés de España, según el artículo 66 de  la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  El plazo concedido en el requerimiento de anulación no podrá ser superior a 5 días. El del  ejercicio de la facultad de suspensión será de 10 días, contados a partir del siguiente al de  la finalización del plazo del requerimiento o al de la respuesta del Presidente de la  Corporación, si fuese anterior.
b)  El plazo concedido en el requerimiento de anulación no podrá ser superior a 10 días. El del  ejercicio de la facultad de suspensión será de 5 días, contados a partir del siguiente al de la  finalización del plazo del requerimiento o al de la respuesta del Presidente de la  Corporación, si fuese anterior.
c)  El plazo concedido en el requerimiento de anulación no podrá ser superior a 20 días. El del  ejercicio de la facultad de suspensión será de 5 días, contados a partir del siguiente al de la  finalización del plazo del requerimiento o al de la respuesta del Presidente de la  Corporación, si fuese anterior.
d)  El plazo concedido en el requerimiento de anulación no podrá ser superior a 10 días. El del  ejercicio de la facultad de suspensión será de 10 días, contados a partir del siguiente al de  la finalización del plazo del requerimiento o al de la respuesta del Presidente de la  Corporación, si fuese anterior.

PREGUNTA Nº 517.- Según su relación con la Ley, podemos distinguir los siguientes tipos de reglamentos  administrativos: (señale la incorrecta)  
a)  Ejecutivos
b)  De necesidad
c)  Independientes
d)  Jurídicos    

PREGUNTA Nº 518.- Señale la respuesta correcta, teniendo en cuenta lo regulado en el Artículo 7 del Decreto  de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de las  Corporaciones locales:
a)  Las disposiciones acordadas por las Corporaciones locales para regir con carácter general y  particular revestirán la forma de Ordenanza.
b)  Si las disposiciones acordadas por las Corporaciones locales no reunieren las características  para ser una Ordenanza o Reglamento, podrán revestir la forma de Bando, publicado según  las tradiciones en la localidad.
c)  Todas las disposiciones acordadas por las Corporaciones locales revestirán la forma de  Ordenanza, Reglamento Bando.
d)  La vigencia de las Ordenanzas y Reglamentos se iniciará a los veinte días de haberse  anunciado en el "Boletín Oficial" de la Provincia la aprobación definitiva, o a contar de la  publicación, si así se decretase expresamente.

PREGUNTA Nº 519.- ¿A qué órgano le corresponde el dictamen sobre los proyectos de ordenanzas fiscales en  los Municipios de Gran población?
a)  Al Órgano para la resolución de las reclamaciones económico- administrativas.
b)  Al Pleno.
c)  A la Junta de Gobierno Local.
d)  Al Órgano responsable del control y de la fiscalización interna.

PREGUNTA Nº 520.- ¿Quién ostenta la potestad de dictar el reglamentos orgánicos y ordenanzas según la Ley  7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  El Alcalde.(artículo 21)
b)  El Pleno(Artículo 22)
c)  La Junta de Gobierno local (artículo 23)
d)  El Pleno y el Alcalde Artículos 21 y 22)

PREGUNTA Nº 521.- ¿Qué mayoría se le exige a las corporaciones locales para la adopción y modificación del  reglamento orgánico propio de la corporación, según dispone el artículo 47 de LBRL?
a)  Mayoría simple.
b)  Unanimidad.
c)  Mayoría absoluta del número legal de miembros de la Corporación.
d)  No se exige mayoría especial.        

PREGUNTA Nº 522.- Según el artículo 77 del Reglamento de Organización, Funcionamiento y Régimen Jurídico  de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre, existen  tres tipos de sesiones del Pleno que son:
a)  Ordinarias, especiales y extraordinarias de carácter urgente.
b)  Ordinarias, urgentes y extraordinarias.
c)  Ordinarias, extraordinarias y extraordinarias de carácter urgente.
d)  Ordinarias, extraordinarias y de carácter urgente.

PREGUNTA Nº 523.- ¿Cuándo deberá efectuarse la convocatoria de la sesión extraordinaria a instancia de  miembros de la Corporación? (Artículo 78 Reglamento de Organización, Funcionamiento y  Régimen Jurídico de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de  noviembre)
a)  A los cuatros días siguientes a la petición y no podrá demorarse su celebración por más de  tres meses desde que el escrito tuviera entrada en el Registro General.
b)  Dentro de los cuatros días siguientes a la petición y no podrá demorarse su celebración por  más de dos meses desde que el escrito tuviera entrada en el Registro General.
c)  Dentro de los cinco días siguientes a la petición y no podrá demorarse su celebración por  más de dos meses desde que el escrito tuviera entrada en el Registro General.
d)  Dentro de los cinco días siguientes a la petición y no podrá demorarse su celebración por  más de tres meses desde que el escrito tuviera entrada en el Registro General.

PREGUNTA Nº 524.- ¿A quién corresponde convocar las sesiones extraordinarias del Pleno, según dispone el  Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales,  aprobado por Real Decreto 2568/1986, de 28 de noviembre?
a)  Al Secretario de la Entidad.
b)  A los concejales que lo solicitaron.
c)  Al Alcalde o Presidente, o a sus delegados.
d)  Al Alcalde o Presidente, si posibilidad de delegación.

PREGUNTA Nº 525.- Señale la respuesta incorrecta respecto a la convocatoria de las sesiones del Pleno  regulada en el artículo 80 del Reglamento de Organización, Funcionamiento y Régimen  Jurídico de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de  noviembre:
a)  A la convocatoria de las sesiones se acompañará el orden del día comprensivo de los  asuntos a tratar con el suficiente detalle, y los borradores de actas de sesiones anteriores  que deban ser aprobados en la sesión.
b)  Corresponde al Alcalde o Presidente convocar todas las sesiones del Pleno. La convocatoria  de las sesiones extraordinarias habrá de ser motivada.
c)  La convocatoria, orden del día y borradores de actas deberán ser notificados a los  Concejales o Diputados en su domicilio.
d)  Entre la convocatoria y la celebración de la sesión no podrán transcurrir menos de tres días  hábiles, salvo en el caso de las sesiones extraordinarias urgentes.    

PREGUNTA Nº 526.- ¿Qué condición impone el artículo 79 del Reglamento de Organización, Funcionamiento y  Régimen Jurídico de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de  noviembre, respecto a las sesiones extraordinarias urgentes?
a)  No existen ese tipo de sesiones.
b)  Deben ser convocadas por el Alcalde y por los miembros de la Corporación.
c)  Tienen que celebrarse al día siguiente de su convocatoria.
d)  Debe incluirse como primer punto del orden del día el pronunciamiento del Pleno sobre la  urgencia. Si ésta no resulta apreciada por el Pleno, se levantará acto seguido la sesión.

PREGUNTA Nº 527.- ¿Cuáles se consideran sesiones ordinarias del Pleno, según el Reglamento de Organización,  Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por Real Decreto  2568/1986, de 28 de noviembre?
a)  Aquellas que convoque el Alcalde o Presidente con tal carácter, por iniciativa propia o a  solicitud de la cuarta parte, al menos, del número legal de miembros de la Corporación.
b)  Aquellas cuya periodicidad esta preestablecida.
c)  Aquellas que convoca el Alcalde o Presidente cuando el asunto o asuntos debe ser tratados  lo antes posible.
d)  Aquellas que tienen como punto del orden del día el pronunciamiento del Pleno sobre el  motivo de la sesión.

PREGUNTA Nº 528.- Señale el quórum necesario para la válida constitución del Pleno según el artículo 90 del  Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales,  aprobado por Real Decreto 2568/1986, de 28 de noviembre:
a)  La mitad del número legal de miembros y con la asistencia del Presidente y Secretario.
b)  Si en segunda convocatoria no se alcanzase tampoco el quórum necesario, la Presidencia  dejará sin efecto la convocatoria posponiendo el estudio de los asuntos incluidos en el  orden del día para la sesión que se celebre con posterioridad, dentro de los dos meses  siguientes, sea ordinaria o extraordinaria.
c)  Si en primera convocatoria no existe el quórum necesario, se entenderá convocada la  sesión automáticamente a la misma hora, tres días después.
d)  Un tercio del número legal de miembros de la Corporación, que nunca podrá ser inferior a  tres. Este quórum deberá mantenerse durante toda la sesión. Se requiere en todo caso la  asistencia del Presidente y Secretario o de quienes legalmente les sustituyan.

PREGUNTA Nº 529.- ¿Cuándo tendrán carácter de secreto las sesiones del Pleno según lo dispuesto en el  Reglamento de Organización, Funcionamiento y régimen jurídico de las Entidades Locales?
a)  Siempre y en todo caso, las sesiones serán públicas.
b)  Podrá ser secreto el debate y votación de aquellos asuntos que así acuerden por mayoría  absoluta los miembros del Pleno.
c)  Podrá ser secreto el debate y votación de aquellos asuntos a que se refiere el artículo 18.1  de la Constitución Española, cuando así se acuerde por mayoría absoluta.
d)  Podrá ser secreto el debate y votación de aquellos asuntos a que se refiere el artículo 18.1  de la Constitución Española, cuando así se acuerde por unanimidad.    

PREGUNTA Nº 530.- Existe mayoría simple en un órgano colegiado local, según el artículo 99.1 del Reglamento  de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por  Real Decreto 2568/1986, de 28 de noviembre, cuando:
a)  Los votos afirmativos son más que los negativos.
b)  Los votos afirmativos o superan a los negativos.
c)  Los votos afirmativos son la mitad más uno que el de votos negativos.
d)  Los votos afirmativos son más de la mitad del número legal de miembros de la Corporación.

PREGUNTA Nº 531.- Sobre el desarrollo de las sesiones, ¿qué establece el artículo 87 del Reglamento de  Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por  Real Decreto 2568/1986, de 28 de noviembre?
a)  Toda sesión, ordinaria o extraordinaria, habrá de respetar el principio de unidad de acto y  se procurará que termine en el mismo día de su comienzo.
b)  Durante el transcurso de la sesión, el Presidente podrá denegar interrupciones a su  prudente arbitrio.
c)  Si la sesión terminase sin que se hubiesen debatido y resuelto todos los asuntos incluidos  en el orden del día, el Presidente no podrá levantar la sesión hasta que no se fije la próxima  fecha de celebración.
d)  Durante el transcurso de la sesión, el Presidente podrá acordar interrupciones a su  prudente arbitrio, únicamente para descanso en los debates.

PREGUNTA Nº 532.- Reglas relativas al orden de las intervenciones, en el caso de promoverse debate según  dispone el artículo 94 del Reglamento de Organización, Funcionamiento y Régimen Jurídico  de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre:
a)  Sólo podrá hacerse uso de la palabra previa autorización de Alcalde o Presidente.
b)  Podrán admitirse otras interrupciones que así estime el Presidente como necesarias para el  buen fin del debate.
c)  Quien se considere aludido por una intervención podrá solicitar del Alcalde o Presidente  que se conceda un turno por alusiones, que será breve y conciso.
d)  Si lo solicitara algún grupo, se procederá a un segundo turno.

PREGUNTA Nº 533.- ¿Cuál de las siguientes definiciones se refiere a "proposición" tal y como se recoge en el  artículo 97 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las  Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre?
a)  Es la propuesta que se somete al Pleno relativa a un asunto incluido en el orden del día,  que acompaña a la convocatoria, en virtud de lo dispuesto en el artículo 82.3 de este  Reglamento. Contendrá una parte expositiva o justificación y un acuerdo, asimismo, a  adoptar.
b)  Es la propuesta sometida al pleno tras el estudio del expediente por la Comisión  Informativa. Contiene una parte expositiva y un acuerdo a adoptar.
c)  Es la propuesta que se somete directamente a conocimiento del Pleno. Podrá formularse  por escrito u oralmente.
d)  Es la propuesta de modificación de un dictamen formulada por un miembro que forma  parte de la Comisión Informativa.    

PREGUNTA Nº 534.- Señale la respuesta correcta según lo dispuesto en el artículo 86 del Reglamento de  Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por  Real Decreto 2568/1986, de 28 de noviembre:
a)  Las convocatorias de las sesiones, los órdenes del día, mociones, votos particulares,  propuestas de acuerdo y dictámenes de las Comisiones informativas se redactarán en  lengua castellana o en la lengua cooficial en la Comunidad Autónoma a la que pertenezca la  entidad.
b)  Siempre se redactarán los acuerdos en la lengua cooficial en la Comunidad autónoma a la  que pertenezca la Corporación.
c)  Cuando lo exija la Corporación, se redactarán los acuerdos en la lengua oficial en la  Comunidad Autónoma.
d)  En los debates se tendrá que fijar con anterioridad el uso de la lengua castellana

PREGUNTA Nº 535.- La siguiente definición: " Es la propuesta de modificación de un dictamen o proposición  presentada por cualquier miembro, mediante escrito presentado al Presidente antes de  iniciarse la deliberación del asunto."  ¿Con cuál de las siguientes se corresponde?:
a)  Ruego (artículo 97.6 del ROF)
b)  Moción (artículo 97.3 del ROF)
c)  Enmienda (artículo 97.5 del ROF)
d)  Dictamen (Artículo 97.1 del ROF)

PREGUNTA Nº 536.- Respecto a las preguntas que se pueden realizar en el seno del Pleno, señale la opción  correcta según se regula en el Reglamento de Organización, Funcionamiento y Régimen  Jurídico de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de  noviembre:
a)  Sólo pueden plantear preguntas los miembros de la Corporación.
b)  Las preguntas formuladas por escrito podrán ser contestadas por escrito o verbalmente en  la sesión siguiente.
c)  Las preguntas formuladas por escrito con veinticuatro horas de antelación, serán  contestadas ordinariamente en la sesión o, por causas debidamente motivadas, en la  siguiente.
d)  Pregunta es la formulación de cualquier cuestión dirigida a alguno de los órganos de  gobierno municipal.

PREGUNTA Nº 537.- ¿Cuándo se considera abstención en la votación tal y como se regula en el Reglamento de  Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por  Real Decreto 2568/1986, de 28 de noviembre?
a)  En ningún caso puede abstenerse un miembro de la Corporación de votar.
b)  Cuando los miembros de la Corporación se hubieran ausentado del Salón de Sesiones una  vez iniciada la deliberación del asunto y no estuvieren presentes en el momento de la  votación.
c)  En el supuesto de abandono del Salón de sesiones, no podrán reintegrarse para poder votar  los miembros de la Corporación.
d)  Cuando los miembros de la Corporación se hubieran ausentado del Salón de Sesiones antes  de iniciada la deliberación del asunto y no estuvieren presentes en el momento de la  votación.    

PREGUNTA Nº 538.- ¿Cómo pueden ser las votaciones de las sesiones del Pleno según dispone el artículo 101  del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades  Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre?
a)  Ordinarias, nominales y secretas.
b)  Ordinarias y nominales.
c)  Nominales y secretas.
d)  Ordinarias, nominales, secretas y urgentes.

PREGUNTA Nº 539.- ¿Qué acuerdos se considerarán nulos según se recoge en el artículo 83 del Reglamento de  Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por  Real Decreto 2568/1986, de 28 de noviembre?
a)  Los acuerdos adoptados sobre asuntos no comprendidos en su convocatoria.
b)  Todos los acuerdos que no hayan sido objeto de debate.
c)  Los acuerdos adoptados en sesiones ordinarias sobre asuntos no comprendidos en su  convocatoria.
d)  Los acuerdos adoptados en sesiones ordinarias sobre materias no incluidas en el respectivo  orden del día, salvo especial y previa declaración de urgencia hecha por el Órgano  correspondiente.

PREGUNTA Nº 540.- ¿Cuál se considera el sistema normal de votación en la sesiones del Pleno, según se  dispone en el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las  Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre?
a)  El sistema normal de votación es indistintamente ordinaria y nominal.
b)  Para que el sistema de votación nominal sea el normal, requerirá la solicitud de un grupo  municipal aprobada por el Pleno por una mayoría simple en votación ordinaria.
c)  El sistema normal será la votación ordinaria.
d)  El sistema normal será la votación secreta.

PREGUNTA Nº 541.- ¿Cómo se lleva a cabo el control y fiscalización por el Pleno de la actuación de los demás  órganos de gobierno según lo dispuesto en el artículo 104 del Reglamento de Organización,  Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por Real Decreto  2568/1986, de 28 de noviembre?
a)  A través del Requerimiento de presencia e información de miembros corporativos que  ostenten delegación o a través del debate sobre la actuación de la Comisión de Gobierno.
b)  Sólo existe la posibilidad de llevarlo a cabo a través de la Moción de censura al Alcalde o  Presidente.
c)  El Reglamento Orgánico Municipal podrá establecer otros medios de control y fiscalización  de los órganos de gobierno.
d)  El Reglamento Orgánico Municipal no podrá establecer otros medios de control y  fiscalización de los órganos de gobierno.    

PREGUNTA Nº 542.- ¿De qué manera puede acordarse la celebración de sesión extraordinaria cuyo objeto sea  someter a debate la gestión de la Comisión de Gobierno, según regula el artículo 106 del  Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales,  aprobado por Real Decreto 2568/1986, de 28 de noviembre?
a)  El Pleno, a propuesta del alcalde o Presidente o mediante solicitud de la cuarta parte, al  menos, del número legal de miembros corporativos, podrá acordar dicha celebración.
b)  Sólo podrá acordarse dicha celebración cuando lo soliciten todos los miembros  corporativos.
c)  El Pleno, a propuesta del alcalde o Presidente o mediante solicitud de la tercera parte, al  menos, del número legal de miembros corporativos, podrá acordar dicha celebración.
d)  Sólo podrá acordarse dicha celebración cuando lo soliciten la cuarta parte de los miembros  corporativos.

PREGUNTA Nº 543.- De todos los siguientes, ¿qué no deberá constar en el expediente de la convocatoria de  una sesión, ordinaria o extraordinaria, según dispone el artículo 81 del Reglamento de  Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por  Real Decreto 2568/1986, de 28 de noviembre?
a)  La fijación del Orden del día por el Alcalde o Presidente.
b)  La relación de expedientes preparatorios de la sesión realizados por la Secretaría con un  representación de los miembros de la Corporación.
c)  Las copias de las notificaciones cursadas a los miembros de la Corporación.
d)  Publicación de acuerdos en el tablón de edictos.

PREGUNTA Nº 544.- ¿Qué puntos tienen que constar en el acta que extienda el Secretario de cada sesión,  según dispone el artículo 109 del Reglamento de Organización, Funcionamiento y Régimen  Jurídico de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de  noviembre?
a)  Lugar; Día, mes y año; Hora de inicio; Carácter de la sesión; Asuntos a examinar;  Votaciones; Parte dispositiva de los acuerdos y hora de fin de  la sesión.
b)  Día, mes y año; Hora de inicio; Nombre y apellidos del Presidente, de los miembros  presentes, ausentes y ausentes sin excusa; Carácter de la sesión; Asistencia del Secretario;   Asuntos a examinar; Votaciones; Parte dispositiva de los acuerdos y hora en que el  Presidente levante la sesión.
c)  Lugar; Día, mes y año; Hora de inicio; Nombre y apellidos del Presidente, de los miembros  presentes, ausentes y ausentes sin excusa; Carácter de la sesión;  Asuntos a examinar;  Votaciones; Parte dispositiva de los acuerdos y hora en que el Presidente levante la sesión.
d)  Lugar; Día, mes y año; Hora de inicio; Nombre y apellidos del Presidente, de los miembros  presentes, ausentes y ausentes sin excusa; Carácter de la sesión; Asistencia del Secretario;   Asuntos a examinar; Votaciones; Parte dispositiva de los acuerdos y hora en que el  Presidente levante la sesión.

PREGUNTA Nº 545.- Cuando se produce un empate en una votación, ¿qué ocurre según la Ley 7/1985, de 2 de  abril, Reguladora de las Bases de Régimen Local?
a)  Se repite la votación, y si el empate persiste, decide el voto de calidad del Presidente.
b)  Se vuelve a votar al final de la sesión, y en caso de persistir el empate, se queda sobre la  mesa para la siguiente sesión.
c)  Se deja el asunto sobre la mesa.
d)  Se vuelve a votar, y si persiste el empate, se realiza una última votación.  

PREGUNTA Nº 546.- Respecto al Régimen de funcionamiento de los órganos colegiados locales, ¿Qué dispone el  artículo 46 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local?  (Señale la incorrecta)  :
a)  Los órganos colegiados de las entidades locales funcionan en régimen de sesiones  ordinarias de periodicidad preestablecida y extraordinarias, que pueden ser, además  urgentes.
b)  El Pleno celebra sesión ordinaria como mínimo cada mes en los Ayuntamientos de  municipios de más de 20.000 habitantes y en las Diputaciones Provinciales.; cada dos  meses en los Ayuntamientos con población entre 5001 y 20.000; y cada tres en los  municipios de hasta 5000 habitantes.
c)  El Pleno celebra sesión ordinaria y extraordinaria cuando así lo solicite la tercera parte del  número legal de miembros de la Corporación, como mínimo cada mes en los  Ayuntamientos de municipios de más de 20.000 habitantes y en las Diputaciones  Provinciales.; cada dos meses en los Ayuntamientos con población entre 5001 y 20.000; y  cada tres en los municipios de hasta 5000 habitantes.
d)  El Pleno celebra sesión extraordinaria cuando así lo decida el Presidente o lo solicite la  cuarta parte, al menos, del número legal de miembros de la Corporación, sin que ningún  concejal pueda solicitar más de tres anualmente.

PREGUNTA Nº 547.- ¿Cuándo se entiende constituido el Pleno según dispone la Ley 7/1985, de 2 de abril,  Reguladora de las Bases del Régimen Local?:
a)  El Pleno se constituye válidamente con la asistencia de un tercio del mínimo legal de  miembros del mismo, que nunca podrá ser inferior a tres.
b)  El Pleno se constituye válidamente con la asistencia de una cuarta parte del mínimo legal  de miembros del mismo, que nunca podrá ser inferior a tres.
c)  El Pleno se constituye válidamente con la asistencia de un tercio del mínimo legal de  miembros del mismo, que nunca podrá ser inferior a cinco.
d)  El Pleno se constituye válidamente con la asistencia del Presidente y del Secretario, y del  número legal de miembros del mismo, que nunca deberá ser inferior a dos.

PREGUNTA Nº 548.- ¿Qué se consideran como medios electrónicos válidos para poder celebrar sesiones, según  dispone el artículo 46. 3 de la Ley 7/1985, de 2 de abril?
a)  Las audio conferencias y videoconferencias que garanticen la seguridad tecnológica.
b)  Las audio conferencias, videoconferencias u otros sistemas tecnológicos o audiovisuales  que garanticen adecuadamente la seguridad tecnológica, la efectiva participación política  de sus miembros, la validez del debate y votación de los acuerdos que se adopten.
c)  Las audio conferencias, videoconferencias u otros sistemas tecnológicos o audiovisuales  que garanticen adecuadamente la seguridad tecnológica, y la protección de datos de  carácter personal, la efectiva participación política de sus miembros, la validez del debate y  votación de los acuerdos que se adopten.
d)  Las audio conferencias y videoconferencias que garanticen la seguridad tecnológica y la  protección de datos de carácter personal.    

PREGUNTA Nº 549.- ¿A quién  corresponde fijar la periodicidad de las sesiones ordinarias según se recoge en el  Artículo 78.1 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las  Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre?:
a)  Por acuerdo del Pleno en sesión extraordinaria, que habrá de convocar el Alcalde o  Presidente dentro de los treinta días siguientes al de la sesión constitutiva de la  Corporación.
b)  Por acuerdo del Pleno en sesión extraordinaria, que habrá de convocar el Alcalde o  Presidente dentro de los veinte días siguientes al de la sesión constitutiva de la  Corporación.
c)  Por acuerdo del Alcalde o Presidente dentro de los treinta días siguientes al de la sesión  constitutiva de la Corporación.
d)  Por acuerdo del alcalde o Presidente en sesión ordinaria dentro de los veinte días  siguientes al de la sesión constitutiva de la Corporación.

PREGUNTA Nº 550.- ¿Cómo se adoptan los acuerdos de las corporaciones locales? (Artículo 47 de la Ley 7/1985,  de 2 de abril, Reguladora de las Bases del Régimen Local)
a)  Como regla general, por mayoría simple.
b)  Como regla general, por mayoría simple de los miembros presentes y no presentes.
c)  Como regla general, por mayoría simple de los miembros presentes.
d)  Siempre, por mayoría simple.

PREGUNTA Nº 551.- ¿Para la adopción de qué tipo de acuerdos se requiere el voto favorable de la mayoría  absoluta del número legal de miembros de las corporaciones según el artículo 47 de la Ley  7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  Modificar la delimitación del término municipal.
b)  Aprobar y modificar el reglamento orgánico propio de la corporación.
c)  Crear términos municipales.
d)  Cesión por cualquier título del aprovechamiento de los bienes demaniales.

PREGUNTA Nº 552.- ¿Para la adopción de qué tipo de acuerdos se requiere el voto favorable de la mayoría  absoluta del número legal de miembros de las corporaciones según el artículo 47 de la Ley  7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local? (Señale la opción  incorrecta)  
a)  Cesión gratuita de bienes a otras Administraciones o instituciones públicas.
b)  Enajenación de bienes, cuando su cuantía exceda del 30 por ciento de los recursos  ordinarios de su presupuesto.
c)  Alteración de la calificación jurídica de los bienes demaniales o comunales.
d)  Cesión por cualquier título del aprovechamiento de los bienes comunales.    

PREGUNTA Nº 553.- ¿Quién cursará la solicitud en los asuntos en que sea preceptivo el dictamen del Consejo  de Estado, según el artículo 48 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del  Régimen Local?
a)  Por el Presidente de la Comunidad Autónoma a solicitud del alcalde respectivo.
b)  Cuando deba ser solicitado conjuntamente por Entidades pertenecientes al ámbito  territorial de distintas Comunidades Autónomas, la solicitud se cursará por conducto de  todos los Presidentes de las Comunidades afectadas.
c)  Cuando deba ser solicitado conjuntamente por Entidades pertenecientes al ámbito  territorial de distintas Comunidades Autónomas, la solicitud se cursará por conducto del  Ministerio de Administraciones Públicas a petición de la Entidad de mayor población.
d)  Cuando deba ser solicitado conjuntamente por Entidades pertenecientes al ámbito  territorial de distintas Comunidades Autónomas, la solicitud se cursará por conducto del  Ministerio de Administraciones Públicas a petición de cualquiera de las Entidades.

PREGUNTA Nº 554.- Según se regula en el Reglamento Orgánico de la Diputación Provincial de Málaga, señale  la respuesta correcta en relación al Régimen general de las sesiones ordinarias del Pleno:
a)  El Pleno celebrará sesiones ordinarias, como máximo, con carácter mensual.
b)  El Pleno celebrará sesiones ordinarias, como mínimo, cada dos meses.
c)  El Pleno celebrará sesiones ordinarias, como mínimo, con carácter mensual, respetando en  todo caso la periodicidad establecida mediante acuerdo del propio Pleno, en el que se  concretará, además,  fecha y hora de celebración.
d)  El Pleno celebrará sesiones ordinarias, como máximo, cada dos meses, respetando en todo  caso la periodicidad establecida mediante acuerdo del propio Pleno, en el que se  concretará, además,  fecha y hora de celebración.

PREGUNTA Nº 555.- ¿Qué límite establece el Reglamento Orgánico de la Diputación Provincial de Málaga a los  Diputados en cuanto a la celebración de sesiones extraordinarias del Pleno?
a)  Ningún Diputado podrá suscribir más de tres solicitudes al año.
b)  Ningún Diputado podrá suscribir más de tres solicitudes al año, computándose las  solicitudes que no lleguen a tramitarse por falta de los requisitos de admisibilidad  requeridos.
c)  Ningún Diputado podrá suscribir más de cinco solicitudes al año.
d)  Ningún Diputado podrá suscribir más de cinco solicitudes al año, computándose las  solicitudes que no lleguen a tramitarse por falta de los requisitos de admisibilidad  requeridos.

PREGUNTA Nº 556.- La convocatoria de las sesiones ordinarias del Pleno se efectuará con una antelación  mínima, según dispone el artículo 80 del ROF:
a)  48 horas.
b)  Dos días naturales.
c)  Dos días hábiles.
d)  En función de la urgencia.    

PREGUNTA Nº 557.- Respecto al Régimen general de las sesiones extraordinarias de carácter urgente, el  Reglamento Orgánico de la Diputación de Málaga establece:
a)  Se celebrarán con tal carácter cuando sean convocadas por el Presidente, en los supuestos  en que, por razones de urgencia debidamente motivadas, no se pueda convocar la sesión  con la antelación legalmente requerida.
b)  Se celebrarán con tal carácter cuando sean convocadas por el Presidente, en los supuestos  en que vengan tasados en el propio Reglamento Orgánico.
c)  Se celebrará cuando sean convocadas por cualquiera de los Diputados o por el Presidente y  existan razones de urgencia motivadas.
d)  Es necesario que el primer punto del orden del día sea la aprobación de su urgencia.

PREGUNTA Nº 558.- ¿Qué se incluirá en la Parte resolutiva del orden del día de las sesiones del Pleno de  carácter ordinario según el artículo 76 del Reglamento Orgánico de la Diputación Provincial  de Málaga? (Señale la incorrecta)  :
a)  Las propuestas de la Secretaría General relativas a la aprobación de actos de sesiones  anteriores.
b)  Las proposiciones dictaminadas.
c)  Los dictámenes y/o proposiciones urgentes presentados una vez confeccionado el orden  del día.
d)  Las propuestas dictaminadas por las comisiones informativas, ordenadas por áreas y  servicios.

PREGUNTA Nº 559.- En la Parte correspondiente de control y fiscalización del orden del día de las sesiones del  Pleno de carácter ordinario, ¿ cuál es el orden correcto de los asuntos, según el Reglamento  Orgánico de la Diputación de Málaga?
a)  Tribuna de Alcaldes, Mociones que presenten los diferentes grupos políticos o Diputados,  Mociones urgentes presentadas una vez confeccionado el orden del día, Conocimiento de  los Decretos de la Presidencia y de sus Delegados, ruegos, Preguntas y Comparecencias.
b)  Tribuna de Alcaldes, Mociones que presenten los diferentes grupos políticos o Diputados,  Conocimiento de los Decretos de la Presidencia y de sus Delegados, Mociones urgentes  presentadas una vez confeccionado el orden del día,  ruegos, Preguntas y Comparecencias.
c)  Mociones que presenten los diferentes grupos políticos o Diputados, Mociones urgentes  presentadas una vez confeccionado el orden del día, Conocimiento de los Decretos de la  Presidencia y de sus Delegados, ruegos, Preguntas y Comparecencias.
d)  Mociones que presenten los diferentes grupos políticos o Diputados, Mociones urgentes  presentadas una vez confeccionado el orden del día, Conocimiento de los Decretos de la  Presidencia y de sus Delegados, Preguntas y Comparecencias y  ruegos.

PREGUNTA Nº 560.- ¿Cómo se constituye válidamente el Pleno, según el Reglamento Orgánico de la Diputación  Provincial de Málaga?
a)  Con la asistencia del Presidente y la mitad del número legal de sus miembros.
b)  Con la asistencia del Presidente, y en todo caso se requerirá la presencia del Interventor.
c)  Con la asistencia del Presidente o de quien legalmente le sustituya en estas funciones, y un  tercio del número legal de sus miembros.
d)  Con la asistencia del Presidente o de quien legalmente le sustituya en estas funciones, y la  mitad del número legal de sus miembros.    

PREGUNTA Nº 561.- Respecto a los debates de las sesiones del Pleno, señale la opción correcta, según lo  dispuesto en el Reglamento Orgánico de la Diputación Provincial de Málaga:
a)  Sólo se podrá hacer uso de la palabra, previa petición cuando así haya sido autorizado por  el Presidente.
b)  El debate se iniciará con una exposición de la propuesta a cargo del Presidente o de quien  le sustituya legalmente.
c)  Si lo solicitara algún Diputado, el Presidente abrirá un segundo turno de intervenciones.
d)  Cerrará el segundo turno de intervenciones, en caso de que se haya abierto, el Presidente.

PREGUNTA Nº 562.- Las sesiones extraordinarias de los órganos colegiados pueden ser además: (Artículo 77  Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales,  aprobado por Real Decreto 2568/1986, de 28 de noviembre)
a)  No existen.
b)  Periódicas.
c)  Urgentes.
d)  Especiales y urgentes.

PREGUNTA Nº 563.- ¿Quiénes tienen derecho a obtener copias y certificaciones acreditativas de los acuerdos  de los órganos de gobierno y administración de las entidades locales, así como a consultar  los archivos y registros? (Artículo 207 Reglamento de Organización, Funcionamiento y  Régimen Jurídico de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de  noviembre)
a)  Todos los ciudadanos.
b)  Todos los españoles.
c)  Todos los que tengan la condición de vecino del ámbito territorial.
d)  Todos los residentes en territorio español.

PREGUNTA Nº 564.- Señale la respuesta correcta en relación a los Libros de Actas que se regula en el  Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales,  aprobado por Real Decreto 2568/1986, de 28 de noviembre:
a)  Todos los Libros de Actas deberán ser redactadas en todos los idiomas que puedan  requerirse para su buen uso y entendimiento.
b)  El Alcalde custodiará los Libros de Actas, bajo su responsabilidad, en la Casa Consistorial.
c)  El Secretario estará obligado a expedir certificaciones o testimonios de los acuerdos que  dicho Libro contenga cuando así lo reclamen de oficio las autoridades competentes.
d)  Tanto el Alcalde como el Secretario son responsables del custodio de los Libros de Actas.      

PREGUNTA Nº 565.- De los siguientes, ¿cuáles son los requisitos que debe cumplir El Libro de Actas? (Según  dispone el artículo 198 del Reglamento de Organización, Funcionamiento y Régimen Jurídico  de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre)
a)  Ha de estar previamente foliado y encuadernado y legalizada cada hoja con la rúbrica del  Alcalde o Presidente.
b)  Ha de estar previamente foliado y encuadernado, legalizada cada hoja con la rúbrica del  Alcalde o Presidente y el sello de la Corporación, y expresará en su primera página,  mediante diligencia de apertura firmada por el Secretario, el número de folios y la fecha en  que se inicia la transcripción de los acuerdos.
c)  Ha de estar previamente foliado y encuadernado, legalizada cada hoja con la rúbrica del  Alcalde o Presidente y el sello de la Corporación, y expresará en su primera página,  mediante diligencia de apertura firmada por el Secretario, el número de folios y la fecha en  que se inicia la transcripción de los acuerdos. Además, habrá de utilizarse en todo caso, el  papel timbrado del Estado.
d)  Ha de estar previamente foliado y encuadernado, legalizada cada hoja con la rúbrica del  Alcalde o Presidente y el sello de la Corporación, y expresará en su primera página,  mediante diligencia de apertura firmada por el Alcalde, el número de folios y la fecha en  que se inicia la transcripción de los acuerdos. Además, habrá de utilizarse en todo caso, el  papel timbrado del Estado.

PREGUNTA Nº 566.- El Artículo 78.2 del Reglamento de Organización, Funcionamiento y Régimen Jurídico de las  Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre, hace  referencia a las sesiones extraordinarias; según el cual, ¿Quién y cómo se convocan las  mismas?
a)  Son aquellas que convoque el Alcalde o Presidente con tal carácter, por iniciativa propia, y  habrá de hacerse por escrito obligatoriamente.
b)  Son aquellas que convoca el Alcalde o Presidente con tal carácter, a solicitud de la cuarta  parte, al menos, del número legal de miembros de la Corporación. Tal solicitud no es  obligatoria hacerla por escrito.
c)  Son aquellas que convoque el Alcalde o Presidente con tal carácter, por iniciativa propia o a  solicitud de la tercera parte del número legal de miembros de la Corporación. Tal solicitud   habrá de hacerse por escrito en el que se razón el asunto o asuntos que la motiven, firmado  personalmente por todos los que la suscriben.
d)  Son aquellas que convoque el Alcalde o Presidente con tal carácter, por iniciativa propia o a  solicitud de la cuarta parte, al menos, del número legal de miembros de la Corporación. Tal  solicitud  habrá de hacerse por escrito en el que se razón el asunto o asuntos que la  motiven, firmado personalmente por todos los que la suscriben.

PREGUNTA Nº 567.- Según regula el artículo 197 del Reglamento de Organización, Funcionamiento y Régimen  Jurídico de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de  noviembre: ¿con qué frecuencia se publicará un boletín de información municipal o  provincial donde se inserte un extracto de todos los acuerdos y resoluciones?
a)  Al menos una vez al año.
b)  Al menos una vez cada seis meses.
c)  Al menos una vez al trimestre.
d)  Al menos una vez cada cuatro meses.    

PREGUNTA Nº 568.- Respecto a la publicidad de los actos y acuerdos regulada en el Reglamento de  Organización, Funcionamiento y Régimen Jurídico de las Entidades Locales, aprobado por  Real Decreto 2568/1986, de 28 de noviembre, señale la opción falsa:
a)  Los acuerdos que adopten el Pleno y la Comisión de Gobierno, cuando tengan carácter  decisorio, se publican y notifican en la forma prevista por la Ley.
b)  En el plazo de siete días posteriores a la adopción de los actos y acuerdos, se remitirán al  Gobernador civil o Delegado del Gobierno, en su caso, y a la Administración autonómica,  copia o, en su caso, extracto comprensivo de las resoluciones y acuerdos de los órganos de  gobierno municipales.
c)  El Alcalde o Presidente de la Corporación y, de forma inmediata, el Secretario de la  Corporación, serán responsables del cumplimiento de remitir copia o extracto comprensivo  de las resoluciones y acuerdos de los órganos de gobierno municipales.
d)  Las Resoluciones del Alcalde o Presidente de la Corporación se publican y notifican en la  forma prevista en la Ley.

PREGUNTA Nº 569.- Respecto a los asuntos incluidos en el escrito de solicitud de una sesión extraordinaria,  ¿pueden ser modificados  según dispone el Reglamento de Organización, Funcionamiento y  Régimen Jurídico de las Entidades Locales, aprobado por Real Decreto 2568/1986, de 28 de  noviembre?
a)  La relación de asuntos incluidos en el escrito no enerva la faculta del Alcalde o Presidente  para determinar los puntos del Orden del día, si bien la exclusión de éste de alguno de los  asuntos propuestos deberá ser motivada.
b)  La relación de asuntos incluidos en el escrito no enerva la faculta del Alcalde o Presidente  para determinar los puntos del Orden del día, si bien la exclusión de éste de alguno de los  asuntos propuestos deberá ser motivada y votada por los miembros que hayan presentado  la solicitud de la convocatoria.
c)  La relación de asuntos incluidos en el escrito no enerva la faculta de los miembros que  hayan presentado la solicitud de convocatoria para determinar los puntos del Orden del  día, si bien la exclusión de éstos de alguno de los asuntos propuestos deberá ser motivada.
d)  La relación de asuntos incluidos en el escrito no enerva la faculta de los miembros que  hayan presentado la solicitud de convocatoria para determinar los puntos del Orden del  día, si bien la exclusión de éstos de alguno de los asuntos propuestos deberá ser motivada y  aceptada por el Alcalde.

PREGUNTA Nº 570.- Según el Reglamento de Organización, Funcionamiento y Régimen Jurídico de las Entidades  Locales, aprobado por Real Decreto 2568/1986, de 28 de noviembre, las sesiones ordinarias  del Pleno son aquellas que:
a)  Se convocan por el Presidente.
b)  Sólo tratan asuntos, pero no los votan.
c)  Tienen una periodicidad establecida de antemano.
d)  Se convocan a solicitud de los concejales.        

PREGUNTA Nº 571.- El personal al servicio de las entidades locales estará integrado según el artículo 89 de la  Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local:
a)  Por funcionarios de carrera.
b)  Por funcionarios de carrera y contratados en régimen de derecho laboral.
c)  Por funcionarios de carrera, contratados en régimen de derecho laboral y personal  eventual que desempeña puestos de confianza o asesoramiento especial.
d)  Por funcionarios de carrera y personal eventual.

PREGUNTA Nº 572.- ¿A qué principios deberán responder las plantillas que cada Corporación local aprueba  anualmente, según el artículo 90 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local?
a)  A los principios de racionalidad y economía.
b)  A los principios de transparencia, racionalidad y economía.
c)  A los principios de transparencia, igualdad, racionalidad y economía.
d)  A los principios de racionalidad, economía y eficiencia.

PREGUNTA Nº 573.- ¿A quién corresponde, según la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local, establecer las normas con arreglo a las cuales hayan de confeccionarse las  relaciones de puestos de trabajo, descripción de puestos de trabajo tipo y las condiciones  requeridas para su creación y las normas básicas de la carrera administrativa?
a)  A cada Corporación Local.
b)  Al Estado.
c)  A las Comunidades Autónomas.
d)  Al Estado, con la asistencia de las Comunidades Autónomas.

PREGUNTA Nº 574.- La condición de funcionario de carrera se adquiere por el cumplimiento sucesivo de os  siguientes requisitos: (según el artículo 137 RDL 781/1986, de 18 de abril, por el que se  aprueba el texto refundido de las disposiciones legales vigentes en materia de Régimen  Local)
a)  Superación de pruebas y, en su caso, de cursos; nombramiento; prestar juramento o  promesa en la forma legalmente establecida y tomar posesión dentro del plazo señalado  reglamentariamente.
b)  Superación de pruebas; nombramiento; superación de cursos; prestar juramento y tomar  posesión en el plazo fijado por Ley.
c)  Superación de pruebas; nombramiento; prestar juramento en la forma legalmente  establecida y tomar posesión dentro del plazo señalado por ley.
d)  Superación de ejercicios, y en su caso, de entrevistas; prestar promesa y tomar posesión en  el plazo señalado por la autoridad competente.    

PREGUNTA Nº 575.- Respecto a la evaluación del desempeño, regulado en el artículo 20 del Real Decreto  Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto Básico del Empleado Público, señale la incorrecta:
a)  Las Administraciones Públicas establecerán sistemas que permitan la evaluación del  desempeño de sus empleados.
b)  La evaluación del desempeño es el procedimiento mediante el cual se mide y valora la  conducta profesional y el rendimiento o el logro de resultados.
c)  Los sistemas de evaluación del desempeño se adecuarán, en todo caso, a criterios de  transparencia, objetividad, imparcialidad y no discriminación y se aplicarán sin tener en  cuenta los derechos de los empleados públicos.
d)  Las Administraciones Públicas determinarán los efectos de la evaluación en la carrera  profesional horizontal, la formación, la provisión de puestos de trabajo y en la percepción  de las retribuciones complementarias.

PREGUNTA Nº 576.- El derecho de huelga se recoge en el artículo de la Constitución Española de 1978:
a)  7
b)  28
c)  37
d)  106

PREGUNTA Nº 577.- Clasificación  del personal al Servicio de la Administración de la Junta de Andalucía, según  el artículo 16 de la Ley 6/1985, de 28 de noviembre, de Ordenación de la Función Pública de  la Junta de Andalucía:
a)  Funcionarios, eventuales e interinos.
b)  Funcionarios, eventuales, interinos y laborales.
c)  Funcionarios, eventuales y laborales.
d)  Funcionarios y laborales.

PREGUNTA Nº 578.- ¿A qué tipo de personal al servicio de la Administración de la Junta de Andalucía  corresponde con la siguiente definición de acuerdo con la Ley 6/1985, de Ordenación de la  Función Pública de la Junta de Andalucía: "quienes ocupan puestos de trabajo expresamente  calificados como de confianza o asesoramiento especial"?
a)  Funcionarios, eventuales e interinos.
b)  Eventuales
c)  Interinos
d)  Laborales

PREGUNTA Nº 579.- De acuerdo con lo establecido en el artículo 20.5 del Real Decreto Legislativo 5/2015, de 30  de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del  Empleado Público, la continuidad en un puesto de trabajo obtenido por concurso quedará  vinculada a la evaluación del desempeño de acuerdo con los sistemas de evaluación que  cada Administración Pública determine:
a)  Dándose audiencia al interesado, y por la correspondiente resolución motivada.
b)  Sin audiencia al interesado, y por la correspondiente resolución motivada.
c)  Dándose audiencia al interesado sin necesidad de resolución motivada.
d)  Sin audiencia al interesado, y sin necesidad de resolución.    

PREGUNTA Nº 580.- De acuerdo con el artículo 22 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público, las  retribuciones de los funcionarios de carrera se clasifican en:
a)  Básicas y complementarias.
b)  Básicas y extraordinarias.
c)  Básicas, complementarias y extraordinarias.
d)  Sueldo y trienios.

PREGUNTA Nº 581.- Retribuyen al funcionario según la adscripción de su cuerpo o escala a un determinado  Subgrupo o Grupo de clasificación profesional, en el supuesto de que éste no tenga  Subgrupo, y por su antigüedad en el mismo: (art. 22 del Real Decreto Legislativo 5/2015, de  30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del  Empleado Público.):
a)  Pagas extraordinarias.
b)  Retribuciones básicas y complementarias.
c)  Retribuciones complementarias.
d)  Retribuciones básicas.

PREGUNTA Nº 582.- ¿Qué dispone el artículo 92 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local, respecto de los Funcionarios al servicio de la Administración Local?
a)  Los funcionarios al servicio de la Administración local se rigen, en lo no dispuesto por esta  Ley, por la legislación de La Comunidad Autónoma Correspondiente.
b)  Con carácter ordinario, los puestos de trabajo serán desempeñados por personal  funcionario e interinos.
c)  Corresponde exclusivamente a los funcionarios de carrera al servicio de la Administración  local el ejercicio de funciones que impliquen la participación directa o indirecta en el  ejercicio de potestades públicas o en la salvaguardia de los intereses generales.
d)  Son funciones públicas aquellas cuyo ejercicio corresponde al personal que tenga la  condición de funcionario o interino y que impliquen ejercicio de autoridad.

PREGUNTA Nº 583.- Respecto a los funcionarios de administración local con habilitación de carácter nacional,  regulado en la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local, señale la  opción incorrecta:
a)  La escala de funcionarios de administración local con habilitación de carácter nacional se  subdivide en las siguientes subescalas:  Secretaría, Intervención-tesorería, y Secretaría-  intervención.
b)  La aprobación de la oferta de empleo público, selección, formación y habilitación de los  funcionarios de administración local con habilitación de carácter nacional corresponde al  Estado, a través del Ministerio de Hacienda y Administraciones Públicas.
c)  El Gobierno, mediante real decreto, regulará las especialidades correspondientes de la  forma de provisión de puestos reservados a funcionarios de administración local con  habilitación de carácter nacional.
d)  En todo caso, el concurso- oposición será el sistema normal de provisión de puestos de  trabajo. El ámbito territorial de los concursos- oposición será de carácter estatal.    

PREGUNTA Nº 584.- ¿Cómo se lleva a cabo la selección de todo el personal, sea funcionario o laboral, según lo  dispuesto en el artículo 91 de Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen  Local? (Señale la más correcta)  
a)  De acuerdo con la oferta de empleo público, mediante convocatoria pública, y a través del  sistema de concurso, oposición o concurso-oposición libre.
b)  Mediante el sistema de concurso o concurso- oposición, preferentemente.
c)  Siempre a través de procesos selectivos en los que se garanticen los principios jurídicos de  igualdad, mérito y capacidad, así como el de publicidad y transparencia.
d)  De acuerdo con la oferta de empleo público, mediante convocatoria pública, a través del  sistema de concurso, oposición o concurso-oposición libre, en los que se garanticen, en  todo caso, los principios constitucionales de igualdad, mérito y capacidad, así como el de  publicidad.

PREGUNTA Nº 585.- A los efectos de la negociación colectiva de los funcionarios públicos, se constituirá una  Mesa General de Negociación (artículo 34 del Real Decreto Legislativo 5/2015, de 30 de  octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado  Público)
a)  En el ámbito de las Administración General del Estado, así como en cada una de las  Comunidades autónomas, Ciudades de Ceuta y Melilla y Entidades Locales.
b)  En el ámbito de la Administración General del Estado, así como en cada una de las  Comunidades autónomas y en las Ciudades de Ceuta y Melilla.
c)  En el ámbito de la Administración General del Estado, así como en cada una de las   Comunidades Autónomas.
d)  En el ámbito de la Administración General del Estado.

PREGUNTA Nº 586.- Los funcionarios de carrera se hallarán en alguna de las siguientes situaciones (señale la  incorrecta)  : Artículo 85 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se  aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público:
a)  Excedencia.
b)  Servicios especiales.
c)  Expectativa de destino.
d)  Suspensión de funciones.

PREGUNTA Nº 587.- Quienes, conforme a la normativa de función pública dictada en desarrollo del presente  Estatuto, presten servicios en su condición de funcionarios públicos cualquiera que sea la  Administración u organismo público o entidad en el que se encuentren destinados y no les  corresponda quedar en otra situación, se hallarán en situación de:
a)  Excedencia.
b)  Servicios especiales
c)  Servicio activo.
d)  Suspensión de funciones.    

PREGUNTA Nº 588.- ¿A qué concepto se refiere la siguiente definición?, tal y como establece el Real Decreto  Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto Básico del Empleado Público: "Retribuyen las características de los puestos de  trabajo, la carrera profesional o el desempeño, rendimiento o resultados alcanzados por el  funcionario":
a)  Retribuciones básicas.
b)  Retribuciones complementarias.
c)  Retribuciones básicas y complementarias.
d)  Pagas extraordinarias.

PREGUNTA Nº 589.- Quienes se encuentren en situación de servicios especiales percibirán: (Artículo 87.2 del  Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido  de la Ley del Estatuto Básico del Empleado Público)
a)  Las retribuciones que les correspondan como funcionario de carrera y no las del puesto o  cargo que desempeñen, sin derecho a percibir los trienios que tengan reconocidos en cada  momento.
b)  Las retribuciones del puesto o cargo que desempeñen y no las que les correspondan como  funcionarios de carrera, sin perjuicio del derecho a percibir los trienios que tengan  reconocidos en cada momento.
c)  Las retribuciones que les correspondan como funcionarios de carrera y no las del puesto o  cargo que desempeñen, sin perjuicio del derecho a percibir los trienios que tengan  reconocidos en cada momento.
d)  Las retribuciones del puesto o cargo que desempeñen y no las que les correspondan como  funcionarios de carrera, sin derecho a percibir los trienios que tengan reconocidos en cada  momento.

PREGUNTA Nº 590.- Los órganos específicos de representación de los funcionarios son:
a)  Los Delegados de Personal.
b)  Las Juntas de Personal.
c)  Los Sindicatos.
d)  Los Delegados de Personal y las Juntas de Personal.

PREGUNTA Nº 591.- ¿A quién corresponde la selección de los funcionarios según el artículo 100 de la Ley  7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local?
a)  A la Administración del Estado, en todo caso.
b)  A la Corporación local respectiva.
c)  Al Presidente de la Corporación local respectiva.
d)  A la Corporación local  respectiva, con la excepción de los funcionarios con habilitación de  carácter nacional.

PREGUNTA Nº 592.- Los funcionarios de carrera que, en virtud de los procesos de transferencias o por los  procedimientos de provisión de puestos de trabajo, obtengan destino en una Administración  Pública distinta, serán declarados en la situación de:
a)  Servicio en otras Administraciones Públicas.
b)  Servicios especiales.
c)  Excedencia.
d)  Suspensión de funciones.    

PREGUNTA Nº 593.- Según el artículo 89 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se  aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público, los  funcionarios de carrera podrán obtener la excedencia voluntaria por interés particular  cuando hayan prestado servicios efectivos en cualquiera de las Administraciones Públicas  durante un:
a)  Período mínimo de 2 años inmediatamente anteriores.
b)  Período mínimo de 3 años inmediatamente anteriores.
c)  Período mínimo de 5 años inmediatamente anteriores.
d)  Período mínimo de 10 años inmediatamente anteriores.

PREGUNTA Nº 594.- En la excedencia por cuidado de familiares, el puesto de trabajo desempeñado se  reservará:
a)  Al menos, durante dos años. Transcurrido este período, dicha reserva lo será a un puesto  en la misma localidad y de igual retribución.
b)  Al menos, durante tres años. Transcurrido este período, dicha reserva lo será a un puesto  en distinta localidad y de igual retribución.
c)  Al menos, durante dos años. Transcurrido este período, dicha reserva lo será a un puesto  en distinta localidad y de igual retribución.
d)  Al menos, durante tres años. Transcurrido este periodo, dicha reserva lo será a un puesto  en la misma localidad y de igual retribución.

PREGUNTA Nº 595.- Señale la respuesta correcta respecto a lo regulado en el artículo 47 bis " teletrabajo" del  Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido  de la Ley del Estatuto Básico del Empleado Público:
a)  Se considera teletrabajo aquella modalidad de prestación de servicios en remoto, siempre  que las necesidades del servicio lo permitan, fuera de las dependencias de la  Administración, mediante el uso de tecnologías de la información y comunicación.
b)  La prestación del servicio mediante teletrabajo habrá de ser expresamente autorizada y  será compatible con la modalidad presencial. En todo caso, tendrá carácter obligatorio y  reversible salvo en supuestos excepcionales debidamente justificados
c)  El personal que preste sus servicios mediante teletrabajo tendrá los mismos deberes y  derechos, individuales y colectivos, recogidos en el presente Estatuto que el resto del  personal que preste sus servicios en modalidad presencial, sin incluir la normativa de  prevención de riesgos laborales.
d)  La Administración proporcionará y mantendrá a las personas que trabajen en esta  modalidad, los medios tecnológicos necesarios para su actividad.

PREGUNTA Nº 596.- Según dispone el Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba  el texto refundido de la Ley del Estatuto Básico del Empleado Público, si en una unidad  electoral hay 125 funcionarios, el número de presentantes de la Junta de Personal será:
a)  5
b)  9
c)  13
d)  17    

PREGUNTA Nº 597.- ¿Cuáles son las causas por las que pierde la condición de funcionario de carrera de la  Administración local según dispone el art. 138 del RDL 781/1986, de 18 de abril?
a)  Renuncia, pérdida de la nacionalidad española,  multa de separación del servicio,   imposición de la pena de inhabilitación absoluta o especial y por jubilación forzosa o  voluntaria.
b)  Renuncia, pérdida de la nacionalidad española,  imposición de la pena de inhabilitación  absoluta o especial y por jubilación voluntaria.
c)  Renuncia, pérdida de la nacionalidad española, sanción disciplinaria de separación del  servicio, por imposición de la pena de inhabilitación absoluta o especial y por jubilación  forzosa o voluntaria.
d)  Renuncia de la nacionalidad española, sanción disciplinaria de separación del servicio, por  imposición de la pena de inhabilitación absoluta y por jubilación forzosa.

PREGUNTA Nº 598.- Según el Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto  refundido de la Ley del Estatuto Básico del Empleado Público, ¿cómo se establecen la cuantía  y estructura de las retribuciones complementarias de los funcionarios?
a)  Las determina el Gobierno.
b)  Se establecerán por las correspondientes leyes de cada Administración Pública.
c)  Por la Ley de Presupuestos Generales del Estado.
d)  Por los órganos de gobierno de las Comunidades Autónomas.

PREGUNTA Nº 599.- Según dispone el artículo 30 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público: "  Quiénes ejerciten el derecho de huelga"
a)  Devengarán y percibirán las retribuciones correspondientes al tiempo en que hayan  permanecido en esa situación y no se verá afectado al régimen respectivo de sus  prestaciones sociales.
b)  Devengarán y percibirán las retribuciones correspondientes al tiempo en que hayan  permanecido en esa situación pero si afectará al régimen respectivo de sus prestaciones  sociales.
c)  No devengarán ni percibirán las retribuciones correspondientes al tiempo en que hayan  permanecido en esa situación sin que la deducción de haberes que se efectúe tenga  carácter de sanción, ni afecte al régimen respectivo de sus prestaciones sociales.
d)  No devengarán ni percibirán las retribuciones correspondientes al tiempo en que hayan  permanecido en esa situación con carácter de sanción, y afectará al régimen respectivo de  sus prestaciones sociales.

PREGUNTA Nº 600.- ¿Cómo se determinan los intervalos de niveles que corresponden a los Cuerpos de cada  Grupo, según dispone la Ley de Función Pública de la Junta de Andalucía?
a)  Mediante acuerdo del Consejo de Gobierno.
b)  Mediante Ley.
c)  Mediante Reglamento.
d)  Mediante Decreto del Consejo de Gobierno.          

PREGUNTA Nº 601.- La siguiente definición: "La facultad de elegir representantes y constituir órganos unitarios  a través de los cuales se instrumente la interlocución entre las Administraciones Públicas y  sus empleados", ¿a cuál de los siguientes conceptos se refiere según se regula en el artículo  31 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto  refundido de la Ley del Estatuto Básico del Empleado Público?:
a)  Representación.
b)  Negociación colectiva.
c)  Participación institucional.
d)  Participación sindical.

PREGUNTA Nº 602.- Clases de empleados públicos según el Real Decreto Legislativo 5/2015, de 30 de octubre,  por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado  Público:
a)  Funcionarios, Interinos, Laborales y eventuales.
b)  Funcionarios de carrera, Funcionarios interinos, Personal laboral (fijo, por tiempo indefinido  o temporal), y Personal eventual.
c)  Funcionarios de carrera e interinos, personal laboral fijo, y personal eventual.
d)  Funcionarios de carrera, Funcionarios interinos, Personal laboral (fijo, por tiempo indefinido  o temporal), Personal eventual y personal directivo profesional.

PREGUNTA Nº 603.- Dispone el artículo del 50 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que  se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público: Los  funcionarios tendrán derecho a disfrutar, durante cada año natural, de unas vacaciones  retribuidas de:
a)  20 días hábiles.
b)  22 días hábiles.
c)  1 mes.
d)  30 días.

PREGUNTA Nº 604.- Tal y como establece el artículo 23 del Real Decreto Legislativo 5/2015, de 30 de octubre,  por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público,  respecto de las retribuciones básicas que se fijan en la Ley de Presupuestos Generales del  Estado, estarán integradas única y exclusivamente por:
a)  Sueldo.
b)  Sueldo, trienios y retribuciones complementarias.
c)  Sueldo y trienios.
d)  Sueldo y retribuciones complementarias.

PREGUNTA Nº 605.- Respecto a la suspensión de funciones regulada en el artículo 90 del Real Decreto  Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto Básico del Empleado Público:
a)  El funcionario declarado en la situación d suspensión quedará privado durante el tiempo de  permanencia en la misma del ejercicio de sus funciones y de todos los derechos inherentes  a la condición.
b)  La suspensión determinará la pérdida del puesto de trabajo cuando exceda de 6 años.
c)  La suspensión no podrá imponerse en virtud de sanción disciplinaria.
d)  La suspensión firme por sanción disciplinaria no podrá exceder de 6 meses.    

PREGUNTA Nº 606.- Según el artículo 22.4 del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se  aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público, las pagas  extraordinarias serán dos al año, cada una por el importe de:
a)  Una mensualidad de retribuciones básicas.
b)  Una mensualidad de retribuciones básicas y de la totalidad de las retribuciones  complementarias.
c)  Una mensualidad de retribuciones básicas y de la totalidad de las retribuciones  complementarias, salvo las que se refieren a la progresión alcanzada por el funcionario  dentro del sistema de carrera administrativa y los servicios extraordinarios prestados fuera  de la jornada normal de trabajo.
d)  Una mensualidad de retribuciones básicas y de la totalidad de las retribuciones  complementarias, salvo las que se refieren a el grado de interés, iniciativa o esfuerzo con  que el funcionario desempeña su trabajo y el rendimiento o resultados obtenidos y los  servicios extraordinarios prestados fuera de la jornada normal de trabajo.

PREGUNTA Nº 607.- De los siguientes, ¿cuál no es un derecho individual  de los empleados públicos, según lo  regulado en el Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el  texto refundido de la Ley del Estatuto Básico del Empleado Público?
a)  Percibir las retribuciones e indemnizaciones por razón del servicio.
b)  Defensa jurídica y protección de la Administración Pública.
c)  Libertad sindical.
d)  Libre asociación profesional.

PREGUNTA Nº 608.- Teniendo en cuenta lo dispuesto en el Real Decreto Legislativo 5/2015, de 30 de octubre,  por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público,  ¿cuál de las siguientes opciones se corresponde con la siguiente definición: "consiste en la  progresión de grado, categoría, escalón u otros conceptos análogos, sin necesidad de  cambiar de puesto de trabajo"?
a)  Promoción interna vertical.
b)  Promoción interna horizontal.
c)  Carrera horizontal.
d)  Carrera vertical.

PREGUNTA Nº 609.- Las retribuciones básicas de los funcionarios, según la normativa vigente, son:
a)  Sueldo y paga extraordinaria.
b)  Sueldo y trienios.
c)  Sueldo, trienios y pagas extraordinarias.
d)  Sueldo, trienios y complementos.

PREGUNTA Nº 610.- ¿Cuál de los siguientes criterios se han de tener en cuenta para la designación de personal  directivo profesional al servicio de la Administración Pública, según dispone el Real Decreto  Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto Básico del Empleado Público?
a)  Criterios de idoneidad y los principios de mérito y capacidad.
b)  Principios de mérito, capacidad e igualdad.
c)  Que sea la persona más idónea para el puesto.
d)  Principios de mérito y capacidad, criterios de idoneidad y procedimientos que garanticen la  publicidad y concurrencia.  

PREGUNTA Nº 611.- ¿Con qué clase de empleado público encaja la siguiente definición, según se regula en el  Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido  de la Ley del Estatuto Básico del Empleado Público?: "Los que por razones expresamente  justificadas de necesidad y urgencia, son nombrados como tales para el desempeño de  funciones propias de funcionarios de carrera, cuando se dé alguna de las siguientes  circunstancias: Exceso o acumulación de tareas, ejecución de programas de carácter  temporal.[entre otras]":
a)  Personal laboral de carácter temporal.
b)  Personal eventual.
c)  Funcionario interino.
d)  Personal laboral de carácter fijo.

PREGUNTA Nº 612.- Son empleados públicos, según dispone el Real Decreto Legislativo 5/2015, de 30 de  octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado  Público:
a)  Quienes desempeñan funciones retribuidas en las Administraciones Públicas o Privadas al  servicio de los intereses generales.
b)  Quienes desempeñan funciones retribuidas o no en las Administraciones Públicas al  servicio de los intereses públicos.
c)  Quienes desempeñan funciones retribuidas en las Administraciones Públicas al servicio de  los intereses generales.
d)  Quienes desempeñan funciones retribuidas o no en las Administraciones Públicas o  Privadas al servicio de los intereses públicos.

PREGUNTA Nº 613.- Corresponden exclusivamente a los funcionarios públicos, de acuerdo con lo dispuesto en  el Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto  refundido de la Ley del Estatuto Básico del Empleado Público:
a)  El ejercicio de las funciones que impliquen la participación directa o indirecta en el ejercicio  de las potestades públicas o en la salvaguardia de los intereses generales del Estado y de las  Administraciones Públicas de las Comunidades Autónomas.
b)  El ejercicio de las funciones que impliquen la participación directa en el ejercicio de las  potestades públicas o en la salvaguardia de los intereses generales del Estado y de las  Administraciones Públicas de las Comunidades Autónomas.
c)  El ejercicio de las funciones que impliquen la participación directa en el ejercicio de las  potestades públicas o en la salvaguardia de los intereses generales del Estado y de las  Administraciones Públicas.
d)  El ejercicio de las funciones que impliquen la participación directa o indirecta en el ejercicio  de las potestades públicas o en la salvaguardia de los intereses generales del Estado y de las  Administraciones Públicas.

PREGUNTA Nº 614.- Los funcionarios de carrera se rigen en sus relaciones con la Administración por lo  dispuesto en:
a)  El derecho mercantil y administrativo.
b)  El derecho laboral.
c)  El derecho administrativo.
d)  Todo el ordenamiento jurídico.    

PREGUNTA Nº 615.- Según el Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto  refundido de la Ley del Estatuto Básico del Empleado Público, no es un derecho individual de  los empleados públicos que se ejerce de forma colectiva:
a)  La libertad sindical.
b)  La formación continúa.
c)  La negociación colectiva y a la participación en la determinación de las condiciones de  trabajo.
d)  El ejercicio de la huelga, con la garantía del mantenimiento de los servicios esenciales de la  comunidad.

PREGUNTA Nº 616.- La selección de funcionarios interinos habrá de realizarse mediante procedimientos ágiles  que respetarán en todo caso los principios de: (Artículo 10 del Real Decreto Legislativo  5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto  Básico del Empleado Público)
a)  Igualdad, mérito capacidad y publicidad.
b)  Mérito, capacidad y publicidad.
c)  Igualdad, mérito y capacidad.
d)  Mérito y capacidad.

PREGUNTA Nº 617.- Respecto al personal eventual (señale la incorrecta)  :
a)  El nombramiento y cese serán libres.
b)  El cese tendrá lugar, en todo caso, cuando se produzca el de la autoridad a la que se preste  la función de confianza o asesoramiento.
c)  La condición de personal eventual podrá constituir mérito para el acceso a la Función  Pública o para la promoción interna.
d)  Le será aplicable, en lo que sea adecuado a la naturaleza de su condición, el régimen  general de los funcionarios de carrera.

PREGUNTA Nº 618.- El Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto  refundido de la Ley del Estatuto Básico del Empleado Público, se aplicará:
a)  Sólo al personal de las Administraciones públicas incluido en su ámbito de aplicación.
b)  Con carácter supletorio a todo el personal de las Administraciones Públicas no incluido en  su ámbito de aplicación.
c)  Con carácter supletorio al personal laboral al servicio de la Administración General del  Estado.
d)  Con carácter supletorio al personal laboral al servicio de las Administraciones de las  entidades Locales.

PREGUNTA Nº 619.- El Título V del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el  texto refundido de la Ley del Estatuto Básico del Empleado Público, se denomina:
a)  Ordenación de la actividad profesional.
b)  Situaciones administrativas.
c)  Derechos y deberes. Código de conducta de los empleados públicos.
d)  Adquisición y pérdida de la relación de servicio.        

PREGUNTA Nº 620.- Las necesidades de recursos humanos, con asignación presupuestaria, que deban  proveerse mediante la incorporación de personal de nuevo ingreso serán objeto de la Oferta  de empleo público, o a través de otro instrumento similar de gestión de la provisión de las  necesidades de personal, lo que comportará la obligación de convocar los correspondientes  procesos selectivos para las plazas comprometidas y:
a)  Hasta un 10% adicional, fijando el plazo máximo para la convocatoria de los mismos.
b)  Hasta un 20% adicional, fijando el plazo máximo para la convocatoria de los mismos.
c)  Hasta un 30% adicional, fijando el plazo máximo para la convocatoria de los mismos.
d)  Hasta un 40% adicional, fijando el plazo máximo para la convocatoria de los mismos.

PREGUNTA Nº 621.- La ejecución de la oferta de empleo público o instrumento similar deberá desarrollarse  dentro del plazo improrrogable de:
a)  1 año.
b)  2 años.
c)  3 años.
d)  4 años.

PREGUNTA Nº 622.- Los cuerpos y escalas de funcionarios se crean, modifican y suprimen por:
a)  Ley de  las Cortes Generales.
b)  Decretos legislativos.
c)  Decreto-ley.
d)  Ley de las Cortes Generales y Ley de las Asambleas Legislativas de las Comunidades  Autónomas.

PREGUNTA Nº 623.- Para el acceso a los cuerpos o escalas del Grupo C2 se exigirá estar en posesión de:
a)  Título universitario de Grado.
b)  Título Técnico Superior.
c)  Título de bachiller o técnico.
d)  Título de graduado en educación secundaria obligatoria.

PREGUNTA Nº 624.- Las Administraciones Públicas, según dispone el Real Decreto Legislativo 5/2015, de 30 de  octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del Empleado  Público, proveerán los puestos de trabajo mediante procedimientos basados en los  principios de:
a)  Mérito y capacidad.
b)  Igualdad, mérito y capacidad.
c)  Mérito, capacidad y publicidad.
d)  Igualdad, mérito, capacidad y publicidad.

PREGUNTA Nº 625.- Consistirá en la valoración de los méritos y capacidades y, en su caso, aptitudes de los  candidatos por órganos colegiados de carácter técnico:
a)  El concurso.
b)  La oposición.
c)  El concurso-oposición.
d)  La libre designación.    

PREGUNTA Nº 626.- Consiste en la apreciación discrecional por el órgano competente de la idoneidad de los  candidatos en relación con los requisitos exigidos para el desempeño del puesto:
a)  El concurso.
b)  La oposición.
c)  El concurso- oposición.
d)  La libre designación.

PREGUNTA Nº 627.- Establecerá/n los criterios para determinar los puestos que por su especial responsabilidad  y confianza pueden cubrirse por el procedimiento de libre designación con convocatoria  pública:
a)  El Consejo de Ministros.
b)  Las Leyes de Función Pública que se dicten en desarrollo del presente Estatuto.
c)  El Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto  refundido de la Ley del Estatuto Básico del Empleado Público.
d)  Un reglamento.

PREGUNTA Nº 628.- Los funcionarios de carrera que obtengan destino en otra Administración Pública a través  de los procedimientos de movilidad quedarán respecto de su Administración de origen en la  situación administrativa de:
a)  Excedencia.
b)  Servicio en otras Administraciones Públicas.
c)  Servicios especiales.
d)  Suspensión de funciones.

PREGUNTA Nº 629.- Respecto a la movilidad voluntaria entre Administraciones Públicas, en el supuesto de cese  del puesto obtenido por libre designación, la Administración de destino, podrá acordar la  adscripción del funcionario a otro puesto de la misma o le comunicará que no va a hacer  efectiva dicha adscripción:
a)  En el plazo máximo de 10 días  contar desde el día del cese.
b)  En el plazo máximo de un mes a contar desde el día siguiente al cese.
c)  En el plazo máximo de un mes a contar desde el día del cese.
d)  En el plazo máximo de 10 días a contar desde el día siguiente al del cese.

PREGUNTA Nº 630.- Respecto a la movilidad voluntaria entre Administraciones Públicas, de no solicitarse el  reingreso al servicio activo en el plazo indicado será declarado de oficio en:
a)  Situación de excedencia voluntaria por interés particular.
b)  Servicio en otras Administraciones Públicas.
c)  Servicios especiales.
d)  Suspensión de funciones.

PREGUNTA Nº 631.- El Título III del Real Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el  texto refundido de la Ley del Estatuto Básico del Empleado Público, se denomina:
a)  Clases de personal al servicio de las Administraciones Públicas.
b)  Objeto y ámbito de aplicación.
c)  Derechos y deberes. Código de conducta de los empleados públicos.
d)  Adquisición y pérdida de la relación de servicio.    

PREGUNTA Nº 632.- Es un derecho individual de los empleados públicos que se ejerce de forma colectiva:
a)  El planeamiento de conflictos colectivos de trabajo.
b)  La adopción de medidas que favorezcan la conciliación de la vida personal, familiar y  laboral.
c)  La libre asociación profesional.
d)  La libertad de expresión dentro de los límites del ordenamiento jurídico.

PREGUNTA Nº 633.- Consiste en la progresión de grado, categoría, escalón u otros conceptos análogos, sin  necesidad de cambiar de puesto de trabajo:
a)  Promoción interna vertical.
b)  Promoción interna horizontal.
c)  Carrera horizontal.
d)  Carrera vertical.

PREGUNTA Nº 634.- Consiste en el ascenso en la estructura de puestos de trabajo por los procedimientos de  provisión establecidos en el Capítulo III del título V del Real Decreto Legislativo 5/2015, de 30  de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto Básico del  Empleado Público:
a)  Promoción interna vertical.
b)  Promoción interna horizontal.
c)  Carrera horizontal.
d)  Carrera vertical.

PREGUNTA Nº 635.- Los funcionarios de carrera podrán progresar simultáneamente en las modalidades de:
a)  Carrera horizontal y vertical cuando la Administración correspondiente las haya implantado  en un mismo ámbito.
b)  Promoción interna horizontal y vertical cuando la Administración correspondiente las haya  implantado en un mismo ámbito.
c)  Promoción interna vertical y carrera vertical cuando la Administración correspondiente las  haya implantado en un mismo ámbito.
d)  Carrera horizontal y promoción interna vertical cuando la Administración correspondiente  las haya implantado en un mismo ámbito.

PREGUNTA Nº 636.- Retribuyen las características de los puestos de trabajo, la carrera profesional o el  desempeño, rendimiento o resultados alcanzados por el funcionario:
a)  Las retribuciones básicas.
b)  Las retribuciones complementarias.
c)  Las retribuciones básicas y complementarias.
d)  Las pagas extraordinarias.

PREGUNTA Nº 637.- La cuantía y estructura de las retribuciones complementarias de los funcionarios se  establecerán por:
a)  Las correspondientes leyes de cada Administración Pública.
b)  El Gobierno.
c)  La Ley de Presupuestos Generales del Estado.
d)  Los órganos de gobierno de las Comunidades Autónomas.    

PREGUNTA Nº 638.- La negociación colectiva de condiciones de trabajo de los funcionarios públicos estará  sujeta a los principios de:
a)  Legalidad, cobertura presupuestaria, voluntariedad, buena  fe negocial, publicidad y  concurrencia.
b)  Seguridad jurídica, cobertura presupuestaria, obligatoriedad, buena fe negocial, publicidad  y concurrencia.
c)  Legalidad, cobertura presupuestaria, obligatoriedad, buena  fe negocial, publicidad y  transparencia.
d)  Seguridad jurídica, cobertura presupuestaria, voluntariedad, buena fe negocial, publicidad y  transparencia.        

PREGUNTA Nº 639.- Según dispone el artículo 89 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de  Régimen Local, el personal al servicio de las entidades locales. ¿cómo estará integrado?
a)  Por funcionarios de carrera y contratados en régimen de derecho laboral.
b)  Por funcionarios de carrera e interinos.
c)  Por funcionarios de carrera, contratados en régimen de derecho laboral y personal  eventual que desempeña puestos de confianza o asesoramiento especial.
d)  Por funcionarios de carrera y personal eventual.

PREGUNTA Nº 640.- Respecto a las plantillas que a cada Corporación local corresponde aprobar, señale la  correcta según lo dispuesto en el artículo 90 de la Ley 7/1985, de 2 de abril, Reguladora de  las Bases de Régimen Local:
a)  Corresponde a cada Corporación local aprobar anualmente, a través del Presupuesto, la  plantilla, que deberá comprender todos los puestos de trabajo reservados a funcionarios,  personal laboral y eventual.
b)  Las plantillas deberán responder a los principios de economía y eficiencia.
c)  Corresponde al Estado y a las Comunidades Autónomas, establecer las normas con arreglo  a las cuales hayan de confeccionarse las relaciones de puestos de trabajo, la descripción de  puestos de trabajo tipo y condiciones para su creación.
d)  Todas las Administraciones Públicas constituirán Registros de personal, coordinados con lo  del Estado, según las normas aprobadas por el Gobierno.

PREGUNTA Nº 641.- De acuerdo con el artículo 4 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, en la relación  de trabajo, los trabajadores tienen derecho (señala la incorrecta)  :
a)  A la ocupación efectiva.
b)  A la promoción y formación profesional en el trabajo, salvo la dirigida a su adaptación a las  modificaciones operadas en el puesto de trabajo, así como al desarrollo de planes y  acciones formativas tendentes a favorecer su mayor empleabilidad.
c)  A no ser discriminados directa o indirectamente para el empleo, una vez empleados, por  razones de sexo.
d)  A su integridad física y una adecuada política de prevención de riesgos laborales.    

PREGUNTA Nº 642.- El Real Decreto 364/1995, de 10 marzo, por el que se aprueba el Reglamento General de  Ingreso del Personal al servicio de la Administración general del Estado y de Provisión de  Puestos de Trabajo y Promoción Profesional de los Funcionarios Civiles de la Administración  general del Estado, dedica el Título II a la Selección del personal laboral, de acuerdo con el  mismo, señale la respuesta correcta:
a)  La promoción interna o de cobertura de vacantes del personal laboral que no sea de nuevo  ingreso se regirá por sus convenios colectivos o normativa específica.
b)  Los sistemas selectivos serán la oposición y el concurso-oposición.
c)  En el plazo máximo de 2 meses, a partir de la fecha de terminación del plazo previsto en  cada convocatoria para la presentación de instancias, se publicará en el BOE la fecha, lugar  y hora de realización de las pruebas.
d)  Hasta que se formalicen los mismos y se incorporen a los puestos de trabajo  correspondientes, los aspirantes no tendrán derecho a percepción económica alguna, salvo  que se determine su retribución de manera retroactiva.

PREGUNTA Nº 643.- Los trabajadores tienen como deberes básicos, según dispone el artículo 5 del Real Decreto  Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto de los Trabajadores, (señale la incorrecta)  :
a)  Observar las medidas de prevención de riesgos laborales que crean convenientes.
b)  Cumplir con las obligaciones concretas de su puesto de trabajo, de conformidad con las  reglas de la buena fe y diligencia.
c)  Cumplir las órdenes e instrucciones del empresario en el ejercicio regular de sus facultades  directivas.
d)  No concurrir con la actividad de la empresa, en los términos fijados en esta ley.

PREGUNTA Nº 644.- Respecto a la selección del personal, dispone la Ley 7/1985, de 2 de abril, Reguladora de  las Bases de Régimen Local, lo siguiente:  (señale la opción incorrecta)  
a)  Las Corporaciones locales formarán públicamente su oferta de empleo, ajustándose a los  criterios fijados en la normativa básica estatal.
b)  La selección de todo el personal, sea funcionario o laboral, debe realizarse de acuerdo con  la oferta de empleo público.
c)  La selección  de todo el personal funcionario se realizará mediante convocatoria pública y  con carácter general, mediante el sistema de oposición.
d)  La selección de todo el personal se realizará a través de sistemas en los que se garanticen,  en todo caso, los principios constitucionales de igualdad, mérito y capacidad, así como el de  publicidad.

PREGUNTA Nº 645.- Según dispone el Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba  el texto refundido de la Ley del Estatuto de los Trabajadores, el empresario está obligado a  comunicar a la oficina pública de empleo, el contenido de los contratos de trabajo que  celebre o las prórrogas de los mismos, deban o no formalizarse por escrito en el plazo de:
a)  Los 5 días siguientes a su concertación.
b)  Los 10 días siguientes a su concertación.
c)  Los 15 días siguientes a su concertación.
d)  Los 20 días siguientes a su concertación.      

PREGUNTA Nº 646.- Respecto al periodo de prueba de los contratos regulado en el artículo 14 del Real Decreto  Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto de los Trabajadores, la duración del periodo de prueba no podrá exceder en defecto  de pacto en convenio:
a)  4 meses para los técnicos titulados, ni de 2 meses para los demás trabajadores.
b)  4 meses para los técnicos titulados, ni de 3 meses para los demás trabajadores.
c)  6 meses para los técnicos titulados, ni de 2 meses para los demás trabajadores.
d)  6 meses para los técnicos titulados, ni de 3 meses para los demás trabajadores.

PREGUNTA Nº 647.- Según el Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto  refundido de la Ley del Estatuto de los Trabajadores, se prohíbe la admisión al trabajo a los  menores de:
a)  13 años.
b)  15 años.
c)  16 años.
d)  18 años.

PREGUNTA Nº 648.- Según el artículo 14 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se  aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, el pacto que  establezca un periodo de prueba cuando el trabajador haya ya desempeñado las mismas  funciones con anterioridad en la empresa será:
a)  Posible cuando haya variaciones en la maquinaria de la empresa.
b)  Posible cuando se trate de contratos formativos.
c)  Nulo, salvo que se disponga otra cosa en convenio colectivo.
d)  Nulo.

PREGUNTA Nº 649.- De acuerdo con el artículo 21 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, el pacto de no  competencia para después de extinguido el contrato de trabajo, solo será válido si:
a)  El empresario tiene un efectivo interés industrial o comercial en ello.
b)  Se satisface al trabajador una compensación económica adecuada.
c)  El empresario tiene un efectivo interés industrial o comercial en ello o se satisface al  trabajador una compensación económica adecuada.
d)  El empresario tiene un efectivo interés industrial o comercial en ello y se satisface al  trabajador una compensación económica adecuada.

PREGUNTA Nº 650.- El empresario deberá informar por escrito al trabajador, en los términos y plazos que se  establezcan reglamentariamente, sobre los elementos esenciales del contrato y las  principales condiciones de ejecución de la prestación laboral, siempre que tales elementos y  condiciones no figuren en el contrato de trabajo formalizado por escrito:
a)  En cualquier caso.
b)  Cuando la relación laboral sea de duración superior a 4 semanas.
c)  Cuando la relación laboral sea de duración superior a 1 mes.
d)  Cuando la relación laboral sea de duración superior a 2 meses.    

PREGUNTA Nº 651.- Respecto a la validez del contrato regulada en el artículo 9 del Real Decreto Legislativo  2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto de  los Trabajadores, si resultase nula solo una parte del contrato de trabajo:
a)  Este se convertirá nulo en su totalidad.
b)  Este permanecerá válido en lo restante.
c)  Este permanecerá valido en su totalidad.
d)  Sólo será nulo esa parte y las dependientes de la misma.

PREGUNTA Nº 652.- Se prohíbe realizar horas extraordinarias, según el artículo 6 del Real Decreto Legislativo  2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto de  los Trabajadores, a:
a)  Las trabajadoras embarazadas.
b)  Los menores de 20 años.
c)  Los trabajadores a turnos.
d)  Los menores de 18 años.

PREGUNTA Nº 653.- El artículo 22 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba  el texto refundido de la Ley del Estatuto de los Trabajadores, dispone que se establecerá el  sistema de clasificación profesional de los trabajadores por medio de grupos profesionales:
a)  En el contrato de trabajo o, en su defecto, mediante la negociación colectiva.
b)  Mediante la negociación colectiva o, en su defecto, acuerdo entre la empresa y los  representantes de los trabajadores.
c)  Mediante la negociación colectiva o, en su defecto, en el contrato de trabajo.
d)  Por acuerdo entre la empresa y los representantes de los trabajadores.

PREGUNTA Nº 654.- Según el artículo 8 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se  aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, relativo a la forma del  contrato, establece que la copia básica del contrato se entregará por el empresario a los  representantes legales de los trabajadores en un plazo, el cual no puede ser superior a:
a)  5 días desde la formalización del contrato.
b)  15 días desde la formalización del contrato.
c)  20 días desde la formalización del contrato.
d)  10 días desde la formalización del contrato.

PREGUNTA Nº 655.- El artículo 23 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba  el texto refundido de la Ley del Estatuto de los Trabajadores, hace referencia a la Promoción  y formación profesional en el trabajo, según el cual, ¿qué derechos tendrá el trabajador?:  (señale la incorrecta)  
a)  Al disfrute de los permisos necesarios para concurrir a exámenes.
b)  A una preferencia a elegir turno de trabajo cuando curse con regularidad estudios para la  obtención de un título académico o profesional.
c)  A la adaptación de la jornada ordinaria de trabajo para la asistencia a cursos de formación  profesional.
d)  A la concesión de los permisos oportunos de formación o perfeccionamiento profesional sin  reserva del puesto de trabajo.    

PREGUNTA Nº 656.- De acuerdo con el artículo 26 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, se considerará  salario la totalidad de las percepciones económicas de los trabajadores:
a)  En dinero, por la prestación profesional de los servicios laborales por cuenta ajena, que  retribuyan exclusivamente el trabajo efectivo, cualquiera que sea la forma de  remuneración.
b)  En dinero o en especie, por la prestación profesional de los servicios laborales por cuenta  ajena, ya retribuyan el trabajo efectivo, cualquiera que sea la forma de remuneración, o los  periodos de descanso computables como de trabajo.
c)  En dinero, por la prestación profesional de los servicios laborales por cuenta ajena, ya  retribuyan el trabajo efectivo, cualquiera que sea la forma de remuneración, o los periodos  de descanso computables como de trabajo.
d)  En dinero o en especie, por la prestación profesional de los servicios laborales por cuenta  ajena, que retribuyan exclusivamente el trabajo efectivo, cualquiera que sea la forma de  remuneración.

PREGUNTA Nº 657.- Teniendo en cuenta el artículo 7 del Real Decreto Legislativo 2/2015, de 23 de octubre, por  el que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, en el que se  regula la capacidad para contratar, ¿quiénes podrán contratar la prestación de su trabajo?
a)  Quienes tengan plena capacidad de obrar conforme a lo dispuesto en el Código Civil.
b)  Los menores de 18 y mayores de 16 años, que vivan de forma independiente. Con  consentimiento o no de sus padres o tutores.
c)  Los extranjeros, de acuerdo con lo dispuesto en el código Civil.
d)  Los menores de 16 años, siempre que cuenten con autorización de sus padres.

PREGUNTA Nº 658.- Respecto a la liquidación y el pago del salario, regulado en el artículo 29 del Real Decreto  Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto de los Trabajadores, no es correcto:
a)  La liquidación y el pago del salario se harán puntual y documentalmente en la fecha y lugar  convenidos o conforme a los usos y costumbres.
b)  El periodo de tiempo a que se refiere el abono de las retribuciones periódicas y regulares  podrá exceder de un mes.
c)  El trabajador y, con su autorización, sus representantes legales, tendrán derecho a percibir,  sin que llegue el día señalado para el pago, anticipos a cuenta del trabajo ya realizado.
d)  La documentación del salario se realizará mediante la entrega al trabajador de un recibo  individual y justificativo del pago del mismo.

PREGUNTA Nº 659.- Las situaciones de incapacidad temporal, riesgo durante el embarazo, maternidad,  adopción, guarda con fines de adopción, acogimiento, riesgo durante la lactancia y  paternidad, que afecten al trabajador durante el periodo de prueba:
a)  Interrumpen el cómputo del mismo siempre que se produzca acuerdo entre ambas partes.
b)  Interrumpen el cómputo del mismo aunque no se produzca acuerdo entre ambas partes.
c)  No interrumpen el cómputo del mismo en ningún caso.
d)  Se interrumpe el cómputo en cualquier caso.    

PREGUNTA Nº 660.- El artículo 177 del Real Decreto Legislativo 781/1986, de 18 de abril, por el que se aprueba  el texto refundido de las disposiciones legales vigentes en materia de Régimen Local, dispone  respecto del personal laboral lo siguiente: (señale la respuesta correcta)  :
a)  El régimen de la contratación laboral será, el establecido en las normas de Derecho  Administrativo y Laboral.
b)  La contratación laboral será con carácter general, de duración determinada.
c)  La contratación laboral puede ser por tiempo indefinido, de duración determinada, a  tiempo parcial, y demás modalidades previstas en la legislación laboral.
d)  Será anulable el contrato laboral por tiempo indefinido por una Entidad local con persona  incursa en alguna de las causas de incapacidad específica que sean de aplicación a los  funcionarios y al personal interino.

PREGUNTA Nº 661.- El trabajador tiene derecho a dos gratificaciones extraordinarias al año, tal y como dispone  el artículo 31 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba el  texto refundido de la Ley del Estatuto de los Trabajadores, y son:
a)  Una de ellas con ocasión de las fiestas de Navidad y la otra en el mes de junio.
b)  Una de ellas en el mes de junio y la otra en el mes que se fije por convenio colectivo o por  acuerdo entre el empresario y los representantes legales de los trabajadores.
c)  Una de ellas en el mes de junio y la otra en el mes que se fije por convenio colectivo.
d)  Una de ellas con ocasión de las fiestas de Navidad y la otra en el mes que se fije por  convenio colectivo o por acuerdo entre el empresario y los representantes legales de los  trabajadores.

PREGUNTA Nº 662.- De acuerdo con el artículo 34 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, la duración  máxima de la jornada ordinaria de trabajo será de:
a)  40 horas semanales de trabajo efectivo de promedio en cómputo mensual.
b)  35 horas semanales de trabajo efectivo de promedio en cómputo mensual.
c)  40 horas semanales de trabajo efectivo de promedio en cómputo anual.
d)  35 horas semanales de trabajo efectivo de promedio en cómputo anual.

PREGUNTA Nº 663.- Durante el periodo de reducción de jornada por causas económicas, técnicas, organizativas  o de producción:
a)  Podrán realizarse un máximo de 2 horas extraordinarias diarias.
b)  Podrán realizarse un máximo de 5 horas extraordinarias semanales.
c)  Podrán realizarse un máximo de 10 horas extraordinarias mensuales.
d)  No podrán realizarse horas extraordinarias salvo fuerza mayor.    

PREGUNTA Nº 664.- El período de suspensión de contrato con reserva como consecuencia de ser víctima de  violencia de género, salvo que las actuaciones de tutela judicial resultase que la efectividad  del derecho de protección de la víctima requiriese la continuidad de la suspensión, tendrá  una duración inicial que no podrá exceder de:
a)  3 meses. En este caso, el juez podrá prorrogar la suspensión por periodos de 2 meses, con  un máximo de 12 meses.
b)  6 meses. En este caso, el juez podrá prorrogar la suspensión por periodos de 3 meses, con  un máximo de 18 meses.
c)  3 meses. En este caso, el juez podrá prorrogar la suspensión por periodos de  3 meses, con  un máximo de 18 meses.
d)  6 meses. En este caso, el juez podrá prorrogar la suspensión por periodos de 2 meses, con  un máximo de 16 meses.

PREGUNTA Nº 665.- El contrato de trabajo se extinguirá (señale la incorrecta)  :
a)  Por despido colectivo fundado en causas económicas, técnicas, organizativas o de  producción.
b)  Por voluntad del trabajador, fundamentada en un incumplimiento contractual del  empresario.
c)  Por despido del trabajador.
d)  Por decisión de la trabajadora que se vea obligada a abandonar temporalmente su puesto  de trabajo como consecuencia de ser víctima de violencia de género.

PREGUNTA Nº 666.- Deberán constar por escrito, según dispone el artículo 8 del Real Decreto Legislativo  2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto de  los Trabajadores:
a)  Los contratos de los trabajadores contratados en España al servicio de empresas españolas  en el extranjero.
b)  Los contratos por tiempo determinado cuya duración sea superior a tres semanas.
c)  Los contratos de teletrabajo.
d)  Los contratos de los trabajadores contratados en el extranjero de empresas españolas en el  extranjero.

PREGUNTA Nº 667.- Tendrá la consideración de trabajo a distancia aquel en que la prestación de la actividad  laboral, de modo alternativo a su desarrollo presencial en el centro de trabajo de la empresa,  se realice de manera:
a)  Exclusiva en el domicilio del trabajador.
b)  Preponderante en el domicilio del trabajador o en el lugar libremente elegido por este.
c)  Exclusiva en el domicilio del trabajador o en el lugar libremente elegido por este.
d)  Preponderante en el domicilio del trabajador.    

PREGUNTA Nº 668.- Respecto a la extinción del contrato por causas objetivas, el contrato podrá extinguirse por  faltas de asistencia al trabajo, aun justificadas pero intermitentes, que alcancen el:
a)  10% de las jornadas hábiles en 2 meses consecutivos siempre que el total de faltas de  asistencia en los 12 meses anteriores alcance el 5% de las jornadas hábiles, o el 25% en 4  meses discontinuos dentro de un periodo de 12 meses.
b)  20%  de las jornadas hábiles en 3 meses consecutivos siempre que el total de faltas de  asistencia en los 12 meses anteriores alcance el 10% de las jornadas hábiles, o el 25% en 4  meses discontinuos dentro de un periodo de 12 meses.
c)  20% de las jornadas hábiles en 2 meses consecutivos siempre que el total de faltas de  asistencia en los 12 meses anteriores alcance el 5% de las jornadas hábiles, o el 25% en 4  meses discontinuos dentro de un periodo de 12 meses.
d)  20% de las jornadas hábiles en 3 meses consecutivos siempre que el total de faltas de  asistencia en los 12 meses anteriores alcance el 10% de las jornadas hábiles, o el 25% en 4  meses discontinuos dentro de un periodo de 12 meses.

PREGUNTA Nº 669.- El contrato de trabajo, según el Real Decreto Legislativo 2/2015, de 23 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores:
a)  Se celebrará siempre por escrito.
b)  Se podrá celebrar por escrito o de palabra.
c)  Se celebrará siempre de palabra cuando se trate de obra o servicio determinado.
d)  Se celebrará por escrito siempre que lo exija una disposición reglamentaria.

PREGUNTA Nº 670.- Siempre que el trabajador cumpla los requisitos establecidos en el texto refundido de la  Ley General de la Seguridad social, cuando el contrato de relevo se concierte a jornada  completa y con duración indefinida, la reducción de jornada y de salario podrá alcanzar el:
a)  60%
b)  65%
c)  70%
d)  75%

PREGUNTA Nº 671.- Contra la decisión extintiva del contrato por causas objetivas:
a)  No se podrá recurrir.
b)  Podrá recurrirse únicamente si se produce por ineptitud del trabajador.
c)  Podrá recurrirse únicamente si se produce por falta de adaptación del trabajador a las  modificaciones técnicas.
d)  Podrá recurrir como si se tratase de despido disciplinario.

PREGUNTA Nº 672.- ¿Qué consecuencias se derivan de no cumplir la forma escrita de un contrato cuando así se  exija?
a)  Se le otorga a las partes un plazo de 5 días para subsanar dicho error.
b)  El contrato es nulo.
c)  El contrato de trabajo se presumirá celebrado por tiempo indefinido y a jornada completa,  en todo caso.
d)  Se presumirá celebrado por tiempo indefinido y a jornada completa, salvo prueba en  contrario que acredite su naturaleza temporal o el carácter a tiempo parcial de os servicios.      

PREGUNTA Nº 673.- Cuando el despido sea declarado improcedente (artículo 56 del Real Decreto Legislativo  2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto de  los Trabajadores), el empresario podrá optar entre la readmisión del trabajador o el abono  de una indemnización en el plazo de:
a)  5 días desde la notificación de la sentencia.
b)  10 días desde la notificación de la sentencia.
c)  15 días desde la notificación de la sentencia.
d)  20 días desde la notificación de la sentencia.

PREGUNTA Nº 674.- Respecto a las horas complementarias, a las que se refiere el apartado 5 del artículo 12 del  Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto refundido  de la Ley del Estatuto de los Trabajadores, en la modalidad de los contratos a tiempo parcial  y contrato de relevo, no es correcto:
a)  El empresario solo podrá exigir la realización de horas complementarias cuando así lo  hubiera pactado expresamente con el trabajador.
b)  El pacto sobre horas complementarias solo podrá acordarse en el momento de la  celebración del contrato a tiempo parcial.
c)  El pacto se formalizará necesariamente por escrito.
d)  El pacto de horas complementarias deberá recoger el número de horas complementarias  cuya realización podrá ser requerida por el empresario.

PREGUNTA Nº 675.- Señale la opción correcta, teniendo en cuenta lo regulado en el Artículo 19 "Selección del  personal" de la Ley 30/1984, de 2 de agosto, de medidas para la reforma de la Función  Pública:
a)  Las Administraciones Públicas seleccionan su personal, ya sea funcionario, ya laboral, de  acuerdo con su oferta de empleo público, mediante convocatoria pública y a través del  sistema de concurso, oposición o concurso-oposición libre en los que se garanticen en todo  caso los principios constitucionales de igualdad, mérito y capacidad, así como el de  publicidad.
b)  Los procedimientos de selección cuidarán de incluir en los mismos, las pruebas prácticas  que sean necesarias.
c)  La selección del personal laboral se llevará a cabo preferentemente, a través del sistema de  oposición.
d)  Los procedimientos de selección cuidará especialmente la conexión entre el tipo de  pruebas a superar y la adecuación a los puestos de trabajo que se hayan de desempeñar  incluyendo, para determinados puestos de manera obligatoria, las pruebas prácticas que  sean precisas.    

PREGUNTA Nº 676.- El artículo 10 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba  el texto refundido de la Ley del Estatuto de los Trabajadores, regula el trabajo en común y  contrato de grupo, según el cual es correcto afirmar:
a)  Si el trabajador, conforme a lo pactado por escrito, asociare a su trabajo un auxiliar o  ayudante, el empresario de aquel no lo será de este.
b)  El jefe del grupo de trabajadores ostentará la representación de los que lo integren,  respondiendo de las obligaciones inherentes a dicha representación.
c)  Si el empresario hubiese celebrado un contrato con un grupo de trabajadores considerado  en su totalidad, conservará respecto de cada uno, individualmente, sus derechos y deberes.
d)  Si el empresario diera un trabajo en común a un grupo de sus trabajadores, no tendrá  frente a cada uno de sus miembros los derechos y deberes que como tal le competen.

PREGUNTA Nº 677.- Sobre la normativa aplicable al personal laboral ¿qué establece el artículo 7 del Real  Decreto Legislativo 5/2015, de 30 de octubre, por el que se aprueba el texto refundido de la  Ley del Estatuto Básico del Empleado Público? (Señale la opción incorrecta)  
a)  El personal laboral al servicio de las Administraciones Públicas se rige, además de por la  legislación laboral y por las demás normas convencionalmente aplicables, por los preceptos  de este Estatuto que así lo dispongan.
b)  En materia de permisos de nacimiento, adopción, del progenitor diferente de la madre  biológica y lactancia, el personal laboral al servicio de las Administraciones públicas se  regirá por lo previsto en el presente Estatuto.
c)  Le será de aplicación a este personal las previsiones del texto refundido de la Ley del  Estatuto de los Trabajadores sobre las suspensiones de los contratos de trabajo que, en su  caso, corresponderían por los mismos supuestos de hecho.
d)  No le será de aplicación a este personal las previsiones del texto refundido de la Ley del  Estatuto de los Trabajadores sobre las suspensiones de los contratos de trabajo que, en su  caso, corresponderían por los mismos supuestos de hecho.

PREGUNTA Nº 678.- Dispone el artículo 39 de la Ley 6/1985, de 28 noviembre de Ordenación de la Función  Pública de la Junta de Andalucía que: (señale la respuesta incorrecta)  
a)  La selección del personal laboral fijo, previa a la contratación, se realizará por el sistema de  concurso, salvo cuando por la naturaleza de las tareas a realizar o por el número de  aspirantes, resulte más adecuado el de concurso-oposición o el de oposición.
b)  Cualquiera que sea el sistema selectivo, el acceso estará condicionado a la realización de  prácticas obligatorias.
c)  Reglamentariamente se regularán los diversos sistemas de selección del personal, tanto  funcionarial como laboral fijo.
d)  En los sistemas de selección del personal han de quedar siempre garantizados los principios  constitucionales de igualdad, mérito, capacidad y publicidad.    

PREGUNTA Nº 679.- En caso de que el contrato resultase nulo, el trabajador según el artículo 9 del Real Decreto  Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto de los Trabajadores:
a)  Podrá exigir, por el trabajo que ya hubiese prestado, la remuneración consiguiente a un  contrato válido.
b)  Deberá devolver la remuneración que haya recibido por el mismo.
c)  Obtendrá una indemnización junto con el finiquito.
d)  Deberá devolver la remuneración que haya recibido por el mismo, siempre que haya  obrado de mala fe.

PREGUNTA Nº 680.- De acuerdo con el artículo 8 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, podrá exigir  que el contrato se formalice por escrito:
a)  Cualquiera de las partes antes del transcurso de la relación laboral.
b)  Cualquiera de las partes incluso durante el transcurso de la relación laboral.
c)  Cualquiera de las partes incluso después del transcurso de la relación laboral.
d)  Únicamente la parte contratada incluso durante el transcurso de la relación laboral.

PREGUNTA Nº 681.- El que en virtud de contrato de trabajo formalizado por escrito, en cualquiera de las  modalidades de contratación de personal previstas en la legislación laboral, presta servicios  retribuidos por las Administraciones Públicas es:
a)  Funcionario interino.
b)  Personal eventual.
c)  Funcionario de carrera.
d)  Personal laboral.

PREGUNTA Nº 682.- La Ley 6/1985, de 28 de noviembre, de ordenación de la función pública de la Junta de  Andalucía, al regular al personal laboral, establece lo siguiente:
a)  Los puestos de trabajo que vayan a ser desempeñados por personal laboral serán ocupados  mediante contrato en período de prueba y formalizado necesariamente por escrito.
b)  El contenido y efectos de esta relación de empleo estarán regulados por el Derecho  Laboral.
c)  Se podrán celebrar contratos laborales de carácter temporal únicamente en el caso de  trabajos urgentes y no permanentes.
d)  La prestación de servicios laborales será considerada como mérito único para la adquisición  de funcionario.

PREGUNTA Nº 683.- El despido que se produzca con violación de derechos fundamentales y libertades públicas  del trabajador será:
a)  Procedente.
b)  Improcedente.
c)  Nulo.
d)  Anulable.    

PREGUNTA Nº 684.- Según dispone el Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba  el texto refundido de la Ley del Estatuto de los Trabajadores, el despido nulo tendrá el efecto  de:
a)  La readmisión inmediata del trabajador, con abono de los salarios dejados de percibir.
b)  La readmisión inmediata del trabajador, sin derecho a salarios dejados de percibir.
c)  El abono de una indemnización equivalente a 30 días de salario por año de servicio.
d)  La readmisión inmediata del trabajador con abono de los salarios dejados de percibir y el  abono de una indemnización.

PREGUNTA Nº 685.- El despido procedente convalidará la extinción del contrato de trabajo que con aquel se  produjo:
a)  Con derecho a indemnización y a salarios de tramitación.
b)  Sin derecho a indemnización pero se abonarán los salarios de tramitación que  correspondan.
c)  Con derecho a indemnización pero no se abonarán salarios de tramitación.
d)  Sin derecho a indemnización ni a salarios de tramitación.

PREGUNTA Nº 686.- Los trabajadores podrán ser sancionados por la dirección de las empresas en virtud de  incumplimientos laborales, de acuerdo con la graduación de faltas y sanciones que se  establezcan en:
a)  Las disposiciones legales.
b)  El convenio colectivo que sea aplicable.
c)  El contrato.
d)  Las disposiciones legales y el convenio colectivo que sea aplicable.

PREGUNTA Nº 687.- Según el Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto  refundido de la Ley del Estatuto de los Trabajadores, la jornada de trabajo podrá reducirse  por causas económicas, técnicas, organizativas o de producción. Se entenderá por reducción  de jornada la disminución temporal de entre un:
a)  20 y un 50% de la jornada de trabajo.
b)  25 y un 60% de la jornada de trabajo.
c)  10 y un 70% de la jornada de trabajo.
d)  30 y un 60% de la jornada de trabajo.

PREGUNTA Nº 688.- Al cesar las causas legales de suspensión, el trabajador tendrá derecho a la reincorporación  al puesto de trabajo reservado, pero se estará a lo pactado cuando sea por: (artículo 48 del  Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto refundido  de la Ley del Estatuto de los Trabajadores)
a)  Mutuo acuerdo de las partes.
b)  Causas consignadas válidamente en el contrato.
c)  Cierre legal de la empresa.
d)  Mutuo acuerdo de las partes y causas consignadas válidamente en el contrato.    

PREGUNTA Nº 689.- Según dispone el Real Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba  el texto refundido de la Ley del Estatuto de los Trabajadores, los trabajadores con al menos  un año de antigüedad en la empresa tienen derecho a un permiso retribuid de formación  profesional para el empleo, vinculada a la actividad de la empresa de:
a)  20 horas anuales, acumulables por un período de hasta 2 años.
b)  40 horas anuales, acumulables por un período de hasta 2 años.
c)  20 horas anuales, acumulables por un período de hasta 5 años.
d)  40 horas anuales, acumulables por un período de hasta 5 años.

PREGUNTA Nº 690.- En ningún caso el salario en especie podrá dar lugar a la minoración de la cuantía íntegra  en dinero del salario mínimo interprofesional ni: (art. 26 Real Decreto Legislativo 2/2015, de  23 de octubre, por el que se aprueba el texto refundido de la Ley del Estatuto de los  Trabajadores)
a)  Superar el 20% de las percepciones salariales del trabajador.
b)  Superar el 30% de las percepciones salariales del trabajador.
c)  Superar el 35% de las percepciones salariales del trabajador.
d)  Superar el 40% de las percepciones salariales del trabajador.

PREGUNTA Nº 691.- Según se regula en el artículo 26 del Real Decreto Legislativo 2/2015, de 23 de octubre, por  el que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores, no tendrán la  consideración de salario (señale la respuesta incorrecta)  :
a)  Las cantidades percibidas por el trabajador en concepto de indemnizaciones o suplidos por  los gastos realizados como consecuencia de su actividad laboral.
b)  Las gratificaciones extraordinarias.
c)  Las prestaciones e indemnizaciones de la Seguridad Social.
d)  Las indemnizaciones correspondientes a traslados, suspensiones o despidos.

PREGUNTA Nº 692.- La revisión del salario mínimo interprofesional no afectará a la estructura ni a la cuantía de  los salarios profesionales cuando estos, en su conjunto:
a)  Y cómputo mensual, fueran inferiores a aquel.
b)  Y cómputo anual, fueran inferiores a aquel.
c)  Y cómputo mensual, fueran superiores a aquel.
d)  Y cómputo anual, fueran superiores a aquel.

PREGUNTA Nº 693.- Es inembargable: (artículo 27 del Real Decreto Legislativo 2/2015, de 23 de octubre, por el  que se aprueba el texto refundido de la Ley del Estatuto de los Trabajadores)
a)  El salario mínimo interprofesional, en su cuantía.
b)  La mitad del salario mínimo interprofesional.
c)  El doble del salario mínimo interprofesional.
d)  Un tercio del salario mínimo interprofesional.    

PREGUNTA Nº 694.- Si el trabajador tuviera asignadas condiciones o retribuciones especiales en virtud de  contraprestaciones establecidas en la parte no válida del contrato, el órgano de la  jurisdicción social que a instancia de parte declare la nulidad hará el debido pronunciamiento  sobre:
a)  La subsistencia en todo o en parte de dichas condiciones o retribuciones.
b)  La supresión en todo de dichas condiciones o retribuciones.
c)  La supresión en parte de dichas condiciones o retribuciones.
d)  La subsistencia o supresión en todo o parte de dichas condiciones o retribuciones.

PREGUNTA Nº 695.- Es correcto respecto al trabajo en común y contrato de grupo: (artículo 10 del Real Decreto  Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del  Estatuto de los Trabajadores)
a)  Si el empresario diera un trabajo en común a un grupo de sus trabajadores, no tendrá  frente a cada uno de sus miembros los derechos y deberes que como tal le competen.
b)  Si el empresario hubiese celebrado un contrato con un grupo de trabajadores considerado  en su totalidad, conservará respecto de cada uno, individualmente, sus derechos y deberes.
c)  El jefe del grupo de trabajadores ostentará la representación de los que lo integren,  respondiendo de las obligaciones inherentes a dicha representación.
d)  Si el trabajador, conforme a lo pactado por escrito, asociare a su trabajo un auxiliar o  ayudante, el empresario de aquel no lo será de este.

PREGUNTA Nº 696.- El número de horas complementarias pactadas no podrá exceder de: (artículo 12 del Real  Decreto Legislativo 2/2015, de 23 de octubre, por el que se aprueba el texto refundido de la  Ley del Estatuto de los Trabajadores)
a)  El 15% de las horas ordinarias de trabajo objeto del contrato.
b)  El 20% de las horas ordinarias de trabajo objeto del contrato.
c)  El 25% de las horas ordinarias de trabajo objeto del contrato.
d)  El 30% de las horas ordinarias de trabajo objeto del contrato.

PREGUNTA Nº 697.- Para que el trabajador pueda acceder a la jubilación parcial, en los términos establecidos  en el texto refundido de la Ley General de la Seguridad Social, la empresa deberá concertar  simultáneamente un contrato de relevo, con objeto de sustituir la jornada de trabajo dejada  vacante por el trabajador que se jubila parcialmente, y este deberá acordar con su empresa  una reducción de jornada y de salario de:
a)  Entre un mínimo del 25% y un máximo del 50%.
b)  Entre un mínimo del 30% y un máximo del 60%.
c)  Entre un mínimo del 50%  y un máximo del 75%.
d)  Entre un mínimo del 20% y un máximo del 80%.

PREGUNTA Nº 698.- Respecto al trabajo a distancia no es correcto afirmar que:
a)  El acuerdo por el que se establezca el trabajo a distancia se formalizará por escrito.
b)  El trabajador a distancia tendrá derecho a percibir, como máximo, la retribución total  establecida conforme a su grupo profesional y funciones.
c)  El empresario deberá establecer los medios necesarios para asegurar el acceso efectivo de  estos trabajadores a la formación profesional para el empleo, a fin de favorecer su  promoción profesional.
d)  El empresario deberá informar a los trabajadores a distancia de la existencia de puestos de  trabajo vacantes para su desarrollo presencial en sus centros de trabajo.  

PREGUNTA Nº 699.- Solo podrán realizarse registros sobre la persona del trabajador, en sus taquillas y efectos  particulares, cuando sean necesarios para la protección de:
a)  El patrimonio empresarial, dentro del centro de trabajo y en horas de trabajo.
b)  El patrimonio empresarial y del de los demás trabajadores de la empresa, dentro del centro  de trabajo y fuera de las horas de trabajo.
c)  El patrimonio empresarial y del de los demás trabajadores de la empresa, dentro del centro  de trabajo y en horas de trabajo.
d)  El patrimonio empresarial, dentro del centro de trabajo y fuera de las horas de trabajo.        

PREGUNTA Nº 700.- De las siguientes definiciones, ¿cuál es la que se contiene en el artículo 162 del Real  Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley  Reguladora de las Haciendas Locales?
a)  Los presupuestos generales de las entidades locales constituyen la expresión cifrada,  conjunta y sistemática de las obligaciones que, como máximo, pueden reconocer la  entidad, y sus organismos autónomos, y de los derechos que prevean liquidar durante el  correspondiente ejercicio, así como de las previsiones de ingresos y gastos de las  sociedades mercantiles cuyo capital social pertenezca íntegramente a la entidad local  correspondiente.
b)  Los presupuestos generales de las entidades locales constituyen la expresión cifrada y  sistemática de las obligaciones que, como máximo, tendrán permitido reconocer la entidad,  y sus organismos autónomos, y de los derechos que prevean liquidar durante el  correspondiente ejercicio.
c)  La expresión cifrada, conjunta y sistemática de los derechos y obligaciones a liquidar  durante el ejercicio por cada uno de los órganos y entidades que formen parte del sector  público estatal.
d)  La expresión cifrada, conjunta y sistemática de los derechos y obligaciones a liquidar  durante el ejercicio económico  por todos los órganos  que formen parte del sector público  estatal., así como aquellas sociedades mercantiles cuyo capital social pertenezca  íntegramente a la entidad local correspondiente.

PREGUNTA Nº 701.- Según el artículo 223 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, en relación a la  fiscalización externa de las cuentas y de la gestión económica de las Entidades Locales y de  todos los organismos y sociedades de ellas dependientes:
a)  Es función propia del Tribunal de Cuentas, con el alcance y condiciones que establece su ley  orgánica reguladora y su ley de funcionamiento.
b)  Es función propia de la intervención General del Estado, con el alcance y condiciones que  establece su ley reguladora y de funcionamiento.
c)  Las Entidades Locales enviarán antes del día 30 de octubre de cada año, la cuenta general  correspondiente al ejercicio económico anterior.
d)  La Intervención Municipal enviará antes del día 15 de octubre de cada año la cuenta  general correspondiente al ejercicio económico anterior.    

PREGUNTA Nº 702.- Establece el artículo 165.3 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que  se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, que los  derechos liquidados y las obligaciones reconocidas se aplicarán a los Presupuestos por su  importe íntegro, quedando prohibido atender obligaciones mediante minoración de los  derechos a liquidar o ya ingresados, salvo que la Ley lo autorice de modo expreso, si bien se  exceptúan de lo anterior:
a)  Las cantidades destinadas a atender inversiones subvencionadas por otra u otras  Administraciones.
b)  Los créditos destinados a atender los gastos de personal.
c)  Las devoluciones de ingresos declarados indebidos por Tribunal o Autoridad Competentes.
d)  Los créditos que hayan de habilitarse con ocasión de dar cumplimiento a una resolución  judicial.

PREGUNTA Nº 703.- A los efectos de poder presentar reclamaciones durante el periodo de exposición al público  del Presupuesto General de la Entidad Local, no tendrán la consideración de interesados:
a)  Los que resulten directamente afectados, aunque no habiten en el territorio de la entidad  local.
b)  Los colegios oficiales, cámaras oficiales, sindicatos, asociaciones y demás entidades  legalmente constituidas para velar por intereses profesionales o económicos y vecinales,  cuando actúen en defensa de los que les son propios.
c)  Los habitantes en el territorio de la respectiva entidad local.
d)  Los que puedan resultar afectados por desarrollar su actividad económica en el territorio  de la entidad local a pesar de no habitar en el mismo.

PREGUNTA Nº 704.- Según el artículo 218 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, el órgano  interventor remitirá anualmente al Tribunal de Cuentas una serie de documentos, entre lo  que no se encuentra:
a)  Todas las resoluciones y acuerdos adoptados por el Presidente de la entidad Local y por el  Pleno de la Corporación contrarios a los reparos formulados.
b)  Un resumen de las principales anomalías detectadas en materia de ingresos.
c)  Un resumen de las principales anomalías detectadas en materia de gastos.
d)  Los informes justificativos presentados por la Corporación Local.

PREGUNTA Nº 705.- El Presupuesto de las Entidades Locales será formado por:
a)  El Presidente.
b)  La Unidad de Gestión Presupuestaria.
c)  El Tesorero.
d)  El Interventor.

PREGUNTA Nº 706.- Según el artículo 191 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, la aprobación de la  liquidación del presupuesto corresponde:
a)  Al Presidente de la Entidad Local, previo informe del Pleno de la Corporación.
b)  Al Presidente de la Entidad Local, previo informe de la Tesorería.
c)  Al Presidente de la Entidad Local, previo informe de la Secretaría.
d)  Al Presidente de la Entidad Local, previo informe de la Intervención.    

PREGUNTA Nº 707.- Los Estados de Gastos de los Presupuestos Generales de las Entidades Locales aplicarán la  clasificación:
a)  Por Programas, Económica y Orgánica.
b)  Orgánica y por Programas.
c)  Económica y Orgánica.
d)  Por Programas y Económica.

PREGUNTA Nº 708.- Al Presupuesto General de una Entidad Local, según dispone el art. 166 del Real Decreto  Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley  Reguladora de las Haciendas Locales, se unirán una serie de anexos, entre los que no se  encuentra:
a)  El estado de consolidación del Presupuesto de la propia Entidad con el de todos los  presupuestos y estado de previsión de sus organismos autónomos.
b)  El estado de ingresos y gastos de las Sociedades Mercantiles de capital exclusivo de la  Entidad Local.
c)  Los Programas anuales de actuación, inversiones, y financiación de las Sociedades  Mercantiles de cuyo capital social sea titular único o partícipe mayoritario la Entidad Local.
d)  Los Planes de Programas de Inversión y Financiación formulados por los Municipios y  demás Entidades Locales de ámbito supramunicipal.

PREGUNTA Nº 709.- El artículo 170.2 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba  el texto refundido de la Ley Reguladora de las Haciendas Locales, establece expresamente los  motivos por los que podrán entablarse  reclamaciones contra el Presupuesto General de una  Entidad Local. Entre dichos motivos no se encuentra:
a)  Por no haberse ajustado su elaboración y aprobación a los trámites establecidos en esta  ley.
b)  Por considerar que los créditos previstos en el Estado de ingresos no serán suficientes para  alcanzar un determinado nivel de calidad en ciertos servicios.
c)  Por ser de manifiesta insuficiencia los ingresos con relación a los gastos presupuestados o  bien de estos respecto a las necesidades para las que esté previsto.
d)  Por omitir el crédito necesario para el cumplimiento de obligaciones exigibles a la entidad  local, en virtud de precepto legal o de cualquier otro título legítimo.

PREGUNTA Nº 710.- Según el artículo 169 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, el presupuesto se  considerará definitivamente aprobado si durante el plazo de exposición al público no se  hubieran presentado reclamaciones; en caso contrario, el Pleno dispondrá para resolverlas:
a)  De un plazo de 20 días.
b)  De un plazo de 40 días.
c)  De un plazo de 15 días.
d)  De un plazo de un mes.    

PREGUNTA Nº 711.- Según se regula en el artículo 169 del Real Decreto Legislativo 2/2004, de 5 de marzo, por  el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales,  aprobado inicialmente el Presupuesto General de una Entidad Local, éste habrá de  exponerse al público previo anuncio en:
a)  El Boletín Oficial de la Provincia, o en su caso, de la comunidad autónoma uniprovincial.
b)  El Boletín Oficial de la Provincia y en el Boletín Oficial de la comunidad Autónoma.
c)  El Boletín Oficial de la Provincia, en el Boletín Oficial de la comunidad Autónoma, y en el  Boletín Oficial del Estado.
d)  El Boletín Oficial de la Provincia y en uno de los diarios de mayor circulación en el término  municipal.

PREGUNTA Nº 712.- Facultades del personal controlador según dispone el artículo 222 del Real Decreto  Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley  Reguladora de las Haciendas Locales:
a)  Los funcionarios que tengan a su cargo la función interventora ejercerán su función de  manera coordinada con la Intervención de la Entidad Local correspondiente.
b)  Los funcionarios que tengan a su cargo la función interventora así como los que se designen  para llevar a efecto los controles financieros y de eficacia, ejercerán su función con plena  independencia y podrán recabar cuantos antecedentes consideren necesarios.
c)  Los funcionarios que tengan a su cargo la función interventora podrán efectuar el examen y  comprobación de todos los documentos económicos y técnicos que les faciliten los órganos  correspondientes de la Entidad Local.
d)  Los funcionarios que tengan a su cargo la función interventora podrán verificar arqueos y  solicitar de los responsables de su custodia, los informes y asesoramientos que estimen  necesarios.

PREGUNTA Nº 713.- Respecto al ámbito de aplicación y finalidad del control financiero a que se refiere el  artículo 220 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el  texto refundido de la Ley Reguladora de las Haciendas Locales, señale la respuesta  incorrecta:
a)  El control financiero tendrá por objeto comprobar el funcionamiento en el aspecto  presupuestario de los servicios de las entidades locales, de sus organismos autónomos y de  las sociedades mercantiles de ellas dependientes.
b)  El control financiero tendrá por objeto informar acerca de la adecuada presentación de la  información financiera, del grado del cumplimiento de las normas y directrices que sean de  aplicación y del grado de eficacia y eficiencia en la consecución de los objetivos previstos.
c)  El control financiero se realizará por procedimientos de auditoría de acuerdo con las  normas de auditoría del sector público.
d)  Como resultado del control efectuado habrá de emitirse informe escrito.    

PREGUNTA Nº 714.- ¿Qué tiene por objeto el control de eficacia, según dispone el artículo 221 del Real Decreto  Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley  Reguladora de las Haciendas Locales?
a)  La comprobación periódica del grado de cumplimiento de los objetivos, así como el análisis  del coste de funcionamiento y del rendimiento de los respectivos servicios o inversiones.
b)  La comprobación cada 3 meses del grado de cumplimiento de los objetivos, así como el  análisis del coste de funcionamiento y del rendimiento de los respectivos servicios o  inversiones
c)  La comprobación anual del grado de cumplimiento de los objetivos, así como el análisis del  coste de funcionamiento y del rendimiento de los respectivos servicios o inversiones.
d)  La comprobación cuando se estime necesario del grado de cumplimiento de los objetivos,  así como el análisis del coste de funcionamiento y del rendimiento de los respectivos  servicios o inversiones.

PREGUNTA Nº 715.- Según el artículo 219 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, no estarán  sometidos a intervención previa: (Señale la opción incorrecta)  
a)  Los gastos de material no inventariable.
b)  Contratos menores.
c)  Contratos de carácter no periódico.
d)  Gastos menores de 3005,6 euros que se hagan efectivos a través del sistema de anticipos  de caja fija.

PREGUNTA Nº 716.- No constituye una fase de la gestión de los Presupuestos de Gastos de las Entidades  Locales:
a)  Autorización del gasto.
b)  Disposición del pago.
c)  Reconocimiento de la obligación.
d)  Ordenación del pago.

PREGUNTA Nº 717.- Según el artículo 214 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, la función  interventora tendrá por objeto fiscalizar: (señale la incorrecta)  
a)  La recaudación, inversión y aplicación, en general, de los caudales públicos administrados,  con el fin de que la gestión se ajuste a las disposiciones aplicables en cada caso.
b)  Los ingresos y pagos que se deriven del reconocimiento y liquidación de derechos y  obligaciones o gastos de contenido económico.
c)  Todos los actos de las Entidades Locales y de sus organismos autónomos que den lugar al  reconocimiento y liquidación de derechos y obligaciones o gastos de contenido económico.
d)  La ejecución de los actos que den lugar al reconocimiento de gastos de contenido  económico de sociedades en que participen los organismos autónomos de las Entidades  locales.    

PREGUNTA Nº 718.- ¿Cuándo deberá ser remitido al Pleno de la Corporación el Proyecto de Presupuesto  General de la Entidad Local, para su aprobación, enmienda o devolución?
a)  Antes del 1 de septiembre.
b)  Antes del 31 de octubre.
c)  Antes del 15 de octubre.
d)  Antes del 30 de septiembre.

PREGUNTA Nº 719.- De las distintas fases de ejecución del gasto, no implica una relación con terceros externos  a la Entidad Local:
a)  La ordenación del gasto.
b)  La autorización del gasto.
c)  La liquidación de la obligación.
d)  El compromiso del gasto.

PREGUNTA Nº 720.- Señale la respuesta correcta, respecto a la regulación en el artículo 193 del Real Decreto  Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley  Reguladora de las Haciendas Locales, sobre la Liquidación del presupuesto con remanente de  tesorería negativo:
a)  En caso de liquidación del presupuesto con remanente de tesorería negativo, el Pleno de la  corporación es el encargado de proceder, en la primera sesión que celebre, a la reducción  de gastos del nuevo presupuesto por cuantía igual al déficit producido.
b)  La reducción de gastos del nuevo presupuesto por cuantía igual al déficit producido solo  podrá revocarse por el Interventor, previa propuesta del Presidente.
c)  La reducción de gastos del nuevo presupuesto por cuantía igual al déficit producido solo  podrá revocarse por el Presidente, previa propuesta del Pleno.
d)  En caso de liquidación del presupuesto con remanente de tesorería negativo, el Pleno de la  corporación o el órgano competente del organismo autónomo, según corresponda,  deberán proceder, en la primera sesión que celebren, a la reducción de gastos del nuevo  presupuesto por cuantía igual al déficit producido.

PREGUNTA Nº 721.- Según dispone el artículo 171 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el  que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, contra la  aprobación definitiva del Presupuesto General de una Entidad Local:
a)  Se podrá interponer Recurso Contencioso- Administrativo.
b)  Solo se podrá interponer Recurso de Reposición.
c)  Deberá de interponerse Recurso de Alzada.
d)  Se interpondrá Recurso de Revisión ante el Pleno de la Corporación.

PREGUNTA Nº 722.- ¿Qué conceptos conforman el remanente de tesorería de la entidad local, según lo  regulado en el artículo 191 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales?
a)  Todas las obligaciones reconocidas el último día del ejercicio.
b)  Todos los derechos pendientes de cobro el último día del ejercicio.
c)  Las obligaciones reconocidas y liquidadas no satisfechas el último día del ejercicio, los  derechos pendientes de cobro y los fondos líquidos a 31 de diciembre.
d)  Los derechos pendientes de cobro a 31 de diciembre.    

PREGUNTA Nº 723.- De acuerdo con el artículo 169 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el  que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, el plazo  durante el cual estará expuesto al público el Presupuesto General de una Entidad Local,  durante el cual los interesados podrán presentar reclamaciones, será de:
a)  Veinte días hábiles.
b)  Quince días.
c)  Treinta días hábiles.
d)  Un mes.

PREGUNTA Nº 724.- La norma que regula la estructura Presupuestaria de las Entidades Locales es:
a)  La Orden de 3 de diciembre de 2008.
b)  La Orden de 20 de septiembre de 1989.
c)  El RD 500/1990 de 10 de septiembre.
d)  El RD 500/1900 de 15 de mayo.

PREGUNTA Nº 725.- Según el artículo 186 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, ¿a quién le  corresponde las funciones de ordenación de pagos?
a)  Al Presidente de la Entidad Local.
b)  Al Presidente de la Entidad Local, previo informe de la Tesorería.
c)  Al Pleno de la Entidad Local.
d)  Al Pleno y al Presidente de la Entidad Local conjuntamente.

PREGUNTA Nº 726.- Según el artículo 213 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, los órganos  interventores de las Entidades Locales remitirán a la Intervención General de la  Administración del Estado un informe resumen de los resultados de los controles  desarrollados en cada ejercicio:
a)  Cuando sea requerido por la Intervención General, debiendo emitirse informe, al menos,  cada tres años.
b)  Con carácter anual.
c)  Con carácter bianual.
d)  Con carácter semestral.

PREGUNTA Nº 727.- Respecto al Procedimiento de elaboración y aprobación inicial regulado en el artículo 168  del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido  de la Ley Reguladora de las Haciendas Locales, en el apartado 2 se establece que el  Presupuesto de cada uno de los Organismos Autónomos que integran el Presupuesto  General de la Entidad Local, una vez aprobado por el órgano competente, será remitido a la  entidad Local de la que dependa:
a)  Antes del 1 de julio.
b)  Antes del 15 de septiembre.
c)  Antes del 15 de mayo.
d)  antes del 1 de junio.    

PREGUNTA Nº 728.- Según el artículo 164 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, en relación al  principio de universalidad establece que:
a)  Las Entidades Locales elaborarán y aprobarán anualmente un presupuesto general en el  que se integrarán el presupuesto de la propia Entidad, los de los organismos autónomos  dependientes de esta y los estados de previsión de gastos e ingresos de las sociedades  mercantiles cuyo capital social pertenezca íntegramente a la Entidad Local.
b)  Las Entidades Locales elaborarán y aprobarán anualmente un presupuesto general en el  que se integrarán el presupuesto de la propia Entidad, los de los organismos autónomos  dependientes de esta y los estados de previsión de gastos e ingresos de las sociedades  mercantiles gestionadas por la Entidad Local.
c)  Las Entidades Locales elaborarán y aprobarán anualmente un presupuesto general en el  que se integrarán el presupuesto de la propia Entidad, los de los organismos autónomos  dependientes de esta y los estados de previsión de gastos e ingresos de las sociedades  mercantiles financiadas por la Entidad Local.
d)  Las Entidades Locales elaborarán y aprobarán anualmente un presupuesto general en el  que se integrarán el presupuesto de la propia Entidad, los de los organismos autónomos  dependientes de esta y los estados de previsión de gastos e ingresos de las sociedades  mercantiles cuyo capital social pertenezca mayoritariamente a la Entidad Local.

PREGUNTA Nº 729.- Según establece el artículo 184 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el  que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, la gestión  del presupuesto de gastos de realizará en las siguientes fases:
a)  Ordenación de pago; autorización de gasto; disposición de gasto y reconocimiento de la  obligación.
b)  Autorización de gasto; disposición o compromiso de gasto; reconocimiento o liquidación de  la obligación y ordenación de pago.
c)  Autorización de gasto; compromiso de gasto y ordenación de pago.
d)  Compromiso de gasto; liquidación de la obligación y ordenación de pago.

PREGUNTA Nº 730.- Dispone el artículo 213 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, que las normas  sobre los procedimientos de control, metodología de aplicación, criterios de actuación,  derechos y deberes del personal controlador y destinatarios de los informes de control:
a)  Serán establecidas por el Ministerio de la Presidencia a propuesta del Ministerio de  Hacienda.
b)  Serán establecidas por el Gobierno a propuesta del Ministerio de Hacienda y  Administraciones Públicas.
c)  Serán establecidas por el Ministerio de Hacienda a propuesta de la Intervención General del  Estado.
d)  Serán establecidas por el Gobierno a propuesta del Ministerios de Administraciones  Territoriales.    

PREGUNTA Nº 731.- Según el artículo 217 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, corresponderá al  Pleno la resolución de las discrepancias cuando los reparos:
a)  Se basen en insuficiencia de crédito.
b)  Se basen en inadecuación de crédito.
c)  Se refieran a obligaciones o gastos cuya aprobación sea de su competencia.
d)  Se refieran a obligaciones o gastos cuya aprobación no sea de su competencia.

PREGUNTA Nº 732.- La clasificación por programas del Estado de Gastos se divide con carácter general en tres  niveles, sin perjuicio de la ampliación, en ciertos casos, prevista en el Real Decreto Legislativo  2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las  Haciendas Locales. Estos tres niveles son:
a)  Concepto, Política de Gasto y Grupo de Programa.
b)  Artículo, Programa y subprograma.
c)  Área de Gasto, Política de Gasto y Grupo de Programa.
d)  Capítulo, Programa y Política de Gasto.

PREGUNTA Nº 733.- Dispone el artículo 213 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, que el control  interno en las Entidades Locales respecto de su gestión económica comprenderá:
a)  La función de control financiero y contable y la función de auditoría.
b)  La función interventora, la función de control financiero, incluida la auditoría de cuentas, y  función de control de la eficacia.
c)  La función interventora y la función de control financiero y contable.
d)  La función interventora, la función de control financiero, sin incluir la auditoría de cuentas,  y función de control de la eficacia.

PREGUNTA Nº 734.- Según el artículo 216 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, si el reparo afecta  a la disposición de gastos, reconocimiento de obligaciones u ordenación de pagos, se  suspenderá la tramitación del expediente hasta que aquél sea solventado en los siguientes  casos:
a)  Cuando se base en dilación de la tramitación del crédito.
b)  Cuando hubieran sido fiscalizados los actos que dieron origen a las órdenes de pago.
c)  En los casos de omisión en el expediente re requisitos o trámites que no sean esenciales.
d)  Cuando el reparo derive de comprobaciones materiales de obras, suministros,  adquisiciones y servicios.

PREGUNTA Nº 735.- Según el artículo 215  del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, si en el ejercicio de  la función interventora el órgano interventor se manifestara en desacuerdo con el fondo o  con la forma de los actos, documentos o expedientes examinados, deberá formular:
a)  Su impugnación por escrito en el acto de adopción del acuerdo o resolución.
b)  Su conclusión por escrito en el acto de adopción del acuerdo o resolución.
c)  Sus reparos por escrito antes de la adopción del acuerdo o resolución.
d)  Sus alegaciones por escrito en la propuesta de adopción del acuerdo o resolución.    

PREGUNTA Nº 736.- Respecto al presupuesto general definitivamente aprobado, tal y como dispone el artículo  169 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto  refundido de la Ley Reguladora de las Haciendas Locales, no es cierto afirmar que:
a)  La aprobación definitiva del presupuesto general habrá de realizarse antes del 31 de  diciembre del año anterior al del ejercicio en que deba aplicarse.
b)  El Presupuesto general definitivamente aprobado, será insertado en el boletín oficial de la  corporación, si lo tuviera, y resumido, por epígrafes y artículos de cada uno de los  presupuestos que lo integran, en el de la provincia, o en su caso, de la comunidad  autónoma uniprovincial.
c)  Se remitirá copia a la Administración del Estado y a la correspondiente comunidad  autónoma.
d)  La aprobación definitiva del presupuesto general le corresponde al Pleno de la Corporación.

PREGUNTA Nº 737.- De acuerdo con el principio de anualidad, dispone el artículo 163 del Real Decreto  Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley  Reguladora de las Haciendas Locales, que el ejercicio presupuestario coincidirá con el año  natural y a él se imputarán:
a)  Los derechos liquidados en el ejercicio que se deriven de ese período y las obligaciones  reconocidas durante el ejercicio.
b)  Los derechos liquidados en el ejercicio, cualquiera que sea el período de que deriven, y las  obligaciones vencidas durante el ejercicio.
c)  Los derechos liquidados en el ejercicio, cualquiera que sea el período de que deriven, y las  obligaciones reconocidas durante el ejercicio.
d)  Los derechos líquidos y vencidos en el ejercicio, cualquiera que sea el período de que  deriven y las obligaciones reconocidas y exigibles durante el ejercicio.

PREGUNTA Nº 738.- De acuerdo con el artículo 168 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el  que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, al  Presupuesto formado de una Entidad Local, debe unirse una serie de documentación entre la  que no se encuentra:
a)  Anexo del personal de las sociedades mercantiles dependientes de la Entidad Local.
b)  Avance de la liquidación del Presupuesto corriente, referida, al menos, a 6 meses del  mismo.
c)  Liquidación del Presupuesto del ejercicio anterior.
d)  Anexo de las inversiones a realizar durante el ejercicio.

PREGUNTA Nº 739.- Según el artículo 164 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, los organismos  autónomos de las Entidades Locales se clasifican, a efectos de su régimen presupuestario y  contable, en la forma siguiente:
a)  Organismos autónomos destinados a la recaudación local y organismos autónomos de  carácter comercial, industrial, financiero o análogo.
b)  Organismos de carácter administrativo tributario, comercial, industrial, financiero o  análogo.
c)  Organismos autónomos de carácter administrativo y organismos autónomos de carácter  comercial, industrial, financiero o análogo.
d)  Organismos autónomos de carácter financiero y administrativos.    

PREGUNTA Nº 740.- Según el artículo 216 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, cuando la  disconformidad se refiera al reconocimiento o liquidación de derechos a favor de las  Entidades Locales o sus organismos autónomos, la oposición se formalizará:
a)  En nota de reparo que, en ningún caso, suspenderá la tramitación del expediente.
b)  En nota de alegaciones que instará el examen de toda la documentación del expediente del  que deriven los derechos.
c)  En nota de reparo que, potestativamente, a criterio de la Intervención podrá suspender la  tramitación del expediente.
d)  En nota de reparo que suspenderá la tramitación del expediente.

PREGUNTA Nº 741.- Aprobado definitivamente el Presupuesto General de una Entidad Local, éste habrá de  publicarse, sin perjuicio de otros lugares previstos en el artículo 169 del Real Decreto  Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley  Reguladora de las Haciendas Locales, en el Boletín Oficial de la Provincia, resumido, cada uno  de los presupuestos que lo integren, por:
a)  Conceptos.
b)  Partidas.
c)  Artículos.
d)  Capítulos.

PREGUNTA Nº 742.- Según el artículo 168.3 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se  aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, las Sociedades  Mercantiles, incluso aquellas en cuyo capital sea mayoritaria la participación de la entidad  Local remitirá a ésta sus previsiones de ingresos y gastos a fin de que se integre en el  Presupuesto General de la Entidad Local:
a)  Antes del 1 de junio.
b)  Antes del 15 de mayo.
c)  Antes del 1 de julio.
d)  Antes del 15 de septiembre.

PREGUNTA Nº 743.- ¿De qué plazo dispone el Pleno en el caso de que los interesados hayan presentado  reclamaciones respecto a la aprobación inicial del presupuesto general al que se refiere el  artículo 169 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el  texto refundido de la Ley Reguladora de las Haciendas Locales?
a)  Un mes.
b)  Dos meses.
c)  30 días.
d)  20 días.

PREGUNTA Nº 744.- Los Planes y Programas de inversión que formulen los Municipios y se incorporen como  anexo al presupuesto se efectuarán, según dispone el a artículo 166 del Real Decreto  Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley  Reguladora de las Haciendas Locales, para el plazo de:
a)  Cinco años.
b)  Dos años.
c)  Cuatro años.
d)  Tres años.  

PREGUNTA Nº 745.- La clasificación Económica a nivel de gastos se dividen con carácter general, sin perjuicios  de la ampliación prevista en el artículo 167 del Real Decreto Legislativo 2/2004, de 5 de  marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas  Locales, en tres niveles, a saber:
a)  Partida, Artículo y Concepto.
b)  Concepto, Subconcepto y Artículo.
c)  Artículo, Capítulo y Partidas.
d)  Concepto, Artículo y Capítulo.

PREGUNTA Nº 746.- En relación con el presupuesto de las entidades Locales, no se imputarán a él, de acuerdo  con lo establecido en el art. 163 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el  que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales:
a)  Los derechos liquidados en el año natural, cualquiera que sea el periodo de que deriven.
b)  Las obligaciones reconocidas durante el mes de enero siguiente al año natural de vigencia,  correspondientes a gastos realizados con anterioridad.
c)  Los derechos liquidados en el año natural de su vigencia.
d)  Las obligaciones reconocidas durante el año natural de su vigencia.        

PREGUNTA Nº 747.- Según el artículo 2.1 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos  del sector público y, en consecuencia, están sometidos a la presente Ley en la forma y  términos previstos en la misma:
a)  Los contratos no onerosos, de naturaleza jurídica pública, que celebren las entidades  enumeradas en el artículo 3 de esta ley.
b)  Los contratos onerosos, cualquiera que sea su naturaleza jurídica, que celebren las  entidades enumeradas en el artículo 3 de esta ley.
c)  Los contratos onerosos, de naturaleza jurídica-pública que celebren las entidades  enumeradas en el artículo 3 de esta ley.
d)  Los contratos no onerosos, cualquiera que sea su naturaleza jurídica, que celebren las  entidades enumeradas en el artículo 3 de esta ley.

PREGUNTA Nº 748.- Según el artículo 3 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, a los efectos de  esta Ley se considera que forman parte del sector público: (señale la incorrecta)  
a)  Los fondos con personalidad jurídica.
b)  Las Mutuas colaboradoras con la Seguridad Social.
c)  Las fundaciones públicas.
d)  Las Entidades Gestoras y los Servicios Comunes de la Seguridad Social.

PREGUNTA Nº 749.- La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, tiene por objeto regular la  contratación del sector público, a fin de garantizar que la misma se ajusta a los principios de:
a)  Acceso a las licitaciones restringido, publicidad y transparencia de los procedimientos, y no  discriminación e igualdad de trato entre los licitadores.
b)  Acceso a las licitaciones restringido, publicidad y transparencia de los procedimientos, y no  discriminación y jerarquía entre los licitadores.
c)  Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no  discriminación y jerarquía entre los licitadores.
d)  Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no  discriminación e igualdad de trato entre los licitadores.    

PREGUNTA Nº 750.- El artículo 13 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la  que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y  del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, en su apartado 2,  establece que es lo que se entiende por obra, por lo que, podemos afirmar que no se  entiende por obra:
a)  El resultado de un conjunto de trabajos de construcción o de ingeniería civil, destinado a  cumplir por sí mismo una función económica o técnica, que tenga por objeto u bien  inmueble.
b)  La realización de trabajos que modifiquen la forma o sustancia del terreno o de su vuelo.
c)  Aquel contrato en cuya virtud uno o varios poderes adjudicadores encomiendan a título  oneroso a una o varias personas, la gestión de un servicio cuya prestación sea de su  titularidad o competencia, y cuya contrapartida venga constituida por el derecho a explotar  los servicios objeto del contrato.
d)  La realización de trabajos de mejora del medio físico o natural.

PREGUNTA Nº 751.- Según dispone el artículo 17 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector  Público, por la que se transponen al ordenamiento jurídico español las Directivas del  Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son  contratos de servicios aquellos cuyo objeto son prestaciones de hacer consistentes en el  desarrollo de una actividad dirigidas a la obtención de:
a)  Un resultado de obra o suministro, incluyendo aquellos en que el adjudicatario se obligue a  ejecutar el servicio de forma sucesiva y por precio unitario.
b)  Un resultado de obra o suministro, salvo aquellos en que el adjudicatario se obligue a  ejecutar el servicio de forma sucesiva y por precio unitario.
c)  Un resultado distinto de una obra o suministro, salvo aquellos en que el adjudicatario se  obligue a ejecutar el servicio de forma sucesiva y por precio unitario.
d)  Un resultado distinto de una obra o suministro, incluyendo aquellos en que el adjudicatario  se obligue a ejecutar el servicio de forma sucesiva y por precio unitario.

PREGUNTA Nº 752.- ¿Podrán ser objeto de los contratos de servicios, los servicios que impliquen ejercicio de la  autoridad inherente a los poderes públicos? (Artículo 17 de la Ley 9/2017, de 8 de  noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento  jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y  2014/24/UE, de 26 de febrero de 2014)
a)  No.
b)  Sí.
c)  En ningún caso.
d)  No, salvo excepciones.    

PREGUNTA Nº 753.- La concesión de obras es un contrato que tiene por objeto la realización por el  concesionario de algunas de las prestaciones a que se refiere el contrato de obras: (artículo  14 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014)
a)  Incluidas las de restauración y reparación de construcciones existentes, así como la  conservación y mantenimiento de los elementos construidos.
b)  Incluidas las de restauración y reparación de construcciones existentes, excepto la  conservación y mantenimiento de los elementos construidos.
c)  Salvo las de restauración y reparación de construcciones existentes, así como la  conservación y mantenimiento de los elementos construidos.
d)  Incluida la conservación y mantenimiento de los elementos construidos, excepto las de  restauración y reparación de construcciones existentes.

PREGUNTA Nº 754.- Señale la respuesta correcta, según lo dispuesto en el artículo 2 de la Ley 9/2017, de 8 de  noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento  jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y  2014/24/UE, de 26 de febrero de 2014, relativo al ámbito de aplicación:
a)  La aplicación de esta Ley a los contratos que celebren las Comunidades Autónomas y las  entidades que integran la Administración Local, o los organismos dependientes de las  mismas, así como a los contratos subvencionados por cualquiera de estas entidades, se  efectuará en los términos previstos en esta Ley.
b)  La aplicación de esta Ley a los contratos que celebren las Comunidades Autónomas y las  entidades que integran la Administración Local, o los organismos dependientes de las  mismas, así como a los contratos subvencionados por cualquiera de estas entidades, se  efectuará en los términos previstos en la Disposición final primera de la presente Ley  relativa a los títulos competenciales.
c)  La aplicación de esta Ley a los contratos que celebren las Comunidades Autónomas y las  entidades que integran la Administración Local, o los organismos dependientes de las  mismas, así como a los contratos subvencionados por cualquiera de estas entidades, se  efectuará en los términos previstos en la Disposición final segunda de la presente Ley  relativa a los títulos competenciales.
d)  La aplicación de esta Ley a los contratos que celebren las Comunidades Autónomas y las  entidades que integran la Administración Local, o los organismos dependientes de las  mismas, así como a los contratos subvencionados por cualquiera de estas entidades, se  efectuará en los términos previstos en esta Ley y en sus propios Estatutos o normas  especiales.    

PREGUNTA Nº 755.- Según dispone el artículo 18 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector  Público, por la que se transponen al ordenamiento jurídico español las Directivas del  Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, el  contrato mixto:
a)  Únicamente puede contener prestaciones correspondientes al contrato de obra y al  contrato de suministros.
b)  Únicamente puede contener prestaciones correspondientes al contrato de obra y al  contrato de servicios.
c)  Únicamente puede contener prestaciones correspondientes al contrato de suministros y al  contrato de servicios.
d)  Será aquel que contenga prestaciones correspondientes a otro u otros de distinta clase.

PREGUNTA Nº 756.- Queda excluido del ámbito de la presente Ley, según dispone el artículo 11 de la Ley  9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al  ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo  2014/23/UE y 2014/24/UE, de 26 de febrero de 2014: (señale la incorrecta)  
a)  La relación de servicio de los funcionarios públicos y los contratos regulados en la  legislación laboral.
b)  Las relaciones jurídicas consistentes en la prestación de un servicio público cuya utilización  por los usuarios requiera el abono de una tarifa, tasa o precio público de aplicación general.
c)  Los contratos relativos a servicios de arbitraje y conciliación.
d)  Los contratos de suministro y servicios.

PREGUNTA Nº 757.- Respecto a los partidos políticos, organizaciones sindicales, y organizaciones empresariales  y asociaciones profesionales, además de las fundaciones y asociaciones vinculadas a  cualquiera de ellos, cuando cumplan los requisitos para ser poder adjudicador y respecto de  los contratos sujetos a regulación armonizada, deberán actuar conforme dispone el artículo 3  de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014,  a los siguientes principios:
a)  Publicidad, transparencia, eficacia y eficiencia.
b)  Publicidad, concurrencia y no discriminación.
c)  Publicidad, concurrencia, transparencia, igualdad y no discriminación sin perjuicio del  respeto a la autonomía de la voluntad y de la confidencialidad cuando sea procedente.
d)  Publicidad, no discriminación y confidencialidad.

PREGUNTA Nº 758.- El artículo 14 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la  que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y  del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, dispone que en la  concesión de obras la contraprestación a favor del concesionario consiste:
a)  Únicamente en el derecho a explotar la obra en el sentido del apartado cuarto del artículo  14.
b)  Únicamente en el derecho a explotar la obra acompañado del de percibir un precio.
c)  O bien únicamente en el derecho a explotar la obra en el sentido del apartado cuarto del  artículo 14, o bien en dicho derecho acompañado del de percibir un precio.
d)  O bien únicamente en el derecho a explotar la obra en el sentido del apartado cuarto del  artículo 14, o bien en dicho derecho sin que sea necesario que vaya acompañado del de  percibir un precio.  

PREGUNTA Nº 759.- El artículo 13 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la  que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y  del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, regula el contrato de  obras, según el cual, son contratos de obras aquellos que tienen por objeto uno de los  siguientes:
a)  La ejecución de una obra sin incluir la redacción del proyecto.
b)  La realización de alguno de los trabajos que se enumeran en el Anexo II de la Ley de  Contratos del Sector Público.
c)  La realización, por cualquier medio, de una obra que cumpla los requisitos fijados por la  entidad del sector público contratante que ejerza una influencia decisiva en el tipo o el  proyecto de la obra.
d)  Únicamente la realización de alguno de los trabajos que se enumeran en el Anexo I de la  Ley de Contratos del Sector Público.

PREGUNTA Nº 760.- La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, tiene por objeto regular la  contratación del sector público, a fin de asegurar, en conexión con el objetivo de estabilidad  presupuestaria y control del gasto, y el principio de integridad, una eficiente utilización de  los fondos destinados a la realización de obras, la adquisición de bienes y la contratación de  servicios mediante:
a)  La selección de la oferta y demanda económicamente más ventajosa.
b)  La necesidad de determinar y concretar qué nivel de exigencia se tiene que satisfacer.
c)  La salvaguarda de la igualdad en la competencia.
d)  La exigencia de la definición previa de las necesidades a satisfacer, la salvaguarda de la libre  competencia y la selección de la oferta económicamente más ventajosa.

PREGUNTA Nº 761.- Según establece el artículo 5 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector  Público, por la que se transponen al ordenamiento jurídico español las Directivas del  Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014,  quedan excluidos los contratos de concesiones de obras y concesiones de servicios que se  celebren en el ámbito de la seguridad y la defensa, en los que concurra alguna de las  circunstancias siguientes:
a)  Que sean adjudicados en el marco de un programa de cooperación basado en la mejoras de  productos o partes del mismo.
b)  Que sean adjudicados en el marco de un programa de cooperación basado en la  investigación y el desarrollo de un nuevo producto y, en su caso, también relacionados con  el ciclo de vida del mismo o partes de dicho ciclo, siempre que participen en el programa al  menos dos Estados miembros de la Unión Europea.
c)  Que sean adjudicados en el marco de un programa de cooperación basado en la  investigación y el desarrollo de un nuevo producto y, en su caso, también relacionados con  el ciclo de vida del mismo o partes de dicho ciclo, siempre que participen en el programa  dos Estados miembros o más de la Unión Europea.
d)  Las concesiones que se adjudiquen a otro Estado Miembro en relación con compras de  carácter civil.    

PREGUNTA Nº 762.- Según se recoge en el artículo 16 de la Ley 9/2017, de 8 de noviembre, de Contratos del  Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del  Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014,  ¿cuándo se presume que las entidades intervinientes tienen vocación de mercado?
a)  Cuando realicen en el mercado abierto un porcentaje igual o superior al 30 por ciento de  las actividades objeto de colaboración.
b)  Cuando realicen en el mercado abierto un porcentaje superior al 30 por ciento de las  actividades objeto de colaboración.
c)  Cuando realicen en el mercado abierto un porcentaje superior al 20 por ciento de las  actividades objeto de colaboración.
d)  Cuando realicen en el mercado abierto un porcentaje igual o superior al 20 por ciento de  las actividades objeto de colaboración.

PREGUNTA Nº 763.- Según el artículo 15 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, el contrato de  concesión de servicios es aquel en cuya virtud uno o varios poderes adjudicadores  encomiendan:
a)  A título oneroso a una o varias personas, naturales o jurídicas, la gestión de un servicio cuya  prestación sea de su titularidad o competencia.
b)  A título oneroso a una o varias personas jurídicas, la gestión de un servicio cuya prestación  sea de su titularidad o competencia.
c)  A título oneroso o gratuito a una o varias personas, naturales o jurídicas, la gestión de un  servicio cuya prestación sea de su titularidad o competencia.
d)  A título oneroso o gratuito a una o varias personas jurídicas, la gestión de un servicio cuya  prestación sea de su titularidad o competencia.

PREGUNTA Nº 764.- Con carácter general, quedan excluidos de la Ley 9/2017, de 8 de noviembre, de Contratos  del Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas  del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014,  los contratos de investigación y desarrollo, excepto una serie de contratos que estén  incluidos en una serie de códigos y cumplan con unas condiciones; éstas últimas son:
a)  Que los ingresos los obtenga exclusivamente el poder adjudicador para su utilización en el  ejercicio de su actividad.
b)  Que los beneficios pertenezcan exclusivamente al poder adjudicador para su utilización en  el ejercicio de su propia actividad y que el servicio prestado sea remunerado íntegramente  por el poder adjudicador.
c)  Que los beneficios pertenezcan en un cincuenta por ciento al poder adjudicador para su  utilización en el ejercicio de su propia actividad y que el servicio prestado sea remunerado  íntegramente por el poder adjudicador
d)  Que los beneficios pertenezcan exclusivamente al poder adjudicador para su utilización en  el ejercicio de su propia actividad y en otras nuevas actividades, y que el servicio prestado  sea remunerado íntegramente por el poder adjudicador.          

PREGUNTA Nº 765.- El artículo 9 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la  que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y  del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, dispone que las  autorizaciones y concesiones sobre bienes de dominio público y los contratos de explotación  de bienes patrimoniales distintos a los definidos en el artículo 14:
a)  Se encuentran excluidas de la presente Ley y se regularán por su legislación específica salvo  en los casos en que expresamente se declaren de aplicación las prescripciones de la  presente Ley.
b)  Se encuentran incluidas en la presente Ley, y solo se regularán por su legislación específica  para resolver las dudas y lagunas que pudieran presentarse.
c)  Se encuentran excluidas de la presente Ley y se regularán únicamente por su legislación  específica.
d)  Se encuentran incluidas en la presente Ley pero se regularán por su legislación específica y  únicamente por la presente Ley en los casos en que expresamente se declaren de  aplicación sus preceptos.

PREGUNTA Nº 766.- Según el artículo 11 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, quedan  excluidos del ámbito de la presente Ley:
a)  Las relaciones jurídicas consistentes en la prestación de un servicio público o privado cuya  utilización por los usuarios requiera el abono de una tarifa, tasa o precio público.
b)  Los contratos por los que una entidad del sector privado se obligue a entregar bienes o  derechos o a prestar algún servicio, sin perjuicio de que el adquirente sea una entidad del  sector público o privado.
c)  La prestación de servicios sociales por entidades públicas.
d)  La relación de servicio de los funcionarios públicos y los contratos regulados en la  legislación laboral.

PREGUNTA Nº 767.- La calificación de los contratos según el artículo 12 de la Ley 9/2017, de 8 de noviembre, de  Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de  febrero de 2014:
a)  Todos los contratos pertenecientes al sector público se calificarán de acuerdo con las  normas contenidas en esta Ley.
b)  Todos los contratos pertenecientes al Sector Público se calificarán  según las normas de  derecho administrativo o de
c)  Los contratos de obras, concesión de obras, concesión de servicios, suministro y servicios  que celebren las entidades pertenecientes al sector público se calificarán de acuerdo con  las normas contenidas la presente sección.
d)  Los contratos de obras, concesión de obras, concesión de servicios, suministro y servicios  que celebren las entidades pertenecientes al sector público se calificarán según las normas  de derecho administrativo o de derecho privado que les sean de aplicación.    

PREGUNTA Nº 768.- Respecto a los negocios y contratos excluidos en el ámbito financiero regulados en el  artículo 10 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que  se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014: (señale la incorrecta)  :
a)  Los contratos relativos a servicios financieros relacionados con la emisión, compra, venta o  transferencia de valores o de otros instrumentos financieros.
b)  Los contratos de préstamo y operaciones de tesorería, en cualquier caso.
c)  Los servicios prestados por el Banco de España y las operaciones realizadas con la Facilidad  Europea de Estabilización Financiera y con el Mecanismo Europeo de Estabilidad.
d)  Los contratos de préstamo y operaciones de tesorería, estén o no relacionados con la  emisión, venta, compra o transferencia de valores o de otros instrumentos.

PREGUNTA Nº 769.- En el contrato de concesión de servicios (artículo 15 de la Ley 9/2017, de 8 de noviembre,  de Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español  las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de  febrero de 2014), la contrapartida viene constituida:
a)  Únicamente por el derecho a explotar los servicios objeto del contrato.
b)  Únicamente por el derecho a explotar los servicios objeto del contrato acompañado del de  percibir un precio.
c)  Bien por el derecho a explotar los servicios objeto del contrato o bien por dicho derecho  acompañado del de percibir un precio.
d)  Normalmente, por el derecho a explotar los servicios objeto del contrato.

PREGUNTA Nº 770.- Según se regula en el artículo 18 de la Ley 9/2017, de 8 de noviembre, de Contratos del  Sector Público, por la que se transponen al ordenamiento jurídico español las Directivas del  Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014,  para la determinación de las normas que regirán la adjudicación de los contratos mixtos,  cuando un contrato mixto comprenda prestaciones propias de dos o más contratos de obras,  suministros o servicios se atenderá a:
a)  El carácter de la prestación principal.
b)  El carácter de la prestación secundaria.
c)  El carácter de la prestación que elija el adjudicatario.
d)  El carácter de la prestación que elija el adjudicador.

PREGUNTA Nº 771.- ¿Qué tienen por objeto los contratos de suministro del artículo 16 de la Ley 9/2017, de 8  de noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento  jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y  2014/24/UE, de 26 de febrero de 2014?
a)  La adquisición, el arrendamiento financiero, o el arrendamiento sin opción de compra, de  productos o bienes inmuebles.
b)  La adquisición, el arrendamiento financiero, o el arrendamiento sin opción de compra, de  productos o bienes muebles.
c)  La adquisición, el arrendamiento financiero, o el arrendamiento, con o sin opción de  compra, de productos o bienes inmuebles.
d)  La adquisición, el arrendamiento financiero, o el arrendamiento, con o sin opción de  compra, de productos o bienes muebles.    

PREGUNTA Nº 772.- Respecto a los negocios jurídicos y contratos excluidos en el ámbito internacional, a que se  refiere el artículo 7 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por  la que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo  y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014:
a)  Se excluyen del ámbito de la presente Ley los acuerdos que celebre el Estado con otros  Estados, excepto los que se celebre con otros sujetos de derecho internacional.
b)  Se incluyen en el ámbito de la presente Ley los acuerdos que celebre el Estado con otros  Estados, excepto los que celebre con otros sujetos de derecho internacional.
c)  Se excluyen del ámbito de la presente Ley los acuerdos que celebre el Estado con otros  Estados o con otros sujetos de derecho internacional.
d)  Se incluyen en el ámbito de la presente Ley los acuerdos que celebre el Estado con otros  Estados o con otros sujetos de derecho internacional.

PREGUNTA Nº 773.- No se consideran Administraciones Públicas según el artículo 3 de la Ley 9/2017, de 8 de  noviembre, de Contratos del Sector Público, por la que se transponen al ordenamiento  jurídico español las Directivas del Parlamento Europeo y del Consejo 2014/23/UE y  2014/24/UE, de 26 de febrero de 2014:
a)  La Administración General del Estado, las Administraciones de las Comunidades  Autónomas, las Ciudades Autónomas de Ceuta y Melilla y las Entidades que integran la  Administración Local.
b)  Las Diputaciones Forales y las Juntas Generales de los Territorios Históricos del País Vasco  en lo que respecta a su actividad de contratación.
c)  Las Entidades Gestoras y los Servicios Comunes de la Seguridad Social.
d)  Las Mutuas colaboradoras con la Seguridad Social.

PREGUNTA Nº 774.- La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, entró en vigor:
a)  El mismo día de su publicación.
b)  El 20 de noviembre de 2017.
c)  El 9 de febrero de 2018.
d)  El 9 de marzo de 2018.

PREGUNTA Nº 775.- Se considerarán a los efectos del artículo 16 de la Ley 9/2017, de 8 de noviembre, de  Contratos del Sector Público, por la que se transponen al ordenamiento jurídico español las  Directivas del Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de  febrero de 2014, contratos de suministro, los siguientes: (señale la incorrecta)  
a)  Aquellos en los que el empresario se obligue a entregar una pluralidad de bienes forma  sucesiva y por precio unitario sin que la cuantía total se defina con exactitud al tiempo de  celebrar el contrato, por estar subordinadas las entregas a las necesidades del adquirente.
b)  Los de fabricación, por lo que la cosa o cosas que hayan de ser entregadas por el  empresario deban ser elaboradas con arreglo a características peculiares fijadas  previamente por la entidad contratante.
c)  Los contratos de adquisición de programas de ordenador desarrollados a medida.
d)  Los que tengan por objeto la adquisición de energía primaria o energía transformada.      

PREGUNTA Nº 776.- Se entenderá que un contrato tiene carácter oneroso, según dispone el artículo 2 de la Ley  9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se transponen al  ordenamiento jurídico español las Directivas del Parlamento Europeo y del Consejo  2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, en los casos en que:
a)  El contratista obtenga algún tipo de beneficio económico de forma directa.
b)  El contratante obtenga algún tipo de beneficio económico, ya sea de forma directa o  indirecta.
c)  El contratista obtenga algún tipo de beneficio económico, ya sea de forma directa o  indirecta.
d)  El contratante obtenga algún tipo de beneficio económico de forma directa.

PREGUNTA Nº 777.- Según el artículo 3 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, y a los efectos  de la misma, tendrán la consideración de Administraciones Públicas las siguientes entidades:
a)  Las Mutuas colaboradoras con la Seguridad Social.
b)  Los partidos políticos, así como organizaciones sindicales, y las organizaciones  empresariales y asociaciones profesionales, cuando ejerzan potestades públicas.
c)  Los consorcios y otras entidades de Derecho Público, siempre que, pudiéndose considerar  poderes adjudicadores, no se financien mayoritariamente con ingresos de mercado.
d)  Las Entidades Públicas Empresariales a las que se refiere la Ley 40/2015, y cualesquiera  entidades de Derecho público con personalidad jurídica propia vinculadas a un sujeto que  pertenezca al sector público o dependientes del mismo.

PREGUNTA Nº 778.- Según el artículo 12 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los contratos  que define la norma son:
a)  Los contratos de obras, concesión de obras, concesión de servicios, suministro y servicios  que celebren las entidades pertenecientes al sector público.
b)  Los contratos de obras, concesión de servicios y suministro de servicios.
c)  Los contratos de concesión de obras, concesión de servicios, suministro y servicios que  celebren las entidades pertenecientes al sector público.
d)  Los contratos de concesión de obras, concesión de servicios, suministro y servicios que  celebren las entidades pertenecientes al sector público, y en algunos casos, en el privado.

PREGUNTA Nº 779.- El artículo 6 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la  que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y  del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, dispone que las  encomiendas de gestión reguladas en la legislación vigente en materia de régimen jurídico  del sector público:
a)  Quedan incluidas en el ámbito de la presente Ley.
b)  Quedan excluidas del ámbito de la presente Ley cuando se deleguen actividades a órganos  de la misma administración.
c)  Quedan excluidas del ámbito de la presente Ley.
d)  Quedan excluidas del ámbito de la presente Ley cuando se deleguen actividades a órganos  de distinta administración.    

PREGUNTA Nº 780.- A los efectos de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la  que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y  del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, se considera que forman  parte del sector público (señale la incorrecta)  :
a)  La Administración General del Estado.
b)  Las Administraciones de las Comunidades Autónomas y las Ciudades Autónomas de Ceuta y  Melilla.
c)  Las Entidades que integran la Administración Local.
d)  La Administración del Peñón de Gibraltar.

PREGUNTA Nº 781.- La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, en su artículo 1 establece que  en toda contratación pública se incorporarán de manera transversal y preceptiva:
a)  Criterios sociales y medioambientales siempre que guarde relación con el objeto del  contrato.
b)  Criterios sociales y de calidad técnica siempre que guarden relación con el objeto del  contrato.
c)  Criterios tecnológicos y medioambientales siempre que guarden relación con el objeto del  contrato.
d)  Criterios de calidad técnica y medioambientales siempre que guarden relación con el objeto  del contrato.

PREGUNTA Nº 782.- Según el artículo 2 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, son contratos  del sector público:
a)  Los contratos públicos, que celebren las Universidades privadas, en el ámbito de su  actividad.
b)  Los contratos en los que el contratista obtenga algún tipo de beneficio económico, ya sea  de forma directa o indirecta.
c)  Los contratos onerosos, cualquiera que sea su naturaleza jurídica.
d)  Los contratos gratuitos, cualquiera que sea su naturaleza jurídica.

PREGUNTA Nº 783.- Es objeto de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que  se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, la regulación del régimen  jurídico aplicable a:
a)  Los efectos, cumplimiento y extinción de los contratos administrativos, en atención a los  fines institucionales de carácter público que a través de los mismos se tratan de realizar.
b)  Los efectos y cumplimiento de los contratos administrativos, en atención a los fines  institucionales de carácter público que a través de los mismos se tratan de realizar.
c)  Los efectos y cumplimiento de los contratos administrativos, en atención a los fines  institucionales de carácter público o privado que a través de los mismos se tratan de  realizar.
d)  Los efectos, cumplimiento y extinción de los contratos administrativos, en atención a los  fines institucionales de carácter público o privado que a través de los mismos se tratan de  realizar.  

PREGUNTA Nº 784.- La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, dispone en su artículo 4 que  las relaciones jurídicas, negocios y contratos excluidos del ámbito de la presente Ley:
a)  Se regirán únicamente por sus normas especiales.
b)  Se regirán por sus normas especiales, aplicándose los principios de esta Ley para resolver  las dudas y lagunas que pudieran presentarse.
c)  Se regirán por la Ley de Contratos del Sector Público, aplicándose los principios de sus  propias normas para resolver las dudas y lagunas que pudieran presentarse.
d)  Se regirán por sus normas especiales y las disposiciones de desarrollo que se establezcan.

PREGUNTA Nº 785.- Quedan excluidos del ámbito de aplicación de la Ley de Contratos del Sector Público, los  convenios cuyo contenido no esté comprendido en el de los contratos regulados en esta Ley  o en normas administrativas especiales celebrados entre sí por: (señale la incorrecta)  
a)  La Administración General del Estado.
b)  Las Comunidades autónomas y las Ciudades Autónomas de Ceuta y Melilla.
c)  Las Entidades Gestoras y los Servicios Comunes de la Seguridad Social.
d)  Las entidades sin personalidad jurídica privada.

PREGUNTA Nº 786.- Según se desprende del artículo 11 ¿Cuál de los siguientes tipos de contratos están  excluidos del ámbito de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014?
a)  Contrato de concesión de obras.
b)  Contrato relativo a servicios de arbitraje y conciliación.
c)  Contrato de servicios.
d)  Contrato de suministros.

PREGUNTA Nº 787.- La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, en su artículo 1 establece que  tiene por objeto regular la contratación del sector público, a fin de garantizar que la misma  se ajusta a los principios de:
a)  Publicidad, transparencia, eficacia y eficiencia en la contratación pública.
b)  Eficacia y eficiencia en la contratación.
c)  No discriminación e igualdad de trato entre los licitadores y coordinación entre las  Administraciones Públicas.
d)  Libertad de acceso a las licitaciones, publicidad y transparencia de los procedimientos, y no  discriminación e igualdad de trato entre los licitadores.    

PREGUNTA Nº 788.- Según el artículo 1.3 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, se facilitará el  acceso a la contratación pública de:
a)  Las pequeñas empresas.
b)  Las pequeñas y medianas empresas.
c)  Las medianas empresas.
d)  Las pequeñas y medianas empresas y empresas de economía social.

PREGUNTA Nº 789.- Según el Preámbulo de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  la misma incorpora al ordenamiento jurídico español:
a)  La Directiva 2014/23/UE, de 26 de febrero de 2014, relativa a la adjudicación de contratos  de concesión.
b)  La Directiva 2014/24/UE, de 26 de febrero de 2014, sobre contratación púbica.
c)  La Directiva 2014/25/UE, de 26 de febrero de 2014.
d)  La Directiva 2014/23/UE, de 26 de febrero de 2014, relativa a la adjudicación de contratos  de concesión y la Directiva 2014/24/UE, de 26 de febrero de 2014, sobre contratación  púbica.

PREGUNTA Nº 790.- Quedan excluidos del ámbito de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector  Público, por la que se transponen al ordenamiento jurídico español las Directivas del  Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, los  convenios incluidos en el ámbito del artículo 346 del Tratado de Funcionamiento de la Unión  Europea que se concluyan en el sector:
a)  De la defensa y la seguridad.
b)  De la investigación y la divulgación.
c)  Audiovisual.
d)  Del medio ambiente.

PREGUNTA Nº 791.- El artículo 3.3 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la  que se transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y  del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, se considerarán poderes  adjudicadores, a efectos de esta Ley, una serie de entidades, en las que no se entiende  incluida:
a)  Las Administraciones Públicas.
b)  Las fundaciones públicas.
c)  Las Mutuas colaboradoras con la Seguridad Social.
d)  Las asociaciones que se constituyan por fundaciones privadas.    

PREGUNTA Nº 792.- Estarán excluidos del ámbito de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector  Público, por la que se transponen al ordenamiento jurídico español las Directivas del  Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014,  según dispone el artículo 6, los convenios que celebren las entidades del sector público con  personas físicas o jurídicas sujetas al:
a)  Derecho público, siempre que su contenido esté comprendido en el de los contratos  regulados en esta Ley o en normas administrativas especiales
b)  Derecho privado, siempre que su contenido no esté comprendido en el de los contratos  regulados en esta Ley o en normas administrativas especiales.
c)  Derecho público, siempre que su contenido no esté comprendido en el de los contratos  regulados en esta Ley o en normas administrativas especiales.
d)  Derecho privado, siempre que su contenido esté comprendido en el de los contratos  regulados en esta Ley o en normas administrativas especiales.

PREGUNTA Nº 793.- Están incluidos en el ámbito de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector  Público, por la que se transponen al ordenamiento jurídico español las Directivas del  Parlamento Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014:
a)  La relación de servicio de los funcionarios públicos y los contratos regulados en la  legislación laboral.
b)  Los que tengan por objeto la adquisición, el desarrollo, la producción o la coproducción de  programas destinados a servicios de comunicación audiovisual o servicios de comunicación  radiofónica, que sean adjudicados por proveedores de dichos servicios.
c)  Las relaciones jurídicas consistentes en la prestación de un servicio público cuya utilización  por los usuarios requiera el abono de una tarifa, tasa o precio público de aplicación general.
d)  Los contratos relativos a servicios de arbitraje y conciliación.

PREGUNTA Nº 794.- La Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, por la que se  transponen al ordenamiento jurídico español las Directivas del Parlamento Europeo y del  Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, ¿cómo se estructura su  articulado?
a)  Una Exposición de Motivos, un Título Preliminar y cuatro Títulos.
b)  Un Preámbulo, un Título Preliminar y cuatro Libros.
c)  Una Exposición de Motivos, un Título Primero y cuatro Libros.
d)  Un Preámbulo, un Título Introductorio y cinco Libros.

PREGUNTA Nº 795.- Dispone el artículo 1 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público,  por la que se transponen al ordenamiento jurídico español las Directivas del Parlamento  Europeo y del Consejo 2014/23/UE y 2014/24/UE, de 26 de febrero de 2014, que en toda  contratación pública se incorporarán de manera transversal y preceptiva:
a)  Criterios sociales y medioambientales aunque no guarde relación con el objeto del  contrato.
b)  Criterios éticos y de transparencia siempre que guarde relación con el objeto del contrato.
c)  Criterios éticos y de transparencia aunque no guarde relación con el objeto del contrato.
d)  Criterios sociales y medioambientales siempre que guarde relación con el objeto del  contrato.        

PREGUNTA Nº 796.- ¿Cuál es el objeto de la Ley 38/2003, de 17 de noviembre, General de Subvenciones?
a)  La regulación del régimen jurídico general de las subvenciones otorgadas por las  Administraciones Públicas.
b)  La regulación del régimen jurídico general de las subvenciones otorgadas por Órganos y  Autoridades Públicas en l ámbito de sus competencias.
c)  La regulación del régimen jurídico general de las subvenciones otorgadas por las  Administraciones Públicas en el ámbito de sus competencias.
d)  La regulación del régimen jurídico general de las subvenciones otorgadas por las  Administraciones que forman parte del Sector Publico.

PREGUNTA Nº 797.- ¿Cuál es el órgano responsable de la administración y custodia de la Base de Datos  Nacional de Subvenciones, según dispone la Ley 38/2003, de 17 de noviembre, General de  Subvenciones?
a)  El Consejo Económico y Social.
b)  El Consejo de Estado.
c)  La Intervención General de la Administración del Estado.
d)  El Tribunal de Cuentas.

PREGUNTA Nº 798.- ¿Qué se entiende por Administraciones públicas a los efectos de la Ley 38/2003, de 17 de  noviembre, General de Subvenciones, según el artículo 3?:
a)  La Administración General del Estado.
b)  La Administración General del Estado y sus Organismos autónomos.
c)  La Administración General del Estado y de las Comunidades Autónomas.
d)  La Administración General del Estado, las entidades que integran la Administración Local y  la Administración de las Comunidades Autónomas.

PREGUNTA Nº 799.- Respecto al concepto de subvención, ¿qué se entiende según lo dispuesto en el artículo 2  de la Ley 38/2003, de 17 de noviembre, General de Subvenciones?
a)  Toda disposición dineraria.
b)  Toda disposición dineraria realizada por cualquiera de los sujetos que formen parte del  Sector Público.
c)  Toda disposición dineraria realizada por cualesquiera de los sujetos contemplados en el  artículo 3 de esta ley, a favor de personas públicas o privadas y que cumpla una serie de  requisitos.
d)  Toda disposición dineraria realizada por cualesquiera de los sujetos que formen parte del  Sector Público, a favor de personas públicas o privadas y que cumpla una serie de  requisitos.    

PREGUNTA Nº 800.- Según dispone el artículo 11 de la Ley 38/2003, de 17 de noviembre, General de  Subvenciones, respecto al concepto de beneficiario, señale la respuesta correcta:
a)  Podrán acceder a la condición de beneficiario las agrupaciones de personas físicas o  jurídicas, públicas o privadas en cualquier caso.
b)  Podrán acceder a la condición de beneficiario las agrupaciones de personas físicas o  jurídicas, públicas o privadas cuando se prevea expresamente en las bases reguladoras.
c)  Podrán acceder a la condición de beneficiario las comunidades de bienes o cualquier otro  tipo de unidad económica o patrimonio separado, con personalidad jurídica, que puedan  llevar a cabo los proyectos, actividades o comportamientos se encuentren en la situación  que motiva la concesión de la subvención.
d)  Podrán acceder a la condición de beneficiario las comunidades de bienes o cualquier otro  tipo de unidad económica o patrimonio separado que, aun careciendo de personalidad  jurídica, que puedan llevar a cabo los proyectos, actividades o comportamientos o se  encuentren en la situación que motiva la concesión de la subvención.

PREGUNTA Nº 801.- En el artículo 13 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, se  recogen los requisitos para obtener la condición de beneficiario o entidad colaboradora, en  el que se establecen una serie de limitaciones, de acuerdo con ello,  señale la respuesta  incorrecta:
a)  Las prohibiciones relativas estar la persona física de la entidad en algunos de los supuestos  de incompatibilidades, haber solicitado la declaración de concurso voluntario, o no hallarse  al corriente en el cumplimiento de las obligaciones tributarias, entre otras limitaciones, se  apreciarán de forma automática y subsistirán mientras concurran las circunstancias que, en  cada caso, las determinen.
b)  Las prohibiciones relativas a haber sido sancionado mediante resolución firme con la  pérdida de la posibilidad de obtener subvenciones y haber sido condenadas mediante  sentencia firme a la pena de pérdida de posibilidad de obtener subvenciones o ayudas  públicas o por delitos de prevaricación, cohecho, malversación de caudales públicos, tráfico  de influencias, fraudes y exacciones ilegales o delitos urbanísticos, se apreciarán de forma  automática. En todo caso, el alcance de la prohibición sólo podrá fijarse por lo que  determine la sentencia o resolución firme.
c)  La justificación por parte de las personas o entidades de no estar incursos en las  prohibiciones para obtener la condición de beneficiario o entidad colaboradora, podrá  realizarse mediante testimonio judicial, certificados telemáticos o transmisiones de datos.
d)  Las prohibiciones de obtener subvenciones afectarán también a aquellas empresas de las  que, por razón de las personas que las rigen o de otras circunstancias, pueda presumirse  que son continuación o que derivan, por transformación, fusión o sucesión, de otras  empresas en las que hubiesen concurrido aquéllas.

PREGUNTA Nº 802.- ¿Cuáles de las siguientes son obligaciones de los beneficiarios, de acuerdo con lo regulado  en el artículo 14 de Ley 38/2003, de 17 de noviembre, General de Subvenciones?
a)  Someterse a cualquier actuación de investigación.
b)  Acreditar en el momento de dictarse la propuesta de resolución de concesión hallarse al  corriente en el cumplimiento de sus obligaciones tributarias.
c)  Entregar los documentos justificativos de la aplicación de los fondos recibidos siempre que  le sean requeridos.
d)  Comunicar al órgano concedente o la entidad colaboradora la obtención de otras  subvenciones, ayudas, ingresos o recursos que financien las actividades subvencionadas.  

PREGUNTA Nº 803.- No tienen carácter de subvenciones, según se recoge en el Artículo 2.4 de la Ley 38/2003,  de 17 de noviembre, General de Subvenciones, los siguientes supuestos:
a)  El crédito oficial sólo en el supuesto en que la Administración Pública subvencione al  prestatario la totalidad o parte de los intereses u otras contraprestaciones de la operación  de crédito.
b)  Los beneficios fiscales y beneficios en la cotización a la Seguridad Social.
c)  Las prestaciones creadas por el Fondo de Garantía Salarial.
d)  Quedarán excluidas, cuando no resulten asimilables al régimen de prestaciones no  contributivas del Sistema de Seguridad Social, las prestaciones asistenciales y los subsidios  económicos a favor de españoles no residentes en España.

PREGUNTA Nº 804.- ¿Cuál es el plazo de vigencia de los convenios de colaboración con las Entidades  colaboradoras según lo dispuesto en el artículo 16 de la Ley 38/2003, de 17 de noviembre,  General de Subvenciones?
a)  No podrá tener un plazo de vigencia superior a cuatro años, si bien podrá preverse en el  mismo su modificación y su prórroga por mutuo acuerdo de las partes antes de la  finalización de aquél, sin que la duración total de las prórrogas pueda ser superior a la  vigencia del período inicial y sin que en conjunto la duración total del convenio pueda  exceder 6 años.
b)  No podrá tener un plazo de vigencia superior a tres años, si bien podrá preverse en el  mismo su modificación y su prórroga por mutuo acuerdo de las partes antes de la  finalización de aquél, sin que la duración total de las prórrogas pueda ser superior a la  vigencia del período inicial y sin que en conjunto la duración total del convenio pueda  exceder cuatro años.
c)  No podrá tener un plazo de vigencia superior a cuatro años, sin que pueda llevarse a cabo  su prórroga, aún por mutuo acuerdo de las partes.
d)  No podrá tener un plazo de vigencia superior a tres años, sin que pueda llevarse a cabo su  prórroga, aún por mutuo acuerdo de las partes.

PREGUNTA Nº 805.- ¿Cuál es el régimen jurídico de las subvenciones financiadas con cargos a fondo de la Unión  Europea? (Artículo 6 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones)
a)  Se regirán por las normas comunitarias aplicables a cada caso y por las normas nacionales  de desarrollo o transposición de aquéllas.
b)  Se regirán por las normas comunitarias aplicables a cada caso, por las normas nacionales de  desarrollo o transposición de aquéllas y por la presente Ley.
c)  Se regirán por las normas comunitarias aplicables a cada caso, por las normas nacionales de  desarrollo o transposición de aquéllas, y respecto a los procedimientos de concesión y de  control de las subvenciones reguladas en esta ley, tendrán carácter obligatorio.
d)  Se regirán por las normas comunitarias aplicables a cada caso, por las normas nacionales de  desarrollo o transposición de aquéllas, por la presente Ley y sus disposiciones de desarrollo.    

PREGUNTA Nº 806.- ¿Qué extremos concretará, como mínimo, la norma reguladora de las bases de concesión  de las subvenciones, según el artículo 17 de la Ley 38/2003, General de Subvenciones, de 17  de noviembre?:
a)  Los criterios subjetivos de otorgamiento de la subvención y, en su caso, ponderación de los  mismos.
b)  La cuantía global de la subvención.
c)  Las prohibiciones de alteración de las condiciones de la subvención.
d)  La posibilidad de efectuar pagos anticipados y abonos a cuenta, así como el régimen de  garantías que, en su caso, deberán aportar los beneficiarios.

PREGUNTA Nº 807.- ¿Cómo se regularán las subvenciones que se otorguen por consorcios, mancomunidades u  otras personificaciones públicas creadas por varias Administraciones públicas u organismos o  entes dependientes de ellas y las subvenciones que deriven de convenios formalizados por  éstas, según el artículo 5 de la Ley 38/2003, General de Subvenciones, de 17 de noviembre?
a)  Se regularán, en todo caso, por lo establecido en el instrumento jurídico de creación o en el  propio convenio.
b)  Se regularán de acuerdo con lo establecido en el instrumento jurídico de creación o en el  propio convenio que, en todo caso, deberán ajustarse a las disposiciones contenidas en  esta ley.
c)  Se regularán de acuerdo con lo establecido en el instrumento jurídico de creación o en el  propio convenio y por las disposiciones contenidas en esta Ley
d)  Se regularán de acuerdo con lo establecido en el instrumento jurídico de creación o en el  propio convenio, por las disposiciones contenidas en esta Ley y restantes normas de  derecho administrativo.

PREGUNTA Nº 808.- Respecto a la publicidad de las subvenciones (artículo 18 de la Ley 38/2003, de 17 de  noviembre, General de Subvenciones), señale la respuesta correcta:
a)  Los beneficiarios no estarán obligados a dar publicidad del carácter de la financiación de  programas, actividades, inversiones o actuaciones objeto de la subvención.
b)  Existirá una Base de Datos Nacional y Autonómica de Subvenciones.
c)  Las administraciones concedentes deberán remitir a as Base de Datos Nacional de  Subvenciones información sobre las convocatorias y las resoluciones de concesión.
d)  Las administraciones concedentes deberán remitir a as Base de Datos Nacional  y  Autonómicas de Subvenciones información sobre las convocatorias y las resoluciones de  concesión.

PREGUNTA Nº 809.- Respecto a los requisitos para el otorgamiento de las subvenciones a que se refiere el  artículo 9 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, señale la  respuesta correcta:
a)  Las bases reguladoras de cada tipo de subvención se publicarán en el Boletín Oficial del  Estado o en el diario oficial correspondiente.
b)  Las bases reguladoras de cada tipo de subvención se publicarán en el Boletín Oficial del  Estado y, en su caso,  en el de la Comunidad Autónoma correspondiente.
c)  Las bases reguladoras de cada tipo de subvención se publicarán en el Boletín Oficial del  Estado, en el diario oficial correspondiente, y en los tablones de anuncios de los  Organismos afectados por las mismas.
d)  Únicamente es necesaria se publicación en el Boletín Oficial del Estado.    

PREGUNTA Nº 810.- ¿Qué requisitos se tienen que cumplir para que se entienda que estamos ante una  subvención, según lo dispuesto en el artículo 2 de la Ley 38/2003, de 17 de noviembre,  General de Subvenciones?
a)  Que la entrega se realice sin contraprestación directa de los beneficiarios, que esté sujeta al  cumplimiento de un determinado objetivo y que el proyecto, la acción, conducta o  situación financiada tenga por objeto el fomento de una actividad de utilidad pública o  interés social o de promoción de una finalidad pública.
b)  Que la entrega se realice sin contraprestación directa de los beneficiarios, sin necesidad de  establecer ninguna condición a cambio.
c)  Que la actividad financiada tenga por objeto el desarrollo de una actividad de carácter  social.
d)  Que el beneficiario debe cumplir las obligaciones establecidas, salvo que las adquiera la  propia Administración.

PREGUNTA Nº 811.- Respecto a la financiación de las actividades subvencionadas, tal y como establece el  artículo 19 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, señale la  opción correcta:
a)  El órgano concedente podrá exigir un importe de financiación propia para cubrir la  actividad subvencionada.
b)  La normativa reguladora de la subvención determinará el régimen de compatibilidad o  incompatibilidad para la percepción de otras subvenciones.
c)  El importe de las subvenciones, salvo excepciones, podrá tener una cuantía que supere el  coste de la actividad subvencionada.
d)  Dará lugar a la suspensión de la concesión, toda alteración de las condiciones tenidas en  cuenta para la concesión.

PREGUNTA Nº 812.- Cuando la Administración General del Estado, sus organismos públicos o las Comunidades  Autónomas actúen como entidades colaboradoras, ¿a quién corresponderán las actuaciones  de comprobación y control reguladas en el artículo 15.1.
d)  de la Ley General de  Subvenciones?
a)  Al Tribunal de Cuentas.
b)  Sólo tendrán competencia para ello, los correspondientes órganos dependientes de las  mismas.
c)  Los órganos de control comunitarios y el Tribunal de Cuentas.
d)  Se llevará a cabo por los correspondientes órganos dependientes de ellas, sin perjuicio de  las competencias de los órganos de control comunitarios y de las del tribunal de Cuentas.

PREGUNTA Nº 813.- De las siguientes, ¿cuál no forma parte del contenido mínimo del convenio de colaboración  con Entidades Colaboradoras, según lo dispuesto en el artículo 16 de la Ley 38/2003, de 17  de noviembre, General de Subvenciones?
a)  Compensación económica que en su caso se fije a favor de la entidad concedente.
b)  Requisitos que debe cumplir y hacer cumplir la entidad colaboradora en las diferentes fases  del procedimiento de gestión de las subvenciones.
c)  Plazo de duración del convenio de colaboración.
d)  Definición del objeto de la colaboración y de la entidad colaboradora.    

PREGUNTA Nº 814.- Son obligaciones de las entidades colaboradoras reguladas en el artículo 15 de la Ley  38/2003, de 17 de noviembre, General de Subvenciones: (señale la respuesta incorrecta:)
a)  Entregar a los beneficiarios los fondos recibidos de acuerdo con los criterios establecidos en  las bases reguladoras de la subvención y en el convenio suscrito con la entidad concedente.
b)  Comprobar, en todo caso, el cumplimiento de las condiciones determinantes para su  otorgamiento.
c)  Justificar la entrega de los fondos percibidos ante el órgano concedente de la subvención.
d)  Someterse a las actuaciones de comprobación que respecto de la gestión de dichos fondos  pueda efectuar el órgano concedente.

PREGUNTA Nº 815.- Según dispone la Ley 38/2003, de 17 de noviembre, General de Subvenciones, operará  como sistema nacional de publicidad de subvenciones:
a)  La Base de Datos Nacional de Subvenciones.
b)  No se establece nada al respecto en la Ley.
c)  El Boletín General de Subvenciones.
d)  El Portal de Subvenciones del Estado.

PREGUNTA Nº 816.- Según el artículo 3.2 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones,   ¿Qué subvenciones deberán asimismo ajustarse a la ley?
a)  Las otorgadas por los organismos y demás entidades de derecho público con personalidad  jurídica propia vinculadas o dependientes de cualquiera de las Administraciones Públicas en  la medida en que las subvenciones que otorguen sean consecuencia del ejercicio de  potestades administrativas.
b)  Las otorgadas por los organismos y demás entidades de derecho público con o sin   personalidad jurídica propia vinculadas o dependientes de cualquiera de las  Administraciones Públicas en la medida en que las subvenciones que otorguen sean  consecuencia del ejercicio de potestades administrativas.
c)  Las otorgadas por entidades sin  personalidad jurídica propia vinculadas o dependientes de  cualquiera de las Administraciones Públicas en la medida en que las subvenciones que  otorguen sean consecuencia del ejercicio de potestades administrativas.
d)  Únicamente las otorgadas por los organismos  dependientes de cualquiera de las  Administraciones Públicas en la medida en que las subvenciones que otorguen sean  consecuencia del ejercicio de potestades administrativas.

PREGUNTA Nº 817.- Finalidades de la Base de Datos Nacional de subvenciones, según el artículo 20 de la Ley  38/2003, de 17 de noviembre, General de Subvenciones:
a)  Promover la transparencia, servir como instrumento para la planificación de las políticas  públicas, mejorar la gestión y colaborar en la lucha contra el fraude de subvenciones y  ayudas públicas.
b)  Dar transparencia a las subvenciones concedidas a nivel estatal.
c)  Su función principal es dar publicidad.
d)  su función principal es servir como instrumento para la lucha contra el fraude de  subvenciones y ayudas públicas      

PREGUNTA Nº 818.- ¿Qué no está comprendida en el ámbito de aplicación de la ley 38/2003, de 17 de  noviembre, General de Subvenciones, según dispone el artículo 2?:
a)  Las aportaciones dinerarias que se realicen entre los distintos agentes de una  Administración cuyos presupuestos se integren en los Presupuestos Generales de la  Administración a la que pertenezcan, sólo si se destinan a financiar globalmente su  actividad.
b)  Las aportaciones dinerarias entre diferentes Administraciones Públicas, para financiar  globalmente la actividad de la Administración a la que vayan destinadas.
c)  Las aportaciones dinerarias que se realicen entre los distintos agentes de una  Administración cuyos presupuestos se integren en los Presupuestos Generales de la  Administración a la que pertenezcan, sólo si se destinan a financiar la realización de  actuaciones concretas a desarrollar en el marco de las funciones que tenga atribuidas.
d)  Las aportaciones dinerarias que se realicen entre los distintos agentes de una  Administración cuyos presupuestos se integren en los Presupuestos Generales de la  Administración a la que pertenezcan, sólo si se destinan a financiar la realización de  actuaciones concretas a desarrollar en el marco de las funciones que tenga atribuidas,  siempre que  resulten de una convocatoria pública.

PREGUNTA Nº 819.- ¿Quién es el órgano responsable de la administración y custodia de la Base de Datos  Nacional de subvenciones?
a)  Quién se determine en cada base reguladora de cada subvención.
b)  El Tribunal de Cuentas.
c)  El Tribunal de cuentas y la Intervención General de la Administración del Estado.
d)  La Intervención General de la Administración del Estado.

PREGUNTA Nº 820.- ¿Cuál de los siguientes supuestos se consideran subvenciones, de acuerdo con la Ley  38/2003, de 17 de noviembre, General de Subvenciones?
a)  Los beneficios fiscales y de cotización a la Seguridad Social.
b)  Las prestaciones reconocidas por el Fondo de Garantía Salarial.
c)  El crédito oficial, en los supuestos en que la Administración pública subvencione al  prestatario parte de los intereses de la operación de préstamo.
d)  Las prestaciones como consecuencia de actos de terrorismo.

PREGUNTA Nº 821.- ¿Cuál es el órgano competente para autorizar la concesión de subvenciones de cuantía  superior a 12 millones de euros?
a)  Será necesario acuerdo del Consejo de Ministros o, en el caso de que así lo establezca la  normativa reguladora de la subvención, de la Comisión Delegada del Gobierno para  Asuntos Económicos.
b)  La Comisión Delegada del Gobierno para Asuntos Económicos.
c)  El Ministro de Hacienda y Administraciones Públicas.
d)  El Ministro de Hacienda y Administraciones Públicas, junto con la Comisión Delegada del  Gobierno para Asuntos Económicos.    

PREGUNTA Nº 822.- ¿Qué establece el artículo 21 de la Ley 38/2003, de 17 de noviembre, General de  Subvenciones, respecto al Régimen de garantías?
a)  El Régimen de las garantías y medios de constitución que tengan que constituirse se  establecerá según lo desarrollado en esta Ley y en su normativa de desarrollo.
b)  El Régimen de garantías, medios de constitución, depósito y cancelación que tengan que  constituir los beneficiarios o las entidades colaboradoras se establecerá  reglamentariamente.
c)  Sólo lo referente a los medios de constitución, depósito y cancelación que tengan que  constituir los beneficiarios o las entidades colaboradoras se establecerán  reglamentariamente.
d)  El Régimen de garantías, medios de constitución, depósito y cancelación que tengan que  constituir los beneficiarios o las entidades colaboradoras se establecerá conforme a lo  dispuesto en el instrumento jurídico de creación.

PREGUNTA Nº 823.- ¿Quiénes tendrán la consideración de beneficiarios según lo dispuesto en el artículo 11 de  la Ley 38/2003, de 17 de noviembre, General de Subvenciones?
a)  La persona que haya de realizar la actividad que fundamentó su otorgamiento o que se  encuentre en la situación que legitima su concesión.
b)  Siempre será una persona jurídica, siendo uno de sus miembros el responsable de la  misma.
c)  Podrán serlo cualquier tipo de unidad económica o patrimonio separado con personalidad  jurídica.
d)  Sólo personas físicas y jurídicas.

PREGUNTA Nº 824.- ¿Quiénes serán responsables de suministrar la información de forma exacta, completa, en  plazo y respetando el modo de envío establecido, según dispone el artículo 20 de la Ley  38/2003, de 17 de noviembre, General de Subvenciones?
a)  En el sector público estatal, los titulares de los órganos, organismos y demás entidades que  concedan subvencione s y ayudas.
b)  En las Comunidades autónomas, la Intervención General del Estado.
c)  En las Entidades Locales, los órganos competentes en materia económica-financiera.
d)  En las Comunidades autónomas, la Intervención General del Estado y de la propia  Comunidad Autónoma u órgano que designe la propia Comunidad autónoma.

PREGUNTA Nº 825.- Dispone el artículo 2 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, que  no están comprendidas en el ámbito de aplicación:
a)  Las aportaciones dinerarias en concepto de cuotas.
b)  Las aportaciones dinerarias en concepto de cuotas, tanto ordinarias como extraordinarias,  que realicen las entidades que integran la Administración Local a favor de las asociaciones a  que se refiere la disposición adicional quinta de la LBRL.
c)  Las aportaciones dinerarias en concepto de cuotas sólo de carácter extraordinarias, que  realicen las entidades que integran la Administración Local a favor de las asociaciones a que  se refiere la disposición adicional quinta de la LBRL.
d)  Las aportaciones dinerarias en concepto de cuotas sólo de carácter ordinarias que realicen  las entidades que integran la Administración Local a favor de las asociaciones a que se  refiere la disposición adicional quinta de la LBRL.    

PREGUNTA Nº 826.- ¿Qué carácter tiene la información incluida en la Base de Datos Nacional de Subvenciones?  (artículo 20 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones)
a)  En todo caso, carácter reservado.
b)  Carácter público.
c)  Carácter reservado, sin que pueda ser cedida o comunicada a terceros, salvo determinadas  excepciones.
d)  Carácter reservado y exclusivo.

PREGUNTA Nº 827.- ¿Qué requisitos se exigen a los beneficiarios cuando se trate de agrupaciones de personas  físicas o jurídicas, públicas o privadas sin personalidad, según establece el artículo 11.3 de la  Ley 38/2003, de 17 de noviembre, General de Subvenciones?
a)  Deberán hacer constar en la solicitud los compromisos de ejecución asumidos y el importe  de la subvención.
b)  Deberán hacer constar expresamente, tanto en la solicitud como en la resolución de  concesión, los compromisos de ejecución asumidos por cada miembro de la agrupación, así  como el importe de subvención a aplicar por cada uno de ellos, que tendrán igualmente la  consideración de beneficiarios.
c)  No es necesario nombrar a un representante o apoderado único, cuando el importe de la  subvención no alcance los límites previstos en esta Ley.
d)  Uno de los miembros de dicha agrupación, tendrá que ser representante o apoderado  único, sin adquirir la condición de beneficiario.

PREGUNTA Nº 828.- ¿En qué supuestos puede ser cedida o comunicada a terceros la información incluida en la  Base de Datos Nacional de Subvenciones según lo regulado en  la Ley 38/2003, de 17 de  noviembre, General de Subvenciones? (señale la respuesta incorrecta)  
a)  Cuando tenga por objeto la colaboración con las comisiones parlamentarias de  investigación en el marco legalmente establecido.
b)  Cuando tenga por objeto la colaboración con las Administraciones tributaria y de la  Seguridad social en el ámbito de sus competencias.
c)  Cuando tenga por objeto la cesión de datos a la Unión Europea en el marco de las políticas  comunitarias.
d)  Cuando tenga por objeto la colaboración con la Comisión de Vigilancia de Actividades de  Financiación de Terrorismo.

PREGUNTA Nº 829.- El artículo 9.4 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, dispone  que adicionalmente, el otorgamiento de una subvención debe cumplir los siguientes  requisitos: (señale la respuesta incorrecta)  
a)  La aprobación del gasto por las partes intervinientes.
b)  La competencia del órgano administrativo concedente.
c)  La tramitación del procedimiento de concesión de acuerdo con las normas que resulten de  aplicación.
d)  La fiscalización previa de los actos administrativos de contenido económico, en los términos  previstos en las leyes.          

PREGUNTA Nº 830.- En el caso de la cesión de datos prevista en el apartado 5 del artículo 20 de la Ley 38/2003,  de 17 de noviembre, General de Subvenciones, se instrumentará la interrelación de la Base  de Datos Nacional de Subvenciones con otras bases de datos para a mejora en la lucha  contra el fraude fiscal, de Seguridad Social o de subvenciones y Ayudas de Estado u otras  ayudas. ¿qué deberá asegurarse en estos casos respecto de los datos cedidos?
a)  El acceso, integridad, disponibilidad, autenticidad, confidencialidad, trazabilidad y  conservación de los datos.
b)  El acceso, integridad, disponibilidad, autenticidad, confidencialidad y conservación de los  datos.
c)  El acceso, disponibilidad, autenticidad, confidencialidad, trazabilidad y conservación de los  datos.
d)  El acceso, integridad, disponibilidad, autenticidad, confidencialidad y trazabilidad de los  datos.

PREGUNTA Nº 831.- ¿Cómo será considerada la infracción del deber de secreto por parte de las autoridades y  del personal al servicio de las Administraciones Públicas que tengan conocimiento de los  datos contenidos en la Base de Datos? (artículo 20 de la Ley 38/2003, de 17 de noviembre,  General de Subvenciones)
a)  Se considerará falta disciplinaria grave.
b)  Con independencia de las responsabilidades penales o civiles, la infracción se considerará  siempre falta disciplinaria muy grave.
c)  Se podrá considerar falta disciplinaria grave o muy grave, según la gravedad de los hechos.
d)  Se considerará falta disciplinaria leve o grave, con independencia de las responsabilidades  penales o civiles que puedan corresponder.

PREGUNTA Nº 832.- Señale la respuesta correcta, según lo regulado en el artículo 3 de la Ley 38/2003, de 17 de  noviembre, General de Subvenciones, relativo al ámbito de aplicación subjetivo:
a)  Esta Ley no será de aplicación a las aportaciones gratuitas en ningún caso.
b)  Sólo se aplicará esta Ley a las aportaciones gratuitas que no tengan relación directa con el  objeto de la actividad contenido en la norma de creación o en sus estatutos.
c)  En todo caso, las aportaciones gratuitas habrán de tener relación directa con el objeto de la  actividad contenido en la norma de creación o en sus estatutos.
d)  Serán de aplicación los principios de gestión a todas las entregas dinerarias sin  contraprestación.

PREGUNTA Nº 833.- Para garantizar el derecho de los ciudadanos a conocer todas las subvenciones convocadas  en cada momento y para contribuir a los principios de publicidad y transparencia, la  Intervención General de la Administración del Estado publicará en su página web los  siguientes contenidos: (Artículo 20 de la Ley 38/2003, de 17 de noviembre, General de  Subvenciones)
a)  Las convocatorias de subvenciones.
b)  Las subvenciones concedidas y no concedidas.
c)  Todas las sanciones impuestas por infracciones.
d)  Podrán ser publicadas las subvenciones concedidas cuando la publicación de los datos del  beneficiario pueda ser contraria a la salvaguarda del honor e intimidad personal, siempre  que impere el interés general.    

PREGUNTA Nº 834.- Señale el Régimen jurídico de las subvenciones:
a)  La Ley 38/2003, de 17 de noviembre, General de Subvenciones.
b)  La Ley 38/2003, de 17 de noviembre, General de Subvenciones, las restantes normas de  derecho administrativo, y de forma supletoria, las normas de derecho privado.
c)  La Ley 38/2003, de 17 de noviembre, General de Subvenciones, sus disposiciones de  desarrollo, las restantes normas de derecho administrativo, y, en su defecto, se aplicarán  las normas de derecho privado.
d)  La Ley 38/2003, de 17 de noviembre, General de Subvenciones y sus disposiciones de  desarrollo.

PREGUNTA Nº 835.- De acuerdo con el artículo 13.2 de la Ley 38/2003, de 17 de noviembre, General de  Subvenciones, salvo que por la naturaleza de la subvención se exceptúe por su normativa  reguladora, no podrán obtener a la condición de beneficiario o entidad colaboradora:
a)  Las personas o entidades que hayan sido sancionadas con multas administrativas.
b)  Las personas o entidades que hayan solicitado la declaración de concurso voluntario.
c)  Las personas o entidades que lleven 6 meses sin hallarse al corriente en el cumplimiento de  las obligaciones tributarias.
d)  Las personas o entidades que hayan sido condenadas mediante sentencia firme en los  últimos 4 años por  delitos de prevaricación, cohecho, malversación de caudales públicos,  tráfico de influencias, fraudes y exacciones ilegales o delitos urbanísticos.

PREGUNTA Nº 836.- El contenido de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, ¿resulta de  aplicación a los organismos y demás entidades de derecho público con personalidad jurídica  propia, vinculadas a las Administraciones Públicas?
a)  No, puesto que no forman parte del concepto de Administración Pública contenido en la  propia Ley.
b)  Serán únicamente de aplicación los principios de gestión y los de información.
c)  Se aplicarán cuando las subvenciones que otorguen sean consecuencia del ejercicio de  potestades administrativas.
d)  Se aplicarán, únicamente, a los organismos y demás entidades de Derecho Público  dependientes de la Administración General del Estado y de las Comunidades Autónomas.

PREGUNTA Nº 837.- No tienen carácter de subvenciones, según se recoge en el Artículo 2.4 de la Ley 38/2003,  de 17 de noviembre, General de Subvenciones, los siguientes supuestos: (señale la  incorrecta)  
a)  Las prestaciones contributivas y no contributivas del Sistema de la Seguridad Social.
b)  Las pensiones asistenciales por ancianidad a favor de los españoles no residentes en  España.
c)  En todo caso, las prestaciones asistenciales y los subsidios económicos a favor de españoles  no residentes en España.
d)  Las prestaciones a favor de los afectados por el síndrome tóxico y las ayudas sociales a las  personas con hemofilia u otras coagulopatías congénitas que hayan desarrollado la  hepatitis C.        

PREGUNTA Nº 838.- ¿Quién será Entidad colaboradora a los efectos de lo previsto en el artículo 12 de la Ley  38/2003, de 17 de noviembre, General de Subvenciones?
a)  Aquella que, actuando en nombre y por cuenta del órgano concedente a todos los efectos  relacionados con la subvención, entregue y distribuya los fondos públicos a los beneficiarios  cuando así s establezca en las bases reguladoras, o colabore en la gestión de la subvención  sin que se produzca la previa entrega y distribución de los fondos recibidos.
b)  Los organismos y demás entes públicos cuando así lo disponga su normativa y cumplan  ciertos requisitos de carácter financiero.
c)  Las comunidades autónomas y las corporaciones locales podrán actuar como colaboradoras  d las subvenciones concedidas por algún organismo dependiente o vinculado a las mismas.
d)  Aquellos que tengan la consideración de beneficiarios y así lo determine su propia  normativa y ejerzan las funciones de distribución de fondos propis.

PREGUNTA Nº 839.- Quedan excluidos del ámbito de aplicación de la ley, según regula el artículo 4 de la Ley  38/2003, de 17 de noviembre, General de Subvenciones: (señale la incorrecta)  
a)  Los premios que se otorguen con la previa solicitud del beneficiario.
b)  Las subvenciones previstas en la Ley Orgánica del  Régimen Electoral General.
c)  Las subvenciones reguladas en la Ley Orgánica de Financiación de los Partidos Políticos.
d)  Las subvenciones a los grupos parlamentarios de las Cámaras de las Cortes Generales y de  las Asambleas autonómicas y a los grupos políticos de las corporaciones locales.

PREGUNTA Nº 840.- Respecto a las facultades para conceder subvenciones a las que se refiere el artículo 10 de  la Ley 38/2003, de 17 de noviembre, General de Subvenciones, señale la respuesta correcta:
a)  Podrán ser objeto de desconcentración mediante real decreto acordado en Consejo de  Ministros.
b)  Podrán ser objeto de delegación, según disponga el órgano competente.
c)  En ningún caso podrán delegarse dichas facultades.
d)  Podrán ser objeto de desconcentración siempre que se determine mediante decreto del  Consejo de Ministros.

PREGUNTA Nº 841.- Según el artículo 10 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones,  ¿cuáles son los órganos competentes para conceder subvenciones?
a)  Los Ministros.
b)  El Consejo de Ministros.
c)  Los Ministros y Secretarios de Estado en la Administración General del Estado y los  presidentes o directores de los organismos y entidades públicas vinculadas o dependientes  de la Administración General del Estado.
d)  El Consejo de Ministros y la Comisión Delegada del Gobierno para Asuntos Económicos.    

PREGUNTA Nº 842.- El artículo 8 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones, establece  que con carácter previo al establecimiento de subvenciones, se deberán concretar en un plan  estratégico de subvenciones:
a)  Los objetivos y efectos que se pretenden.
b)  El plazo necesario para la consecución de los objetivos.
c)  Los costes y fuentes de financiación supeditándose en todo caso al cumplimiento de los  objetivos de estabilidad presupuestaria.
d)  Los objetivos y efectos que se pretenden en su aplicación, el plazo necesario para su  consecución, los costes previsibles y sus fuentes de financiación supeditándose en todo  caso al cumplimiento de los objetivos de estabilidad presupuestaria.

PREGUNTA Nº 843.- ¿Cuáles son los principios por los que se rigen la gestión de las subvenciones públicas?
a)  Publicidad, transparencia, concurrencia, objetividad, igualdad y no discriminación.
b)  Eficacia en la asignación y utilización de los recursos.
c)  Eficiencia en el cumplimiento de los objetivos fijados por la Administración concedente.
d)  Eficacia, jerarquía, descentralización, desconcentración y coordinación.

PREGUNTA Nº 844.- Señala el artículo 3.4 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones,  que será igualmente aplicable esta ley a las siguientes subvenciones:
a)  Las establecidas en materias cuya regulación plena les corresponda a las Comunidades  Autónomas y cuya gestión sea su competencia total.
b)  Las establecidas en materias cuya regulación plena o básica corresponda al Estado y cuya  gestión sea competencia total o parcial de otras Administraciones Públicas.
c)  Aquellas en cuya tramitación sólo intervengan órganos de la Administración General del  Estado o de las entidades de derecho público vinculadas o dependientes de aquélla.
d)  Aquellas en cuya tramitación sólo intervengan órganos de la Administración General de las  Comunidades Autónomas o de las entidades de derecho público vinculadas o dependientes  de aquéllas.       

RESPUESTAS CORRECTAS:

1 - A
2 - D
3 - C
4 - D
5 - B
6 - C
7 - B
8 - D
9 - A
10 - D
11 - D
12 - B
13 - A
14 - C
15 - C
16 - B
17 - C
18 - B
19 - B
20 - B
21 - A
22 - A
23 - D
24 - C
25 - D
26 - A
27 - C
28 - C
29 - D
30 - A
31 - C
32 - A
33 - D
34 - B
35 - B
36 - A
37 - C
38 - B
39 - D
40 - D
41 - B
42 - B
43 - A
44 - B
45 - A
46 - B
47 - C
48 - A
49 - D
50 - C
51 - D
52 - D
53 - C
54 - C
55 - B
56 - A
57 - C
58 - A
59 - B
60 - C
61 - A
62 - A
63 - C
64 - B
65 - B
66 - D
67 - D
68 - C
69 - C
70 - B
71 - B
72 - C
73 - B
74 - B
75 - C
76 - D
77 - B
78 - C
79 - D
80 - A
81 - C
82 - B
83 - B
84 - C
85 - A
86 - B
87 - C
88 - D
89 - C
90 - B
91 - B
92 - C
93 - B
94 - D
95 - C
96 - D
97 - A
98 - D
99 - D
100 - A
101 - C
102 - B
103 - C
104 - A
105 - A
106 - B
107 - A
108 - B
109 - D
110 - A
111 - D
112 - A
113 - D
114 - C
115 - D
116 - B
117 - C
118 - A
119 - C
120 - A
121 - B
122 - D
123 - A
124 - B
125 - C
126 - B
127 - B
128 - D
129 - A
130 - C
131 - C
132 - C
133 - A
134 - C
135 - A
136 - C
137 - C
138 - C
139 - A
140 - C
141 - C
142 - D
143 - D
144 - A
145 - D
146 - C
147 - B
148 - C
149 - D
150 - A
151 - C
152 - C
153 - B
154 - A
155 - D
156 - C
157 - A
158 - C
159 - C
160 - B
161 - D
162 - A
163 - B
164 - C
165 - A
166 - C
167 - D
168 - C
169 - D
170 - A
171 - D
172 - B
173 - D
174 - A
175 - C
176 - C
177 - C
178 - A
179 - D
180 - D
181 - A
182 - B
183 - A
184 - D
185 - A
186 - B
187 - A
188 - C
189 - B
190 - D
191 - D
192 - A
193 - C
194 - C
195 - D
196 - A
197 - B
198 - B
199 - B
200 - D
201 - C
202 - D
203 - A
204 - C
205 - D
206 - B
207 - D
208 - B
209 - A
210 - B
211 - A
212 - B
213 - A
214 - C
215 - A
216 - A
217 - B
218 - A
219 - D
220 - C
221 - B
222 - B
223 - A
224 - B
225 - C
226 - C
227 - B
228 - A
229 - B
230 - A
231 - B
232 - D
233 - A
234 - B
235 - B
236 - A
237 - C
238 - B
239 - A
240 - A
241 - C
242 - D
243 - C
244 - A
245 - A
246 - D
247 - D
248 - B
249 - A
250 - B
251 - D
252 - D
253 - A
254 - A
255 - B
256 - C
257 - B
258 - A
259 - B
260 - A
261 - D
262 - B
263 - C
264 - C
265 - C
266 - D
267 - B
268 - B
269 - A
270 - B
271 - C
272 - A
273 - B
274 - B
275 - D
276 - D
277 - B
278 - B
279 - C
280 - B
281 - A
282 - C
283 - A
284 - C
285 - C
286 - D
287 - A
288 - C
289 - D
290 - A
291 - A
292 - D
293 - D
294 - D
295 - B
296 - B
297 - B
298 - D
299 - C
300 - B
301 - B
302 - C
303 - B
304 - C
305 - C
306 - A
307 - A
308 - B
309 - C
310 - C
311 - D
312 - D
313 - D
314 - A
315 - D
316 - A
317 - A
318 - A
319 - C
320 - D
321 - D
322 - D
323 - C
324 - B
325 - D
326 - A
327 - A
328 - B
329 - C
330 - D
331 - D
332 - D
333 - A
334 - A
335 - C
336 - D
337 - C
338 - A
339 - B
340 - B
341 - B
342 - C
343 - A
344 - B
345 - D
346 - A
347 - B
348 - B
349 - B
350 - B
351 - D
352 - B
353 - C
354 - B
355 - A
356 - B
357 - C
358 - D
359 - B
360 - B
361 - B
362 - A
363 - C
364 - D
365 - C
366 - B
367 - A
368 - C
369 - B
370 - A
371 - D
372 - C
373 - B
374 - A
375 - B
376 - C
377 - C
378 - A
379 - B
380 - D
381 - B
382 - A
383 - D
384 - C
385 - B
386 - A
387 - D
388 - A
389 - A
390 - A
391 - D
392 - B
393 - B
394 - B
395 - C
396 - C
397 - D
398 - D
399 - D
400 - D
401 - C
402 - A
403 - D
404 - B
405 - A
406 - A
407 - C
408 - C
409 - A
410 - B
411 - C
412 - D
413 - A
414 - B
415 - B
416 - B
417 - C
418 - B
419 - C
420 - C
421 - A
422 - D
423 - C
424 - A
425 - A
426 - B
427 - A
428 - B
429 - C
430 - B
431 - A
432 - C
433 - C
434 - B
435 - A
436 - C
437 - A
438 - A
439 - C
440 - C
441 - C
442 - B
443 - B
444 - A
445 - D
446 - C
447 - D
448 - B
449 - C
450 - A
451 - B
452 - D
453 - B
454 - A
455 - D
456 - B
457 - D
458 - A
459 - D
460 - B
461 - B
462 - B
463 - D
464 - D
465 - B
466 - B
467 - D
468 - C
469 - C
470 - A
471 - C
472 - A
473 - A
474 - B
475 - D
476 - A
477 - C
478 - A
479 - B
480 - B
481 - A
482 - C
483 - A
484 - A
485 - A
486 - B
487 - B
488 - B
489 - A
490 - D
491 - D
492 - D
493 - A
494 - D
495 - B
496 - C
497 - A
498 - C
499 - B
500 - A
501 - B
502 - C
503 - C
504 - A
505 - B
506 - B
507 - B
508 - B
509 - C
510 - A
511 - B
512 - B
513 - B
514 - B
515 - A
516 - A
517 - D
518 - D
519 - A
520 - B
521 - C
522 - C
523 - B
524 - D
525 - D
526 - D
527 - B
528 - D
529 - C
530 - A
531 - A
532 - B
533 - A
534 - A
535 - C
536 - C
537 - B
538 - A
539 - D
540 - C
541 - C
542 - A
543 - B
544 - D
545 - A
546 - C
547 - A
548 - B
549 - A
550 - C
551 - B
552 - B
553 - C
554 - C
555 - A
556 - C
557 - D
558 - B
559 - A
560 - C
561 - A
562 - C
563 - A
564 - C
565 - B
566 - D
567 - C
568 - B
569 - A
570 - C
571 - C
572 - D
573 - B
574 - A
575 - C
576 - B
577 - B
578 - B
579 - A
580 - A
581 - D
582 - C
583 - D
584 - D
585 - A
586 - C
587 - C
588 - B
589 - B
590 - D
591 - D
592 - A
593 - C
594 - A
595 - D
596 - B
597 - C
598 - B
599 - C
600 - D
601 - A
602 - B
603 - B
604 - C
605 - A
606 - D
607 - C
608 - C
609 - C
610 - D
611 - C
612 - C
613 - D
614 - C
615 - B
616 - A
617 - C
618 - B
619 - A
620 - A
621 - C
622 - D
623 - D
624 - D
625 - A
626 - D
627 - B
628 - B
629 - B
630 - A
631 - C
632 - A
633 - C
634 - D
635 - A
636 - B
637 - A
638 - C
639 - C
640 - A
641 - B
642 - A
643 - A
644 - C
645 - B
646 - C
647 - C
648 - D
649 - D
650 - B
651 - B
652 - D
653 - B
654 - D
655 - D
656 - B
657 - A
658 - B
659 - A
660 - C
661 - D
662 - C
663 - D
664 - B
665 - D
666 - A
667 - B
668 - C
669 - B
670 - D
671 - D
672 - D
673 - A
674 - B
675 - A
676 - B
677 - C
678 - B
679 - A
680 - B
681 - D
682 - B
683 - C
684 - A
685 - D
686 - D
687 - C
688 - D
689 - C
690 - B
691 - B
692 - D
693 - A
694 - D
695 - C
696 - D
697 - A
698 - B
699 - C
700 - A
701 - A
702 - C
703 - D
704 - C
705 - A
706 - D
707 - D
708 - B
709 - B
710 - D
711 - A
712 - B
713 - A
714 - A
715 - C
716 - B
717 - D
718 - C
719 - B
720 - D
721 - A
722 - C
723 - B
724 - A
725 - A
726 - B
727 - B
728 - A
729 - B
730 - B
731 - D
732 - C
733 - B
734 - D
735 - C
736 - B
737 - C
738 - A
739 - C
740 - A
741 - D
742 - D
743 - A
744 - C
745 - D
746 - B
747 - B
748 - A
749 - D
750 - C
751 - D
752 - A
753 - A
754 - B
755 - D
756 - D
757 - C
758 - C
759 - C
760 - D
761 - B
762 - D
763 - A
764 - B
765 - A
766 - D
767 - C
768 - B
769 - C
770 - A
771 - D
772 - C
773 - D
774 - D
775 - C
776 - C
777 - C
778 - A
779 - C
780 - D
781 - A
782 - C
783 - A
784 - B
785 - D
786 - B
787 - D
788 - D
789 - D
790 - A
791 - D
792 - B
793 - B
794 - B
795 - D
796 - A
797 - C
798 - D
799 - C
800 - D
801 - B
802 - D
803 - B
804 - A
805 - A
806 - D
807 - B
808 - C
809 - A
810 - A
811 - B
812 - D
813 - A
814 - B
815 - A
816 - A
817 - A
818 - B
819 - D
820 - C
821 - A
822 - B
823 - A
824 - A
825 - B
826 - C
827 - B
828 - C
829 - A
830 - A
831 - B
832 - C
833 - A
834 - C
835 - B
836 - C
837 - C
838 - A
839 - A
840 - A
841 - C
842 - D
843 - A
844 - B
`;

  // Estado
  let questions = [];
  let allQuestions = [];
  let temasPorPregunta = {};
  let selectedThemes = [];
  let statsByTopic = {};
  let previousFailedQuestions = [];
  let currentFailedQuestions = [];
  let currentQuestionIndex = 0;
  let answeredQuestions = 0;
  let score = 0;
  let correctAnswersCount = 0;
  let incorrectAnswersCount = 0;
  let startTime = null;
  let timerInterval = null;

  // Persistencia del listado de falladas del intento anterior durante el "reinicio con falladas"
  let isRetryRun = false;
  let retryRunInitialList = [];

  // Utilidades
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));
  const norm = s => (s||'').replace(/\r/g,'').replace(/[\u2012\u2013\u2014\u2212]/g,'-');
  const numFromTema = t => {
    const m = String(t||'').match(/tema\s+(\d+)/i);
    return m ? parseInt(m[1],10) : Number.POSITIVE_INFINITY;
  };

  function logStatus(msg, isError=false){
    const el = $('#loadStatus');
    if(!el) return;
    el.textContent = msg;
    el.style.color = isError ? 'crimson' : '#64748b';
  }

  function shuffleInPlace(arr){
    for(let i=arr.length-1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function scrollToQuiz(){
    const qc = document.getElementById('quizContainer');
    if (qc) qc.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Listeners base
  document.addEventListener('DOMContentLoaded', () => {
    // Carga automática del cuestionario embebido
    try {
      if (EMBEDDED_TXT && EMBEDDED_TXT.trim().length > 0) {
        const ok = parseAll(EMBEDDED_TXT);
        if (ok) {
          allQuestions = [...questions];
          populateThemeDropdown();
          ['themeSelector','numberSelector','quizContainer','stats','failedPanel'].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'block'; });
          updateStats();
          startTimer();
          createFailedQuestionsDisplay();
          const ls = document.getElementById('loadStatus'); if (ls) ls.textContent = `Cargado: ${questions.length} preguntas (embebido).`;
        }
      }
    } catch (err) { console.error('Error cargando embebido:', err); }

    const input = $('#fileInput') || document.querySelector('input[type="file"]');
    if (input) input.addEventListener('change', onFileSelected, { once:false });
    $('#applyThemesBtn')?.addEventListener('click', applyThemeSelection);
    $('#clearThemesBtn')?.addEventListener('click', () => {
      const sel = $('#themeDropdown');
      if(!sel) return;
      Array.from(sel.options).forEach(o => o.selected = false);
      selectedThemes = [];
      updateSelectedThemesList();
      isRetryRun = false; retryRunInitialList = [];
    });
    $('#selectAllThemes')?.addEventListener('change', e => toggleSelectAllThemes(e.target.checked));
    $('#applyNumbersBtn')?.addEventListener('click', applyNumberSelection);
    $('#clearNumbersBtn')?.addEventListener('click', () => { $('#numbersInput').value=''; isRetryRun=false; retryRunInitialList=[]; });
    $('#nextButton')?.addEventListener('click', showNextQuestion);
    $('#skipButton')?.addEventListener('click', skipQuestion);
    $('#statsButton')?.addEventListener('click', showStats);
    $('#closeStatsBtn')?.addEventListener('click', closeStats);
  });

  // Carga de archivo
  function onFileSelected(e){
    const file = e.target.files?.[0];
    if(!file){ logStatus('No se seleccionó archivo.'); return; }
    logStatus(`Leyendo "${file.name}"...`);
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const content = ev.target.result;
        const ok = parseAll(content);
        if (!ok){
          alert('No se detectaron preguntas. Revisa el TXT.');
          logStatus('No se detectaron preguntas en el archivo.', true);
          return;
        }
        allQuestions = [...questions];
        populateThemeDropdown();
        $('#themeSelector').style.display = 'block';
        $('#numberSelector').style.display = 'block';
        $('#quizContainer').style.display = 'block';
        $('#stats').style.display = 'block';
        $('#failedPanel').style.display = 'block';
        updateStats();
        startTimer();
        createFailedQuestionsDisplay();
        logStatus(`Cargado: ${questions.length} preguntas.`);
      } catch(err){
        console.error(err);
        logStatus('Error procesando el archivo.', true);
        alert('Error procesando el archivo. Revisa la consola (F12).');
      }
    };
    reader.onerror = () => {
      logStatus('No se pudo leer el archivo.', true);
      alert('No se pudo leer el archivo.');
    };
    reader.readAsText(file);
  }

  function parseAll(content){
    parseTemario(content);
    parseQuestions(content);
    return questions.length > 0;
  }

  // ---- Parser Temario
  function parseTemario(content){
    temasPorPregunta = {};
    const lines = norm(content).split('\n');
    let currentBloque = '';
    let temaPend = null;
    const temaLinea = /^\s*TEMA\s+(\d+)\.?\s*(.*)$/i;
    const preguntasLinea = /^\s*PREGUNTAS?\s*:?\s*(\d+)\s*[-–—]\s*(\d+)\s*$/i;
    const bloqueLinea = /^\s*BLOQUE\s+\d+.*$/i;

    for (let i=0;i<lines.length;i++){
      const line = lines[i].trim();
      if (!line) continue;
      if (bloqueLinea.test(line)){ currentBloque = line; continue; }
      const mTema = line.match(temaLinea);
      if (mTema){
        temaPend = { n: parseInt(mTema[1],10), titulo: (mTema[2]||'').trim() };
        const same = line.match(/PREGUNTAS?\s*:?\s*(\d+)\s*[-–—]\s*(\d+)/i);
        if (same){
          const a = parseInt(same[1],10), b = parseInt(same[2],10);
          for (let q=a;q<=b;q++){ temasPorPregunta[q] = { bloque: currentBloque, tema: `Tema ${temaPend.n}. ${temaPend.titulo}`.trim() }; }
          temaPend = null;
        }
        continue;
      }
      const mPreg = line.match(preguntasLinea);
      if (mPreg && temaPend){
        const a = parseInt(mPreg[1],10), b = parseInt(mPreg[2],10);
        for (let q=a;q<=b;q++){ temasPorPregunta[q] = { bloque: currentBloque, tema: `Tema ${temaPend.n}. ${temaPend.titulo}`.trim() }; }
        temaPend = null;
      }
    }
  }

  // ---- Parser Preguntas
  function parseQuestions(content){
    questions = [];
    const lines = content.split('\n');
    const idxAnswers = lines.findIndex(l => /RESPUESTAS\s+CORRECTAS\s*:?\s*$/i.test(norm(l)));
    const partQ = idxAnswers >= 0 ? lines.slice(0, idxAnswers) : lines;
    const partA = idxAnswers >= 0 ? lines.slice(idxAnswers+1) : [];

    let cur = null;
    const startRegexes = [
      /^\s*PREGUNTA\s*N[ºo°]\s*(\d+)\s*[.\-–—]?\s*(.*)$/i,
      /^\s*(\d+)\s*[.\-–—]\s*(.*)$/
    ];
    const optRegex = /^\s*([a-dA-D])\)\s*(.*)$/;

    for (let i=0;i<partQ.length;i++){
      const raw = partQ[i].replace('\r','');
      const t = raw.trim();

      let m = null;
      for (const r of startRegexes){
        m = t.match(r);
        if (m) break;
      }
      if (m){
        if (cur) questions.push(cur);
        cur = {
          number: parseInt(m[1],10),
          text: (m[2]||'').trim(),
          options: [], correctAnswer:'', answered:false, selectedAnswer:null
        };
        continue;
      }

      const mo = t.match(optRegex);
      if (mo && cur){
        cur.options.push(`${mo[1].toLowerCase()}) ${mo[2]}`.trim());
        continue;
      }

      if (cur && t) cur.text += (cur.text ? ' ' : '') + t;
    }
    if (cur) questions.push(cur);

    const answers = {};
    const answerSource = partA.length ? partA : lines;
    for (let i=0;i<answerSource.length;i++){
      const line = norm(answerSource[i]).trim();
      if (!line) continue;
      let m = line.match(/^(\d+)\s*(?:[-:])?\s*([a-dA-D])\b/);
      if (m){
        answers[parseInt(m[1],10)] = m[2].toLowerCase();
      } else {
        const only = line.match(/^(\d+)\b$/);
        if (only) answers[parseInt(only[1],10)] = '';
      }
    }
    questions.forEach(q => { if (q.number in answers) q.correctAnswer = (answers[q.number]||'').toLowerCase(); });
  }

  // --- UI helpers
  function populateThemeDropdown(){
    const dd = $('#themeDropdown');
    dd.innerHTML = '';
    const temas = new Map();
    Object.entries(temasPorPregunta).forEach(([num, info]) => {
      if (!info?.tema) return;
      temas.set(info.tema, true);
    });
    const sorted = [...temas.keys()].sort((a,b) => numFromTema(a) - numFromTema(b) || String(a).localeCompare(String(b)));
    sorted.forEach(tema => {
      const opt = document.createElement('option');
      opt.value = tema; opt.textContent = tema;
      dd.appendChild(opt);
    });
  }
  function toggleSelectAllThemes(all){
    const dd = $('#themeDropdown');
    const opts = Array.from(dd.options);
    // ordenar por número de tema
    const sorted = opts.sort((a,b) => numFromTema(a.value) - numFromTema(b.value) || a.value.localeCompare(b.value));
    // aplicar selección respetando el orden
    sorted.forEach(o => o.selected = all);
    selectedThemes = all ? sorted.map(o => o.value) : [];
    updateSelectedThemesList(); // mostrará orden creciente
  }
  function updateSelectedThemesList(){
    const ul = $('#selectedThemesList');
    ul.innerHTML = '';
    const sorted = selectedThemes.slice().sort((a,b) => numFromTema(a) - numFromTema(b) || String(a).localeCompare(String(b)));
    sorted.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t; ul.appendChild(li);
    });
  }

  // Aleatorización: barajar preguntas seleccionadas (no opciones)
  function applyThemeSelection(){
    isRetryRun = false; retryRunInitialList = [];
    const dd = $('#themeDropdown');
    selectedThemes = Array.from(dd.selectedOptions).map(o=>o.value);
    updateSelectedThemesList();
    if (!selectedThemes.length){ alert('Selecciona al menos un tema.'); return; }
    questions = allQuestions.filter(q => selectedThemes.includes(temasPorPregunta[q.number]?.tema));
    if (!questions.length){ alert('No hay preguntas para los temas elegidos.'); return; }
    shuffleInPlace(questions);
    currentQuestionIndex = 0;
    resetQuizState();
    showQuestion();
    scrollToQuiz(); // auto-scroll al iniciar
  }

  function applyNumberSelection(){
    isRetryRun = false; retryRunInitialList = [];
    const raw = $('#numbersInput').value.trim();
    if (!raw){ alert('Introduce números de pregunta.'); return; }
    const nums = raw.split(',').map(s=>parseInt(s.trim(),10)).filter(n=>!isNaN(n));
    questions = allQuestions.filter(q => nums.includes(q.number));
    if (!questions.length){ alert('No hay coincidencias para esos números.'); return; }
    shuffleInPlace(questions);
    currentQuestionIndex = 0;
    resetQuizState();
    showQuestion();
    scrollToQuiz(); // auto-scroll al iniciar
  }

  function resetQuizState(){
    answeredQuestions = 0; score = 0;
    correctAnswersCount = 0; incorrectAnswersCount = 0;
    statsByTopic = {}; currentFailedQuestions = [];
    updateStats();
  }

  function showQuestion(){
    if (currentQuestionIndex >= questions.length){ showFinalResult(); return; }
    const q = questions[currentQuestionIndex];
    $('#questionNumber').textContent = `Pregunta Nº ${q.number}`;
    const meta = temasPorPregunta[q.number] || { bloque:'', tema:'Sin tema' };
    $('#questionMeta').innerHTML = `<strong>${meta.bloque||''}</strong> · <em>${meta.tema||''}</em>`;
    $('#questionText').textContent = q.text;
    const cont = $('#answerOptions'); cont.innerHTML = '';
    // Orden alfabético fijo a), b), c), d)
    q.optionOrder = q.options.map((_,i)=>i); // sin barajar opciones
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.addEventListener('click', () => selectAnswer(idx));
      cont.appendChild(btn);
    });
    $('#feedback').textContent = '';
    $('#nextButton').style.display = 'none';
  }

  function selectAnswer(visibleIdx){
    const q = questions[currentQuestionIndex];
    const origIdx = q.optionOrder?.[visibleIdx] ?? visibleIdx;
    const selected = String.fromCharCode(97 + origIdx);
    const isCorrect = String(selected).toLowerCase() === String(q.correctAnswer||'').toLowerCase();
    q.selectedAnswer = selected;

    if (!q.correctAnswer){
      $('#feedback').textContent = 'Sin respuesta oficial en el TXT. No computa.';
    } else {
      $('#feedback').textContent = isCorrect ? '¡Correcto!' : `Incorrecto. La correcta era ${q.correctAnswer.toUpperCase()}.`;
    }

    answeredQuestions++;
    if (isCorrect) { correctAnswersCount++; score += 1; }
    else { incorrectAnswersCount++; score -= 0.33; if (!currentFailedQuestions.some(p=>p.number===q.number)) currentFailedQuestions.push(q); previousFailedQuestions = [...currentFailedQuestions]; }
    updateFailedQuestionsDisplay();
    updateStats();

    const cont = $('#answerOptions');
    const btns = cont.querySelectorAll('button');
    const correctIdx = q.optionOrder.findIndex(i => String.fromCharCode(97+i) === String(q.correctAnswer).toLowerCase());
    btns.forEach((b,i)=>{
      if (i === visibleIdx) b.classList.add(isCorrect ? 'correct':'incorrect');
      if (i === correctIdx) b.classList.add('correct');
      b.disabled = true;
    });
    $('#nextButton').style.display = 'inline-block';
  }

  function skipQuestion(){
    $('#feedback').textContent = 'Pregunta saltada. No suma ni resta.';
    answeredQuestions++; updateStats();
    $('#answerOptions').querySelectorAll('button').forEach(b=>b.disabled=true);
    $('#nextButton').style.display = 'inline-block';
  }

  function showNextQuestion(){ currentQuestionIndex++; showQuestion(); }

  function updateStats(){
    $('#totalQuestions').textContent = questions.length;
    $('#answeredCount').textContent = answeredQuestions;
    $('#remainingCount').textContent = Math.max(0, questions.length-answeredQuestions);
    $('#correctCount').textContent = correctAnswersCount;
    $('#incorrectCount').textContent = incorrectAnswersCount;
    $('#score').textContent = score.toFixed(2);
  }

  function showStats(){
    const tbody = $('#statsTable tbody'); tbody.innerHTML='';
    const map = {};
    questions.forEach(q => {
      const tema = (temasPorPregunta[q.number]?.tema) || 'Sin tema';
      map[tema] = map[tema] || { total:0, correct:0, incorrect:0 };
      map[tema].total++;
      if (q.selectedAnswer){
        if (String(q.selectedAnswer).toLowerCase() === String(q.correctAnswer||'').toLowerCase()) map[tema].correct++;
        else map[tema].incorrect++;
      }
    });
    Object.entries(map).forEach(([tema, st]) => {
      const tr = document.createElement('tr');
      const pct = st.total ? Math.round((st.correct/st.total)*100) : 0;
      tr.innerHTML = `<td>${tema}</td><td>${st.total}</td><td>${st.correct}</td><td>${st.incorrect}</td><td>${pct}%</td>`;
      tbody.appendChild(tr);
    });
    $('#statsModal').style.display = 'flex';
  }
  function closeStats(){ $('#statsModal').style.display = 'none'; }

  function createFailedQuestionsDisplay(){
    const panel = $('#failedPanel'); panel.style.display='block';
    updateFailedQuestionsDisplay();
  }
  function updateFailedQuestionsDisplay(){
    const cont = $('#failedQuestionsDisplay');
    if (!cont) return;
    // elegir lista a mostrar: si estamos en retry, mostrar SIEMPRE el snapshot inicial
    let numbers = [];
    if (isRetryRun && retryRunInitialList.length){
      numbers = retryRunInitialList.slice();
    } else if (Array.isArray(previousFailedQuestions) && previousFailedQuestions.length){
      numbers = previousFailedQuestions.map(q => q.number);
    }
    numbers = numbers.filter(n => typeof n === 'number' && !Number.isNaN(n)).sort((a,b)=>a-b);
    cont.innerHTML = numbers.length
      ? `<div id="failedQuestionsText"><strong>Preguntas falladas en el intento anterior:</strong><br>${numbers.join(', ')}</div>
         <div style="margin-top:8px;"><button id="restartFailedBtn">Reiniciar SOLO con estas</button></div>`
      : `No hay preguntas falladas en intentos anteriores.`;
    document.getElementById('restartFailedBtn')?.addEventListener('click', () => {
      // Fijar snapshot y activar retry
      if (Array.isArray(previousFailedQuestions) && previousFailedQuestions.length){
        retryRunInitialList = previousFailedQuestions.map(q=>q.number).filter(n=>typeof n==='number'&&!Number.isNaN(n)).sort((a,b)=>a-b);
      } else {
        retryRunInitialList = [];
      }
      isRetryRun = true;
      // Reiniciar cuestionario SOLO con esas falladas, aleatorias
      questions = previousFailedQuestions.slice();
      shuffleInPlace(questions);
      currentQuestionIndex = 0;
      resetQuizState();
      showQuestion();
      updateFailedQuestionsDisplay(); // mantener texto visible con snapshot
      scrollToQuiz(); // auto-scroll al iniciar
    });
  }

  // Timer
  function startTimer(){
    startTime = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      const diff = Date.now()-startTime;
      const h = Math.floor(diff/3600000);
      const m = Math.floor((diff%3600000)/60000);
      const s = Math.floor((diff%60000)/1000);
      $('#timer').textContent = `Tiempo transcurrido: ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }, 1000);
  }

})();

// === Persistencia mínima para tamaños (opcional) ===
(function(){
  const LS_KEY = "quizTypographyPrefs.v1"; // solo tamaños y flag persist
  function byId(id){ return document.getElementById(id); }
  function setVar(name, value){ document.documentElement.style.setProperty(name, value); }
  function loadPrefs(){
    try{ return JSON.parse(localStorage.getItem(LS_KEY)||"{}"); }catch(e){ return {}; }
  }
  function savePrefs(obj){
    try{ localStorage.setItem(LS_KEY, JSON.stringify(obj)); }catch(e){}
  }
  function clearPrefs(){
    try{ localStorage.removeItem(LS_KEY); }catch(e){}
  }

  function initPersist(){
    const q = byId('qFontSize');
    const o = byId('optFontSize');
    const qv = byId('qFontSizeValue');
    const ov = byId('optFontSizeValue');
    const persistSel = byId('persistTypography');

    // Defaults
    const defaults = { persist:'off', q:22, o:18 };

    // Cargamos
    const stored = loadPrefs();
    const persistMode = stored.persist || defaults.persist;

    // Si hay persistencia ON, aplicar tamaños guardados si existen
    let qSize = defaults.q, oSize = defaults.o;
    if(persistMode === 'on'){
      if(typeof stored.q === 'number') qSize = stored.q;
      if(typeof stored.o === 'number') oSize = stored.o;
    }

    // Aplicar a UI y CSS vars
    if(q){ q.value = qSize; if(qv) qv.textContent = qSize; setVar('--q-font-size', qSize+'px'); }
    if(o){ o.value = oSize; if(ov) ov.textContent = oSize; setVar('--opt-font-size', oSize+'px'); }
    if(persistSel){ persistSel.value = persistMode; }

    function handleSizeChange(kind, value){
      // Actualiza CSS var en caliente
      if(kind==='q'){ setVar('--q-font-size', value+'px'); if(qv) qv.textContent = value; }
      if(kind==='o'){ setVar('--opt-font-size', value+'px'); if(ov) ov.textContent = value; }
      // Guardar solo si persist está ON
      const mode = (persistSel && persistSel.value) || 'off';
      if(mode === 'on'){
        const cur = loadPrefs();
        cur.persist = 'on';
        if(kind==='q') cur.q = value;
        if(kind==='o') cur.o = value;
        savePrefs(cur);
      }
    }

    if(q){
      q.addEventListener('input', (e)=>{
        const v = parseInt(e.target.value,10);
        handleSizeChange('q', v);
      });
    }
    if(o){
      o.addEventListener('input', (e)=>{
        const v = parseInt(e.target.value,10);
        handleSizeChange('o', v);
      });
    }

    if(persistSel){
      persistSel.addEventListener('change', (e)=>{
        const mode = e.target.value; // 'on' | 'off'
        if(mode === 'off'){
          // Borramos almacenado y dejamos los valores visibles solo para esta sesión
          clearPrefs();
        }else if(mode === 'on'){
          // Guardamos el estado actual
          const cur = loadPrefs();
          cur.persist = 'on';
          cur.q = q ? parseInt(q.value,10) : defaults.q;
          cur.o = o ? parseInt(o.value,10) : defaults.o;
          savePrefs(cur);
        }
      });

      // Limpiar al salir si está OFF (garantiza arranque por defecto)
      window.addEventListener('beforeunload', ()=>{
        if(persistSel.value !== 'on') clearPrefs();
      });
    }
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', initPersist);
  }else{
    initPersist();
  }
})();



// === Opciones avanzadas (opt-in, sin tocar tu lógica) ===
(function(){
  const $ = (sel)=>document.querySelector(sel);
  function on(el, ev, fn){ if(el) el.addEventListener(ev, fn); }

  function applyColumns(v){
    const wrap = document.getElementById('answerOptions');
    if(!wrap) return;
    if(String(v)==='2') wrap.classList.add('cols-2'); else wrap.classList.remove('cols-2');
  }
  function applyBtnPadding(v){
    document.body.classList.toggle('btnpad-custom', true);
    document.documentElement.style.setProperty('--btn-pad', String(v)+'px');
    const lab = $('#btnPaddingValue'); if(lab) lab.textContent = String(v);
  }
  function applyTheme(preset){
    document.body.classList.remove('theme-dark','theme-contrast','use-theme-vars');
    if(preset==='dark'){ document.body.classList.add('use-theme-vars','theme-dark'); }
    else if(preset==='contrast'){ document.body.classList.add('use-theme-vars','theme-contrast'); }
    // 'off' => no classes => estilo original intacto
  }
  function applyTimer(v){
    document.body.classList.toggle('hide-timer', v==='hide');
  }
  function setupShortcuts(onoff){
    const handler = (ev)=>{
      const key = (ev.key||'').toLowerCase();
      if(['a','b','c','d','enter'].includes(key)){
        const options = Array.from(document.querySelectorAll('#answerOptions button')).slice(0,4);
        if(['a','b','c','d'].includes(key)){
          const idx = {a:0,b:1,c:2,d:3}[key];
          if(options[idx]){ options[idx].click(); ev.preventDefault(); }
        }else if(key==='enter'){
          const btn = document.querySelector('[data-next],#next,#nextQuestion,button.next,button[data-action="next"]') ||
                      Array.from(document.querySelectorAll('button')).find(b=>(b.textContent||'').trim().toLowerCase()==='siguiente');
          if(btn){ btn.click(); ev.preventDefault(); }
        }
      }
    };
    if(onoff==='on'){
      document.addEventListener('keydown', handler, true);
      // Guardar referencia para poder quitarlo si cambian a 'off'
      document._kbdHandler = handler;
    }else{
      if(document._kbdHandler){ document.removeEventListener('keydown', document._kbdHandler, true); document._kbdHandler = null; }
    }
  }
  function autoNextSetup(onoff, delay){
    const wrap = document.getElementById('answerOptions');
    if(!wrap) return;
    if(wrap._autoNextAttached) wrap.removeEventListener('click', wrap._autoNextAttached, true);
    if(onoff!=='on') return;
    const fn = (ev)=>{
      const btn = ev.target && ev.target.closest('button'); if(!btn) return;
      setTimeout(()=>{
        const nx = document.querySelector('[data-next],#next,#nextQuestion,button.next,button[data-action="next"]') ||
                   Array.from(document.querySelectorAll('button')).find(b=>(b.textContent||'').trim().toLowerCase()==='siguiente');
        if(nx) nx.click();
      }, parseInt(delay||0,10) || 0);
    };
    wrap.addEventListener('click', fn, true);
    wrap._autoNextAttached = fn;
  }
  function rememberThemesSetup(onoff){
    const root = document.getElementById('themeSelector');
    if(!root) return;
    const KEY = 'quiz.selectedThemes.v1';
    if(root._rememberAttached) root.removeEventListener('change', root._rememberAttached);
    if(onoff!=='on') return;
    const fn = ()=>{
      const checked = Array.from(root.querySelectorAll('input[type="checkbox"]:checked, option:checked')).map(el=>el.value);
      try{ localStorage.setItem(KEY, JSON.stringify(checked)); }catch(e){}
    };
    root.addEventListener('change', fn);
    root._rememberAttached = fn;
    try{
      const saved = JSON.parse(localStorage.getItem(KEY)||"[]");
      saved.forEach(v=>{
        const cb = root.querySelector(`input[type="checkbox"][value="${CSS.escape(v)}"]`);
        if(cb) cb.checked = true;
        const opt = root.querySelector(`option[value="${CSS.escape(v)}"]`);
        if(opt) opt.selected = true;
      });
    }catch(e){}
  }

  function init(){
    const col = $('#optColumns'); on(col,'change', e=>applyColumns(e.target.value));

    const bp = $('#btnPadding'); on(bp,'input', e=>applyBtnPadding(parseInt(e.target.value,10)));
    if(bp) applyBtnPadding(parseInt(bp.value,10));
    on(bp,'change', e=>applyBtnPadding(parseInt(e.target.value,10)));
    if(bp){ const lab = $('#btnPaddingValue'); if(lab) lab.textContent = String(bp.value); }

    const th = $('#themePreset'); on(th,'change', e=>applyTheme(e.target.value));

    const ks = $('#kbdShortcuts'); on(ks,'change', e=>setupShortcuts(e.target.value));

    const an = $('#autoNext');
    const ad = $('#autoNextDelay');
    on(an,'change', ()=>autoNextSetup(an.value, ad ? ad.value : 0));
    on(ad,'input', ()=>{
      const lab = $('#autoNextDelayValue'); if(lab) lab.textContent = String(ad.value);
      autoNextSetup(an ? an.value : 'off', ad.value);
    });

    const tt = $('#toggleTimer'); on(tt,'change', e=>applyTimer(e.target.value));

    const rth = $('#rememberThemes'); on(rth,'change', e=>rememberThemesSetup(e.target.value));

    // Inicial: estado "neutral" (no cambia nada). Los listeners activan los cambios.
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

// === Persistencia de TODA la configuración (mínimo) ===
(function(){
  const LS_KEY_ALL = "quizAppPrefs.v1"; // almacena todos los ajustes
  const $ = (s)=>document.querySelector(s);

  const defaults = {
    persist: 'off',           // 'on'|'off'
    q: 22,                    // tamaño enunciado
    o: 18,                    // tamaño opciones
    optColumns: '1',          // '1'|'2'
    btnPadding: 10,           // px
    themePreset: 'off',       // 'off'|'dark'|'contrast'
    kbdShortcuts: 'off',      // 'off'|'on'
    autoNext: 'off',          // 'off'|'on'
    autoNextDelay: 0,         // ms
    toggleTimer: 'show',      // 'show'|'hide'
    rememberThemes: 'off'     // 'off'|'on'
  };

  function loadAll(){
    try{ return Object.assign({}, defaults, JSON.parse(localStorage.getItem(LS_KEY_ALL)||"{}")); }
    catch(e){ return Object.assign({}, defaults); }
  }
  function saveAll(obj){
    try{ localStorage.setItem(LS_KEY_ALL, JSON.stringify(obj)); }catch(e){}
  }
  function clearAll(){
    try{ localStorage.removeItem(LS_KEY_ALL); }catch(e){}
  }

  function setVar(name, value){ document.documentElement.style.setProperty(name, value); }
  function setSel(id, val){
    const el = document.getElementById(id);
    if(el){ el.value = String(val); }
  }
  function setRange(id, val, labelId){
    const el = document.getElementById(id);
    if(el){ el.value = String(val); }
    const lab = labelId && document.getElementById(labelId);
    if(lab){ lab.textContent = String(val); }
  }

  function dispatch(id, type){
    const el = document.getElementById(id);
    if(!el) return;
    const ev = new Event(type, {bubbles:true});
    el.dispatchEvent(ev);
  }

  function applyToUI(p){
    // Tipografías
    setRange('qFontSize', p.q, 'qFontSizeValue'); setVar('--q-font-size', p.q + 'px');
    setRange('optFontSize', p.o, 'optFontSizeValue'); setVar('--opt-font-size', p.o + 'px');
    // Avanzadas
    setSel('optColumns', p.optColumns);
    setRange('btnPadding', p.btnPadding, 'btnPaddingValue');
    setSel('themePreset', p.themePreset);
    setSel('kbdShortcuts', p.kbdShortcuts);
    setSel('autoNext', p.autoNext);
    setRange('autoNextDelay', p.autoNextDelay, 'autoNextDelayValue');
    setSel('toggleTimer', p.toggleTimer);
    setSel('rememberThemes', p.rememberThemes);
    setSel('persistAll', p.persist);
  }

  function triggerExistingHandlers(){
    // Dispara eventos para que los módulos ya añadidos apliquen los cambios
    dispatch('qFontSize','input');
    dispatch('optFontSize','input');
    dispatch('optColumns','change');
    dispatch('btnPadding','input');
    dispatch('themePreset','change');
    dispatch('kbdShortcuts','change');
    dispatch('autoNext','change');
    dispatch('autoNextDelay','input');
    dispatch('toggleTimer','change');
    dispatch('rememberThemes','change');
  }

  function collectFromUI(){
    const gv = (id, fallback)=>{
      const el = document.getElementById(id);
      if(!el) return fallback;
      if(el.type === 'range'){ return parseInt(el.value,10); }
      return el.value;
    };
    return {
      persist: gv('persistAll', defaults.persist),
      q: gv('qFontSize', defaults.q),
      o: gv('optFontSize', defaults.o),
      optColumns: String(gv('optColumns', defaults.optColumns)),
      btnPadding: gv('btnPadding', defaults.btnPadding),
      themePreset: gv('themePreset', defaults.themePreset),
      kbdShortcuts: gv('kbdShortcuts', defaults.kbdShortcuts),
      autoNext: gv('autoNext', defaults.autoNext),
      autoNextDelay: gv('autoNextDelay', defaults.autoNextDelay),
      toggleTimer: gv('toggleTimer', defaults.toggleTimer),
      rememberThemes: gv('rememberThemes', defaults.rememberThemes)
    };
  }

  function attachSaving(){
    const ids = ['qFontSize','optFontSize','optColumns','btnPadding','themePreset','kbdShortcuts','autoNext','autoNextDelay','toggleTimer','rememberThemes','persistAll'];
    ids.forEach(id=>{
      const el = document.getElementById(id);
      if(!el) return;
      const evt = (el.tagName==='INPUT' && el.type==='range') ? 'input' : 'change';
      el.addEventListener(evt, ()=>{
        const all = collectFromUI();
        if(all.persist === 'on') saveAll(all);
      });
    });

    // Limpieza al salir si no está ON
    window.addEventListener('beforeunload', ()=>{
      const all = collectFromUI();
      if(all.persist !== 'on') clearAll();
    });
  }

  function init(){
    const all = loadAll();
    applyToUI(all);
    // Asegura que el select global exista (compatibilidad con versiones previas que tenían persistTypography)
    const oldPersist = document.getElementById('persistTypography');
    if(oldPersist && !document.getElementById('persistAll')){
      oldPersist.id = 'persistAll';
      const lab = oldPersist.closest('div')?.querySelector('label.label');
      if(lab) lab.textContent = 'Guardar configuración (toda la app)';
    }
    triggerExistingHandlers();
    attachSaving();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
