# Mood Gallery — React + TypeScript + Vite

Uma galeria de moods desenvolvida com **React, TypeScript e Vite**, com:

- Seleção de moods (`happy`, `calm`, `creative`, `introspective`)  
- Galeria de imagens com fallback automático  
- Mobile: carrossel/swiper com bullets de navegação  
- Desktop: grid de imagens simples  
- Modo claro/escuro (botão de sol/lua)

---

## Estrutura do projeto

Mood-Project/
├─ assets
├─ src/
│ ├─ components/
│ │ ├─ Header.tsx
│ │ ├─ MoodSelector.tsx
│ │ ├─ index.ts
│ │ └─ Gallery.tsx
│ ├─ data/
│ │ ├─ moods.ts <-- define arrays de imagens por mood
│ ├─ mocks/
│ │ ├─ swiper.d.ts
│ ├─ App.tsx
│ ├─ index.css
│ └─ main.tsx


---

## Como funciona a galeria

### Mobile (Swiper / Carrossel)

- Cada slide ocupa **100% da largura da tela**
- Altura padrão: **250px** (pode ajustar)
- Bullets de navegação automáticos
- Autoplay a cada 3 segundos
- Fallback de imagem caso alguma URL falhe

![MobileDarkMode](public\localhost_5173_(iPhone 14 Pro Max) (1).png)
![!MobileLightMode](public\localhost_5173_(iPhone 14 Pro Max).png)

### Desktop (Grid de imagens)

- Cards de **200x250px**  
- Layout em flex-wrap, gap de 10px  
- Fallback de imagem caso alguma URL falhe

![DesktopDarkMode](public\Captura de tela 2025-10-22 125411.png)
![DesktopLightMode](public\Captura de tela 2025-10-22 125423.png)

> 🔹 O Gallery recebe as imagens dinamicamente do `moods.ts`.  
> 🔹 Use `moods[selectedMood]` no `App.tsx` para enviar o array correto de URLs para o Gallery.

---
```const moods: { [key: string]: string[] } = {
  happy: [
    "/images/happy1.jpg",
    "/images/happy2.jpg"
  ],
  calm: [
    "/images/calm1.jpg",
    "/images/calm2.jpg"
  ],
  creative: [
    "/images/creative1.jpg",
    "/images/creative2.jpg"
  ],
  introspective: [
    "/images/introspective1.jpg",
    "/images/introspective2.jpg"
  ]
};

export default moods;
```

## Rodando o projeto

1. Instale dependências:

```bash
npm install


