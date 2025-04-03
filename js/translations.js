/**
 * Africa Link Website - Translation Functionality
 * This file handles the language switching functionality and translations
 */

// Stores all translations for the website
const translations = {
    // English translations (default)
    en: {
        // Navigation
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Services",
        "nav_contact": "Contact",
        
        // Services
        "service_fuel": "Fuel Supply",
        "service_shipping": "Shipping Support",
        "service_transit": "Transit Services",
        "service_crew": "Crew Management",
        "service_personnel": "Personnel Provision",
        
        // Service Descriptions for Homepage Cards
        "service_fuel_desc": "Professional bunkering services ensuring your vessels have the fuel they need when they need it.",
        "service_shipping_desc": "Full-service shipping support including port services, tugboats, floating accommodations, and marine inspection tools.",
        "service_transit_desc": "Streamline your customs clearance and transit logistics with our specialized expertise.",
        "service_crew_desc": "Comprehensive crew management services including visas, transportation, accommodations, and port/airport assistance.",
        "service_personnel_desc": "Access to qualified captains and crew members to ensure your maritime operations run smoothly.",
        
        // Hero Section
        "hero_title": "AfricaLink Maritime & Logistics Solutions",
        "hero_subtitle": "Your trusted partner for comprehensive maritime and logistics support across Africa",
        "hero_cta": "Explore Our Services",
        
        // Services Section
        "services_title": "Our Maritime Support Services",
        "learn_more": "Learn More",
        
        // About Section
        "about_title": "About Africa Link",
        "about_p1": "Africa Link is a trusted provider of maritime and logistics support services across Africa. With years of experience in the industry, we offer comprehensive solutions tailored to meet the unique needs of our clients.",
        "about_p2": "Our team of experts is dedicated to ensuring that your maritime operations run smoothly, efficiently, and safely, allowing you to focus on your core business activities.",
        
        // Contact Section
        "contact_title": "Contact Us",
        "contact_address": "Address:",
        "contact_phone": "Phone:",
        "contact_email": "Email:",
        "contact_us_btn": "Contact Us",
        
        // Footer
        "footer_tagline": "Your trusted partner for maritime and logistics support services across Africa.",
        "footer_quick_links": "Quick Links",
        "footer_services": "Our Services",
        "footer_copyright": "© 2025 Africa Link. All rights reserved.",
        
        // Fuel Supply Page
        "fuel_service_title": "Fuel Supply Services",
        "fuel_service_subtitle": "Professional bunkering services ensuring your vessels have the fuel they need when they need it",
        "fuel_overview_title": "Our Bunkering Services",
        "fuel_overview_p1": "At Africa Link, we understand that reliable fuel supply is critical to your maritime operations. Our comprehensive bunkering services ensure that your vessels receive high-quality fuel when and where they need it, minimizing downtime and maximizing operational efficiency.",
        "fuel_overview_p2": "With our extensive network of suppliers and logistics partners across Africa, we can provide bunkering services at key ports and offshore locations, ensuring that your fuel needs are met regardless of your vessel's location.",
        "key_features": "Key Features",
        "quality_fuel": "Quality Fuel Supply",
        "quality_fuel_desc": "We source high-quality marine fuels that meet international standards and comply with sulfur emission regulations.",
        "strategic_locations": "Strategic Locations",
        "strategic_locations_desc": "We offer bunkering services at key ports and offshore locations across Africa.",
        "timely_delivery": "Timely Delivery",
        "timely_delivery_desc": "We understand the importance of punctuality in maritime operations and ensure timely fuel delivery.",
        "quality_assurance": "Quality Assurance",
        "quality_assurance_desc": "Our fuel undergoes rigorous quality control to ensure it meets your specifications and industry standards.",
        "fuel_types_title": "Fuel Types We Provide",
        "fuel_type_mgo": "<strong>Marine Gas Oil (MGO)</strong> - Low sulfur distillate fuel",
        "fuel_type_mdo": "<strong>Marine Diesel Oil (MDO)</strong> - A blend of distillate and heavy fuel oils",
        "fuel_type_vlsfo": "<strong>Very Low Sulfur Fuel Oil (VLSFO)</strong> - Compliant with IMO 2020 regulations",
        "fuel_type_hfo": "<strong>Heavy Fuel Oil (HFO)</strong> - For vessels with scrubber systems",
        "fuel_type_lng": "<strong>Liquefied Natural Gas (LNG)</strong> - Clean alternative fuel option",
        "bunkering_process_title": "Our Bunkering Process",
        "bunkering_step1": "<strong>Request and Planning</strong> - We receive your fuel requirements and create a detailed delivery plan.",
        "bunkering_step2": "<strong>Logistics Coordination</strong> - Our team coordinates with suppliers and port authorities to ensure smooth operations.",
        "bunkering_step3": "<strong>Quality Control</strong> - We inspect fuel quality before delivery to ensure it meets specifications.",
        "bunkering_step4": "<strong>Delivery</strong> - Fuel is delivered to your vessel at the agreed time and location.",
        "bunkering_step5": "<strong>Documentation</strong> - We provide all necessary documentation for your records.",
        "need_bunkering": "Need Bunkering Services?",
        "contact_fuel_desc": "Contact us to discuss your vessel's fuel requirements and how we can support your operations.",
        
        // Personnel Provision Page
        "personnel_title": "Personnel Provision Services",
        "personnel_subtitle": "Access to qualified captains and crew members to ensure your maritime operations run smoothly",
        "personnel_service_title": "Our Personnel Provision Services",
        "personnel_service_p1": "At Africa Link, we understand that the success of your maritime operations depends on having the right personnel at the helm. Our Personnel Provision services connect you with highly qualified captains, officers, and crew members who bring expertise, experience, and professionalism to your vessels.",
        "personnel_service_p2": "Whether you need to fill temporary vacancies, assemble a complete crew, or find specialized maritime professionals, our extensive network of vetted maritime personnel ensures you have access to the talent you need, when you need it.",
        "personnel_categories_title": "Maritime Personnel We Provide",
        
        "personnel_officers": "Officers",
        "personnel_officers_desc": "We provide access to experienced and certified officers for your vessel:",
        "personnel_officers_1": "Captains/Masters with extensive command experience",
        "personnel_officers_2": "Chief Officers/First Mates",
        "personnel_officers_3": "Second and Third Officers",
        "personnel_officers_4": "Chief Engineers with comprehensive technical knowledge",
        "personnel_officers_5": "First, Second, and Third Engineers",
        "personnel_officers_6": "Electrical Officers and Technical Officers",
        
        "personnel_deck": "Deck Crew",
        "personnel_deck_desc": "Our deck crew members are skilled and trained to handle various vessel operations:",
        "personnel_deck_1": "Bosuns with leadership and operational experience",
        "personnel_deck_2": "Able Seamen (AB) qualified in seamanship duties",
        "personnel_deck_3": "Ordinary Seamen (OS) for general deck support",
        "personnel_deck_4": "Deckhands experienced in various vessel types",
        "personnel_deck_5": "Riggers specialized in offshore operations",
        "personnel_deck_6": "Crane Operators for specialized cargo handling",
        
        "personnel_engine": "Engine Crew",
        "personnel_engine_desc": "Our engine department personnel ensure the efficient operation of your vessel's propulsion systems:",
        "personnel_engine_1": "Motormen with mechanical expertise",
        "personnel_engine_2": "Oilers skilled in machinery maintenance",
        "personnel_engine_3": "Fitters trained in repair and fabrication",
        "personnel_engine_4": "Electricians for electrical system maintenance",
        "personnel_engine_5": "Engine Room Attendants for general support",
        "personnel_engine_6": "Refrigeration Engineers for specialized systems",
        
        "personnel_hospitality": "Hospitality Staff",
        "personnel_hospitality_desc": "We provide quality hospitality staff to ensure comfort aboard your vessels:",
        "personnel_hospitality_1": "Chief Cooks experienced in maritime galleys",
        "personnel_hospitality_2": "Second Cooks and Assistant Cooks",
        "personnel_hospitality_3": "Stewards for cabin and common area service",
        "personnel_hospitality_4": "Messmen for dining service and support",
        "personnel_hospitality_5": "Laundry Personnel for maintenance of linens and uniforms",
        "personnel_hospitality_6": "Medical Personnel for health and safety support",
        
        "personnel_specialized": "Specialized Personnel",
        "personnel_specialized_desc": "We also provide specialized maritime personnel for specific operations:",
        "personnel_specialized_1": "Dynamic Positioning Officers (DPOs) for specialized vessels",
        "personnel_specialized_2": "ROV (Remotely Operated Vehicle) Technicians",
        "personnel_specialized_3": "Offshore Installation Managers",
        "personnel_specialized_4": "HSE (Health, Safety, Environment) Officers",
        "personnel_specialized_5": "Maritime Security Personnel",
        "personnel_specialized_6": "Surveyors for specialized inspection services",
        
        "personnel_benefits_title": "Benefits of Our Personnel Provision Services",
        "personnel_benefit_qualified": "Qualified Personnel",
        "personnel_benefit_qualified_desc": "All personnel undergo rigorous screening, including verification of certifications, experience, and references to ensure they meet international maritime standards.",
        "personnel_benefit_response": "Quick Response",
        "personnel_benefit_response_desc": "Our extensive network allows us to respond rapidly to your personnel needs, even on short notice or in emergency situations.",
        "personnel_benefit_knowledge": "Local Knowledge",
        "personnel_benefit_knowledge_desc": "Many of our personnel have specific experience working in African waters and ports, bringing valuable local knowledge to your operations.",
        "personnel_benefit_flexibility": "Flexibility",
        "personnel_benefit_flexibility_desc": "We offer flexible staffing solutions, from single personnel placements to complete crew provision, on both short-term and long-term contracts.",
        
        "recruitment_process_title": "Our Recruitment Process",
        "recruitment_step1": "Needs Assessment",
        "recruitment_step1_desc": "We begin by thoroughly understanding your specific personnel requirements, including qualifications, experience levels, contract duration, and any special skills needed.",
        "recruitment_step2": "Candidate Selection",
        "recruitment_step2_desc": "We identify potential candidates from our database who match your requirements and conduct preliminary screenings.",
        "recruitment_step3": "Verification",
        "recruitment_step3_desc": "We verify all certifications, qualifications, and experience, and conduct background checks to ensure the highest standards.",
        "recruitment_step4": "Client Review",
        "recruitment_step4_desc": "We present you with qualified candidates for your review and approval, including comprehensive profiles and documentation.",
        "recruitment_step5": "Deployment",
        "recruitment_step5_desc": "Once approved, we handle all logistics to ensure the personnel arrive at your vessel on schedule, including travel arrangements, visas, and any required documentation.",
        
        "quality_assurance_title": "Our Quality Assurance",
        "quality_assurance_desc": "At Africa Link, we maintain rigorous quality assurance standards for all personnel we provide:",
        "quality_assurance_1": "Thorough vetting of qualifications and experience",
        "quality_assurance_2": "Verification of all certificates and licenses",
        "quality_assurance_3": "Comprehensive background checks",
        "quality_assurance_4": "Regular performance evaluations",
        "quality_assurance_5": "Compliance with international maritime standards and regulations",
        "quality_assurance_6": "Ongoing training and certification updates",
        
        "personnel_cta_title": "Need Maritime Personnel?",
        "personnel_cta_desc": "Contact us to discuss your personnel requirements and how we can support your maritime operations with qualified professionals.",
        
        // Crew Management Page
        "crew_service_title": "Crew Management Services",
        "crew_service_subtitle": "Comprehensive crew management including visas, transportation, accommodations, flights, and port/airport assistance",
        "crew_overview_title": "Our Crew Management Services",
        "crew_overview_p1": "At Africa Link, we understand that efficient and effective crew management is essential to successful maritime operations. Our comprehensive crew management services are designed to handle all aspects of crew logistics, ensuring your personnel are well-cared for and can focus on their core responsibilities.",
        "crew_overview_p2": "From visa processing and transportation to accommodations and port assistance, our dedicated team provides end-to-end crew management solutions tailored to your specific needs, allowing you to focus on your core operations.",
        "crew_services_title": "Our Comprehensive Services",
        "crew_visa_title": "Visa Services",
        "crew_transport_title": "Transportation",
        "crew_accom_title": "Accommodations",
        "crew_flight_title": "Flight Arrangements",
        "crew_port_title": "Port/Airport Assistance",
        "crew_benefits_title": "Benefits of Our Crew Management Services",
        "crew_benefit_time": "Time Efficiency",
        "crew_benefit_time_desc": "Outsourcing crew management to Africa Link saves valuable time for your operational team, allowing them to focus on core business activities while we handle the logistics.",
        "crew_benefit_cost": "Cost Optimization",
        "crew_benefit_cost_desc": "Our established network and volume-based relationships with service providers allow us to secure preferential rates, helping reduce your overall crew management costs.",
        "crew_benefit_compliance": "Regulatory Compliance",
        "crew_benefit_compliance_desc": "We stay up-to-date with changing immigration and maritime regulations across African countries, ensuring your crew operations always remain compliant with local laws.",
        "crew_benefit_local": "Local Expertise",
        "crew_benefit_local_desc": "Our deep understanding of local conditions, customs, and practices in African countries helps navigate cultural nuances and ensure smooth crew operations.",
        "crew_process_title": "Our Crew Management Process",
        "crew_process_step1": "Requirements Assessment",
        "crew_process_step1_desc": "We work with you to understand your specific crew management needs and requirements.",
        "crew_process_step2": "Planning & Coordination",
        "crew_process_step2_desc": "We develop a detailed plan and coordinate all necessary services and arrangements.",
        "crew_process_step3": "Implementation",
        "crew_process_step3_desc": "We execute all arrangements, ensuring smooth crew rotations and logistics.",
        "crew_process_step4": "Monitoring & Support",
        "crew_process_step4_desc": "We provide 24/7 support and monitoring to address any issues or changes that may arise.",
        "crew_process_step5": "Reporting & Review",
        "crew_process_step5_desc": "We provide comprehensive reports and review services to ensure continuous improvement.",
        "crew_cta_title": "Need Crew Management Services?",
        "crew_cta_desc": "Contact us to discuss how our comprehensive crew management services can support your maritime operations.",
        "contact_us_btn": "Contact Us",
        
        // Crew Management Service Descriptions
        "crew_visa_desc": "We handle all aspects of visa processing for your crew members, ensuring smooth entry and exit across African countries:",
        "crew_visa_item1": "Visa application preparation and submission",
        "crew_visa_item2": "Documentation verification and compliance checks",
        "crew_visa_item3": "Expedited visa processing for urgent crew changes",
        "crew_visa_item4": "Work permit coordination for extended stays",
        "crew_visa_item5": "Visa extensions and amendments as needed",
        "crew_visa_item6": "Compliance with changing immigration regulations",
        
        "crew_transport_desc": "We coordinate all transportation needs for your crew with reliability and comfort as our priorities:",
        "crew_transport_item1": "Airport transfers with secure, air-conditioned vehicles",
        "crew_transport_item2": "Port-to-accommodation transportation",
        "crew_transport_item3": "Services de transport pour rotation d'équipage",
        "crew_transport_item4": "Assistance de transport d'urgence",
        "crew_transport_item5": "Transport vers les établissements médicaux en cas de besoin",
        "crew_transport_item6": "Support de transport 24/7 pour les changements inattendus",
        
        "crew_accom_desc": "We arrange quality accommodations that meet your crew's needs and your company's budget:",
        "crew_accom_item1": "Hotel selection and booking near ports and airports",
        "crew_accom_item2": "Serviced apartments for extended stays",
        "crew_accom_item3": "Quality checks to ensure accommodation standards",
        "crew_accom_item4": "Special dietary requirements coordination",
        "crew_accom_item5": "Group booking management for larger crews",
        "crew_accom_item6": "Flexible booking arrangements for changing schedules",
        
        "crew_flight_desc": "We handle all flight bookings and logistics to ensure smooth crew rotations:",
        "crew_flight_item1": "Cost-effective flight bookings with established carriers",
        "crew_flight_item2": "Optimal routing to minimize transit times",
        "crew_flight_item3": "Special assistance arrangements when needed",
        "crew_flight_item4": "Excess baggage coordination for crew equipment",
        "crew_flight_item5": "Management of flight changes and cancellations",
        "crew_flight_item6": "Emergency flight arrangements during disruptions",
        
        "crew_port_desc": "We provide comprehensive assistance at ports and airports to ensure smooth transitions:",
        "crew_port_item1": "Airport meet and greet services",
        "crew_port_item2": "Expedited immigration processing when available",
        "crew_port_item3": "Customs clearance assistance for personal effects",
        "crew_port_item4": "Port access coordination and security clearances",
        "crew_port_item5": "Liaison with port and airport authorities",
        "crew_port_item6": "Crew support during unexpected delays",
        
        // Shipping Support Page
        "shipping_title": "Shipping Support Services",
        "shipping_subtitle": "Comprehensive port services, tugboats, floating accommodations, and marine inspection tools",
        "shipping_services_title": "Our Shipping Support Services",
        "shipping_overview_p1": "Africa Link provides a full range of shipping support services designed to enhance your maritime operations across Africa. From essential port services to specialized marine inspection tools, we offer comprehensive solutions to meet the unique challenges of operating in African waters.",
        "shipping_overview_p2": "Our team of experienced maritime professionals ensures that every aspect of your shipping needs is addressed efficiently and professionally, allowing your operations to run smoothly and safely.",
        "shipping_support_title": "Our Support Services",
        
        "shipping_port_title": "Port Services",
        "shipping_port_desc": "Our comprehensive port services include:",
        "shipping_port_item1": "Cargo handling and stevedoring",
        "shipping_port_item2": "Ship-to-shore transfers",
        "shipping_port_item3": "Port agent coordination",
        "shipping_port_item4": "Berthing arrangements",
        "shipping_port_item5": "Customs clearance assistance",
        "shipping_port_item6": "Port security coordination",
        
        "shipping_tug_title": "Tugboat Services",
        "shipping_tug_desc": "We provide reliable tugboat services for:",
        "shipping_tug_item1": "Ship berthing and unberthing",
        "shipping_tug_item2": "Harbor towing",
        "shipping_tug_item3": "Vessel repositioning",
        "shipping_tug_item4": "Salvage operations",
        "shipping_tug_item5": "Offshore support",
        "shipping_tug_item6": "Emergency response",
        
        "shipping_accom_title": "Floating Accommodations",
        "shipping_accom_desc": "Our floating accommodation solutions include:",
        "shipping_accom_item1": "Fully-equipped accommodation vessels",
        "shipping_accom_item2": "Temporary living quarters for offshore projects",
        "shipping_accom_item3": "Catering and hospitality services",
        "shipping_accom_item4": "Recreation facilities",
        "shipping_accom_item5": "Medical support services",
        "shipping_accom_item6": "Communication infrastructure",
        
        "shipping_inspect_title": "Marine Inspection Tools",
        "shipping_inspect_desc": "We provide advanced marine inspection tools and services including:",
        "shipping_inspect_item1": "Hull inspection equipment",
        "shipping_inspect_item2": "Underwater inspection drones",
        "shipping_inspect_item3": "Non-destructive testing equipment",
        "shipping_inspect_item4": "Condition monitoring systems",
        "shipping_inspect_item5": "Professional inspection personnel",
        "shipping_inspect_item6": "Documentation and reporting services",
        
        "shipping_benefits_title": "Benefits of Our Shipping Support Services",
        "shipping_benefit_efficiency": "Improved Operational Efficiency",
        "shipping_benefit_efficiency_desc": "Our comprehensive support services streamline your maritime operations, reducing downtime and improving overall efficiency.",
        "shipping_benefit_safety": "Enhanced Safety",
        "shipping_benefit_safety_desc": "Our professional services and equipment help ensure the safety of your vessels, crew, and cargo.",
        "shipping_benefit_expertise": "Local Expertise",
        "shipping_benefit_expertise_desc": "Our deep understanding of African ports and maritime regulations helps navigate complex local requirements.",
        "shipping_benefit_cost": "Cost-Effective Solutions",
        "shipping_benefit_cost_desc": "Our integrated services help reduce overall operational costs while maintaining high standards.",
        
        "shipping_cta_title": "Need Shipping Support?",
        "shipping_cta_desc": "Contact our team to discuss how our shipping support services can enhance your maritime operations in Africa.",
        
        // Transit Services Page
        "transit_title": "Transit Services",
        "transit_subtitle": "Streamlining customs clearance and transit logistics across Africa",
        "transit_services_title": "Our Transit Services",
        "transit_overview_p1": "At Africa Link, we understand that navigating the complexities of customs clearance and transit logistics in Africa can be challenging. Our dedicated transit services team provides expert guidance and comprehensive solutions to ensure your cargo moves smoothly across borders and to its final destination.",
        "transit_overview_p2": "With extensive knowledge of regional customs regulations and strong relationships with local authorities, we help eliminate delays, reduce costs, and ensure compliance throughout the transit process.",
        
        "transit_customs_title": "Customs Clearance Services",
        "transit_doc_title": "Documentation Management",
        "transit_doc_desc": "We handle all required documentation for customs clearance, ensuring accuracy and compliance with local regulations:",
        "transit_doc_item1": "Bills of lading preparation and management",
        "transit_doc_item2": "Commercial invoice verification",
        "transit_doc_item3": "Certificate of origin documentation",
        "transit_doc_item4": "Import/export license coordination",
        "transit_doc_item5": "Customs declaration forms",
        
        "transit_broker_title": "Customs Broker Services",
        "transit_broker_desc": "Our licensed customs brokers represent your interests and facilitate efficient clearance:",
        "transit_broker_item1": "Classification of goods for proper tariff applications",
        "transit_broker_item2": "Duty and tax calculation and payment",
        "transit_broker_item3": "Liaison with customs officials",
        "transit_broker_item4": "Regulatory compliance assurance",
        "transit_broker_item5": "Expedited clearance services",
        
        "transit_comply_title": "Regulatory Compliance",
        "transit_comply_desc": "We ensure your shipments meet all regulatory requirements:",
        "transit_comply_item1": "Trade compliance audits",
        "transit_comply_item2": "Regulatory updates and advisory services",
        "transit_comply_item3": "Specialized permits acquisition",
        "transit_comply_item4": "Health and safety compliance",
        "transit_comply_item5": "Environmental regulation adherence",
        
        "transit_duty_title": "Duty Optimization",
        "transit_duty_desc": "We help minimize duty expenses through legal optimization strategies:",
        "transit_duty_item1": "Tariff classification analysis",
        "transit_duty_item2": "Free trade agreement utilization",
        "transit_duty_item3": "Bonded warehouse solutions",
        "transit_duty_item4": "Duty drawback and recovery services",
        "transit_duty_item5": "Strategic import planning",
        
        "transit_logistics_title": "Transit Logistics",
        "transit_logistics_desc": "Our transit logistics services provide end-to-end solutions for moving your cargo efficiently through Africa:",
        "transit_logistics_item1": "<strong>Multi-modal Transportation:</strong> Coordination of sea, air, rail, and road transport for seamless cargo movement",
        "transit_logistics_item2": "<strong>Route Optimization:</strong> Strategic planning to identify the most efficient and cost-effective transport routes",
        "transit_logistics_item3": "<strong>Cross-border Management:</strong> Expert handling of border crossings and transit formalities",
        "transit_logistics_item4": "<strong>Cargo Tracking:</strong> Real-time monitoring and status updates on your shipments",
        "transit_logistics_item5": "<strong>Risk Management:</strong> Comprehensive strategies to mitigate transit risks and ensure security",
        
        "transit_process_title": "Our Transit Logistics Process",
        "transit_process_step1": "Pre-Transit Planning",
        "transit_process_step1_desc": "Comprehensive route planning, documentation preparation, and regulatory requirement analysis",
        "transit_process_step2": "Customs Processing",
        "transit_process_step2_desc": "Efficient customs clearance at origin, transit points, and destination",
        "transit_process_step3": "Transport Execution",
        "transit_process_step3_desc": "Coordinated movement through multiple transport modes and border crossings",
        "transit_process_step4": "Monitoring & Intervention",
        "transit_process_step4_desc": "Real-time tracking and proactive issue resolution during transit",
        "transit_process_step5": "Delivery & Documentation",
        "transit_process_step5_desc": "Final delivery coordination and comprehensive documentation completion",
        
        "transit_regional_title": "Regional Expertise",
        "transit_regional_desc": "Our transit services are strengthened by our deep regional expertise across Africa:",
        "transit_regional_item1": "West African customs procedures and regulations",
        "transit_regional_item2": "East African Community (EAC) customs union protocols",
        "transit_regional_item3": "Southern African Development Community (SADC) trade agreements",
        "transit_regional_item4": "North African border and port operations",
        "transit_regional_item5": "African Continental Free Trade Area (AfCFTA) implementation",
        "transit_regional_item6": "Country-specific import/export requirements",
        
        "transit_cta_title": "Optimize Your Transit Operations",
        "transit_cta_desc": "Contact our transit services team to discuss how we can streamline your customs clearance and transit logistics across Africa."
    },
    
    // French translations
    fr: {
        // ... existing code ...
"nav_home": "Accueil",
"nav_about": "À Propos",
"nav_services": "Services",
"nav_contact": "Contact",

// Services
"service_fuel": "Fourniture de Carburant",
"service_shipping": "Support Maritime",
"service_transit": "Services de Transit",
"service_crew": "Gestion d'Équipage",
"service_personnel": "Fourniture de Personnel",

// Service Descriptions for Homepage Cards
"service_fuel_desc": "Services professionnels de soutage assurant que vos navires disposent du carburant nécessaire quand ils en ont besoin.",
"service_shipping_desc": "Support maritime complet comprenant services portuaires, remorqueurs, hébergements flottants et outils d'inspection marine.",
"service_transit_desc": "Simplifiez votre dédouanement et votre logistique de transit grâce à notre expertise spécialisée.",
"service_crew_desc": "Services complets de gestion d'équipage incluant visas, transport, hébergement et assistance portuaire/aéroportuaire.",
"service_personnel_desc": "Accès à des capitaines et membres d'équipage qualifiés pour assurer le bon déroulement de vos opérations maritimes.",

// Hero Section
"hero_title": "AfricaLink Solutions Maritimes et Logistiques",
"hero_subtitle": "Votre partenaire de confiance pour un soutien maritime et logistique complet en Afrique",
"hero_cta": "Découvrir Nos Services",

// Services Section
"services_title": "Nos Services de Support Maritime",
"learn_more": "En Savoir Plus",

// About Section
"about_title": "À Propos d'Africa Link",
"about_p1": "Africa Link est un fournisseur de confiance de services de soutien maritime et logistique à travers l'Afrique. Avec des années d'expérience dans l'industrie, nous offrons des solutions complètes adaptées aux besoins uniques de nos clients.",
"about_p2": "Notre équipe d'experts se consacre à assurer que vos opérations maritimes se déroulent de manière fluide, efficace et sécurisée, vous permettant de vous concentrer sur vos activités principales.",

// Contact Section
"contact_title": "Contactez-Nous",
"contact_address": "Adresse:",
"contact_phone": "Téléphone:",
"contact_email": "Email:",
"contact_us_btn": "Contactez-Nous",

// Footer
"footer_tagline": "Votre partenaire de confiance pour les services de soutien maritime et logistique à travers l'Afrique.",
"footer_quick_links": "Liens Rapides",
"footer_services": "Nos Services",
"footer_copyright": "© 2025 Africa Link. Tous droits réservés.",

// Fuel Supply Page
"fuel_service_title": "Services d'Approvisionnement en Carburant",
"fuel_service_subtitle": "Services professionnels de soutage assurant que vos navires disposent du carburant nécessaire quand ils en ont besoin",
"fuel_overview_title": "Nos Services de Soutage",
"fuel_overview_p1": "Chez Africa Link, nous comprenons qu'un approvisionnement fiable en carburant est essentiel pour vos opérations maritimes. Nos services complets de soutage garantissent que vos navires reçoivent du carburant de haute qualité quand et où ils en ont besoin, minimisant les temps d'arrêt et maximisant l'efficacité opérationnelle.",
"fuel_overview_p2": "Avec notre vaste réseau de fournisseurs et partenaires logistiques à travers l'Afrique, nous pouvons fournir des services de soutage dans les ports clés et les sites offshore, garantissant que vos besoins en carburant soient satisfaits quelle que soit la localisation de votre navire.",
"key_features": "Caractéristiques Principales",
"quality_fuel": "Carburant de Qualité",
"quality_fuel_desc": "Nous nous approvisionnons en carburants marins de haute qualité qui respectent les normes internationales et sont conformes aux réglementations sur les émissions de soufre.",
"strategic_locations": "Emplacements Stratégiques",
"strategic_locations_desc": "Nous offrons des services de soutage dans les ports clés et les sites offshore à travers l'Afrique.",
"timely_delivery": "Livraison Ponctuelle",
"timely_delivery_desc": "Nous comprenons l'importance de la ponctualité dans les opérations maritimes et garantissons une livraison de carburant dans les délais.",
"quality_assurance": "Assurance Qualité",
"quality_assurance_desc": "Notre carburant fait l'objet d'un contrôle de qualité rigoureux pour garantir qu'il répond à vos spécifications et aux normes de l'industrie.",
"fuel_types_title": "Types de Carburant que Nous Fournissons",
"fuel_type_mgo": "<strong>Gasoil Marine (MGO)</strong> - Carburant distillé à faible teneur en soufre",
"fuel_type_mdo": "<strong>Diesel Marine (MDO)</strong> - Un mélange de distillats et de fiouls lourds",
"fuel_type_vlsfo": "<strong>Fioul à Très Faible Teneur en Soufre (VLSFO)</strong> - Conforme aux réglementations IMO 2020",
"fuel_type_hfo": "<strong>Fioul Lourd (HFO)</strong> - Pour les navires équipés de systèmes d'épuration",
"fuel_type_lng": "<strong>Gaz Naturel Liquéfié (GNL)</strong> - Option de carburant alternatif propre",
"bunkering_process_title": "Notre Processus de Soutage",
"bunkering_step1": "<strong>Demande et Planification</strong> - Nous recevons vos besoins en carburant et créons un plan de livraison détaillé.",
"bunkering_step2": "<strong>Coordination Logistique</strong> - Notre équipe coordonne avec les fournisseurs et les autorités portuaires pour assurer des opérations fluides.",
"bunkering_step3": "<strong>Contrôle Qualité</strong> - Nous inspectons la qualité du carburant avant la livraison pour garantir qu'il répond aux spécifications.",
"bunkering_step4": "<strong>Livraison</strong> - Le carburant est livré à votre navire à l'heure et au lieu convenus.",
"bunkering_step5": "<strong>Documentation</strong> - Nous fournissons toute la documentation nécessaire pour vos dossiers.",
"need_bunkering": "Besoin de Services de Soutage?",
"contact_fuel_desc": "Contactez-nous pour discuter des besoins en carburant de votre navire et comment nous pouvons soutenir vos opérations.",

        // Page de Fourniture de Personnel
        "personnel_title": "Services de Fourniture de Personnel",
        "personnel_subtitle": "Accès à des capitaines et membres d'équipage qualifiés pour assurer le bon déroulement de vos opérations maritimes",
        "personnel_service_title": "Nos Services de Fourniture de Personnel",
        "personnel_service_p1": "Chez Africa Link, nous comprenons que le succès de vos opérations maritimes dépend d'avoir le bon personnel à la barre. Nos services de Fourniture de Personnel vous mettent en relation avec des capitaines, officiers et membres d'équipage hautement qualifiés qui apportent expertise, expérience et professionnalisme à vos navires.",
        "personnel_service_p2": "Que vous ayez besoin de combler des postes temporaires, d'assembler un équipage complet ou de trouver des professionnels maritimes spécialisés, notre vaste réseau de personnel maritime vérifié vous garantit l'accès aux talents dont vous avez besoin, quand vous en avez besoin.",
        "personnel_categories_title": "Personnel Maritime Que Nous Fournissons",
        
        "personnel_officers": "Officiers",
        "personnel_officers_desc": "Nous fournissons l'accès à des officiers expérimentés et certifiés pour votre navire :",
        "personnel_officers_1": "Capitaines/Commandants avec une vaste expérience de commandement",
        "personnel_officers_2": "Chefs Officiers/Premiers Lieutenants",
        "personnel_officers_3": "Seconds et Troisièmes Officiers",
        "personnel_officers_4": "Chefs Mécaniciens avec des connaissances techniques complètes",
        "personnel_officers_5": "Premiers, Seconds et Troisièmes Mécaniciens",
        "personnel_officers_6": "Officiers Électriciens et Officiers Techniques",
        
        "personnel_deck": "Équipage de Pont",
        "personnel_deck_desc": "Les membres de notre équipage de pont sont qualifiés et formés pour gérer diverses opérations navales :",
        "personnel_deck_1": "Maîtres d'équipage avec expérience en leadership et opérations",
        "personnel_deck_2": "Matelots qualifiés (AB) pour les tâches de matelotage",
        "personnel_deck_3": "Matelots ordinaires (OS) pour le soutien général du pont",
        "personnel_deck_4": "Matelots expérimentés sur divers types de navires",
        "personnel_deck_5": "Gréeurs spécialisés dans les opérations offshore",
        "personnel_deck_6": "Opérateurs de grue pour la manutention spécialisée de cargaison",
        
        "personnel_engine": "Équipage Machine",
        "personnel_engine_desc": "Notre personnel du département machine assure le fonctionnement efficace des systèmes de propulsion de votre navire :",
        "personnel_engine_1": "Motoristes avec expertise mécanique",
        "personnel_engine_2": "Graisseurs qualifiés en maintenance des machines",
        "personnel_engine_3": "Ajusteurs formés à la réparation et à la fabrication",
        "personnel_engine_4": "Électriciens pour la maintenance des systèmes électriques",
        "personnel_engine_5": "Assistants de salle des machines pour le soutien général",
        "personnel_engine_6": "Ingénieurs en réfrigération pour les systèmes spécialisés",
        
        "personnel_hospitality": "Personnel d'Hôtellerie",
        "personnel_hospitality_desc": "Nous fournissons un personnel d'hôtellerie de qualité pour assurer le confort à bord de vos navires :",
        "personnel_hospitality_1": "Chefs cuisiniers expérimentés dans les cuisines maritimes",
        "personnel_hospitality_2": "Seconds Cuisiniers et Cuisiniers Assistants",
        "personnel_hospitality_3": "Stewards pour le service des cabines et des espaces communs",
        "personnel_hospitality_4": "Serveurs pour le service de restauration et le soutien",
        "personnel_hospitality_5": "Personnel de blanchisserie pour l'entretien du linge et des uniformes",
        "personnel_hospitality_6": "Personnel médical pour le soutien sanitaire et la sécurité",
        
        "personnel_specialized": "Personnel Spécialisé",
        "personnel_specialized_desc": "Nous fournissons également du personnel maritime spécialisé pour des opérations spécifiques :",
        "personnel_specialized_1": "Officiers de Positionnement Dynamique (DPO) pour navires spécialisés",
        "personnel_specialized_2": "Techniciens ROV (Véhicule Télécommandé)",
        "personnel_specialized_3": "Gestionnaires d'Installation Offshore",
        "personnel_specialized_4": "Officiers HSE (Santé, Sécurité, Environnement)",
        "personnel_specialized_5": "Personnel de Sécurité Maritime",
        "personnel_specialized_6": "Inspecteurs pour services d'inspection spécialisés",
        
        "personnel_benefits_title": "Avantages de Nos Services de Fourniture de Personnel",
        "personnel_benefit_qualified": "Personnel Qualifié",
        "personnel_benefit_qualified_desc": "Tout le personnel passe par une sélection rigoureuse, incluant la vérification des certifications, de l'expérience et des références pour garantir qu'il répond aux normes maritimes internationales.",
        "personnel_benefit_response": "Réponse Rapide",
        "personnel_benefit_response_desc": "Notre vaste réseau nous permet de répondre rapidement à vos besoins en personnel, même à court préavis ou dans des situations d'urgence.",
        "personnel_benefit_knowledge": "Connaissance Locale",
        "personnel_benefit_knowledge_desc": "Beaucoup de nos personnels ont une expérience spécifique de travail dans les eaux et ports africains, apportant une précieuse connaissance locale à vos opérations.",
        "personnel_benefit_flexibility": "Flexibilité",
        "personnel_benefit_flexibility_desc": "Nous offrons des solutions de dotation en personnel flexibles, des placements individuels à la fourniture d'équipage complet, sur des contrats à court et à long terme.",

        "recruitment_process_title": "Notre Processus de Recrutement",
        "recruitment_step1": "Évaluation des Besoins",
        "recruitment_step1_desc": "Nous commençons par comprendre en profondeur vos exigences spécifiques en matière de personnel, y compris les qualifications, les niveaux d'expérience, la durée du contrat et toutes compétences spéciales requises.",
        "recruitment_step2": "Sélection des Candidats",
        "recruitment_step2_desc": "Nous identifions les candidats potentiels dans notre base de données qui correspondent à vos exigences et effectuons des présélections préliminaires.",
        "recruitment_step3": "Vérification",
        "recruitment_step3_desc": "Nous vérifions toutes les certifications, qualifications et expériences, et effectuons des vérifications d'antécédents pour garantir les normes les plus élevées.",
        "recruitment_step4": "Examen par le Client",
        "recruitment_step4_desc": "Nous vous présentons des candidats qualifiés pour votre examen et approbation, y compris des profils complets et de la documentation.",
        "recruitment_step5": "Déploiement",
        "recruitment_step5_desc": "Une fois approuvé, nous gérons toute la logistique pour garantir que le personnel arrive sur votre navire selon le calendrier prévu, y compris les arrangements de voyage, les visas et toute documentation requise.",
        
        "quality_assurance_title": "Notre Assurance Qualité",
        "quality_assurance_desc": "Chez Africa Link, nous maintenons des normes d'assurance qualité rigoureuses pour tout le personnel que nous fournissons :",
        "quality_assurance_1": "Vérification approfondie des qualifications et de l'expérience",
        "quality_assurance_2": "Vérification de tous les certificats et licences",
        "quality_assurance_3": "Vérifications complètes des antécédents",
        "quality_assurance_4": "Évaluations régulières des performances",
        "quality_assurance_5": "Conformité aux normes et réglementations maritimes internationales",
        "quality_assurance_6": "Formation continue et mises à jour des certifications",
        
        "personnel_cta_title": "Besoin de Personnel Maritime ?",
        "personnel_cta_desc": "Contactez-nous pour discuter de vos besoins en personnel et comment nous pouvons soutenir vos opérations maritimes avec des professionnels qualifiés.",
        

// ... existing code ...

// Crew Management Page
"crew_service_title": "Services de Gestion d'Équipage",
"crew_service_subtitle": "Gestion complète d'équipage incluant visas, transport, hébergement, vols et assistance portuaire/aéroportuaire",
"crew_overview_title": "Nos Services de Gestion d'Équipage",
"crew_overview_p1": "Chez Africa Link, nous comprenons qu'une gestion efficace et efficiente de l'équipage est essentielle au succès des opérations maritimes. Nos services complets de gestion d'équipage sont conçus pour gérer tous les aspects de la logistique d'équipage, garantissant que votre personnel est bien pris en charge et peut se concentrer sur ses responsabilités principales.",
"crew_overview_p2": "Du traitement des visas au transport en passant par l'hébergement et l'assistance portuaire, notre équipe dédiée fournit des solutions de gestion d'équipage de bout en bout adaptées à vos besoins spécifiques, vous permettant de vous concentrer sur vos activités principales.",
"crew_services_title": "Nos Services Complets",
"crew_visa_title": "Services de Visa",
"crew_transport_title": "Transport",
"crew_accom_title": "Hébergement",
"crew_flight_title": "Organisation des Vols",
"crew_port_title": "Assistance Portuaire/Aéroportuaire",
"crew_benefits_title": "Avantages de Nos Services de Gestion d'Équipage",
"crew_benefit_time": "Efficacité Temporelle",
"crew_benefit_time_desc": "Externaliser la gestion d'équipage à Africa Link fait gagner un temps précieux à votre équipe opérationnelle, leur permettant de se concentrer sur les activités principales pendant que nous gérons la logistique.",
"crew_benefit_cost": "Optimisation des Coûts",
"crew_benefit_cost_desc": "Notre réseau établi et nos relations basées sur le volume avec les prestataires de services nous permettent d'obtenir des tarifs préférentiels, aidant à réduire vos coûts globaux de gestion d'équipage.",
"crew_benefit_compliance": "Conformité Réglementaire",
"crew_benefit_compliance_desc": "Nous restons à jour avec l'évolution des réglementations d'immigration et maritimes dans les pays africains, garantissant que vos opérations d'équipage restent toujours conformes aux lois locales.",
"crew_benefit_local": "Expertise Locale",
"crew_benefit_local_desc": "Notre compréhension approfondie des conditions, coutumes et pratiques locales dans les pays africains aide à naviguer dans les nuances culturelles et à assurer des opérations d'équipage fluides.",
"crew_process_title": "Notre Processus de Gestion d'Équipage",
"crew_process_step1": "Évaluation des Besoins",
"crew_process_step1_desc": "Nous travaillons avec vous pour comprendre vos besoins et exigences spécifiques en matière de gestion d'équipage.",
"crew_process_step2": "Planification & Coordination",
"crew_process_step2_desc": "Nous développons un plan détaillé et coordonnons tous les services et arrangements nécessaires.",
"crew_process_step3": "Mise en Œuvre",
"crew_process_step3_desc": "Nous exécutons tous les arrangements, assurant des rotations d'équipage et une logistique fluides.",
"crew_process_step4": "Surveillance & Support",
"crew_process_step4_desc": "Nous fournissons un support et une surveillance 24/7 pour résoudre tout problème ou changement qui pourrait survenir.",
"crew_process_step5": "Rapports & Révision",
"crew_process_step5_desc": "Nous fournissons des rapports complets et des services de révision pour assurer une amélioration continue.",
"crew_cta_title": "Besoin de Services de Gestion d'Équipage?",
"crew_cta_desc": "Contactez-nous pour discuter de la façon dont nos services complets de gestion d'équipage peuvent soutenir vos opérations maritimes.",
"contact_us_btn": "Contactez-Nous",

// Crew Management Service Descriptions
"crew_visa_desc": "Nous gérons tous les aspects du traitement des visas pour les membres de votre équipage, assurant une entrée et une sortie fluides dans les pays africains:",
"crew_visa_item1": "Préparation et soumission des demandes de visa",
"crew_visa_item2": "Vérification des documents et contrôles de conformité",
"crew_visa_item3": "Traitement accéléré des visas pour les changements d'équipage urgents",
"crew_visa_item4": "Coordination des permis de travail pour les séjours prolongés",
"crew_visa_item5": "Extensions et modifications de visa selon les besoins",
"crew_visa_item6": "Conformité aux réglementations d'immigration changeantes",

"crew_transport_desc": "Nous coordonnons tous les besoins en transport de votre équipage avec la fiabilité et le confort comme priorités:",
"crew_transport_item1": "Transferts aéroport avec véhicules sécurisés et climatisés",
"crew_transport_item2": "Transport du port à l'hébergement",
"crew_transport_item3": "Services de transport pour rotation d'équipage",
"crew_transport_item4": "Assistance de transport d'urgence",
"crew_transport_item5": "Transport vers les établissements médicaux en cas de besoin",
"crew_transport_item6": "Support de transport 24/7 pour les changements inattendus",

"crew_accom_desc": "Nous organisons des hébergements de qualité qui répondent aux besoins de votre équipage et au budget de votre entreprise:",
"crew_accom_item1": "Sélection et réservation d'hôtels près des ports et aéroports",
"crew_accom_item2": "Appartements avec services pour les séjours prolongés",
"crew_accom_item3": "Contrôles qualité pour assurer les normes d'hébergement",
"crew_accom_item4": "Coordination des exigences alimentaires spéciales",
"crew_accom_item5": "Gestion des réservations de groupe pour les grands équipages",
"crew_accom_item6": "Arrangements de réservation flexibles pour les horaires changeants",

"crew_flight_desc": "Nous gérons toutes les réservations de vols et la logistique pour assurer des rotations d'équipage fluides:",
"crew_flight_item1": "Réservations de vols économiques sur des transporteurs établis",
"crew_flight_item2": "Routage optimal pour minimiser les temps de transit",
"crew_flight_item3": "Arrangements d'assistance spéciale si nécessaire",
"crew_flight_item4": "Coordination des excédents de bagages pour l'équipement d'équipage",
"crew_flight_item5": "Gestion des changements et annulations de vols",
"crew_flight_item6": "Arrangements de vols d'urgence pendant les perturbations",

"crew_port_desc": "Nous fournissons une assistance complète dans les ports et aéroports pour assurer des transitions en douceur:",
"crew_port_item1": "Services d'accueil dans les aéroports",
"crew_port_item2": "Traitement accéléré de l'immigration lorsque disponible",
"crew_port_item3": "Assistance au dédouanement pour les effets personnels",
"crew_port_item4": "Coordination d'accès au port et autorisations de sécurité",
"crew_port_item5": "Liaison avec les autorités portuaires et aéroportuaires",
"crew_port_item6": "Soutien à l'équipage pendant les retards inattendus",

// Shipping Support Page
"shipping_title": "Services de Support Maritime",
"shipping_subtitle": "Services portuaires complets, remorqueurs, hébergements flottants et outils d'inspection marine",
"shipping_services_title": "Nos Services de Support Maritime",
"shipping_overview_p1": "Africa Link fournit une gamme complète de services de support maritime conçus pour améliorer vos opérations maritimes à travers l'Afrique. Des services portuaires essentiels aux outils d'inspection marine spécialisés, nous offrons des solutions complètes pour répondre aux défis uniques de l'exploitation dans les eaux africaines.",
"shipping_overview_p2": "Notre équipe de professionnels maritimes expérimentés veille à ce que chaque aspect de vos besoins maritimes soit traité efficacement et professionnellement, permettant à vos opérations de se dérouler de manière fluide et sûre.",
"shipping_support_title": "Nos Services de Support",

"shipping_port_title": "Services Portuaires",
"shipping_port_desc": "Nos services portuaires complets comprennent:",
"shipping_port_item1": "Manutention de cargaison et acconage",
"shipping_port_item2": "Transferts navire-terre",
"shipping_port_item3": "Coordination des agents portuaires",
"shipping_port_item4": "Arrangements d'amarrage",
"shipping_port_item5": "Assistance au dédouanement",
"shipping_port_item6": "Coordination de la sécurité portuaire",

"shipping_tug_title": "Services de Remorquage",
"shipping_tug_desc": "Nous fournissons des services de remorquage fiables pour:",
"shipping_tug_item1": "Amarrage et désamarrage des navires",
"shipping_tug_item2": "Remorquage portuaire",
"shipping_tug_item3": "Repositionnement des navires",
"shipping_tug_item4": "Opérations de sauvetage",
"shipping_tug_item5": "Support offshore",
"shipping_tug_item6": "Intervention d'urgence",

"shipping_accom_title": "Hébergements Flottants",
"shipping_accom_desc": "Nos solutions d'hébergement flottant comprennent:",
"shipping_accom_item1": "Navires d'hébergement entièrement équipés",
"shipping_accom_item2": "Quartiers temporaires pour projets offshore",
"shipping_accom_item3": "Services de restauration et d'accueil",
"shipping_accom_item4": "Installations de loisirs",
"shipping_accom_item5": "Services de support médical",
"shipping_accom_item6": "Infrastructure de communication",

"shipping_inspect_title": "Outils d'Inspection Marine",
"shipping_inspect_desc": "Nous fournissons des outils et services d'inspection marine avancés, notamment:",
"shipping_inspect_item1": "Équipement d'inspection de coque",
"shipping_inspect_item2": "Drones d'inspection sous-marine",
"shipping_inspect_item3": "Équipement de test non destructif",
"shipping_inspect_item4": "Systèmes de surveillance des conditions",
"shipping_inspect_item5": "Personnel d'inspection professionnel",
"shipping_inspect_item6": "Services de documentation et de rapports",

"shipping_benefits_title": "Avantages de Nos Services de Support Maritime",
"shipping_benefit_efficiency": "Efficacité Opérationnelle Améliorée",
"shipping_benefit_efficiency_desc": "Nos services de support complets rationalisent vos opérations maritimes, réduisant les temps d'arrêt et améliorant l'efficacité globale.",
"shipping_benefit_safety": "Sécurité Renforcée",
"shipping_benefit_safety_desc": "Nos services et équipements professionnels contribuent à assurer la sécurité de vos navires, équipages et cargaisons.",
"shipping_benefit_expertise": "Expertise Locale",
"shipping_benefit_expertise_desc": "Notre compréhension approfondie des ports africains et des réglementations maritimes aide à naviguer dans les exigences locales complexes.",
"shipping_benefit_cost": "Solutions Rentables",
"shipping_benefit_cost_desc": "Nos services intégrés aident à réduire les coûts opérationnels globaux tout en maintenant des normes élevées.",

"shipping_cta_title": "Besoin de Support Maritime?",
"shipping_cta_desc": "Contactez notre équipe pour discuter de la façon dont nos services de support maritime peuvent améliorer vos opérations maritimes en Afrique.",

// Transit Services Page
"transit_title": "Services de Transit",
"transit_subtitle": "Simplification du dédouanement et de la logistique de transit à travers l'Afrique",
"transit_services_title": "Nos Services de Transit",
"transit_overview_p1": "Chez Africa Link, nous comprenons que la navigation dans les complexités du dédouanement et de la logistique de transit en Afrique peut être difficile. Notre équipe dédiée aux services de transit fournit une expertise et des solutions complètes pour assurer que votre cargaison se déplace sans problème à travers les frontières jusqu'à sa destination finale.",
"transit_overview_p2": "Avec une connaissance approfondie des réglementations douanières régionales et des relations solides avec les autorités locales, nous aidons à éliminer les retards, réduire les coûts et assurer la conformité tout au long du processus de transit.",

"transit_customs_title": "Services de Dédouanement",
"transit_doc_title": "Gestion de Documentation",
"transit_doc_desc": "Nous gérons toute la documentation requise pour le dédouanement, assurant précision et conformité avec les réglementations locales:",
"transit_doc_item1": "Préparation et gestion des connaissements",
"transit_doc_item2": "Vérification des factures commerciales",
"transit_doc_item3": "Documentation des certificats d'origine",
"transit_doc_item4": "Coordination des licences d'importation/exportation",
"transit_doc_item5": "Formulaires de déclaration douanière",

"transit_broker_title": "Services de Courtier en Douane",
"transit_broker_desc": "Nos courtiers en douane agréés représentent vos intérêts et facilitent un dédouanement efficace:",
"transit_broker_item1": "Classification des marchandises pour les applications tarifaires appropriées",
"transit_broker_item2": "Calcul et paiement des droits et taxes",
"transit_broker_item3": "Liaison avec les fonctionnaires des douanes",
"transit_broker_item4": "Assurance de conformité réglementaire",
"transit_broker_item5": "Services de dédouanement accéléré",

"transit_comply_title": "Conformité Réglementaire",
"transit_comply_desc": "Nous assurons que vos expéditions répondent à toutes les exigences réglementaires:",
"transit_comply_item1": "Audits de conformité commerciale",
"transit_comply_item2": "Mises à jour réglementaires et services consultatifs",
"transit_comply_item3": "Acquisition de permis spécialisés",
"transit_comply_item4": "Conformité en matière de santé et de sécurité",
"transit_comply_item5": "Respect des réglementations environnementales",

"transit_duty_title": "Optimisation des Droits de Douane",
"transit_duty_desc": "Nous aidons à minimiser les dépenses en droits de douane grâce à des stratégies d'optimisation légales:",
"transit_duty_item1": "Analyse de classification tarifaire",
"transit_duty_item2": "Utilisation des accords de libre-échange",
"transit_duty_item3": "Solutions d'entrepôt sous douane",
"transit_duty_item4": "Services de restitution et de récupération des droits",
"transit_duty_item5": "Planification stratégique des importations",

"transit_logistics_title": "Logistique de Transit",
"transit_logistics_desc": "Nos services de logistique de transit fournissent des solutions de bout en bout pour déplacer efficacement votre cargaison à travers l'Afrique:",
"transit_logistics_item1": "<strong>Transport Multimodal:</strong> Coordination du transport maritime, aérien, ferroviaire et routier pour un mouvement fluide des marchandises",
"transit_logistics_item2": "<strong>Optimisation des Itinéraires:</strong> Planification stratégique pour identifier les routes de transport les plus efficaces et rentables",
"transit_logistics_item3": "<strong>Gestion Transfrontalière:</strong> Gestion experte des passages frontaliers et des formalités de transit",
"transit_logistics_item4": "<strong>Suivi de Cargaison:</strong> Surveillance en temps réel et mises à jour de statut sur vos expéditions",
"transit_logistics_item5": "<strong>Gestion des Risques:</strong> Stratégies complètes pour atténuer les risques de transit et assurer la sécurité",

"transit_process_title": "Notre Processus de Logistique de Transit",
"transit_process_step1": "Planification Pré-Transit",
"transit_process_step1_desc": "Planification complète des itinéraires, préparation de la documentation et analyse des exigences réglementaires",
"transit_process_step2": "Traitement Douanier",
"transit_process_step2_desc": "Dédouanement efficace à l'origine, aux points de transit et à destination",
"transit_process_step3": "Exécution du Transport",
"transit_process_step3_desc": "Mouvement coordonné à travers plusieurs modes de transport et passages frontaliers",
"transit_process_step4": "Surveillance et Intervention",
"transit_process_step4_desc": "Suivi en temps réel et résolution proactive des problèmes pendant le transit",
"transit_process_step5": "Livraison et Documentation",
"transit_process_step5_desc": "Coordination de la livraison finale et achèvement complet de la documentation",

"transit_regional_title": "Expertise Régionale",
"transit_regional_desc": "Nos services de transit sont renforcés par notre profonde expertise régionale à travers l'Afrique:",
"transit_regional_item1": "Procédures et réglementations douanières d'Afrique de l'Ouest",
"transit_regional_item2": "Protocoles de l'union douanière de la Communauté de l'Afrique de l'Est (EAC)",
"transit_regional_item3": "Accords commerciaux de la Communauté de développement de l'Afrique australe (SADC)",
"transit_regional_item4": "Opérations frontalières et portuaires d'Afrique du Nord",
"transit_regional_item5": "Mise en œuvre de la Zone de libre-échange continentale africaine (ZLECAf)",
"transit_regional_item6": "Exigences d'importation/exportation spécifiques à chaque pays",

"transit_cta_title": "Optimisez Vos Opérations de Transit",
"transit_cta_desc": "Contactez notre équipe de services de transit pour discuter de la façon dont nous pouvons simplifier votre dédouanement et votre logistique de transit à travers l'Afrique."
// ... existing code ...
    },
    
    // Portuguese translations
    pt: {
        "nav_home": "Início",
        "nav_about": "Sobre Nós",
        "nav_services": "Serviços",
        "nav_contact": "Contato",
        
        // Serviços
        "service_fuel": "Fornecimento de Combustível",
        "service_shipping": "Suporte Marítimo",
        "service_transit": "Serviços de Trânsito",
        "service_crew": "Gestão de Tripulação",
        "service_personnel": "Fornecimento de Pessoal",
        
        // Descrições dos Serviços para Cards da Página Inicial
        "service_fuel_desc": "Serviços profissionais de abastecimento garantindo que seus navios tenham o combustível necessário quando precisarem.",
        "service_shipping_desc": "Suporte marítimo completo incluindo serviços portuários, rebocadores, acomodações flutuantes e ferramentas de inspeção marítima.",
        "service_transit_desc": "Simplifique seu desembaraço aduaneiro e logística de trânsito com nossa expertise especializada.",
        "service_crew_desc": "Serviços abrangentes de gestão de tripulação incluindo vistos, transporte, acomodações e assistência portuária/aeroportuária.",
        "service_personnel_desc": "Acesso a capitães e tripulantes qualificados para garantir que suas operações marítimas funcionem sem problemas.",
        
        // Seção Hero
        "hero_title": "AfricaLink Soluções Marítimas e Logísticas",
        "hero_subtitle": "Seu parceiro de confiança para suporte marítimo e logístico abrangente em toda a África",
        "hero_cta": "Explore Nossos Serviços",
        
        // Seção de Serviços
        "services_title": "Nossos Serviços de Suporte Marítimo",
        "learn_more": "Saiba Mais",
        
        // Seção Sobre
        "about_title": "Sobre a Africa Link",
        "about_p1": "A Africa Link é uma provedora confiável de serviços de suporte marítimo e logístico em toda a África. Com anos de experiência no setor, oferecemos soluções abrangentes adaptadas para atender às necessidades únicas de nossos clientes.",
        "about_p2": "Nossa equipe de especialistas é dedicada a garantir que suas operações marítimas funcionem de forma suave, eficiente e segura, permitindo que você se concentre em suas atividades principais.",
        
        // Seção de Contato
        "contact_title": "Entre em Contato",
        "contact_address": "Endereço:",
        "contact_phone": "Telefone:",
        "contact_email": "Email:",
        "contact_us_btn": "Entre em Contato",
        
        // Rodapé
        "footer_tagline": "Seu parceiro de confiança para serviços de suporte marítimo e logístico em toda a África.",
        "footer_quick_links": "Links Rápidos",
        "footer_services": "Nossos Serviços",
        "footer_copyright": "© 2025 Africa Link. Todos os direitos reservados.",
        
        // Página de Fornecimento de Combustível
        "fuel_service_title": "Serviços de Fornecimento de Combustível",
        "fuel_service_subtitle": "Serviços profissionais de abastecimento garantindo que seus navios tenham o combustível necessário quando precisarem",
        "fuel_overview_title": "Nossos Serviços de Abastecimento",
        "fuel_overview_p1": "Na Africa Link, entendemos que o fornecimento confiável de combustível é crítico para suas operações marítimas. Nossos serviços abrangentes de abastecimento garantem que seus navios recebam combustível de alta qualidade quando e onde precisarem, minimizando o tempo de inatividade e maximizando a eficiência operacional.",
        "fuel_overview_p2": "Com nossa extensa rede de fornecedores e parceiros logísticos em toda a África, podemos fornecer serviços de abastecimento em portos principais e locais offshore, garantindo que suas necessidades de combustível sejam atendidas independentemente da localização do seu navio.",
        "key_features": "Características Principais",
        "quality_fuel": "Fornecimento de Combustível de Qualidade",
        "quality_fuel_desc": "Fornecemos combustíveis marítimos de alta qualidade que atendem aos padrões internacionais e cumprem as regulamentações de emissão de enxofre.",
        "strategic_locations": "Localizações Estratégicas",
        "strategic_locations_desc": "Oferecemos serviços de abastecimento em portos principais e locais offshore em toda a África.",
        "timely_delivery": "Entrega Pontual",
        "timely_delivery_desc": "Entendemos a importância da pontualidade nas operações marítimas e garantimos a entrega pontual de combustível.",
        "quality_assurance": "Garantia de Qualidade",
        "quality_assurance_desc": "Nosso combustível passa por rigoroso controle de qualidade para garantir que atenda às suas especificações e padrões da indústria.",
        "fuel_types_title": "Tipos de Combustível que Fornecemos",
        "fuel_type_mgo": "<strong>Óleo Diesel Marítimo (MGO)</strong> - Combustível destilado de baixo teor de enxofre",
        "fuel_type_mdo": "<strong>Óleo Diesel Marinho (MDO)</strong> - Uma mistura de óleos destilados e pesados",
        "fuel_type_vlsfo": "<strong>Óleo Combustível de Muito Baixo Teor de Enxofre (VLSFO)</strong> - Em conformidade com as regulamentações IMO 2020",
        "fuel_type_hfo": "<strong>Óleo Combustível Pesado (HFO)</strong> - Para navios com sistemas de depuração",
        "fuel_type_lng": "<strong>Gás Natural Liquefeito (GNL)</strong> - Opção de combustível alternativo limpo",
        "bunkering_process_title": "Nosso Processo de Abastecimento",
        "bunkering_step1": "<strong>Solicitação e Planejamento</strong> - Recebemos seus requisitos de combustível e criamos um plano detalhado de entrega.",
        "bunkering_step2": "<strong>Coordenação Logística</strong> - Nossa equipe coordena com fornecedores e autoridades portuárias para garantir operações suaves.",
        "bunkering_step3": "<strong>Controle de Qualidade</strong> - Inspecionamos a qualidade do combustível antes da entrega para garantir que atenda às especificações.",
        "bunkering_step4": "<strong>Entrega</strong> - O combustível é entregue ao seu navio no horário e local acordados.",
        "bunkering_step5": "<strong>Documentação</strong> - Fornecemos toda a documentação necessária para seus registros.",
        "need_bunkering": "Precisa de Serviços de Abastecimento?",
        "contact_fuel_desc": "Entre em contato para discutir os requisitos de combustível do seu navio e como podemos apoiar suas operações.",

        // Página de Fornecimento de Pessoal
        "personnel_title": "Serviços de Fornecimento de Pessoal",
        "personnel_subtitle": "Acesso a capitães e tripulantes qualificados para garantir que suas operações marítimas funcionem sem problemas",
        "personnel_service_title": "Nossos Serviços de Fornecimento de Pessoal",
        "personnel_service_p1": "Na Africa Link, entendemos que o sucesso de suas operações marítimas depende de ter o pessoal certo no comando. Nossos serviços de Fornecimento de Pessoal conectam você a capitães, oficiais e tripulantes altamente qualificados que trazem expertise, experiência e profissionalismo para seus navios.",
        "personnel_service_p2": "Seja para preencher vagas temporárias, montar uma tripulação completa ou encontrar profissionais marítimos especializados, nossa extensa rede de pessoal marítimo verificado garante que você tenha acesso ao talento necessário, quando precisar.",
        "personnel_categories_title": "Pessoal Marítimo que Fornecemos",

        "personnel_officers": "Oficiais",
        "personnel_officers_desc": "Fornecemos acesso a oficiais experientes e certificados para seu navio:",
        "personnel_officers_1": "Capitães/Mestres com extensa experiência de comando",
        "personnel_officers_2": "Imediatos/Primeiros Oficiais",
        "personnel_officers_3": "Segundos e Terceiros Oficiais",
        "personnel_officers_4": "Chefes de Máquinas com conhecimento técnico abrangente",
        "personnel_officers_5": "Primeiros, Segundos e Terceiros Engenheiros",
        "personnel_officers_6": "Oficiais Eletricistas e Oficiais Técnicos",

        "personnel_deck": "Tripulação de Convés",
        "personnel_deck_desc": "Nossos tripulantes de convés são habilidosos e treinados para lidar com várias operações de navios:",
        "personnel_deck_1": "Contramestres com experiência em liderança e operações",
        "personnel_deck_2": "Marinheiros de Primeira Classe (AB) qualificados em funções de marinharia",
        "personnel_deck_3": "Marinheiros Ordinários (OS) para suporte geral de convés",
        "personnel_deck_4": "Marinheiros experientes em vários tipos de navios",
        "personnel_deck_5": "Operadores especializados em operações offshore",
        "personnel_deck_6": "Operadores de Guindaste para manuseio especializado de carga",

        "personnel_engine": "Tripulação de Máquinas",
        "personnel_engine_desc": "Nossa equipe do departamento de máquinas garante a operação eficiente dos sistemas de propulsão do seu navio:",
        "personnel_engine_1": "Motoristas com expertise mecânica",
        "personnel_engine_2": "Lubrificadores especializados em manutenção de máquinas",
        "personnel_engine_3": "Ajustadores treinados em reparo e fabricação",
        "personnel_engine_4": "Eletricistas para manutenção de sistemas elétricos",
        "personnel_engine_5": "Auxiliares de Sala de Máquinas para suporte geral",
        "personnel_engine_6": "Engenheiros de Refrigeração para sistemas especializados",

        "personnel_hospitality": "Equipe de Hotelaria",
        "personnel_hospitality_desc": "Fornecemos equipe de hotelaria de qualidade para garantir o conforto a bordo de seus navios:",
        "personnel_hospitality_1": "Chefes de Cozinha experientes em cozinhas marítimas",
        "personnel_hospitality_2": "Segundos Cozinheiros e Cozinheiros Assistentes",
        "personnel_hospitality_3": "Comissários para serviço de cabine e áreas comuns",
        "personnel_hospitality_4": "Auxiliares de Refeitório para serviço de refeições e suporte",
        "personnel_hospitality_5": "Pessoal de Lavanderia para manutenção de roupas de cama e uniformes",
        "personnel_hospitality_6": "Pessoal Médico para suporte de saúde e segurança",

        "personnel_specialized": "Pessoal Especializado",
        "personnel_specialized_desc": "Também fornecemos pessoal marítimo especializado para operações específicas:",
        "personnel_specialized_1": "Oficiais de Posicionamento Dinâmico (DPOs) para navios especializados",
        "personnel_specialized_2": "Técnicos de ROV (Veículo Operado Remotamente)",
        "personnel_specialized_3": "Gerentes de Instalação Offshore",
        "personnel_specialized_4": "Oficiais de HSE (Saúde, Segurança e Meio Ambiente)",
        "personnel_specialized_5": "Pessoal de Segurança Marítima",
        "personnel_specialized_6": "Inspetores para serviços de inspeção especializada",

        "personnel_benefits_title": "Benefícios dos Nossos Serviços de Fornecimento de Pessoal",
        "personnel_benefit_qualified": "Pessoal Qualificado",
        "personnel_benefit_qualified_desc": "Todo o pessoal passa por rigorosa triagem, incluindo verificação de certificações, experiência e referências para garantir que atendam aos padrões marítimos internacionais.",
        "personnel_benefit_response": "Resposta Rápida",
        "personnel_benefit_response_desc": "Nossa extensa rede nos permite responder rapidamente às suas necessidades de pessoal, mesmo com pouco aviso prévio ou em situações de emergência.",
        "personnel_benefit_knowledge": "Conhecimento Local",
        "personnel_benefit_knowledge_desc": "Muitos de nossos profissionais têm experiência específica trabalhando em águas e portos africanos, trazendo valioso conhecimento local para suas operações.",
        "personnel_benefit_flexibility": "Flexibilidade",
        "personnel_benefit_flexibility_desc": "Oferecemos soluções flexíveis de pessoal, desde colocações individuais até fornecimento completo de tripulação, em contratos de curto e longo prazo.",

        "recruitment_process_title": "Nosso Processo de Recrutamento",
        "recruitment_step1": "Avaliação de Necessidades",
        "recruitment_step1_desc": "Começamos entendendo completamente seus requisitos específicos de pessoal, incluindo qualificações, níveis de experiência, duração do contrato e quaisquer habilidades especiais necessárias.",
        "recruitment_step2": "Seleção de Candidatos",
        "recruitment_step2_desc": "Identificamos candidatos potenciais em nosso banco de dados que correspondam aos seus requisitos e realizamos triagens preliminares.",
        "recruitment_step3": "Verificação",
        "recruitment_step3_desc": "Verificamos todas as certificações, qualificações e experiência, e realizamos verificações de antecedentes para garantir os mais altos padrões.",
        "recruitment_step4": "Revisão do Cliente",
        "recruitment_step4_desc": "Apresentamos candidatos qualificados para sua revisão e aprovação, incluindo perfis abrangentes e documentação.",
        "recruitment_step5": "Implantação",
        "recruitment_step5_desc": "Uma vez aprovado, cuidamos de toda a logística para garantir que o pessoal chegue ao seu navio no prazo, incluindo arranjos de viagem, vistos e qualquer documentação necessária.",

        "quality_assurance_title": "Nossa Garantia de Qualidade",
        "quality_assurance_desc": "Na Africa Link, mantemos rigorosos padrões de garantia de qualidade para todo o pessoal que fornecemos:",
        "quality_assurance_1": "Verificação minuciosa de qualificações e experiência",
        "quality_assurance_2": "Verificação de todos os certificados e licenças",
        "quality_assurance_3": "Verificações abrangentes de antecedentes",
        "quality_assurance_4": "Avaliações regulares de desempenho",
        "quality_assurance_5": "Conformidade com padrões e regulamentos marítimos internacionais",
        "quality_assurance_6": "Treinamento contínuo e atualizações de certificação",

        "personnel_cta_title": "Precisa de Pessoal Marítimo?",
        "personnel_cta_desc": "Entre em contato para discutir seus requisitos de pessoal e como podemos apoiar suas operações marítimas com profissionais qualificados.",

        // Página de Gestão de Tripulação
        "crew_service_title": "Serviços de Gestão de Tripulação",
        "crew_service_subtitle": "Gestão abrangente de tripulação incluindo vistos, transporte, acomodações, voos e assistência portuária/aeroportuária",
        "crew_overview_title": "Nossos Serviços de Gestão de Tripulação",
        "crew_overview_p1": "Na Africa Link, entendemos que a gestão eficiente e eficaz da tripulação é essencial para operações marítimas bem-sucedidas. Nossos serviços abrangentes de gestão de tripulação são projetados para lidar com todos os aspectos da logística da tripulação, garantindo que seu pessoal seja bem cuidado e possa se concentrar em suas responsabilidades principais.",
        "crew_overview_p2": "Do processamento de vistos e transporte até acomodações e assistência portuária, nossa equipe dedicada fornece soluções completas de gestão de tripulação adaptadas às suas necessidades específicas, permitindo que você se concentre em suas operações principais.",
        "crew_services_title": "Nossos Serviços Abrangentes",
        "crew_visa_title": "Serviços de Visto",
        "crew_transport_title": "Transporte",
        "crew_accom_title": "Acomodações",
        "crew_flight_title": "Arranjos de Voo",
        "crew_port_title": "Assistência Portuária/Aeroportuária",
        "crew_benefits_title": "Benefícios dos Nossos Serviços de Gestão de Tripulação",
        "crew_benefit_time": "Eficiência de Tempo",
        "crew_benefit_time_desc": "Terceirizar a gestão da tripulação para a Africa Link economiza tempo valioso para sua equipe operacional, permitindo que eles se concentrem nas atividades principais do negócio enquanto cuidamos da logística.",
        "crew_benefit_cost": "Otimização de Custos",
        "crew_benefit_cost_desc": "Nossa rede estabelecida e relacionamentos baseados em volume com prestadores de serviços nos permitem garantir tarifas preferenciais, ajudando a reduzir seus custos gerais de gestão de tripulação.",
        "crew_benefit_compliance": "Conformidade Regulatória",
        "crew_benefit_compliance_desc": "Mantemo-nos atualizados com as mudanças nas regulamentações de imigração e marítimas em países africanos, garantindo que suas operações de tripulação permaneçam sempre em conformidade com as leis locais.",
        "crew_benefit_local": "Expertise Local",
        "crew_benefit_local_desc": "Nosso profundo entendimento das condições locais, costumes e práticas nos países africanos ajuda a navegar por nuances culturais e garantir operações suaves da tripulação.",
        "crew_process_title": "Nosso Processo de Gestão de Tripulação",
        "crew_process_step1": "Avaliação de Requisitos",
        "crew_process_step1_desc": "Trabalhamos com você para entender suas necessidades e requisitos específicos de gestão de tripulação.",
        "crew_process_step2": "Planejamento e Coordenação",
        "crew_process_step2_desc": "Desenvolvemos um plano detalhado e coordenamos todos os serviços e arranjos necessários.",
        "crew_process_step3": "Implementação",
        "crew_process_step3_desc": "Executamos todos os arranjos, garantindo rotações e logística suave da tripulação.",
        "crew_process_step4": "Monitoramento e Suporte",
        "crew_process_step4_desc": "Fornecemos suporte e monitoramento 24/7 para resolver quaisquer problemas ou mudanças que possam surgir.",
        "crew_process_step5": "Relatórios e Revisão",
        "crew_process_step5_desc": "Fornecemos relatórios abrangentes e serviços de revisão para garantir melhoria contínua.",
        "crew_cta_title": "Precisa de Serviços de Gestão de Tripulação?",
        "crew_cta_desc": "Entre em contato conosco para discutir como nossos serviços abrangentes de gestão de tripulação podem apoiar suas operações marítimas.",
        "contact_us_btn": "Entre em Contato",
        
        // Descrições dos Serviços de Gestão de Tripulação
        "crew_visa_desc": "Cuidamos de todos os aspectos do processamento de vistos para seus tripulantes, garantindo entrada e saída tranquila em países africanos:",
        "crew_visa_item1": "Preparação e submissão de solicitação de visto",
        "crew_visa_item2": "Verificação de documentação e checagens de conformidade",
        "crew_visa_item3": "Processamento acelerado de visto para trocas urgentes de tripulação",
        "crew_visa_item4": "Coordenação de permissão de trabalho para estadias prolongadas",
        "crew_visa_item5": "Extensões e alterações de visto conforme necessário",
        "crew_visa_item6": "Conformidade com regulamentações de imigração em mudança",
        
        "crew_transport_desc": "Coordenamos todas as necessidades de transporte para sua tripulação com confiabilidade e conforto como nossas prioridades:",
        "crew_transport_item1": "Transfers de aeroporto com veículos seguros e climatizados",
        "crew_transport_item2": "Transporte do porto para acomodação",
        "crew_transport_item3": "Serviços de transporte para rotação de tripulação",
        "crew_transport_item4": "Assistência de transporte de emergência",
        "crew_transport_item5": "Transporte para estabelecimentos médicos quando necessário",
        "crew_transport_item6": "Suporte de transporte 24/7 para mudanças inesperadas",
        
        "crew_accom_desc": "Organizamos acomodações de qualidade que atendem às necessidades da sua tripulação e ao orçamento da sua empresa:",
        "crew_accom_item1": "Seleção e reserva de hotéis próximos a portos e aeroportos",
        "crew_accom_item2": "Apartamentos mobiliados para estadias prolongadas",
        "crew_accom_item3": "Verificações de qualidade para garantir padrões de acomodação",
        "crew_accom_item4": "Coordenação de requisitos dietéticos especiais",
        "crew_accom_item5": "Gestão de reservas em grupo para tripulações maiores",
        "crew_accom_item6": "Arranjos de reserva flexíveis para horários em mudança",
        
        "crew_flight_desc": "Gerenciamos todas as reservas de voo e logística para garantir rotações suaves de tripulação:",
        "crew_flight_item1": "Reservas de voos econômicas com companhias aéreas estabelecidas",
        "crew_flight_item2": "Roteamento ideal para minimizar tempos de trânsito",
        "crew_flight_item3": "Arranjos de assistência especial quando necessário",
        "crew_flight_item4": "Coordenação de excesso de bagagem para equipamento da tripulação",
        "crew_flight_item5": "Gestão de alterações e cancelamentos de voos",
        "crew_flight_item6": "Arranjos de voos de emergência durante interrupções",
        
        "crew_port_desc": "Fornecemos assistência abrangente em portos e aeroportos para garantir transições suaves:",
        "crew_port_item1": "Serviços de recepção em aeroportos",
        "crew_port_item2": "Processamento acelerado de imigração quando disponível",
        "crew_port_item3": "Assistência alfandegária para pertences pessoais",
        "crew_port_item4": "Coordenação de acesso ao porto e autorizações de segurança",
        "crew_port_item5": "Ligação com autoridades portuárias e aeroportuárias",
        "crew_port_item6": "Suporte à tripulação durante atrasos inesperados",
        // Página de Suporte Marítimo
        "shipping_title": "Serviços de Suporte Marítimo",
        "shipping_subtitle": "Serviços portuários abrangentes, rebocadores, acomodações flutuantes e ferramentas de inspeção marítima",
        "shipping_services_title": "Nossos Serviços de Suporte Marítimo",
        "shipping_overview_p1": "A Africa Link fornece uma gama completa de serviços de suporte marítimo projetados para aprimorar suas operações marítimas em toda a África. De serviços portuários essenciais a ferramentas especializadas de inspeção marítima, oferecemos soluções abrangentes para atender aos desafios únicos de operar em águas africanas.",
        "shipping_overview_p2": "Nossa equipe de profissionais marítimos experientes garante que cada aspecto de suas necessidades marítimas seja tratado de forma eficiente e profissional, permitindo que suas operações funcionem de maneira suave e segura.",

        "shipping_support_title": "Nossos Serviços de Suporte",
        "shipping_port_title": "Serviços Portuários",
        "shipping_port_desc": "Nossos serviços portuários abrangentes incluem:",
        "shipping_port_item1": "Manuseio de carga e estiva",
        "shipping_port_item2": "Transferências navio-terra",
        "shipping_port_item3": "Coordenação de agentes portuários",
        "shipping_port_item4": "Arranjos de atracação",
        "shipping_port_item5": "Assistência no desembaraço aduaneiro",
        "shipping_port_item6": "Coordenação de segurança portuária",

        "shipping_tug_title": "Serviços de Rebocador",
        "shipping_tug_desc": "Fornecemos serviços confiáveis de rebocador para:",
        "shipping_tug_item1": "Atracação e desatracação de navios",
        "shipping_tug_item2": "Reboque portuário",
        "shipping_tug_item3": "Reposicionamento de navios",
        "shipping_tug_item4": "Operações de salvamento",
        "shipping_tug_item5": "Suporte offshore",
        "shipping_tug_item6": "Resposta a emergências",

        "shipping_accom_title": "Acomodações Flutuantes",
        "shipping_accom_desc": "Nossas soluções de acomodação flutuante incluem:",
        "shipping_accom_item1": "Navios de acomodação totalmente equipados",
        "shipping_accom_item2": "Alojamentos temporários para projetos offshore",
        "shipping_accom_item3": "Serviços de alimentação e hotelaria",
        "shipping_accom_item4": "Instalações de recreação",
        "shipping_accom_item5": "Serviços de suporte médico",
        "shipping_accom_item6": "Infraestrutura de comunicação",

        "shipping_inspect_title": "Ferramentas de Inspeção Marítima",
        "shipping_inspect_desc": "Fornecemos ferramentas e serviços avançados de inspeção marítima, incluindo:",
        "shipping_inspect_item1": "Equipamento de inspeção de casco",
        "shipping_inspect_item2": "Drones de inspeção subaquática",
        "shipping_inspect_item3": "Equipamento de teste não destrutivo",
        "shipping_inspect_item4": "Sistemas de monitoramento de condição",
        "shipping_inspect_item5": "Pessoal de inspeção profissional",
        "shipping_inspect_item6": "Serviços de documentação e relatórios",

        "shipping_benefits_title": "Benefícios dos Nossos Serviços de Suporte Marítimo",
        "shipping_benefit_efficiency": "Eficiência Operacional Aprimorada",
        "shipping_benefit_efficiency_desc": "Nossos serviços de suporte abrangentes otimizam suas operações marítimas, reduzindo tempo de inatividade e melhorando a eficiência geral.",
        "shipping_benefit_safety": "Segurança Aprimorada",
        "shipping_benefit_safety_desc": "Nossos serviços e equipamentos profissionais ajudam a garantir a segurança de seus navios, tripulação e carga.",
        "shipping_benefit_expertise": "Expertise Local",
        "shipping_benefit_expertise_desc": "Nosso profundo entendimento dos portos africanos e regulamentos marítimos ajuda a navegar por requisitos locais complexos.",
        "shipping_benefit_cost": "Soluções Custo-Efetivas",
        "shipping_benefit_cost_desc": "Nossos serviços integrados ajudam a reduzir custos operacionais gerais mantendo altos padrões.",

        "shipping_cta_title": "Precisa de Suporte Marítimo?",
        "shipping_cta_desc": "Entre em contato com nossa equipe para discutir como nossos serviços de suporte marítimo podem aprimorar suas operações marítimas na África.",

        // Página de Serviços de Trânsito
        "transit_title": "Serviços de Trânsito",
        "transit_subtitle": "Simplificando o desembaraço aduaneiro e a logística de trânsito em toda a África",
        "transit_services_title": "Nossos Serviços de Trânsito",
        "transit_overview_p1": "Na Africa Link, entendemos que navegar pelas complexidades do desembaraço aduaneiro e logística de trânsito na África pode ser desafiador. Nossa equipe dedicada de serviços de trânsito fornece orientação especializada e soluções abrangentes para garantir que sua carga se mova suavemente através das fronteiras até seu destino final.",
        "transit_overview_p2": "Com extenso conhecimento dos regulamentos aduaneiros regionais e fortes relacionamentos com autoridades locais, ajudamos a eliminar atrasos, reduzir custos e garantir conformidade durante todo o processo de trânsito.",

        "transit_customs_title": "Serviços de Desembaraço Aduaneiro",
        "transit_doc_title": "Gestão de Documentação",
        "transit_doc_desc": "Gerenciamos toda a documentação necessária para desembaraço aduaneiro, garantindo precisão e conformidade com regulamentos locais:",
        "transit_doc_item1": "Preparação e gestão de conhecimentos de embarque",
        "transit_doc_item2": "Verificação de faturas comerciais",
        "transit_doc_item3": "Documentação de certificados de origem",
        "transit_doc_item4": "Coordenação de licenças de importação/exportação",
        "transit_doc_item5": "Formulários de declaração aduaneira",

        "transit_broker_title": "Serviços de Despachante Aduaneiro",
        "transit_broker_desc": "Nossos despachantes aduaneiros licenciados representam seus interesses e facilitam o desembaraço eficiente:",
        "transit_broker_item1": "Classificação de mercadorias para aplicações tarifárias adequadas",
        "transit_broker_item2": "Cálculo e pagamento de impostos e taxas",
        "transit_broker_item3": "Ligação com oficiais aduaneiros",
        "transit_broker_item4": "Garantia de conformidade regulatória",
        "transit_broker_item5": "Serviços de desembaraço acelerado",

        "transit_comply_title": "Conformidade Regulatória",
        "transit_comply_desc": "Garantimos que seus envios atendam a todos os requisitos regulatórios:",
        "transit_comply_item1": "Auditorias de conformidade comercial",
        "transit_comply_item2": "Atualizações regulatórias e serviços consultivos",
        "transit_comply_item3": "Aquisição de permissões especializadas",
        "transit_comply_item4": "Conformidade com saúde e segurança",
        "transit_comply_item5": "Adesão a regulamentos ambientais",

        "transit_duty_title": "Otimização de Impostos",
        "transit_duty_desc": "Ajudamos a minimizar despesas com impostos através de estratégias legais de otimização:",
        "transit_duty_item1": "Análise de classificação tarifária",
        "transit_duty_item2": "Utilização de acordos de livre comércio",
        "transit_duty_item3": "Soluções de armazém alfandegado",
        "transit_duty_item4": "Serviços de drawback e recuperação de impostos",
        "transit_duty_item5": "Planejamento estratégico de importação",
        
        "transit_logistics_title": "Logística de Trânsito",
        "transit_logistics_desc": "Nossos serviços de logística de trânsito fornecem soluções completas para movimentar sua carga eficientemente pela África:",
        "transit_logistics_item1": "<strong>Transporte Multimodal:</strong> Coordenação de transporte marítimo, aéreo, ferroviário e rodoviário para movimentação contínua de carga",
        "transit_logistics_item2": "<strong>Otimização de Rotas:</strong> Planejamento estratégico para identificar as rotas de transporte mais eficientes e econômicas",
        "transit_logistics_item3": "<strong>Gestão Transfronteiriça:</strong> Tratamento especializado de travessias de fronteira e formalidades de trânsito",
        "transit_logistics_item4": "<strong>Rastreamento de Carga:</strong> Monitoramento em tempo real e atualizações de status de seus envios",
        "transit_logistics_item5": "<strong>Gestão de Riscos:</strong> Estratégias abrangentes para mitigar riscos de trânsito e garantir segurança",
        
        "transit_process_title": "Nosso Processo de Logística de Trânsito",
        "transit_process_step1": "Planejamento Pré-Trânsito",
        "transit_process_step1_desc": "Planejamento abrangente de rotas, preparação de documentação e análise de requisitos regulatórios",
        "transit_process_step2": "Processamento Aduaneiro",
        "transit_process_step2_desc": "Desembaraço aduaneiro eficiente na origem, pontos de trânsito e destino",
        "transit_process_step3": "Execução do Transporte",
        "transit_process_step3_desc": "Movimentação coordenada através de múltiplos modos de transporte e travessias de fronteira",
        "transit_process_step4": "Monitoramento e Intervenção",
        "transit_process_step4_desc": "Rastreamento em tempo real e resolução proativa de problemas durante o trânsito",
        "transit_process_step5": "Entrega e Documentação",
        "transit_process_step5_desc": "Coordenação de entrega final e conclusão abrangente da documentação",
        
        "transit_regional_title": "Expertise Regional",
        "transit_regional_desc": "Nossos serviços de trânsito são fortalecidos por nossa profunda expertise regional em toda a África:",
        "transit_regional_item1": "Procedimentos e regulamentos aduaneiros da África Ocidental",
        "transit_regional_item2": "Protocolos da união aduaneira da Comunidade da África Oriental (EAC)",
        "transit_regional_item3": "Acordos comerciais da Comunidade de Desenvolvimento da África Austral (SADC)",
        "transit_regional_item4": "Operações fronteiriças e portuárias da África do Norte",
        "transit_regional_item5": "Implementação da Área de Livre Comércio Continental Africana (AfCFTA)",
        "transit_regional_item6": "Requisitos específicos de importação/exportação por país",
        
        "transit_cta_title": "Otimize Suas Operações de Trânsito",
        "transit_cta_desc": "Entre em contato com nossa equipe de serviços de trânsito para discutir como podemos simplificar seu desembaraço aduaneiro e logística de trânsito em toda a África."
    },
    
    // Arabic translations
    ar: {
        // Navigation
        "nav_home": "الرئيسية",
        "nav_about": "من نحن",
        "nav_services": "الخدمات",
        "nav_contact": "اتصل بنا",
        
        // Services
        "service_fuel": "توريد الوقود",
        "service_shipping": "دعم الشحن",
        "service_transit": "خدمات العبور",
        "service_crew": "إدارة الطاقم",
        "service_personnel": "توفير الأفراد",
        
        // Service Descriptions for Homepage Cards
        "service_fuel_desc": "خدمات تزويد السفن بالوقود المهنية لضمان حصول سفنك على الوقود الذي تحتاجه عند الحاجة إليه.",
        "service_shipping_desc": "دعم شامل للشحن يشمل خدمات الموانئ، قوارب السحب، أماكن الإقامة العائمة، وأدوات الفحص البحري.",
        "service_transit_desc": "تبسيط التخليص الجمركي والخدمات اللوجستية للعبور من خلال خبرتنا المتخصصة.",
        "service_crew_desc": "خدمات شاملة لإدارة الطاقم تشمل التأشيرات، النقل، الإقامة، والمساعدة في الموانئ/المطارات.",
        "service_personnel_desc": "الوصول إلى ربابنة وأفراد طاقم مؤهلين لضمان سير عملياتك البحرية بسلاسة.",
        
        // Hero Section
        "hero_title": "أفريكا لينك للحلول البحرية واللوجستية",
        "hero_subtitle": "شريكك الموثوق للدعم البحري واللوجستي الشامل في جميع أنحاء أفريقيا",
        "hero_cta": "استكشف خدماتنا",
        
        // Services Section
        "services_title": "خدمات الدعم البحري لدينا",
        "learn_more": "اعرف المزيد",
        
        // About Section
        "about_title": "عن أفريكا لينك",
        "about_p1": "أفريكا لينك هي مزود موثوق لخدمات الدعم البحري واللوجستي في جميع أنحاء أفريقيا. مع سنوات من الخبرة في الصناعة، نقدم حلولًا شاملة مصممة لتلبية الاحتياجات الفريدة لعملائنا.",
        "about_p2": "فريقنا من الخبراء مكرس لضمان تشغيل عملياتك البحرية بسلاسة وكفاءة وأمان، مما يتيح لك التركيز على أنشطة عملك الأساسية.",
        
        // Contact Section
        "contact_title": "اتصل بنا",
        "contact_address": "العنوان:",
        "contact_phone": "الهاتف:",
        "contact_email": "البريد الإلكتروني:",
        "contact_us_btn": "اتصل بنا",
        
        // Footer
        "footer_tagline": "شريكك الموثوق لخدمات الدعم البحري واللوجستي في جميع أنحاء أفريقيا.",
        "footer_quick_links": "روابط سريعة",
        "footer_services": "خدماتنا",
        "footer_copyright": "© 2025 أفريكا لينك. جميع الحقوق محفوظة.",
        
        // Fuel Supply Page - complete translations
        "fuel_service_title": "خدمات توريد الوقود",
        "fuel_service_subtitle": "خدمات تزويد الوقود المهنية تضمن حصول سفنك على الوقود الذي تحتاجه عندما تحتاجه",
        "fuel_overview_title": "خدمات التزويد بالوقود لدينا",
        "fuel_overview_p1": "في أفريكا لينك، ندرك أن إمدادات الوقود الموثوقة أمر حيوي لعملياتك البحرية. خدمات التزويد بالوقود الشاملة لدينا تضمن أن سفنك تتلقى وقودًا عالي الجودة عندما وحيثما تحتاج إليه، مما يقلل من وقت التعطل ويزيد من كفاءة التشغيل.",
        "fuel_overview_p2": "من خلال شبكتنا الواسعة من الموردين والشركاء اللوجستيين عبر أفريقيا، يمكننا تقديم خدمات تزويد بالوقود في الموانئ الرئيسية والمواقع البحرية، مما يضمن تلبية احتياجاتك من الوقود بغض النظر عن موقع سفينتك.",
        "key_features": "الميزات الرئيسية",
        "quality_fuel": "توريد وقود عالي الجودة",
        "quality_fuel_desc": "نحن نوفر وقود بحري عالي الجودة يلبي المعايير الدولية ويتوافق مع لوائح انبعاثات الكبريت.",
        "strategic_locations": "مواقع استراتيجية",
        "strategic_locations_desc": "نقدم خدمات تزويد الوقود في الموانئ الرئيسية والمواقع البحرية في جميع أنحاء أفريقيا.",
        "timely_delivery": "توصيل في الوقت المناسب",
        "timely_delivery_desc": "نحن ندرك أهمية الدقة في العمليات البحرية ونضمن تسليم الوقود في الوقت المناسب.",
        "quality_assurance": "ضمان الجودة",
        "quality_assurance_desc": "يخضع وقودنا لرقابة جودة صارمة لضمان أنه يلبي مواصفاتك ومعايير الصناعة.",
        "fuel_types_title": "أنواع الوقود التي نوفرها",
        "fuel_type_mgo": "<strong>زيت الغاز البحري (MGO)</strong> - وقود مقطر منخفض الكبريت",
        "fuel_type_mdo": "<strong>زيت الديزل البحري (MDO)</strong> - مزيج من المقطرات وزيوت الوقود الثقيلة",
        "fuel_type_vlsfo": "<strong>زيت الوقود منخفض الكبريت للغاية (VLSFO)</strong> - متوافق مع لوائح المنظمة البحرية الدولية 2020",
        "fuel_type_hfo": "<strong>زيت الوقود الثقيل (HFO)</strong> - للسفن المزودة بأنظمة تنقية",
        "fuel_type_lng": "<strong>الغاز الطبيعي المسال (LNG)</strong> - خيار وقود بديل نظيف",
        "bunkering_process_title": "عملية التزويد بالوقود لدينا",
        "bunkering_step1": "<strong>الطلب والتخطيط</strong> - نتلقى متطلبات الوقود الخاصة بك ونقوم بإعداد خطة تسليم مفصلة.",
        "bunkering_step2": "<strong>التنسيق اللوجستي</strong> - يقوم فريقنا بالتنسيق مع الموردين وسلطات الموانئ لضمان عمليات سلسة.",
        "bunkering_step3": "<strong>مراقبة الجودة</strong> - نقوم بفحص جودة الوقود قبل التسليم للتأكد من أنه يلبي المواصفات.",
        "bunkering_step4": "<strong>التسليم</strong> - يتم تسليم الوقود إلى سفينتك في الوقت والمكان المتفق عليهما.",
        "bunkering_step5": "<strong>التوثيق</strong> - نقدم جميع الوثائق اللازمة لسجلاتك.",
        "need_bunkering": "هل تحتاج إلى خدمات تزويد الوقود؟",
        "contact_fuel_desc": "اتصل بنا لمناقشة متطلبات الوقود لسفينتك وكيف يمكننا دعم عملياتك.",
        
        // Personnel Provision - Basic Arabic translations
        "personnel_title": "خدمات توفير الأفراد",
        "personnel_subtitle": "الوصول إلى قباطنة وأفراد طاقم مؤهلين لضمان سير عملياتك البحرية بسلاسة",
        "personnel_categories_title": "الأفراد البحريين الذين نوفرهم",
        "personnel_officers": "الضباط",
        "personnel_deck": "طاقم السطح",
        "personnel_engine": "طاقم المحرك",
        "personnel_hospitality": "طاقم الضيافة",
        "personnel_specialized": "أفراد متخصصون",
        "personnel_benefits_title": "فوائد خدمات توفير الأفراد لدينا",
        "personnel_benefit_qualified": "أفراد مؤهلون",
        "personnel_benefit_response": "استجابة سريعة",
        "personnel_benefit_knowledge": "معرفة محلية",
        "personnel_benefit_flexibility": "المرونة",
        "recruitment_process_title": "عملية التوظيف لدينا",
        "personnel_cta_title": "هل تحتاج إلى أفراد بحريين؟",
        
        // Transit Services Page - complete Arabic translations
        "transit_title": "خدمات العبور",
        "transit_subtitle": "تبسيط التخليص الجمركي ولوجستيات العبور عبر أفريقيا",
        "transit_services_title": "خدمات العبور لدينا",
        "transit_overview_p1": "في أفريكا لينك، نتفهم أن التنقل عبر تعقيدات التخليص الجمركي ولوجستيات العبور في أفريقيا يمكن أن يكون صعباً. يقدم فريق خدمات العبور المتخصص لدينا توجيهاً خبيراً وحلولاً شاملة لضمان انتقال شحنتك بسلاسة عبر الحدود وإلى وجهتها النهائية.",
        "transit_overview_p2": "مع المعرفة الواسعة باللوائح الجمركية الإقليمية والعلاقات القوية مع السلطات المحلية، نساعد في القضاء على التأخير، وتقليل التكاليف، وضمان الامتثال طوال عملية العبور.",
        
        "transit_customs_title": "خدمات التخليص الجمركي",
        "transit_doc_title": "إدارة الوثائق",
        "transit_doc_desc": "نتعامل مع جميع الوثائق المطلوبة للتخليص الجمركي، مما يضمن الدقة والامتثال للوائح المحلية:",
        "transit_doc_item1": "إعداد وإدارة بوالص الشحن",
        "transit_doc_item2": "التحقق من الفواتير التجارية",
        "transit_doc_item3": "وثائق شهادات المنشأ",
        "transit_doc_item4": "تنسيق تراخيص الاستيراد/التصدير",
        "transit_doc_item5": "نماذج الإقرارات الجمركية",
        
        "transit_broker_title": "خدمات الوسيط الجمركي",
        "transit_broker_desc": "يمثل وسطاؤنا الجمركيون المرخصون مصالحك ويسهلون التخليص الفعال:",
        "transit_broker_item1": "تصنيف البضائع للتطبيقات التعريفية المناسبة",
        "transit_broker_item2": "حساب ودفع الرسوم والضرائب",
        "transit_broker_item3": "التواصل مع المسؤولين الجمركيين",
        "transit_broker_item4": "ضمان الامتثال التنظيمي",
        "transit_broker_item5": "خدمات التخليص السريع",
        
        "transit_comply_title": "الامتثال التنظيمي",
        "transit_comply_desc": "نضمن أن شحناتك تلبي جميع المتطلبات التنظيمية:",
        "transit_comply_item1": "تدقيقات الامتثال التجاري",
        "transit_comply_item2": "تحديثات تنظيمية وخدمات استشارية",
        "transit_comply_item3": "الحصول على التصاريح المتخصصة",
        "transit_comply_item4": "الامتثال للصحة والسلامة",
        "transit_comply_item5": "الالتزام باللوائح البيئية",
        
        "transit_duty_title": "تحسين الرسوم الجمركية",
        "transit_duty_desc": "نساعد في تقليل نفقات الرسوم من خلال استراتيجيات التحسين القانونية:",
        "transit_duty_item1": "تحليل التصنيف الجمركي",
        "transit_duty_item2": "الاستفادة من اتفاقيات التجارة الحرة",
        "transit_duty_item3": "حلول المستودعات الجمركية",
        "transit_duty_item4": "خدمات استرداد الرسوم واسترجاعها",
        "transit_duty_item5": "التخطيط الاستراتيجي للاستيراد",
        
        "transit_logistics_title": "لوجستيات العبور",
        "transit_logistics_desc": "توفر خدمات لوجستيات العبور لدينا حلولاً شاملة لنقل شحنتك بكفاءة عبر أفريقيا:",
        "transit_logistics_item1": "<strong>النقل متعدد الوسائط:</strong> تنسيق النقل البحري والجوي والسكك الحديدية والبري لحركة البضائع بسلاسة",
        "transit_logistics_item2": "<strong>تحسين المسارات:</strong> التخطيط الاستراتيجي لتحديد طرق النقل الأكثر كفاءة وفعالية من حيث التكلفة",
        "transit_logistics_item3": "<strong>إدارة عبور الحدود:</strong> التعامل الخبير مع عبور الحدود وإجراءات العبور",
        "transit_logistics_item4": "<strong>تتبع الشحنات:</strong> المراقبة في الوقت الفعلي وتحديثات الحالة لشحناتك",
        "transit_logistics_item5": "<strong>إدارة المخاطر:</strong> استراتيجيات شاملة للتخفيف من مخاطر العبور وضمان الأمان",
        
        "transit_process_title": "عملية لوجستيات العبور لدينا",
        "transit_process_step1": "تخطيط ما قبل العبور",
        "transit_process_step1_desc": "تخطيط شامل للمسارات، وإعداد الوثائق، وتحليل المتطلبات التنظيمية",
        "transit_process_step2": "المعالجة الجمركية",
        "transit_process_step2_desc": "تخليص جمركي فعال في المنشأ ونقاط العبور والوجهة",
        "transit_process_step3": "تنفيذ النقل",
        "transit_process_step3_desc": "حركة منسقة عبر وسائط نقل متعددة ومعابر حدودية",
        "transit_process_step4": "المراقبة والتدخل",
        "transit_process_step4_desc": "التتبع في الوقت الفعلي والحل الاستباقي للمشكلات أثناء العبور",
        "transit_process_step5": "التسليم والتوثيق",
        "transit_process_step5_desc": "تنسيق التسليم النهائي وإكمال التوثيق الشامل",
        
        "transit_regional_title": "الخبرة الإقليمية",
        "transit_regional_desc": "تتعزز خدمات العبور لدينا من خلال خبرتنا الإقليمية العميقة عبر أفريقيا:",
        "transit_regional_item1": "إجراءات ولوائح الجمارك في غرب أفريقيا",
        "transit_regional_item2": "بروتوكولات الاتحاد الجمركي لمجموعة شرق أفريقيا (EAC)",
        "transit_regional_item3": "اتفاقيات التجارة لمجموعة تنمية الجنوب الأفريقي (SADC)",
        "transit_regional_item4": "عمليات الحدود والموانئ في شمال أفريقيا",
        "transit_regional_item5": "تنفيذ منطقة التجارة الحرة القارية الأفريقية (AfCFTA)",
        "transit_regional_item6": "متطلبات الاستيراد/التصدير الخاصة بكل بلد",
        
        "transit_cta_title": "تحسين عمليات العبور الخاصة بك",
        "transit_cta_desc": "اتصل بفريق خدمات العبور لدينا لمناقشة كيف يمكننا تبسيط التخليص الجمركي ولوجستيات العبور الخاصة بك عبر أفريقيا.",
        
        // Personnel Provision - Basic Arabic translations
        "personnel_title": "خدمات توفير الأفراد",
        "personnel_subtitle": "الوصول إلى قباطنة وأفراد طاقم مؤهلين لضمان سير عملياتك البحرية بسلاسة",
        "personnel_categories_title": "الأفراد البحريين الذين نوفرهم",
        "personnel_officers": "الضباط",
        "personnel_deck": "طاقم السطح",
        "personnel_engine": "طاقم المحرك",
        "personnel_hospitality": "طاقم الضيافة",
        "personnel_specialized": "أفراد متخصصون",
        "personnel_benefits_title": "فوائد خدمات توفير الأفراد لدينا",
        "personnel_benefit_qualified": "أفراد مؤهلون",
        "personnel_benefit_response": "استجابة سريعة",
        "personnel_benefit_knowledge": "معرفة محلية",
        "personnel_benefit_flexibility": "المرونة",
        "recruitment_process_title": "عملية التوظيف لدينا",
        "personnel_cta_title": "هل تحتاج إلى أفراد بحريين؟",
        
        // Crew Management Page - complete Arabic translations
        "crew_service_title": "خدمات إدارة الطاقم",
        "crew_service_subtitle": "إدارة شاملة للطاقم تشمل التأشيرات، النقل، الإقامة، الرحلات الجوية، والمساعدة في الموانئ/المطارات",
        "crew_overview_title": "خدمات إدارة الطاقم لدينا",
        "crew_overview_p1": "في أفريكا لينك، ندرك أن الإدارة الفعالة والكفؤة للطاقم أمر ضروري لنجاح العمليات البحرية. تم تصميم خدماتنا الشاملة لإدارة الطاقم للتعامل مع جميع جوانب لوجستيات الطاقم، مما يضمن رعاية أفراد طاقمك بشكل جيد ويمكنهم من التركيز على مسؤولياتهم الأساسية.",
        "crew_overview_p2": "من معالجة التأشيرات والنقل إلى الإقامة والمساعدة في الموانئ، يوفر فريقنا المتخصص حلول إدارة طاقم متكاملة مصممة خصيصًا لتلبية احتياجاتك المحددة، مما يتيح لك التركيز على عملياتك الأساسية.",
        "crew_services_title": "خدماتنا الشاملة",
        "crew_visa_title": "خدمات التأشيرات",
        "crew_visa_desc": "نتعامل مع جميع جوانب معالجة التأشيرات لأفراد طاقمك، مما يضمن دخول وخروج سلس عبر البلدان الأفريقية:",
        "crew_visa_item1": "إعداد وتقديم طلبات التأشيرة",
        "crew_visa_item2": "التحقق من الوثائق وفحوصات الامتثال",
        "crew_visa_item3": "معالجة سريعة للتأشيرات لتغييرات الطاقم العاجلة",
        "crew_visa_item4": "تنسيق تصاريح العمل للإقامات الطويلة",
        "crew_visa_item5": "تمديدات وتعديلات التأشيرة حسب الحاجة",
        "crew_visa_item6": "الامتثال للوائح الهجرة المتغيرة",
        
        "crew_transport_title": "النقل",
        "crew_transport_desc": "ننسق جميع احتياجات النقل لطاقمك مع وضع الموثوقية والراحة كأولوياتنا:",
        "crew_transport_item1": "خدمات النقل من المطار بسيارات آمنة ومكيفة",
        "crew_transport_item2": "النقل من الميناء إلى مكان الإقامة",
        "crew_transport_item3": "خدمات نقل لتناوب الطاقم",
        "crew_transport_item4": "مساعدة النقل في حالات الطوارئ",
        "crew_transport_item5": "النقل إلى المرافق الطبية عند الحاجة",
        "crew_transport_item6": "دعم النقل على مدار الساعة للتغييرات غير المتوقعة",
        
        "crew_accom_title": "أماكن الإقامة",
        "crew_accom_desc": "نرتب أماكن إقامة ذات جودة تلبي احتياجات طاقمك وميزانية شركتك:",
        "crew_accom_item1": "اختيار وحجز الفنادق بالقرب من الموانئ والمطارات",
        "crew_accom_item2": "شقق مخدومة للإقامات الطويلة",
        "crew_accom_item3": "فحوصات الجودة لضمان معايير الإقامة",
        "crew_accom_item4": "تنسيق متطلبات النظام الغذائي الخاص",
        "crew_accom_item5": "إدارة الحجوزات الجماعية للطواقم الكبيرة",
        "crew_accom_item6": "ترتيبات حجز مرنة للجداول المتغيرة",
        
        "crew_flight_title": "ترتيبات الرحلات الجوية",
        "crew_flight_desc": "نتعامل مع جميع حجوزات الرحلات والخدمات اللوجستية لضمان تناوب سلس للطاقم:",
        "crew_flight_item1": "حجوزات رحلات اقتصادية على شركات طيران معتمدة",
        "crew_flight_item2": "المسار الأمثل لتقليل أوقات العبور",
        "crew_flight_item3": "ترتيبات المساعدة الخاصة عند الحاجة",
        "crew_flight_item4": "تنسيق الأمتعة الزائدة لمعدات الطاقم",
        "crew_flight_item5": "إدارة تغيير وإلغاء الرحلات الجوية",
        "crew_flight_item6": "ترتيبات رحلات الطوارئ خلال الاضطرابات",
        
        "crew_port_title": "المساعدة في الموانئ/المطارات",
        "crew_port_desc": "نقدم مساعدة شاملة في الموانئ والمطارات لضمان انتقالات سلسة:",
        "crew_port_item1": "خدمات الاستقبال في المطارات",
        "crew_port_item2": "تسريع إجراءات الهجرة عندما يكون متاحاً",
        "crew_port_item3": "المساعدة في التخليص الجمركي للأمتعة الشخصية",
        "crew_port_item4": "تنسيق الوصول إلى الميناء وتصاريح الأمن",
        "crew_port_item5": "التواصل مع سلطات الموانئ والمطارات",
        "crew_port_item6": "دعم الطاقم خلال التأخيرات غير المتوقعة",
        
        "crew_benefits_title": "فوائد خدمات إدارة الطاقم لدينا",
        "crew_benefit_time": "كفاءة الوقت",
        "crew_benefit_time_desc": "إن تعهيد إدارة الطاقم إلى أفريكا لينك يوفر وقتاً ثميناً لفريق العمليات الخاص بك، مما يتيح لهم التركيز على أنشطة العمل الأساسية بينما نتعامل نحن مع الخدمات اللوجستية.",
        "crew_benefit_cost": "تحسين التكلفة",
        "crew_benefit_cost_desc": "تتيح لنا شبكتنا الراسخة وعلاقاتنا القائمة على الحجم مع مقدمي الخدمات الحصول على أسعار تفضيلية، مما يساعد على تقليل تكاليف إدارة الطاقم الإجمالية.",
        "crew_benefit_compliance": "الامتثال التنظيمي",
        "crew_benefit_compliance_desc": "نواكب التغييرات في لوائح الهجرة والبحرية عبر البلدان الأفريقية، مما يضمن بقاء عمليات طاقمك متوافقة دائماً مع القوانين المحلية.",
        "crew_benefit_local": "الخبرة المحلية",
        "crew_benefit_local_desc": "فهمنا العميق للظروف والعادات والممارسات المحلية في البلدان الأفريقية يساعد في التنقل عبر الفروق الثقافية وضمان عمليات سلسة للطاقم.",
        
        "crew_process_title": "عملية إدارة الطاقم لدينا",
        "crew_process_step1": "تقييم المتطلبات",
        "crew_process_step1_desc": "نعمل معك لفهم احتياجاتك ومتطلباتك المحددة لإدارة الطاقم.",
        "crew_process_step2": "التخطيط والتنسيق",
        "crew_process_step2_desc": "نطور خطة مفصلة وننسق جميع الخدمات والترتيبات اللازمة.",
        "crew_process_step3": "التنفيذ",
        "crew_process_step3_desc": "ننفذ جميع الترتيبات، مما يضمن تناوبات سلسة للطاقم والخدمات اللوجستية.",
        "crew_process_step4": "المراقبة والدعم",
        "crew_process_step4_desc": "نقدم الدعم والمراقبة على مدار الساعة لمعالجة أي مشاكل أو تغييرات قد تنشأ.",
        "crew_process_step5": "إعداد التقارير والمراجعة",
        "crew_process_step5_desc": "نقدم تقارير شاملة وخدمات مراجعة لضمان التحسين المستمر.",
        
        "crew_cta_title": "هل تحتاج إلى خدمات إدارة الطاقم؟",
        "crew_cta_desc": "اتصل بنا لمناقشة كيف يمكن لخدمات إدارة الطاقم الشاملة لدينا دعم عملياتك البحرية.",

        // Shipping Support Page
        "shipping_title": "خدمات الدعم البحري",
        "shipping_subtitle": "خدمات شاملة للموانئ، قوارب السحب، أماكن الإقامة العائمة، وأدوات الفحص البحري",
        "shipping_services_title": "خدمات الدعم البحري لدينا",
        "shipping_overview_p1": "توفر أفريكا لينك مجموعة كاملة من خدمات الدعم البحري المصممة لتعزيز عملياتك البحرية في جميع أنحاء أفريقيا. من خدمات الموانئ الأساسية إلى أدوات الفحص البحري المتخصصة، نقدم حلولاً شاملة لمواجهة التحديات الفريدة للعمل في المياه الأفريقية.",
        "shipping_overview_p2": "يضمن فريقنا من المهنيين البحريين ذوي الخبرة معالجة كل جانب من جوانب احتياجاتك البحرية بكفاءة واحترافية، مما يتيح لعملياتك أن تعمل بسلاسة وأمان.",
        "shipping_support_title": "خدمات الدعم لدينا",

        "shipping_port_title": "خدمات الموانئ",
        "shipping_port_desc": "تشمل خدماتنا الشاملة للموانئ:",
        "shipping_port_item1": "مناولة البضائع والتستيف",
        "shipping_port_item2": "عمليات النقل من السفينة إلى الشاطئ",
        "shipping_port_item3": "تنسيق وكلاء الموانئ",
        "shipping_port_item4": "ترتيبات الرسو",
        "shipping_port_item5": "المساعدة في التخليص الجمركي",
        "shipping_port_item6": "تنسيق أمن الموانئ",

        "shipping_tug_title": "خدمات قوارب السحب",
        "shipping_tug_desc": "نقدم خدمات موثوقة لقوارب السحب من أجل:",
        "shipping_tug_item1": "رسو وفك رسو السفن",
        "shipping_tug_item2": "السحب في الميناء",
        "shipping_tug_item3": "إعادة تموضع السفن",
        "shipping_tug_item4": "عمليات الإنقاذ",
        "shipping_tug_item5": "الدعم البحري",
        "shipping_tug_item6": "الاستجابة للطوارئ",

        "shipping_accom_title": "أماكن الإقامة العائمة",
        "shipping_accom_desc": "تشمل حلول الإقامة العائمة لدينا:",
        "shipping_accom_item1": "سفن إقامة مجهزة بالكامل",
        "shipping_accom_item2": "أماكن إقامة مؤقتة للمشاريع البحرية",
        "shipping_accom_item3": "خدمات الطعام والضيافة",
        "shipping_accom_item4": "مرافق ترفيهية",
        "shipping_accom_item5": "خدمات الدعم الطبي",
        "shipping_accom_item6": "البنية التحتية للاتصالات",

        "shipping_inspect_title": "أدوات الفحص البحري",
        "shipping_inspect_desc": "نقدم أدوات وخدمات فحص بحري متقدمة تشمل:",
        "shipping_inspect_item1": "معدات فحص الهيكل",
        "shipping_inspect_item2": "طائرات بدون طيار للفحص تحت الماء",
        "shipping_inspect_item3": "معدات الاختبار غير المتلف",
        "shipping_inspect_item4": "أنظمة مراقبة الحالة",
        "shipping_inspect_item5": "موظفو فحص محترفون",
        "shipping_inspect_item6": "خدمات التوثيق وإعداد التقارير",

        "shipping_benefits_title": "مزايا خدمات الدعم البحري لدينا",
        "shipping_benefit_efficiency": "تحسين الكفاءة التشغيلية",
        "shipping_benefit_efficiency_desc": "تعمل خدمات الدعم الشاملة لدينا على تبسيط عملياتك البحرية، مما يقلل من وقت التعطل ويحسن الكفاءة العامة",
        "shipping_benefit_safety": "تعزيز السلامة",
        "shipping_benefit_safety_desc": "تساعد خدماتنا ومعداتنا المهنية في ضمان سلامة سفنك وطاقمك وشحنتك",
        "shipping_benefit_expertise": "خبرة محلية",
        "shipping_benefit_expertise_desc": "يساعد فهمنا العميق للموانئ واللوائح البحرية الأفريقية في التنقل عبر المتطلبات المحلية المعقدة",
        "shipping_benefit_cost": "حلول فعالة من حيث التكلفة",
        "shipping_benefit_cost_desc": "تساعد خدماتنا المتكاملة في تقليل التكاليف التشغيلية الإجمالية مع الحفاظ على معايير عالية",

        "shipping_cta_title": "هل تحتاج إلى دعم بحري؟",
        "shipping_cta_desc": "اتصل بفريقنا لمناقشة كيف يمكن لخدمات الدعم البحري لدينا تعزيز عملياتك البحرية في أفريقيا",
    }
};

