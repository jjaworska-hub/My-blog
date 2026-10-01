/* Case studies imported from the previous portfolio. Edit freely; text is English only. */
const CASES = [
 {
  "id": "parcel-intake",
  "num": "01",
  "kicker": "Case Study / Enterprise UX",
  "title": "Parcel Intake",
  "dek": "Redesigning parcel intake workflows for postal employees working under time pressure, away from the computer, using scanners and handling exceptions in real branch conditions.",
  "shot": "SCREENSHOT — PARCEL INTAKE FLOW",
  "thumb": "img/cases/img1.jpg",
  "tags": [
   "Enterprise UX",
   "Field research",
   "Workflow design",
   "Logistics"
  ],
  "meta": [
   {
    "label": "Role",
    "val": "UX / Product Designer"
   },
   {
    "label": "Context",
    "val": "Nationwide postal operations"
   },
   {
    "label": "Focus",
    "val": "Parcel intake, scanners, exceptions"
   },
   {
    "label": "Methods",
    "val": "Field research, workflow design, prototyping"
   }
  ],
  "blocks": [
   {
    "type": "visual",
    "img": "img/cases/img1.jpg",
    "alt": "Recreated mockup of the parcel intake queue, showing incoming loads with lock/unlock status, arrival times and document numbers",
    "label": "Product screenshot — scan & intake queue",
    "note": "Recreated interface mockup — not a screenshot of the production system."
   },
   {
    "type": "text",
    "h": "Context",
    "p": [
     "Postal employees receive loads while the work around them continues: one load arrives, another has to leave, parcels are moved physically and employees often work away from the computer using a handheld scanner.",
     "The project focused on redesigning the parcel intake workflow for a nationwide postal network, with the goal of making the process faster, clearer and safer for employees working under time pressure."
    ]
   },
   {
    "type": "text",
    "h": "The real problem",
    "p": [
     "At first, the project looked like a screen redesign. In reality, it was a workflow problem.",
     "Employees were not sitting calmly at a desk. They were scanning parcels, checking loads, moving between the workplace and the computer, and handling exceptions while operational work continued around them."
    ],
    "quote": "How do you design software for people who cannot stop working?"
   },
   {
    "type": "text",
    "h": "Discovery in the field",
    "p": [
     "Documentation did not fully explain the process, because there was not one single process. Different branches worked differently and had developed their own habits around the limitations of the old system.",
     "I organized field research in friendly branches and later in a representative branch recommended by the client. I also brought analysts and the Product Owner to observe the process with me, because seeing the real workflow changed how we understood the problem."
    ],
    "cards": [
     {
      "h": "Branch research",
      "p": "Observing how employees actually received and verified loads."
     },
     {
      "h": "Process validation",
      "p": "Comparing different branches to identify shared patterns."
     },
     {
      "h": "Logistics perspective",
      "p": "Visiting a logistics environment to understand how loads were received at a larger scale."
     }
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img2.jpg",
    "alt": "Recreated mockup of item-level scan detail, showing scanned status, a flagged duplicate number and an undefined object type",
    "label": "Product screenshot — item-level scan detail",
    "note": "Recreated interface mockup — status icons show scanned, duplicate and undefined-type items."
   },
   {
    "type": "challenges",
    "h": "Six design challenges",
    "items": [
     {
      "num": "01",
      "title": "Communicating errors without interrupting scanning",
      "problem": "Employees were often away from the computer, so blocking messages could interrupt physical work.",
      "decision": "Warnings and errors were accumulated and shown when the employee returned to the workstation.",
      "why": "The system supported the rhythm of work instead of forcing employees to stop after every issue."
     },
     {
      "num": "02",
      "title": "Handling large lists without slowing the system",
      "problem": "Loads could include large manifests, and showing too much data at once could hurt performance and readability.",
      "decision": "I designed the workflow to show one list level at a time, using progressive reveal."
     },
     {
      "num": "03",
      "title": "Making scanned status obvious",
      "problem": "In the old interface, scanned items were hard to distinguish from unscanned ones.",
      "decision": "I redesigned the status presentation and added a clear counter of scanned items."
     },
     {
      "num": "04",
      "title": "Preventing undefined parcels from moving forward",
      "problem": "Parcels without a defined type could not continue to later branch processes.",
      "decision": "These items were highlighted after scanning so employees could edit them before moving forward."
     },
     {
      "num": "05",
      "title": "Supporting duplicate shipment numbers",
      "problem": "Two physical parcels could have the same number, but different destinations or database records.",
      "decision": "Duplicates were marked, moved higher in the list and supported by matching with the main database."
     },
     {
      "num": "06",
      "title": "Navigating nested packages with a simple scanner",
      "problem": "Users needed to scan contents inside packages without returning to the computer.",
      "decision": "Double-scanning a package code allowed users to enter and exit the package level, supported by sound signals."
     }
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img3.jpg",
    "alt": "Recreated mockup of the surplus-handling form with an add-surplus modal open",
    "label": "Product screenshot — surplus handling",
    "note": "Recreated interface mockup showing the surplus-item flow referenced in challenge 05."
   },
   {
    "type": "pullquote",
    "quote": "Support the physical workflow, not just the screen workflow."
   },
   {
    "type": "text",
    "h": "",
    "p": [
     "The interface had to respect the reality of parcel handling: movement, time pressure, scanners, exceptions and the fact that employees could not constantly return to the workstation."
    ]
   },
   {
    "type": "beforeafter",
    "h": "Workflow design",
    "beforeH": "Old workflow",
    "beforeP": "Scan items → lose overview → return to unclear screen → manually interpret issues → risk restarting or missing exceptions.",
    "afterH": "New workflow",
    "afterP": "Scan items → continue work → review collected warnings → resolve duplicates and missing items → confirm with summary report."
   },
   {
    "type": "text",
    "h": "Outcome",
    "p": [
     "The redesigned workflow improved clarity around scanned items, missing items, duplicates, surplus items and nested package handling. It made the process more aligned with how employees physically worked in branches."
    ],
    "cards": [
     {
      "h": "Less interruption",
      "p": "Scanning could continue without constant blocking messages."
     },
     {
      "h": "Better overview",
      "p": "Statuses and final summaries were clearer."
     },
     {
      "h": "More realistic workflow",
      "p": "The system supported scanner-based work away from the computer."
     }
    ]
   },
   {
    "type": "text",
    "h": "What I learned",
    "p": [
     "Operational software cannot be designed only from documentation. The most important insights came from watching how people actually moved, scanned, checked and improvised during real work."
    ],
    "quote": "In enterprise UX, the workflow often lives outside the screen."
   },
   {
    "type": "text",
    "h": "What I would do differently",
    "p": [
     "If I approached this project again, I would define success metrics earlier, such as time needed to complete parcel intake, number of unresolved exceptions, number of manual corrections and employee confidence before and after rollout."
    ]
   }
  ],
  "category": "desktop"
 },
 {
  "id": "invoice-workflow",
  "num": "03",
  "kicker": "Case Study / Enterprise Forms",
  "title": "Invoice Workflow",
  "dek": "Redesigning invoice workflows to reduce manual typing through receipt search, barcode scanning, local customer records and transparent KSeF states.",
  "shot": "SCREENSHOT — INVOICE COUNTER FLOW",
  "thumb": "img/cases/img9.jpg",
  "tags": [
   "Data reuse",
   "Forms",
   "Privacy"
  ],
  "meta": [
   {
    "label": "Role",
    "val": "UX / Product Designer"
   },
   {
    "label": "Context",
    "val": "Postal branch counter system"
   },
   {
    "label": "Focus",
    "val": "Invoices, receipts, KSeF, customer records"
   },
   {
    "label": "Methods",
    "val": "Research, workflow design, validation"
   }
  ],
  "blocks": [
   {
    "type": "visual",
    "img": "img/cases/img9.jpg",
    "alt": "Recreated mockup of the invoice search screen, showing search filters on the left and a results list with KSeF status per invoice on the right",
    "label": "Product screenshot — invoice search & results",
    "note": "Recreated interface mockup — not a screenshot of the production system."
   },
   {
    "type": "text",
    "h": "Context",
    "p": [
     "Postal employees issue invoices directly at branch counters while customers are waiting. The legacy process required repetitive manual work: typing long receipt numbers, entering customer data repeatedly and handling correction invoices when even small mistakes appeared.",
     "At a counter, slow software affects not only the employee. It affects the customer in front of them and the queue behind them."
    ]
   },
   {
    "type": "text",
    "h": "The real problem",
    "p": [
     "The deeper problem was that employees were manually entering information that already existed somewhere in the system: receipt numbers, customer data, invoice details and correction paths."
    ],
    "quote": "How can we help employees issue invoices using information the system already knows?"
   },
   {
    "type": "text",
    "h": "Discovery",
    "p": [
     "To understand the process, I combined field research in branches, client requirements, government KSeF guidelines, analysis of other invoicing tools and technical discussions about CBK and KSeF integration.",
     "This was not a project where user research alone was enough. The workflow had to work for employees, meet business requirements, respect data privacy concerns and fit into a legally constrained invoicing environment."
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img10.jpg",
    "alt": "Recreated mockup of the receipt item selection modal, showing a checklist of billable items instead of manual number entry",
    "label": "Product screenshot — selecting receipt items to invoice",
    "note": "Recreated interface mockup illustrating the shift from manual typing to selecting scanned receipt items."
   },
   {
    "type": "text",
    "h": "What we learned",
    "p": [],
    "cards": [
     {
      "h": "Employees were typing too much",
      "p": "Customers sometimes brought dozens of receipts at the end of the month, and employees had to type long numbers one by one."
     },
     {
      "h": "Customers did not always have receipts",
      "p": "Some customers requested invoices for older receipts they no longer physically had."
     },
     {
      "h": "Repeated customer data created risk",
      "p": "Every repeated entry increased the risk of typos and correction invoices."
     },
     {
      "h": "KSeF introduced delayed states",
      "p": "Invoice processing could take time, but customers could not wait at the counter for hours."
     }
    ]
   },
   {
    "type": "challenges",
    "h": "Design challenges",
    "items": [
     {
      "num": "01",
      "title": "Finding receipts without requiring paper",
      "problem": "",
      "decision": "I designed receipt database search, allowing employees to find receipts from a selected period and issue invoices based on system records."
     },
     {
      "num": "02",
      "title": "Replacing manual typing with scanning",
      "problem": "",
      "decision": "We added barcodes to receipts and enabled scanning. Feedback from employees: “Finally. This should have been done a long time ago.”"
     },
     {
      "num": "03",
      "title": "Reducing repeated customer data entry",
      "problem": "",
      "decision": "I designed local customer records that branches could create and reuse. Entering NIP could autofill invoice data."
     },
     {
      "num": "04",
      "title": "Balancing convenience with privacy",
      "problem": "",
      "decision": "Customer records stayed local to the branch, balancing speed with safer handling of customer information."
     },
     {
      "num": "05",
      "title": "Designing around KSeF delays",
      "problem": "",
      "decision": "The system showed whether an invoice had its KSeF counterpart and allowed employees to print proof immediately."
     },
     {
      "num": "06",
      "title": "Making important actions discoverable",
      "problem": "",
      "decision": "After validation, we changed the visual treatment of a button users did not recognize as clickable."
     }
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img11.jpg",
    "alt": "Recreated mockup of the full invoice issuing form, showing receipt basis, invoice data with KSeF status fields, buyer details autofilled from a NIP number, and invoice line items",
    "label": "Product screenshot — invoice form with NIP autofill and KSeF status",
    "note": "Recreated interface mockup using fictional company data — not a screenshot of the production system."
   },
   {
    "type": "beforeafter",
    "h": "Workflow improvements",
    "beforeH": "Before",
    "beforeP": "Manual receipt numbers, repeated customer data, unclear delayed states and higher typo risk.",
    "afterH": "After",
    "afterP": "Receipt search, barcode scanning, local records, NIP autofill, visible KSeF status and immediate printout."
   },
   {
    "type": "text",
    "h": "KSeF trade-off",
    "p": [
     "We could not make KSeF processing instant through interface design. But we could make the system state visible and help employees explain what was happening."
    ],
    "quote": "When a system cannot be immediate, it should at least be transparent.",
    "cards": [
     {
      "h": "Constraint",
      "p": "KSeF processing could take time."
     },
     {
      "h": "User need",
      "p": "The customer could not wait at the counter."
     }
    ]
   },
   {
    "type": "text",
    "h": "Outcome",
    "p": [
     "The redesigned workflow reduced repetitive manual work and made invoice issuing faster and more reliable for employees at postal counters."
    ],
    "cards": [
     {
      "h": "Less manual typing",
      "p": "Employees could scan receipts instead of typing long numbers."
     },
     {
      "h": "Lower typo risk",
      "p": "Reusable customer data reduced repeated entry."
     },
     {
      "h": "More transparency",
      "p": "KSeF status helped employees understand delayed processing."
     }
    ]
   },
   {
    "type": "pullquote",
    "quote": "Never ask users to re-enter information the system already knows."
   },
   {
    "type": "text",
    "h": "What I learned",
    "p": [
     "Repetition is a design smell. If employees have to type the same kind of information repeatedly, the system is probably failing them."
    ]
   }
  ],
  "category": "desktop"
 },
 {
  "id": "naval-defense",
  "num": "05",
  "kicker": "Case Study / Design System / Mission-Critical UX",
  "title": "Naval Defense UI",
  "dek": "Creating a complete design system for confidential defense systems used in low-light cabins, on moving vessels, with trackball-like input devices.",
  "shot": "NDA — ABSTRACT SYSTEM VISUAL",
  "thumb": "img/cases/img16.jpg",
  "tags": [
   "Design systems",
   "NDA",
   "Human factors"
  ],
  "nda": "Due to security restrictions, real screens, operational workflows, system details and sensitive data are not shown.",
  "meta": [
   {
    "label": "Role",
    "val": "UX/UI Designer / Design System Designer"
   },
   {
    "label": "Context",
    "val": "Confidential defense systems"
   },
   {
    "label": "Users",
    "val": "Naval personnel"
   },
   {
    "label": "Validation",
    "val": "Lab and onboard testing"
   }
  ],
  "blocks": [
   {
    "type": "visual",
    "img": "img/cases/img16.jpg",
    "alt": "Abstracted design system sheet for a naval interface, showing buttons, status states, controls, trackball target sizing, an abstract radar view, a generic data readout table, color foundations and typography scale",
    "label": "Design system — abstracted components",
    "note": "NDA-safe representation. No real screens, workflows or operational data shown."
   },
   {
    "type": "text",
    "h": "NDA note",
    "p": [
     "Due to security restrictions, I cannot share real screens, operational workflows, system details or sensitive data. This case study focuses on design challenges, environmental constraints and design system decisions I am allowed to discuss."
    ],
    "cards": [
     {
      "h": "Cannot show",
      "p": "Real screens, operational workflows, sensitive data, system functionality or direct before/after comparisons."
     },
     {
      "h": "Can show",
      "p": "Abstracted components, recreated patterns, contrast logic, target sizing principles and documentation structure."
     }
    ]
   },
   {
    "type": "text",
    "h": "Context",
    "p": [
     "The interface was used inside small cabins on naval vessels. Users worked in low-light conditions, limited physical space and time-critical situations while the vessel could be moving.",
     "Because a regular mouse is not practical on a moving vessel, users interacted with the interface using a ballstick / trackball-like device embedded into the desk."
    ]
   },
   {
    "type": "text",
    "h": "The real problem",
    "p": [
     "The main issue was not visual style. The main issue was usability in difficult physical conditions. Naval personnel needed to quickly read information, understand interface states and select the right elements under pressure."
    ],
    "quote": "How can we make the interface easier to read, understand and operate in real onboard conditions?"
   },
   {
    "type": "text",
    "h": "Design system scope",
    "p": [
     "I created a complete design system for the interface. It included both foundational rules and complex interface elements used in dense operational screens."
    ],
    "cards": [
     {
      "h": "Foundations",
      "p": "Color, typography, contrast rules, spacing and hierarchy."
     },
     {
      "h": "Components",
      "p": "Buttons, tables, alerts, status indicators and interaction states."
     },
     {
      "h": "Complex views",
      "p": "Map/radar-like views, maritime parameter displays and data-heavy layouts."
     }
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img17.jpg",
    "alt": "Abstract comparison of a low-contrast parameter readout versus a high-contrast redesigned version, using generic labels and values",
    "label": "Before / after — readability in low-light cabin conditions",
    "note": "NDA-safe representation using a generic parameter readout. No real screens or operational data shown."
   },
   {
    "type": "challenges",
    "h": "Design challenges",
    "items": [
     {
      "num": "01",
      "title": "Improving readability in low-light conditions",
      "problem": "",
      "decision": "I improved the contrast of key components, states and information areas.",
      "why": "In this environment, readability was not visual polish. It was part of how users understood the situation quickly."
     },
     {
      "num": "02",
      "title": "Making components easier to target",
      "problem": "",
      "decision": "I increased selected component and interaction target sizes to support ballstick / trackball-like input."
     },
     {
      "num": "03",
      "title": "Designing for dense, data-heavy screens",
      "problem": "",
      "decision": "I created clearer hierarchy, stronger grouping and more consistent component behavior across tables, alerts, maritime parameters and map/radar-like views."
     },
     {
      "num": "04",
      "title": "Supporting fast recognition under pressure",
      "problem": "",
      "decision": "I created consistent visual rules for components, alerts, states and interface behavior."
     },
     {
      "num": "05",
      "title": "Creating a system developers could implement",
      "problem": "",
      "decision": "I prepared developer handoff documentation describing components, states and usage rules."
     }
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img18.jpg",
    "alt": "Abstract composed dense operational screen combining a caution banner, an abstract radar/map panel and a generic parameter readout table",
    "label": "Composed dense operational view (abstracted)",
    "note": "NDA-safe representation showing how components combine on a data-heavy screen. No real screens, workflows or operational data shown."
   },
   {
    "type": "pullquote",
    "quote": "In mission-critical environments, clarity is not decoration. It is part of how users act under pressure."
   },
   {
    "type": "text",
    "h": "Validation",
    "p": [
     "The design system was tested both in a technology company laboratory and onboard naval vessels. This was important because the interface could not be evaluated only as a static screen.",
     "Feedback from onboard testing: “It's better now.” In this context, that feedback mattered. It meant the redesign addressed a real usability problem: the interface became easier to read and operate in the environment it was designed for."
    ]
   },
   {
    "type": "text",
    "h": "Outcome",
    "p": [
     "The project resulted in a complete design system adapted to demanding naval environments."
    ],
    "cards": [
     {
      "h": "Better readability",
      "p": "Improved contrast and hierarchy supported use in low-light cabins."
     },
     {
      "h": "Easier interaction",
      "p": "Larger targets improved usability with ballstick / trackball-based input."
     },
     {
      "h": "Stronger implementation",
      "p": "Developer handoff helped translate design decisions into the final product."
     }
    ]
   },
   {
    "type": "text",
    "h": "What I learned",
    "p": [
     "This project showed me that interface design cannot be separated from the environment in which the interface is used. A component that works well in an office may fail in a dark cabin on a moving vessel."
    ],
    "quote": "Good design in mission-critical systems is not about decoration. It is about clarity, speed and trust."
   }
  ],
  "category": "desktop"
 },
 {
  "id": "helpinghand",
  "num": "04",
  "kicker": "Case Study / Healthcare UX",
  "title": "Helping Hand",
  "dek": "Creating support and crisis-oriented flows for an online therapy platform, including moderated community spaces and therapist emergency support.",
  "shot": "PRODUCT SCREENSHOT — THERAPY PLATFORM",
  "thumb": "img/cases/img12.png",
  "tags": [
   "Healthcare",
   "Safety UX",
   "Research"
  ],
  "meta": [
   {
    "label": "Role",
    "val": "Junior UX/UI Designer"
   },
   {
    "label": "Context",
    "val": "Online therapy platform"
   },
   {
    "label": "Users",
    "val": "Therapists and patients"
   },
   {
    "label": "Focus",
    "val": "Safety, support, crisis flow"
   }
  ],
  "blocks": [
   {
    "type": "visual",
    "img": "img/cases/img12.png",
    "alt": "Helping Hand platform home screen with personalized greeting, recommended content and calendar",
    "label": "Product screenshot — dashboard home"
   },
   {
    "type": "text",
    "h": "Context",
    "p": [
     "HelpingHand was my first professional UX project. The product supported online therapy by connecting patients with therapists in a digital environment.",
     "At first, the project seemed to be about improving online therapy. During research, we quickly understood that online therapy is not just a video call moved into a product. It has to support trust, connection and safety."
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img13.jpg",
    "alt": "Helping Hand knowledge base with articles, videos and podcasts organized by topic",
    "label": "Product screenshot — knowledge base",
    "note": "The knowledge base — one of several supporting touchpoints beyond the therapy session itself."
   },
   {
    "type": "text",
    "h": "The real problem",
    "p": [
     "We started by reviewing statements from therapists and then interviewing experienced therapists together with my lead. We did not begin by asking what feature they needed."
    ],
    "quote": "We asked: how does your work with patients actually look?"
   },
   {
    "type": "text",
    "h": "Two key insights",
    "p": [],
    "cards": [
     {
      "h": "Online therapy can feel isolating",
      "p": "Therapists explained that contact with other people can have therapeutic value. The platform should not unintentionally cut patients off from others."
     },
     {
      "h": "Therapists need support in crisis situations",
      "p": "If a patient says something alarming, therapists must respond quickly and appropriately. The system had to be ready for rare, high-risk moments."
     }
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img14.jpg",
    "alt": "Helping Hand therapist matching flow — choose your own therapist or have one recommended",
    "label": "Product screenshot — therapist matching",
    "note": "Patients could choose their own therapist or let the platform recommend one based on a short survey."
   },
   {
    "type": "text",
    "h": "Design challenge 1 — Supporting connection outside the therapy session",
    "p": [
     "Therapists told us that shared spaces where patients can talk to others may support the therapeutic process. These spaces did not need to be led directly by therapists, but therapists still needed moderation control.",
     "Design decision: We designed a community chat space where patients could communicate with each other, while therapists maintained moderation control.",
     "Why it mattered: The feature supported connection without turning every interaction into a formal therapy session."
    ]
   },
   {
    "type": "text",
    "h": "Design challenge 2 — Designing an emergency flow therapists can use under pressure",
    "p": [
     "The crisis intervention flow was the most sensitive part of the project. At first, there were doubts about whether placing an emergency button inside the product was safe.",
     "After speaking with therapists, we understood why it was necessary. If a therapist had to take out a phone during a high-risk session, it could break contact with the patient or escalate the situation.",
     "Design decision: We designed an emergency flow that allowed therapists to request external help directly from the platform, with critical patient information prepared to support the handoff."
    ]
   },
   {
    "type": "visual",
    "img": "img/cases/img15.jpg",
    "alt": "Helping Hand crisis support directory with emergency phone numbers and categorized hotlines",
    "label": "Product screenshot — crisis support directory",
    "note": "The crisis support directory: emergency numbers surfaced immediately, with categorized hotlines below."
   },
   {
    "type": "pullquote",
    "quote": "A component can be technically simple and emotionally complex at the same time."
   },
   {
    "type": "text",
    "h": "The hardest design decision — Visible, but not alarming",
    "p": [
     "The emergency action had to be easy to find in a crisis, but it could not dominate the interface. It had to be available without feeling threatening and protected from accidental clicks without being hidden."
    ]
   },
   {
    "type": "text",
    "h": "Testing and validation",
    "p": [
     "We tested the proposed solutions with therapists and patients. The goal was not only to check whether users understood the interface, but whether the concepts felt appropriate in the context of online therapy.",
     "The community chat idea was positively received because it addressed the feeling of isolation. The emergency flow was accepted by the therapist team because it supported a real responsibility they may face during online work."
    ]
   },
   {
    "type": "text",
    "h": "Outcome",
    "p": [
     "The project introduced two important experience directions: moderated community support and a therapist emergency support flow."
    ],
    "cards": [
     {
      "h": "Community support",
      "p": "A moderated space where patients could connect with others between sessions."
     },
     {
      "h": "Emergency support flow",
      "p": "A crisis-oriented flow helping therapists respond quickly while staying connected to the patient."
     }
    ]
   },
   {
    "type": "text",
    "h": "What I learned",
    "p": [
     "This project taught me that healthcare products carry emotional weight. Some design decisions are not just usability decisions. They affect trust, safety and how supported people feel during vulnerable moments."
    ],
    "quote": "Designing for therapy is not only about making the product easy to use. It is about creating a space where people can feel supported, connected and safe."
   }
  ],
  "category": "mobile"
 },
 {
  "id": "nationwide-rollout",
  "num": "02",
  "kicker": "Case Study / Digital Transformation",
  "title": "Nationwide Rollout",
  "dek": "Supporting the rollout of a new centralized postal platform through training, documentation, branch feedback and cross-functional product improvements.",
  "shot": "SCREENSHOT — ROLLOUT DASHBOARD",
  "thumb": "img/cases/img4.jpg",
  "tags": [
   "Rollout",
   "Adoption",
   "Change support"
  ],
  "meta": [
   {
    "label": "Role",
    "val": "UX Designer / User Training Specialist"
   },
   {
    "label": "Users",
    "val": "30,000+ postal employees"
   },
   {
    "label": "Scale",
    "val": "7,600 branches across Poland"
   },
   {
    "label": "Focus",
    "val": "Adoption, training, feedback loops"
   }
  ],
  "blocks": [
   {
    "type": "compareslider",
    "h": "Drag to compare — the delivery list, before and after",
    "beforeImg": "img/cases/img5.png",
    "beforeAlt": "Legacy Windows-style list view of parcel deliveries for a courier, with dense unlabeled columns for tracking number, type, code, category and address",
    "beforeRatio": "882 / 476",
    "afterImg": "img/cases/img6.png",
    "afterAlt": "Redesigned delivery list for the same courier route, with the same tracking numbers, categories and addresses shown as a readable table with tags and search/filter",
    "afterRatio": "1549 / 1006",
    "beforeLabel": "Before",
    "afterLabel": "After",
    "note": "Comparison of the courier's delivery list — drag the handle to see the legacy list view give way to the redesigned layout, using identical route and delivery data."
   },
   {
    "type": "text",
    "h": "Context",
    "p": [
     "The new postal platform was designed to replace a legacy system used in branches since the 1990s. It was not a single module. It was a large operational platform covering counter services, cash operations, warehouse operations, parcel handling, invoicing, customer contracts, reports, internal processes and logistics.",
     "One of the biggest changes was centralization. Previously, branches often worked with local files and had to manually export and import data between locations. The new system connected branches through a centralized platform."
    ]
   },
   {
    "type": "text",
    "h": "The real problem",
    "p": [
     "For many postal workers, the old system was not just software. It was part of their daily routine. Even if it was outdated, difficult and visually close to Windows 95, it was familiar.",
     "Users were worried that the new system would slow them down, make them less confident, force them to abandon trusted habits and increase the risk of mistakes."
    ],
    "quote": "Users were not afraid of “new design”. They were afraid of losing control."
   },
   {
    "type": "compareslider",
    "h": "Drag to compare — the same form, before and after",
    "beforeImg": "img/cases/img7.png",
    "beforeAlt": "Legacy Windows-style dialog for editing a parcel manifest, with grouped fields for sender, recipient, weight and value, shipment details, options and manifest items",
    "beforeRatio": "762 / 748",
    "afterImg": "img/cases/img8.png",
    "afterAlt": "Redesigned version of the same parcel manifest form using the new platform's card-based layout, with the identical sender, recipient and manifest data",
    "afterRatio": "1549 / 1776",
    "beforeLabel": "Before",
    "afterLabel": "After",
    "note": "Comparison of the parcel manifest editing form — drag the handle to see the legacy dialog give way to the redesigned layout, using identical field data."
   },
   {
    "type": "text",
    "h": "Scale of the platform",
    "p": [
     "The platform included dozens of operational processes. This created a learning challenge: users had to understand not only new screens, but a new information architecture and platform logic."
    ]
   },
   {
    "type": "text",
    "h": "My role",
    "p": [
     "My role combined UX, training and change support. I was not only explaining how the system worked. I was collecting feedback from real use and translating it into product improvements."
    ],
    "cards": [
     {
      "h": "Training",
      "p": "User instructions, live and online trainings, educational videos, step-by-step documentation, FAQ and presentations."
     },
     {
      "h": "Feedback loop",
      "p": "Branch visits, direct user feedback, issue analysis, UX recommendations and validation after implementation."
     },
     {
      "h": "Bridge between teams",
      "p": "Connecting users, business, analysts, developers, Product Owner, Project Manager and management stakeholders."
     }
    ]
   },
   {
    "type": "text",
    "h": "Rollout journey",
    "p": [
     "Management training → pilot in 5 flagship branches → feedback collection → support and documentation → product improvements → nationwide rollout."
    ]
   },
   {
    "type": "challenges",
    "h": "User adoption challenges",
    "items": [
     {
      "num": "01",
      "title": "Icons were not universal",
      "problem": "Users were used to text-heavy buttons. Some icons were clear to designers but not to postal employees. One preview icon was interpreted as two people hugging.",
      "decision": "We validated icon understanding, selected clearer icons and added tooltips."
     },
     {
      "num": "02",
      "title": "Clickable elements were not obvious",
      "problem": "Users did not always recognize clickable icons, ghost buttons or interactive table cells.",
      "decision": "We adjusted interactive components so actions were easier to recognize at first glance."
     },
     {
      "num": "03",
      "title": "Readability was a core requirement",
      "problem": "A large part of the workforce is over 50, so font size, contrast and hierarchy directly affected usability.",
      "decision": "Type scale, contrast and hierarchy were tuned specifically for this audience."
     },
     {
      "num": "04",
      "title": "The system also had to support new employees",
      "problem": "Branches told us that new employees sometimes left quickly because they could not understand the old system.",
      "decision": "The new platform had to be learnable for newcomers as well as familiar enough for experienced employees."
     }
    ]
   },
   {
    "type": "text",
    "h": "Training as part of UX",
    "p": [
     "A successful rollout is not only about shipping software. It is about helping people understand and trust it."
    ],
    "quote": "If users cannot understand the product, the design is not complete.",
    "cards": [
     {
      "h": "Instructions",
      "p": "Step-by-step documentation and practical user guidance."
     },
     {
      "h": "Videos",
      "p": "Educational materials recorded for the training platform."
     },
     {
      "h": "Trainings",
      "p": "Live and online sessions for employees, internal teams, client and stakeholders."
     }
    ]
   },
   {
    "type": "text",
    "h": "Feedback loop",
    "p": [
     "During rollout, I was available through email, online meetings, phone contact and in-person branch visits. I treated feedback as product input, not just support requests.",
     "Observe real use → collect branch feedback → analyze and group issues → translate into UX improvements → align with PO and product teams → validate implementation → return to branches for feedback."
    ]
   },
   {
    "type": "text",
    "h": "Mindset shift",
    "p": [
     "One of the biggest “aha” moments was not about the system itself. It was about the teams building it. Analysts, developers, PO and PM often relied on documentation and client requirements, but the client did not always know what daily work in postal branches looked like.",
     "When I started inviting analysts and developers to field research, something changed. They saw how the system was used in real branches and started using field examples in internal meetings and client discussions."
    ]
   },
   {
    "type": "beforeafter",
    "h": "",
    "beforeH": "Before",
    "beforeP": "We build according to documentation.",
    "afterH": "After",
    "afterP": "We build for the people who use this system every day."
   },
   {
    "type": "text",
    "h": "Outcome",
    "p": [
     "The rollout support helped employees transition to a new centralized system replacing decades-old software. It contributed to smoother adoption, clearer training materials, faster identification of usability issues and stronger feedback loops between branches and product teams.",
     "One of the most important outcomes was cultural: teams started seeing branch employees not only as system users, but as experts in their own work."
    ]
   },
   {
    "type": "text",
    "h": "What I would do differently",
    "p": [
     "If I could approach this project again, I would redesign the information architecture earlier. After learning the system deeply and seeing how employees work across many processes, I can see that some areas could be grouped differently to better match the mental model of postal employees.",
     "I would also define stronger rollout metrics: user confidence before and after training, support requests per module, time needed to complete key processes and satisfaction with training materials."
    ]
   },
   {
    "type": "pullquote",
    "quote": "Digital transformation does not happen when a system goes live. It happens when people start trusting it enough to make it part of their daily work."
   }
  ],
  "category": "workshops"
 }
];
