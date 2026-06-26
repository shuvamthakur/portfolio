import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  jobs = [
    {
      title: 'Senior Associate L2 Engineer',
      company: 'Macquarie Global Services',
      location: 'Gurugram, Haryana',
      dates: 'April 2025 – June 2026',
      highlights: [
        'Recognised as the technical SME for the platform; resolved a portfolio of 245 critical tickets and authored 36+ knowledge-base pages.',
        'Led a division-wide data-model upgrade, orchestrating 8 deployment bundles across 100+ database tables.',
        'Drove a SQL Server RDS migration via Infrastructure-as-Code and a division-wide PKI certificate refresh.',
        'Logged 720+ commits to 6+ Spring Boot microservices and maintained an Angular microfrontend ecosystem comprising 12 micro-frontends.'
      ]
    },
    {
      title: 'Associate Engineer',
      company: 'Macquarie Global Services',
      location: 'Gurugram, Haryana',
      dates: 'November 2023 – March 2025',
      highlights: [
        'Engineered enterprise-grade Spring Boot RESTful APIs and dynamic Angular dashboards, enforcing 90%+ JUnit code coverage.',
        'Performed deep-dive analysis on stored procedures to identify bottlenecks and significantly improve data-retrieval speeds.',
        'Owned Bamboo CI/CD workflows, managing application security (Fortify, Black Duck) and SSL/p12 certificates via Cyberark.'
      ]
    }
    // Add Internships here...
  ];
}