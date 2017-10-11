import { Component } from '@angular/core';
import { AddAssignmentService } from './add-assignment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment;
  score;
  possible;
  rowpercent;
  assignmentsRows = [];
  performance;
 

constructor(private addAssignmentService: AddAssignmentService) {
  this.performance = this.addAssignmentService.overallPerformance;
}

  calcandadd() {
    this.assignmentsRows = this.addAssignmentService.getAssignmentsRowList(
      this.assignment,
      this.score,
      this.possible);
    }

  }