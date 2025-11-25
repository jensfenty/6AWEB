import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  message = "Data Binding Demonstration";
  imageUrl = "https://content.imageresizer.com/images/memes/War-Cat-thumbnail-url-88f6yf.jpg";
  w = 200;
  h = 200;
  altText = "A cute cat";
  textColor = "blue";
  isHighlighted = true;
  yourName = '';

  studentName = "Your name here";
  score = 95;

  imageUrl2 = "https://media.tenor.com/jR_2QY2XBCgAAAAM/m%C3%A8o-cam-%C4%91i%C3%AAu-vcc-m%C3%A8o-cam.gif";
  isDisabled = true;


  colSpanValue = 3;


  isPassing = true;


  boxColor = "purple";
  boxSize = "150px";

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
