
# High-End Animationen & Scroll-Effekte

Verwandlung der Startseite in eine professionelle, immersive Experience mit modernen Scroll-Animationen, Parallax-Effekten und polished Micro-Interactions.

---

## Ubersicht der Effekte

**1. Framer Motion Scroll-Reveal System**
Ersetzen des bestehenden CSS-basierten `useScrollAnimation` durch Framer Motion's `motion` + `whileInView` fuer butterweiche, GPU-beschleunigte Animationen mit konfigurierbarer Verzoegerung und Stagger-Effekten.

**2. Hero-Sektion**
- Text-Elemente erscheinen nacheinander mit Blur-to-Sharp + Slide-Up Kombination
- Portrait schwebt sanft mit einem subtilen Parallax-Effekt beim Scrollen
- Bullet-Points staggern einzeln ein (nicht als Block)
- CTA-Buttons erscheinen mit Scale-Bounce

**3. Sektions-Headlines**
- Jede H2-Headline bekommt einen "Reveal"-Effekt: Text erscheint von unten mit leichtem Blur, der sich aufloest
- Untertexte folgen mit 200ms Verzoegerung

**4. Karten & Grid-Elemente**
- PainPoints: Staggered Slide-In von links/rechts (alternierend)
- Positioning Focus-Points: Scale-In mit Rotation (0.95 -> 1.0)
- SystemProcess Steps: Sequenzielles Einblenden entlang der Verbindungslinie
- Offer Cards: 3D-Tilt-Hover-Effekt (perspective transform bei Mausbewegung)
- Case Studies: Staggered Scale-Up mit leichtem Bounce

**5. Parallax-Hintergrund-Elemente**
- Subtile, langsam driftende Gold-Glow-Orbs im Hintergrund (2-3 Stueck, sehr dezent)
- Bewegen sich langsamer als der Scroll, erzeugen Tiefe
- Platziert hinter den Sektionen FinalCTA, AboutAlex und Offers

**6. Counter-Animation (Case Studies)**
- Bestehende Counter-Animation bleibt, wird aber mit einer sanfteren Ease-Out-Kurve versehen

**7. Scroll-Progress-Bar**
- Bestehende Bar bleibt, bekommt aber einen subtilen Glow-Effekt

---

## Technische Umsetzung

### Neuer Hook: `useMotionReveal`
Ein wiederverwendbarer Wrapper um Framer Motion's `useInView` + `motion.div`, der als Komponente `<Reveal>` exportiert wird. Parameter: direction (up/left/right), delay, duration, blur (boolean).

### Aenderungen pro Datei

**Neue Datei: `src/components/animations/Reveal.tsx`**
- `<Reveal>` Wrapper-Komponente mit Props: direction, delay, stagger, blur, scale
- Nutzt `motion.div` mit `whileInView` und `viewport={{ once: true, margin: "-100px" }}`

**Neue Datei: `src/components/animations/ParallaxOrbs.tsx`**
- 2-3 subtile Gold-Glow-Kreise mit `useScroll` + `useTransform` fuer Parallax
- Absolut positioniert, z-index -1, opacity 0.03-0.06

**Neue Datei: `src/components/animations/TiltCard.tsx`**
- 3D-Tilt-Effekt bei Hover (mouse tracking mit `onMouseMove`)
- `perspective(1000px) rotateX(Xdeg) rotateY(Ydeg)` Transform
- Subtiler Licht-Schimmer der der Maus folgt

**`src/components/sections/NewHero.tsx`**
- H1 mit Blur-Reveal (blur 10px -> 0px + translateY)
- Subtext, Bullets, CTAs mit gestaffelten Delays
- Portrait bekommt `useScroll` Parallax (langsames translateY beim Scrollen)

**`src/components/sections/PainPoints.tsx`**
- Ersetze manuelle IntersectionObserver durch `<Reveal>` Komponenten
- Karten staggern mit alternierenden Richtungen (links/rechts)
- Conclusion-Statement mit Scale-Reveal

**`src/components/sections/Positioning.tsx`**
- H2 mit Blur-Reveal
- Focus-Point-Karten mit staggered Scale-In

**`src/components/sections/SystemProcess.tsx`**
- Steps erscheinen sequenziell (Step 1 zuerst, dann 2, 3, 4)
- Verbindungslinie animiert sich von links nach rechts (scaleX 0 -> 1)

**`src/components/sections/Offers.tsx`**
- Karten mit `<TiltCard>` Wrapper fuer 3D-Hover
- Staggered Reveal von unten

**`src/components/sections/CaseStudies.tsx`**
- Ersetze CSS-basierte `.case-study-card` Animation durch Framer Motion
- Staggered Scale-Up mit 150ms Delay

**`src/components/sections/GoogleReviews.tsx`**
- Review-Karten mit staggered Fade-In von unten
- Rating-Zahl mit Counter-Animation (0.0 -> 5.0)

**`src/components/sections/AboutAlex.tsx`**
- Text-Block von links, Portrait von rechts (Slide-In)
- Subtile Parallax-Orbs im Hintergrund

**`src/components/sections/WhyNotFree.tsx`**
- Gesamte Box mit Scale-Reveal (0.95 -> 1.0)
- Benefits-Badges staggern ein

**`src/components/sections/OneOnOneSection.tsx`**
- Pricing-Cards mit staggered Reveal
- 3D-Tilt auf Hover

**`src/components/sections/DoneForYouSection.tsx`**
- Services-Liste staggert einzeln ein
- Email-Form mit Slide-Up

**`src/components/sections/FinalCTA.tsx`**
- H2 mit dramatischem Blur-Reveal
- Buttons mit Scale-Bounce
- Hintergrund-Glow pulsiert sanft

**`src/components/FAQ.tsx`**
- Headlines von links einsliden
- FAQ-Items staggern ein
- Rechte Spalte mit Slide-In von rechts

**`src/pages/Index.tsx`**
- `<ParallaxOrbs />` als Hintergrund-Layer einfuegen

### Keine neuen Abhaengigkeiten noetig
Framer Motion ist bereits installiert (`framer-motion ^12.23.22`).

---

## Zusammenfassung

| Effekt | Sektionen |
|---|---|
| Blur-to-Sharp Reveal | Hero H1, Section Headlines, FinalCTA |
| Staggered Slide-Up | PainPoints, Offers, Reviews, Services |
| 3D Tilt on Hover | Offer Cards, 1:1 Pricing Cards |
| Parallax Scroll | Hero Portrait, Background Orbs |
| Scale-Bounce | CTA Buttons, WhyNotFree Box |
| Sequential Reveal | SystemProcess Steps, Case Studies |
| Counter Animation | Case Studies KPIs, Google Rating |
| Animated Line | SystemProcess Connection Line |

Alle Animationen sind `once: true` (feuern nur einmal), GPU-beschleunigt und respektieren `prefers-reduced-motion`.
