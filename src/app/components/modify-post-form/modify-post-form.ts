import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-modify-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './modify-post-form.html',
  styleUrl: './modify-post-form.css'
})

export class ModifyPostForm implements OnInit{
  formData = new FormGroup({
    postTitle: new FormControl("", {
      validators: [Validators.required, Validators.maxLength(50)]
    }),
    postContent: new FormControl("", {
      validators: [Validators.required, Validators.maxLength(400)]
    })
  })

  

  activatedRoute = inject(ActivatedRoute);


  constructor(private router: Router, private postService: PostService) {
    
  }

  ngOnInit(): void {
    let postId = this.activatedRoute.snapshot.paramMap.get("id")
    if (postId) {
      this.postService.gatherPostInfo(postId).subscribe({
        next: response => {
          this.formData.controls.postTitle.setValue(response.title)
          this.formData.controls.postContent.setValue(response.body)
        }
        , error: err => {
          console.error(err)
        }
      })
    }
  }

  submitForm(event: Event) {
    event.preventDefault();
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
    } else {
      console.log(this.formData.value)
      this.router.navigate(['/welcome'])
    }
  }

  returnToWelcomePage(){
    this.router.navigate(['/welcome'])
  }
}
