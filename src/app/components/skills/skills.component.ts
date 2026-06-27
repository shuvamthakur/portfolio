import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['Java (Spring Boot)', 'Python', 'TypeScript', 'Angular', 'HTML/CSS', 'SQL', 'Shell', 'Scala']
    },
    {
      title: 'Backend, Distributed & Cloud',
      skills: ['RESTful APIs', 'Apache Spark', 'Kafka', 'Apache Airflow', 'AWS (RDS, S3, EKS)', 'Docker', 'Bamboo CI/CD']
    },
    {
      title: 'Databases',
      skills: ['MS SQL Server', 'Sybase', 'MongoDB', 'Oracle', 'MySQL', 'Presto / Trino']
    },
    {
      title: 'Machine Learning & Data Science',
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'HuggingFace', 'Pandas', 'NLP', 'Computer Vision']
    }
  ];
}