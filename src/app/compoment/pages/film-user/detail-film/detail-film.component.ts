import {Component, Inject, OnInit} from '@angular/core';
import {FilmService} from "../../../../service/film.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {Film} from "../../../../model/Film";
import {user} from "@angular/fire/auth";
import {CommentDTO} from "../../../../model/CommentDTO";
import {getNsPrefix} from "@angular/compiler";
import {PageEvent} from "@angular/material/paginator";
import {TokenService} from "../../../../service/token.service";
import {SignUpForm} from "../../../../model/SignUpForm";
import {LikeService} from "../../../../service/like.service";
import {Like} from "../../../../model/Like";
import {CommentService} from "../../../../service/comment.service";
import {get} from "@angular/fire/database";

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {
  // @ts-ignore
  film = new Film();
  form: any = {};
  // @ts-ignore
  likes?: Like;
  // @ts-ignore
  status = '';
  statusComment = '';
  newComment?: CommentDTO;
  count = 0;

  constructor(private filmService: FilmService,
              private avtRoute: ActivatedRoute,
              private likeService: LikeService,
              private tokenService: TokenService,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.avtRoute.paramMap.subscribe(idDetail => {
      // @ts-ignore
      const id = +idDetail.get('id');
      // console.log('idDetail-->', id)
      this.filmService.getFilmById(id).subscribe(data => {
        this.film = data;
        console.log('film--->', this.film)
      })
    })
  }

  getComment() {
    this.newComment = new CommentDTO(
      this.form.content,
      {id:this.film.user?.id},
      {id:this.film.id}
    )
    console.log('newComment--->',this.newComment);
    if (!this.tokenService.getToken()) {
      this.statusComment = 'Vui lòng đăng nhập để comment'
    }else{
      this.commentService.commentService(this.newComment).subscribe(data=>{
        console.log('dataComment--->', data)
        if (data.message='comment_ok'){
          this.statusComment='Bạn đã comment thành công';
          this.form.content ='';
          // @ts-ignore
          this.filmService.getFilmById(this.film.id).subscribe(data => {
            this.film = data;
            console.log('dataFilm-->', data)
          })
        }
      })
    }
  }

  newColor = false;

  toggleColor() {
    this.newColor = !this.newColor;
    console.log('newColor == ', this.newColor)
  }

  like() {
    this.toggleColor()
    this.likes = new Like(
      {id: this.film.user?.id},
      {id: this.film.id}
    )
    if (!this.tokenService.getToken()) {
      this.status = 'Vui lòng đăng nhập để like bộ phim này'
    } else {
      this.likeService.likeService(this.likes).subscribe(data => {
        console.log('dataLike--->', data)
        console.log('mess-->', data.message)
        if (data.message == 'unlike_ok') {
          this.status = 'Bạn đã unlike bộ phim'
        }
        if (data.message == 'like_ok') {
          this.status = 'Bạn đã like bộ phim'
        }
        // @ts-ignore
        this.filmService.getFilmById(this.film.id).subscribe(data => {
          this.film = data;
          console.log('dataFilm-->', data)
        })
      })
    }
    // @ts-ignore
  }

  protected readonly get = get;

  onTimeUpdate($event: Event) {
    // @ts-ignore
    // console.log($event.target.currentTime);
    if (this.count==0){
      // @ts-ignore
      if ($event.target.currentTime>3){
          // @ts-ignore
          this.filmService.increaseView(this.film.id).subscribe(data=>{
            console.log('view-->', data)
          })
          this.count ++;
        console.log('count--->', this.count)
      }
    }
  }
}


