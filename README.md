# TaskFlow DevOps Project

## Име на проекта и описание

TaskFlow е web базирано приложение за управление на задачи (To-Do App). Приложението позволява на потребителите да създават, отбелязват като завършени и изтриват задачи.

Проектът решава проблема с организирането на ежедневни задачи и демонстрира пълен DevOps процес – от разработка, през автоматично билдване и тестване, до deployment в Kubernetes чрез CI/CD.

---

## Архитектурна диаграма

Архитектурата на системата е следната:

User - Frontend (React)
     Backend (Node.js API)
     Docker контейнеризация
     GitHub Actions (CI pipeline)
     Docker Hub (image registry)
     ArgoCD (Continuous Deployment)
     Kubernetes (execution environment)

(По желание може да се добави изображение в папка docs/ и да се реферира тук)

---

## Инструкции за стартиране

### Стартиране с Docker

1. Клониране проекта:

```bash
git clone https://github.com/Martin583-maker/taskflow-devops.git
cd taskflow-devops

2. Стартирай контейнерите:
docker-compose up --build

3. Достъп до приложението:

Frontend: http://localhost:5173

Backend: http://localhost:5000

Стартиране с Kubernetes
1. Трябва Kubernetes е включен (Docker Desktop)
2. Деплой на приложението:
kubectl apply -f k8s/
3. Достъп до frontend:

http://localhost:30273

4. Достъп до backend (чрез port-forward):
kubectl port-forward service/taskflow-backend-service 5000:5000

Използвани технологии и версии
Node.js (backend)
Express.js
React (Vite)
Docker
Docker Compose
Kubernetes (Docker Desktop)
ArgoCD
GitHub Actions
Git

Структура на проекта
frontend/
Съдържа React приложението (UI частта)
backend/
Съдържа Node.js API за управление на задачите
k8s/
Kubernetes manifests (deployments и services)
.github/
GitHub Actions CI pipeline
argocd-taskflow-app.yaml
ArgoCD Application конфигурация за deployment
docker-compose.yaml
Локално стартиране с Docker
README.md
Документация на проекта
