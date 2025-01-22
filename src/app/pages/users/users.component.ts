import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

// Tablo verisi için interface
interface UserTableItem {
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  priority: 'low' | 'medium' | 'high' | 'critical' | 'moderate';
  budget: number;
  isActive: boolean;  // Yeni eklenen alan
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    TablerIconsModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];
  
  dataSource: UserTableItem[] = [
    {
      imagePath: 'assets/images/profile/user-1.jpg',
      uname: 'Sunil Joshi',
      position: 'Web Designer',
      productName: 'Elite Admin',
      priority: 'low',
      budget: 3.9,
      isActive: false
    },
    {
      imagePath: 'assets/images/profile/user-2.jpg',
      uname: 'Andrew McDownland',
      position: 'Project Manager',
      productName: 'Real Homes',
      priority: 'medium',
      budget: 24.5,
      isActive: true
    },
    {
      imagePath: 'assets/images/profile/user-3.jpg',
      uname: 'Christopher Jamil',
      position: 'Project Manager',
      productName: 'MedicalPro Theme',
      priority: 'high',
      budget: 12.8,
      isActive: true
    },
    {
      imagePath: 'assets/images/profile/user-4.jpg',
      uname: 'Nirav Joshi',
      position: 'Frontend Engineer',
      productName: 'Hosting Press HTML',
      priority: 'critical',
      budget: 2.4,
      isActive: true
    },
    {
      imagePath: 'assets/images/profile/user-5.jpg',
      uname: 'Micheal Doe',
      position: 'Backend Developer',
      productName: 'Helping Hands Theme',
      priority: 'moderate',
      budget: 9.3,
      isActive: true
    }
  ];

  constructor(private dialog: MatDialog) {}

  toggleUserStatus(element: UserTableItem, event: any) {
    element.isActive = event.checked;
    element.priority = element.isActive ? 'medium' : 'low';
    console.log(`${element.uname} kullanıcısının durumu: ${element.isActive ? 'Aktif' : 'Pasif'}`);
    // Burada API çağrısı yapılabilir
  }

  editUser(element: UserTableItem): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { ...element } // Spread operator ile kopya oluşturuyoruz
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Tablodaki veriyi güncelle
        const index = this.dataSource.findIndex(item => item === element);
        if (index !== -1) {
          this.dataSource[index] = { ...element, ...result };
          // Tabloyu yenilemek için referansı güncelle
          this.dataSource = [...this.dataSource];
        }
        console.log('Kullanıcı güncellendi:', result);
      }
    });
  }
}