// Current language (default to English)
let currentLanguage = 'en';

// Function to translate the page
function translatePage(lang) {
    // Update current language
    currentLanguage = lang;
    
    // Save language preference to localStorage
    localStorage.setItem('africalink_language', lang);
    
    // Update the language selector display
    document.querySelector('#languageDropdown').innerHTML = `<i class="bi bi-globe"></i> ${lang.toUpperCase()}`;
    
    // Mark the active language in the dropdown
    const languageItems = document.querySelectorAll('[data-lang]');
    languageItems.forEach(item => {
        if (item.getAttribute('data-lang') === lang) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Get translation object for selected language
    const translation = translations[lang];
    if (!translation) return; // If translation doesn't exist, exit
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            element.innerHTML = translation[key];
        }
    });
    
    // For elements that need attributes translated (like placeholders)
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const data = element.getAttribute('data-i18n-attr').split(',');
        const key = data[0];
        const attr = data[1];
        
        if (translation[key]) {
            element.setAttribute(attr, translation[key]);
        }
    });
    
    // Special handling for RTL languages like Arabic
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('rtl');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('rtl');
    }
}

// Initialize translation functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has previously selected a language
    const savedLanguage = localStorage.getItem('africalink_language');
    if (savedLanguage) {
        translatePage(savedLanguage);
    }
    
    // Add event listeners to language selector links
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });
}); 