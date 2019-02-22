import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    name: string;
    email: string;
    message: string;

    constructor(public _MessageService: MessageService) {
    }

    ngOnInit() {
    }

    processForm(form) {
        console.log("Enviamos el formulario!");
        console.log(this.name);
        console.log(this.email);
        console.log(this.message);
        this._MessageService.sendMessage(form).subscribe(() => {
            console.log("Mensaje enviado!");
        });
    }
}
