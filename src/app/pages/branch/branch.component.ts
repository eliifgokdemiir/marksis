import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent {
  branches = [
    { name: 'Şube 1', manager: 'Ali Veli', revenue: 100000 },
    { name: 'Şube 2', manager: 'Ayşe Fatma', revenue: 150000 },
    { name: 'Şube 3', manager: 'Mehmet Yılmaz', revenue: 200000 },
    { name: 'Şube 4', manager: 'Zeynep Kaya', revenue: 180000 },
    // ... diğer şubeler ...
  ];
}
