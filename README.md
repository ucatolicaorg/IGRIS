# Igris

![Image](https://github.com/user-attachments/assets/ecf927ab-7d3f-42fc-a857-63b36eafd665)

📚 IGRIS - Plataforma Inteligente de Crecimiento Académico  

## 📌 Descripción del Proyecto  
*IGRIS* es un ecosistema digital diseñado para estudiantes de Ingeniería de Sistemas, enfocado en el aprendizaje autodirigido y el desarrollo de habilidades técnicas a través de análisis inteligente, personalización del estudio y dinámicas de mejora continua.  

## 🎯 Objetivos del Proyecto  
- 🧠 *Aprendizaje adaptativo*: La plataforma ajusta la dificultad de los ejercicios en tiempo real según el rendimiento del usuario.  
- 🏗 *Construcción de rutas de aprendizaje personalizadas* basadas en metas y desempeño previo.  
- 🎤 *Interacción por voz* con asistentes virtuales que explican conceptos y ayudan a resolver problemas.  
- 🔄 *Entrenamiento en resolución de problemas en tiempo limitado* para mejorar la toma de decisiones bajo presión.  
- 📊 *Reportes detallados* sobre evolución académica, áreas fuertes y puntos de mejora.  

## ✨ Características Principales  
- 🔍 *Modo desafío contra IA*: Compite contra un bot inteligente en resolución de problemas.  
- 🎭 *Perfiles dinámicos* que evolucionan según el estilo de aprendizaje del usuario.  
- 🏅 *Misiones diarias y recompensas especiales* que fomentan la constancia y el aprendizaje diario.  
- 🛠 *Talleres interactivos en vivo* con feedback en tiempo real de expertos en programación y matemáticas.  
- 🔧 *Generador automático de ejercicios personalizados* según historial de errores y respuestas.  
- 📡 *Modo offline* que permite practicar sin conexión y sincroniza el progreso al volver en línea.  
****
---

## 🛠️ Tecnologías Utilizadas  
- *Frontend:* Next.js con TypeScript  
- *Backend:* FastAPI con Python  
- *Base de Datos:* PostgreSQL con GraphQL  
- *Autenticación:* OAuth 2.0 + WebAuthn (autenticación sin contraseña)  
- *Inteligencia Artificial:* Modelos de aprendizaje automático para análisis del rendimiento  
- *Infraestructura:* Docker y Kubernetes para despliegue escalable  

---

## 🚀 Instalación y Configuración  

### 🔹 1. Clonar el repositorio  
sh
git clone https://github.com/TuUsuario/igris.git
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
