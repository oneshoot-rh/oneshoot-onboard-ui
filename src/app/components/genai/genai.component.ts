import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-genai',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './genai.component.html',
  styleUrl: './genai.component.css'
})
export class GenaiComponent {
  userPrompt: string = '';
  aiResponse: string = ""

  generateAIResponse() {
    this.aiResponse = `AI-generated response for: "${this.userPrompt}"`;
  }
}
