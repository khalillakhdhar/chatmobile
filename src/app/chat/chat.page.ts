import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/classes/message';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages: Message[] = [];
  message=new Message();
  username:string=localStorage.getItem("username")|| '';
  constructor(private messageService: MessageService)
  {



  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
this.getMessages();
  }
  getMessages()
  {
    this.messageService.readMessages().subscribe((data:any)=>
    {
      this.messages=data;
      console.log("msg",this.messages)
    }

    )

  }
  send()
  {
    this.message.date=Date.now();
    this.message.sender=this.username;
    let msg=Object.assign({},this.message); // convert to JSON object from class message object
    this.messageService.createMessage(msg);
    this.message=new Message();
  }

  deconnexion()
  {
    localStorage.clear();
    window.location.replace("/folder")
  }

}
