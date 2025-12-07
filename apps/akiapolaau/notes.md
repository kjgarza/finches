Based on the analysis of the six tutorial videos for **cetesdirecto**, here is the comprehensive breakdown of the web application's structure, content, and features, followed by a Product Requirements Document (PRD) for a revamped version.

### 1. Webapp Information Architecture (IA)

The application follows a secure transactional structure divided into a public-facing onboarding flow and a private secure dashboard.

* **Public Portal**
    * Home (Landing Page)
    * **"Abre tu cuenta" (Sign Up Flow)**
        * Step 1: User Credentials & Security
        * Step 2: Personal Information (CURP validation)
        * Step 3: Banking Information
        * Step 4: Contract Signing (Express vs. e.firma)
* **Secure Dashboard (Post-Login)**
    * **Main Navigation**
        * **Portafolio** (Portfolio Summary)
        * **Invertir** (Invest)
            * Purchase Instrument Selection
            * Configure Order (Amount, Date, Payment Method)
        * **Retirar** (Withdraw - *Implied as counterpart to depositing, specifically "Instrucciones al vencimiento" handles future withdrawals*)
        * **Ahorro Recurrente** (Recurring Savings)
            * Configuration (Frequency, Amount)
        * **Movimientos / Instrucciones**
            * **Instrucciones al Vencimiento** (Maturity Instructions)
            * **Envío de Recursos** (Deposit Instructions/Bank Info)
    * **Account Settings**
        * Bank Account Management
        * Security Settings

---

### 2. Webapp Content Inventory Per Page

#### **Page: Registration (Abre tu cuenta)**
* **Header:** Steps indicator.
* **Form Sections:**
    * **Credentials:** Name, Email, Username, Password, Secret Question/Answer, Security Questions (2).
    * **Personal Data:** CURP input, Entity of birth, Gender, Date of Birth, RFC (with generic logic for those without homoclave).
    * **Bank Data:** Debit Card Number or CLABE (18 digits), Bank Name.
    * **First Investment (Optional):** "Activar Ahorro Recurrente" checkbox, Amount field, Frequency selector.
    * **Beneficiaries:** Name, Relationship, Percentage.
* **Legal:** Contract preview, "Acepto" digital signature button.

#### **Page: Invertir (Invest)**
* **Instrument Selector:** List of products (Cetes, Bonddia, Udibonos, etc.) and available terms (28 days, 3 months, etc.).
* **Auction Selector:** Date picker for upcoming auctions.
* **Investment Details:**
    * Input field: "Monto" (Amount).
    * Payment Method Toggle: "Envío de recursos" (SPEI) vs "Domiciliación" (Direct Debit).
* **Reinvestment Option:** Checkbox for "Reinvertir automáticamente al vencimiento".
* **Action:** "Aceptar" / "Confirmar" button.

#### **Page: Ahorro Recurrente (Recurring Savings)**
* **Configuration Form:**
    * Frequency Selector: Semanal (Weekly), Quincenal (Bi-weekly), Mensual (Monthly).
    * Amount Input: Range validation (100 - 12,000 MXN).
    * Destination Information: Explanation that funds go to Cetes 28 days.
    * Reinvestment Toggle: Option to reinvest in Cetes or keep in Bonddia upon maturity.
    * Long-term Option (UDIs): Calculator for UDI titles vs. approximate MXN amount.
* **Status:** Active/Inactive toggle.

#### **Page: Instrucciones al Vencimiento (Maturity Instructions)**
* **Portfolio Table:** Lists current active investments holding securities.
* **Action Menu (Per investment):**
    * Option 1: Reinvertir capital + intereses (Compound).
    * Option 2: Reinvertir capital, retirar intereses.
    * Option 3: Retirar todo (Deposit to bank account).
    * Option 4: Switch instrument (Buy a different product).
    * Option 5: Move to Bonddia (Liquid fund).

#### **Page: Envío de Recursos (Deposit Info)**
* **SPEI Instructions:**
    * Bank Name: NAFIN / Nacional Financiera.
    * Beneficiary Name: User's full name.
    * CLABE/Account: User's cetesdirecto contract number.
* **Check Deposit Instructions:**
    * Check payable to: Nacional Financiera SNC.
    * Reference numbers (Convention ID, Reference ID).

---

### 3. Webapp Functionality & Feature Inventory

1.  **Identity Verification (Renapo Integration):** Real-time validation of personal data against the National Population Registry using CURP.
2.  **Express Contracting:** Allows immediate account opening with a deposit limit (3,000 UDIS) without visiting a branch.
3.  **Investment Calculator:** (In Recurring Savings) Converts UDI titles to estimated Pesos.
4.  **Domiciliación (Direct Debit):** Automated pulling of funds from the user's linked bank account on the auction date.
5.  **SPEI Reception:** Unique STPS connection allowing the user to transfer funds from their bank app to their Cetes account using their contract number as the CLABE.
6.  **Auto-Invest (Recurring):** "Set and forget" logic for periodic investing.
7.  **Auto-Reinvest (Compound Interest):** Automatic rolling over of capital and interests into new 28-day Cetes at maturity.
8.  **Maturity Logic Engine:** allowing complex "if-this-then-that" rules for expiring investments (e.g., "Take interest, reinvest principal").

---

### 4. PRD: Cetesdirecto  (Revamp)

