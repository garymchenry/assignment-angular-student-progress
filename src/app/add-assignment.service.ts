import { Injectable } from '@angular/core';
import { AssignmentsRow } from './assignments-row';
  
       
   @Injectable()
   export class AddAssignmentService {
     constructor() { }
      
     getAssignmentsRowList(assignment: string, score: number, possible: number): AssignmentsRow[] {
       
       let assignmentsRows: AssignmentsRow[];
       let newassignment = assignment;
       let newscore = score;
       let newpossible = possible;
       let rowpercent = newscore/newpossible;
           
       assignmentsRows = [];
   
       let assignmentsRow: AssignmentsRow;
   

   
         assignmentsRow = {
           assignment: assignment,
           score: score,
           possible: possible,
           rowpercent: rowpercent
         };

         assignmentsRows.push(assignmentsRow);
       }
       
       return assignmentsRows;
     
         
      
    





