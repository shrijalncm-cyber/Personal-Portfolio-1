# Portfolio Wireframe: Shrijal Paudel

## 1. Design System & Aesthetics
- **Theme**: Modern, Minimalist, Professional yet Creative.
- **Color Palette**:
  - Primary: Deep Charcoal / Black (`#1a1a1a` or similar dark theme base).
  - Secondary: Crisp White (text).
  - Accent: Subtle Blue or Teal (representing corporate/tech trust) - e.g., `#3b82f6` (Tailwind blue-500) for active states/buttons.
  - Background: Light gray/white for light mode or deep slate for dark mode (user preference: comfortable to the eye). Let's aim for a "Dark Mode" default for that premium feel, or a very clean "Light Mode" with soft shadows.
- **Typography**:
  - Headings: Sans-serif, bold, tight tracking (e.g., Inter or Geist Sans).
  - Body: Readable sans-serif, relaxed leading.
- **Animations (Framer Motion)**:
  - **Scroll-triggered**: Elements fade in and slide up (`y: 20 -> 0`, `opacity: 0 -> 1`) as the user scrolls.
  - **Microinteractions**: Buttons scale slightly on hover (`scale: 1.05`), links have an underline that expands from center.
  - **Hero Animation**: Staggered text reveal for name and role.
  - **Page Transitions**: Smooth opacity fade between sections if navigating.

---

## 2. Navigation (Sticky Header)
- **Position**: Fixed top, full width.
- **Background**: Glassmorphism effect (`backdrop-blur-md`, `bg-background/80`).
- **Logo (Left)**: Text-based "SP" or "Shrijal." in bold.
  - *Interaction*: Hover changes color or adds a small dot.
- **Links (Right/Center)**:
  - Home
  - Experience (Anchor to #experience)
  - Education (Anchor to #education)
  - Projects (Anchor to #projects)
  - Contact (Anchor to #contact)
  - *Mobile*: Hamburger menu that opens a full-screen or side drawer with staggered menu item entry.
- **CTA Button**: "Download CV" (Optional, implies professional intent).

---

## 3. Hero Section
- **Height**: `min-h-screen` or `min-h-[90vh]`.
- **Layout**: Centered text or Split (Text Left, Abstract/Image Right).
- **Content**:
  - **Greeting**: "Hello, I'm" (Small, accent color).
  - **Name**: "Shrijal Paudel" (H1, Large, Bold, Staggered character animation).
  - **Role**: "Deputy Manager at Nepal Can Buy" (H2, Medium weight).
    - *Animation*: Typewriter effect or fade-in up.
  - **Tagline**: "Driving Operational Excellence & Business Innovation."
  - **Actions**:
    - Primary Button: "View Experience" (Scrolls to Experience).
    - Secondary Button: "Contact Me" (Outline style).
- **Visuals**:
  - Background: Subtle animated gradient mesh or particles (nothing too distracting, just slow movement).
- **Scroll Indicator**:
  - Animated arrow or mouse icon at the bottom bouncing up and down.

---

## 4. About Summary
- **Section ID**: `about`
- **Layout**: 2-Column Grid (Text + Visual).
- **Content (Left)**:
  - "I am a strategic leader with a focus on Business Model Innovation and Logistics."
  - "Currently leading operations at Nepal Can Buy, a subsidiary of Nepal Can Group."
  - "My journey involves scaling platforms, optimizing workflows, and building integrated ecosystems."
- **Visual (Right)**:
  - A clean, stylized portrait or a "Tech/Logistics" abstract illustration (SVG).
  - *Interaction*: Image tilts or parallax effect on mouse move.

---

## 5. Experience Timeline (The Core)
- **Section ID**: `experience`
- **Structure**: Vertical line down the center (or left for mobile). Nodes on the line represent roles.
- **Animation**: The line draws itself as you scroll. Nodes "pop" in. Cards slide in from left/right.

### Timeline Items (Newest First)
1.  **Deputy Manager** @ Nepal Can Buy (Nepal Can Group)
    - *Date*: Nov 2025 – Present
    - *Location*: Kathmandu District, Nepal
    - *Details*: Promoted to lead the subsidiary. Focus on operational launch, planning, and execution.
    - *Tags*: Leadership, Strategy, Operations.
    - *Icon*: Briefcase / Upward Arrow.

2.  **Executive Assistant** @ Nepal Can Buy
    - *Date*: Aug 2025 – Nov 2025 (4 mos)
    - *Details*: Transferred from Nepal Can Move. Key role in operational launch. Developed foundational frameworks. Coordinated with sister companies (Logistics). Oversaw GTM strategy for vendors.
    - *Tags*: Coordination, Framework Design, GTM Strategy.

3.  **Operations Officer** @ Nepal Can Move
    - *Date*: Dec 2024 – Aug 2025 (9 mos)
    - *Details*: (Assume progression/impact based on role). Managed daily logistics operations.
    - *Tags*: Logistics, Team Management.

4.  **Operation Associate** @ Nepal Can Move
    - *Date*: Jun 2024 – Dec 2024 (7 mos)
    - *Details*: Supported logistics workflows.
    - *Tags*: Support, Workflow Execution.

5.  **Intern** @ Nepal Can Move
    - *Date*: Mar 2024 – Jun 2024 (4 mos)
    - *Details*: Entry into the ecosystem. Learning the ropes of logistics.

---

## 6. Education
- **Section ID**: `education`
- **Layout**: Simple Cards or List View.
- **Content**:
  1.  **Islington College** (2020 – 2023)
      - Degree: Bachelor's in Information Technology (Computing).
      - *Icon*: Graduation Cap.
  2.  **KMC** (2018 – 2020)
      - Degree: High School.

---

## 7. Skills & Expertise
- **Layout**: "Bento Grid" style or Floating Pills.
- **Categories**:
  - **Core**: Business Model Innovation, Leadership, Operations Management.
  - **Technical/Functional**: Logistics, System Frameworks, Wireframing, Vendor Acquisition.
  - **Tools**: (Implied: Office Suite, Project Management Tools, etc.).
- **Interaction**: Hovering over a skill card highlights it and slightly dims others.

---

## 8. Projects & Volunteering (`/projects`)
- **Layout**: Filterable Masonry Grid (Categories: "Business", "Volunteering", "STEM").
- **Cards (Tilt Effect)**:
    - **BGyan (USAID Project)**: Collaborated with 200+ SMEs.
    - **Pitch Date With Angels**: Startup pitch event hosting.
    - **STEM Club (Kanjirowa)**: Vice-President, Built a drone, Nepal Robotics Project.
    - **Interact Club (Little Angels)**: Assistant to President, Event management.

---

## 9. Footer / Contact
- **Section ID**: `contact`
- **Layout**: Split screen (Info vs Form).
- **Contact Info**:
    - Email: `shrijalp2016@gmail.com`
    - Phone: `+977 986 1611934`
    - Socials: LinkedIn (placeholder), GitHub (placeholder).
- **Form**: Functional look with validation animations.
- **Background**: Slightly darker than the rest of the page to signify the end.

---

## 10. Technical Requirements
- **Framework**: Next.js (App Router).
- **Styling**: Tailwind CSS.
- **Animation Library**: `framer-motion`.
- **Icons**: `lucide-react`.
- **Fonts**: `Geist Sans` (for modern feel).
- **Responsiveness**: Fully responsive mobile-first design. Stacked timeline on mobile.
