import react from '@vitejs/plugin-react-swc';  // плагин для поддержки React с использованием SWC (Swift Compiler Collection)
import { fileURLToPath, URL } from 'node:url'; // функции и классы из модуля 'node:url', которые будут использоваться для работы с путями
import { defineConfig } from 'vite';           // функция для определения конфигурации Vite

// Определение конфигурации Vite
export default defineConfig({
    plugins: [react()],                       // массив плагинов, используемых в проекте. В данном случае используется только плагин react()
    resolve: {                                // объект настроек для разрешения путей
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),     // указывает на корневую директорию проекта (т.е., где находится сам файл vite.config.ts)
            '@': fileURLToPath(new URL('./src/', import.meta.url)), // указывает на папку ./src/
        },
    },
});