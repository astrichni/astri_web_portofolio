# Technical Specification - Portfolio Website

## Component Inventory

### shadcn/ui Components
- Button
- Card
- Input
- Badge
- Tabs
- Sheet (for mobile menu)
- Separator

### Custom Components
- Navbar (top navigation)
- Hero section
- ProjectCard
- BlogCard
- BookCard
- Footer
- AnimatedSection (scroll reveal wrapper)

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load fade-in | Framer Motion | AnimatePresence + initial/animate states | Low |
| Navbar slide down | Framer Motion | motion.nav with y animation | Low |
| Hero text stagger | Framer Motion | staggerChildren in parent | Medium |
| Floating illustration | Framer Motion | animate with repeat: Infinity | Low |
| Scroll reveal | Framer Motion | whileInView + viewport settings | Medium |
| Card hover lift | CSS/Framer Motion | whileHover transform | Low |
| Button hover scale | CSS | transform + transition | Low |
| Link underline slide | CSS | ::after pseudo-element animation | Low |
| Image zoom on hover | CSS | transform: scale with overflow hidden | Low |
| Tab switching | Framer Motion | AnimatePresence for content | Medium |
| Mobile menu slide | Framer Motion | Sheet component + motion | Medium |

## Animation Library Choices

**Primary: Framer Motion**
- React-native integration
- Declarative API
- Built-in scroll animations (whileInView)
- AnimatePresence for mount/unmount
- Gesture support (whileHover, whileTap)

**Secondary: CSS Transitions**
- Simple hover effects
- Link underlines
- Color transitions

## Project File Structure

```
app/
├── src/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── Books.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── ProjectCard.tsx
│   │   ├── BlogCard.tsx
│   │   ├── BookCard.tsx
│   │   └── AnimatedSection.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
├── components/ui/    (shadcn components)
├── tailwind.config.js
└── package.json
```

## Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  }
}
```

## Tailwind Configuration Extensions

```javascript
// Colors to add
colors: {
  pink: '#FF76CE',
  cream: '#FDFFC2',
  mint: '#94FFD8',
  blue: '#A3D8FF',
  background: '#F5F0E8',
}

// Font family
fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
}
```

## Performance Considerations

- Use `will-change: transform` on animated elements
- Lazy load images below the fold
- Use CSS for simple hover effects (GPU accelerated)
- Implement `prefers-reduced-motion` support
- Optimize Framer Motion with `layout` prop only when needed
