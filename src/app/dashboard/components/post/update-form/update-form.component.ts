import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from '../../../services/config.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit{
  updateForm: any;

  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private readonly fb: FormBuilder, private readonly configService: ConfigService) {
    
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.updateForm = this.fb.group({
      id:['', Validators.required],
      title: [''],
    });
  }

  onSubmit() {
    this.newItemEvent.emit({
      id: this.updateForm.get('id').value,
      title: this.updateForm.get('title').value,
    });
  }
}
