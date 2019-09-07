import { Component, OnInit} from '@angular/core';
import { keyList } from "./master-data";
import { KeyInfo } from "./types";

@Component({
  selector: 'the-root-my-brudda',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  keyList: ReadonlyArray<KeyInfo>;

  ngOnInit(): void {
    this.keyList = keyList;
  }
}
