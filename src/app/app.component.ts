import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  config = {
    'title':'',
    'task-type':'',
    // 'content':[],
    // 'url':''
  };

  types = [
    'blurb',
    'iframe',
    'quiz',
    'questionnaire',
  ];

  append(content){
    console.log(content);
    if(!this.config['content'])
      {this.config['content'] = []; this.config['content'].push(content)}
    else 
      this.config['content'].push(content);
  }

}
