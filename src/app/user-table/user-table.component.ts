import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user-table/models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
//   styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  users: User[] = [];
  columnDefs = [
    { headerName: 'User ID', field: 'userId', sortable: true },
    { headerName: 'Username', field: 'username', sortable: true },
    { headerName: 'Email', field: 'email', sortable: true },
    // Add other columns as needed
    { headerName: 'Edit', cellRenderer: 'editButton', width: 100 },
    { headerName: 'Delete', cellRenderer: 'deleteButton', width: 100 },
  ];
  frameworkComponents = {
    editButton: this.editButtonRenderer.bind(this),
    deleteButton: this.deleteButtonRenderer.bind(this),
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  editButtonRenderer(params: any): string {
    return `<button (click)="onEditClick(${params.data.userId})">Edit</button>`;
  }

  deleteButtonRenderer(params: any): string {
    return `<button (click)="onDeleteClick(${params.data.userId})">Delete</button>`;
  }

  onEditClick(userId: number): void {
    // Implement edit logic, e.g., open a dialog or navigate to edit page
    console.log('Edit clicked for user ID:', userId);
  }

  onDeleteClick(userId: number): void {
    // Implement delete logic, e.g., show confirmation dialog and delete user
    console.log('Delete clicked for user ID:', userId);
  }
}
