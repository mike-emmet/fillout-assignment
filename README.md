# Fillout Assignment

## Description
This project is a TypeScript application that provides functionality for filtering forms responses. It includes controllers, services, utilities, constants, and configuration files.

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm run dev`.

## Folder Structure
```
src/
│
├── controller/
│   └── forms.ts
│
├── services/
│   └── fillout.service.ts
│
├── typescript/
│   ├── base.ts
│   ├── fillout.ts
│   └── forms.ts
│
├── utils/
│   └── parsers.ts
│
├── constant.ts
│          
├── .env.example (Rename .env.example to .env and fill in the environment variable values)
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
```

## Usage
- **Controllers:** `forms.ts` contains controller logic for forms.
- **Services:** `fillout.service.ts` contains services for filling out forms.
- **Typescript:** `base.ts`, `fillout.ts`, and `forms.ts` provide TypeScript definitions.
- **Utils:** `parsers.ts` includes utility functions for parsing data.
- **Constants:** `constant.ts` contains constant values used in the application.

## Environment Variables
- Rename `.env.example` to `.env`.
- Fill in the environment variable values required by your application.