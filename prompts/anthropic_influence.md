# Design Specification: Portfolio Redesign (Anthropic Research Aesthetic)

## 1. Objective
Redesign the existing React/Tailwind portfolio to heavily reference the design language of the Anthropic Research page. The new aesthetic must be minimalist, starkly clean, and structured, utilizing a white background, black primary typography, and dark purple accents to replace the current global dark theme.

## 2. Global Design Language & Theme

* **Color Palette:**
    * **Background:** Pure White (`#FFFFFF` or Tailwind `bg-white`).
    * **Primary Text:** Near-black (`#111111` or Tailwind `text-gray-900`) for high contrast and readability.
    * **Accent Color:** Dark Purple (use the existing `#35224f` from the legacy design). This will replace the Anthropic black/orange accents for things like hover states, active navigation links, and subtle borders.
    * **Secondary Text/Borders:** Light to medium grays (e.g., `text-gray-500`, `border-gray-200`) for metadata, dates, and dividers.
* **Typography:**
    * Maintain the existing monospace fonts (`JetBrains Mono` and `Fira Code`) but utilize them in a more editorial, structured hierarchy. Use bold, large weights for headers and thin, readable weights for body text.
* **Structural Elements:**
    * Extensive use of whitespace (generous padding and margins).
    * Thin, crisp borders (1px solid lines) to divide sections, mimicking academic papers or brutalist web design.
    * No drop shadows, gradients, or rounded corners (use sharp `rounded-none` edges for a print-like feel).

## 3. Global File Updates

* **`index.css` & `App.jsx`:** * Remove the global `bg-[#35224f] text-white` classes. 
    * Apply a global white background and dark gray text.
* **`Navigation.jsx` & `Footer.jsx`:**
    * Convert from a solid/dark block to a minimalist transparent header/footer with a 1px bottom/top border (`border-gray-200`).
    * Active links should be indicated by the dark purple accent color (`text-[#35224f]`) and perhaps a bold font weight, rather than pill backgrounds.

## 4. Feature Specification: The Projects Page

This page requires a structural overhaul to match the Anthropic Research hover-reveal interaction.

* **Layout Structure:**
    * Implement a two-column grid layout on desktop screens (`grid-cols-12`).
    * **Left Column (e.g., col-span-7):** A vertical, scrollable list of projects.
    * **Right Column (e.g., col-span-5):** A fixed, sticky container that displays the image associated with the currently hovered project.
* **Left Column (Project List) Styling:**
    * Each project item should look like a research paper entry: structured, text-heavy, separated by thin 1px bottom borders.
    * Include metadata tags (e.g., "Hardware", "Robotics", "Year") in small, uppercase font.
    * **Interaction:** When the user's mouse enters a project item's bounding box, update a state variable tracking the `activeProject`. Add a subtle left border or text color change (using `#35224f`) to indicate the active state.
    * *Data Context:* Ensure the data structure accommodates your specific works seamlessly, such as the Krabbi sumo robot or custom KiCad embedded systems, allowing for title, abstract, and technical tags.
* **Right Column (Image Reveal) Styling:**
    * This container must stay fixed in the viewport as the left side scrolls (`sticky top-24`).
    * Display the image linked to the `activeProject` state.
    * **Missing Image Template:** If a project data object lacks an `imageUrl`, render a fallback template. This should be a clean, minimalist placeholder—for instance, a solid `#35224f` background with a subtle, stylized monospace text overlay reading "NO VISUAL DATA" or a minimalist geometric wireframe.
* **Mobile Behavior:**
    * The two-column layout should collapse on mobile. The images should move inline beneath the project titles, or the hover interaction can be disabled entirely in favor of a standard list view.

## 5. Secondary Pages Consistency
Ensure `AboutPage`, `ExperiencePage`, `ResumePage`, `AchievementsPage`, and `GoalsPage` adopt the exact same minimalist visual language. 
* Strip out any remaining card backgrounds, gradients, or heavy blocks of color.
* Use chronological lists separated by thin horizontal rules.
* Highlight key metadata (like dates, company names, or robotics sub-teams) with the dark purple accent to guide the eye through the text.