import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  tasktype = ['CONTENT', 'QUIZ', 'QUESTIONNAIRE'];
  config = {};
  pagetype=['blurb','iframe','external-link','vault'];

  task = { 'type':''};

  addPage(body: string){
    if(!this.config['content']){
      this.config['content'] = []; 
      this.appendPage(body);
    }else{
      if(!this.config['content'].includes(this.task)){
        this.appendPage(body)
      }else {
        alert("duplicate content detected");
      }
    } 
  }

  appendPage(body){
    if(!!body){
      this.task['body'] = body.replace(/'/g, "\'");
    }
    this.config['content'].push(this.task)
    this.task = { 'type':''};
  }

  clear(){
    this.config = {};
    this.task = { 'type':''};
  }
  
  GOAL = {
   content: [
      {
         type: 'blurb',
         body: 'Some rich <b>text</b> crap'
      },
      {
         type: 'iframe',
         url:  'https://vault.ever....'
      },
      {
         type: 'link',
         body: 'Some rich <b>text</b> crap',
         url:  'https://vault.ever....'
      }
   ]
}
}
