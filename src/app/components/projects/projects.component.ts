import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Early Detection of Alzheimer\'s Disease',
      tag: 'Deep Learning / NLP',
      description: 'Engineered a robust hybrid CNN + BiLSTM (2 layers) network with max-pooling to extract linguistic features from speech transcripts. Benchmarked custom architectures against pre-trained transformers (AlBERT), achieving a state-of-the-art 92% accuracy and an F1-macro of 0.92 for early-stage AD detection in Hindi.'
    },
    {
      title: 'Multimodal Transformer Adaptation',
      tag: 'Computer Vision / Social Computing',
      description: 'Designed task-specific multimodal frameworks utilizing a CLIP-ViT backbone specifically targeted for text-embedded images (memes). Developed a Co-Attention Ensemble model for Hate Speech Detection achieving an F1 score of 0.7929.'
    }
  ];
}