**Document Title:** Product Requirements Document - Cetesdirecto "EasyInvest" Revamp
**Version:** 2.0
**Status:** Draft

Okay, here's a new Product Requirements Document (PRD) focused exclusively on improving the UI and style of Cetesdirecto, while retaining all existing functionality.

---

**Document Title:** Product Requirements Document - Cetesdirecto "Visual Refresh" (UI/Style Focus)
**Version:** 1.0
**Status:** Draft

#### **1. Executive Summary**
The Cetesdirecto platform currently provides robust financial functionality but suffers from an outdated and inconsistent user interface. This PRD outlines requirements for a comprehensive visual refresh, aiming to create a modern, intuitive, and aesthetically pleasing experience that enhances user trust and engagement, without altering any underlying features or information architecture. The goal is to improve usability through better visual hierarchy, clearer navigation, and a more contemporary design language.

#### **2. User Problem / Opportunity**
* **Problem:** The current UI can appear cluttered, uses inconsistent styling, and lacks modern design elements, potentially leading to a perception of complexity or outdatedness. This may hinder new user adoption and make the platform feel less trustworthy compared to modern fintech alternatives.
* **Opportunity:** A significant UI/style overhaul can improve the perceived quality, ease of use, and trustworthiness of the platform, enhancing the overall user experience and potentially increasing user satisfaction and retention, even with existing features.

#### **3. UI/Style Design Principles**
All UI/style changes must adhere to the following principles:

* **Clarity:** Information should be easy to scan and understand.
* **Consistency:** Elements (buttons, forms, typography, colors) should look and behave uniformly across the entire application.
* **Modernity:** Align with contemporary web and mobile design trends (e.g., flat design principles, subtle shadows, clean typography).
* **Trustworthiness:** Design choices should evoke reliability, security, and professionalism.
* **Accessibility:** Ensure compliance with basic accessibility standards (e.g., sufficient color contrast, logical tab order).
* **Responsiveness:** All designs must be fully responsive, providing an optimal experience on desktop, tablet, and mobile devices.

#### **4. UI/Style Requirements**

**4.1. Global Design System & Components**
* **Requirement:** Establish a consistent design system for all UI elements.
    * **Colors:** Define a primary brand color palette (main blue/green), secondary accent colors (for success/warning/error states), and a neutral palette for backgrounds and text.
    * **Typography:** Define a clear typographic scale (headings, body text, captions) and a maximum of two modern, legible sans-serif font families (e.g., Montserrat, Open Sans, Lato).
    * **Icons:** Implement a consistent icon set (e.g., Material Design, Font Awesome Pro).
    * **Buttons:** Standardize button styles (primary, secondary, tertiary, ghost, disabled states) with consistent sizing, padding, and hover/active states.
    * **Forms:** Redesign all input fields, checkboxes, radio buttons, and dropdowns for a clean, modern look with clear focus states and validation indicators.
    * **Cards/Containers:** Standardize the appearance of all informational cards and content containers with consistent borders, shadows, and background colors.
    * **Modals/Dialogs:** Standardize the visual presentation of all modal windows and pop-up dialogs.

**4.2. Navigation & Layout**
* **Requirement:** Improve the visual clarity and consistency of all navigation elements.
    * **Top Navigation (Header):** Redesign for a cleaner look, clearer logo placement, and intuitive access to user profile/settings.
    * **Side Navigation (Dashboard):** If present, redesign with clear active states, consistent icon usage, and legible text.
    * **Tab Navigation:** Standardize the look and feel of all tabbed interfaces (e.g., "Invertir" product selector, "Ahorro Recurrente" frequency options).
* **Requirement:** Optimize overall page layouts for readability and information hierarchy.
    * Utilize white space effectively to reduce visual clutter.
    * Implement consistent grid systems for content arrangement.
    * Prioritize key information with larger typography or more prominent placement.

**4.3. Data Visualization & Tables**
* **Requirement:** Enhance the presentation of numerical data and tables.
    * **Tables:** Redesign all data tables (e.g., "Instrucciones al Vencimiento" table, portfolio summary) with clean borders, clear headers, alternating row colors (optional, for readability), and consistent text alignment.
    * **Graphs/Charts:** For any existing data visualizations, update their style to be modern, clean, and easily interpretable, using the defined color palette.

**4.4. Illustrations & Imagery**
* **Requirement:** Introduce modern, consistent illustrations and imagery where appropriate to enhance user engagement.
    * Develop a consistent style for any new illustrations (e.g., onboarding screens, empty states).
    * Ensure any photographic elements are high-quality and relevant.

**4.5. Micro-interactions & Animations**
* **Requirement:** Introduce subtle, tasteful micro-interactions and animations to improve feedback and delight.
    * **Hover States:** Consistent hover effects for interactive elements (buttons, links, cards).
    * **Loading States:** Visually appealing loading indicators for data fetching or long processes.
    * **Form Validation:** Clear and immediate visual feedback for valid/invalid form inputs.
    * **Transitions:** Smooth transitions for modal openings, page changes (if applicable), or content reveals.

#### **5. Out of Scope**
* Changes to the underlying business logic or core functionalities.
* Modification of existing data models or API integrations.
* Addition or removal of any features.
* Changes to the information architecture or navigation flow (only visual presentation).



---