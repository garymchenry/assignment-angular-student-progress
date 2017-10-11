import { Injectable } from '@angular/core';
import { AssignmentsRow } from './assignments-row';
  
       
   @Injectable()
   export class AddAssignmentService {
     constructor() { }
      
     finalTable: AssignmentsRow[] = [];
     overallPerformance = {pointspossible: 0, pointscored: 0, percentotal: 0};
     getAssignmentsRowList(assignment: string, score: number, possible: number): AssignmentsRow[] {
       
       let newassignment = assignment;
       let newscore = score;
       let newpossible = possible;
       let rowpercent = newscore/newpossible;
           
        
       let assignmentsRow: AssignmentsRow;
   

   
         assignmentsRow = {
           assignment: assignment,
           score: score,
           possible: possible,
           rowpercent: rowpercent
         };

         this.finalTable.push(assignmentsRow);
         this.overallPerformance.pointspossible += possible;
         this.overallPerformance.pointscored += score;
         this.overallPerformance.percentotal = this.overallPerformance.pointscored/this.overallPerformance.pointspossible;

         return this.finalTable;
       }
       
      
     
         
      
    




      }
