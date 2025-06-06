# CodePrep.

![Image](https://github.com/user-attachments/assets/ecf927ab-7d3f-42fc-a857-63b36eafd665)

📚 IGRIS - Plataforma Inteligente de Crecimiento Académico
📌 Descripción del Proyecto
IGRIS es una plataforma educativa diseñada para estudiantes de Ingeniería de Sistemas. Su enfoque es el aprendizaje autodirigido mediante desafíos de programación, perfiles inteligentes, retroalimentación personalizada y seguimiento del progreso. Combina gamificación, inteligencia adaptativa y analítica académica en un entorno accesible y dinámico.

🎯 Objetivos del Proyecto
🧠 Aprendizaje adaptativo: La plataforma ajusta la dificultad de los problemas según el rendimiento del usuario.

🧩 Rutas personalizadas: Se construyen trayectorias de aprendizaje según metas, desempeño y áreas por reforzar.

🎤 Asistencia virtual por voz (futuro): Se plantea la integración de un asistente que brinde explicaciones personalizadas por voz.

⏱️ Entrenamiento contrarreloj: Los estudiantes resuelven problemas en tiempo limitado para mejorar su agilidad mental.

📊 Análisis académico: Reportes de evolución, fortalezas, debilidades y logros alcanzados.

✨ Características Principales
🔍 Modo desafío vs IA (futuro): El estudiante compite contra un bot inteligente que resuelve problemas en paralelo.

🎭 Perfiles dinámicos: Cada usuario posee un perfil que evoluciona con su desempeño y estilo de aprendizaje.

🏅 Misiones diarias y recompensas: Incentivos para mantener la constancia y el progreso diario.

🧑‍💻 Maratones de programación: Retos en grupo con rankings, calificación manual, retroalimentación y resultados por tiempo.

🔧 Generador de ejercicios personalizados: Basado en errores frecuentes y respuestas anteriores.

📶 Modo offline (planeado): Permitirá practicar sin conexión y sincronizar el progreso automáticamente al reconectarse.

🛠️ Tecnologías Utilizadas
Frontend: React.js con diseño responsivo y estilo personalizado (sin Tailwind).

Backend: FastAPI con Python, estructurado en rutas organizadas para usuarios, maratones y resultados.

Base de datos: MongoDB local (con opción a migrar a Atlas en producción).

Autenticación: Validación por username y contraseña con cifrado (bcrypt), con sesión persistente.

Gamificación: Logros desbloqueables, retroalimentación motivacional y rankings.

Infraestructura: Despliegue en entorno local, con opción a contenerizar vía Docker.

## 🚀 Instalación y Configuración  

### 🔹 1. Clonar el repositorio  
sh
git clone [https://github.com/TuUsuario/igris.git](https://github.com/TuUsuario/igris.git)
cd igris
  

### 🔹 2. Configurar el Backend  
sh
cd backend
pip install -r requirements.txt
cp .env.example .env  # Configurar variables de entorno
uvicorn main:app --reload
  

### 🔹 3. Configurar el Frontend  
sh
cd frontend
npm install
npm run dev
  

---
