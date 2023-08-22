/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export const content = ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {},
};
export const plugins = [
  flowbitePlugin
]
