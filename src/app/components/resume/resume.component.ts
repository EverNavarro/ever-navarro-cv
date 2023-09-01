import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resume!: any;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getResume().subscribe(data => {
      this.resume = data;
    });
  }
}
