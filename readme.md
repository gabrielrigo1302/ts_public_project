# Como Criar um Projet.ts e Publicar:

- Criar um projeto (npm init -y);
- Criar a pasta *__src__*;
- Criar um arquivo *__tsconfig.json__*:

```typescript
{
  "compilerOptions": {
    "target": "es5",   // Ensure compatibility with older Node.js versions
    "module": "commonjs", // Use CommonJS modules for compatibility
    "outDir": "lib",     // Compile output directory
    "strict": true,      // Enable strict type checking
    "noImplicitAny": true, // Disallow implicit `any` type usage
    "esModuleInterop": true, // Allow for modern ES module imports
    "declaration": true,  // Generate type declaration files (.d.ts)
    "allowSyntheticDefaultImports": true // Allow importing default exports without curly braces
  },
  "include": ["src/**/*"] // Include all TypeScript files in the src directory
}
```

- Instalar a lib *__tsc__* (npm install -g typescript);
- Criar um scripts *__build__* no package.json:

```typescript
  "scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- Adicionar no package.json:

```typescript
{
  "name": "...",
  "version": "1.0.0",
  "description": "...",
  "main": "lib/index.js",
  "types": "lib/index.d.ts", // Specify the location of type declaration files
  "keywords": [...],
  "scripts": {
    "build": "tsc"
  }
}
```

- rodar o *__npm run build__*
- rodar o *__npm publish__* (requer conta no npm)
- O repositório está pronto para importar em outros *__node_modules__*