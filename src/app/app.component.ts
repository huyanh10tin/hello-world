import {Component} from '@angular/core';

interface FavoriteChangeEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };
  title = 'Agular app';

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite changed', eventArgs);
  }
}
