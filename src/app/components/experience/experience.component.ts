import { Component } from '@angular/core';

export interface JobDetailSection {
  title: string;
  bullets: string[];
}

export interface Job {
  title: string;
  company: string;
  location: string;
  dates: string;
  intro?: string;
  bullets?: string[];
  sections?: JobDetailSection[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      title: 'Senior Associate L2 Engineer',
      company: 'Macquarie Global Services',
      location: '',
      dates: 'April 2025 – June 2026',
      intro: "Engineer on the firm's strategic credit-risk platform and surrounding ecosystem of microservices, owning critical applications that calculate counterparty exposure, credit limits, and excess positions across the global trading book.",
      sections: [
        {
          title: 'Core Delivery & Business Impact',
          bullets: [
            'Owns critical systems: Recognised as the technical subject-matter expert for the credit-risk platform\'s day-to-day operation; primary liaison with credit-risk business users on system calculations and data discrepancies.',
            'Stabilised production at scale: Resolved a portfolio of 245 critical tickets (defects, stories, incidents) across the credit-risk platform, the exposure database, the core deal-ingestion pipeline, and downstream batch jobs.',
            'Drove a division-wide data-model upgrade: Led the technical execution of a multi-month core data-model expansion initiative, orchestrating 8 deployment bundles across 100+ database tables and dozens of stored procedures.',
            'Infrastructure Modernization: Contributed to a global Sybase-to-Postgres replication migration and led the division-wide PKI certificate refresh across 12+ services.',
            'Technical Documentation: Author or contributor on 36+ internal Confluence knowledge-base pages spanning architecture, runbooks, and incident post-mortems read by engineers across the technology group.'
          ]
        },
        {
          title: 'Technical Deep Dives',
          bullets: [
            'Production Incident Resolution: Traced a calculation pipeline bug through a 17-step state inconsistency between two adjacent handlers, spanning five microservices and the underlying database.',
            'Data Warehouse Debugging: Root-caused a missing rating defect in the scoring application where Hibernate dirty-checking was silently overwriting a final-rating column for ~500 records in the analytics warehouse.',
            'Batch Ingestion Fixes: Resolved a duplicate data incident on a daily batch by tracing an upstream API failing to push to a downstream allocation table, producing a multi-ticket action plan to prevent recurrence.',
            'Engineering Contribution: Active contributor to 6+ Spring Boot microservices; logged 720+ commits across repositories; maintainer of an Angular microfrontend ecosystem comprising 12 micro-frontends.'
          ]
        }
      ]
    },
    {
      title: 'Associate Engineer',
      company: 'Macquarie Global Services',
      location: '',
      dates: 'November 2023 – March 2025',
      bullets: [
        'Backend development: Built and deployed enterprise-grade Spring Boot microservices to RESTful API standards. Delivered validation refactors, enhancements to reporting tables, and limit batch fixes.',
        'Full-stack & quality: Built dynamic Angular dashboards and enforced 90%+ JUnit code coverage with JaCoCo gating in Maven.',
        'DevOps & security: Owned CI/CD deployment workflows through Bamboo. Managed application security via SSL/p12 certificate management, Airflow-DAG truststores, and data-pipeline platform onboarding handled through Cyberark.'
      ]
    },
    {
      title: 'Intern',
      company: 'Macquarie Global Services',
      location: '',
      dates: 'January 2023 – October 2023',
      bullets: [
        'Full-Stack Collaboration: Collaborated with senior engineers to design and implement RESTful Spring Boot microservices, delivering production-ready backend code for complex financial modules.',
        'UI Integration: Developed responsive, user-friendly frontend interfaces using Angular, ensuring seamless integration with backend APIs for real-time risk data visualization.',
        'Automation & Agile: Supported CI/CD pipeline configurations using Bamboo, streamlining manual deployment processes. Actively participated in Agile sprint ceremonies, providing constructive code reviews and resolving critical bugs.'
      ]
    },
    {
      title: 'Intern (Remote)',
      company: 'Airtel Payments Bank',
      location: '',
      dates: 'June 2022 – August 2022',
      bullets: [
        'Payment Workflows: Engineered and optimized backend microservices in Java Spring Boot, contributing to secure and highly scalable payment-processing workflows.',
        'Portal Development: Developed dynamic, responsive user interfaces for the customer-facing banking portal utilizing Angular 8.',
        'API Integration: Integrated third-party and internal RESTful APIs across the frontend-backend boundary, ensuring strict real-time data consistency and high availability.'
      ]
    },
    {
      title: 'Intern',
      company: 'LIS',
      location: '',
      dates: 'August 2021 – November 2021',
      bullets: [
        'Data Pipeline & Scraping: Architected and deployed automated Python web-scraping scripts to harvest raw text data from diverse, unstructured web sources.',
        'Dataset Curation: Curated, cleaned, and pre-processed large-scale text datasets, building robust data pipelines designed specifically for downstream Natural Language Processing (NLP) model training.'
      ]
    },
    {
      title: 'Social Media & Graphics Design Intern',
      company: 'Rato Bangala Kitab',
      location: '',
      dates: 'June 2018 – January 2019',
      bullets: [
        'Design & Marketing: Designed high-impact, brand-aligned graphical content, including infographics and promotional posters, while managing regular website updates to drive online community engagement.',
        'Multimedia Production: Directed end-to-end multimedia production and cinematography for the highly successful RBK YouTube Poem Recital Series, handling both filming and post-production editing.'
      ]
    },
    {
      title: 'Web Designer Intern',
      company: 'Sofos Softwares Pvt. Ltd.',
      location: '',
      dates: 'December 2017 – January 2018',
      bullets: [
        'Frontend Development: Assisted in web design and frontend development, utilizing HTML, CSS, and JavaScript to build interactive and visually appealing web pages.',
        'UI/UX Improvement: Collaborated with the core development team to troubleshoot UI/UX issues, ensuring cross-browser compatibility and responsive design for client projects.'
      ]
    }
  ];
}